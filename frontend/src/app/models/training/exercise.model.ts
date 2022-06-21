export interface Exercise {
    readonly _id?: string;
    readonly name?: string;
    readonly imageUrl?: string;
    readonly primaryMuscleGroup?: string;
    readonly translations?: {
        hr: string;
        en: string;
    };
}
