import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    switchMap,
    take,
    takeUntil,
} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingSplitDto as TrainingSplit } from '../../../../api/models/training-split-dto';
import { TrainingSplitsFacadeService } from '../../../store/training-splits/training-splits-facade.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { PreferencesService } from '../../../services/api/preferences/preferences.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';
import { PreferencesDto as Preferences } from '../../../../api/models/preferences-dto';
import { CreateTrainingSplitComponent } from './create-training-split/create-training-split.component';

@Component({
    selector: 'bl-training-splits',
    templateUrl: './training-splits.component.html',
    styleUrls: ['./training-splits.component.scss'],
    providers: [UnsubscribeService],
})
export class TrainingSplitsComponent implements OnInit {
    private _searchChanged$ = new Subject<Event>();
    trainingSplits$ = this._trainingSplitsFacadeService.getTrainingSplitListSelector();

    searchValue = '';

    constructor(
        private _trainingSplitsFacadeService: TrainingSplitsFacadeService,
        private _unsubscribeService: UnsubscribeService,
        private _preferencesService: PreferencesService,
        private _preferencesStoreService: PreferencesStoreService,
        private _modalController: ModalController,
        private _route: ActivatedRoute,
        private _router: Router,
    ) {}

    ngOnInit(): void {
        this.searchValue = this._route.snapshot.queryParams.contains;
        if (this.searchValue) {
            this._trainingSplitsFacadeService.searchTrainingSplits(this.searchValue);
        } else {
            this._trainingSplitsFacadeService.getTrainingSplitList();
        }

        this._searchChanged$
            .pipe(
                map((event: Event) => (event.target as HTMLInputElement).value),
                map((value: string) => value?.trim().toLowerCase()),
                filter((value: string) => value.length <= 50),
                debounceTime(500),
                distinctUntilChanged(),
                takeUntil(this._unsubscribeService),
            )
            .subscribe(async (value: string) => {
                this._trainingSplitsFacadeService.searchTrainingSplits(value);
                await this._router.navigate([], {
                    relativeTo: this._route,
                    queryParams: value ? { contains: value } : undefined,
                });
                this.searchValue = value;
            });
    }

    async openTrainingSplitModal(trainingSplit: TrainingSplit = null): Promise<void> {
        const modal = await this._modalController.create({
            component: CreateTrainingSplitComponent,
            componentProps: {
                trainingSplit,
            },
            keyboardClose: true,
        });

        await modal.present();
    }

    onDeleteTrainingSplit(trainingSplitId: string): void {
        this._trainingSplitsFacadeService.deleteTrainingSplit(trainingSplitId);
    }

    onEmitTrainingSplitId(trainingSplitId: string): void {
        this._preferencesStoreService.preferencesChanged$
            .pipe(
                take(1),
                switchMap((currentPreferences: Preferences) => {
                    const apiPreferences = {
                        ...currentPreferences,
                        trainingSplitId,
                    };
                    return this._preferencesService.setPreferences(apiPreferences, 'trainingSplit');
                }),
            )
            .subscribe();
    }

    onSearchChange($event: Event): void {
        this._searchChanged$.next($event);
    }
}
