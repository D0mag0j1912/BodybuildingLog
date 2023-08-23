import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { Subject } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    startWith,
    takeUntil,
} from 'rxjs/operators';
import { INPUT_MAX_LENGTH } from '../../../../constants/shared/input-maxlength.const';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { PastTrainingsQueryParams } from '../../../../models/training/past-trainings/past-trainings.model';
import { decodeFilter } from '../../../../helpers/encode-decode.helper';

@Component({
    selector: 'bl-past-trainings-filters',
    templateUrl: './past-trainings-filters.component.html',
    styleUrls: ['./past-trainings-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class PastTrainingsFiltersComponent {
    private _keyUp$ = new Subject<KeyboardEvent>();

    @Output()
    searchEmitted = new EventEmitter<string>();

    @Output()
    filterDialogOpened = new EventEmitter<void>();

    @ViewChild('search', { read: IonInput })
    searchEl: IonInput;

    searchValue = '';
    inputMaxLength = INPUT_MAX_LENGTH;

    constructor(
        private _unsubscribeService: UnsubscribeService,
        private _route: ActivatedRoute,
    ) {
        this._keyUp$
            .pipe(
                map((event: Event) => (event.target as HTMLInputElement).value),
                map((value: string) => value?.trim().toLowerCase()),
                filter((value: string) => value.length <= 50),
                debounceTime(500),
                distinctUntilChanged(),
                startWith(this.searchValue),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((value: string) => this.searchEmitted.next(value));

        this._route.queryParams
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((params: Params) => {
                const currentQueryParams = params.filter;
                const pastTrainingsQueryParams =
                    decodeFilter<PastTrainingsQueryParams>(currentQueryParams);
                this.searchValue = pastTrainingsQueryParams.search;
            });
    }

    emitKeyboardEvent($event: KeyboardEvent): void {
        this._keyUp$.next($event);
    }

    openFilterDialog(): void {
        this.filterDialogOpened.emit();
    }
}
