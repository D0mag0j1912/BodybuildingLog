/* tslint:disable */
/* eslint-disable */
import { NewTrainingPreferencesDto } from './new-training-preferences-dto';
import { SingleExerciseDto } from './single-exercise-dto';
export interface NewTrainingDto {
  '_id'?: string;

  /**
   * User's bodyweight
   */
  bodyweight?: number;

  /**
   * Whether it's edit mode or not
   */
  editMode: boolean;

  /**
   * Training exercises data
   */
  exercises: Array<SingleExerciseDto>;

  /**
   * Training preferences
   */
  preferences: NewTrainingPreferencesDto;

  /**
   * Training date
   */
  trainingDate: string;

  /**
   * Id of authenticated user
   */
  userId: string;
}
