/* tslint:disable */
/* eslint-disable */
import { ExerciseDto } from './exercise-dto';
import { SetDto } from './set-dto';
export interface SingleExerciseDto {
  '_id'?: string;
  availableExercises: ExerciseDto;
  exerciseData: ExerciseDto;

  /**
   * Exercise sets
   */
  sets: Array<SetDto>;
  total: number;
}
