import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StreamData } from '../../models/common/interfaces/common.model';
import { Paginator } from '../../models/common/interfaces/paginator.model';
import { PastTrainings, PastTrainingsQueryParams } from '../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class SharedService {

    readonly editingTraining$$: Subject<boolean> = new Subject<boolean>();

    readonly pastTrainingsQueryParams$$: BehaviorSubject<PastTrainingsQueryParams> = new BehaviorSubject<PastTrainingsQueryParams>(null);

    readonly deletedTraining$$: Subject<StreamData<Paginator<PastTrainings>>> = new Subject<StreamData<Paginator<PastTrainings>>>();

    subtractTwoHours(date: Date): Date {
        return new Date(new Date(date).setHours(new Date(date).getHours() - 2));
    }
}
