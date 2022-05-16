import { ChangeDetectionStrategy, ChangeDetectorRef, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { format, parseISO } from 'date-fns';
import { combineLatest, from, Observable, of } from 'rxjs';
import { delay, filter, finalize, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import * as NewTrainingHandler from '../../../handlers/new-training.handler';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { LocalStorageItems, StreamData } from '../../../models/common/interfaces/common.model';
import { DialogRoles } from '../../../models/common/types/modal-roles.type';
import { Exercise } from '../../../models/training/exercise.model';
import { createEmptyExercise, EditNewTrainingData, EMPTY_TRAINING, EMPTY_TRAINING_EDIT } from '../../../models/training/new-training/empty-training.model';
import { Training } from '../../../models/training/new-training/training.model';
import { PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';
import { AuthService } from '../../../services/auth/auth.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { NewTrainingService } from '../../../services/training/new-training.service';
import * as CommonValidators from '../../../validators/shared/common.validators';
import { DateTimePickerComponent } from '../../shared/datetime-picker/datetime-picker.component';
import { SingleExerciseComponent } from '../../shared/training/single-exercise/single-exercise.component';
import { ReorderExercisesComponent } from './reorder-exercises/reorder-exercises.component';

@Component({
    selector: 'bl-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class NewTrainingComponent {

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

    readonly isReorder$: Observable<boolean> = this.newTrainingService.currentTrainingChanged$
        .pipe(
            map(training => {
                const isExercise = training.exercises.some(exercise => !!exercise.exerciseName);
                const isSet = training.exercises.find(value => value.sets.some(set => !!set.weightLifted && !!set.reps));
                return isExercise && !!isSet;
            }),
        );

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly pastTrainingService: PastTrainingsService,
        private readonly sharedService: SharedService,
        private readonly authService: AuthService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly modalController: ModalController,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    get bodyweight(): FormControl {
        return this.form.get('bodyweight') as FormControl;
    }

    get date(): FormControl {
        return this.form.get('date') as FormControl;
    }

    ionViewWillEnter(): void {
        this.trainingStream$ = this.route.params
            .pipe(
                take(1),
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
                                    this.newTrainingService.updateTrainingState(this.editData.editTraining);
                                }),
                            );
                    }
                    else {
                        return combineLatest([
                            this.newTrainingService.allExercisesChanged$,
                            this.newTrainingService.currentTrainingChanged$,
                        ]).pipe(
                            take(1),
                            tap(([exercises, training]: [Exercise[], Training]) => {
                                const currentTrainingState: Training = { ...training };
                                if (currentTrainingState) {
                                    if (currentTrainingState.editMode && !this.editMode) {
                                        this.newTrainingService.updateTrainingState({
                                            ...EMPTY_TRAINING,
                                            exercises: [createEmptyExercise(exercises)],
                                            userId: currentTrainingState?.userId ?? '',
                                        });
                                    }
                                }
                            }),
                        );
                    }
                }),
                tap(_ => {
                    this.sharedService.editingTraining$$.next(this.editMode);
                    this.formInit();
                }),
                switchMap(_ =>
                    this.newTrainingService.getExercises()
                        .pipe(
                            mapStreamData(),
                        ),
                ),
            );
        this.isAuthenticated$ = this.authService.isAuth$;
        this.isEditing$ = this.sharedService.editingTraining$$;
        this.changeDetectorRef.markForCheck();
    }

    ionViewDidEnter(): void {
        if (this.ionContent) {
            setTimeout(async () => await this.ionContent.scrollToBottom(300), 100);
        }
    }

    ionViewDidLeave(): void {
        this.sharedService.editingTraining$$.next(false);
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
                    this.trainingStream$ = this.newTrainingService.allExercisesChanged$
                        .pipe(
                            take(1),
                            map(exercises => ({
                                IsLoading: true,
                                Value: exercises,
                                IsError: false,
                            })),
                            delay(300),
                            tap(_ => {
                                this.newTrainingService.updateTrainingState(response.data);
                                this.formInit();
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
            componentProps: {
                dateValue: format(new Date(this.date.value), `yyyy-MM-dd'T'HH:mm:ss'Z'`),
            },
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
                    this.date.patchValue(data);
                    this.setFormattedDate(data);
                }
            });
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
                            editedDate: response?.Value?.trainingDate ?? new Date(),
                            editTraining: {
                                ...response?.Value,
                                editMode: this.editMode,
                            },
                        };
                        this.newTrainingService.updateTrainingState(this.editData.editTraining);
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
                    validators: [CommonValidators.isNumber(), Validators.min(30), Validators.max(300)],
                    updateOn: 'blur',
                },
            ),
            date: new FormControl(this.editData?.editedDate ? this.editData.editedDate : new Date().toISOString(), [Validators.required]),
            exercises: new FormControl(currentTrainingState.exercises),
        });
        this.setFormattedDate(this.date.value);
    }

    private setFormattedDate(dateValue: string): void {
        const [ date, time ] = dateValue.split('T');
        this.formattedTodayDate = format(parseISO(format(new Date(date), 'yyyy-MM-dd') + `T${time}`), 'HH:mm, MMM d, yyyy');
    }

}
