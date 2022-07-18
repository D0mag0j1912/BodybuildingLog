import { Pipe, PipeTransform } from '@angular/core';
import { WeightUnit } from '../../../../models/common/preferences.type';

@Pipe({ name: 'roundTotalWeight' })
export class RoundTotalWeightPipe implements PipeTransform {

    transform(
        totalWeight: number,
        currentWeightFormat: WeightUnit,
    ): string {
        return totalWeight ? `${(Math.round(totalWeight * 100) / 100).toString()} ${currentWeightFormat}` : `0 ${currentWeightFormat}`;
    }

}
