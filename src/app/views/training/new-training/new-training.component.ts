import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, finalize, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { UnsubscribeService } from 'src/app/services/shared/unsubscribe.service';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import * as NewTrainingHandler from '../../../handlers/new-training.handler';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { Exercise } from '../../../models/training/exercise.model';
import { NewTraining } from '../../../models/training/new-training/new-training.model';
import { NewTrainingService } from '../../../services/training/new-training.service';
import * as NewTrainingValidators from '../../../validators/new-training.validators';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
    providers: [UnsubscribeService],
})
export class NewTrainingComponent implements OnInit, OnDestroy {

    form: FormGroup;

    private _id: string;
    private editedDate: Date;

    private editTraining: NewTraining;
    private formTrainingState: NewTraining;

    private focusCounter: number = 0;

    isLoading: boolean = true;

    isError: boolean = false;

    editMode: boolean = false;

    isSubmitted: boolean = false;

    @ViewChild('bodyweightRef', {
        read: ElementRef,
    })
    set bodyweightInput(bodyweight: ElementRef){
        if(bodyweight && this.focusCounter === 0) {
            setTimeout(() => {
                (bodyweight.nativeElement as HTMLInputElement).focus();
                this.focusCounter++;
            });
        }
    }

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly pastTrainingService: PastTrainingsService,
        private readonly sharedService: SharedService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly route: ActivatedRoute,
    ) {}

    ngOnInit(): void {

        this.route.params.pipe(
            switchMap((params: Params) => {
                if(params['id']) {
                    this._id = params['id'] as string;
                    this.sharedService.pastTrainingId$$.next(this._id as string);
                    this.editMode = true;
                    return this.pastTrainingService.getPastTraining(this._id as string).pipe(
                        tap((training: NewTraining) => {
                            this.editedDate = training.updatedAt as Date;
                            this.editTraining = {
                                ...training as NewTraining,
                                editMode: true,
                            } as NewTraining;
                            this.newTrainingService.updateTrainingData(this.editTraining as NewTraining);
                        }),
                        catchError(_ => {
                            this.isError = true;
                            this.isLoading = false;
                            return of(null);
                        }),
                    );
                }
                else {
                    return of(null).pipe(
                        switchMap(_ =>
                            forkJoin([
                                this.newTrainingService.allExercisesChanged$.pipe(
                                    take(1),
                                ),
                                this.newTrainingService.currentTrainingChanged$.pipe(
                                    take(1),
                                ),
                            ]).pipe(
                                tap((data: [Exercise[], NewTraining]) => {
                                    const currentTrainingState: NewTraining = ((data[1] as NewTraining));
                                    if(currentTrainingState) {
                                        if(currentTrainingState.editMode && !this.editMode) {
                                            this.newTrainingService.updateTrainingState(
                                                data[0] as Exercise[],
                                                0,
                                                true,
                                                currentTrainingState.userId as string,
                                            );
                                        }
                                    }
                                }),
                                takeUntil(this.unsubscribeService),
                            ),
                        ),
                    );
                }
            }),
            tap(_ => this.sharedService.editingTraining$$.next(this.editMode as boolean)),
            switchMap(_ =>
                this.newTrainingService.getExercises().pipe(
                    catchError(_ => {
                        this.isError = true;
                        return of(null);
                    }),
                    switchMap(_ => this.formInit()),
                    finalize(() => this.isLoading = false),
                )),
            takeUntil(this.unsubscribeService),
        ).subscribe();

    }

    ngOnDestroy(): void {
        this.sharedService.editingTraining$$.next(false);
    }

    onBodyweightChange(bodyweight: string): void {
        this.newTrainingService.addBodyweightToStorage(bodyweight);
    }

    tryAgain(): void {
        this.isLoading = true;
        if(this.editTraining) {
            this.pastTrainingService.getPastTraining(this._id as string).pipe(
                catchError(_ => {
                    this.isError = true;
                    return of(null);
                }),
                finalize(() => this.isLoading = false),
            ).subscribe((training: NewTraining) => {
                if(training) {
                    this.editedDate = training.updatedAt as Date;
                    this.editTraining = {
                        ...training as NewTraining,
                        editMode: this.editMode,
                    } as NewTraining;
                    this.newTrainingService.updateTrainingData(this.editTraining as NewTraining);
                    this.isError = false;
                }
            });
        }
        else {
            this.newTrainingService.getExercises().pipe(
                catchError(_ => {
                    this.isError = true;
                    return of(null);
                }),
                tap((response: AuthResponseData) => {
                    if(response) {
                        this.isError = false;
                    }
                }),
                finalize(() => this.isLoading = false),
                switchMap(() => this.formInit()),
            ).subscribe();
        }
    }

    onSubmit(): void {
        this.isSubmitted = true;
        if(!this.form.valid) {
            return;
        }
        this.isLoading = true;

        /* this.gatherAllFormData().pipe(
            switchMap(_ => {
                if(this.editMode) {
                    return this.newTrainingService.updateTraining(
                        this.formTrainingState as NewTraining,
                        this._id as string,
                    ).pipe(
                        tap((response: GeneralResponseData) => {
                            this.snackBar.open(this.translateService.instant(response.message as string), null, {
                                duration: 3000,
                                panelClass: 'app__snackbar',
                            });
                        }),
                    );
                }
                else {
                    return this.newTrainingService.addTraining(this.formTrainingState as NewTraining).pipe(
                        tap((response: GeneralResponseData) => {
                            this.snackBar.open(this.translateService.instant(response.message as string), null, {
                                duration: 3000,
                                panelClass: 'app__snackbar',
                            });
                        }),
                    );
                }
            }),
            finalize(() => this.isLoading = false),
        ).subscribe(); */
    }

    private formInit(): Observable<NewTraining> {
        return this.newTrainingService.currentTrainingChanged$.pipe(
            take(1),
            tap((data: NewTraining) => {
                this.form = new FormGroup({
                    'bodyweight': new FormControl(
                        NewTrainingHandler.fillBodyweight(
                            data.bodyweight,
                            this.editTraining ? this.editTraining.bodyweight : null,
                        ),
                        [NewTrainingValidators.isBroj(), Validators.min(30), Validators.max(300)],
                    ),
                    'exercise': new FormControl(data as NewTraining),
                });
            }),
            takeUntil(this.unsubscribeService),
        );
    }

    /* private gatherAllFormData(): Observable<Exercise[]> {
        return this.newTrainingService.currentTrainingChanged$.pipe(
            take(1),
            switchMap((currentTrainingState: NewTraining) =>
                this.newTrainingService.allExercisesChanged$.pipe(
                    take(1),
                    tap((allExercises: Exercise[]) => {
                        const exerciseFormData: SingleExercise[] = [];
                        const alreadyUsedExercises: string[] = [];

                        this.getExercises().forEach((exercise: AbstractControl, indexExercise: number) => {
                            const splittedTotal: string[] = (this.getTotal(indexExercise).value as string).split(' ');
                            exerciseFormData.push({
                                formArrayIndex: +this.getFormArrayIndex(indexExercise).value as number,
                                exerciseName: this.getExerciseName(indexExercise).value as string,
                                sets: [],
                                total: +(splittedTotal[0] as string),
                                disabledTooltip: this.getDisabledTooltip(indexExercise).value as boolean,
                                availableExercises: allExercises.filter((exercise: Exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1),
                            });
                            alreadyUsedExercises.push(this.getExerciseName(indexExercise).value as string);

                            const formSetData: Set[] = [];
                            (this.getSets(indexExercise).value as Set[]).forEach((set: Set) => {
                                formSetData.push(set);
                            });
                            exerciseFormData[indexExercise].sets = formSetData;
                        });

                        this.formTrainingState = {
                            createdAt: this.editMode ? this.editedDate : new Date(new Date().setHours(new Date().getHours() + 2)),
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
    } */

    get bodyweight(): FormControl {
        return this.form.get('bodyweight') as FormControl;
    }

    get isBodyweightError(): boolean {
        return this.bodyweight.errors ? true : false;
    }

}
