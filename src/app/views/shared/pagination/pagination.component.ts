import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNeverCheck } from '../../../helpers/is-never-check.helper';
import { StreamData } from '../../../models/common/interfaces/common.model';
import { DEFAULT_SIZE, INITIAL_PAGE, Paginator } from '../../../models/common/interfaces/paginator.model';
import { Page } from '../../../models/common/types/page.type';
import { DateInterval, PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';
import { PaginatorChanged } from '../../../models/common/interfaces/paginator.model';

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
    isPreviousPage = true;

    @Input()
    isNextPage = true;

    @Input()
    data: StreamData<Paginator<PastTrainings>> | undefined = undefined;

    @Output()
    readonly paginatorChanged: EventEmitter<PaginatorChanged> = new EventEmitter<PaginatorChanged>();

    constructor(
        private readonly translateService: TranslateService,
    ) {}

    loadPage(
        page?: Page,
        dateInterval?: DateInterval,
        earliestTrainingDate?: Date,
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

    setPageTooltip(
        isSearch: boolean,
        page: Page,
    ): Observable<string> {
        if (isSearch) {
            if (page === 'First' || page === 'Last') {
                return this.translateService.stream(`training.past_trainings.buttons.${page === 'First' ? 'first_page' : 'last_page'}`);
            }
            else {
                return this.translateService.stream(`training.past_trainings.buttons.${page === 'Next' ? 'next_page' : 'previous_page'}`);
            }
        }
        else {
            if (page === 'First' || page === 'Last') {
                return this.translateService.stream(`training.past_trainings.buttons.${page === 'First' ? 'first_week' : 'last_week'}`);
            }
            else {
                if (page === 'Next') {
                    return this.translateService.stream(`training.past_trainings.${this.isNextPage ? 'buttons.next_week' : 'disabled_next_week'}`);
                }
                else {
                    return this.translateService.stream(`training.past_trainings.${this.isPreviousPage ? 'buttons.previous_week' : 'disabled_previous_week'}`);
                }
            }
        }
    }

    setPageTooltipClass(
        isSearch: boolean,
        page: Page,
    ): string {
        if (isSearch) {
            return 'tooltip';
        }
        else {
            if (page === 'First' || page === 'Last') {
                return 'tooltip';
            }
            if (page === 'Next') {
                return this.isNextPage ? 'tooltip' : 'tooltip-error';
            }
            else {
                return this.isPreviousPage ? 'tooltip' : 'tooltip-error';
            }
        }
    }

    setPageText(totalPages: number): Observable<string> {
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
