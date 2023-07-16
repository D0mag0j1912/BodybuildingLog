import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { NUMBER_MAPPER } from '../../../helpers/number-mapper.helper';

@Pipe({ name: 'numberTranslate' })
export class NumberTranslatePipe implements PipeTransform {
    constructor(private _translateService: TranslateService) {}

    transform(value: number): Observable<string> {
        return this._translateService.stream(`common.numbers.${NUMBER_MAPPER[value].value}`);
    }
}
