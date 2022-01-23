import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, finalize, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { UnsubscribeService } from 'src/app/services/shared/unsubscribe.service';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import { SPINNER_SIZE } from '../../../constants/spinner-size.const';
import * as NewTrainingHandler from '../../../handlers/new-training.handler';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { TrainingData } from '../../../models/common/interfaces/common.model';
import { Exercise } from '../../../models/training/exercise.model';
import { Training } from '../../../models/training/new-training/new-training.model';
import { NewTrainingService } from '../../../services/training/new-training.service';
import * as CommonValidators from '../../../validators/shared/common.validators';

export type EditData = {
    _id?: string;
    editedDate?: Date;
    editTraining?: Training;
};

@Component({
    selector: 'bl-new-training',
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
    set bodyweightInput(bodyweight: ElementRef) {
        if (bodyweight && this.focusCounter === 0) {
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

    get spinnerSize(): number {
        return SPINNER_SIZE;
    }

    ngOnInit(): void {

        this.route.params.pipe(
            switchMap((params: Params) => {
                if (params['id']) {
                    this.editData._id = params['id'];
                    this.sharedService.pastTrainingId$$.next(this.editData._id);
                    this.editMode = true;
                    return this.pastTrainingService.getPastTraining(this.editData._id)
                        .pipe(
                            tap((response: TrainingData<Training>) => {
                                this.editData = {
                                    editedDate: response?.Value?.updatedAt ?? new Date(),
                                    editTraining: {
                                        ...response?.Value,
                                        editMode: true,
                                    },
                                };
                                this.newTrainingService.updateTrainingData(this.editData.editTraining);
                            }),
                            mapStreamData(),
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
                                tap((data: [Exercise[], Training]) => {
                                    const currentTrainingState: Training = ((data[1] as Training));
                                    if (currentTrainingState) {
                                        if (currentTrainingState.editMode && !this.editMode) {
                                            this.newTrainingService.updateTrainingState(
                                                data[0] as Exercise[],
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
            tap(_ => this.sharedService.editingTraining$$.next(this.editMode)),
            switchMap(_ =>
                this.newTrainingService.getExercises().pipe(
                    mapStreamData(),
                    switchMap(_ => this.formInit()),
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
        if (this.editData.editTraining) {
            this.pastTrainingService.getPastTraining(this.editData._id)
                .pipe(
                    mapStreamData(),
            ).subscribe((response: TrainingData<Training>) => {
                this.editData = {
                    editedDate: response?.Value?.updatedAt ?? new Date(),
                    editTraining: {
                        ...response?.Value,
                        editMode: this.editMode,
                    },
                };
                this.newTrainingService.updateTrainingData(this.editData.editTraining);
            });
        }
        else {
            this.newTrainingService.getExercises().pipe(
                mapStreamData(),
                switchMap(() => this.formInit()),
            ).subscribe();
        }
    }

    private formInit(): Observable<Training> {
        return this.newTrainingService.currentTrainingChanged$.pipe(
            take(1),
            tap((data: Training) => {
                this.form = new FormGroup({
                    'bodyweight': new FormControl(
                        NewTrainingHandler.fillBodyweight(
                            data.bodyweight,
                            this.editData?.editTraining ? this.editData.editTraining.bodyweight : null,
                        ),
                        [CommonValidators.isBroj(), Validators.min(30), Validators.max(300)],
                    ),
                    'exercise': new FormControl(data),
                });
            }),
            takeUntil(this.unsubscribeService),
        );
    }

    get bodyweight(): FormControl {
        return this.form.get('bodyweight') as FormControl;
    }

}
