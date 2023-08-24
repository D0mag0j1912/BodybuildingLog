import {
    ChangeDetectorRef,
    Component,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { format, getDay, parseISO } from 'date-fns';
import { BehaviorSubject, EMPTY, from, Observable, of } from 'rxjs';
import {
    concatMap,
    delay,
    distinctUntilChanged,
    filter,
    finalize,
    map,
    switchMap,
    take,
    takeUntil,
    tap,
    withLatestFrom,
} from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { PastTrainingsService } from '../../../services/api/training/past-trainings.service';
import * as NewTrainingHandler from '../../../helpers/training/new-training/bodyweight.helper';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../models/common/common.model';
import { DialogRoles } from '../../../constants/enums/dialog-roles.enum';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';
import { NewTrainingDto as NewTraining } from '../../../../api/models/new-training-dto';
import { SingleExerciseDto as SingleExercise } from '../../../../api/models/single-exercise-dto';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { DateTimePickerComponent } from '../../shared/datetime-picker/datetime-picker.component';
import { NewTrainingStoreService } from '../../../services/store/training/new-training-store.service';
import { NewTrainingService } from '../../../services/api/training/new-training.service';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';
import { BODYWEIGHT_SET_CATEGORIES } from '../../../constants/training/bodyweight-set-categories.const';
import { SetCategoryType } from '../../../models/training/new-training/single-exercise/set/set.type';
import { PreferencesDto as Preferences } from '../../../../api/models/preferences-dto';
import { convertWeightUnit } from '../../../helpers/training/convert-units.helper';
import { WeightUnitType } from '../../../models/common/preferences.type';
import { TrainingSplitsFacadeService } from '../../../store/training-splits/training-splits-facade.service';
import { TrainingSplitDto as TrainingSplit } from '../../../../api/models/training-split-dto';
import { DAYS_OF_WEEK } from '../../../helpers/days-of-week.helper';
import { CustomTrainingDto as CustomTraining } from '../../../../api/models/custom-training-dto';
import { GeneralResponseDto as GeneralResponse } from '../../../../api/models/general-response-dto';
import { MESSAGE_DURATION } from '../../../constants/shared/message-duration.const';
import {
    EMPTY_TRAINING,
    createEmptyExercise,
} from '../../../constants/training/new-training.const';
import { TrainingsCommonFacadeService } from '../../../store/trainings-common/trainings-common-facade.service';
import { SingleExerciseComponent } from './single-exercise/single-exercise.component';
import { ReorderExercisesComponent } from './reorder-exercises/reorder-exercises.component';

@Component({
    selector: 'bl-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
    providers: [UnsubscribeService],
})
export class NewTrainingComponent implements OnInit {
    private _restartExercises$ = new BehaviorSubject<SingleExercise[]>([]);

    restartExercises$ = this._restartExercises$.asObservable();
    trainingStream$: Observable<StreamData<Exercise[]>> | undefined = undefined;
    currentPreferences$ = this._preferencesStoreService.preferencesChanged$.pipe(
        tap((preferences: Preferences) => {
            const currentBodyweightValue = this.newTrainingForm.controls.bodyweight.value;
            if (currentBodyweightValue && this.currentWeightUnit !== preferences.weightUnit) {
                this.currentWeightUnit = preferences.weightUnit;
                this.newTrainingForm.controls.bodyweight.patchValue(
                    convertWeightUnit(preferences.weightUnit, currentBodyweightValue),
                );
            }
        }),
    );
    isAuthenticated$ = this._authStoreService.isAuth$;
    isReorder$ = this._newTrainingStoreService.trainingState$.pipe(
        map((training: NewTraining) => {
            const exercises = training.exercises;
            return (
                exercises.length >= 2 &&
                exercises.every(
                    (exercise: SingleExercise) =>
                        !!exercise.exerciseData.name && exercise.sets.length > 0,
                )
            );
        }),
    );
    exercisesState$ = this._newTrainingStoreService.trainingState$.pipe(
        map((currentTrainingState: NewTraining) => currentTrainingState.exercises),
        delay(0),
        tap((exercises: SingleExercise[]) => {
            const isBodyweightCategory = exercises.some((exercise: SingleExercise) =>
                this.bodyweightSetCategories.some((category: SetCategoryType) =>
                    exercise.exerciseData.selectedSetCategories.includes(category),
                ),
            );
            this.newTrainingForm.controls.bodyweight.setValidators(
                isBodyweightCategory
                    ? [...this.bodyweightValidators, Validators.required]
                    : [...this.bodyweightValidators],
            );
            this.newTrainingForm.controls.bodyweight.updateValueAndValidity();
        }),
    );

    activeTrainingSplit: TrainingSplit;
    currentWeightUnit: WeightUnitType;
    formattedTodayDate: string;
    editTrainingData: NewTraining;
    bodyweightValidators = [Validators.min(30), Validators.max(300)];
    bodyweightSetCategories = BODYWEIGHT_SET_CATEGORIES;
    allExercises: StreamData<Exercise[]>;

    newTrainingForm = new FormGroup({
        bodyweight: new FormControl(0, {
            validators: this.bodyweightValidators,
        }),
        trainingDate: new FormControl(new Date().toISOString(), {
            validators: [Validators.required],
            nonNullable: true,
        }),
    });

    editMode = false;
    isApiLoading = false;
    isSubmitted = false;

    @ViewChild(IonContent, { read: IonContent })
    ionContent: IonContent;

    @ViewChildren(SingleExerciseComponent)
    singleExerciseComponents: QueryList<SingleExerciseComponent>;

    constructor(
        private _trainingSplitsFacadeService: TrainingSplitsFacadeService,
        private _trainingsCommonFacadeService: TrainingsCommonFacadeService,
        private _newTrainingStoreService: NewTrainingStoreService,
        private _newTrainingService: NewTrainingService,
        private _pastTrainingService: PastTrainingsService,
        private _authStoreService: AuthStoreService,
        private _unsubscribeService: UnsubscribeService,
        private _preferencesStoreService: PreferencesStoreService,
        private _toastControllerService: ToastControllerService,
        private _translateService: TranslateService,
        private _route: ActivatedRoute,
        private _modalController: ModalController,
        private _changeDetectorRef: ChangeDetectorRef,
        private _navController: NavController,
    ) {}

    ionViewWillEnter(): void {
        this.currentWeightUnit = this._preferencesStoreService.getPreferences().weightUnit;

        this.trainingStream$ = this._route.params.pipe(
            take(1),
            switchMap((params: Params) =>
                this._trainingsCommonFacadeService.selectExercises().pipe(
                    take(1),
                    tap(
                        (allExercises: StreamData<Exercise[]>) =>
                            (this.allExercises = allExercises),
                    ),
                    map((_) => params),
                ),
            ),
            switchMap((params: Params) => {
                if (params['id']) {
                    this.editMode = true;
                    return this._pastTrainingService.getPastTraining(params['id']).pipe(
                        switchMap((response: StreamData<NewTraining>) => {
                            if (response.Value) {
                                this.editTrainingData = {
                                    ...response.Value,
                                    editMode: true,
                                    trainingDate: response.Value.trainingDate,
                                };
                                return this._newTrainingStoreService.updateTrainingState(
                                    'newTrainingInit',
                                    { trainingState: this.editTrainingData },
                                );
                            }
                            return EMPTY;
                        }),
                    );
                } else {
                    return this._newTrainingStoreService.trainingState$.pipe(
                        take(1),
                        withLatestFrom(
                            this._trainingSplitsFacadeService.selectActiveTrainingSplit(),
                        ),
                        switchMap(
                            ([currentTrainingState, activeTrainingSplit]: [
                                NewTraining,
                                TrainingSplit,
                            ]) => {
                                this.activeTrainingSplit = activeTrainingSplit;
                                if (this.activeTrainingSplit) {
                                    const todaysDayIndex = getDay(new Date());
                                    const todaysDayName = DAYS_OF_WEEK.find(
                                        (dayData) => dayData.index === todaysDayIndex,
                                    ).day;
                                    const customTraining = activeTrainingSplit.trainings.find(
                                        (training: CustomTraining) =>
                                            training.dayOfWeek === todaysDayName,
                                    );
                                    return this._newTrainingStoreService.updateTrainingState(
                                        'useTrainingSplit',
                                        {
                                            trainingState: undefined,
                                            exercises: customTraining.exercises,
                                            userId: activeTrainingSplit.userId,
                                            allExercises: this.allExercises.Value,
                                        },
                                    );
                                } else {
                                    let newTrainingState: NewTraining;
                                    //If training was in edit mode, but currently is in creation mode
                                    if (currentTrainingState.editMode && !this.editMode) {
                                        newTrainingState = {
                                            ...EMPTY_TRAINING,
                                            exercises: [
                                                createEmptyExercise(this.allExercises.Value),
                                            ],
                                            userId: currentTrainingState?.userId ?? '',
                                            trainingDate: new Date().toISOString(),
                                            editMode: false,
                                        };
                                    }
                                    //If training is in creation mode
                                    if (!currentTrainingState.editMode && !this.editMode) {
                                        newTrainingState = {
                                            ...currentTrainingState,
                                            userId: currentTrainingState?.userId ?? '',
                                            trainingDate: new Date().toISOString(),
                                            exercises: [...currentTrainingState.exercises].map(
                                                (singleExercise: SingleExercise) => {
                                                    const trainingSplitExercisesIds =
                                                        currentTrainingState.exercises
                                                            .map(
                                                                (singleExercise: SingleExercise) =>
                                                                    singleExercise.exerciseData,
                                                            )
                                                            .map((value: Exercise) => value._id)
                                                            .filter(
                                                                (id: string) =>
                                                                    id !==
                                                                    singleExercise.exerciseData._id,
                                                            );
                                                    return {
                                                        ...singleExercise,
                                                        availableExercises:
                                                            this.allExercises.Value.filter(
                                                                (availableExercise: Exercise) =>
                                                                    !trainingSplitExercisesIds.includes(
                                                                        availableExercise._id,
                                                                    ),
                                                            ),
                                                    };
                                                },
                                            ),
                                        };
                                    }
                                    return this._newTrainingStoreService.updateTrainingState(
                                        'newTrainingInit',
                                        { trainingState: newTrainingState },
                                    );
                                }
                            },
                        ),
                    );
                }
            }),
            switchMap((_) =>
                of(this.allExercises).pipe(
                    tap((_) => {
                        this._formInit();
                        if (this.editTrainingData) {
                            const editTrainingWeightUnit =
                                this.editTrainingData.preferences.weightUnit;
                            const isBodyweightEntered =
                                !!this.newTrainingForm.controls.bodyweight.value;
                            if (
                                editTrainingWeightUnit !== this.currentWeightUnit &&
                                isBodyweightEntered
                            ) {
                                this.newTrainingForm.controls.bodyweight.patchValue(
                                    convertWeightUnit(
                                        this.currentWeightUnit,
                                        this.newTrainingForm.controls.bodyweight.value,
                                    ),
                                );
                            }
                        }
                    }),
                    mapStreamData(),
                ),
            ),
        );

        this._changeDetectorRef.detectChanges();
    }

    ionViewDidEnter(): void {
        if (this.ionContent) {
            setTimeout(async () => await this.ionContent.scrollToBottom(500), 300);
        }
    }

    ionViewDidLeave(): void {
        this.isSubmitted = false;
    }

    ngOnInit(): void {
        const trainingSplitId = this._preferencesStoreService.getPreferences().trainingSplitId;
        if (trainingSplitId) {
            this._trainingSplitsFacadeService.getTrainingSplit(trainingSplitId);
        }
    }

    onSubmit(): void {
        this.isSubmitted = true;
        if (!this.newTrainingForm.valid || !this._isExerciseFormValid()) {
            return;
        }
        this.isApiLoading = true;

        this._newTrainingStoreService.trainingState$
            .pipe(
                take(1),
                switchMap((trainingState: NewTraining) => {
                    if (this.editMode) {
                        return this._newTrainingService.updateTraining(
                            trainingState,
                            trainingState._id,
                        );
                    } else {
                        if (!this.activeTrainingSplit) {
                            const { _id, ...rest } = trainingState;
                            return this._newTrainingService.addTraining(rest);
                        } else {
                            return of(trainingState);
                        }
                    }
                }),
                finalize(() => (this.isApiLoading = false)),
            )
            .subscribe(async (data: GeneralResponse | NewTraining) => {
                //If mode is create
                if (!this.editMode) {
                    //If there is no active training split
                    if ('Message' in data) {
                        await this._toastControllerService.displayToast({
                            message: this._translateService.instant(data.Message),
                            duration: MESSAGE_DURATION.GENERAL,
                            color: 'primary',
                        });
                        //If there is active training split
                    } else {
                        this.activeTrainingSplit = {
                            ...this.activeTrainingSplit,
                            trainings: [...this.activeTrainingSplit.trainings].map(
                                (customTraining: CustomTraining) => {
                                    const todaysDayIndex: number = getDay(new Date());
                                    const todaysDayName: CustomTraining['dayOfWeek'] =
                                        DAYS_OF_WEEK.find(
                                            (dayData) => dayData.index === todaysDayIndex,
                                        ).day;
                                    if (todaysDayName === customTraining.dayOfWeek) {
                                        return {
                                            ...customTraining,
                                            exercises: [...data.exercises].map(
                                                (singleExercise: SingleExercise) => ({
                                                    ...singleExercise.exerciseData,
                                                    numberOfSets: singleExercise.sets.length,
                                                }),
                                            ),
                                        };
                                    }
                                    return customTraining;
                                },
                            ),
                        };
                        const facadeTrainingState: NewTraining = this.editMode
                            ? {
                                  ...data,
                                  _id: this.editTrainingData._id,
                              }
                            : { ...data };
                        this._trainingSplitsFacadeService.editTrainingSplit(
                            this.activeTrainingSplit._id,
                            this.activeTrainingSplit,
                            facadeTrainingState,
                        );
                    }
                }
                //If mode is edit
                if (this.editMode && 'Message' in data) {
                    await this._toastControllerService.displayToast({
                        message: this._translateService.instant(data.Message),
                        duration: MESSAGE_DURATION.GENERAL,
                        color: 'primary',
                    });
                }
            });
    }

    async openReorderModal(): Promise<void> {
        const modal = await this._modalController.create({
            component: ReorderExercisesComponent,
            keyboardClose: true,
        });
        await modal.present();

        from(modal.onDidDismiss<NewTraining | undefined>())
            .pipe(
                filter<OverlayEventDetail<NewTraining>>(
                    (response) => response?.role === DialogRoles.REORDER_EXERCISES,
                ),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((response) => {
                if (response?.data) {
                    let streamData: StreamData<Exercise[]>;
                    this.trainingStream$ = this._trainingsCommonFacadeService
                        .selectExercises()
                        .pipe(
                            take(1),
                            map((value) => {
                                streamData = {
                                    IsLoading: true,
                                    Value: value.Value,
                                    IsError: false,
                                };
                                return streamData;
                            }),
                            delay(300),
                            switchMap((_) =>
                                this._newTrainingStoreService
                                    .updateTrainingState('openReorderModal', {
                                        trainingState: response.data,
                                    })
                                    .pipe(tap((_) => this._formInit())),
                            ),
                            switchMap((_) => of(streamData)),
                            mapStreamData<Exercise[]>(),
                            tap((_) =>
                                setTimeout(
                                    async () => await this.ionContent.scrollToBottom(500),
                                    100,
                                ),
                            ),
                        );
                }
            });
    }

    async openDateTimePicker(): Promise<void> {
        const modal = await this._modalController.create({
            component: DateTimePickerComponent,
            componentProps: {
                dateValue: format(
                    new Date(this.newTrainingForm.controls.trainingDate.value),
                    `yyyy-MM-dd'T'HH:mm:ss'Z'`,
                ),
            },
            cssClass: 'datetime-picker',
            mode: 'md',
        });
        await modal.present();

        from(modal.onDidDismiss<string | undefined>())
            .pipe(
                concatMap((response) => {
                    if (response.role === DialogRoles.SELECT_DATE) {
                        return this._newTrainingStoreService
                            .updateTrainingDate(response.data)
                            .pipe(map((_) => response));
                    }
                    return of(response);
                }),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((response) => {
                const { data, role } = response;
                if (role === DialogRoles.SELECT_DATE) {
                    this.newTrainingForm.controls.trainingDate.patchValue(data);
                    this._setFormattedDate(data);
                }
            });
    }

    goToPastTraining(): void {
        this._navController.back();
    }

    onBodyweightChange(): void {
        this._newTrainingStoreService
            .updateBodyweight(this.newTrainingForm.controls.bodyweight.value)
            .pipe(filter(Boolean), distinctUntilChanged(), takeUntil(this._unsubscribeService))
            .subscribe();
    }

    async onExerciseAdded(event: UIEvent): Promise<void> {
        if (this.ionContent) {
            of(null)
                .pipe(
                    delay(100),
                    tap(async (_) => await this.ionContent.scrollToBottom(300)),
                    delay(200),
                    tap(
                        async (_) =>
                            await this.singleExerciseComponents.last?.exercisePickerEls?.last?.open(
                                event,
                            ),
                    ),
                    takeUntil(this._unsubscribeService),
                )
                .subscribe();
        }
    }
    //TODO: Fix
    tryAgain(): void {
        /* if (this.editTrainingData) {
            this.trainingStream$ = this._pastTrainingService
                .getPastTraining(this.editTrainingData?._id)
                .pipe(
                    switchMap((response: StreamData<NewTraining>) => {
                        this.editTrainingData = {
                            ...response.Value,
                            editMode: true,
                            trainingDate: response?.Value?.trainingDate,
                        };
                        return this._newTrainingStoreService.updateTrainingState('tryAgain', {
                            trainingState: this.editTrainingData,
                        });
                    }),
                );
        } else {
            this.trainingStream$ = this._exercisesService.getExercises().pipe(mapStreamData());
        } */
    }

    private _formInit(): void {
        const currentTrainingState = this._newTrainingStoreService.getCurrentTrainingState();
        this.newTrainingForm.controls.bodyweight.patchValue(
            this._fillBodyweight(currentTrainingState.bodyweight),
        );
        this._fillTrainingDate(currentTrainingState.trainingDate);
        this._setFormattedDate(this.newTrainingForm.controls.trainingDate.value);
        this._restartExercises$.next(currentTrainingState.exercises);
    }

    private _setFormattedDate(dateValue: string): void {
        const [date, time] = dateValue.split('T');
        this.formattedTodayDate = format(
            parseISO(format(new Date(date), 'yyyy-MM-dd') + `T${time}`),
            'HH:mm, MMM d, yyyy',
        );
    }

    private _fillTrainingDate(trainingDate: string | undefined): string {
        if (this.editTrainingData) {
            return this.editTrainingData.trainingDate.toString();
        } else {
            return trainingDate ? trainingDate : new Date().toISOString();
        }
    }

    private _fillBodyweight(bodyweight: number): number {
        return NewTrainingHandler.fillBodyweight(
            bodyweight,
            this.editTrainingData ? this.editTrainingData.bodyweight : null,
        );
    }

    private _isExerciseFormValid(): boolean {
        let isFormValid = true;
        this.singleExerciseComponents.forEach((component: SingleExerciseComponent) => {
            const exerciseForm = component.form;
            if (exerciseForm.invalid) {
                isFormValid = false;
            }
            if (!component.areSetsValid()) {
                isFormValid = false;
            }
        });
        return isFormValid;
    }
}
