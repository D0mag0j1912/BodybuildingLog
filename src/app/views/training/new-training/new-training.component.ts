import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, delay, finalize, map, startWith, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import { DialogComponent } from 'src/app/views/shared/dialog/dialog.component';
import { Exercise } from '../../../models/training/exercise.model';
import { NewTraining, Set, SingleExercise } from '../../../models/training/new-training.model';
import { GeneralResponseData } from 'src/app/models/general-response.model';
import { NewTrainingService } from '../../../services/training/new-training.service';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import * as NewTrainingValidators from '../../../validators/new-training.validators';
import * as NewTrainingHandler from '../../../handlers/new-training.handler';

const MAX_EXERCISE_NAME_WIDTH: number = 181;

interface SetStateChanged {
    indexExercise: number;
    indexSet: number;
}

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

    private readonly subs$$: Subject<void> = new Subject<void>();
    private readonly indexChanged$$: Subject<SetStateChanged> = new Subject<SetStateChanged>();
    private readonly exerciseStateChanged$$: Subject<void> = new Subject<void>();

    form: FormGroup;

    private _id: string;
    private editedDate: Date;

    readonly exercises$: Observable<Exercise[]>;
    private editTraining: NewTraining;
    private formTrainingState: NewTraining;

    private initialWeight: number = 0;
    private focusCounter: number = 0;

    isLoading: boolean = true;

    isError: boolean = false;

    editMode: boolean = false;

    isSubmitted: boolean = false;

    exerciseChanged: boolean = false;

    @ViewChild('bodyweightRef', {
        read: ElementRef
    })
    set bodyweightInput(bodyweight: ElementRef){
        if(bodyweight && this.focusCounter === 0){
            setTimeout(() => {
                (bodyweight.nativeElement as HTMLInputElement).focus();
                this.focusCounter++;
            });
        }
    }

    @ViewChild('exerciseNameChoice', {
        read: MatSelect
    })
    set exerciseNameChoice(exerciseName: MatSelect){
        if(exerciseName){
            this.newTrainingService.currentTrainingChanged$.pipe(
                take(1),
                switchMap((currentTrainingState: NewTraining) => {
                    return this.setExerciseNameTooltip(
                        exerciseName,
                        null,
                        currentTrainingState
                    );
                }),
                takeUntil(this.subs$$)
            ).subscribe();
        }
    }

    readonly isAddingExercisesAllowed$: Observable<[SingleExercise[], Exercise[]]> =
        this.exerciseStateChanged$$.pipe(
            startWith(undefined as void),
            switchMap(_ => {
                return forkJoin([
                    this.newTrainingService.currentTrainingChanged$.pipe(
                        take(1),
                        map((currentTrainingState: NewTraining) => currentTrainingState.exercise)
                    ),
                    this.newTrainingService.allExercisesChanged$.pipe(
                        take(1)
                    )
                ]);
            })
        );

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly pastTrainingService: PastTrainingsService,
        private readonly sharedService: SharedService,
        private readonly translateService: TranslateService,
        private readonly dialog: MatDialog,
        private readonly snackBar: MatSnackBar,
        private readonly route: ActivatedRoute,
    ) {}

    ngOnInit(): void {

        this.route.params.pipe(
            switchMap((params: Params) => {
                if(params['id']){
                    this._id = params['id'];
                    this.sharedService.pastTrainingId$$.next(this._id);
                    this.editMode = true;
                    return this.pastTrainingService.getPastTraining(this._id).pipe(
                        tap((training: NewTraining) => {
                            this.editedDate = training.updatedAt;
                            this.editTraining = {
                                ...training,
                                editMode: this.editMode
                            };
                            this.newTrainingService.saveData(this.editTraining);
                        }),
                        catchError(_ => {
                            this.isError = true;
                            this.isLoading = false;
                            return of(null);
                        })
                    );
                }
                else {
                    return of(null).pipe(
                        switchMap(_ => {
                            return forkJoin([
                                this.newTrainingService.allExercisesChanged$.pipe(
                                    take(1)
                                ),
                                this.newTrainingService.currentTrainingChanged$.pipe(
                                    take(1)
                                )
                            ]).pipe(
                                tap((data: [Exercise[], NewTraining]) => {
                                    const currentTrainingState: NewTraining = ((data[1] as NewTraining));
                                    if(currentTrainingState){
                                        if(currentTrainingState.editMode && !this.editMode){
                                            this.newTrainingService.updateTrainingState(
                                                data[0] as Exercise[],
                                                0,
                                                true,
                                                currentTrainingState.userId
                                            );
                                        }
                                    }
                                })
                            );
                        })
                    );
                }
            }),
            tap(_ => this.sharedService.editingTraining$$.next(this.editMode)),
            switchMap(_ => {
                return this.newTrainingService.getExercises().pipe(
                    catchError(_ => {
                        this.isError = true;
                        /* this.isLoading = false; */
                        return of(null);
                    }),
                    switchMap(_ => {
                        return this.formInit();
                    }),
                    finalize(() => this.isLoading = false)
                );
            }),
            takeUntil(this.subs$$)
        ).subscribe();

        this.indexChanged$$.pipe(
            debounceTime(1000),
            tap((indexes: SetStateChanged) => {
                if(this.getWeightLifted(indexes.indexExercise, indexes.indexSet).valid
                    && this.getReps(indexes.indexExercise, indexes.indexSet).valid
                    && this.getWeightLifted(indexes.indexExercise, indexes.indexSet).value
                    && this.getReps(indexes.indexExercise, indexes.indexSet).value
                    && this.getExerciseName(indexes.indexExercise).value){
                        let total: number = 0;
                        this.getSets(indexes.indexExercise).forEach((el: AbstractControl) => {
                            total = total + (+el.get('weightLifted').value * +el.get('reps').value);
                        });
                        let trainingData: {
                            formArrayIndex: number;
                            exerciseName: string;
                            setNumber: number;
                            weightLifted: number;
                            reps: number;
                            total: number;
                        } = {
                            formArrayIndex: +this.getFormArrayIndex(indexes.indexExercise).value,
                            exerciseName: this.getExerciseName(indexes.indexExercise).value,
                            setNumber: +this.getSetNumber(indexes.indexExercise, indexes.indexSet).value,
                            weightLifted: +this.getWeightLifted(indexes.indexExercise, indexes.indexSet).value,
                            reps: +this.getReps(indexes.indexExercise, indexes.indexSet).value,
                            total: total
                        };
                        this.newTrainingService.setsChanged(trainingData);
                        this.getTotal(indexes.indexExercise).patchValue(total.toString()+ ' kg');
                }
            }),
            takeUntil(this.subs$$)
        ).subscribe();
    }

    ngOnDestroy(): void {
        this.subs$$.next();
        this.subs$$.complete();
        this.sharedService.editingTraining$$.next(false);
    }

    isAddingExercisesDisabled(
        currentTrainingStateLength: number,
        allExercisesLength: number
    ): Observable<string> {
        if(currentTrainingStateLength >= allExercisesLength) {
            return this.translateService.stream('training.new_training.errors.exercises_not_available');
        }
        else {
            if(this.getExercises().length > 0){
                if(!this.getExerciseName(this.getExercises().length - 1)?.value){
                    return this.translateService.stream('training.new_training.errors.pick_current_exercise');
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

    onBodyweightChange(bodyweight: string): void {
        this.newTrainingService.addBodyweightToStorage(bodyweight);
    }

    onExerciseNameChange(
        $event: MatSelectChange,
        indexExercise: number,
        element: MatSelect
    ): void {
        if($event.value){
            if(this.getSets(indexExercise).length > 0){
                this.getWeightLifted(indexExercise, 0).enable();
                this.getReps(indexExercise, 0).enable();
            }
            this.exerciseChanged = !this.exerciseChanged;
            this.setExerciseNameTooltip(
                element,
                indexExercise
            ).subscribe(_ => {
                this.newTrainingService.updateExerciseChoices(
                    $event.value,
                    indexExercise,
                    this.getDisabledTooltip(indexExercise).value
                );
            });
        }
    }

    onChangeSets(
        indexExercise: number,
        indexSet: number
    ): void {
        this.indexChanged$$.next({
            indexExercise: indexExercise,
            indexSet: indexSet
        } as SetStateChanged);
    }

    getExercises(): AbstractControl[] {
        return (<FormArray>this.form.get('exercise')).controls;
    }

    addExercise(
        isExerciseName?: boolean,
        clicked?: MouseEvent
    ): void {
        (<FormArray>this.form.get('exercise')).push(
            new FormGroup({
                'formArrayIndex': new FormControl(clicked ? this.getExercises().length : null,
                    [Validators.required]),
                'name': new FormControl(null, [Validators.required]),
                'sets': new FormArray([
                    new FormGroup({
                        'setNumber': new FormControl(1, [Validators.required]),
                        'weightLifted': new FormControl({value: null, disabled: !isExerciseName}, [
                            Validators.required,
                            NewTrainingValidators.isBroj(),
                            NewTrainingValidators.isPositiveNumber()
                        ]),
                        'reps': new FormControl({value: null, disabled: !isExerciseName}, [
                            Validators.required,
                            Validators.pattern('^[0-9]*$')
                        ])
                    })
                ]),
                'total': new FormControl(this.initialWeight.toString() + ' kg',
                    [Validators.required]),
                'disabledTooltip': new FormControl(true, [Validators.required])
            }, {
                validators: [NewTrainingValidators.atLeastOneSet(), NewTrainingValidators.allSetsFilled()]
            })
        );

        if(clicked){
            this.newTrainingService.addNewExercise(
                this.getAlreadyUsedExercises(),
                this.getExercises().length - 1
            );
            this.exerciseStateChanged$$.next();
        }
    }

    deleteExercise(
        indexExercise: number,
        exerciseName: string
    ): void {
        if(exerciseName){
            let dialogRef = this.dialog.open(DialogComponent, {
                data: {
                    brisanje: {
                        message$: this.translateService.stream('training.new_training.delete_exercise_prompt'),
                        exerciseName: exerciseName
                    }
                }
            });
            dialogRef.afterClosed().pipe(
                switchMap((response: boolean) => {
                    if(response){
                        return this.newTrainingService.currentTrainingChanged$.pipe(
                            take(1),
                            switchMap((currentTrainingState: NewTraining) => {
                                return this.newTrainingService.deleteExercise(
                                    indexExercise,
                                    currentTrainingState,
                                    exerciseName
                                ).pipe(
                                    tap((data: [NewTraining, Exercise[]]) => {
                                        if(data[1]) {
                                            this.exerciseChanged = !this.exerciseChanged;
                                            (<FormArray>this.form.get('exercise')).removeAt(indexExercise);
                                            this.newTrainingService.pushToAvailableExercises(
                                                data[0],
                                                data[1]
                                            );
                                        }
                                    })
                                );
                            })
                        );
                    }
                    else{
                        return of(null);
                    }
                }),
                takeUntil(this.subs$$)
            ).subscribe();
        }
        else {
            this.newTrainingService.currentTrainingChanged$.pipe(
                take(1),
                switchMap((currentTrainingState: NewTraining) => {
                    return this.newTrainingService.deleteExercise(indexExercise, currentTrainingState).pipe(
                        tap(() => (<FormArray>this.form.get('exercise')).removeAt(indexExercise))
                    );
                }),
                takeUntil(this.subs$$)
            ).subscribe();
        }
        this.exerciseStateChanged$$.next();
    }

    getSets(indexExercise: number): AbstractControl[] {
        return (<FormArray>(<FormArray>this.form.get('exercise')).at(indexExercise).get('sets')).controls;
    }

    addSet(indexExercise: number): void {
        (<FormArray>(<FormGroup>(<FormArray>this.form.get('exercise')).at(indexExercise)).get('sets')).push(
            new FormGroup({
                'setNumber': new FormControl(this.getSets(indexExercise).length + 1, [Validators.required]),
                'weightLifted': new FormControl(null,[
                    NewTrainingValidators.isBroj(),
                    NewTrainingValidators.isPositiveNumber()
                ]),
                'reps': new FormControl(null, [
                    Validators.pattern('^[0-9]*$')
                ])
            }, {
                validators: [NewTrainingValidators.bothValuesRequired()]
            })
        );
    }

    deleteSet(
        indexExercise: number,
        indexSet: number
    ): void {
        (<FormArray>(<FormGroup>(<FormArray>this.form.get('exercise')).at(indexExercise)).get('sets')).removeAt(indexSet);
        let total: number = 0;

        this.getSets(indexExercise).forEach((el) => {
            total = total + (+el.get('weightLifted').value * +el.get('reps').value);
        });
        this.getTotal(indexExercise).patchValue(total.toString() + ' kg');
        this.newTrainingService.deleteSet(
            indexExercise,
            indexSet,
            total
        );
    }

    tryAgain(): void {
        this.isLoading = true;
        this.isError = false;
        if(!this.editTraining){
            this.pastTrainingService.getPastTraining(this._id).pipe(
                tap((training: NewTraining) => {
                    this.editedDate = training.updatedAt;
                    this.editTraining = {
                        ...training,
                        editMode: this.editMode
                    };
                    this.newTrainingService.saveData(this.editTraining);
                }),
                catchError(_ => {
                    this.isError = true;
                    this.isLoading = false;
                    return of(null);
                })
            ).subscribe();
        }
        else {
            this.newTrainingService.getExercises().pipe(
                catchError(_ => {
                    this.isError = true;
                    this.isLoading = false;
                    return of(null);
                }),
                switchMap(() => {
                    return this.formInit();
                })
            );
        }
    }

    private formInit(): Observable<NewTraining> {
        return this.newTrainingService.currentTrainingChanged$.pipe(
            take(1),
            tap((data: NewTraining) => {
                this.form = new FormGroup({
                    'bodyweight': new FormControl(
                        NewTrainingHandler.fillBodyweight(
                            data.bodyweight,
                            this.editTraining ? this.editTraining.bodyweight : null
                        ),
                        [NewTrainingValidators.isBroj(), Validators.min(30), Validators.max(300)]
                    ),
                    'exercise': new FormArray([])
                });
                (<FormArray>this.form.get('exercise')).patchValue(this.formArrayInit(this.editTraining ? this.editTraining : data));
            }),
            takeUntil(this.subs$$)
        );
    }

    private formArrayInit(data: NewTraining): AbstractControl[] {
        data.exercise.forEach(
            (exercise: SingleExercise, indexExercise: number) => {
            let isExerciseName: boolean = exercise.exerciseName ? true : false;
            this.addExercise(isExerciseName);
            this.getFormArrayIndex(indexExercise).patchValue(indexExercise);

            if(exercise.exerciseName) {
                this.getExerciseName(indexExercise).patchValue(exercise.exerciseName);
                if(exercise.sets.length > 0){
                    exercise.sets.forEach(
                        (set: Set, indexSet: number) => {
                        this.getWeightLifted(indexExercise, indexSet).patchValue(set.weightLifted);
                        this.getReps(indexExercise, indexSet).patchValue(set.reps);
                        if(indexSet < exercise.sets.length - 1){
                            this.addSet(indexExercise);
                        }
                    });
                    this.getTotal(indexExercise).patchValue(exercise.total + ' kg');
                    this.getDisabledTooltip(indexExercise).patchValue(exercise.disabledTooltip);
                }
            }
        });
        return this.getExercises();
    }

    onSubmit(): void {
        this.isSubmitted = true;
        if(!this.form.valid){
            return;
        }
        this.isLoading = true;

        this.gatherAllFormData().pipe(
            switchMap(_ => {
                if(this.editMode){
                    return this.newTrainingService.updateTraining(
                        this.formTrainingState,
                        this._id
                    ).pipe(
                        tap((response: GeneralResponseData) => {
                            this.snackBar.open(this.translateService.instant(response.message), null, {
                                duration: 3000,
                                panelClass: 'app__snackbar'
                            });
                        }),
                        finalize(() => this.isLoading = false)
                    );
                }
                else {
                    return this.newTrainingService.addTraining(this.formTrainingState).pipe(
                        tap((response: GeneralResponseData) => {
                            this.snackBar.open(this.translateService.instant(response.message), null, {
                                duration: 3000,
                                panelClass: 'app__snackbar'
                            });
                        }),
                        finalize(() => this.isLoading = false)
                    );
                }
            }),
            tap(() => this.isLoading = false)
        ).subscribe();
    }

    private gatherAllFormData(): Observable<Exercise[]> {
        return this.newTrainingService.currentTrainingChanged$.pipe(
            take(1),
            switchMap((currentTrainingState: NewTraining) => {
                return this.newTrainingService.allExercisesChanged$.pipe(
                    take(1),
                    tap((allExercises: Exercise[]) => {
                        let exerciseFormData: SingleExercise[] = [];
                        let alreadyUsedExercises: string[] = [];

                        this.getExercises().forEach((exercise: AbstractControl, indexExercise: number) => {
                            let splittedTotal: string[] = (this.getTotal(indexExercise).value as string).split(' ');

                            exerciseFormData.push({
                                formArrayIndex: +this.getFormArrayIndex(indexExercise).value,
                                exerciseName: this.getExerciseName(indexExercise).value,
                                sets: [],
                                total: +splittedTotal[0],
                                disabledTooltip: this.getDisabledTooltip(indexExercise).value,
                                availableExercises: allExercises.filter((exercise: Exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1),
                            });
                            alreadyUsedExercises.push(this.getExerciseName(indexExercise).value);
                            let formSetData: Set[] = [];

                            this.getSets(indexExercise).forEach((set: AbstractControl, indexSet: number) => {
                                formSetData.push({
                                    setNumber: +this.getSetNumber(indexExercise, indexSet).value,
                                    weightLifted: +this.getWeightLifted(indexExercise, indexSet).value,
                                    reps: +this.getReps(indexExercise, indexSet).value
                                });
                            });
                            exerciseFormData[indexExercise].sets = formSetData;
                        });

                        this.formTrainingState = {
                            createdAt: this.editMode ? this.editedDate : new Date(new Date().setHours(new Date().getHours() + 2)),
                            exercise: exerciseFormData,
                            bodyweight: this.bodyweight.value ? +this.bodyweight.value : null,
                            editMode: this.editMode,
                            userId: currentTrainingState.userId
                        };
                    })
                );
            })
        );
    }

    private setExerciseNameTooltip(
        element: MatSelect,
        indexExercise?: number,
        currentTrainingState?: NewTraining
    ): Observable<void> {
        return of(null).pipe(
            delay(0),
            tap(_ => {
                if(currentTrainingState){
                    currentTrainingState.exercise.forEach((value: SingleExercise, index: number) => {
                        this.getDisabledTooltip(index).patchValue(value.disabledTooltip);
                    });
                }
                else {
                    const width: number = ((element._elementRef.nativeElement as HTMLParagraphElement).querySelector('.mat-select-value-text') as HTMLSpanElement)?.offsetWidth;

                    if(width > MAX_EXERCISE_NAME_WIDTH){
                        this.getDisabledTooltip(indexExercise ? indexExercise : 0).patchValue(false);
                    }
                    else {
                        this.getDisabledTooltip(indexExercise ? indexExercise : 0).patchValue(true);
                    }
                }
            })
        );
    }

    get bodyweight(): FormControl {
        return this.form.get('bodyweight') as FormControl;
    }

    getFormArrayIndex(indexExercise: number): AbstractControl {
        return (<FormArray>this.form.get('exercise')).at(indexExercise).get('formArrayIndex');
    }

    getExerciseName(indexExercise: number): AbstractControl {
        return (<FormArray>this.form.get('exercise')).at(indexExercise)?.get('name');
    }

    getSetNumber(
        indexExercise: number,
        indexSet: number
    ): AbstractControl {
        return (<FormArray>(<FormArray>this.form.get('exercise')).at(indexExercise).get('sets')).at(indexSet).get('setNumber');
    }

    getWeightLifted(
        indexExercise: number,
        indexSet: number
    ) : AbstractControl {
        return (<FormArray>(<FormArray>this.form.get('exercise')).at(indexExercise).get('sets')).at(indexSet).get('weightLifted');
    }

    getReps(
        indexExercise: number,
        indexSet: number
    ) : AbstractControl {
        return (<FormArray>(<FormArray>this.form.get('exercise')).at(indexExercise).get('sets')).at(indexSet).get('reps');
    }

    getTotal(indexExercise: number): AbstractControl {
        return (<FormArray>this.form.get('exercise')).at(indexExercise).get('total');
    }

    getDisabledTooltip(indexExercise: number): AbstractControl {
        return (<FormArray>this.form.get('exercise')).at(indexExercise).get('disabledTooltip');
    }

    getAlreadyUsedExercises(): string[] {
        let alreadyUsedExercises: string[] = [];
        for(const exercise of this.getExercises()){
            if(exercise.get('name').value){
                alreadyUsedExercises.push(exercise.get('name').value);
            }
        }
        return alreadyUsedExercises as string[];
    }

}
