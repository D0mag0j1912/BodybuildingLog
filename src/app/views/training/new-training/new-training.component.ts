import { ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { forkJoin, Observable, of } from 'rxjs';
import { delay, switchMap, take, takeUntil, tap } from 'rxjs/operators';
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
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { NewTrainingService } from '../../../services/training/new-training.service';
import * as CommonValidators from '../../../validators/shared/common.validators';
import { DateTimePickerComponent } from '../../shared/datetime-picker/datetime-picker.component';
import { SingleExerciseComponent } from '../../shared/training/single-exercise/single-exercise.component';

@Component({
    selector: 'bl-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class NewTrainingComponent implements OnInit {

    dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
    formattedTodayDate: string;

    form: FormGroup;

    editData: EditNewTrainingData = EMPTY_TRAINING_EDIT;
    editMode = false;

    trainingStream$: Observable<StreamData<Exercise[]>> | undefined = undefined;
    isAuthenticated$: Observable<boolean>;
    isEditing$: Observable<boolean>;

    @ViewChild(IonContent, { read: IonContent })
    ionContent: IonContent;

    @ViewChildren(SingleExerciseComponent)
    singleExerciseCmps: QueryList<SingleExerciseComponent>;

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly pastTrainingService: PastTrainingsService,
        private readonly sharedService: SharedService,
        private readonly authService: AuthService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly modalController: ModalController,
    ) {
        this.setToday();
    }

    get bodyweight(): FormControl {
        return this.form.get('bodyweight') as FormControl;
    }

    ionViewDidEnter(): void {
        if (this.ionContent) {
            setTimeout(async () => await this.ionContent.scrollToBottom(300), 100);
        }
    }

    ngOnInit(): void {
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

    ionViewDidLeave(): void {
        this.sharedService.editingTraining$$.next(false);
    }

    setToday(): void {
        this.formattedTodayDate = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm, MMM d, yyyy');
    }

    async openDateTimePicker(): Promise<void> {
        const modal = await this.modalController.create({
            component: DateTimePickerComponent,
        });
        await modal.present();
    }

    goToPastTraining(): void {
        this.sharedService.pastTrainingsQueryParams$$
            .pipe(
                take(1),
            )
            .subscribe(async (response: PastTrainingsQueryParams) => {
                await this.router.navigate(['/training/past-trainings'], {
                    queryParams: {
                        startDate: response?.startDate ?? undefined,
                        endDate: response?.endDate ?? undefined,
                        search: response?.search ?? undefined,
                        page: response?.page ?? undefined,
                        size: response?.size ?? undefined,
                        showBy: response?.showBy ?? 'week',
                    } as PastTrainingsQueryParams,
                });
                localStorage.removeItem(LocalStorageItems.QUERY_PARAMS);
            });
    }

    onBodyweightChange(bodyweight: string | number): void {
        this.newTrainingService.addBodyweightToStorage(typeof bodyweight === 'string' ? bodyweight : bodyweight.toString());
    }

    async onExerciseAdded(event: UIEvent): Promise<void> {
        if (this.ionContent) {
            of(null)
                .pipe(
                    delay(100),
                    tap(async _ => await this.ionContent.scrollToBottom(300)),
                    delay(200),
                    tap(async _ => await this.singleExerciseCmps.last?.exercisePickerEls?.last?.open(event)),
                    takeUntil(this.unsubscribeService),
                )
                .subscribe();
        }
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
