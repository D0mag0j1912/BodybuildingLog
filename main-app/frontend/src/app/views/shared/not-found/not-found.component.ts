import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';

@Component({
    selector: 'bl-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
    isAuth$: Observable<boolean> = this._authStoreService.isAuth$;

    constructor(private _authStoreService: AuthStoreService) {}
}
