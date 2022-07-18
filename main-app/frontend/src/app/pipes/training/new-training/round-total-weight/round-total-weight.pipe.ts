import { Pipe, PipeTransform } from '@angular/core';
import { WeightUnit } from '../../../../models/common/preferences.type';

@Pipe({ name: 'roundTotalWeight' })
export class RoundTotalWeightPipe implements PipeTransform {

    transform(
        totalWeight: number,
        currentWeightUnit: WeightUnit,
    ): string {
        return totalWeight ? `${(Math.round(totalWeight * 100) / 100).toString()} ${currentWeightUnit}` : `0 ${currentWeightUnit}`;
    }

}
