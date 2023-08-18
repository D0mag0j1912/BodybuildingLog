import { DatePipe } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
    addDays,
    format,
    getMonth,
    isSameDay,
    isSameMonth,
    isSameWeek,
    startOfDay,
    startOfWeek,
    subDays,
} from 'date-fns';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import {
    delay,
    filter,
    map,
    switchMap,
    take,
    takeUntil,
    tap,
    withLatestFrom,
} from 'rxjs/operators';
import { OverlayEventDetail } from '@ionic/core';
import { ModalController, NavController } from '@ionic/angular';
import { SharedStoreService } from '../../../services/store/shared/shared-store.service';
import { ALL_MONTHS } from '../../../helpers/months.helper';
import { StreamData } from '../../../models/common/common.model';
import { Paginator, PaginatorChanged } from '../../../models/common/paginator.model';
import {
    PastTrainingsQueryParams,
    PastTrainings,
    PeriodFilterType,
} from '../../../models/training/past-trainings/past-trainings.model';
import {
    QUERY_PARAMS_DATE_FORMAT,
    TEMPLATE_DATE_FORMAT,
} from '../../../constants/training/past-trainings-date-format.const';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { isNeverCheck } from '../../../helpers/is-never-check.helper';
import { PastTrainingsStoreService } from '../../../services/store/training/past-trainings-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';
import { PreferencesService } from '../../../services/api/preferences/preferences.service';
import { INITIAL_PAGE, DEFAULT_PER_PAGE } from '../../../constants/shared/paginator.const';
import { TrainingItemWrapperHeights } from '../../../constants/enums/training-item-wrapper-heights.enum';
import { NewTrainingDto as NewTraining } from '../../../../api/models/new-training-dto';
import {
    DeleteTrainingActionData,
    TrainingActionPerformed,
} from '../../../models/training/past-trainings/training-actions/training-actions.model';
import {
    DeleteTrainingActionComponent,
    DeleteTrainingActionDialogData,
} from '../../shared/training/training-actions/delete-training-action/delete-training-action.component';
import { DialogRoles } from '../../../constants/enums/dialog-roles.enum';
import { NewTrainingStoreService } from '../../../services/store/training/new-training-store.service';
import { decodeFilter, encodeFilter } from '../../../helpers/encode-decode.helper';
import { PastTrainingsFacadeService } from '../../../store/past-trainings/past-trainings-facade.service';
import { SearchParams } from '../../../models/common/search-params';
import { PreferencesDto as Preferences } from '../../../../api/models/preferences-dto';
import { PastTrainingsFiltersDialogComponent } from './past-trainings-filters-dialog/past-trainings-filters-dialog.component';

@Component({
    selector: 'bl-past-trainings',
    templateUrl: './past-trainings.component.html',
    styleUrls: ['./past-trainings.component.scss'],
    providers: [UnsubscribeService],
})
export class PastTrainingsComponent implements AfterViewChecked, OnDestroy {
    pastTrainings$ = this._pastTrainingsFacadeService.selectPastTrainings().pipe(
        tap(async (response: StreamData<Paginator<PastTrainings>>) => {
            if (response) {
                //If searching
                if (response?.Value?.TotalPages) {
                    this.updatePageAndSize(response);
                }
                this.handlePaginationArrows(response);
                await this._router.navigate([], {
                    relativeTo: this._route,
                    queryParams: this.handleQueryParams(response, this.searchText),
                });
            }
        }),
    );

    private _isSearch$ = new BehaviorSubject<boolean>(false);
    readonly isSearch$ = this._isSearch$.asObservable();

    readonly PAGE_SIZE_OPTIONS = [1, 3, 5, 10];
    perPage = DEFAULT_PER_PAGE;
    page = INITIAL_PAGE;

    searchText = '';
    currentQueryParams: PastTrainingsQueryParams;
    periodFilter = this._preferencesStoreService.getPreferences()?.showByPeriod ?? 'week';
    dateFormat = TEMPLATE_DATE_FORMAT;

