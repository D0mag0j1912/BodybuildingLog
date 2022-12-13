import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { format, parseISO } from 'date-fns';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
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
} from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { TranslateService } from '@ngx-translate/core';
import { SharedStoreService } from '../../../services/store/shared/shared-store.service';
import { PastTrainingsService } from '../../../services/api/training/past-trainings.service';
import * as NewTrainingHandler from '../../../helpers/training/new-training/bodyweight.helper';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../models/common/common.model';
import { DialogRoles } from '../../../constants/enums/dialog-roles.enum';
import { Exercise } from '../../../models/training/exercise.model';
import { NewTraining } from '../../../models/training/new-training/new-training.model';
import { SingleExercise } from '../../../models/training/new-training/single-exercise/single-exercise.model';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { DateTimePickerComponent } from '../../shared/datetime-picker/datetime-picker.component';
import { NewTrainingStoreService } from '../../../services/store/training/new-training-store.service';
import { NewTrainingService } from '../../../services/api/training/new-training.service';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';
import {
    EMPTY_TRAINING,
    createEmptyExercise,
} from '../../../constants/training/new-training.const';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';
import { PastTrainingsStoreService } from '../../../services/store/training/past-trainings-store.service';
import { GeneralResponseData } from '../../../models/common/general-response.model';
import { MESSAGE_DURATION } from '../../../constants/shared/message-duration.const';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';
import { BODYWEIGHT_SET_CATEGORIES } from '../../../constants/training/bodyweight-set-categories.const';
import { ExercisesStoreService } from '../../../services/store/training/exercises-store.service';
import { SetCategoryType } from '../../../models/training/new-training/single-exercise/set/set.type';
import { Preferences } from '../../../models/common/preferences.model';
import { convertWeightUnit } from '../../../helpers/training/convert-units.helper';
import { WeightUnitType } from '../../../models/common/preferences.type';
import { SingleExerciseComponent } from './single-exercise/single-exercise.component';
import { ReorderExercisesComponent } from './reorder-exercises/reorder-exercises.component';

