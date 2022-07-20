import { Pipe, PipeTransform } from '@angular/core';
import { roundToDecimalPlaces } from '../../../../helpers/round-to-decimal-places.helper';
import { WeightUnit } from '../../../../models/common/preferences.type';

@Pipe({ name: 'roundTotalWeight' })
export class RoundTotalWeightPipe implements PipeTransform {

    transform(
        totalWeight: number,
        currentWeightUnit: WeightUnit,
    ): string {
        return totalWeight ? `${roundToDecimalPlaces(2, totalWeight)} ${currentWeightUnit}` : `0 ${currentWeightUnit}`;
    }

}