    isNextPage = false;
    isPreviousPage = false;

    @ViewChild('itemWrapper', { read: ElementRef })
    trainingItemWrapper: ElementRef | undefined;

    @ViewChild('timePeriod', { read: ElementRef })
    set timePeriodEl(timePeriodElement: ElementRef) {
        if (timePeriodElement) {
            const trainingElement = this.trainingItemWrapper?.nativeElement as HTMLDivElement;
            if (trainingElement) {
                this._isSearch$
                    .pipe(delay(0), takeUntil(this._unsubscribeService))
                    .subscribe(
                        (isSearch) =>
                            (trainingElement.style.maxHeight = `calc(100vh - ${
                                isSearch
                                    ? TrainingItemWrapperHeights.SEARCH_HEIGHT
                                    : TrainingItemWrapperHeights.WEEK_HEIGHT
                            }px)`),
                    );
            }
        }
    }

    constructor(
        private _pastTrainingsStoreService: PastTrainingsStoreService,
        private _unsubscribeService: UnsubscribeService,
        private _translateService: TranslateService,
        private _sharedStoreService: SharedStoreService,
        private _preferencesService: PreferencesService,
        private _preferencesStoreService: PreferencesStoreService,
        private _newTrainingStoreService: NewTrainingStoreService,
        private _pastTrainingsFacadeService: PastTrainingsFacadeService,
        private _route: ActivatedRoute,
        private _datePipe: DatePipe,
        private _router: Router,
        private _navController: NavController,
        private _modalController: ModalController,
    ) {
        this._route.queryParams.pipe(takeUntil(this._unsubscribeService)).subscribe((params) => {
            const filter = params.filter;
            this.currentQueryParams = decodeFilter(filter);
        });
    }

    getDayTranslation$(dayName: string): Observable<string> {
        if (dayName) {
            return this._translateService
                .stream(dayName)
                .pipe(map((value) => value?.toLowerCase()));
        }
        return of('');
    }

    ngOnInit(): void {
        this.initPastTrainings();
    }

    ngAfterViewChecked(): void {
        this._pastTrainingsStoreService.pastTrainingsWrapperScroll$
            .pipe(take(1))
            .subscribe((scrollTop) => {
                if (this.trainingItemWrapper) {
                    (this.trainingItemWrapper.nativeElement as HTMLDivElement).scrollTop =
                        scrollTop;
                }
            });
    }

    ngOnDestroy(): void {
        this._isSearch$.complete();
    }

