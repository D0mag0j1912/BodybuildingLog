import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ChangeDetectionStrategy,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { isNeverCheck } from '../../../../../../helpers/is-never-check.helper';
import {
    convertSetDurationUnit,
    convertWeightUnit,
} from '../../../../../../helpers/training/convert-units.helper';
import { Preferences } from '../../../../../../models/common/preferences.model';
import { SetFormType } from '../../../../../../models/training/new-training/single-exercise/set/set-form.type';
import { SetTrainingData } from '../../../../../../models/training/new-training/single-exercise/set/set.type';
import {
    SetCategoryType,
    SetConstituent,
} from '../../../../../../models/training/new-training/single-exercise/set/set.type';

@Component({
    selector: 'bl-set',
    templateUrl: './set.component.html',
    styleUrls: ['./set.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetComponent implements OnChanges {
    @Input()
    form: FormGroup<SetFormType>;

    @Input()
    preferences: Preferences;

    @Input()
    set activeSetCategory(category: SetCategoryType) {
        if (category) {
            this._activeSetCategory = category;
            setTimeout(async () => {
                await this._focusSetConstituent(this._activeSetCategory);
            }, 400);
        }
    }
    get activeSetCategory(): SetCategoryType {
        return this._activeSetCategory;
    }
    private _activeSetCategory: SetCategoryType = 'freeWeighted';

    @Input()
    exerciseControl: FormControl<string>;

    @Input()
    availableSetCategoriesControl: FormControl<SetCategoryType[]>;

    @Input()
    isLoading = false;

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

    @ViewChild('weightEl', { read: IonInput })
    weightElement: IonInput;

    @ViewChild('repsEl', { read: IonInput })
    repsElement: IonInput;

    @ViewChild('durationEl', { read: IonInput })
    durationElement: IonInput;

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.preferences?.firstChange && changes.preferences?.currentValue) {
            const currentPreferencesValue = changes.preferences?.currentValue as Preferences;
            const previousPreferencesValue = changes.preferences?.previousValue as Preferences;
            switch (this.activeSetCategory) {
                case 'freeWeighted': {
                    if (
                        currentPreferencesValue?.weightUnit !== previousPreferencesValue?.weightUnit
                    ) {
                        const currentWeightValue = this.form.controls.weight.value;
                        if (currentWeightValue) {
                            this.form.controls.weight.patchValue(
                                convertWeightUnit(
                                    currentPreferencesValue.weightUnit,
                                    currentWeightValue,
                                ),
                            );
                        }
                    }
                    break;
                }
                case 'staticBodyweight': {
                    if (
                        currentPreferencesValue?.setDurationUnit !==
                        previousPreferencesValue?.setDurationUnit
                    ) {
                        const currentDurationValue = this.form.controls.duration.value;
                        if (currentDurationValue) {
                            this.form.controls.duration.patchValue(
                                convertSetDurationUnit(
                                    currentPreferencesValue.setDurationUnit,
                                    currentDurationValue,
                                ),
                            );
                        }
                    }
                    break;
                }
            }
        }
    }

    updateSetCategory(): void {
        this.setCategoryModalOpened.emit(this.activeSetCategory);
    }

    onChangeSets(): void {
        const weight = this.form.controls.weight?.value;
        const reps = this.form.controls.reps?.value;
        const duration = this.form.controls.duration?.value;
        const setData: SetTrainingData = {
            exerciseName: this.exerciseControl.value,
            weight:
                weight && this._isSetConstituentValid('weight')
                    ? this.form.controls.weight.value
                    : undefined,
            reps:
                reps && this._isSetConstituentValid('reps')
                    ? this.form.controls.reps.value
                    : undefined,
            duration:
                duration && this._isSetConstituentValid('duration')
                    ? this.form.controls.duration.value
                    : undefined,
            setNumber: undefined,
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
            case 'freeWeighted':
            case 'dynamicWeighted': {
                if (this.weightElement) {
                    await this.weightElement.setFocus();
                }
                break;
            }
            case 'dynamicBodyweight': {
                if (this.repsElement) {
                    await this.repsElement.setFocus();
                }
                break;
            }
            case 'staticBodyweight': {
                if (this.durationElement) {
                    await this.durationElement.setFocus();
                }
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
