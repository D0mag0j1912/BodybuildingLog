import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
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
export class CreateTrainingSplitComponent {
    readonly TRAINING_SPLIT_NAME_MAXLENGTH = 100;

    form = new FormGroup({
        Name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        Exercises: new FormControl<Exercise[]>([], Validators.required),
        NumberOfSets: new FormArray<FormControl<number>>([]),
    });
    activeDay = 1;

    exercisesChanges$ = this.form.controls.Exercises.valueChanges.pipe(
        tap((selectedExercises: Exercise[]) => {
            while (this.form.controls.NumberOfSets.length !== 0) {
                this.form.controls.NumberOfSets.removeAt(0);
            }
            [...selectedExercises].forEach((exercise: Exercise) => {
                this.form.controls.NumberOfSets.push(
                    new FormControl(exercise.numberOfSets, Validators.required),
                );
            });
        }),
    );

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

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }

    onDayActivated(index: number): void {
        this.activeDay = index + 1;
    }

    createTrainingSplit(): void {
        //TODO: Create training split
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
    }
}
