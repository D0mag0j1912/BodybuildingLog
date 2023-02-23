import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { TrainingSplitDto as TrainingSplit } from '../../../../../api/models/training-split-dto';
import { ExerciseDto as Exercise } from '../../../../../api/models/exercise-dto';
import { DialogRoles } from '../../../../constants/enums/dialog-roles.enum';
import { mapStreamData } from '../../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../../models/common/common.model';
import { ExercisesService } from '../../../../services/api/training/exercises.service';
import { ExercisesStoreService } from '../../../../services/store/training/exercises-store.service';

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
        exercises: new FormControl<Exercise[]>([], Validators.required),
    });
    trainingSplitForm: TrainingSplit;

    daysOfWeek$: Observable<string[]> = this._translateService
        .stream('weekdays')
        .pipe(map((value) => Object.values(value)));

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

    constructor(
        private _exercisesService: ExercisesService,
        private _exercisesStoreService: ExercisesStoreService,
        private _translateService: TranslateService,
        private _modalController: ModalController,
    ) {}

    ngOnInit(): void {
        Swiper.use([Pagination]);
    }

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }

    createTrainingSplit(): void {
        //TODO: Create training split
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
    }
}
