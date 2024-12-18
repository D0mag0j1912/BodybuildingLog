import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { getDay } from 'date-fns';
import { SwiperContainer } from 'swiper/element';
import { TrainingSplitDto as TrainingSplit } from '../../../../../api/models/training-split-dto';
import { ExerciseDto as Exercise } from '../../../../../api/models/exercise-dto';
import { DialogRoles } from '../../../../constants/enums/dialog-roles.enum';
import { mapStreamData } from '../../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../../models/common/common.model';
import { CustomTrainingDto as CustomTraining } from '../../../../../api/models/custom-training-dto';
import { TrainingSplitsFacadeService } from '../../../../store/training-splits/training-splits-facade.service';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { TrainingSplitsSuccessService } from '../../../../services/helper/training-split-success.service';
import { TrainingsCommonFacadeService } from '../../../../store/trainings-common/trainings-common-facade.service';

type NumberOfSetsType = Pick<CustomTraining, 'dayOfWeek'> & { sets: number[] };
const SUNDAY_SLIDE = 6;

@Component({
    templateUrl: './create-training-split.component.html',
    styleUrls: ['./create-training-split.component.scss'],
    providers: [UnsubscribeService],
})
export class CreateTrainingSplitComponent implements OnInit {
    readonly TRAINING_SPLIT_NAME_MAXLENGTH = 100;

    form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        trainings: new FormArray<
            FormGroup<{
                dayOfWeek: FormControl<CustomTraining['dayOfWeek']>;
                exercises: FormControl<Exercise[]>;
            }>
        >([]),
    });
    trainingSplitForm: TrainingSplit;
    numberOfSets: NumberOfSetsType[] = [];
    initialSlide: number;

    daysOfWeek$: Observable<string[]> = this._translateService.stream('weekdays').pipe(
        map((value: { [key: string]: string }) =>
            Object.entries(value).map((entry: [string, string], index: number) => {
                const dayOfWeek = (entry[0].charAt(0).toUpperCase() +
                    entry[0].slice(1)) as CustomTraining['dayOfWeek'];
                this.form.controls.trainings.push(
                    new FormGroup({
                        dayOfWeek: new FormControl<CustomTraining['dayOfWeek']>(
                            dayOfWeek,
                            Validators.required,
                        ),
                        exercises: new FormControl<Exercise[]>([]),
                    }),
                );
                if (this.trainingSplit) {
                    const editExercises =
                        this.trainingSplit.trainings.find(
                            (training: CustomTraining) => training.dayOfWeek === dayOfWeek,
                        )?.exercises ?? [];
                    this.form.controls.trainings.at(index).patchValue({
                        dayOfWeek,
                        exercises: editExercises,
                    });
                    this.numberOfSets = this.trainingSplit.trainings.map(
                        (trainingSplit: CustomTraining) => ({
                            dayOfWeek: trainingSplit.dayOfWeek,
                            sets: trainingSplit.exercises
                                .map((exercise: Exercise) => exercise.numberOfSets)
                                .filter(Boolean),
                        }),
                    );
                }
                return dayOfWeek;
            }),
        ),
    );

    exercisesData$ = this._trainingsCommonFacadeService.selectExercises().pipe(
        take(1),
        mapStreamData<Exercise[]>(),
        map((data: StreamData<Exercise[]>) => {
            if (data.IsError) {
                return {
                    ...data,
                    Value: [],
                };
            }
            return data;
        }),
    );

    trainingSplitCreated$ = this._trainingSplitsSuccessService.closeModal$.pipe(
        tap(
            async (_) =>
                await this._modalController.dismiss(null, DialogRoles.CREATE_TRAINING_SPLIT),
        ),
    );

    @Input()
    trainingSplit: TrainingSplit;

    @ViewChild('swiperElement')
    set swiperElement(element: ElementRef) {
        if (element) {
            const swiper = (element.nativeElement as SwiperContainer).swiper;
            swiper.slideTo(this.initialSlide);
        }
    }

    constructor(
        private _trainingsCommonFacadeService: TrainingsCommonFacadeService,
        private _trainingSplitsFacadeService: TrainingSplitsFacadeService,
        private _trainingSplitsSuccessService: TrainingSplitsSuccessService,
        private _translateService: TranslateService,
        private _unsubscribeService: UnsubscribeService,
        private _modalController: ModalController,
    ) {}

    ngOnInit(): void {
        if (this.trainingSplit) {
            this.initialSlide = !getDay(new Date()) ? SUNDAY_SLIDE : getDay(new Date()) - 1;
        } else {
            this.initialSlide = undefined;
        }
        this.form.controls.name.patchValue(this.trainingSplit?.name ?? '');

        this.form.valueChanges.pipe(takeUntil(this._unsubscribeService)).subscribe((value) => {
            this.trainingSplitForm = {
                ...this.trainingSplitForm,
                name: value.name,
                trainings: [...(value.trainings as CustomTraining[])].map(
                    (training: CustomTraining) => {
                        const dayFound = this.numberOfSets.find(
                            (value: NumberOfSetsType) => value.dayOfWeek === training.dayOfWeek,
                        );
                        if (dayFound) {
                            return {
                                ...training,
                                exercises: [...training.exercises]
                                    .map((exercise: Exercise, indexExercise: number) => ({
                                        ...exercise,
                                        numberOfSets: dayFound.sets[indexExercise],
                                    }))
                                    .map((exercise: Exercise) => ({
                                        ...exercise,
                                        selectedSetCategories: Array(exercise.numberOfSets).fill(
                                            exercise.selectedSetCategories[0],
                                        ),
                                    })),
                            };
                        }
                        return training;
                    },
                ),
            };
            this._trainingSplitsFacadeService.updateTrainingSplitForm(this.trainingSplitForm);
        });
    }

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }

    onSetNumberChange(
        numberOfSets: number,
        dayOfWeek: CustomTraining['dayOfWeek'],
        exercisesIndex: number,
    ): void {
        const dayFound = this.numberOfSets.find(
            (value: NumberOfSetsType) => value.dayOfWeek === dayOfWeek,
        );
        if (dayFound) {
            this.numberOfSets = this.numberOfSets.map((data: NumberOfSetsType) => {
                if (data.dayOfWeek === dayOfWeek) {
                    const setNotEntered = exercisesIndex > data.sets.length - 1;
                    let updatedSets: number[];
                    if (!setNotEntered) {
                        updatedSets = data.sets.map((setNumber: number, index: number) =>
                            index === exercisesIndex ? numberOfSets : setNumber,
                        );
                    } else {
                        updatedSets = [...data.sets, numberOfSets];
                    }
                    return {
                        ...data,
                        sets: updatedSets,
                    };
                }
                return data;
            });
        } else {
            const set = [numberOfSets].filter(Boolean);
            const newData: NumberOfSetsType = {
                dayOfWeek,
                sets: set,
            };
            this.numberOfSets = [...this.numberOfSets, newData];
        }
        this.form.updateValueAndValidity({ emitEvent: true });
    }

    submitTrainingSplit(): void {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        if (this.trainingSplit) {
            const trainingSplitData = {
                ...this.trainingSplit,
                name: this.trainingSplitForm.name,
                trainings: this.trainingSplitForm.trainings,
            };
            this._trainingSplitsFacadeService.editTrainingSplit(
                trainingSplitData._id,
                trainingSplitData,
            );
        } else {
            this._trainingSplitsFacadeService.createTrainingSplit(this.trainingSplitForm);
        }
    }
}
