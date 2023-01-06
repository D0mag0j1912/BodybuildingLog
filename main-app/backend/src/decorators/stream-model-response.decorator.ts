import { applyDecorators, Type } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { StreamModelDto } from '../models/common/stream.model';

export const StreamModelResponse = <T extends Type<unknown>>(model: T, isArray = false) =>
    applyDecorators(
        ApiOkResponse({
            status: 200,
            schema: {
                allOf: [
                    { $ref: getSchemaPath(StreamModelDto) },
                    {
                        properties: {
                            IsLoading: {
                                type: 'boolean',
                                items: { $ref: getSchemaPath(model) },
                            },
                            IsError: {
                                type: 'boolean',
                                items: { $ref: getSchemaPath(model) },
                            },
                            Value: {
                                type: isArray ? 'array' : 'object',
                                items: { $ref: getSchemaPath(model) },
                            },
                        },
                    },
                ],
            },
        }),
    );
