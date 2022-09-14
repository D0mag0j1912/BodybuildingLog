import { KG_TO_LBS } from '../../constants/shared/kg-to-lbs.const';
import { WeightUnit } from '../../models/common/preferences.type';
import { roundToDecimalPlaces } from '../round-to-decimal-places.helper';

export function convertWeightUnit(weightUnit: WeightUnit, value: number): number {
    return weightUnit === 'lbs'
        ? roundToDecimalPlaces(1, value * KG_TO_LBS)
        : roundToDecimalPlaces(1, value / KG_TO_LBS);
}
