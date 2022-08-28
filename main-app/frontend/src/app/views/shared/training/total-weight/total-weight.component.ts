import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DEFAULT_WEIGHT_UNIT } from '../../../../constants/shared/default-weight-format.const';
import { TOTAL_INITIAL_WEIGHT } from '../../../../constants/training/new-training.const';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { convertWeightUnit } from '../../../../helpers/training/convert-weight-units.helper';
import { WeightUnit } from '../../../../models/common/preferences.type';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { RoundTotalWeightPipe } from '../../../../pipes/training/new-training/round-total-weight/round-total-weight.pipe';

@Component({
    selector: 'bl-total-weight',
    templateUrl: './total-weight.component.html',
    styleUrls: ['./total-weight.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [getControlValueAccessor(TotalWeightComponent)],
})
export class TotalWeightComponent implements ControlValueAccessor {
    totalValue: string;

    @Input()
    isLoading = false;

    @Input()
    editTrainingData: NewTraining;

    @Input()
    currentWeightUnit: WeightUnit = 'kg';

    onChange: () => void;
    onTouched: () => void;

    constructor(
        private readonly _changeDetectorRef: ChangeDetectorRef,
        private readonly _roundTotalWeightPipe: RoundTotalWeightPipe,
    ) {}

    writeValue(value: number): void {
        this.totalValue = value
            ? this._setInitialTotalValue(value)
            : this._roundTotalWeightPipe.transform(TOTAL_INITIAL_WEIGHT, this.currentWeightUnit);
        this._changeDetectorRef.markForCheck();
    }

    registerOnChange(fn: () => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    private _setInitialTotalValue(total: number | undefined): string {
        if (this.editTrainingData) {
            const editTrainingWeightUnit = this.editTrainingData.weightUnit ?? DEFAULT_WEIGHT_UNIT;
            if (editTrainingWeightUnit !== this.currentWeightUnit) {
                return this._roundTotalWeightPipe.transform(
                    +convertWeightUnit(this.currentWeightUnit, total),
                    this.currentWeightUnit,
                );
            } else {
                return this._roundTotalWeightPipe.transform(total, this.currentWeightUnit);
            }
        } else {
            if (total) {
                return this._roundTotalWeightPipe.transform(total, this.currentWeightUnit);
            } else {
                return `${TOTAL_INITIAL_WEIGHT} ${DEFAULT_WEIGHT_UNIT}`;
            }
        }
    }
}