@Component({
    selector: 'bl-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class NewTrainingComponent implements OnDestroy {
    private _isSubmitted$ = new BehaviorSubject<boolean>(false);
    private _isApiLoading$ = new BehaviorSubject<boolean>(false);

    isSubmitted$ = this._isSubmitted$.asObservable();
    isApiLoading$ = this._isApiLoading$.asObservable();
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
    isEditing$ = this._sharedStoreService.editingTraining$;
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
        tap((exercises: SingleExercise[]) => {
            const isBodyweightCategory = exercises.some((exercise: SingleExercise) =>
                this.bodyweightSetCategories.some((category: SetCategoryType) =>
                    exercise.exerciseData.selectedSetCategories.includes(category),
                ),
            );
            this.newTrainingForm.controls.bodyweight.setValidators(
                isBodyweightCategory
                    ? [...this.initialBodyweightValidators, Validators.required]
                    : [...this.initialBodyweightValidators],
            );
            this.newTrainingForm.controls.bodyweight.updateValueAndValidity();
        }),
    );

    currentWeightUnit: WeightUnitType;
    formattedTodayDate: string;
    editTrainingData: NewTraining;
    initialBodyweightValidators = [Validators.min(30), Validators.max(300)];
    bodyweightSetCategories = BODYWEIGHT_SET_CATEGORIES;

    newTrainingForm = new FormGroup({
        bodyweight: new FormControl(0, {
            validators: this.initialBodyweightValidators,
        }),
        trainingDate: new FormControl(new Date().toISOString(), {
            validators: [Validators.required],
            nonNullable: true,
        }),
        exercises: new FormControl<SingleExercise[]>([], { nonNullable: true }),
    });

    editMode = false;

    @ViewChild(IonContent, { read: IonContent })
    ionContent: IonContent;

    @ViewChildren(SingleExerciseComponent)
    singleExerciseComponents: QueryList<SingleExerciseComponent>;

    constructor(
        private _newTrainingStoreService: NewTrainingStoreService,
        private _newTrainingService: NewTrainingService,
        private _pastTrainingService: PastTrainingsService,
        private _sharedStoreService: SharedStoreService,
        private _authStoreService: AuthStoreService,
        private _unsubscribeService: UnsubscribeService,
        private _preferencesStoreService: PreferencesStoreService,
        private _pastTrainingsStoreService: PastTrainingsStoreService,
        private _exercisesStoreService: ExercisesStoreService,
        private _toastControllerService: ToastControllerService,
        private _translateService: TranslateService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _modalController: ModalController,
        private _changeDetectorRef: ChangeDetectorRef,
    ) {}

    ionViewWillEnter(): void {
        this.currentWeightUnit = this._preferencesStoreService.getPreferences().weightUnit;
        let allExercisesChanged: StreamData<Exercise[]>;
        this.trainingStream$ = this._route.params.pipe(
            take(1),
            switchMap((params: Params) =>
                this._exercisesStoreService.allExercisesState$.pipe(
                    take(1),
                    switchMap((value) => {
                        if (value) {
                            return of(value);
                        } else {
                            return this._newTrainingService.getExercises();
                        }
                    }),
                    tap((exercisesData) => (allExercisesChanged = exercisesData)),
                    map((_) => params),
                ),
            ),
            switchMap((params: Params) => {
                if (params['id']) {
                    this.editMode = true;
                    return this._pastTrainingService.getPastTraining(params['id']).pipe(
                        switchMap((response: StreamData<NewTraining>) => {
                            this.editTrainingData = {
                                ...response.Value,
                                editMode: true,
                                trainingDate: response.Value.trainingDate,
                            };
                            return this._newTrainingStoreService.updateTrainingState(
                                this.editTrainingData,
                            );
                        }),
                    );
                } else {
                    return this._newTrainingStoreService.trainingState$.pipe(
                        take(1),
                        switchMap((currentTrainingState) => {
                            let newTrainingState: NewTraining;
                            if (currentTrainingState.editMode && !this.editMode) {
                                newTrainingState = {
                                    ...EMPTY_TRAINING,
                                    exercises: [createEmptyExercise(allExercisesChanged.Value)],
                                    userId: currentTrainingState?.userId ?? '',
                                };
                            } else if (!currentTrainingState.editMode && !this.editMode) {
                                if (!currentTrainingState.exercises[0]?.exerciseData?.name) {
                                    newTrainingState = {
                                        ...EMPTY_TRAINING,
                                        exercises: [createEmptyExercise(allExercisesChanged.Value)],
                                        userId: currentTrainingState?.userId ?? '',
                                    };
                                } else {
                                    newTrainingState = currentTrainingState;
                                }
                            }
                            return this._newTrainingStoreService.updateTrainingState(
                                newTrainingState,
                            );
                        }),
                    );
                }
            }),
            tap((_) => this._sharedStoreService.emitEditingTraining(this.editMode)),
            switchMap((_) =>
                of(allExercisesChanged).pipe(
                    tap((_) => this._formInit()),
                    mapStreamData(),
                ),
            ),
        );
        this._changeDetectorRef.markForCheck();
    }

    ionViewDidEnter(): void {
        if (this.ionContent) {
            setTimeout(async () => await this.ionContent.scrollToBottom(500), 300);
        }
    }

    ionViewDidLeave(): void {
        this._sharedStoreService.emitEditingTraining(false);
    }

    ngOnDestroy(): void {
        this._sharedStoreService.completeDayClicked();
        this._isSubmitted$.complete();
        this._isApiLoading$.complete();
    }

    onSubmit(): void {
        this._isSubmitted$.next(true);
        if (!this.newTrainingForm.valid || !this._isExerciseFormValid()) {
            return;
        }
        this._isApiLoading$.next(true);

        this._newTrainingStoreService.trainingState$
            .pipe(
                take(1),
                switchMap((trainingData: NewTraining) => {
                    if (this.editMode) {
                        return this._newTrainingService.updateTraining(
                            trainingData,
                            this.editTrainingData._id,
                        );
                    } else {
                        delete trainingData._id;
                        return this._newTrainingService.addTraining(trainingData);
                    }
                }),
                finalize(() => this._isApiLoading$.next(false)),
            )
            .subscribe(async (response: GeneralResponseData) => {
                await this._toastControllerService.displayToast({
                    message: this._translateService.instant(response.Message),
                    duration: MESSAGE_DURATION.GENERAL,
                    color: 'primary',
                });
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
                    this.trainingStream$ = this._exercisesStoreService.allExercisesState$.pipe(
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
                                .updateTrainingState(response.data)
                                .pipe(tap((_) => this._formInit())),
                        ),
                        switchMap((_) => of(streamData)),
                        mapStreamData<Exercise[]>(),
                        tap((_) =>
                            setTimeout(async () => await this.ionContent.scrollToBottom(500), 100),
                        ),
                    );
                    this._changeDetectorRef.markForCheck();
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
                finalize(() => this._changeDetectorRef.markForCheck()),
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

    async goToPastTraining(): Promise<void> {
        this._pastTrainingsStoreService.pastTrainingsQueryParams$
            .pipe(take(1))
            .subscribe(async (params: PastTrainingsQueryParams) => {
                await this._router.navigate(['/training/past-trainings'], { queryParams: params });
                await Storage.remove({ key: StorageItems.QUERY_PARAMS });
            });
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

    tryAgain(): void {
        if (this.editTrainingData) {
            this.trainingStream$ = this._pastTrainingService
                .getPastTraining(this.editTrainingData?._id)
                .pipe(
                    switchMap((response: StreamData<NewTraining>) => {
                        this.editTrainingData = {
                            ...response.Value,
                            editMode: true,
                            trainingDate: response?.Value?.trainingDate,
                        };
                        return this._newTrainingStoreService.updateTrainingState(
                            this.editTrainingData,
                        );
                    }),
                    switchMap((_) => this._newTrainingService.getExercises()),
                    mapStreamData(),
                );
        } else {
            this.trainingStream$ = this._newTrainingService.getExercises().pipe(mapStreamData());
        }
    }

    private _formInit(): void {
        const currentTrainingState = this._newTrainingStoreService.getCurrentTrainingState();
        const dayClickedDate = this._sharedStoreService.getDayClickedDate();
        this.newTrainingForm.controls.bodyweight.patchValue(
            this._fillBodyweight(currentTrainingState.bodyweight),
        );
        this.newTrainingForm.controls.trainingDate.patchValue(
            this._fillTrainingDate(dayClickedDate),
        );
        this.newTrainingForm.controls.exercises.patchValue(currentTrainingState.exercises);
        this._setFormattedDate(this.newTrainingForm.controls.trainingDate.value);
    }

    private _setFormattedDate(dateValue: string): void {
        const [date, time] = dateValue.split('T');
        this.formattedTodayDate = format(
            parseISO(format(new Date(date), 'yyyy-MM-dd') + `T${time}`),
            'HH:mm, MMM d, yyyy',
        );
    }

    private _fillTrainingDate(dayClickedDate: string | undefined): string {
        if (this.editTrainingData) {
            return this.editTrainingData.trainingDate.toString();
        } else {
            return dayClickedDate ? dayClickedDate : new Date().toISOString();
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
