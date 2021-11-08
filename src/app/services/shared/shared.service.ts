import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PastTrainingsResponse } from '../../models/training/past-trainings/past-trainings-response.model';
@Injectable()
export class SharedService {

    readonly editingTraining$$: Subject<boolean> = new Subject<boolean>();

    readonly pastTrainingId$$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    readonly pastTrainingsData$$: Subject<PastTrainingsResponse> = new Subject<PastTrainingsResponse>();

}
