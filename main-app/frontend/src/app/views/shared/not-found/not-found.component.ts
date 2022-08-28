import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';

@Component({
    selector: 'bl-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
    isAuth$: Observable<boolean> = this.authStoreService.isAuth$;

    constructor(private readonly authStoreService: AuthStoreService) {}
}
