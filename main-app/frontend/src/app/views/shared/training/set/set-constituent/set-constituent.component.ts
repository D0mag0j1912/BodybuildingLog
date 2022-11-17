import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ViewChild,
    ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { filter, takeUntil } from 'rxjs/operators';
import { DEFAULT_WEIGHT_UNIT } from '../../../../../constants/shared/default-weight-format.const';
import { isNeverCheck } from '../../../../../helpers/is-never-check.helper';
import { convertWeightUnit } from '../../../../../helpers/training/convert-weight-units.helper';
import { Preferences } from '../../../../../models/common/preferences.model';
import { WeightUnit } from '../../../../../models/common/preferences.type';
import { SetFormType } from '../../../../../models/training/shared/set/set-form.type';
import { SetTrainingData } from '../../../../../models/training/shared/set/set.model';
import {
    SetCategoryType,
    SetConstituent,
} from '../../../../../models/training/shared/set/set.type';
import { UnsubscribeService } from '../../../../../services/shared/unsubscribe.service';
import { PreferencesStoreService } from '../../../../../services/store/shared/preferences-store.service';

@Component({
    selector: 'bl-set-constituent',
    templateUrl: './set-constituent.component.html',
    styleUrls: ['./set-constituent.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class SetConstituentComponent implements OnInit {
    currentPreferences$ = this._preferencesStoreService.preferencesChanged$;

    private _currentWeightUnit: WeightUnit;
    activeSetCategory: SetCategoryType = 'freeWeighted';

    @Input()
    form: FormGroup<SetFormType>;

    @Input()
    exerciseControl: FormControl<string>;

    @Input()
    availableSetCategoriesControl: FormControl<SetCategoryType[]>;

    @Input()
    bodyweightControl: FormControl<number>;

    @Input()
    isLoading = false;

    @Input()
    isSubmitted = false;

    @Input()
    isFirstSet = true;

    @Output()
    setChanged = new EventEmitter<{ setData: SetTrainingData; setCategory: SetCategoryType }>();

    @Output()
    setDeleted = new EventEmitter<void>();

    @Output()
    setConstituentKeydownEmitted = new EventEmitter<SetConstituent>();

    @Output()
    setCategoryModalOpened = new EventEmitter<SetCategoryType>();

    @ViewChild('weightLiftedEl')
    weightLiftedElement: IonInput;

    @ViewChild('repsEl')
    repsElement: IonInput;

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

        this.bodyweightControl.valueChanges
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((_) => {
                if (this.bodyweightControl.valid) {
                    switch (this.activeSetCategory) {
                        case 'dynamicBodyweight': {
                            this.form.controls.reps.enable();
                            break;
                        }
                    }
                }
            });
    }

    updateSetCategory(): void {
        this.setCategoryModalOpened.emit(this.activeSetCategory);
    }

    onChangeSets(): void {
        const weightLifted = this.form.controls.weightLifted?.value;
        const reps = this.form.controls.reps?.value;
        const setData: SetTrainingData = {
            exerciseName: this.exerciseControl.value,
            weightLifted:
                weightLifted && this._isSetConstituentValid('weightLifted')
                    ? this.form.controls.weightLifted.value
                    : undefined,
            reps:
                reps && this._isSetConstituentValid('reps')
                    ? this.form.controls.reps.value
                    : undefined,
        };
        this.setChanged.emit({
            setData,
            setCategory: this.activeSetCategory,
        });
    }

    deleteSet(): void {
        this.setDeleted.emit();
    }

    onSetConstituentKeydown(setConstituent: SetConstituent): void {
        this.setConstituentKeydownEmitted.emit(setConstituent);
    }

    private _isSetConstituentValid(setConstituent: SetConstituent): boolean {
        return this.form.controls[setConstituent].valid;
    }

    private async _focusSetConstituent(setCategory: SetCategoryType): Promise<void> {
        switch (setCategory) {
            case 'freeWeighted': {
                if (this.weightLiftedElement) {
                    await this.weightLiftedElement.setFocus();
                }
                break;
            }
            case 'dynamicBodyweight': {
                if (this.repsElement) {
                    await this.repsElement.setFocus();
                }
                break;
            }
            case 'dynamicWeighted': {
                //TODO: BL-121
                break;
            }
            case 'staticBodyweight': {
                //TODO: BL-128
                break;
            }
            case 'staticWeighted': {
                //TODO: BL-123
                break;
            }
            default: {
                isNeverCheck(setCategory);
            }
        }
    }
}
