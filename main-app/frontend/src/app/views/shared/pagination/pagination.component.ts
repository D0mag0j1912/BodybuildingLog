import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNeverCheck } from '../../../helpers/is-never-check.helper';
import { StreamData } from '../../../models/common/interfaces/common.model';
import { Paginator } from '../../../models/common/interfaces/paginator.model';
import { Page } from '../../../models/common/types/page.type';
import { DateInterval, PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';
import { PaginatorChanged } from '../../../models/common/interfaces/paginator.model';
import { DEFAULT_SIZE, INITIAL_PAGE } from '../../../constants/shared/paginator.const';

@Component({
    selector: 'bl-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {

    readonly pageSizeOptions: number[] = [1, 3, 5, 10];

    @Input()
    isSearch = false;

    @Input()
    page: number = INITIAL_PAGE;

    @Input()
    size: number = DEFAULT_SIZE;

    @Input()
    isPreviousPage = false;

    @Input()
    isNextPage = false;

    @Input()
    data: StreamData<Paginator<PastTrainings>> | undefined = undefined;

    @Input()
    isLoading = false;

    @Output()
    readonly paginatorChanged: EventEmitter<PaginatorChanged> = new EventEmitter<PaginatorChanged>();

    constructor(
        private readonly translateService: TranslateService,
    ) { }

    loadPage(
        page?: Page,
        dateInterval?: DateInterval,
        earliestTrainingDate?: string,
        lastPage?: number,
    ): void {
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
                        this.page = lastPage;
                        break;
                    }
                    default:
                        isNeverCheck(page);
                }
            }
            this.paginatorChanged.emit({
                Page: +this.page,
                Size: +this.size,
                IsSearch: true,
            } as PaginatorChanged);
        }
        else {
            this.paginatorChanged.emit({
                Page: +this.page,
                Size: +this.size,
                IsSearch: false,
                PageType: page,
                DateInterval: dateInterval,
                EarliestTrainingDate: earliestTrainingDate,
            } as PaginatorChanged);
        }
    }

    setPageText$(totalPages: number): Observable<string> {
        return this.translateService.stream('common')
            .pipe(
                map((value: { [key: string]: string }) =>
                    `
                        ${value['page']}
                        <strong class="primary">${this.page?.toString() ?? '1'}</strong>
                        ${value['of']}
                        <strong class="primary">${totalPages?.toString() ?? '1'}</strong>
                    `),
            );
    }

}
