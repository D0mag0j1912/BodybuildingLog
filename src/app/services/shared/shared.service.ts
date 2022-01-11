import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TrainingData } from '../../models/common/interfaces/common.model';
import { PastTrainingsResponse } from '../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class SharedService {

    readonly editingTraining$$: Subject<boolean> = new Subject<boolean>();

    readonly pastTrainingId$$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    readonly deletedTraining$$: Subject<TrainingData<PastTrainingsResponse>> = new Subject<TrainingData<PastTrainingsResponse>>();

    subtractTwoHours(date: Date): Date {
        return new Date(new Date(date).setHours(new Date(date).getHours() - 2));
    }
}
