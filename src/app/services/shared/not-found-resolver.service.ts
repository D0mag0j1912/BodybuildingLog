import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class NotFoundResolverService implements Resolve<void> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        localStorage.removeItem('trainingState');
    }
}
