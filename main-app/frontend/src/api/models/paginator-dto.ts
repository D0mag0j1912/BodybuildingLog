/* tslint:disable */
/* eslint-disable */
import { PaginatorParamsDto } from './paginator-params-dto';
export interface PaginatorDto {
  CurrentPage: number;
  Next?: PaginatorParamsDto;
  Previous?: PaginatorParamsDto;
  Size: number;
  TotalCount: number;
  TotalPages: number;
}