    async openFilterDialog(): Promise<void> {
        const modal = await this._modalController.create({
            component: PastTrainingsFiltersDialogComponent,
            componentProps: {
                periodFilter: this.periodFilter,
            },
        });
        await modal.present();
        from(modal.onDidDismiss())
            .pipe(
                filter((response) => response.role === DialogRoles.FILTER_TRAININGS),
                withLatestFrom(this._preferencesStoreService.preferencesChanged$),
                switchMap(
                    ([response, preferences]: [
                        OverlayEventDetail<Partial<PastTrainingsQueryParams>>,
                        Preferences,
                    ]) => {
                        if (response.data.showBy !== this.periodFilter) {
                            return this._preferencesService
                                .setPreferences(
                                    {
                                        ...preferences,
                                        showByPeriod: response.data.showBy,
                                    },
                                    'showByPeriod',
                                )
                                .pipe(map((_) => response));
                        }
                        return of(response);
                    },
                ),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((response: OverlayEventDetail<Partial<PastTrainingsQueryParams>>) => {
                this.periodFilter = (response.data as PastTrainingsQueryParams).showBy;
                let payloadDate: Date;
                const searchData: SearchParams = {
                    page: this.page,
                    perPage: this.perPage,
                    searchText: '',
                };
                switch (this.periodFilter) {
                    case 'day': {
                        payloadDate = new Date();
                        break;
                    }
                    case 'week': {
                        payloadDate = startOfWeek(startOfDay(new Date()));
                        break;
                    }
                }
                this._pastTrainingsFacadeService.getPastTrainings(
                    payloadDate.toISOString(),
                    this.periodFilter,
                    searchData,
                );
            });
    }

    onSearchEmitted(searchText: string): void {
        this.searchText = searchText;
        this._isSearch$.next(!!searchText);
        this.page = INITIAL_PAGE;
        const searchData: SearchParams = {
            page: this.page,
            perPage: this.perPage,
            searchText,
        };
        this._pastTrainingsFacadeService.getPastTrainings(
            new Date().toISOString(),
            this.periodFilter,
            searchData,
        );
    }

    onPaginatorChanged($event: PaginatorChanged, results: PastTrainings): void {
        if ($event?.isSearch) {
            const searchData: SearchParams = {
                perPage: $event.perPage,
                page: $event.page,
                searchText: this.searchText?.trim()?.toLowerCase() ?? '',
            };
            this._pastTrainingsFacadeService.getPastTrainings(
                new Date().toISOString(),
                this.periodFilter,
                searchData,
            );
        } else {
            let currentDate: Date;
            switch (this.periodFilter) {
                case 'day': {
                    const pageType = $event.pageType;
                    switch (pageType) {
                        case 'First': {
                            currentDate = new Date(results.EarliestTrainingDate);
                            break;
                        }
                        case 'Previous': {
                            currentDate = subDays(new Date(results.Dates.StartDate), 1);
                            break;
                        }
                        case 'Next': {
                            currentDate = addDays(new Date(results.Dates.StartDate), 1);
                            break;
                        }
                        case 'Last': {
                            currentDate = new Date();
                            break;
                        }
                        default: {
                            isNeverCheck(pageType);
                        }
                    }
                    break;
                }
                case 'week': {
                    const pageType = $event.pageType;
                    switch (pageType) {
                        case 'First': {
                            currentDate = new Date(results.EarliestTrainingDate);
                            break;
                        }
                        case 'Previous': {
                            currentDate = subDays(new Date(results.Dates.StartDate), 7);
                            break;
                        }
                        case 'Next': {
                            currentDate = addDays(new Date(results.Dates.StartDate), 7);
                            break;
                        }
                        case 'Last': {
                            currentDate = new Date();
                            break;
                        }
                        default: {
                            isNeverCheck(pageType);
                        }
                    }
                    break;
                }
                default: {
                    isNeverCheck(this.periodFilter);
                }
            }
            this._pastTrainingsFacadeService.getPastTrainings(
                currentDate.toISOString(),
                this.periodFilter,
            );
        }
    }

    async onTrainingItemClicked(clickedTraining: NewTraining): Promise<void> {
        await this._router.navigate(['/training/tabs/new-training', clickedTraining._id]);
        if (this.trainingItemWrapper) {
            const scrollTop = (this.trainingItemWrapper.nativeElement as HTMLDivElement).scrollTop;
            await this._pastTrainingsStoreService.emitWrapperScroll(scrollTop);
        }
    }

    async onTrainingActionPerformed(
        rootData: TrainingActionPerformed<DeleteTrainingActionData>,
    ): Promise<void> {
        const modal = await this._modalController.create({
            component: DeleteTrainingActionComponent,
            componentProps: {
                title$: this._translateService.stream(
                    'training.past_trainings.actions.delete_training',
                ),
                dateCreated$: this._translateService
                    .stream(`weekdays.${rootData.data.weekDays[rootData.data.dayIndex]}`)
                    .pipe(
                        map(
                            (value: { [key: string]: string }) =>
                                `${value} (${this._datePipe.transform(
                                    rootData.data.training.trainingDate,
                                    'dd.MM.yyyy',
                                )})`,
                        ),
                    ),
                timeCreated: rootData.data.timeCreated,
                training: rootData.data.training,
            } as DeleteTrainingActionDialogData,
        });
        await modal.present();

        from(modal.onDidDismiss())
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((response: OverlayEventDetail<string | boolean>) => {
                if (response.role === DialogRoles.DELETE_TRAINING) {
                    if (typeof response.data === 'string') {
                        const trainingId = response.data;
                        this._pastTrainingsFacadeService.deleteTraining(trainingId);
                    }
                }
            });
    }

    //TODO: Fix
    async logNewTraining(): Promise<void> {
        /* this._newTrainingStoreService
            .setTrainingToInitialState()
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe(async (_) => {
                const dayClickedDate = add(this.dayActivated.Date, { hours: 7 });
                this._sharedStoreService.emitDayClicked(dayClickedDate.toISOString());
                await this._navController.navigateForward('/training/tabs/new-training');
            }); */
    }

    //TODO: align with 'ShowByDay' feature
    tryAgain(): void {
        this.initPastTrainings();
    }

    setTimePeriod$(results: PastTrainings): Observable<string> {
        const dateInterval = results.Dates;
        if (dateInterval?.StartDate && dateInterval?.EndDate) {
            const isDay = isSameDay(
                new Date(dateInterval.StartDate),
                new Date(dateInterval.EndDate),
            );
            if (isDay) {
                return this._translateService
                    .stream(results.DayName)
                    .pipe(
                        map((value: string) =>
                            this.generateHeaderTitle(value, new Date(dateInterval.StartDate)),
                        ),
                    );
            }
            const isWeek = isSameWeek(
                new Date(dateInterval.StartDate),
                new Date(dateInterval.EndDate),
                {
                    weekStartsOn: 1,
                },
            );
            if (isWeek) {
                return this._translateService
                    .stream('common.week')
                    .pipe(
                        map((value: string) =>
                            this.generateHeaderTitle(
                                value,
                                new Date(dateInterval.StartDate),
                                new Date(dateInterval.EndDate),
                            ),
                        ),
                    );
            }
            const isMonth = isSameMonth(
                new Date(dateInterval.StartDate),
                new Date(dateInterval.EndDate),
            );
            if (isMonth) {
                const month = getMonth(new Date(dateInterval.StartDate));
                return this._translateService
                    .stream(`common.months.${ALL_MONTHS[month]}`)
                    .pipe(
                        map((value: string) =>
                            this.generateHeaderTitle(
                                value,
                                new Date(dateInterval.StartDate),
                                new Date(dateInterval.EndDate),
                            ),
                        ),
                    );
            }
            return this._translateService
                .stream('common.period')
                .pipe(
                    map((value: string) =>
                        this.generateHeaderTitle(
                            value,
                            new Date(dateInterval.StartDate),
                            new Date(dateInterval.EndDate),
                        ),
                    ),
                );
        } else {
            return of('');
        }
    }

    private initPastTrainings(): void {
        this.page = this.currentQueryParams?.page ? +this.currentQueryParams.page : INITIAL_PAGE;
        this.perPage = this.currentQueryParams?.perPage
            ? +this.currentQueryParams?.perPage
            : DEFAULT_PER_PAGE;
        this.searchText = this.currentQueryParams?.search;
        this._isSearch$.next(!!this.searchText);
        if (this.searchText) {
            const searchData: SearchParams = {
                perPage: this.perPage,
                page: this.page,
                searchText: this.searchText.trim().toLowerCase(),
            };
            this._pastTrainingsFacadeService.getPastTrainings(
                new Date().toISOString(),
                this.periodFilter,
                searchData,
            );
        } else {
            this.periodFilter = this.currentQueryParams.showBy as PeriodFilterType;
            const currentDate = this.getDateTimeQueryParams();
            this._pastTrainingsFacadeService.getPastTrainings(
                currentDate.toISOString(),
                this.periodFilter ?? 'week',
            );
        }
    }

    private updatePageAndSize(response: StreamData<Paginator<PastTrainings>>): void {
        this.page = response?.Value?.CurrentPage ?? INITIAL_PAGE;
        this.perPage = response?.Value?.PerPage ?? DEFAULT_PER_PAGE;
    }

    private handleQueryParams(
        trainingData: StreamData<Paginator<PastTrainings>>,
        searchValue?: string,
    ): { filter: string } {
        const params: PastTrainingsQueryParams = {
            startDate: this.handleSpecificQueryParam(searchValue, trainingData, 'startDate'),
            endDate: this.handleSpecificQueryParam(searchValue, trainingData, 'endDate'),
            search: searchValue ?? undefined,
            page: this.handleSpecificQueryParam(searchValue, trainingData, 'page'),
            perPage: this.handleSpecificQueryParam(searchValue, trainingData, 'perPage'),
            showBy: !searchValue ? this.periodFilter : undefined,
        };
        const filter = encodeFilter(params);
        this._pastTrainingsFacadeService.saveFilter(filter);
        return { filter };
    }

    private handleSpecificQueryParam(
        searchValue: string | undefined,
        trainingData: StreamData<Paginator<PastTrainings>>,
        queryParam: keyof PastTrainingsQueryParams,
    ): string | undefined {
        if (searchValue) {
            if (trainingData?.Value?.Results?.Trainings?.length > 0) {
                if (queryParam === 'page') {
                    return this.page.toString();
                } else if (queryParam === 'startDate') {
                    return format(
                        trainingData?.Value?.Results?.Dates?.StartDate
                            ? new Date(trainingData.Value.Results.Dates.StartDate)
                            : new Date(),
                        QUERY_PARAMS_DATE_FORMAT,
                    );
                } else if (queryParam === 'endDate') {
                    return format(
                        trainingData?.Value?.Results?.Dates?.EndDate
                            ? new Date(trainingData.Value.Results.Dates.EndDate)
                            : new Date(),
                        QUERY_PARAMS_DATE_FORMAT,
                    );
                } else {
                    return this.perPage.toString();
                }
            } else {
                return undefined;
            }
        } else {
            if (queryParam === 'startDate') {
                return format(
                    trainingData?.Value?.Results?.Dates?.StartDate
                        ? new Date(trainingData.Value.Results.Dates.StartDate)
                        : new Date(),
                    QUERY_PARAMS_DATE_FORMAT,
                );
            } else if (queryParam === 'endDate') {
                return format(
                    trainingData?.Value?.Results?.Dates?.EndDate
                        ? new Date(trainingData.Value.Results.Dates.EndDate)
                        : new Date(),
                    QUERY_PARAMS_DATE_FORMAT,
                );
            } else {
                return undefined;
            }
        }
    }

    private handlePaginationArrows(response: StreamData<Paginator<PastTrainings>>): void {
        if (response?.Value) {
            if (response.Value.Results.EarliestTrainingDate !== undefined) {
                this.isPreviousPage = response.Value.Results.IsPrevious;
                this.isNextPage = response.Value.Results.IsNext;
            } else {
                this.isPreviousPage = !!response.Value.Previous;
                this.isNextPage = !!response.Value.Next;
            }
        }
    }

    private getDateTimeQueryParams(): Date {
        const splittedDate = this.currentQueryParams?.startDate?.split('-') ?? [];
        const utc =
            splittedDate.length > 0
                ? new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString()
                : new Date().toUTCString();
        return startOfDay(new Date(utc));
    }

    private generateHeaderTitle(period: string, startDate: Date, endDate?: Date): string {
        if (endDate) {
            return `
                <strong class="header-title--key">${period}</strong>
                <span class="header-title--value">(${this._datePipe.transform(
                    startDate,
                    this.dateFormat,
                )} - ${this._datePipe.transform(endDate, this.dateFormat)})</span>`;
        } else {
            return `<strong class="header-title--key">${period}</strong>
                <span class="header-title--value">(${this._datePipe.transform(
                    startDate,
                    this.dateFormat,
                )})</span`;
        }
    }
}
