/* tslint:disable */
/* eslint-disable */
import { DateIntervalDto } from './date-interval-dto';
import { NewTrainingDto } from './new-training-dto';
export interface PastTrainingsDto {
  Dates: DateIntervalDto;
  DayName: string;
  EarliestTrainingDate: string;
  IsNext: boolean;
  IsPrevious: boolean;
  Message?: string;
  Trainings: Array<NewTrainingDto>;
}
