import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { format, parseISO } from 'date-fns';
import { from, Observable, of } from 'rxjs';
import { delay, filter, finalize, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { SharedStoreService } from 'src/app/services/store/shared/shared-store.service';
import { PastTrainingsService } from 'src/app/services/api/training/past-trainings.service';
import * as NewTrainingHandler from '../../../handlers/new-training.handler';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { LocalStorageItems, StreamData } from '../../../models/common/interfaces/common.model';
import { DialogRoles } from '../../../models/common/types/modal-roles.type';
import { Exercise } from '../../../models/training/exercise.model';
import { createEmptyExercise, EditNewTrainingData, EMPTY_TRAINING, EMPTY_TRAINING_EDIT } from '../../../models/training/new-training/empty-training.model';
import { Training } from '../../../models/training/new-training/training.model';
import { SingleExercise } from '../../../models/training/shared/single-exercise.model';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import * as CommonValidators from '../../../validators/shared/common.validators';
import { DateTimePickerComponent } from '../../shared/datetime-picker/datetime-picker.component';
import { SingleExerciseComponent } from '../../shared/training/single-exercise/single-exercise.component';
import { TrainingStoreService } from '../../../services/store/training/training-store.service';
import { TrainingService } from '../../../services/api/training/training.service';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';
import { ReorderExercisesComponent } from './reorder-exercises/reorder-exercises.component';

type FormData = {
    bodyweight: number;
    date: Date;
    exercises: SingleExercise[];
};

@Component({
    selector: 'bl-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class NewTrainingComponent implements OnDestroy {

    formattedTodayDate: string;

    form: FormGroup;

    editData: EditNewTrainingData = EMPTY_TRAINING_EDIT;
    editMode = false;

    trainingStream$: Observable<StreamData<Exercise[]>> | undefined = undefined;
    readonly isAuthenticated$: Observable<boolean> = this.authStoreService.isAuth$;
    readonly isEditing$: Observable<boolean> = this.sharedStoreService.editingTraining$;
    readonly isReorder$: Observable<boolean> = this.trainingStoreService.currentTrainingChanged$
        .pipe(
            map(training => {
                const exercises = training.exercises;
                const areAtLeastTwoExercises = exercises.length >= 2 && exercises.every(exercise => !!exercise.exerciseData.name && exercise.sets.length > 0);
                return areAtLeastTwoExercises;
            }),
        );

    @ViewChild(IonContent, { read: IonContent })
    ionContent: IonContent;

    @ViewChildren(SingleExerciseComponent)
    singleExerciseCmps: QueryList<SingleExerciseComponent>;

    constructor(
        private readonly trainingStoreService: TrainingStoreService,
        private readonly trainingService: TrainingService,
        private readonly pastTrainingService: PastTrainingsService,
        private readonly sharedStoreService: SharedStoreService,
        private readonly authStoreService: AuthStoreService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly modalController: ModalController,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        this.form = new FormGroup({
            bodyweight: new FormControl(null,
                {
                    validators: [CommonValidators.isNumber(), Validators.min(30), Validators.max(300)],
                    updateOn: 'blur',
                },
            ),
            date: new FormControl(new Date().toISOString(), [Validators.required]),
            exercises: new FormControl([]),
        });
    }

    ionViewWillEnter(): void {
        let allExercisesChanged: StreamData<Exercise[]>;
        this.trainingStream$ = this.route.params
            .pipe(
                take(1),
                switchMap((params: Params) =>
                    this.trainingStoreService.allExercisesChanged$
                        .pipe(
                            take(1),
                            switchMap(value => {
                                if (value) {
                                    return of(value);
                                }
                                else {
                                    return this.trainingService.getExercises();
                                }
                            }),
                            tap(exercisesData => allExercisesChanged = exercisesData),
                            map(_ => params),
                        ),
                ),
                switchMap((params: Params) => {
                    if (params['id']) {
                        this.editMode = true;
                        return this.pastTrainingService.getPastTraining(params['id'])
                            .pipe(
                                tap((response: StreamData<Training>) => {
                                    this.editData = {
                                        editedDate: response?.Value?.trainingDate ?? new Date(),
                                        editTraining: {
                                            ...response?.Value,
                                            editMode: true,
                                        },
                                    };
                                    this.trainingStoreService.updateTrainingState(this.editData.editTraining);
                                }),
                            );
                    }
                    else {
                        return this.trainingStoreService.currentTrainingChanged$
                            .pipe(
                                take(1),
                                tap(trainingState => {
                                    const currentTrainingState: Training = { ...trainingState };
                                    if (currentTrainingState) {
                                        if (currentTrainingState.editMode && !this.editMode) {
                                            this.trainingStoreService.updateTrainingState({
                                                ...EMPTY_TRAINING,
                                                exercises: [createEmptyExercise(allExercisesChanged.Value)],
                                                userId: currentTrainingState?.userId ?? '',
                                            });
                                        }
                                    }
                                }),
                            );
                    }
                }),
                tap(_ => this.sharedStoreService.emitEditingTraining(this.editMode)),
                switchMap(_ => of(allExercisesChanged)
                    .pipe(
                        tap(_ => this._formInit()),
                        mapStreamData(),
                    ),
                ),
            );
        this.changeDetectorRef.markForCheck();
    }

    ionViewDidEnter(): void {
        if (this.ionContent) {
            setTimeout(async () => await this.ionContent.scrollToBottom(300), 300);
        }
    }

    ionViewDidLeave(): void {
        this.sharedStoreService.emitEditingTraining(false);
    }

    ngOnDestroy(): void {
        this.sharedStoreService.completeDayClicked();
    }

    async openReorderModal(): Promise<void> {
        const modal = await this.modalController.create({
            component: ReorderExercisesComponent,
            keyboardClose: true,
        });
        await modal.present();

        from(modal.onDidDismiss<Training | undefined>())
            .pipe(
                filter<OverlayEventDetail<Training>>(response => response?.role === DialogRoles.REORDER_EXERCISES),
                takeUntil(this.unsubscribeService),
            )
            .subscribe(response => {
                if (response?.data) {
                    this.trainingStream$ = this.trainingStoreService.allExercisesChanged$
                        .pipe(
                            take(1),
                            map(value => ({
                                IsLoading: true,
                                Value: value.Value,
                                IsError: false,
                            })),
                            delay(300),
                            tap(_ => {
                                this.trainingStoreService.updateTrainingState(response.data);
                                this._formInit();
                            }),
                            mapStreamData(),
                            tap(_ => setTimeout(async () => await this.ionContent.scrollToBottom(300), 100)),
                        );
                    this.changeDetectorRef.markForCheck();
                }
            });
    }

    async openDateTimePicker(): Promise<void> {
        const modal = await this.modalController.create({
            component: DateTimePickerComponent,
            componentProps: { dateValue: format(new Date(this.accessFormData('date').value), `yyyy-MM-dd'T'HH:mm:ss'Z'`) },
            cssClass: 'datetime-picker',
            mode: 'md',
        });
        await modal.present();

        from(modal.onDidDismiss<string | undefined>())
            .pipe(
                finalize(() => this.changeDetectorRef.markForCheck()),
                takeUntil(this.unsubscribeService),
            )
            .subscribe(response => {
                const { data, role } = response;
                if (role === 'SELECT_DATE') {
                    this.accessFormData('date').patchValue(data);
                    this._setFormattedDate(data);
                }
            });
    }

    async goToPastTraining(): Promise<void> {
        this.sharedStoreService.pastTrainingsQueryParams$
            .pipe(
                take(1),
            )
            .subscribe(async (params: PastTrainingsQueryParams) => {
                await this.router.navigate(['/training/past-trainings'], { queryParams: params });
                localStorage.removeItem(LocalStorageItems.QUERY_PARAMS);
            });
    }

    onBodyweightChange(bodyweight: string | number): void {
        this.trainingStoreService.addBodyweightToStorage(typeof bodyweight === 'string' ? bodyweight : bodyweight.toString());
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
                            editedDate: response?.Value?.trainingDate ?? new Date(),
                            editTraining: {
                                ...response?.Value,
                                editMode: this.editMode,
                            },
                        };
                        this.trainingStoreService.updateTrainingState(this.editData.editTraining);
                    }),
                    switchMap(_ => this.trainingService.getExercises()),
                    mapStreamData(),
            );
        }
        else {
            this.trainingStream$ = this.trainingService.getExercises()
                .pipe(
                    mapStreamData(),
                );
        }
    }

    accessFormData(formControl: keyof FormData): FormControl {
        return this.form.get(formControl) as FormControl;
    }

    private _formInit(): void {
        const currentTrainingState = { ...this.trainingStoreService.getCurrentTrainingState() };
        const dayClickedDate = this.sharedStoreService.getDayClickedDate();
        this.accessFormData('bodyweight').patchValue(this._fillBodyweight(currentTrainingState));
        this.accessFormData('date').patchValue(this._fillTrainingDate(dayClickedDate));
        this.accessFormData('exercises').patchValue(currentTrainingState?.exercises ?? []);
        this._setFormattedDate(this.accessFormData('date').value);
    }

    private _setFormattedDate(dateValue: string): void {
        const [ date, time ] = dateValue.split('T');
        this.formattedTodayDate = format(parseISO(format(new Date(date), 'yyyy-MM-dd') + `T${time}`), 'HH:mm, MMM d, yyyy');
    }

    private _fillTrainingDate(dayClickedDate: string | undefined): string {
        if (this.editData?.editedDate) {
            return this.editData.editedDate as string;
        }
        else {
            return dayClickedDate ? dayClickedDate : new Date().toISOString();
        }
    }

    private _fillBodyweight(currentTrainingState: Training): string {
        return NewTrainingHandler.fillBodyweight(
            currentTrainingState.bodyweight,
            this.editData?.editTraining ? this.editData.editTraining?.bodyweight : null,
        );
    }

}
