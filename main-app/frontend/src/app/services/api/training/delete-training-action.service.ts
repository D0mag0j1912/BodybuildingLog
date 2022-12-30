import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { mapDateInterval } from '../../../helpers/training/past-trainings/map-past-trainings-dates.helper';
import { StreamData } from '../../../models/common/common.model';
import { Paginator, SearchDataDto } from '../../../models/common/paginator.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';
import { TrainingActions } from '../../../models/training/past-trainings/training-actions/training-actions.model';
import { DeleteTrainingActionData } from '../../../models/training/past-trainings/training-actions/training-actions.model';
import {
    DeleteTrainingActionComponent,
    DeleteTrainingActionDialogData,
} from '../../../views/shared/training/training-actions/delete-training-action/delete-training-action.component';

@Injectable()
export class DeleteTrainingActionService implements TrainingActions {
    constructor(
        private _http: HttpClient,
        private _modalController: ModalController,
        private _datePipe: DatePipe,
        private _translateService: TranslateService,
    ) {}

    async perform(data: DeleteTrainingActionData): Promise<void> {
        await this.openDeleteTrainingDialog(data);
    }

    async openDeleteTrainingDialog(data: DeleteTrainingActionData): Promise<void> {
        const modal = await this._modalController.create({
            component: DeleteTrainingActionComponent,
            componentProps: {
                title$: this._translateService.stream(
                    'training.past_trainings.actions.delete_training',
                ),
                dateCreated$: this._translateService
                    .stream(`weekdays.${data.weekDays[data.dayIndex]}`)
                    .pipe(
                        map(
                            (value: { [key: string]: string }) =>
                                `${value} (${this._datePipe.transform(
                                    data.training.trainingDate,
                                    'dd.MM.yyyy',
                                )})`,
                        ),
                    ),
                timeCreated: data.timeCreated,
                training: data.training,
            } as DeleteTrainingActionDialogData,
        });
        await modal.present();
    }

    deleteTraining(
        trainingId: string,
        deleteTrainingMeta: {
            searchData: SearchDataDto | undefined;
            currentDate: Date | undefined;
        },
    ): Observable<StreamData<Paginator<PastTrainings>>> {
        const params = new HttpParams().set('meta', JSON.stringify(deleteTrainingMeta));
        return this._http
            .delete<StreamData<Paginator<PastTrainings>>>(
                environment.BACKEND + `/training/delete-training/${trainingId}`,
                { params: params },
            )
            .pipe(
                map((response: StreamData<Paginator<PastTrainings>>) => mapDateInterval(response)),
            );
    }
}
