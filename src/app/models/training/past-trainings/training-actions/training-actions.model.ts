import { NewTraining } from '../../new-training/new-training.model';

export type TrainingItemActions = 'delete' | 'more';

export interface TrainingActions {
    perform(data: DeleteTrainingActionData): void;
}

export interface DeleteTrainingActionData {
    weekDays: ReadonlyArray<string>;
    dayIndex: number;
    training: NewTraining;
}
