import { applyDecorators, Type } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { StreamModelDto } from '../models/common/stream.model';

export const StreamModelResponse = <T extends Type<unknown>>(model: T, isArray = false) =>
    applyDecorators(
        ApiOkResponse({
            status: 200,
            schema: {
                title: `StreamResponseOf${model.name}`,
                allOf: [
                    { $ref: getSchemaPath(StreamModelDto) },
                    {
                        type: 'object',
                        properties: {
                            IsLoading: {
                                type: 'boolean',
                            },
                            IsError: {
                                type: 'boolean',
                            },
                            Value: isArray
                                ? {
                                      type: 'array',
                                      items: { $ref: getSchemaPath(model) },
                                  }
                                : {
                                      type: 'object',
                                      $ref: getSchemaPath(model),
                                  },
                        },
                    },
                ],
            },
        }),
    );
