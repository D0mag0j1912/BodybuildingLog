import { NewTraining } from '../../new-training/new-training.model';

export type TrainingItemActions = 'delete' | 'more';

export interface TrainingActionPerformed<T> {
    action: TrainingItemActions;
    data: T;
}

export interface DeleteTrainingActionData {
    weekDays: string[];
    timeCreated: string;
    dayIndex: number;
    training: NewTraining;
}
