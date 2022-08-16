import { Set } from '../../models/training/shared/set.model';

export function createInitialSet(): Set[] {
    return [{
        setNumber: 1,
        weightLifted: null,
        reps: null,
    } as Set];
}
