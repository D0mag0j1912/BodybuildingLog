import { Injectable, PipeTransform } from '@nestjs/common';
import { SearchDataDto } from '../../models/common/search-data.model';
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from '../../constants/paginator.const';

@Injectable()
export class PaginatePipe implements PipeTransform {
    transform(query: SearchDataDto): SearchDataDto {
        if (!query?.page) {
            query.page = DEFAULT_PAGE;
        }
        if (!query?.perPage) {
            query.perPage = DEFAULT_PER_PAGE;
        }
        return {
            ...query,
            page: +query.page,
            perPage: +query.perPage,
        };
    }
}
