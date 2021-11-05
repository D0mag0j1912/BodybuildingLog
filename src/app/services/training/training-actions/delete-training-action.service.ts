import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneralResponseData } from 'src/app/models/general-response.model';
import { NewTraining } from 'src/app/models/training/new-training/new-training.model';
import {
    DeleteTrainingActionComponent,
    DeleteTrainingActionDialogData } from 'src/app/views/shared/training-actions/delete-training-action/delete-training-action.component';
import { environment } from '../../../../environments/environment';

export interface DeleteTrainingActionData {
    weekDays: ReadonlyArray<string>;
    dayIndex: number;
    training: NewTraining;
}
@Injectable()
export class DeleteTrainingActionService {

    constructor(
        private readonly http: HttpClient,
        private readonly dialog: MatDialog,
        private readonly datePipe: DatePipe,
        private readonly translateService: TranslateService,
    ){}

    perform(data: DeleteTrainingActionData): void {
        this.openDeleteTrainingDialog(data);
    }

    openDeleteTrainingDialog(data: DeleteTrainingActionData): void {
        this.dialog.open(DeleteTrainingActionComponent, {
            data: {
                title$: this.translateService.stream('training.past_trainings.actions.delete_training') as Observable<string>,
                createdAt$: this.translateService.stream(`weekdays.${data.weekDays[data.dayIndex]}`).pipe(
                    map((value: { [key: string]: string }) => `${value} (${this.datePipe.transform(data.training.createdAt as Date, 'dd.MM.yyyy')})`)
                ),
                training$: of(data.training as NewTraining),
                deleteTrainingFn: (trainingId: string) => this.deleteTraining(trainingId)
            } as DeleteTrainingActionDialogData,
            panelClass: 'delete-training-dialog'
        });
    }

    deleteTraining(trainingId: string): Observable<GeneralResponseData>{
        return this.http.delete<GeneralResponseData>(environment.backend + `/delete_training/${trainingId}`);
    }
}
