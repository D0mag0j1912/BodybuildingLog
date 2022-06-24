import { Injectable, PipeTransform } from '@nestjs/common';
import { SearchDataDto } from '../../models/common/paginator.model';
import { INITIAL_PAGE, DEFAULT_SIZE } from '../../constants/paginator.const';

@Injectable()
export class PaginatePipe implements PipeTransform {

    transform(query: SearchDataDto): SearchDataDto {
        if (!query?.page) {
            query.page = INITIAL_PAGE;
        }
        if (!query?.size) {
            query.size = DEFAULT_SIZE;
        }
        return {
            ...query,
            page: +query.page,
            size: +query.size,
        };
    }
}