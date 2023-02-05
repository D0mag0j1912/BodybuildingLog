import { NewTrainingDto as NewTraining } from '../../../../../api/models/new-training-dto';

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
