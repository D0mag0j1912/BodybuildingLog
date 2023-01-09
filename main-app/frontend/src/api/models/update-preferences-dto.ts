/* tslint:disable */
/* eslint-disable */
import { PreferencesDto } from './preferences-dto';
export interface UpdatePreferencesDto {

  /**
   * Type of preferences that changed
   */
  preferenceChanged: string;

  /**
   * Preferences data
   */
  preferences: PreferencesDto;
}
