import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap, take, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { TrainingSplitDto as TrainingSplit } from '../../../../../api/models/training-split-dto';
import { ExerciseDto as Exercise } from '../../../../../api/models/exercise-dto';
import { DialogRoles } from '../../../../constants/enums/dialog-roles.enum';
import { mapStreamData } from '../../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../../models/common/common.model';
import { ExercisesService } from '../../../../services/api/training/exercises.service';
import { ExercisesStoreService } from '../../../../services/store/training/exercises-store.service';
import { AuthStoreService } from '../../../../services/store/auth/auth-store.service';
import { CustomTrainingDto as CustomTraining } from '../../../../../api/models/custom-training-dto';
import { TrainingSplitsFacadeService } from '../../../../services/store/facade/training-splits-facade.service';

type NumberOfSetsType = Pick<CustomTraining, 'dayOfWeek'> & { sets: number[] };

@Component({
    templateUrl: './create-training-split.component.html',
    styleUrls: ['./create-training-split.component.scss'],
})
export class CreateTrainingSplitComponent implements OnInit {
    readonly SWIPER_CONFIG: SwiperOptions = {
        pagination: true,
    };
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

    daysOfWeek$: Observable<string[]> = this._translateService.stream('weekdays').pipe(
        map((value: { [key: string]: string }) =>
            Object.entries(value).map((entry: [string, string]) => {
                const dayOfWeek = (entry[0].charAt(0).toUpperCase() +
                    entry[0].slice(1)) as CustomTraining['dayOfWeek'];
                this.form.controls.trainings.push(
                    new FormGroup({
                        dayOfWeek: new FormControl<CustomTraining['dayOfWeek']>(
                            dayOfWeek,
                            Validators.required,
                        ),
                        exercises: new FormControl<Exercise[]>([], Validators.required),
                    }),
                );
                return entry[1];
            }),
        ),
    );

    exercisesData$ = this._exercisesStoreService.allExercisesState$.pipe(
        take(1),
        switchMap((data: StreamData<Exercise[]>) => {
            if (data) {
                return of(data);
            } else {
                return this._exercisesService.getExercises();
            }
        }),
        mapStreamData(),
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

    formValueChanges$ = this.form.valueChanges.pipe(
        startWith(this.form.value),
        tap((value) => {
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
                                exercises: [...training.exercises].map(
                                    (exercise: Exercise, indexExercise: number) => ({
                                        ...exercise,
                                        numberOfSets: dayFound.sets[indexExercise],
                                    }),
                                ),
                            };
                        }
                        return training;
                    },
                ),
                userId: this._authStoreService.getLoggedUser()._id,
            };
            this._trainingSplitsFacadeService.updateTrainingSplitForm(this.trainingSplitForm);
        }),
    );

    constructor(
        private _exercisesService: ExercisesService,
        private _exercisesStoreService: ExercisesStoreService,
        private _authStoreService: AuthStoreService,
        private _trainingSplitsFacadeService: TrainingSplitsFacadeService,
        private _translateService: TranslateService,
        private _modalController: ModalController,
    ) {}

    ngOnInit(): void {
        Swiper.use([Pagination]);
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
            const set = [numberOfSets];
            const newData: NumberOfSetsType = {
                dayOfWeek,
                sets: set,
            };
            this.numberOfSets = [...this.numberOfSets, newData];
        }
        this.form.updateValueAndValidity({ emitEvent: true });
    }

    createTrainingSplit(): void {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        this._trainingSplitsFacadeService.createTrainingSplit(this.trainingSplitForm);
    }
}
