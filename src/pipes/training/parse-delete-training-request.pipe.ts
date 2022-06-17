import { Injectable, PipeTransform } from '@nestjs/common';
import { INITIAL_PAGE, DEFAULT_SIZE } from '../../models/common/paginator.model';
import { DeleteTrainingMetaDto } from '../../models/training/training-actions/delete-training-action.model';

@Injectable()
export class ParseDeleteTrainingRequest implements PipeTransform {

    transform(jsonObject: { meta: string }): DeleteTrainingMetaDto {
        const meta = JSON.parse(jsonObject.meta) as DeleteTrainingMetaDto;
        if (meta?.searchData) {
            if (!meta?.searchData?.page) {
                meta.searchData.page = INITIAL_PAGE;
            }
            if (!meta?.searchData?.size) {
                meta.searchData.size = DEFAULT_SIZE;
            }
            return {
                ...meta,
                searchData: {
                    ...meta.searchData,
                    page: +meta.searchData.page,
                    size: +meta.searchData.size,
                },
            };
        }
        else {
            return meta;
        }
    }
}