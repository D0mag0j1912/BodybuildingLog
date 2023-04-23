/* tslint:disable */
/* eslint-disable */
import { Translations } from './translations';
export interface ExerciseDto {

  /**
   * Exercise id
   */
  '_id'?: string;

  /**
   * Enum describing available set categories
   */
  availableSetCategories: Array<'dynamicBodyweight' | 'dynamicWeighted' | 'staticBodyweight' | 'staticWeighted' | 'freeWeighted'>;
  imageUrl?: string;
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

  /**
   * Exercise translation
   */
  translations: Translations;
}
