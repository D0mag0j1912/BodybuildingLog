import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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

export type EditData = {
    _id?: string;
    editedDate?: Date;
    editTraining?: NewTraining;
};

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
    providers: [UnsubscribeService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTrainingComponent implements OnInit, OnDestroy {

    form: FormGroup;

    editData: EditData = {
        _id: '',
        editedDate: null,
        editTraining: null,
    };

    private focusCounter: number = 0;

    isLoading: boolean = true;

    isError: boolean = false;

    editMode: boolean = false;

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
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {

        this.route.params.pipe(
            switchMap((params: Params) => {
                if(params['id']) {
                    this.editData._id = params['id'] as string;
                    this.sharedService.pastTrainingId$$.next(this.editData._id as string);
                    this.editMode = true;
                    return this.pastTrainingService.getPastTraining(this.editData._id as string).pipe(
                        tap((training: NewTraining) => {
                            this.editData.editedDate = training.updatedAt as Date;
                            this.editData.editTraining = {
                                ...training as NewTraining,
                                editMode: true,
                            } as NewTraining;
                            this.newTrainingService.updateTrainingData(this.editData.editTraining as NewTraining);
                        }),
                        catchError(_ => {
                            this.isError = true;
                            return of(null);
                        }),
                        finalize(() => {
                            this.isLoading = false;
                            this.changeDetectorRef.markForCheck();
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
                    finalize(() => {
                        this.isLoading = false;
                        this.changeDetectorRef.markForCheck();
                    }),
                ),
            ),
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
        if(this.editData.editTraining as NewTraining) {
            this.pastTrainingService.getPastTraining(this.editData._id as string).pipe(
                catchError(_ => {
                    this.isError = true;
                    return of(null);
                }),
                finalize(() => {
                    this.isLoading = false;
                    this.changeDetectorRef.markForCheck();
                }),
            ).subscribe((training: NewTraining) => {
                if(training) {
                    this.editData.editedDate = training.updatedAt as Date;
                    this.editData.editTraining = {
                        ...training as NewTraining,
                        editMode: this.editMode,
                    } as NewTraining;
                    this.newTrainingService.updateTrainingData(this.editData.editTraining as NewTraining);
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
                switchMap(() => this.formInit()),
                finalize(() => {
                    this.isLoading = false;
                    this.changeDetectorRef.markForCheck();
                }),
            ).subscribe();
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
                            this.editData?.editTraining ? this.editData.editTraining.bodyweight : null,
                        ),
                        [NewTrainingValidators.isBroj(), Validators.min(30), Validators.max(300)],
                    ),
                    'exercise': new FormControl(data as NewTraining),
                });
            }),
            takeUntil(this.unsubscribeService),
        );
    }

    get bodyweight(): FormControl {
        return this.form.get('bodyweight') as FormControl;
    }

}
