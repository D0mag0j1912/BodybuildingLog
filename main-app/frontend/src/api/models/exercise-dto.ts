/* tslint:disable */
/* eslint-disable */
export interface ExerciseDto {
  '_id'?: string;

  /**
   * Enum describing available set categories
   */
  availableSetCategories: Array<'dynamicBodyweight' | 'dynamicWeighted' | 'staticBodyweight' | 'staticWeighted' | 'freeWeighted'>;
  imageUrl: string;
  name: string;
  primaryMuscleGroup: string;

  /**
   * Enum describing selected set categories
   */
  selectedSetCategories: Array<'dynamicBodyweight' | 'dynamicWeighted' | 'staticBodyweight' | 'staticWeighted' | 'freeWeighted'>;
}
