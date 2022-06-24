import { Set } from '../../models/training/shared/set.model';

export function createInitialSet(): Set[] {
    const sets: Set[] = [];
    sets.push({
        setNumber: 1,
        weightLifted: null,
        reps: null,
    } as Set);
    return sets;
}
