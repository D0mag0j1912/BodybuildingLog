import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateService } from '../../../services/state/auth/auth-state.service';

@Component({
    selector: 'bl-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {

    isAuth$: Observable<boolean> = this.authStateService.isAuth$;

    constructor(
        private readonly authStateService: AuthStateService,
    ) { }
}
