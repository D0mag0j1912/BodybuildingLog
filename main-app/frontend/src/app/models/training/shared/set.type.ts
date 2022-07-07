import { Set } from './set.model';

export type FormSetData = {
    readonly [P in keyof Omit<Set, '_id'>]?: Set[P];
};

export type SetConstituent = 'weightLifted' | 'reps';
