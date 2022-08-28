import { Translations } from '../common/translations.model';

export interface Exercise {
    readonly _id?: string;
    readonly name?: string;
    readonly imageUrl?: string;
    readonly primaryMuscleGroup?: string;
    readonly translations?: Translations;
}
