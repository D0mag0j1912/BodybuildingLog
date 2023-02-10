import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { ExerciseDto as Exercise } from '../../../../../api/models/exercise-dto';
import { DialogRoles } from '../../../../constants/enums/dialog-roles.enum';
import { mapStreamData } from '../../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../../models/common/common.model';
import { ExercisesService } from '../../../../services/api/training/exercises.service';
import { ExercisesStoreService } from '../../../../services/store/training/exercises-store.service';
import { EXERCISE_MOCK } from '../../../../mock/training-split.mock';

@Component({
    templateUrl: './create-training-split.component.html',
    styleUrls: ['./create-training-split.component.scss'],
})
export class CreateTrainingSplitComponent {
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

    form = new FormGroup({
        Name: new FormControl('', Validators.required),
        Exercises: new FormControl<Exercise[]>(EXERCISE_MOCK, Validators.required),
    });
    activeDay = 1;

    constructor(
        private _exercisesService: ExercisesService,
        private _exercisesStoreService: ExercisesStoreService,
        private _translateService: TranslateService,
        private _modalController: ModalController,
    ) {}

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }

    onDayActivated(index: number): void {
        this.activeDay = index + 1;
    }
}
