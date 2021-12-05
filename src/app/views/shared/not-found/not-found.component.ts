import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {

    isAuth$: Observable<boolean> = this.authService.isAuth$;

    constructor(private readonly authService: AuthService) {}
}
