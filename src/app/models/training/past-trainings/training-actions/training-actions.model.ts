import { NewTraining } from '../../new-training/new-training.model';

export type TrainingItemActions = 'delete' | 'more';

export interface TrainingActions {
    perform(data: DeleteTrainingActionData): void;
}

export interface DeleteTrainingActionData {
    readonly weekDays: ReadonlyArray<string>;
    readonly timeCreated: string;
    readonly dayIndex: number;
    readonly training: NewTraining;
}
