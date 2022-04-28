import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
        private readonly modalController: ModalController,
        private readonly datePipe: DatePipe,
        private readonly translateService: TranslateService,
    ) { }

    async perform(data: DeleteTrainingActionData): Promise<void> {
        await this.openDeleteTrainingDialog(data);
    }

    async openDeleteTrainingDialog(data: DeleteTrainingActionData): Promise<void> {
        const modal = await this.modalController.create({
            component: DeleteTrainingActionComponent,
            componentProps: {
                title$: this.translateService.stream('training.past_trainings.actions.delete_training'),
                dateCreated$: this.translateService.stream(`weekdays.${data.weekDays[data.dayIndex]}`).pipe(
                    map((value: { [key: string]: string }) => `${value} (${this.datePipe.transform(data.training.trainingDate, 'dd.MM.yyyy')})`),
                ),
                timeCreated$: of(data.timeCreated),
                training$: of(data.training),
            } as DeleteTrainingActionDialogData,
        });
        await modal.present();
    }

    deleteTraining(
        trainingId: string,
        currentDate: Date,
    ): Observable<StreamData<Paginator<PastTrainings>>> {
        const params = `?currentDate=${currentDate}`;
        return this.http.delete<StreamData<Paginator<PastTrainings>>>(environment.BACKEND + `/training/delete_training/${trainingId}${params}`)
            .pipe(
                map((response: StreamData<Paginator<PastTrainings>>) => mapDateInterval(response)),
            );
    }
}
