import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Preferences } from '../../../../models/common/preferences.model';
import { WeightFormat } from '../../../../models/common/preferences.type';

interface UnitData {
    UnitName: string;
    WeightFormat: WeightFormat;
}

@Component({
    selector: 'bl-units',
    templateUrl: './units.component.html',
    styleUrls: ['./units.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitsComponent {

    @Input()
    preferences$: Observable<Preferences>;

    readonly unitData: UnitData[] = [{
        UnitName: 'units.kilograms',
        WeightFormat: 'kg',
    }, {
        UnitName: 'units.pounds',
        WeightFormat: 'lbs',
    }];

    changeUnit(weightFormat: WeightFormat): void {
        //TODO: Call API
    }

}
