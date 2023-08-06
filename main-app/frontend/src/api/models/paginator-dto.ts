/* tslint:disable */
/* eslint-disable */
import { PaginatorParamsDto } from './paginator-params-dto';
export interface PaginatorDto {
  CurrentPage: number;
  Next?: PaginatorParamsDto;
  PerPage: number;
  Previous?: PaginatorParamsDto;
  TotalCount: number;
  TotalPages: number;
}
