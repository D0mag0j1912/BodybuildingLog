import { Injectable, PipeTransform } from '@nestjs/common';
import { INITIAL_PAGE, DEFAULT_SIZE, SearchDataDto } from '../../models/common/paginator.model';

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