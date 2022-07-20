import { KG_TO_LBS } from '../../constants/shared/kg-to-lbs.const';
import { WeightUnit } from '../../models/common/preferences.type';
import { roundToDecimalPlaces } from '../round-to-decimal-places.helper';

export function convertWeightUnit(
    weightUnit: WeightUnit,
    currentWeightLiftedValue: number,
): string {
    return weightUnit === 'lbs' ?
        roundToDecimalPlaces(1, currentWeightLiftedValue * KG_TO_LBS) :
        roundToDecimalPlaces(1, currentWeightLiftedValue / KG_TO_LBS);
}
