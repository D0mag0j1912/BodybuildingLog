import { Injectable, PipeTransform } from '@nestjs/common';
import { INITIAL_PAGE, DEFAULT_SIZE, PaginateDto } from '../../models/common/paginator.model';

@Injectable()
export class PaginatePipe implements PipeTransform {

    transform(query: PaginateDto): PaginateDto {
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