import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, forkJoin, Observable, of, Subject } from 'rxjs';
import { delay, finalize, map, startWith, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { GeneralResponseData } from 'src/app/models/general-response.model';
import { SNACK_BAR_DURATION } from '../../../../constants/snack-bar-duration.const';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { FormErrorStateMatcher } from '../../../../helpers/form-error-state-matcher.helper';
import { WeightFormat } from '../../../../models/preferences.model';
import { Exercise } from '../../../../models/training/exercise.model';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { createInitialSet, SetFormValidationErrors, SetStateChanged, SetTrainingData } from '../../../../models/training/shared/set.model';
import { Set } from '../../../../models/training/shared/set.model';
import { SingleExercise } from '../../../../models/training/shared/single-exercise.model';
import { FormSingleExerciseData } from '../../../../models/training/shared/single-exercise.model';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { NewTrainingService } from '../../../../services/training/new-training.service';
import * as SingleExerciseValidators from '../../../../validators/training/single-exercise.validators';
import { EditData } from '../../../../views/training/new-training/new-training.component';
import { DeleteExerciseDialogData, DialogComponent, DialogData } from '../../dialog/dialog.component';

const INITIAL_WEIGHT: number = 0;
const MAX_EXERCISE_NAME_WIDTH: number = 181;
const WEIGHT_FORMAT: WeightFormat = 'kg';

@Component({
    selector: 'app-single-exercise',
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
    readonly exercises$: Observable<Exercise[]>;

    form: FormArray = new FormArray([]);
    setErrors: SetFormValidationErrors[] = [];
    formErrorStateMatcher: FormErrorStateMatcher = new FormErrorStateMatcher();

    private formTrainingState: NewTraining;

    exerciseChanged: boolean = false;

    onTouched: () => void;

    @Input()
    editData: EditData | null;

    @Input()
    bodyweight: AbstractControl | null;

    @Input()
    isLoading: boolean = false;

    @Input()
    editMode: boolean = false;

    @ViewChild('exerciseNameChoice', {
        read: MatSelect,
    })
    set exerciseNameChoice(exerciseName: MatSelect) {
        if (exerciseName) {
            this.newTrainingService.currentTrainingChanged$.pipe(
                take(1),
                switchMap((currentTrainingState: NewTraining) =>
                    this.setExerciseNameTooltip(
                        exerciseName as MatSelect,
                        null,
                        currentTrainingState as NewTraining,
                    )),
                takeUntil(this.unsubscribeService),
            ).subscribe();
        }
    }

    readonly isAddingExercisesAllowed$: Observable<[SingleExercise[], Exercise[]]> =
        this.exerciseStateChanged$$.pipe(
            startWith(undefined as void),
            switchMap(_ =>
                forkJoin([
                    this.newTrainingService.currentTrainingChanged$.pipe(
                        take(1),
                        map((currentTrainingState: NewTraining) => currentTrainingState.exercise),
                    ),
                    this.newTrainingService.allExercisesChanged$.pipe(
                        take(1),
                    ),
                ]),
            ),
            takeUntil(this.unsubscribeService),
        );

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly translateService: TranslateService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly dialog: MatDialog,
        private readonly snackBar: MatSnackBar,
    ) {
        this.form.setValidators([SingleExerciseValidators.checkDuplicateExerciseName()]);
        this.form.updateValueAndValidity();
    }

    writeValue(data: NewTraining): void {
        if (data.exercise.length > 0) {
            (data.exercise as SingleExercise[]).forEach((exercise: SingleExercise, indexExercise: number) => {
                this.addExercise();
                if (exercise.exerciseName){
                    this.accessFormField('name', indexExercise).patchValue(exercise.exerciseName as string);
                    this.accessFormField('sets', indexExercise).patchValue(exercise.sets as Set[]);
                    this.accessFormField('total', indexExercise).patchValue(exercise.total ? exercise.total.toString() + ` ${WEIGHT_FORMAT}` : `0 ${WEIGHT_FORMAT}`);
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
        $event: MatSelectChange,
        indexExercise: number,
        element: MatSelect,
    ): void {
        if ($event.value) {
            this.exerciseChanged = !this.exerciseChanged;
            this.exerciseStateChanged$$.next();
            this.setExerciseNameTooltip(
                element as MatSelect,
                indexExercise as number,
            ).subscribe(_ => {
                this.newTrainingService.updateExerciseChoices(
                    $event.value as string,
                    indexExercise as number,
                    this.accessFormField('disabledTooltip', indexExercise).value as boolean,
                );
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    addExercise(clicked?: MouseEvent): void {
        this.form.push(new FormGroup({
            'name': new FormControl(null, [Validators.required]),
            'sets': new FormControl(createInitialSet()),
            'total': new FormControl(INITIAL_WEIGHT.toString() + ` ${WEIGHT_FORMAT}`, [Validators.required]),
            'disabledTooltip': new FormControl(true, [Validators.required]),
        }));

        if (clicked) {
            this.newTrainingService.addNewExercise(this.getAlreadyUsedExercises() as string[]);
            this.exerciseStateChanged$$.next();
        }
    }

    deleteExercise(
        indexExercise: number,
        exerciseName: string,
    ): void {
        if (exerciseName) {
            const dialogRef = this.dialog.open(DialogComponent, {
                data: {
                    isError: false,
                    deleteExercise: {
                        message$: this.translateService.stream('training.new_training.delete_exercise_prompt'),
                        exerciseName: exerciseName,
                    } as DeleteExerciseDialogData,
                } as DialogData,
            });
            dialogRef.afterClosed().pipe(
                switchMap((response: boolean) => {
                    if (response) {
                        return this.newTrainingService.currentTrainingChanged$.pipe(
                            take(1),
                            switchMap((currentTrainingState: NewTraining) =>
                                this.newTrainingService.deleteExercise(
                                    currentTrainingState as NewTraining,
                                    exerciseName as string,
                                ),
                            ),
                        );
                    }
                    else {
                        return of(null);
                    }
                }),
                finalize(() => {
                    this.exerciseStateChanged$$.next();
                    this.changeDetectorRef.markForCheck();
                }),
                takeUntil(this.unsubscribeService),
            ).subscribe((data: [NewTraining, Exercise[]]) => {
                if (data) {
                    this.exerciseChanged = !this.exerciseChanged;
                    this.form.removeAt(indexExercise);
                    this.newTrainingService.pushToAvailableExercises(
                        data[0] as NewTraining,
                        data[1] as Exercise[],
                    );
                }
            });
        }
        else {
            this.newTrainingService.currentTrainingChanged$.pipe(
                take(1),
                switchMap((currentTrainingState: NewTraining) =>
                    this.newTrainingService.deleteExercise(
                        currentTrainingState as NewTraining,
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
                    //TODO: fixati
                    const updatedTraining: NewTraining = this.newTrainingService.setsChanged(trainingData as SetTrainingData);
                    this.accessFormField('total', $event.indexExercise).patchValue($event.newTotal.toString()+ ` ${WEIGHT_FORMAT}`);
            }
            else {
                this.accessFormField('total', $event.indexExercise).patchValue(`0 ${WEIGHT_FORMAT}`);
            }
        });
    }

    deleteSet($event: Partial<SetStateChanged>): void {
        this.accessFormField('total', $event.indexExercise).patchValue($event.newTotal.toString() + ` ${WEIGHT_FORMAT}`);
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
        return this.form.at(indexExercise).get(formField);
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
                else if (this.setErrors.includes('firstSetNotEntered') && !this.setErrors.includes('firstSetNotValid')) {
                    return this.translateService.stream('training.new_training.errors.first_set_required');
                }
                else if (this.setErrors.includes('firstSetNotValid')) {
                    return this.translateService.stream('training.new_training.errors.first_set_invalid');
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
                || this.setErrors.includes('firstSetNotEntered')
                || this.setErrors.includes('firstSetNotValid');
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

        /* this.gatherAllFormData().pipe(
            switchMap(_ => {
                if (this.editMode) {
                    return this.newTrainingService.updateTraining(
                        this.formTrainingState as NewTraining,
                        this.editData._id as string,
                    );
                }
                else {
                    return this.newTrainingService.addTraining(this.formTrainingState as NewTraining);
                }
            }),
            finalize(() => {
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe((response: GeneralResponseData) => {
            this.snackBar.open(this.translateService.instant(response.message as string), null, {
                duration: SNACK_BAR_DURATION.GENERAL,
                panelClass: 'app__snackbar',
            });
        }); */
    }

    private gatherAllFormData(): Observable<Exercise[]> {
        return this.newTrainingService.currentTrainingChanged$.pipe(
            take(1),
            switchMap((currentTrainingState: NewTraining) =>
                this.newTrainingService.allExercisesChanged$.pipe(
                    take(1),
                    tap((allExercises: Exercise[]) => {
                        const exerciseFormData: SingleExercise[] = [];
                        const alreadyUsedExercises: string[] = [];

                        this.getExercises().forEach((exercise: AbstractControl, indexExercise: number) => {
                            const splittedTotal: string[] = (this.accessFormField('total', indexExercise).value as string).split(' ');
                            exerciseFormData.push({
                                exerciseName: this.accessFormField('name', indexExercise).value as string,
                                sets: [],
                                total: +(splittedTotal[0] as string),
                                disabledTooltip: this.accessFormField('disabledTooltip', indexExercise).value as boolean,
                                availableExercises: allExercises.filter((exercise: Exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1),
                            });
                            alreadyUsedExercises.push(this.accessFormField('name', indexExercise).value as string);

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

                        this.formTrainingState = {
                            createdAt: this.editMode ? this.editData.editedDate : new Date(),
                            exercise: exerciseFormData as SingleExercise[],
                            bodyweight: this.bodyweight.value ? +this.bodyweight.value as number : null,
                            editMode: this.editMode as boolean,
                            userId: currentTrainingState.userId as string,
                        } as NewTraining;
                    }),
                ),
            ),
            takeUntil(this.unsubscribeService),
        );
    }

    private setExerciseNameTooltip(
        element: MatSelect,
        indexExercise?: number,
        currentTrainingState?: NewTraining,
    ): Observable<void> {
        return of(null).pipe(
            delay(0),
            tap(_ => {
                if (currentTrainingState) {
                    currentTrainingState.exercise.forEach((value: SingleExercise, index: number) => {
                        this.accessFormField('disabledTooltip', index).patchValue(value.disabledTooltip as boolean);
                    });
                }
                else {
                    const width: number = ((element._elementRef.nativeElement as HTMLParagraphElement).querySelector('.mat-select-value-text') as HTMLSpanElement)?.offsetWidth;

                    if (width > MAX_EXERCISE_NAME_WIDTH) {
                        this.accessFormField('disabledTooltip', indexExercise ? indexExercise : 0).patchValue(false);
                    }
                    else {
                        this.accessFormField('disabledTooltip', indexExercise ? indexExercise : 0).patchValue(true);
                    }
                }
            }),
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
