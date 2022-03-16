import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IonSelect, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, EMPTY, forkJoin, from, Observable, of, Subject } from 'rxjs';
import { finalize, map, startWith, switchMap, take, takeUntil } from 'rxjs/operators';
import { MESSAGE_DURATION } from '../../../../constants/message-duration.const';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { GeneralResponseData } from '../../../../models/general-response.model';
import { DEFAULT_WEIGHT_FORMAT } from '../../../../models/preferences.model';
import { Exercise } from '../../../../models/training/exercise.model';
import { EditNewTrainingData, EMPTY_TRAINING_EDIT } from '../../../../models/training/new-training/empty-training.model';
import { Training } from '../../../../models/training/new-training/new-training.model';
import { createInitialSet, SetFormValidationErrors, SetStateChanged, SetTrainingData } from '../../../../models/training/shared/set.model';
import { Set } from '../../../../models/training/shared/set.model';
import { SingleExercise } from '../../../../models/training/shared/single-exercise.model';
import { FormSingleExerciseData } from '../../../../models/training/shared/single-exercise.model';
import { RoundTotalWeightPipe } from '../../../../pipes/training/new-training/round-total-weight/round-total-weight.pipe';
import { ToastControllerService } from '../../../../services/shared/toast-controller.service';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { NewTrainingService } from '../../../../services/training/new-training.service';
import * as SingleExerciseValidators from '../../../../validators/training/single-exercise.validators';
import { DeleteExerciseDialogData, DialogComponent, DialogData } from '../../dialog/dialog.component';
import { DialogRoles } from '../../../shared/dialog/dialog.component';

const INITIAL_WEIGHT = 0;

@Component({
    selector: 'bl-single-exercise',
    templateUrl: './single-exercise.component.html',
    styleUrls: ['./single-exercise.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        getControlValueAccessor(SingleExerciseComponent),
        UnsubscribeService,
    ],
})
export class SingleExerciseComponent implements ControlValueAccessor {

    readonly exerciseStateChanged$$: Subject<void> = new Subject<void>();
    readonly isSubmitted$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    readonly exercises$: Observable<Exercise[]> | undefined = undefined;

    readonly form: FormArray = new FormArray([]);
    setErrors: SetFormValidationErrors[] = [];

    exerciseChanged = false;

    onTouched: () => void;

    @Input()
    editData: EditNewTrainingData = EMPTY_TRAINING_EDIT;

    @Input()
    bodyweight: AbstractControl | null;

    @Input()
    isLoading = false;

    @Input()
    editMode = false;

