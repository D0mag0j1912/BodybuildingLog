import { KG_TO_LBS } from '../../constants/shared/kg-to-lbs.const';
import { WeightUnit } from '../../models/common/preferences.type';

export function convertWeightUnit(
    weightUnit: WeightUnit,
    currentWeightLiftedValue: number,
): string {
    return weightUnit === 'lbs' ? (currentWeightLiftedValue * KG_TO_LBS).toString() : (currentWeightLiftedValue / KG_TO_LBS).toString();
}
