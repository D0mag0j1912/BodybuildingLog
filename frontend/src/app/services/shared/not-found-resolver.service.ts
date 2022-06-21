import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LocalStorageItems } from '../../models/common/interfaces/common.model';

@Injectable()
export class NotFoundResolverService implements Resolve<void> {

    resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): void {
        localStorage.removeItem(LocalStorageItems.TRAINING_STATE);
    }
}
