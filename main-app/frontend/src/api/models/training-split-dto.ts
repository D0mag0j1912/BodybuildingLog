/* tslint:disable */
/* eslint-disable */
import { CustomTrainingDto } from './custom-training-dto';
export interface TrainingSplitDto {

  /**
   * Training split id
   */
  '_id'?: string;

  /**
   * Training split name
   */
  name: string;

  /**
   * Trainings in training split
   */
  trainings: Array<CustomTrainingDto>;

  /**
   * Logged user ID
   */
  userId: string;
}
