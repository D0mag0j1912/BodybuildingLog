import { Pipe, PipeTransform } from '@angular/core';
import { DEFAULT_WEIGHT_FORMAT } from '../../../../constants/shared/default-weight-format.const';

@Pipe({ name: 'roundTotalWeight' })
export class RoundTotalWeightPipe implements PipeTransform {

    transform(totalWeight: number): string {
        return totalWeight ? `${(Math.round(totalWeight * 100) / 100).toString()} ${DEFAULT_WEIGHT_FORMAT}` : `0 ${DEFAULT_WEIGHT_FORMAT}`;
    }

}
