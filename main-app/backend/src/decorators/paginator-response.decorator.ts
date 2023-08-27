import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PastTrainingsDto } from '../models/training/past-trainings/past-trainings.model';
import { PaginatorDto } from '../models/common/paginator.model';
import { PaginatorParamsDto } from '../models/common/paginator-params.model';

export const PaginatorResponse = () =>
    applyDecorators(
        ApiOkResponse({
            status: 200,
            schema: {
                title: `PaginatorPastTrainingsResponse`,
                allOf: [
                    { $ref: getSchemaPath(PaginatorDto) },
                    {
                        type: 'object',
                        properties: {
                            Next: {
                                type: 'object',
                                $ref: getSchemaPath(PaginatorParamsDto),
                            },
                            Previous: {
                                type: 'object',
                                $ref: getSchemaPath(PaginatorParamsDto),
                            },
                            CurrentPage: {
                                type: 'number',
                            },
                            PerPage: {
                                type: 'number',
                            },
                            TotalCount: {
                                type: 'number',
                            },
                            TotalPages: {
                                type: 'number',
                            },
                            Results: {
                                type: 'object',
                                $ref: getSchemaPath(PastTrainingsDto),
                            },
                        },
                    },
                ],
            },
        }),
    );
