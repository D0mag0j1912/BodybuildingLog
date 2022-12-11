import { KG_TO_LBS } from '../../constants/shared/kg-to-lbs.const';
import { WeightUnitType } from '../../models/common/preferences.type';
import { SetDurationUnitType } from '../../models/training/new-training/single-exercise/set/set.type';

export function convertWeightUnit(weightUnit: WeightUnitType, value: number): number {
    return (
        Math.round(
            ((weightUnit === 'lbs' ? value * KG_TO_LBS : value / KG_TO_LBS) + Number.EPSILON) * 10,
        ) / 10
    );
}

export function convertSetDurationUnit(
    setDurationUnit: SetDurationUnitType,
    value: number,
): number {
    return (
        Math.round(
            ((setDurationUnit === 'seconds' ? value / 60 : value * 60) + Number.EPSILON) * 10,
        ) / 10
    );
}
