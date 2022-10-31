import { Exercise } from '../exercise.model';

export type ChangeSetCategoryPayloadType = Pick<Exercise, 'primarySetCategory' | 'setCategories'>;
