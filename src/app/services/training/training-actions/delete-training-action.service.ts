import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Training } from 'src/app/models/training/new-training/new-training.model';
import { environment } from '../../../../environments/environment';
import { mapDateInterval } from '../../../helpers/training/past-trainings/map-past-trainings-dates.helper';
import { StreamData } from '../../../models/common/interfaces/common.model';
import { Paginator } from '../../../models/common/interfaces/paginator.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';
import { TrainingActions } from '../../../models/training/past-trainings/training-actions/training-actions.model';
import { DeleteTrainingActionData } from '../../../models/training/past-trainings/training-actions/training-actions.model';
import {
    DeleteTrainingActionComponent,
    DeleteTrainingActionDialogData } from '../../../views/shared/training/training-actions/delete-training-action/delete-training-action.component';

@Injectable()
export class DeleteTrainingActionService implements TrainingActions {

    constructor(
        private readonly http: HttpClient,
        private readonly dialog: MatDialog,
        private readonly datePipe: DatePipe,
        private readonly translateService: TranslateService,
    ) {}

    perform(data: DeleteTrainingActionData): void {
        this.openDeleteTrainingDialog(data);
    }

    openDeleteTrainingDialog(data: DeleteTrainingActionData): void {
        this.dialog.open(DeleteTrainingActionComponent, {
            data: {
                title$: this.translateService.stream('training.past_trainings.actions.delete_training') as Observable<string>,
                dateCreated$: this.translateService.stream(`weekdays.${data.weekDays[data.dayIndex]}`).pipe(
                    map((value: { [key: string]: string }) => `${value} (${this.datePipe.transform(data.training.createdAt as Date, 'dd.MM.yyyy')})`),
                ) as Observable<string>,
                timeCreated$: of(data.timeCreated) as Observable<string>,
                training$: of(data.training as Training),
                deleteTrainingFn: (
                    trainingId: string,
                    currentDate: Date,
                ) => this.deleteTraining(trainingId, currentDate),
            } as DeleteTrainingActionDialogData,
            panelClass: 'delete-training-dialog',
        });
    }

    deleteTraining(
        trainingId: string,
        currentDate: Date,
    ): Observable<StreamData<Paginator<PastTrainings>>> {
        const params: string = `?currentDate=${currentDate}`;
        return this.http.delete<StreamData<Paginator<PastTrainings>>>(environment.BACKEND + `/training/delete_training/${trainingId}${params}`)
            .pipe(
                map((response: StreamData<Paginator<PastTrainings>>) => mapDateInterval(response)),
            );
    }
}
