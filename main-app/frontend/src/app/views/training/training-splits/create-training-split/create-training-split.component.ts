import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExerciseDto } from '../../../../../api';
import { DialogRoles } from '../../../../constants/enums/dialog-roles.enum';
import { mapStreamData } from '../../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../../models/common/common.model';
import { ExercisesService } from '../../../../services/api/training/exercises.service';

@Component({
    templateUrl: './create-training-split.component.html',
    styleUrls: ['./create-training-split.component.scss'],
})
export class CreateTrainingSplitComponent {
    daysOfWeek$: Observable<string[]> = this._translateService
        .stream('weekdays')
        .pipe(map((value) => Object.values(value)));

    exercisesData$ = this._exercisesService.getExercises().pipe(
        mapStreamData(),
        map((data: StreamData<ExerciseDto[]>) => {
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
        Exercises: new FormControl<string[]>([], Validators.required),
    });
    activeDay = 1;

    constructor(
        private _exercisesService: ExercisesService,
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
