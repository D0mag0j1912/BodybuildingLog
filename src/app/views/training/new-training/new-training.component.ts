import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import { SPINNER_SIZE } from '../../../constants/spinner-size.const';
import * as NewTrainingHandler from '../../../handlers/new-training.handler';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { TrainingData } from '../../../models/common/interfaces/common.model';
import { Exercise } from '../../../models/training/exercise.model';
import { createEmptyExercise, EditNewTrainingData, EMPTY_TRAINING, EMPTY_TRAINING_EDIT } from '../../../models/training/new-training/empty-training.model';
import { Training } from '../../../models/training/new-training/new-training.model';
import { NewTrainingService } from '../../../services/training/new-training.service';
import * as CommonValidators from '../../../validators/shared/common.validators';

@Component({
    selector: 'bl-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTrainingComponent implements OnDestroy {

    form: FormGroup;

    editData: EditNewTrainingData = EMPTY_TRAINING_EDIT;
    editMode: boolean = false;

    private focusCounter: number = 0;

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

    trainingStream$: Observable<TrainingData<Exercise[]>> | undefined = undefined;

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly pastTrainingService: PastTrainingsService,
        private readonly sharedService: SharedService,
        private readonly route: ActivatedRoute,
    ) {
        this.trainingStream$ =
            this.route.params
                .pipe(
                    switchMap((params: Params) => {
                        if (params['id']) {
                            this.editMode = true;
                            this.editData._id = params['id'];
                            this.sharedService.pastTrainingId$$.next(this.editData._id);
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
                            );
                        }
                        else {
                            return forkJoin([
                                this.newTrainingService.allExercisesChanged$
                                    .pipe(
                                        take(1),
                                    ),
                                this.newTrainingService.currentTrainingChanged$
                                    .pipe(
                                        take(1),
                                    ),
                            ]).pipe(
                                tap(([exercises, training]: [Exercise[], Training]) => {
                                    const currentTrainingState: Training = { ...training };
                                    if (currentTrainingState) {
                                        if (currentTrainingState.editMode && !this.editMode) {
                                            this.newTrainingService.updateTrainingData({
                                                ...EMPTY_TRAINING,
                                                exercise: [createEmptyExercise(exercises)],
                                                userId: currentTrainingState?.userId ?? '',
                                            });
                                        }
                                    }
                                }),
                            );
                        }
                    }),
                    tap(_ => this.sharedService.editingTraining$$.next(this.editMode)),
                    switchMap(_ =>
                        this.newTrainingService.getExercises()
                            .pipe(
                                tap(_ => this.formInit()),
                                mapStreamData(),
                            ),
                    ),
                );
    }

    get spinnerSize(): number {
        return SPINNER_SIZE;
    }

    get bodyweight(): FormControl {
        return this.form.get('bodyweight') as FormControl;
    }

    ngOnDestroy(): void {
        this.sharedService.editingTraining$$.next(false);
    }

    onBodyweightChange(bodyweight: string): void {
        this.newTrainingService.addBodyweightToStorage(bodyweight);
    }
    //TODO: fix edit mode
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
            this.trainingStream$ = this.newTrainingService.getExercises()
                .pipe(
                    mapStreamData(),
                );
        }
    }

    private formInit(): void {
        const currentTrainingState = { ...this.newTrainingService.getCurrentTrainingState() };
        this.form = new FormGroup({
            'bodyweight': new FormControl(
                NewTrainingHandler.fillBodyweight(
                    currentTrainingState.bodyweight,
                    this.editData?.editTraining ? this.editData.editTraining?.bodyweight : null,
                ),
                [CommonValidators.isBroj(), Validators.min(30), Validators.max(300)],
            ),
            'exercise': new FormControl(currentTrainingState),
        });
    }

}
