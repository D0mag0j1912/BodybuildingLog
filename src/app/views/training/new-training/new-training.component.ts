import { ChangeDetectionStrategy, Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { forkJoin, Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import * as NewTrainingHandler from '../../../handlers/new-training.handler';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { LocalStorageItems, StreamData } from '../../../models/common/interfaces/common.model';
import { Exercise } from '../../../models/training/exercise.model';
import { createEmptyExercise, EditNewTrainingData, EMPTY_TRAINING, EMPTY_TRAINING_EDIT } from '../../../models/training/new-training/empty-training.model';
import { Training } from '../../../models/training/new-training/new-training.model';
import { PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';
import { AuthService } from '../../../services/auth/auth.service';
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
    editMode = false;

    trainingStream$: Observable<StreamData<Exercise[]>> | undefined = undefined;
    isAuthenticated$: Observable<boolean>;
    isEditing$: Observable<boolean>;

    @ViewChild(IonContent, { read: IonContent })
    ionContent: IonContent;

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly pastTrainingService: PastTrainingsService,
        private readonly sharedService: SharedService,
        private readonly authService: AuthService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
    ) {
        this.trainingStream$ =
            this.route.params
                .pipe(
                    switchMap((params: Params) => {
                        if (params['id']) {
                            this.editMode = true;
                            return this.pastTrainingService.getPastTraining(params['id'])
                                .pipe(
                                    tap((response: StreamData<Training>) => {
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
        this.isAuthenticated$ = this.authService.isAuth$;
        this.isEditing$ = this.sharedService.editingTraining$$;
    }

    get bodyweight(): FormControl {
        return this.form.get('bodyweight') as FormControl;
    }

    ionViewDidEnter(): void {
        if (this.ionContent) {
            setTimeout(async () => await this.ionContent.scrollToBottom(300), 100);
        }
    }

    ngOnDestroy(): void {
        this.sharedService.editingTraining$$.next(false);
    }

    goToPastTraining(): void {
        this.sharedService.pastTrainingsQueryParams$$
            .pipe(
                take(1),
            ).subscribe(async (response: PastTrainingsQueryParams) => {
                await this.router.navigate(['/training/past-trainings'], {
                    queryParams: {
                        startDate: response?.startDate ? response.startDate : undefined,
                        endDate: response?.endDate ? response.endDate : undefined,
                        search: response?.search ? response.search : undefined,
                        page: response?.page ? response.page : undefined,
                        size: response?.size ? response.size : undefined,
                    } as PastTrainingsQueryParams,
                });
                localStorage.removeItem(LocalStorageItems.QUERY_PARAMS);
            });
    }

    onBodyweightChange(bodyweight: string | number): void {
        this.newTrainingService.addBodyweightToStorage(typeof bodyweight === 'string' ? bodyweight : bodyweight.toString());
    }

    tryAgain(): void {
        if (this.editData?.editTraining) {
            this.trainingStream$ = this.pastTrainingService.getPastTraining(this.editData.editTraining?._id)
                .pipe(
                    tap((response: StreamData<Training>) => {
                        this.editData = {
                            editedDate: response?.Value?.updatedAt ?? new Date(),
                            editTraining: {
                                ...response?.Value,
                                editMode: this.editMode,
                            },
                        };
                        this.newTrainingService.updateTrainingData(this.editData.editTraining);
                    }),
                    switchMap(_ => this.newTrainingService.getExercises()),
                    mapStreamData(),
            );
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
            bodyweight: new FormControl(
                NewTrainingHandler.fillBodyweight(
                    currentTrainingState.bodyweight,
                    this.editData?.editTraining ? this.editData.editTraining?.bodyweight : null,
                ),
                {
                    validators: [CommonValidators.isBroj(), Validators.min(30), Validators.max(300)],
                    updateOn: 'blur',
                },
            ),
            exercise: new FormControl(currentTrainingState),
        });
    }

}
