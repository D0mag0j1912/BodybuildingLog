import { Component, ChangeDetectionStrategy, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DEFAULT_WEIGHT_UNIT } from '../../../../../constants/shared/default-weight-format.const';
import { convertWeightUnit } from '../../../../../helpers/training/convert-weight-units.helper';
import { Preferences } from '../../../../../models/common/preferences.model';
import { WeightUnit } from '../../../../../models/common/preferences.type';
import { SetFormType } from '../../../../../models/training/shared/set/set-form.type';
import { SetCategoryType } from '../../../../../models/training/shared/set/set.type';
import { UnsubscribeService } from '../../../../../services/shared/unsubscribe.service';
import { PreferencesStoreService } from '../../../../../services/store/shared/preferences-store.service';

@Component({
    selector: 'bl-set-constituent',
    templateUrl: './set-constituent.component.html',
    styleUrls: ['./set-constituent.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class SetConstituentComponent implements OnInit, OnDestroy {
    private _activeSetCategory$ = new BehaviorSubject<SetCategoryType>(null);

    activeSetCategory$ = this._activeSetCategory$.asObservable();
    currentPreferences$ = this._preferencesStoreService.preferencesChanged$;

    private _currentWeightUnit: WeightUnit;

    @Input()
    form: FormGroup<SetFormType>;

    constructor(
        private _preferencesStoreService: PreferencesStoreService,
        private _unsubscribeService: UnsubscribeService,
    ) {}

    ngOnInit(): void {
        this._currentWeightUnit =
            this._preferencesStoreService.getPreferences().weightUnit ?? DEFAULT_WEIGHT_UNIT;

        this.currentPreferences$
            .pipe(
                filter((preferences) => this._currentWeightUnit !== preferences.weightUnit),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((preferences: Preferences) => {
                this._currentWeightUnit = preferences.weightUnit;
                const currentWeightLiftedValue = +this.form.controls.weightLifted.value;
                if (currentWeightLiftedValue) {
                    this.form.controls.weightLifted.patchValue(
                        convertWeightUnit(preferences.weightUnit, currentWeightLiftedValue),
                    );
                }
            });
    }

    ngOnDestroy(): void {
        this._activeSetCategory$.complete();
    }
}
