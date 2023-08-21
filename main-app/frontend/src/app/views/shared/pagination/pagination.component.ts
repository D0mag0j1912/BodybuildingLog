import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { isNeverCheck } from '../../../helpers/is-never-check.helper';
import { StreamData } from '../../../models/common/common.model';
import { Paginator } from '../../../models/common/paginator.model';
import { Page } from '../../../models/common/page.type';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';
import { PaginatorChanged } from '../../../models/common/paginator.model';
import { DEFAULT_PER_PAGE, INITIAL_PAGE } from '../../../constants/shared/paginator.const';

@Component({
    selector: 'bl-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
    readonly PAGE_SIZE_OPTIONS = [10, 20, 50];

    @Input()
    isSearch = false;

    @Input()
    page = INITIAL_PAGE;

    @Input()
    perPage = DEFAULT_PER_PAGE;

    @Input()
    isPreviousPage = false;

    @Input()
    isNextPage = false;

    @Input()
    data: StreamData<Paginator<PastTrainings>> | undefined = undefined;

    @Input()
    isLoading = false;

    @Output()
    paginatorChanged = new EventEmitter<PaginatorChanged>();

    loadPage(page?: Page): void {
        if (this.isSearch) {
            if (page) {
                switch (page) {
                    case 'First': {
                        this.page = INITIAL_PAGE;
                        break;
                    }
                    case 'Previous': {
                        this.page--;
                        break;
                    }
                    case 'Next': {
                        this.page++;
                        break;
                    }
                    case 'Last': {
                        this.page = this.data.Value.TotalPages;
                        break;
                    }
                    default:
                        isNeverCheck(page);
                }
            }
            this.paginatorChanged.emit({
                page: +this.page,
                perPage: +this.perPage,
                isSearch: true,
            } as PaginatorChanged);
        } else {
            this.paginatorChanged.emit({
                page: this.page,
                perPage: this.perPage,
                isSearch: false,
                pageType: page,
            } as PaginatorChanged);
        }
    }
}
