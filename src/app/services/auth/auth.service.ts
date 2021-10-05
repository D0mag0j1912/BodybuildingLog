import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { Signup, Login } from "../../models/auth/auth-data.model";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { AuthResponseData } from "../../models/auth/auth-data.model";
import { Preferences } from "src/app/models/preferences.model";
import { TranslateService } from "@ngx-translate/core";
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    //Oznaka je korisnik prijavljen
    isAuthenticated: boolean = false;
    //Spremam token
    private token: string;
    //Subject koji dava informaciju je li korisnik prijavljen
    private isAuth$$ = new BehaviorSubject<boolean>(false);
    //Observable od Subjecta
    isAuth$ = this.isAuth$$.asObservable();
    //Spremam referencu timera
    private tokenTimer: any;
    //Spremam ID usera koji je prijavljen
    private loggedUser$$: BehaviorSubject<AuthResponseData> = new BehaviorSubject<AuthResponseData>(null);
    loggedUser$ = this.loggedUser$$.asObservable();

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly translateService: TranslateService
    ){}

    updateUserData(
        preferences?: Preferences
    ): void {
        const userData: AuthResponseData = JSON.parse(localStorage.getItem('userData'));
        const updatedUserData: AuthResponseData = {...userData, preferences: {
            userId: preferences.userId,
            language: preferences.language,
            weightFormat: 'kg'
        }};
        this.loggedUser$$.next(updatedUserData);
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
    }

    //Dohvaćam token
    getToken(): string {
        return this.token;
    }

    //Metoda pomoću koje se korisnika registrira
    signup(
        language: string,
        weightFormat: string,
        email: string,
        password: string,
        confirmPassword: string
    ): Observable<AuthResponseData> {
        const signupData: Signup = {
            email,
            password,
            confirmPassword
        };
        const preferences: Preferences = {
            language: language,
            weightFormat: weightFormat
        };
        return this.http.post<AuthResponseData>(environment.backend + '/signup', {
            signupData: signupData,
            preferences: preferences
        });
    }

    //Metoda pomoću koje se korisnika prijavljuje
    login(
        email: string,
        password: string
    ): Observable<AuthResponseData> {
        const authData: Login = {
            email: email,
            password: password
        };
        return this.http.post<AuthResponseData>(environment.backend + '/login', authData).pipe(
            tap((response: AuthResponseData) => {
                //Ako je server vratio token
                if(response.token){
                    //Emitiram vrijednost ID-a prijavljenog korisnika
                    this.loggedUser$$.next(response);
                    //Spremam token
                    this.token = response.token;
                    //Emitiram informaciju da je korisnik prijavljen
                    this.isAuth$$.next(true);
                    //Označavam da je korisnik prijavljen
                    this.isAuthenticated = true;
                    //Dohvaćam koliko je trajanje tokena
                    const expiresInDuration = response.expiresIn;
                    //Postavljam timer tokena
                    this.setAuthTimer(expiresInDuration);
                    //Računam datum isteka tokena
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                    this.saveLS(
                        this.token,
                        expirationDate,
                        response._id,
                        response.preferences
                    );
                    this.translateService.use(response.preferences.language);
                    this.router.navigate(['/new-training']);
                }
            })
        );
    }

    //Metoda koja se poziva na refreshu (održava stanje prijave)
    autoLogin(): void {
        if(JSON.parse(localStorage.getItem('userData'))){
            const userData: AuthResponseData = JSON.parse(localStorage.getItem('userData'));
            if(!userData.token || !userData.expirationDate){
                return;
            }
            const authData: AuthResponseData = {
                token: userData.token,
                expirationDate: new Date(userData.expirationDate),
                _id: userData._id,
                preferences: userData.preferences
            };
            const now = new Date();
            //Dobivamo koliko je ostalo vremena do isteka tokena (budućnost - sadašnjost)
            const expiresIn = authData.expirationDate.getTime() - now.getTime();
            //Ako je istek u budućnosti
            if(expiresIn > 0){
                this.token = userData.token;
                this.isAuthenticated = true;
                this.setAuthTimer(expiresIn / 1000);
                //Spremam stanja u Subjecte
                this.isAuth$$.next(true);
                this.loggedUser$$.next(authData);
            }
        }
    }

    //Metoda koja se poziva kada se korisnik odjavi
    logout(): void {
        //Postavljam sve statuse prijave na status da je korisnik odjavljen
        this.token = null;
        this.isAuthenticated = false;
        this.isAuth$$.next(false);
        //Čistim timer
        clearTimeout(this.tokenTimer);
        //Očisti LS
        this.clearLS();
        //Preusmjeravam se na login stranicu
        this.router.navigate(['/login']);
    }

    //Metoda koja postavlja timer tokena
    private setAuthTimer(duration: number): void {
        //Postavljam timer kada će isteći token
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }

    //Metoda koja sprema podatke prijave u LS
    private saveLS(
        token: string,
        expirationDate: Date,
        userId: string,
        preferences: Preferences
    ): void {
        //Sve primljene informacije o prijavljenom korisniku spremam u LS
        const userData: AuthResponseData = {
            token: token,
            expirationDate: expirationDate,
            _id: userId,
            preferences: preferences
        };
        //Spremam u LS
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    //Metoda koja čisti LS
    private clearLS(): void {
        localStorage.removeItem('userData');
        localStorage.removeItem('trainingState');
        localStorage.removeItem('allExercises');
    }
}
