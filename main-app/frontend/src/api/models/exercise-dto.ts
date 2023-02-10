/* tslint:disable */
/* eslint-disable */
export interface ExerciseDto {

  /**
   * Exercise ID
   */
  '_id'?: string;

  /**
   * Enum describing available set categories
   */
  availableSetCategories: Array<'dynamicBodyweight' | 'dynamicWeighted' | 'staticBodyweight' | 'staticWeighted' | 'freeWeighted'>;
  imageUrl: string;
  name: string;

  /**
   * Number of sets for selected exercise
   */
  numberOfSets?: number;

  /**
   * Enum describing exercise primary muscle group
   */
  primaryMuscleGroup: 'Legs' | 'Core' | 'Back' | 'Chest' | 'Biceps' | 'Triceps' | 'Neck' | 'Forearm' | 'Glutes' | 'Shoulders' | '';

  /**
   * Enum describing selected set categories
   */
  selectedSetCategories: Array<'dynamicBodyweight' | 'dynamicWeighted' | 'staticBodyweight' | 'staticWeighted' | 'freeWeighted'>;
}
