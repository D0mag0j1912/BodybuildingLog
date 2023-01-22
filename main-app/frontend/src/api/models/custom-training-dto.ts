/* tslint:disable */
/* eslint-disable */
import { ExerciseDto } from './exercise-dto';
export interface CustomTrainingDto {

  /**
   * Enum describing particular day of week
   */
  dayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

  /**
   * Selected exercise for training
   */
  exercises: Array<ExerciseDto>;
}
