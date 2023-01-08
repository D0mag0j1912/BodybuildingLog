/* tslint:disable */
/* eslint-disable */
import { DateIntervalDto } from './date-interval-dto';
import { NewTrainingDto } from './new-training-dto';
export interface PastTrainingsDto {
  Dates: DateIntervalDto;
  DayName?: string;
  EarliestTrainingDate?: string;
  IsNextWeek?: boolean;
  IsPreviousWeek?: boolean;
  Message?: string;
  Trainings: NewTrainingDto;
}