    readonly currentExerciseState$: Observable<[SingleExercise[], Exercise[]]> =
        this.exerciseStateChanged$$.pipe(
            startWith(undefined as void),
            switchMap(_ =>
                forkJoin([
                    this.newTrainingService.currentTrainingChanged$
                        .pipe(
                            take(1),
                            map((currentTrainingState: Training) => currentTrainingState.exercise),
                        ),
                        this.newTrainingService.allExercisesChanged$.pipe(
                            take(1),
                        ),
                ]),
            ),
        );

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly translateService: TranslateService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly toastControllerService: ToastControllerService,
        private readonly modalController: ModalController,
        private readonly roundTotalWeightPipe: RoundTotalWeightPipe,
    ) {
        this.form.setValidators([SingleExerciseValidators.checkDuplicateExerciseName(), SingleExerciseValidators.checkExerciseNumber()]);
        this.form.updateValueAndValidity();
    }

    writeValue(data: Training): void {
        if (data.exercise.length > 0) {
            (data.exercise as SingleExercise[]).forEach((exercise: SingleExercise, indexExercise: number) => {
                this.addExercise();
                if (exercise.exerciseName) {
                    this.accessFormField('name', indexExercise).patchValue(exercise.exerciseName as string);
                    this.accessFormField('sets', indexExercise).patchValue(exercise.sets as Set[]);
                    this.accessFormField('total', indexExercise).patchValue(exercise.total ? this.roundTotalWeightPipe.transform(exercise.total) : `0 ${DEFAULT_WEIGHT_FORMAT}`);
                    this.accessFormField('disabledTooltip', indexExercise).patchValue(exercise.disabledTooltip as boolean);
                }
            });
        }
        else {
            this.addExercise();
        }
    }

    registerOnChange(fn: (formValue: Partial<SingleExercise[]>) => void): void {
        this.form.valueChanges.pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe(fn);
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    onExerciseNameChange(
        indexExercise: number,
        element: IonSelect,
    ): void {
        if (element?.value) {
            this.newTrainingService.updateExerciseChoices(
                element.value,
                indexExercise,
                this.accessFormField('disabledTooltip', indexExercise).value as boolean,
            );
            this.exerciseChanged = !this.exerciseChanged;
            this.exerciseStateChanged$$.next();
            this.changeDetectorRef.markForCheck();
        }
    }

    addExercise(clicked?: MouseEvent): void {
        this.form.push(new FormGroup({
            'name': new FormControl(null, [Validators.required]),
            'sets': new FormControl(createInitialSet()),
            'total': new FormControl(this.roundTotalWeightPipe.transform(INITIAL_WEIGHT), [Validators.required]),
            'disabledTooltip': new FormControl(true, [Validators.required]),
        }));

        if (clicked) {
            this.newTrainingService.addNewExercise(this.getAlreadyUsedExercises() as string[]);
            this.exerciseStateChanged$$.next();
        }
    }

    async deleteExercise(
        indexExercise: number,
        exerciseName: string,
    ): Promise<void> {
        if (exerciseName) {
            const modal = await this.modalController.create({
                component: DialogComponent,
                componentProps: {
                    isError: false,
                    deleteExercise: {
                        message$: this.translateService.stream('training.new_training.delete_exercise_prompt'),
                        exerciseName: exerciseName,
                    } as DeleteExerciseDialogData,
                } as DialogData,
                keyboardClose: true,
                swipeToClose: true,
            });
            await modal.present();
            from(modal.onDidDismiss())
                .pipe(
                    switchMap((response: OverlayEventDetail<boolean>) => {
                        if (response.role === DialogRoles.DELETE_EXERCISE) {
                            return this.newTrainingService.currentTrainingChanged$
                                .pipe(
                                    take(1),
                                    switchMap((currentTrainingState: Training) =>
                                        this.newTrainingService.deleteExercise(
                                            currentTrainingState as Training,
                                            exerciseName as string,
                                        ),
                                    ),
                                );
                        }
                        else {
                            return EMPTY;
                        }
                    }),
                    finalize(() => {
                        this.exerciseStateChanged$$.next();
                        this.changeDetectorRef.markForCheck();
                    }),
                    takeUntil(this.unsubscribeService),
                ).subscribe((data: [Training, Exercise[]]) => {
                    this.exerciseChanged = !this.exerciseChanged;
                    this.form.removeAt(indexExercise);
                    this.newTrainingService.pushToAvailableExercises(
                        data[0] as Training,
                        data[1] as Exercise[],
                    );
                });
        }
        else {
            this.newTrainingService.currentTrainingChanged$.pipe(
                take(1),
                switchMap((currentTrainingState: Training) =>
                    this.newTrainingService.deleteExercise(
                        currentTrainingState as Training,
                        null,
                        indexExercise,
                    ),
                ),
                finalize(() => this.exerciseStateChanged$$.next()),
                takeUntil(this.unsubscribeService),
            ).subscribe(_ => this.form.removeAt(indexExercise));
        }
    }

    onChangeSets($event: SetStateChanged): void {
        of(null).pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe(_ => {
            if ($event.isWeightLiftedValid
                && $event.isRepsValid
                && this.accessFormField('name', $event.indexExercise).value) {
                    const trainingData: SetTrainingData = {
                        exerciseName: this.accessFormField('name', $event.indexExercise).value as string,
                        setNumber: $event.newSet.setNumber as number,
                        weightLifted: $event.newSet.weightLifted as number,
                        reps: $event.newSet.reps as number,
                        total: $event.newTotal as number,
                    };

                    this.newTrainingService.setsChanged(trainingData as SetTrainingData);
                    this.accessFormField('total', $event.indexExercise).patchValue(this.roundTotalWeightPipe.transform($event.newTotal));
            }
            else {
                this.accessFormField('total', $event.indexExercise).patchValue(this.roundTotalWeightPipe.transform(0));
            }
        });
    }

    deleteSet($event: Partial<SetStateChanged>): void {
        this.accessFormField('total', $event.indexExercise).patchValue(this.roundTotalWeightPipe.transform($event.newTotal));
        this.newTrainingService.deleteSet(
            $event.indexExercise as number,
            $event.indexSet as number,
            $event.newTotal as number,
        );
    }

    getExercises(): AbstractControl[] {
        return (this.form as FormArray).controls;
    }

    accessFormField(
        formField: keyof FormSingleExerciseData,
        indexExercise: number,
    ): AbstractControl {
        return this.form.at(indexExercise)?.get(formField);
    }

    onSetFormChange($event: SetFormValidationErrors[]): void {
        this.setErrors = $event;
        this.changeDetectorRef.markForCheck();
    }

    showAddExerciseTooltip(
        currentTrainingStateLength: number,
        allExercisesLength: number,
    ): Observable<string> {
        if (currentTrainingStateLength >= allExercisesLength) {
            return this.translateService.stream('training.new_training.errors.no_more_exercises_available');
        }
        else {
            if (this.getExercises().length > 0) {
                if (!this.accessFormField('name', this.getExercises().length - 1)?.value) {
                    return this.translateService.stream('training.new_training.errors.pick_current_exercise');
                }
                else if (this.setErrors.includes('setNotEntered') && !this.setErrors.includes('setNotValid')) {
                    return this.translateService.stream('training.new_training.errors.set_required');
                }
                else if (this.setErrors.includes('setNotValid')) {
                    return this.translateService.stream('training.new_training.errors.set_invalid');
                }
                else {
                    return of('');
                }
            }
            else {
                return of('');
            }
        }
    }

    isAddingExercisesDisabled(
        currentExercisesLength: number,
        allExercisesLength: number,
    ): boolean {
        if (this.getExercises().length > 0) {
            return (currentExercisesLength >= allExercisesLength)
                || ((!this.accessFormField('name', this.getExercises().length - 1)?.value) && this.getExercises().length > 0)
                || this.setErrors.includes('setNotEntered')
                || this.setErrors.includes('setNotValid');
        }
        else {
            return false;
        }
    }

    onSubmit(): void {
        this.isSubmitted$$.next(true);
        if (!this.form.valid || this.setErrors.length > 0) {
            return;
        }
        this.isLoading = true;

        this.gatherAllFormData().pipe(
            switchMap((apiNewTraining: Training) => {
                if (this.editMode) {
                    return this.newTrainingService.updateTraining(
                        apiNewTraining,
                        this.editData.editTraining?._id,
                    );
                }
                else {
                    return this.newTrainingService.addTraining(apiNewTraining);
                }
            }),
            finalize(() => {
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe(async (response: GeneralResponseData) => {
            await this.toastControllerService.displayToast({
                message: this.translateService.instant(response.Message),
                duration: MESSAGE_DURATION.GENERAL,
                color: 'primary',
            });
        });
    }

    private gatherAllFormData(): Observable<Training> {
        return this.newTrainingService.currentTrainingChanged$.pipe(
            take(1),
            map((currentTrainingState: Training) => {
                const exerciseFormData: SingleExercise[] = [];

                this.getExercises().forEach((_exercise: AbstractControl, indexExercise: number) => {
                    const splittedTotal: string[] = (this.accessFormField('total', indexExercise).value as string).split(' ');
                    exerciseFormData.push({
                        exerciseName: this.accessFormField('name', indexExercise).value as string,
                        sets: [],
                        total: +(splittedTotal[0] as string),
                        disabledTooltip: this.accessFormField('disabledTooltip', indexExercise).value as boolean,
                        availableExercises: (currentTrainingState.exercise as SingleExercise[])[indexExercise]?.availableExercises || [],
                    });

                    const formSetData: Set[] = [];
                    (this.accessFormField('sets', indexExercise).value as Set[]).forEach((set: Set) => {
                        const apiSet: Set = {
                            setNumber: +set.setNumber as number,
                            weightLifted: +set.weightLifted as number,
                            reps: +set.reps as number,
                        };
                        formSetData.push(apiSet);
                    });
                    exerciseFormData[indexExercise].sets = formSetData;
                });

                return {
                    createdAt: this.editMode ? this.editData.editedDate : new Date(),
                    exercise: exerciseFormData as SingleExercise[],
                    bodyweight: this.bodyweight.value ? +this.bodyweight.value as number : null,
                    editMode: this.editMode as boolean,
                    userId: currentTrainingState.userId as string,
                } as Training;
            }),
            takeUntil(this.unsubscribeService),
        );
    }

    private getAlreadyUsedExercises(): string[] {
        const alreadyUsedExercises: string[] = [];
        for (const exercise of this.getExercises()) {
            if (exercise.get('name').value) {
                alreadyUsedExercises.push(exercise.get('name').value as string);
            }
        }
        return alreadyUsedExercises as string[];
    }
}
