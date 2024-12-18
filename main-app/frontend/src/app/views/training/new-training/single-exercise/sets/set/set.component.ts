import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
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
import { PreferencesDto as Preferences } from '../../../../../../../api/models/preferences-dto';
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
            }, 600);
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
    isFirstSet = true;

    @Input()
    isSubmitted = false;

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
            if (
                this.activeSetCategory === 'freeWeighted' ||
                this.activeSetCategory === 'dynamicWeighted' ||
                this.activeSetCategory === 'staticWeighted'
            ) {
                this._convertSetConstituentUnit(
                    'weight',
                    currentPreferencesValue,
                    previousPreferencesValue,
                );
            }
            if (
                this.activeSetCategory === 'staticBodyweight' ||
                this.activeSetCategory === 'staticWeighted'
            ) {
                this._convertSetConstituentUnit(
                    'duration',
                    currentPreferencesValue,
                    previousPreferencesValue,
                );
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
                if (this.weightElement) {
                    await this.weightElement.setFocus();
                }
                break;
            }
            default: {
                isNeverCheck(setCategory);
            }
        }
    }

    private _convertSetConstituentUnit(
        setConstituent: SetConstituent,
        currentPreferencesValue: Preferences,
        previousPreferencesValue: Preferences,
    ): void {
        switch (setConstituent) {
            case 'weight': {
                if (currentPreferencesValue?.weightUnit !== previousPreferencesValue?.weightUnit) {
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
            case 'duration': {
                if (
                    currentPreferencesValue?.setDurationUnit !==
                    previousPreferencesValue?.setDurationUnit
                ) {
                    const currentDurationValue = this.form.controls.duration.value;
                    if (currentDurationValue) {
                        this.form.controls.duration.patchValue(
                            convertSetDurationUnit(
                                previousPreferencesValue.setDurationUnit,
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
