import { KG_TO_LBS } from '../../constants/shared/kg-to-lbs.const';
import { WeightUnitType } from '../../models/common/preferences.type';

export function convertWeightUnit(weightUnit: WeightUnitType, value: number): number {
    return (
        Math.round(
            ((weightUnit === 'lbs' ? value * KG_TO_LBS : value / KG_TO_LBS) + Number.EPSILON) * 10,
        ) / 10
    );
}
