import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { from, Observable } from 'rxjs';
import { StorageItems } from '../../constants/enums/storage-items.enum';

@Injectable()
export class NotFoundResolverService implements Resolve<void> {
    resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<void> {
        return from(Storage.remove({ key: StorageItems.TRAINING_STATE }));
    }
}
