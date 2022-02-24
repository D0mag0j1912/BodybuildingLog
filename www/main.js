(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);
/* harmony import */ var _services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared/not-found-resolver.service */ 94183);
/* harmony import */ var _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/shared/not-found/not-found.component */ 50326);







const routes = [{
  path: '',
  redirectTo: '/auth/login',
  pathMatch: 'full'
}, {
  path: 'auth',
  loadChildren: function () {
    var _ref = (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 83970)).then(module => module.AuthModule);
    });

    return function loadChildren() {
      return _ref.apply(this, arguments);
    };
  }()
}, {
  path: 'training',
  loadChildren: function () {
    var _ref2 = (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "src_app_modules_training_training_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/training/training.module */ 89952)).then(module => module.TrainingModule);
    });

    return function loadChildren() {
      return _ref2.apply(this, arguments);
    };
  }(),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'not-found',
  component: _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent,
  resolve: [_services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_2__.NotFoundResolverService]
}, {
  path: '**',
  redirectTo: '/not-found'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_6__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/common/interfaces/common.model */ 66756);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.service */ 51228);
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/shared/shared.service */ 41571);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/training/new-training.service */ 53002);











let AppComponent = class AppComponent {
    constructor(authService, sharedService, newTrainingService, translateService, unsubscribeService) {
        var _a;
        this.authService = authService;
        this.sharedService = sharedService;
        this.newTrainingService = newTrainingService;
        this.translateService = translateService;
        this.unsubscribeService = unsubscribeService;
        this.translateService.setDefaultLang('en');
        const authData = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.LocalStorageItems.USER_DATA));
        this.translateService.use(((_a = authData === null || authData === void 0 ? void 0 : authData.Preferences) === null || _a === void 0 ? void 0 : _a.language) || 'en')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribeService))
            .subscribe();
    }
    ngOnInit() {
        this.authService.autoLogin();
        this.newTrainingService.keepTrainingState();
        this.sharedService.keepQueryParams();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService },
    { type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_6__.NewTrainingService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_5__.UnsubscribeService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'bl-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush,
        providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_5__.UnsubscribeService],
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpLoaderFactory": () => (/* binding */ httpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ 77114);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32202);
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sentry/angular */ 45395);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 78189);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/error.interceptor */ 92379);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ 63806);
/* harmony import */ var _modules_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/navigation.module */ 33146);
/* harmony import */ var _services_errors_sentry_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/errors/sentry.service */ 30207);



















(0,_sentry_angular__WEBPACK_IMPORTED_MODULE_8__.init)({
    dsn: 'https://b4903b17554c4e40bbada176e50e4719@o997027.ingest.sentry.io/5955490',
});
function httpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http);
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexLayoutModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule,
            _modules_navigation_module__WEBPACK_IMPORTED_MODULE_6__.NavigationModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateLoader,
                    useFactory: httpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient],
                },
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule.forRoot(),
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
                useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptor,
                multi: true,
            }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
                useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptor,
                multi: true,
            }, {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ErrorHandler,
                useClass: _services_errors_sentry_service__WEBPACK_IMPORTED_MODULE_7__.SentryService,
            },
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicRouteStrategy,
            },
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient,
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 71891:
/*!*******************************************************!*\
  !*** ./src/app/constants/snack-bar-duration.const.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SNACK_BAR_DURATION": () => (/* binding */ SNACK_BAR_DURATION)
/* harmony export */ });
const SNACK_BAR_DURATION = Object.freeze({
    GENERAL: 3000,
    ERROR: 5000,
});


/***/ }),

/***/ 32439:
/*!*************************************************!*\
  !*** ./src/app/constants/spinner-size.const.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SPINNER_SIZE": () => (/* binding */ SPINNER_SIZE)
/* harmony export */ });
const SPINNER_SIZE = 40;


/***/ }),

/***/ 95107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/auth.service */ 51228);





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(_route, _state) {
        return this.authService.isAuth$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((isAuth) => {
            if (!isAuth) {
                return this.router.createUrlTree(['/auth/login']);
            }
            return true;
        }));
    }
    canLoad(_route) {
        return this.authService.isAuth$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((isAuth) => {
            if (!isAuth) {
                return this.router.createUrlTree(['/auth/login']);
            }
            return true;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], AuthGuard);



/***/ }),

/***/ 2134:
/*!**********************************************************!*\
  !*** ./src/app/helpers/control-value-accessor.helper.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getControlValueAccessor": () => (/* binding */ getControlValueAccessor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);


function getControlValueAccessor(component) {
    return {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => component),
        multi: true,
    };
}


/***/ }),

/***/ 10225:
/*!*****************************************!*\
  !*** ./src/app/helpers/dates.helper.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidDate": () => (/* binding */ isValidDate),
/* harmony export */   "constructDates": () => (/* binding */ constructDates)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 68031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 10913);

const isValidDate = (dateStr) => !isNaN(new Date(dateStr).getDate());
const constructDates = (date) => {
    const startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(date, {
        weekStartsOn: 1,
    });
    const endDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date, {
        weekStartsOn: 1,
    });
    return {
        StartDate: startDate,
        EndDate: endDate,
    };
};


/***/ }),

/***/ 59230:
/*!************************************************************************************!*\
  !*** ./src/app/helpers/error-matchers/exercise-name-error-state-matcher.helper.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseNameErrorStateMatcher": () => (/* binding */ ExerciseNameErrorStateMatcher)
/* harmony export */ });
class ExerciseNameErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form === null || form === void 0 ? void 0 : form.submitted;
        return ((form === null || form === void 0 ? void 0 : form.invalid) && isSubmitted) ||
            ((control === null || control === void 0 ? void 0 : control.invalid) && ((control === null || control === void 0 ? void 0 : control.dirty) || (control === null || control === void 0 ? void 0 : control.touched) || isSubmitted));
    }
}


/***/ }),

/***/ 36402:
/*!***************************************************************************!*\
  !*** ./src/app/helpers/error-matchers/form-error-state-matcher.helper.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormErrorStateMatcher": () => (/* binding */ FormErrorStateMatcher)
/* harmony export */ });
class FormErrorStateMatcher {
    isErrorState(control, _form) {
        const controlTouched = control && (control.dirty || control.touched);
        const parentInvalid = control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched);
        return parentInvalid && controlTouched;
    }
}


/***/ }),

/***/ 13899:
/*!**************************************************!*\
  !*** ./src/app/helpers/is-never-check.helper.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNeverCheck": () => (/* binding */ isNeverCheck)
/* harmony export */ });
function isNeverCheck(_x) {
    throw new Error("Didn't expect to get here");
}


/***/ }),

/***/ 35717:
/*!************************************************************************************!*\
  !*** ./src/app/helpers/training/past-trainings/map-past-trainings-dates.helper.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapDateInterval": () => (/* binding */ mapDateInterval)
/* harmony export */ });
function mapDateInterval(response) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return Object.assign(Object.assign({}, response), { Value: Object.assign(Object.assign({}, response.Value), { Results: Object.assign(Object.assign({}, response.Value.Results), { Dates: {
                    StartDate: new Date((_d = (_c = (_b = (_a = response.Value) === null || _a === void 0 ? void 0 : _a.Results) === null || _b === void 0 ? void 0 : _b.Dates) === null || _c === void 0 ? void 0 : _c.StartDate) !== null && _d !== void 0 ? _d : null),
                    EndDate: new Date((_h = (_g = (_f = (_e = response.Value) === null || _e === void 0 ? void 0 : _e.Results) === null || _f === void 0 ? void 0 : _f.Dates) === null || _g === void 0 ? void 0 : _g.EndDate) !== null && _h !== void 0 ? _h : null),
                } }) }) });
}


/***/ }),

/***/ 78189:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/auth.service */ 51228);



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const token = this.authService.getToken();
        const authRequest = request.clone({ headers: request.headers.set('authorization', 'Bearer ' + token) });
        return next.handle(authRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AuthInterceptor);



/***/ }),

/***/ 92379:
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/minimal */ 50594);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/snack-bar-duration.const */ 71891);









let ErrorInterceptor = class ErrorInterceptor {
    constructor(snackBar, translateService) {
        this.snackBar = snackBar;
        this.translateService = translateService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            let errorMessage;
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
                (0,_sentry_minimal__WEBPACK_IMPORTED_MODULE_3__.captureException)(error);
                if (!window.navigator.onLine) {
                    errorMessage = this.translateService.instant('common.errors.internet_required');
                }
                else {
                    if (error.error.statusCode === 404) {
                        errorMessage = this.translateService.instant('common.errors.unknown_error');
                    }
                    else {
                        if (Array.isArray(error.error.message)) {
                            errorMessage = this.translateService.instant(error.error.message[0].substring(error.error.message[0].indexOf('@') + 1, error.error.message[0].length));
                        }
                        else {
                            errorMessage = this.translateService.instant(error.error.message);
                        }
                    }
                }
            }
            else {
                errorMessage = this.translateService.instant('common.errors.unknown_error');
            }
            this.snackBar.open(errorMessage, null, {
                duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_0__.SNACK_BAR_DURATION.ERROR,
                panelClass: 'app__snackbar-error',
            });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
], ErrorInterceptor);



/***/ }),

/***/ 63806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 35812);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 59421);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 88824);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 71412);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 15754);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 33351);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);


















let MaterialModule = class MaterialModule {
};
MaterialModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        exports: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule,
        ],
    })
], MaterialModule);



/***/ }),

/***/ 66756:
/*!**********************************************************!*\
  !*** ./src/app/models/common/interfaces/common.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageItems": () => (/* binding */ LocalStorageItems)
/* harmony export */ });
var LocalStorageItems;
(function (LocalStorageItems) {
    LocalStorageItems["TRAINING_STATE"] = "trainingState";
    LocalStorageItems["USER_DATA"] = "userData";
    LocalStorageItems["ALL_EXERCISES"] = "allExercises";
    LocalStorageItems["QUERY_PARAMS"] = "queryParams";
})(LocalStorageItems || (LocalStorageItems = {}));


/***/ }),

/***/ 68350:
/*!*************************************************************!*\
  !*** ./src/app/models/common/interfaces/paginator.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_SIZE": () => (/* binding */ DEFAULT_SIZE),
/* harmony export */   "INITIAL_PAGE": () => (/* binding */ INITIAL_PAGE)
/* harmony export */ });
const DEFAULT_SIZE = 3;
const INITIAL_PAGE = 1;


/***/ }),

/***/ 31845:
/*!*********************************************!*\
  !*** ./src/app/models/preferences.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_WEIGHT_FORMAT": () => (/* binding */ DEFAULT_WEIGHT_FORMAT)
/* harmony export */ });
const DEFAULT_WEIGHT_FORMAT = 'kg';


/***/ }),

/***/ 42442:
/*!**********************************************************************!*\
  !*** ./src/app/models/training/new-training/empty-training.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_TRAINING_EDIT": () => (/* binding */ EMPTY_TRAINING_EDIT),
/* harmony export */   "EMPTY_TRAINING": () => (/* binding */ EMPTY_TRAINING),
/* harmony export */   "createEmptyExercise": () => (/* binding */ createEmptyExercise)
/* harmony export */ });
const EMPTY_TRAINING_EDIT = {
    _id: null,
    editedDate: null,
    editTraining: null,
};
const EMPTY_TRAINING = {
    exercise: [],
    _id: '',
    bodyweight: null,
    editMode: false,
    userId: null,
};
const createEmptyExercise = (exercises) => ({
    exerciseName: null,
    sets: [],
    total: null,
    disabledTooltip: true,
    availableExercises: [...exercises],
});


/***/ }),

/***/ 48941:
/*!************************************************************************!*\
  !*** ./src/app/models/training/past-trainings/past-trainings.model.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUERY_PARAMS_DATE_FORMAT": () => (/* binding */ QUERY_PARAMS_DATE_FORMAT),
/* harmony export */   "TEMPLATE_DATE_FORMAT": () => (/* binding */ TEMPLATE_DATE_FORMAT)
/* harmony export */ });
const QUERY_PARAMS_DATE_FORMAT = 'dd-MM-yyyy';
const TEMPLATE_DATE_FORMAT = 'dd.MM.yyyy';


/***/ }),

/***/ 87253:
/*!*****************************************************!*\
  !*** ./src/app/models/training/shared/set.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInitialSet": () => (/* binding */ createInitialSet)
/* harmony export */ });
function createInitialSet() {
    const sets = [];
    sets.push({
        setNumber: 1,
        weightLifted: null,
        reps: null,
    });
    return sets;
}


/***/ }),

/***/ 89988:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/views/auth/login/login.component */ 2783);
/* harmony import */ var src_app_views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/views/auth/signup/signup.component */ 30770);





const routes = [
    {
        path: 'login',
        component: src_app_views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    {
        path: 'signup',
        component: src_app_views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent,
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AuthRoutingModule);



/***/ }),

/***/ 83970:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material.module */ 63806);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/login.service */ 52876);
/* harmony import */ var _services_auth_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/signup.service */ 27174);
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/auth/login/login.component */ 2783);
/* harmony import */ var _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/auth/signup/signup.component */ 30770);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ 95601);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ 89988);














const COMPONENTS = [
    _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__.SignupComponent,
    _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
];
const MY_IMPORTS = [
    _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
    _shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
    _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__.AuthRoutingModule,
];
const SERVICES = [
    _services_auth_signup_service__WEBPACK_IMPORTED_MODULE_2__.SignupService,
    _services_auth_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService,
];
let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [...COMPONENTS],
        imports: [
            ...EXTERNAL_IMPORTS,
            ...MY_IMPORTS,
        ],
        exports: [...COMPONENTS],
        providers: [...SERVICES],
    })
], AuthModule);



/***/ }),

/***/ 33146:
/*!**********************************************!*\
  !*** ./src/app/modules/navigation.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationModule": () => (/* binding */ NavigationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 77114);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _views_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/navigation/header/header.component */ 96605);
/* harmony import */ var _views_navigation_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/navigation/side-nav/side-nav.component */ 82207);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.module */ 83970);











const COMPONENTS = [
    _views_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
    _views_navigation_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__.SideNavComponent,
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
    src_app_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
];
const IMPORTS = [_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule];
let NavigationModule = class NavigationModule {
};
NavigationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [...COMPONENTS],
        imports: [
            ...EXTERNAL_IMPORTS,
            ...IMPORTS,
        ],
        exports: [...COMPONENTS],
    })
], NavigationModule);



/***/ }),

/***/ 95601:
/*!******************************************!*\
  !*** ./src/app/modules/shared.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material.module */ 63806);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/pipes.module */ 35503);
/* harmony import */ var _pipes_training_new_training_round_total_weight_round_total_weight_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/training/new-training/round-total-weight/round-total-weight.module */ 38409);
/* harmony import */ var _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module */ 31515);
/* harmony import */ var _services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shared/not-found-resolver.service */ 94183);
/* harmony import */ var _services_training_training_actions_delete_training_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/training/training-actions/delete-training-action.service */ 24513);
/* harmony import */ var _views_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/shared/dialog/dialog.component */ 38443);
/* harmony import */ var _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/shared/not-found/not-found.component */ 50326);
/* harmony import */ var _views_shared_training_sets_sets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/shared/training/sets/sets.component */ 4436);
/* harmony import */ var _views_shared_training_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/shared/training/single-exercise/single-exercise.component */ 72458);
/* harmony import */ var _views_shared_training_total_weight_total_weight_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/shared/training/total-weight/total-weight.component */ 73563);
/* harmony import */ var _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/shared/training/training-actions/delete-training-action/delete-training-action.component */ 94758);
/* harmony import */ var _views_shared_training_training_actions_more_training_action_more_training_action_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/shared/training/training-actions/more-training-action/more-training-action.component */ 75651);
/* harmony import */ var _views_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/shared/pagination/pagination.component */ 89320);



















const COMPONENTS = [
    _views_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__.DialogComponent,
    _views_shared_training_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_9__.SingleExerciseComponent,
    _views_shared_training_sets_sets_component__WEBPACK_IMPORTED_MODULE_8__.SetsComponent,
    _views_shared_training_total_weight_total_weight_component__WEBPACK_IMPORTED_MODULE_10__.TotalWeightComponent,
    _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent,
    _views_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent,
];
const ACTION_COMPONENTS = [
    _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_11__.DeleteTrainingActionComponent,
    _views_shared_training_training_actions_more_training_action_more_training_action_component__WEBPACK_IMPORTED_MODULE_12__.MoreTrainingActionComponent,
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
    _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
];
const IMPORTS = [
    _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_3__.ShowAllExercisesModule,
    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
    _pipes_training_new_training_round_total_weight_round_total_weight_module__WEBPACK_IMPORTED_MODULE_2__.RoundTotalWeightModule,
];
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        declarations: [
            ...COMPONENTS,
            ...ACTION_COMPONENTS,
        ],
        imports: [
            ...EXTERNAL_IMPORTS,
            ...IMPORTS,
        ],
        exports: [...COMPONENTS],
        entryComponents: [
            _views_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__.DialogComponent,
            _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_11__.DeleteTrainingActionComponent,
        ],
        providers: [
            _services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_4__.NotFoundResolverService,
            _services_training_training_actions_delete_training_action_service__WEBPACK_IMPORTED_MODULE_5__.DeleteTrainingActionService,
        ],
    })
], SharedModule);



/***/ }),

/***/ 35503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _training_new_training_new_training_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training/new-training/new-training.pipe */ 53420);
/* harmony import */ var _training_past_trainings_map_training_actions_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training/past-trainings/map-training-actions.pipe */ 58999);




let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _training_new_training_new_training_pipe__WEBPACK_IMPORTED_MODULE_0__.NewTrainingPipe,
            _training_past_trainings_map_training_actions_pipe__WEBPACK_IMPORTED_MODULE_1__.MapTrainingItemActionsPipe,
        ],
        exports: [
            _training_new_training_new_training_pipe__WEBPACK_IMPORTED_MODULE_0__.NewTrainingPipe,
            _training_past_trainings_map_training_actions_pipe__WEBPACK_IMPORTED_MODULE_1__.MapTrainingItemActionsPipe,
        ],
    })
], PipesModule);



/***/ }),

/***/ 53420:
/*!******************************************************************!*\
  !*** ./src/app/pipes/training/new-training/new-training.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTrainingPipe": () => (/* binding */ NewTrainingPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/training/new-training.service */ 53002);




let NewTrainingPipe = class NewTrainingPipe {
    constructor(newTrainingService) {
        this.newTrainingService = newTrainingService;
    }
    transform(_value, index, _exerciseChanged) {
        return this.newTrainingService.currentTrainingChanged$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((training) => { var _a, _b; return (_b = (_a = training.exercise[index]) === null || _a === void 0 ? void 0 : _a.availableExercises) !== null && _b !== void 0 ? _b : []; }));
    }
};
NewTrainingPipe.ctorParameters = () => [
    { type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_0__.NewTrainingService }
];
NewTrainingPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Pipe)({
        name: 'newTraining',
    })
], NewTrainingPipe);



/***/ }),

/***/ 38409:
/*!*********************************************************************************************!*\
  !*** ./src/app/pipes/training/new-training/round-total-weight/round-total-weight.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundTotalWeightModule": () => (/* binding */ RoundTotalWeightModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-total-weight.pipe */ 62857);



let RoundTotalWeightModule = class RoundTotalWeightModule {
};
RoundTotalWeightModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_0__.RoundTotalWeightPipe],
        exports: [_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_0__.RoundTotalWeightPipe],
        providers: [_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_0__.RoundTotalWeightPipe],
    })
], RoundTotalWeightModule);



/***/ }),

/***/ 62857:
/*!*******************************************************************************************!*\
  !*** ./src/app/pipes/training/new-training/round-total-weight/round-total-weight.pipe.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundTotalWeightPipe": () => (/* binding */ RoundTotalWeightPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models_preferences_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/preferences.model */ 31845);



let RoundTotalWeightPipe = class RoundTotalWeightPipe {
    transform(totalWeight) {
        return totalWeight ? `${(Math.round(totalWeight * 100) / 100).toString()} ${_models_preferences_model__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_WEIGHT_FORMAT}` : `0 ${_models_preferences_model__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_WEIGHT_FORMAT}`;
    }
};
RoundTotalWeightPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'roundTotalWeight',
    })
], RoundTotalWeightPipe);



/***/ }),

/***/ 58999:
/*!****************************************************************************!*\
  !*** ./src/app/pipes/training/past-trainings/map-training-actions.pipe.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapTrainingItemActionsPipe": () => (/* binding */ MapTrainingItemActionsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let MapTrainingItemActionsPipe = class MapTrainingItemActionsPipe {
    constructor() {
        this.actionToIcon = {
            'delete': {
                icon: 'delete',
                tooltip: 'training.past_trainings.buttons.delete_training',
            },
            'more': {
                icon: 'more_vert',
                tooltip: 'TODO',
            },
        };
    }
    transform(action, purpose) {
        if (purpose === 'icon') {
            return this.actionToIcon[action].icon;
        }
        else {
            return this.actionToIcon[action].tooltip;
        }
    }
};
MapTrainingItemActionsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'mapTrainingItemActions',
    })
], MapTrainingItemActionsPipe);



/***/ }),

/***/ 31515:
/*!***********************************************************************************************!*\
  !*** ./src/app/pipes/training/past-trainings/show-all-exercises/show-all-exercises.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowAllExercisesModule": () => (/* binding */ ShowAllExercisesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _show_all_exercises_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-all-exercises.pipe */ 93437);



let ShowAllExercisesModule = class ShowAllExercisesModule {
};
ShowAllExercisesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_show_all_exercises_pipe__WEBPACK_IMPORTED_MODULE_0__.ShowAllExercisesPipe],
        exports: [_show_all_exercises_pipe__WEBPACK_IMPORTED_MODULE_0__.ShowAllExercisesPipe],
    })
], ShowAllExercisesModule);



/***/ }),

/***/ 93437:
/*!*********************************************************************************************!*\
  !*** ./src/app/pipes/training/past-trainings/show-all-exercises/show-all-exercises.pipe.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowAllExercisesPipe": () => (/* binding */ ShowAllExercisesPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 86942);




let ShowAllExercisesPipe = class ShowAllExercisesPipe {
    constructor(translateService) {
        this.translateService = translateService;
    }
    transform(training) {
        var _a, _b;
        return this.translateService.stream((_b = (_a = training.exercise) === null || _a === void 0 ? void 0 : _a.map((x) => x === null || x === void 0 ? void 0 : x.exerciseName)) !== null && _b !== void 0 ? _b : []).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((value) => {
            let exercisesToConcat = '';
            Object.values(value).forEach((exerciseName, index) => {
                exercisesToConcat += `${index + 1}. ${exerciseName}\n`;
            });
            return exercisesToConcat;
        }));
    }
};
ShowAllExercisesPipe.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService }
];
ShowAllExercisesPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Pipe)({
        name: 'showAllExercises',
    })
], ShowAllExercisesPipe);



/***/ }),

/***/ 51228:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/common/interfaces/common.model */ 66756);










let AuthService = class AuthService {
  constructor(http, router, translateService) {
    this.http = http;
    this.router = router;
    this.translateService = translateService;
    this.loggedUser$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.loggedUser$ = this.loggedUser$$.asObservable();
    this.isAuth$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.isAuth$ = this.isAuth$$.asObservable();
  }

  getToken() {
    return this.token;
  }

  updateUserData(preferences) {
    //TODO: Ovdje treba pokupiti podatke iz Subjecta, a ne LS
    const userData = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.LocalStorageItems.USER_DATA));
    const updatedUserData = Object.assign(Object.assign({}, userData), {
      Preferences: {
        userId: preferences.userId,
        language: preferences.language,
        weightFormat: 'kg'
      }
    });
    this.loggedUser$$.next(Object.assign({}, updatedUserData));
    localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.LocalStorageItems.USER_DATA, JSON.stringify(Object.assign({}, updatedUserData)));
  }

  signup(language, weightFormat, email, password, confirmPassword) {
    const signupData = {
      email,
      password,
      confirmPassword
    };
    const preferences = {
      language: language,
      weightFormat: weightFormat
    };
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/auth/signup', {
      signupData: signupData,
      preferences: preferences
    });
  }

  login(email, password) {
    var _this = this;

    const authData = {
      email: email,
      password: password
    };
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/auth/login', authData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)( /*#__PURE__*/function () {
      var _ref = (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        if (response.Token) {
          _this.loggedUser$$.next(response);

          _this.isAuth$$.next(true);

          _this.token = response.Token;
          const expiresInDuration = response.ExpiresIn;

          _this.setAuthTimer(expiresInDuration);

          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);

          _this.saveLS(_this.token, expirationDate, response._id, response.Preferences);

          yield _this.router.navigate(['/training/new-training']);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(response => this.translateService.use(response.Preferences.language).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(response)))));
  }

  autoLogin() {
    if (JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.LocalStorageItems.USER_DATA))) {
      const userData = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.LocalStorageItems.USER_DATA));

      if (!userData.Token || !userData.ExpirationDate) {
        return;
      }

      const authData = {
        Token: userData.Token,
        ExpirationDate: new Date(userData.ExpirationDate),
        _id: userData._id,
        Preferences: userData.Preferences
      };
      const now = new Date();
      const expiresIn = authData.ExpirationDate.getTime() - now.getTime();

      if (expiresIn > 0) {
        this.token = userData.Token;
        this.setAuthTimer(expiresIn / 1000);
        this.isAuth$$.next(true);
        this.loggedUser$$.next(authData);
      }
    }
  }

  logout() {
    var _this2 = this;

    return (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.token = null;

      _this2.isAuth$$.next(false);

      clearTimeout(_this2.tokenTimer);

      _this2.clearLS();

      yield _this2.router.navigate(['/auth/login']);
    })();
  }

  setAuthTimer(duration) {
    var _this3 = this;

    this.tokenTimer = setTimeout( /*#__PURE__*/(0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.logout();
    }), duration * 1000);
  }

  saveLS(token, expirationDate, userId, preferences) {
    const userData = {
      Token: token,
      ExpirationDate: expirationDate,
      _id: userId,
      Preferences: preferences
    };
    localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.LocalStorageItems.USER_DATA, JSON.stringify(userData));
  }

  clearLS() {
    localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.LocalStorageItems.USER_DATA);
    localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.LocalStorageItems.TRAINING_STATE);
    localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.LocalStorageItems.ALL_EXERCISES);
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 52876:
/*!************************************************!*\
  !*** ./src/app/services/auth/login.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    passwordFitsEmail(email, password) {
        const params = `?email=${email}&password=${password}`;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND + '/check_pass' + params);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], LoginService);



/***/ }),

/***/ 27174:
/*!*************************************************!*\
  !*** ./src/app/services/auth/signup.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupService": () => (/* binding */ SignupService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);




let SignupService = class SignupService {
    constructor(http) {
        this.http = http;
    }
    getEmails(email) {
        const params = `?email=${email}`;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND + '/get_all_emails' + params);
    }
};
SignupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
SignupService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], SignupService);



/***/ }),

/***/ 30207:
/*!***************************************************!*\
  !*** ./src/app/services/errors/sentry.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SentryService": () => (/* binding */ SentryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/minimal */ 50594);



let SentryService = class SentryService {
    handleError(error) {
        (0,_sentry_minimal__WEBPACK_IMPORTED_MODULE_0__.captureException)(error);
        throw error;
    }
};
SentryService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], SentryService);



/***/ }),

/***/ 41378:
/*!*******************************************************!*\
  !*** ./src/app/services/shared/navigation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/snack-bar-duration.const */ 71891);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ 51228);









let NavigationService = class NavigationService {
    constructor(http, authService, translateService, snackBar) {
        this.http = http;
        this.authService = authService;
        this.translateService = translateService;
        this.snackBar = snackBar;
    }
    setPreferences(userId, language, weightFormat) {
        const preferences = {
            language: language,
            weightFormat: weightFormat,
        };
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND + `/preferences/${userId}`, { preferences: preferences }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => {
            this.authService.updateUserData({
                userId: userId,
                language: language,
                weightFormat: weightFormat,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((response) => this.translateService.use(language).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => {
            this.snackBar.open(this.translateService.instant(response.Message), null, {
                duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_1__.SNACK_BAR_DURATION.GENERAL,
                panelClass: 'app__snackbar',
            });
        }))));
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar }
];
NavigationService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({ providedIn: 'root' })
], NavigationService);



/***/ }),

/***/ 94183:
/*!***************************************************************!*\
  !*** ./src/app/services/shared/not-found-resolver.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundResolverService": () => (/* binding */ NotFoundResolverService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/common/interfaces/common.model */ 66756);



let NotFoundResolverService = class NotFoundResolverService {
    resolve(_route, _state) {
        localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_0__.LocalStorageItems.TRAINING_STATE);
    }
};
NotFoundResolverService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], NotFoundResolverService);



/***/ }),

/***/ 41571:
/*!***************************************************!*\
  !*** ./src/app/services/shared/shared.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/common/interfaces/common.model */ 66756);




let SharedService = class SharedService {
    constructor() {
        this.editingTraining$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.pastTrainingsQueryParams$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.deletedTraining$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    subtractTwoHours(date) {
        return new Date(new Date(date).setHours(new Date(date).getHours() - 2));
    }
    keepQueryParams() {
        const queryParams = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_0__.LocalStorageItems.QUERY_PARAMS));
        if (!queryParams) {
            return;
        }
        this.pastTrainingsQueryParams$$.next(queryParams);
    }
};
SharedService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], SharedService);



/***/ }),

/***/ 50523:
/*!********************************************************!*\
  !*** ./src/app/services/shared/unsubscribe.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeService": () => (/* binding */ UnsubscribeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);



let UnsubscribeService = class UnsubscribeService extends rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject {
    ngOnDestroy() {
        this.next();
        this.complete();
    }
};
UnsubscribeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], UnsubscribeService);



/***/ }),

/***/ 53002:
/*!***********************************************************!*\
  !*** ./src/app/services/training/new-training.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTrainingService": () => (/* binding */ NewTrainingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/common/interfaces/common.model */ 66756);
/* harmony import */ var _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/training/new-training/empty-training.model */ 42442);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ 51228);









let NewTrainingService = class NewTrainingService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.allExercisesChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.allExercisesChanged$ = this.allExercisesChanged$$.asObservable();
        this.currentTrainingChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(_models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_2__.EMPTY_TRAINING);
        this.currentTrainingChanged$ = this.currentTrainingChanged$$.asObservable();
    }
    getExercises() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND + '/training/get_exercises').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((response) => {
            const trainingState = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__.LocalStorageItems.TRAINING_STATE));
            if (!trainingState) {
                return this.authService.loggedUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((authResponseData) => {
                    this.updateTrainingState(response.Value, true, authResponseData._id);
                    this.allExercisesChanged$$.next(response.Value);
                    localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__.LocalStorageItems.ALL_EXERCISES, JSON.stringify(response.Value));
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(response)));
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(response);
            }
        }));
    }
    addTraining(trainingData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND + '/training/handle_training', { trainingData: trainingData });
    }
    updateTraining(trainingData, trainingId) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND + `/training/handle_training/${trainingId}`, { updatedTrainingData: trainingData });
    }
    /**************************************** */
    getCurrentTrainingState() {
        return this.currentTrainingChanged$$.getValue();
    }
    addBodyweightToStorage(value) {
        const updatedTraining = Object.assign(Object.assign({}, this.currentTrainingChanged$$.getValue()), { bodyweight: +value });
        this.saveTrainingData(Object.assign({}, updatedTraining));
    }
    deleteSet(indexExercise, indexSet, newTotal) {
        const updatedTraining = Object.assign({}, this.currentTrainingChanged$$.getValue());
        updatedTraining.exercise[indexExercise].sets.splice(indexSet, 1);
        updatedTraining.exercise[indexExercise].sets.map((set) => {
            if (set.setNumber > (indexSet + 1)) {
                set.setNumber--;
            }
        });
        updatedTraining.exercise[indexExercise].total = newTotal;
        this.saveTrainingData(Object.assign({}, updatedTraining));
    }
    pushToAvailableExercises(currentTrainingState, toBeAddedExercise) {
        const updatedTraining = Object.assign({}, currentTrainingState);
        updatedTraining.exercise.map((exercise) => {
            const isDeletedExerciseInAE = exercise.availableExercises.find((exercise) => exercise._id === toBeAddedExercise[0]._id);
            if (!isDeletedExerciseInAE) {
                exercise.availableExercises.push(toBeAddedExercise[0]);
                exercise.availableExercises.sort(this.compare);
            }
        });
        this.saveTrainingData(Object.assign({}, updatedTraining));
    }
    deleteExercise(currentTrainingState, deletedExerciseName, indexExercise) {
        let updatedExercises = [...currentTrainingState.exercise];
        let updatedTraining;
        if (deletedExerciseName) {
            return this.allExercisesChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(_ => {
                updatedExercises = updatedExercises.filter((exercise) => exercise.exerciseName !== deletedExerciseName);
                updatedTraining = Object.assign(Object.assign({}, currentTrainingState), { exercise: updatedExercises });
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((allExercises) => [
                updatedTraining,
                allExercises.filter(exercise => exercise.name === deletedExerciseName),
            ]));
        }
        else {
            updatedExercises = updatedExercises.filter((_exercise, index) => index !== indexExercise);
            updatedTraining = Object.assign(Object.assign({}, currentTrainingState), { exercise: updatedExercises });
            this.saveTrainingData(updatedTraining);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([
                updatedTraining,
                null,
            ]);
        }
    }
    setsChanged(trainingData) {
        const updatedTraining = Object.assign({}, this.currentTrainingChanged$$.getValue());
        const indexOfChangedExercise = updatedTraining.exercise.findIndex((singleExercise) => singleExercise.exerciseName === trainingData.exerciseName);
        const indexFoundSet = updatedTraining.exercise[indexOfChangedExercise].sets.findIndex(set => set.setNumber === trainingData.setNumber);
        if (indexFoundSet > -1) {
            updatedTraining.exercise[indexOfChangedExercise].sets[indexFoundSet] = Object.assign(Object.assign({}, updatedTraining.exercise[indexOfChangedExercise].sets[indexFoundSet]), { weightLifted: trainingData.weightLifted, reps: trainingData.reps });
            updatedTraining.exercise[indexOfChangedExercise].total = trainingData.total;
        }
        else {
            updatedTraining.exercise[indexOfChangedExercise].sets.push({
                setNumber: trainingData.setNumber,
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps,
            });
            updatedTraining.exercise[indexOfChangedExercise].total = trainingData.total;
        }
        this.saveTrainingData(Object.assign({}, updatedTraining));
    }
    addNewExercise(alreadyUsedExercises) {
        const allExercises = [...this.allExercisesChanged$$.getValue()];
        const availableExercises = allExercises.filter((exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1);
        this.updateTrainingState(availableExercises);
    }
    updateExerciseChoices(selectedExercise, selectedIndex, disabledTooltip) {
        const updatedTraining = Object.assign({}, this.currentTrainingChanged$$.getValue());
        updatedTraining.exercise[selectedIndex].exerciseName = selectedExercise;
        updatedTraining.exercise[selectedIndex].disabledTooltip = disabledTooltip;
        updatedTraining.exercise.forEach((exercise, index) => {
            if (index !== selectedIndex) {
                exercise.availableExercises = exercise.availableExercises.filter((exercise) => exercise.name !== selectedExercise);
            }
        });
        this.saveTrainingData(Object.assign({}, updatedTraining));
    }
    keepTrainingState() {
        const trainingState = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__.LocalStorageItems.TRAINING_STATE));
        const allExercises = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__.LocalStorageItems.ALL_EXERCISES));
        if (!trainingState || !allExercises) {
            return;
        }
        this.currentTrainingChanged$$.next(Object.assign({}, trainingState));
        this.allExercisesChanged$$.next([...allExercises]);
    }
    updateTrainingState(exercises, restartAll, userId) {
        let updatedTraining = this.currentTrainingChanged$$.getValue();
        if (restartAll) {
            updatedTraining = Object.assign(Object.assign({}, _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_2__.EMPTY_TRAINING), { userId: userId });
        }
        updatedTraining.exercise.push((0,_models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_2__.createEmptyExercise)(exercises));
        this.saveTrainingData(updatedTraining);
    }
    updateTrainingData(editTraining) {
        this.saveTrainingData(Object.assign({}, editTraining));
    }
    clearTrainingData() {
        this.saveTrainingData(Object.assign({}, _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_2__.EMPTY_TRAINING));
    }
    saveTrainingData(updatedTraining) {
        this.currentTrainingChanged$$.next(Object.assign({}, updatedTraining));
        localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__.LocalStorageItems.TRAINING_STATE, JSON.stringify(Object.assign({}, updatedTraining)));
    }
    compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
};
NewTrainingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
NewTrainingService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({ providedIn: 'root' })
], NewTrainingService);



/***/ }),

/***/ 24513:
/*!**************************************************************************************!*\
  !*** ./src/app/services/training/training-actions/delete-training-action.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteTrainingActionService": () => (/* binding */ DeleteTrainingActionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-past-trainings-dates.helper */ 35717);
/* harmony import */ var _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../views/shared/training/training-actions/delete-training-action/delete-training-action.component */ 94758);











let DeleteTrainingActionService = class DeleteTrainingActionService {
    constructor(http, dialog, datePipe, translateService) {
        this.http = http;
        this.dialog = dialog;
        this.datePipe = datePipe;
        this.translateService = translateService;
    }
    perform(data) {
        this.openDeleteTrainingDialog(data);
    }
    openDeleteTrainingDialog(data) {
        this.dialog.open(_views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_2__.DeleteTrainingActionComponent, {
            data: {
                title$: this.translateService.stream('training.past_trainings.actions.delete_training'),
                dateCreated$: this.translateService.stream(`weekdays.${data.weekDays[data.dayIndex]}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((value) => `${value} (${this.datePipe.transform(data.training.createdAt, 'dd.MM.yyyy')})`)),
                timeCreated$: (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(data.timeCreated),
                training$: (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(data.training),
                deleteTrainingFn: (trainingId, currentDate) => this.deleteTraining(trainingId, currentDate),
            },
            panelClass: 'delete-training-dialog',
        });
    }
    deleteTraining(trainingId, currentDate) {
        const params = `?currentDate=${currentDate}`;
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND + `/training/delete_training/${trainingId}${params}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => (0,_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__.mapDateInterval)(response)));
    }
};
DeleteTrainingActionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService }
];
DeleteTrainingActionService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)()
], DeleteTrainingActionService);



/***/ }),

/***/ 53714:
/*!****************************************************!*\
  !*** ./src/app/validators/auth/auth.validators.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passwordFitsEmail": () => (/* binding */ passwordFitsEmail),
/* harmony export */   "isEmailAvailable": () => (/* binding */ isEmailAvailable),
/* harmony export */   "samePasswords": () => (/* binding */ samePasswords)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 44661);


function passwordFitsEmail(loginService, changeDetectorRef) {
    return (group) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(350).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(_ => {
        var _a, _b;
        if (group) {
            const email = (_a = group.get('email')) === null || _a === void 0 ? void 0 : _a.value;
            const password = (_b = group.get('password')) === null || _b === void 0 ? void 0 : _b.value;
            if (!email || !password) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
            }
            return loginService.passwordFitsEmail(email, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
                if (!response) {
                    return { 'passwordFitsEmail': true };
                }
                return null;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => changeDetectorRef.markForCheck()));
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
        }
    }));
}
function isEmailAvailable(signupService, changeDetectorRef) {
    return (control) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(350).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(_ => {
        if (control) {
            const email = control === null || control === void 0 ? void 0 : control.value;
            if (!email) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
            }
            return signupService.getEmails(email).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
                if (!response) {
                    return { 'availableEmail': true };
                }
                return null;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => changeDetectorRef.markForCheck()));
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
        }
    }));
}
function samePasswords() {
    return (group) => {
        var _a, _b;
        if (group) {
            const password = (_a = group.get('password')) === null || _a === void 0 ? void 0 : _a.value;
            const confirmPassword = (_b = group.get('confirmPassword')) === null || _b === void 0 ? void 0 : _b.value;
            if (!password || !confirmPassword) {
                return null;
            }
            else {
                if (password !== confirmPassword) {
                    return { 'equalPass': true };
                }
                else {
                    return null;
                }
            }
        }
        else {
            return null;
        }
    };
}


/***/ }),

/***/ 9366:
/*!********************************************************!*\
  !*** ./src/app/validators/shared/common.validators.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBroj": () => (/* binding */ isBroj)
/* harmony export */ });
function isBroj() {
    return (control) => {
        if (control.value) {
            if (!isNaN(parseFloat(control.value)) && isFinite(control.value)) {
                return null;
            }
            return { 'onlyNumbers': true };
        }
        return null;
    };
}


/***/ }),

/***/ 11564:
/*!*******************************************************!*\
  !*** ./src/app/validators/training/set.validators.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allSetsFilled": () => (/* binding */ allSetsFilled),
/* harmony export */   "isSetValid": () => (/* binding */ isSetValid),
/* harmony export */   "bothValuesRequired": () => (/* binding */ bothValuesRequired)
/* harmony export */ });
function allSetsFilled() {
    return (array) => {
        if (array) {
            let isSetFilled = true;
            array.controls.forEach((set) => {
                if (!set.get('weightLifted').value || !set.get('reps').value
                    || set.get('weightLifted').errors || set.get('reps').errors) {
                    isSetFilled = false;
                }
            });
            if (isSetFilled) {
                return null;
            }
            return { 'setNotFilled': true };
        }
        return null;
    };
}
function isSetValid() {
    return (group) => {
        if (group) {
            const weightLifted = group === null || group === void 0 ? void 0 : group.get('weightLifted');
            const reps = group === null || group === void 0 ? void 0 : group.get('reps');
            if (weightLifted && reps) {
                if (!weightLifted.value || !reps.value) {
                    return { 'setNotEntered': true };
                }
                if (!weightLifted.valid || !reps.valid) {
                    return { 'setNotValid': true };
                }
            }
            return null;
        }
        else {
            return null;
        }
    };
}
function bothValuesRequired() {
    return (group) => {
        var _a, _b, _c, _d;
        if (group) {
            if (((_a = group.get('weightLifted')) === null || _a === void 0 ? void 0 : _a.value) && !((_b = group.get('reps')) === null || _b === void 0 ? void 0 : _b.value)) {
                return { 'repsRequired': true };
            }
            else if (!((_c = group.get('weightLifted')) === null || _c === void 0 ? void 0 : _c.value) && ((_d = group.get('reps')) === null || _d === void 0 ? void 0 : _d.value)) {
                return { 'weightLiftedRequired': true };
            }
            else {
                return null;
            }
        }
        return null;
    };
}


/***/ }),

/***/ 29651:
/*!*******************************************************************!*\
  !*** ./src/app/validators/training/single-exercise.validators.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkExerciseNumber": () => (/* binding */ checkExerciseNumber),
/* harmony export */   "checkDuplicateExerciseName": () => (/* binding */ checkDuplicateExerciseName)
/* harmony export */ });
//TODO: create no empty training validator (exercises.length === 0)
function checkExerciseNumber() {
    return (array) => {
        var _a, _b;
        if (array) {
            const exerciseNumber = (_b = (_a = array) === null || _a === void 0 ? void 0 : _a.controls) === null || _b === void 0 ? void 0 : _b.length;
            if (exerciseNumber) {
                return null;
            }
            return { 'emptyTraining': true };
        }
        return null;
    };
}
function checkDuplicateExerciseName() {
    return (array) => {
        var _a, _b;
        if (array) {
            const exerciseNames = [];
            for (const group of array.controls) {
                if (exerciseNames.indexOf((_a = group.get('name')) === null || _a === void 0 ? void 0 : _a.value) !== -1) {
                    return { 'duplicateExerciseName': group.get('name').value };
                }
                else {
                    exerciseNames.push((_b = group.get('name')) === null || _b === void 0 ? void 0 : _b.value);
                }
            }
            return null;
        }
        return null;
    };
}


/***/ }),

/***/ 2783:
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 33327);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 92767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/snack-bar-duration.const */ 71891);
/* harmony import */ var _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/error-matchers/form-error-state-matcher.helper */ 36402);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 51228);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth/login.service */ 52876);
/* harmony import */ var _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validators/auth/auth.validators */ 53714);













let LoginComponent = class LoginComponent {
  constructor(translateService, loginService, authService, changeDetectorRef, snackBar) {
    this.translateService = translateService;
    this.loginService = loginService;
    this.authService = authService;
    this.changeDetectorRef = changeDetectorRef;
    this.snackBar = snackBar;
    this.isLoading = false;
    this.formErrorStateMatcher = new _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_3__.FormErrorStateMatcher();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(20)])
    }, {
      asyncValidators: _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_6__.passwordFitsEmail(this.loginService, this.changeDetectorRef)
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.emailInput.nativeElement.focus());
  }

  onSubmit() {
    if (!this.form.valid) {
      this.snackBar.open(this.translateService.instant('auth.errors.invalid_form'), null, {
        duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_2__.SNACK_BAR_DURATION.ERROR,
        panelClass: 'app__snackbar-error'
      });
      return;
    }

    this.isLoading = true;
    this.authService.login(this.accessFormData('email').value, this.accessFormData('password').value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    })).subscribe(response => {
      if (response) {
        this.snackBar.open(this.translateService.instant(response.Message), null, {
          duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_2__.SNACK_BAR_DURATION.GENERAL,
          panelClass: response.Token ? 'app__snackbar' : 'app__snackbar-error'
        });
      }
    });
  }

  accessFormData(formFieldName) {
    return this.form.get(formFieldName);
  }

};

LoginComponent.ctorParameters = () => [{
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
}, {
  type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService
}, {
  type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
}, {
  type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar
}];

LoginComponent.propDecorators = {
  emailInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ['emailRef', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }]
  }]
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'bl-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush,
  styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], LoginComponent);


/***/ }),

/***/ 30770:
/*!*******************************************************!*\
  !*** ./src/app/views/auth/signup/signup.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.html?ngResource */ 36927);
/* harmony import */ var _signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.scss?ngResource */ 35431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/snack-bar-duration.const */ 71891);
/* harmony import */ var _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/spinner-size.const */ 32439);
/* harmony import */ var _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/error-matchers/form-error-state-matcher.helper */ 36402);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 51228);
/* harmony import */ var _services_auth_signup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/auth/signup.service */ 27174);
/* harmony import */ var _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../validators/auth/auth.validators */ 53714);

















let SignupComponent = class SignupComponent {
  constructor(authService, signupService, translateService, changeDetectorRef, snackBar, router) {
    this.authService = authService;
    this.signupService = signupService;
    this.translateService = translateService;
    this.changeDetectorRef = changeDetectorRef;
    this.snackBar = snackBar;
    this.router = router;
    this.formErrorStateMatcher = new _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_5__.FormErrorStateMatcher();
    this.isLoading = false;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      'language': new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('en', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      'weightFormat': new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('kg', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email], [_validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_8__.isEmailAvailable(this.signupService, this.changeDetectorRef)]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(20)]),
      'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(20)])
    }, {
      validators: _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_8__.samePasswords()
    });
  }

  get spinnerSize() {
    return _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_4__.SPINNER_SIZE;
  }

  onSubmit() {
    var _this = this;

    if (!this.form.valid) {
      this.snackBar.open(this.translateService.instant('auth.errors.invalid_form'), null, {
        duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_3__.SNACK_BAR_DURATION.ERROR,
        panelClass: 'app__snackbar-error'
      });
      return;
    }

    this.isLoading = true;
    this.authService.signup(this.accessFormData('language').value, this.accessFormData('weightFormat').value, this.accessFormData('email').value, this.accessFormData('password').value, this.accessFormData('confirmPassword').value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    })).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        if (response.Success) {
          _this.snackBar.open(_this.translateService.instant(response.Message), null, {
            duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_3__.SNACK_BAR_DURATION.GENERAL,
            panelClass: response.Success ? 'app__snackbar' : 'app__snackbar-error'
          });

          yield _this.router.navigate(['/auth/login']);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  accessFormData(formFieldName) {
    return this.form.get(formFieldName);
  }

};

SignupComponent.ctorParameters = () => [{
  type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService
}, {
  type: _services_auth_signup_service__WEBPACK_IMPORTED_MODULE_7__.SignupService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef
}, {
  type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
}];

SignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'bl-signup',
  template: _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MAT_RADIO_DEFAULT_OPTIONS,
    useValue: {
      color: 'primary'
    }
  }],
  styles: [_signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignupComponent);


/***/ }),

/***/ 96605:
/*!*************************************************************!*\
  !*** ./src/app/views/navigation/header/header.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.html?ngResource */ 35206);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 86417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/training/past-trainings/past-trainings.model */ 48941);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 51228);
/* harmony import */ var _services_shared_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared/navigation.service */ 41378);
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared/shared.service */ 41571);
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/training/new-training.service */ 53002);
/* harmony import */ var _helpers_dates_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/dates.helper */ 10225);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/common/interfaces/common.model */ 66756);















let HeaderComponent = class HeaderComponent {
  constructor(newTrainingService, authService, sharedService, navigationService, router) {
    this.newTrainingService = newTrainingService;
    this.authService = authService;
    this.sharedService = sharedService;
    this.navigationService = navigationService;
    this.router = router;
    this.myMatchOptions = {
      queryParams: 'ignored',
      matrixParams: 'exact',
      paths: 'exact',
      fragment: 'exact'
    };
    this.toggleSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
  }

  get StartDate() {
    var _a, _b;

    return (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((_b = (_a = (0,_helpers_dates_helper__WEBPACK_IMPORTED_MODULE_8__.constructDates)(new Date())) === null || _a === void 0 ? void 0 : _a.StartDate) !== null && _b !== void 0 ? _b : new Date(), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_3__.QUERY_PARAMS_DATE_FORMAT);
  }

  get EndDate() {
    var _a, _b;

    return (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((_b = (_a = (0,_helpers_dates_helper__WEBPACK_IMPORTED_MODULE_8__.constructDates)(new Date())) === null || _a === void 0 ? void 0 : _a.EndDate) !== null && _b !== void 0 ? _b : new Date(), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_3__.QUERY_PARAMS_DATE_FORMAT);
  }

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuth$;
    this.loggedUserData$ = this.authService.loggedUser$;
    this.isEditing$ = this.sharedService.editingTraining$$;
  }

  onLogout() {
    var _this = this;

    return (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.newTrainingService.clearTrainingData();

      yield _this.authService.logout();
    })();
  }

  goToPastTraining() {
    var _this2 = this;

    this.sharedService.pastTrainingsQueryParams$$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        yield _this2.router.navigate(['/training/past-trainings'], {
          queryParams: {
            startDate: (response === null || response === void 0 ? void 0 : response.startDate) ? response.startDate : undefined,
            endDate: (response === null || response === void 0 ? void 0 : response.endDate) ? response.endDate : undefined,
            search: (response === null || response === void 0 ? void 0 : response.search) ? response.search : undefined,
            page: (response === null || response === void 0 ? void 0 : response.page) ? response.page : undefined,
            size: (response === null || response === void 0 ? void 0 : response.size) ? response.size : undefined
          }
        });
        localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__.LocalStorageItems.QUERY_PARAMS);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  onToggle() {
    this.toggleSideNav.emit();
  }

  changeLanguage(language) {
    this.authService.loggedUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(userData => this.navigationService.setPreferences(userData._id, language, 'kg'))).subscribe();
  }

};

HeaderComponent.ctorParameters = () => [{
  type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_7__.NewTrainingService
}, {
  type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService
}, {
  type: _services_shared_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavigationService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
}];

HeaderComponent.propDecorators = {
  toggleSideNav: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output
  }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'bl-header',
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush,
  styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HeaderComponent);


/***/ }),

/***/ 82207:
/*!*****************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/side-nav.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavComponent": () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _side_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav.component.html?ngResource */ 93763);
/* harmony import */ var _side_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-nav.component.scss?ngResource */ 11362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 68031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 10913);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/training/past-trainings/past-trainings.model */ 48941);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 51228);
/* harmony import */ var _services_shared_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared/navigation.service */ 41378);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/training/new-training.service */ 53002);













let SideNavComponent = class SideNavComponent {
  constructor(authService, navigationService, newTrainingService, unsubsService, router) {
    this.authService = authService;
    this.navigationService = navigationService;
    this.newTrainingService = newTrainingService;
    this.unsubsService = unsubsService;
    this.router = router;
    this.closeSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
  }

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuth$;
    this.loggedUserData$ = this.authService.loggedUser$;
  }

  onLogout() {
    var _this = this;

    return (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.newTrainingService.clearTrainingData();

      yield _this.authService.logout();
    })();
  }

  goToPastTrainings() {
    var _this2 = this;

    return (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(), {
        weekStartsOn: 1
      });
      const endDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(), {
        weekStartsOn: 1
      });
      yield _this2.router.navigate(['/training/past-trainings'], {
        queryParams: {
          startDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(startDate, _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_3__.QUERY_PARAMS_DATE_FORMAT),
          endDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(endDate, _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_3__.QUERY_PARAMS_DATE_FORMAT)
        }
      });
    })();
  }

  changeLanguage(language) {
    this.authService.loggedUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(userData => this.navigationService.setPreferences(userData._id, language, 'kg')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubsService)).subscribe(_ => this.onCloseSideNav());
  }

  onCloseSideNav() {
    this.closeSideNav.emit();
  }

};

SideNavComponent.ctorParameters = () => [{
  type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _services_shared_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavigationService
}, {
  type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_7__.NewTrainingService
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_6__.UnsubscribeService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
}];

SideNavComponent.propDecorators = {
  closeSideNav: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output
  }]
};
SideNavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'bl-side-nav',
  template: _side_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectionStrategy.OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_6__.UnsubscribeService],
  styles: [_side_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SideNavComponent);


/***/ }),

/***/ 38443:
/*!*********************************************************!*\
  !*** ./src/app/views/shared/dialog/dialog.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponent": () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.component.html?ngResource */ 79798);
/* harmony import */ var _dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.component.scss?ngResource */ 81337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 86991);





let DialogComponent = class DialogComponent {
    constructor(data) {
        this.data = data;
    }
};
DialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA,] }] }
];
DialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        template: _dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DialogComponent);



/***/ }),

/***/ 50326:
/*!***************************************************************!*\
  !*** ./src/app/views/shared/not-found/not-found.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component.html?ngResource */ 69490);
/* harmony import */ var _not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component.scss?ngResource */ 76108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 51228);





let NotFoundComponent = class NotFoundComponent {
    constructor(authService) {
        this.authService = authService;
        this.isAuth$ = this.authService.isAuth$;
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
NotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'bl-not-found',
        template: _not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        styles: [_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotFoundComponent);



/***/ }),

/***/ 89320:
/*!*****************************************************************!*\
  !*** ./src/app/views/shared/pagination/pagination.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.component.html?ngResource */ 86580);
/* harmony import */ var _pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.component.scss?ngResource */ 35606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/is-never-check.helper */ 13899);
/* harmony import */ var _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/common/interfaces/paginator.model */ 68350);








let PaginationComponent = class PaginationComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.pageSizeOptions = [1, 3, 5, 10];
        this.isSearch = false;
        this.page = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_3__.INITIAL_PAGE;
        this.size = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_SIZE;
        this.isPreviousPage = true;
        this.isNextPage = true;
        this.data = undefined;
        this.paginatorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    loadPage(page, dateInterval, earliestTrainingDate, lastPage) {
        if (this.isSearch) {
            if (page) {
                switch (page) {
                    case 'First': {
                        this.page = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_3__.INITIAL_PAGE;
                        break;
                    }
                    case 'Previous': {
                        this.page--;
                        break;
                    }
                    case 'Next': {
                        this.page++;
                        break;
                    }
                    case 'Last': {
                        this.page = lastPage;
                        break;
                    }
                    default:
                        (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_2__.isNeverCheck)(page);
                }
            }
            this.paginatorChanged.emit({
                Page: +this.page,
                Size: +this.size,
                IsSearch: true,
            });
        }
        else {
            this.paginatorChanged.emit({
                Page: +this.page,
                Size: +this.size,
                IsSearch: false,
                PageType: page,
                DateInterval: dateInterval,
                EarliestTrainingDate: earliestTrainingDate,
            });
        }
    }
    setPageTooltip(isSearch, page) {
        if (isSearch) {
            if (page === 'First' || page === 'Last') {
                return this.translateService.stream(`training.past_trainings.buttons.${page === 'First' ? 'first_page' : 'last_page'}`);
            }
            else {
                return this.translateService.stream(`training.past_trainings.buttons.${page === 'Next' ? 'next_page' : 'previous_page'}`);
            }
        }
        else {
            if (page === 'First' || page === 'Last') {
                return this.translateService.stream(`training.past_trainings.buttons.${page === 'First' ? 'first_week' : 'last_week'}`);
            }
            else {
                if (page === 'Next') {
                    return this.translateService.stream(`training.past_trainings.${this.isNextPage ? 'buttons.next_week' : 'disabled_next_week'}`);
                }
                else {
                    return this.translateService.stream(`training.past_trainings.${this.isPreviousPage ? 'buttons.previous_week' : 'disabled_previous_week'}`);
                }
            }
        }
    }
    setPageTooltipClass(isSearch, page) {
        if (isSearch) {
            return 'tooltip';
        }
        else {
            if (page === 'First' || page === 'Last') {
                return 'tooltip';
            }
            if (page === 'Next') {
                return this.isNextPage ? 'tooltip' : 'tooltip-error';
            }
            else {
                return this.isPreviousPage ? 'tooltip' : 'tooltip-error';
            }
        }
    }
    setPageText(totalPages) {
        return this.translateService.stream('common')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((value) => {
            var _a, _b, _c;
            return `
                        ${value['page']}
                        <strong class="primary">${(_b = (_a = this.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '1'}</strong>
                        ${value['of']}
                        <strong class="primary">${(_c = totalPages === null || totalPages === void 0 ? void 0 : totalPages.toString()) !== null && _c !== void 0 ? _c : '1'}</strong>
                    `;
        }));
    }
};
PaginationComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
PaginationComponent.propDecorators = {
    isSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    isPreviousPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    isNextPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    paginatorChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
PaginationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'bl-pagination',
        template: _pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        styles: [_pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaginationComponent);



/***/ }),

/***/ 4436:
/*!**************************************************************!*\
  !*** ./src/app/views/shared/training/sets/sets.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetsComponent": () => (/* binding */ SetsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sets.component.html?ngResource */ 34122);
/* harmony import */ var _sets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sets.component.scss?ngResource */ 31082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/control-value-accessor.helper */ 2134);
/* harmony import */ var _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/error-matchers/form-error-state-matcher.helper */ 36402);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../validators/shared/common.validators */ 9366);
/* harmony import */ var _validators_training_set_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../validators/training/set.validators */ 11564);
var SetsComponent_1;













let SetsComponent = SetsComponent_1 = class SetsComponent {
    constructor(translateService, unsubscribeService) {
        this.translateService = translateService;
        this.unsubscribeService = unsubscribeService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]);
        this.formErrorStateMatcher = new _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_3__.FormErrorStateMatcher();
        this.isExerciseFormSubmitted$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
        this.exerciseStateChanged$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
        this.indexExercise = 0;
        this.editMode = false;
        this.isLoading = false;
        this.setAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.setDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.formStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    }
    ngOnInit() {
        this.form.setValidators([_validators_training_set_validators__WEBPACK_IMPORTED_MODULE_6__.allSetsFilled()]);
        this.form.updateValueAndValidity();
        this.formStateChanged.emit(this.formErrors);
        this.exerciseNameControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribeService)).subscribe((value) => {
            value ? this.accessFormField('weightLifted', 0).enable() : this.accessFormField('weightLifted', 0).disable();
            value ? this.accessFormField('reps', 0).enable() : this.accessFormField('reps', 0).disable();
        });
    }
    ngOnChanges() {
        this.form.updateValueAndValidity({ emitEvent: true });
    }
    writeValue(value) {
        if (value.length > 0) {
            for (const set of value) {
                this.addSet(set);
            }
        }
        else {
            this.addSet();
        }
    }
    //Sending parent new form value when form value changes
    registerOnChange(fn) {
        this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribeService)).subscribe((formValue) => {
            this.formStateChanged.emit(this.formErrors);
            fn(formValue);
        });
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    getSets() {
        return this.form.controls;
    }
    addSet(set) {
        this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            'setNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(set ? set.setNumber : this.getSets().length + 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            'weightLifted': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({
                value: set ? set.weightLifted : null,
                disabled: this.exerciseNameControl.value ? false : true,
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(1000),
                _validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_5__.isBroj()]),
            'reps': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({
                value: set ? set.reps : null,
                disabled: this.exerciseNameControl.value ? false : true,
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(1000),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]*$')]),
        }, {
            validators: [_validators_training_set_validators__WEBPACK_IMPORTED_MODULE_6__.bothValuesRequired(), _validators_training_set_validators__WEBPACK_IMPORTED_MODULE_6__.isSetValid()],
        }));
    }
    deleteSet(indexSet) {
        this.form.removeAt(indexSet);
        this.setDeleted.emit({
            indexExercise: this.indexExercise,
            indexSet: indexSet,
            newTotal: this.calculateTotal(),
        });
    }
    onChangeSets(indexSet) {
        var _a, _b, _c, _d;
        let total = 0;
        let isWeightLiftedValid = false;
        let isRepsValid = false;
        if (((_a = this.accessFormField('weightLifted', indexSet)) === null || _a === void 0 ? void 0 : _a.valid) && ((_b = this.accessFormField('weightLifted', indexSet)) === null || _b === void 0 ? void 0 : _b.value)) {
            isWeightLiftedValid = true;
        }
        if (((_c = this.accessFormField('reps', indexSet)) === null || _c === void 0 ? void 0 : _c.valid) && ((_d = this.accessFormField('reps', indexSet)) === null || _d === void 0 ? void 0 : _d.value)) {
            isRepsValid = true;
        }
        if (isWeightLiftedValid && isRepsValid) {
            total = this.calculateTotal();
        }
        this.setAdded.emit({
            indexExercise: this.indexExercise,
            indexSet: indexSet,
            isWeightLiftedValid: isWeightLiftedValid,
            isRepsValid: isRepsValid,
            newTotal: total,
            newSet: {
                setNumber: +this.accessFormField('setNumber', indexSet).value,
                weightLifted: +this.accessFormField('weightLifted', indexSet).value,
                reps: +this.accessFormField('reps', indexSet).value,
            },
        });
    }
    showAddSetTooltip(isSetError) {
        if (isSetError) {
            return this.translateService.stream('training.new_training.first_add_previous_set', {
                setNumber: this.getSets().length > 0 ? this.getSets().length : 1,
            });
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)('');
        }
    }
    showDeleteSetTooltip(indexSet) {
        if (indexSet > 0) {
            return this.translateService.stream('training.new_training.buttons.delete_set');
        }
        else {
            return this.translateService.stream('training.new_training.errors.delete_first_set');
        }
    }
    accessFormField(formField, indexSet) {
        var _a;
        return (_a = this.form.at(indexSet)) === null || _a === void 0 ? void 0 : _a.get(formField);
    }
    calculateTotal() {
        var _a, _b;
        let total = 0;
        for (const group of this.getSets()) {
            total += (+((_a = group.get('weightLifted')) === null || _a === void 0 ? void 0 : _a.value) * +((_b = group.get('reps')) === null || _b === void 0 ? void 0 : _b.value));
        }
        return total;
    }
    get formErrors() {
        let errors = [];
        if (this.form.errors) {
            const mappedKeys = Object.keys(this.form.errors)
                .map((key) => key);
            errors = errors.concat(mappedKeys);
        }
        this.form.controls.forEach((group) => {
            if (group === null || group === void 0 ? void 0 : group.errors) {
                const mappedKeys = Object.keys(group.errors)
                    .map((key) => key);
                errors = errors.concat(mappedKeys);
            }
        });
        return errors;
    }
};
SetsComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_4__.UnsubscribeService }
];
SetsComponent.propDecorators = {
    isExerciseFormSubmitted$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    exerciseStateChanged$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    exerciseNameControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    indexExercise: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    editMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    setAdded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }],
    setDeleted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }],
    formStateChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
SetsComponent = SetsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'bl-sets',
        template: _sets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
        providers: [
            (0,_helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_2__.getControlValueAccessor)(SetsComponent_1),
            _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_4__.UnsubscribeService,
        ],
        styles: [_sets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SetsComponent);



/***/ }),

/***/ 72458:
/*!************************************************************************************!*\
  !*** ./src/app/views/shared/training/single-exercise/single-exercise.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleExerciseComponent": () => (/* binding */ SingleExerciseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _single_exercise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-exercise.component.html?ngResource */ 91068);
/* harmony import */ var _single_exercise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-exercise.component.scss?ngResource */ 13376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ 71412);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants/snack-bar-duration.const */ 71891);
/* harmony import */ var _helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/control-value-accessor.helper */ 2134);
/* harmony import */ var _helpers_error_matchers_exercise_name_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/error-matchers/exercise-name-error-state-matcher.helper */ 59230);
/* harmony import */ var _models_preferences_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/preferences.model */ 31845);
/* harmony import */ var _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../models/training/new-training/empty-training.model */ 42442);
/* harmony import */ var _models_training_shared_set_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../models/training/shared/set.model */ 87253);
/* harmony import */ var _pipes_training_new_training_round_total_weight_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../pipes/training/new-training/round-total-weight/round-total-weight.pipe */ 62857);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/training/new-training.service */ 53002);
/* harmony import */ var _validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../validators/training/single-exercise.validators */ 29651);
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../dialog/dialog.component */ 38443);
var SingleExerciseComponent_1;






















const INITIAL_WEIGHT = 0;
const MAX_EXERCISE_NAME_WIDTH = 181;
let SingleExerciseComponent = SingleExerciseComponent_1 = class SingleExerciseComponent {
    constructor(newTrainingService, unsubscribeService, translateService, changeDetectorRef, snackBar, dialog, roundTotalWeightPipe) {
        this.newTrainingService = newTrainingService;
        this.unsubscribeService = unsubscribeService;
        this.translateService = translateService;
        this.changeDetectorRef = changeDetectorRef;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.roundTotalWeightPipe = roundTotalWeightPipe;
        this.exerciseStateChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.isSubmitted$$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
        this.exercises$ = undefined;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormArray([]);
        this.exerciseNameErrorStateMatcher = new _helpers_error_matchers_exercise_name_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_4__.ExerciseNameErrorStateMatcher();
        this.setErrors = [];
        this.exerciseChanged = false;
        this.editData = _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_6__.EMPTY_TRAINING_EDIT;
        this.isLoading = false;
        this.editMode = false;
        this.currentExerciseState$ = this.exerciseStateChanged$$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([
            this.newTrainingService.currentTrainingChanged$
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)((currentTrainingState) => currentTrainingState.exercise)),
            this.newTrainingService.allExercisesChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)),
        ])));
        this.form.setValidators([_validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_11__.checkDuplicateExerciseName(), _validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_11__.checkExerciseNumber()]);
        this.form.updateValueAndValidity();
    }
    set exerciseNameChoice(exerciseName) {
        if (exerciseName) {
            this.newTrainingService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)((currentTrainingState) => this.setExerciseNameTooltip(exerciseName, null, currentTrainingState)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.unsubscribeService)).subscribe();
        }
    }
    setErrorMatcher(index) {
        var _a, _b, _c;
        if ((_a = this.accessFormField('name', index)) === null || _a === void 0 ? void 0 : _a.value) {
            if (((_c = (_b = this.form) === null || _b === void 0 ? void 0 : _b.errors) === null || _c === void 0 ? void 0 : _c.duplicateExerciseName) === this.accessFormField('name', index).value) {
                return this.exerciseNameErrorStateMatcher;
            }
            return null;
        }
        return this.exerciseNameErrorStateMatcher;
    }
    writeValue(data) {
        if (data.exercise.length > 0) {
            data.exercise.forEach((exercise, indexExercise) => {
                this.addExercise();
                if (exercise.exerciseName) {
                    this.accessFormField('name', indexExercise).patchValue(exercise.exerciseName);
                    this.accessFormField('sets', indexExercise).patchValue(exercise.sets);
                    this.accessFormField('total', indexExercise).patchValue(exercise.total ? this.roundTotalWeightPipe.transform(exercise.total) : `0 ${_models_preferences_model__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_WEIGHT_FORMAT}`);
                    this.accessFormField('disabledTooltip', indexExercise).patchValue(exercise.disabledTooltip);
                }
            });
        }
        else {
            this.addExercise();
        }
    }
    registerOnChange(fn) {
        this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.unsubscribeService)).subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    onExerciseNameChange($event, indexExercise, element) {
        var _a, _b;
        if ($event.value) {
            if ((_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.duplicateExerciseName) {
                this.setExerciseNameTooltip(element, indexExercise).subscribe();
            }
            else {
                this.setExerciseNameTooltip(element, indexExercise).subscribe(_ => {
                    this.newTrainingService.updateExerciseChoices($event.value, indexExercise, this.accessFormField('disabledTooltip', indexExercise).value);
                    this.exerciseChanged = !this.exerciseChanged;
                    this.exerciseStateChanged$$.next();
                    this.changeDetectorRef.markForCheck();
                });
            }
        }
    }
    addExercise(clicked) {
        this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
            'sets': new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl((0,_models_training_shared_set_model__WEBPACK_IMPORTED_MODULE_7__.createInitialSet)()),
            'total': new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.roundTotalWeightPipe.transform(INITIAL_WEIGHT), [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
            'disabledTooltip': new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
        }));
        if (clicked) {
            this.newTrainingService.addNewExercise(this.getAlreadyUsedExercises());
            this.exerciseStateChanged$$.next();
        }
    }
    deleteExercise(indexExercise, exerciseName) {
        if (exerciseName) {
            const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__.DialogComponent, {
                data: {
                    isError: false,
                    deleteExercise: {
                        message$: this.translateService.stream('training.new_training.delete_exercise_prompt'),
                        exerciseName: exerciseName,
                    },
                },
            });
            dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)((response) => {
                if (response) {
                    return this.newTrainingService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)((currentTrainingState) => this.newTrainingService.deleteExercise(currentTrainingState, exerciseName)));
                }
                else {
                    return rxjs__WEBPACK_IMPORTED_MODULE_22__.EMPTY;
                }
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)(() => {
                this.exerciseStateChanged$$.next();
                this.changeDetectorRef.markForCheck();
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.unsubscribeService)).subscribe((data) => {
                this.exerciseChanged = !this.exerciseChanged;
                this.form.removeAt(indexExercise);
                this.newTrainingService.pushToAvailableExercises(data[0], data[1]);
            });
        }
        else {
            this.newTrainingService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)((currentTrainingState) => this.newTrainingService.deleteExercise(currentTrainingState, null, indexExercise)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)(() => this.exerciseStateChanged$$.next()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.unsubscribeService)).subscribe(_ => this.form.removeAt(indexExercise));
        }
    }
    onChangeSets($event) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.unsubscribeService)).subscribe(_ => {
            if ($event.isWeightLiftedValid
                && $event.isRepsValid
                && this.accessFormField('name', $event.indexExercise).value) {
                const trainingData = {
                    exerciseName: this.accessFormField('name', $event.indexExercise).value,
                    setNumber: $event.newSet.setNumber,
                    weightLifted: $event.newSet.weightLifted,
                    reps: $event.newSet.reps,
                    total: $event.newTotal,
                };
                this.newTrainingService.setsChanged(trainingData);
                this.accessFormField('total', $event.indexExercise).patchValue(this.roundTotalWeightPipe.transform($event.newTotal));
            }
            else {
                this.accessFormField('total', $event.indexExercise).patchValue(this.roundTotalWeightPipe.transform(0));
            }
        });
    }
    deleteSet($event) {
        this.accessFormField('total', $event.indexExercise).patchValue(this.roundTotalWeightPipe.transform($event.newTotal));
        this.newTrainingService.deleteSet($event.indexExercise, $event.indexSet, $event.newTotal);
    }
    getExercises() {
        return this.form.controls;
    }
    accessFormField(formField, indexExercise) {
        var _a;
        return (_a = this.form.at(indexExercise)) === null || _a === void 0 ? void 0 : _a.get(formField);
    }
    onSetFormChange($event) {
        this.setErrors = $event;
        this.changeDetectorRef.markForCheck();
    }
    showAddExerciseTooltip(currentTrainingStateLength, allExercisesLength) {
        var _a;
        if (currentTrainingStateLength >= allExercisesLength) {
            return this.translateService.stream('training.new_training.errors.no_more_exercises_available');
        }
        else {
            if (this.getExercises().length > 0) {
                if (!((_a = this.accessFormField('name', this.getExercises().length - 1)) === null || _a === void 0 ? void 0 : _a.value)) {
                    return this.translateService.stream('training.new_training.errors.pick_current_exercise');
                }
                else if (this.setErrors.includes('setNotEntered') && !this.setErrors.includes('setNotValid')) {
                    return this.translateService.stream('training.new_training.errors.set_required');
                }
                else if (this.setErrors.includes('setNotValid')) {
                    return this.translateService.stream('training.new_training.errors.set_invalid');
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)('');
                }
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)('');
            }
        }
    }
    isAddingExercisesDisabled(currentExercisesLength, allExercisesLength) {
        var _a;
        if (this.getExercises().length > 0) {
            return (currentExercisesLength >= allExercisesLength)
                || ((!((_a = this.accessFormField('name', this.getExercises().length - 1)) === null || _a === void 0 ? void 0 : _a.value)) && this.getExercises().length > 0)
                || this.setErrors.includes('setNotEntered')
                || this.setErrors.includes('setNotValid');
        }
        else {
            return false;
        }
    }
    onSubmit() {
        this.isSubmitted$$.next(true);
        if (!this.form.valid || this.setErrors.length > 0) {
            return;
        }
        this.isLoading = true;
        this.gatherAllFormData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)((apiNewTraining) => {
            var _a;
            if (this.editMode) {
                return this.newTrainingService.updateTraining(apiNewTraining, (_a = this.editData.editTraining) === null || _a === void 0 ? void 0 : _a._id);
            }
            else {
                return this.newTrainingService.addTraining(apiNewTraining);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)(() => {
            this.isLoading = false;
            this.changeDetectorRef.markForCheck();
        })).subscribe((response) => {
            this.snackBar.open(this.translateService.instant(response.Message), null, {
                duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_2__.SNACK_BAR_DURATION.GENERAL,
                panelClass: 'app__snackbar',
            });
        });
    }
    gatherAllFormData() {
        return this.newTrainingService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)((currentTrainingState) => {
            const exerciseFormData = [];
            this.getExercises().forEach((_exercise, indexExercise) => {
                var _a;
                const splittedTotal = this.accessFormField('total', indexExercise).value.split(' ');
                exerciseFormData.push({
                    exerciseName: this.accessFormField('name', indexExercise).value,
                    sets: [],
                    total: +splittedTotal[0],
                    disabledTooltip: this.accessFormField('disabledTooltip', indexExercise).value,
                    availableExercises: ((_a = currentTrainingState.exercise[indexExercise]) === null || _a === void 0 ? void 0 : _a.availableExercises) || [],
                });
                const formSetData = [];
                this.accessFormField('sets', indexExercise).value.forEach((set) => {
                    const apiSet = {
                        setNumber: +set.setNumber,
                        weightLifted: +set.weightLifted,
                        reps: +set.reps,
                    };
                    formSetData.push(apiSet);
                });
                exerciseFormData[indexExercise].sets = formSetData;
            });
            return {
                createdAt: this.editMode ? this.editData.editedDate : new Date(),
                exercise: exerciseFormData,
                bodyweight: this.bodyweight.value ? +this.bodyweight.value : null,
                editMode: this.editMode,
                userId: currentTrainingState.userId,
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.unsubscribeService));
    }
    setExerciseNameTooltip(element, indexExercise, currentTrainingState) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(_ => {
            var _a, _b, _c;
            if (currentTrainingState) {
                currentTrainingState.exercise.forEach((value, index) => {
                    var _a;
                    (_a = this.accessFormField('disabledTooltip', index)) === null || _a === void 0 ? void 0 : _a.patchValue(value.disabledTooltip);
                });
            }
            else {
                const width = (_a = element._elementRef.nativeElement.querySelector('.mat-select-value-text')) === null || _a === void 0 ? void 0 : _a.offsetWidth;
                if (width > MAX_EXERCISE_NAME_WIDTH) {
                    (_b = this.accessFormField('disabledTooltip', indexExercise ? indexExercise : 0)) === null || _b === void 0 ? void 0 : _b.patchValue(false);
                }
                else {
                    (_c = this.accessFormField('disabledTooltip', indexExercise ? indexExercise : 0)) === null || _c === void 0 ? void 0 : _c.patchValue(true);
                }
            }
            this.changeDetectorRef.markForCheck();
        }));
    }
    getAlreadyUsedExercises() {
        const alreadyUsedExercises = [];
        for (const exercise of this.getExercises()) {
            if (exercise.get('name').value) {
                alreadyUsedExercises.push(exercise.get('name').value);
            }
        }
        return alreadyUsedExercises;
    }
};
SingleExerciseComponent.ctorParameters = () => [
    { type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_10__.NewTrainingService },
    { type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__.UnsubscribeService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ChangeDetectorRef },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBar },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialog },
    { type: _pipes_training_new_training_round_total_weight_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_8__.RoundTotalWeightPipe }
];
SingleExerciseComponent.propDecorators = {
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.Input }],
    bodyweight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.Input }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.Input }],
    editMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.Input }],
    exerciseNameChoice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ViewChild, args: ['exerciseNameChoice', {
                    read: _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelect,
                },] }]
};
SingleExerciseComponent = SingleExerciseComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_32__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_28__.Component)({
        selector: 'bl-single-exercise',
        template: _single_exercise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ChangeDetectionStrategy.OnPush,
        providers: [
            (0,_helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_3__.getControlValueAccessor)(SingleExerciseComponent_1),
            _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__.UnsubscribeService,
        ],
        styles: [_single_exercise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SingleExerciseComponent);



/***/ }),

/***/ 73563:
/*!******************************************************************************!*\
  !*** ./src/app/views/shared/training/total-weight/total-weight.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalWeightComponent": () => (/* binding */ TotalWeightComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _total_weight_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./total-weight.component.html?ngResource */ 9463);
/* harmony import */ var _total_weight_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./total-weight.component.scss?ngResource */ 28149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/control-value-accessor.helper */ 2134);
var TotalWeightComponent_1;





let TotalWeightComponent = TotalWeightComponent_1 = class TotalWeightComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
    }
    writeValue(value) {
        this.value = value;
        this.changeDetectorRef.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
TotalWeightComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
];
TotalWeightComponent = TotalWeightComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'bl-total-weight',
        template: _total_weight_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        providers: [(0,_helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_2__.getControlValueAccessor)(TotalWeightComponent_1)],
        styles: [_total_weight_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TotalWeightComponent);



/***/ }),

/***/ 94758:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteTrainingActionComponent": () => (/* binding */ DeleteTrainingActionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_training_action_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-training-action.component.html?ngResource */ 89843);
/* harmony import */ var _delete_training_action_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-training-action.component.scss?ngResource */ 19543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../constants/snack-bar-duration.const */ 71891);
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/shared/shared.service */ 41571);












let DeleteTrainingActionComponent = class DeleteTrainingActionComponent {
    constructor(data, dialogRef, translateService, sharedService, snackBar, changeDetectorRef, route) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.translateService = translateService;
        this.sharedService = sharedService;
        this.snackBar = snackBar;
        this.changeDetectorRef = changeDetectorRef;
        this.route = route;
        this.isLoading = false;
    }
    deleteTraining(trainingId) {
        this.isLoading = true;
        this.data.deleteTrainingFn(trainingId, new Date(`
                ${this.getSplittedCurrentDate()[2]}-
                ${this.getSplittedCurrentDate()[1]}-
                ${this.getSplittedCurrentDate()[0]}
            `)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(_ => rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
            this.isLoading = false;
            this.changeDetectorRef.markForCheck();
        })).subscribe((response) => {
            var _a, _b, _c;
            this.sharedService.deletedTraining$$.next(response);
            this.snackBar.open(this.translateService.instant((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.Results) === null || _b === void 0 ? void 0 : _b.Message) !== null && _c !== void 0 ? _c : ''), null, {
                duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_2__.SNACK_BAR_DURATION.GENERAL,
                panelClass: 'app__snackbar',
            });
            this.dialogRef.close();
        });
    }
    getSplittedCurrentDate() {
        var _a;
        return (_a = this.route.snapshot.queryParams.startDate) === null || _a === void 0 ? void 0 : _a.split('-');
    }
};
DeleteTrainingActionComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA,] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute }
];
DeleteTrainingActionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        template: _delete_training_action_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectionStrategy.OnPush,
        styles: [_delete_training_action_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteTrainingActionComponent);



/***/ }),

/***/ 75651:
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/more-training-action/more-training-action.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreTrainingActionComponent": () => (/* binding */ MoreTrainingActionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _more_training_action_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-training-action.component.html?ngResource */ 21229);
/* harmony import */ var _more_training_action_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-training-action.component.scss?ngResource */ 62979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MoreTrainingActionComponent = class MoreTrainingActionComponent {
};
MoreTrainingActionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'bl-more-training-action',
        template: _more_training_action_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_more_training_action_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoreTrainingActionComponent);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//if using mobile device emulator: http://192.168.0.114:3000
const environment = {
    production: false,
    BACKEND: 'http://localhost:3000',
    TIMEZONE: Intl.DateTimeFormat().resolvedOptions().timeZone,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(_err => {
    //TODO
});


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		14832,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 92767:
/*!******************************************************************!*\
  !*** ./src/app/views/auth/login/login.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".wrapper {\n  width: 90%;\n  border-radius: 6px;\n  margin-top: 6rem;\n  margin-left: auto;\n  margin-right: auto;\n  background: #def2f1;\n  text-align: center;\n}\n\n.spinner {\n  margin: 80% auto;\n}\n\n.main-form {\n  padding-top: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 10px;\n}\n\n.main-form-field {\n  width: 300px;\n}\n\n.error {\n  font-size: 11px;\n  color: #c62828;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.error-custom {\n  align-self: flex-start;\n  margin-left: 20px;\n}\n\n.no_account_message {\n  font-size: 12px;\n  color: #93959e;\n  display: inline-block;\n  margin-top: 15px;\n  padding-bottom: 16px;\n}\n\n.no-account-link {\n  text-decoration: none;\n  font-weight: bold;\n  color: #93959e;\n  cursor: pointer;\n}\n\n.submit,\n.label {\n  font-family: \"Poppins\", sans-serif;\n}\n\n@media (min-width: 640px) {\n  .wrapper {\n    width: 400px;\n  }\n\n  .error-custom {\n    margin-left: 50px;\n  }\n}\n\n@media (max-width: 320px) {\n  .main-form-field {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGRlZmF1bHQtcGFsbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQ0xTO0VETVQsa0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQURKOztBQUdJO0VBQ0ksWUFBQTtBQURSOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGNDMUJPO0VEMkJQLGtDQzFCTTtBRHdCVjs7QUFLQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxjQ3ZDUTtFRHdDUixxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFGSjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ2hEUTtFRGlEUixlQUFBO0FBRko7O0FBS0E7O0VBRUksa0NDbkRNO0FEaURWOztBQU1BO0VBRUk7SUFDSSxZQUFBO0VBSk47O0VBT0U7SUFDSSxpQkFBQTtFQUpOO0FBQ0Y7O0FBUUE7RUFFSTtJQUNJLFlBQUE7RUFQTjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LWJsdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIG1hcmdpbjogODAlIGF1dG87XHJcbn1cclxuXHJcbi5tYWluLWZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICByb3ctZ2FwOiAxMHB4O1xyXG5cclxuICAgICYtZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAkZGFyay1yZWQ7XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbn1cclxuXHJcbi5lcnJvci1jdXN0b20ge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubm9fYWNjb3VudF9tZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAkYmx1ZS1ncmV5O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ubm8tYWNjb3VudC1saW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICRibHVlLWdyZXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdWJtaXQsXHJcbi5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci1jdXN0b20ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcblxyXG4gICAgLm1haW4tZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIkYXJteS1ncmVlbjogIzAwOTY4ODtcclxuJGxpZ2h0LXBlcml3aW5rbGU6ICNkZWRmZTE7XHJcbiRibHVlLWdyZXk6ICM5Mzk1OWU7XHJcbiRsaWdodC1ibHVlOiAjZGVmMmYxO1xyXG4kZGFyay1yZWQ6ICNjNjI4Mjg7XHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRlcnJvci1mb250LXNpemU6IDExcHg7XHJcbiJdfQ== */";

/***/ }),

/***/ 35431:
/*!********************************************************************!*\
  !*** ./src/app/views/auth/signup/signup.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".wrapper {\n  margin-top: 6rem;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 6px;\n  width: 90%;\n  background: #def2f1;\n}\n\n.spinner {\n  margin: 80% auto;\n}\n\n.form {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 15px;\n}\n\n.form-field {\n  width: 300px;\n}\n\n.preference-wrapper {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n\n.preference-wrapper--entry-text {\n  font-size: 14px;\n  color: #009688;\n  font-weight: 500;\n}\n\n.did-you-know {\n  font-size: 12px;\n  color: #93959e;\n}\n\n.preference-radio-button:nth-of-type(2) {\n  margin-left: 20px;\n}\n\n.error {\n  font-size: 11px;\n  color: #c62828;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.submit,\n.label,\n.preference-radio-button {\n  font-family: \"Poppins\", sans-serif;\n}\n\n@media (min-width: 640px) {\n  .wrapper {\n    width: 400px;\n  }\n}\n\n@media (max-width: 320px) {\n  .wrapper {\n    margin-bottom: 20px;\n  }\n\n  .form-field {\n    width: 250px;\n  }\n\n  .preference-wrapper {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkNOUztBREliOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBRko7O0FBSUk7RUFDSSxlQUFBO0VBQ0EsY0NyQ0s7RURzQ0wsZ0JBQUE7QUFGUjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxjQzFDUTtBRHVDWjs7QUFNQTtFQUNJLGlCQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsY0NqRE87RURrRFAsa0NDakRNO0FEOENWOztBQU1BOzs7RUFHSSxrQ0N2RE07QURvRFY7O0FBT0E7RUFFSTtJQUNJLFlBQUE7RUFMTjtBQUNGOztBQVNBO0VBRUk7SUFDSSxtQkFBQTtFQVJOOztFQVdFO0lBQ0ksWUFBQTtFQVJOOztFQVdFO0lBQ0ksWUFBQTtFQVJOO0FBQ0YiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0IDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtYmx1ZTtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiA4MCUgYXV0bztcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHJvdy1nYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnByZWZlcmVuY2Utd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHJvdy1nYXA6IDEwcHg7XHJcblxyXG4gICAgJi0tZW50cnktdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAkYXJteS1ncmVlbjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGlkLXlvdS1rbm93IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAkYmx1ZS1ncmV5O1xyXG59XHJcblxyXG4ucHJlZmVyZW5jZS1yYWRpby1idXR0b246bnRoLW9mLXR5cGUoMikge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogJGRhcmstcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG59XHJcblxyXG4uc3VibWl0LFxyXG4ubGFiZWwsXHJcbi5wcmVmZXJlbmNlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcblxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJlZmVyZW5jZS13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCIkYXJteS1ncmVlbjogIzAwOTY4ODtcclxuJGxpZ2h0LXBlcml3aW5rbGU6ICNkZWRmZTE7XHJcbiRibHVlLWdyZXk6ICM5Mzk1OWU7XHJcbiRsaWdodC1ibHVlOiAjZGVmMmYxO1xyXG4kZGFyay1yZWQ6ICNjNjI4Mjg7XHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRlcnJvci1mb250LXNpemU6IDExcHg7XHJcbiJdfQ== */";

/***/ }),

/***/ 86417:
/*!**************************************************************************!*\
  !*** ./src/app/views/navigation/header/header.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".route-active {\n  border-bottom: 2px solid white;\n}\n\n.toolbar {\n  padding-right: 0;\n  position: fixed;\n  z-index: 1;\n}\n\n.toolbar-button {\n  vertical-align: middle;\n}\n\n.title {\n  text-decoration: none;\n  font-size: 25px;\n  font-family: \"Anton\", sans-serif;\n  color: white;\n  vertical-align: middle;\n}\n\n.edit-button {\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n.edit-button:hover,\n.edit-button:active {\n  background: #def2f1;\n}\n\n.nav-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n}\n\n.nav-item--icon {\n  color: #009688;\n}\n\n.nav-item-txt {\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n  margin-right: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.nav-item--menu-items {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.nav-item--menu-items:not(:nth-child(1)) {\n  justify-content: flex-start;\n}\n\n.nav-item--menu-items:hover {\n  background: #def2f1;\n}\n\n.nav-item-txt:hover,\n.nav-item-txt:active,\n.title:hover,\n.title:active {\n  color: #def2f1;\n}\n\n.nested-items {\n  width: 150px;\n  column-gap: 10px;\n}\n\n.nested-items--text {\n  font-size: 15px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.chosenLanguage {\n  background: #009688;\n}\n\n.chosenLanguage .nested-items--text {\n  color: white;\n}\n\n.alignEn {\n  justify-content: center !important;\n}\n\n@media (min-width: 640px) {\n  .edit-button {\n    margin-right: 0;\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQURKOztBQUdJO0VBQ0ksc0JBQUE7QUFEUjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7O0VBRUksbUJDNUJTO0FEMEJiOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUk7RUFDSSxjQ2pESztBRCtDYjs7QUFLSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQ3BERTtBRGlEVjs7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NDM0RFO0FEdURWOztBQU1RO0VBQ0ksMkJBQUE7QUFKWjs7QUFPUTtFQUNJLG1CQ3BFQztBRCtEYjs7QUFVQTs7OztFQUlJLGNDN0VTO0FEc0ViOztBQVdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBUko7O0FBVUk7RUFDSSxlQUFBO0VBQ0Esa0NDckZFO0FENkVWOztBQVlBO0VBQ0ksbUJDL0ZTO0FEc0ZiOztBQVdJO0VBQ0ksWUFBQTtBQVRSOztBQWFBO0VBQ0ksa0NBQUE7QUFWSjs7QUFhQTtFQUVJO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBWE47QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdC1wYWxsZXR0ZS5zY3NzJztcclxuXHJcbi5yb3V0ZS1hY3RpdmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICYtYnV0dG9uIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZWRpdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5lZGl0LWJ1dHRvbjpob3ZlcixcclxuLmVkaXQtYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtYmx1ZTtcclxufVxyXG5cclxuLm5hdi1pdGVtcyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sdW1uLWdhcDogNXB4O1xyXG5cclxuICAgICYtLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAkYXJteS1ncmVlbjtcclxuICAgIH1cclxuXHJcbiAgICAmLXR4dCB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIH1cclxuXHJcbiAgICAmLS1tZW51LWl0ZW1zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG5cclxuICAgICAgICAmOm5vdCg6bnRoLWNoaWxkKDEpKXtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodC1ibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5hdi1pdGVtLXR4dDpob3ZlcixcclxuLm5hdi1pdGVtLXR4dDphY3RpdmUsXHJcbi50aXRsZTpob3ZlcixcclxuLnRpdGxlOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJGxpZ2h0LWJsdWU7XHJcbn1cclxuXHJcblxyXG4ubmVzdGVkLWl0ZW1zIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcblxyXG4gICAgJi0tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIH1cclxufVxyXG5cclxuLmNob3Nlbkxhbmd1YWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICRhcm15LWdyZWVuO1xyXG5cclxuICAgIC5uZXN0ZWQtaXRlbXMtLXRleHQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmFsaWduRW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcblxyXG4gICAgLmVkaXQtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIkYXJteS1ncmVlbjogIzAwOTY4ODtcclxuJGxpZ2h0LXBlcml3aW5rbGU6ICNkZWRmZTE7XHJcbiRibHVlLWdyZXk6ICM5Mzk1OWU7XHJcbiRsaWdodC1ibHVlOiAjZGVmMmYxO1xyXG4kZGFyay1yZWQ6ICNjNjI4Mjg7XHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRlcnJvci1mb250LXNpemU6IDExcHg7XHJcbiJdfQ== */";

/***/ }),

/***/ 11362:
/*!******************************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/side-nav.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".icon {\n  color: #009688;\n}\n\n.menu-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  column-gap: 10px;\n  width: 150px;\n}\n\n.menu-item--text {\n  font-size: 15px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.chosenLanguage {\n  background: #009688;\n}\n\n.chosenLanguage .sidenav__menu-item--text {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGRlZmF1bHQtcGFsbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNDSlM7QURFYjs7QUFLQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUk7RUFDSSxlQUFBO0VBQ0Esa0NDWEU7QURTVjs7QUFNQTtFQUNJLG1CQ3JCUztBRGtCYjs7QUFLSTtFQUNJLFlBQUE7QUFIUiIsImZpbGUiOiJzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9kZWZhdWx0LXBhbGxldHRlLnNjc3MnO1xyXG5cclxuXHJcbi5pY29uIHtcclxuICAgIGNvbG9yOiAkYXJteS1ncmVlbjtcclxufVxyXG5cclxuLm1lbnUtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcblxyXG4gICAgJi0tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIH1cclxufVxyXG5cclxuLmNob3Nlbkxhbmd1YWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICRhcm15LWdyZWVuO1xyXG5cclxuICAgIC5zaWRlbmF2X19tZW51LWl0ZW0tLXRleHQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIiRhcm15LWdyZWVuOiAjMDA5Njg4O1xyXG4kbGlnaHQtcGVyaXdpbmtsZTogI2RlZGZlMTtcclxuJGJsdWUtZ3JleTogIzkzOTU5ZTtcclxuJGxpZ2h0LWJsdWU6ICNkZWYyZjE7XHJcbiRkYXJrLXJlZDogI2M2MjgyODtcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGVycm9yLWZvbnQtc2l6ZTogMTFweDtcclxuIl19 */";

/***/ }),

/***/ 81337:
/*!**********************************************************************!*\
  !*** ./src/app/views/shared/dialog/dialog.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".message {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.actions {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQ0NFTTtBREhWOztBQUlBO0VBQ0kseUJBQUE7QUFESiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdC1wYWxsZXR0ZS5zY3NzJztcclxuXHJcbi5tZXNzYWdlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4iLCIkYXJteS1ncmVlbjogIzAwOTY4ODtcclxuJGxpZ2h0LXBlcml3aW5rbGU6ICNkZWRmZTE7XHJcbiRibHVlLWdyZXk6ICM5Mzk1OWU7XHJcbiRsaWdodC1ibHVlOiAjZGVmMmYxO1xyXG4kZGFyay1yZWQ6ICNjNjI4Mjg7XHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRlcnJvci1mb250LXNpemU6IDExcHg7XHJcbiJdfQ== */";

/***/ }),

/***/ 76108:
/*!****************************************************************************!*\
  !*** ./src/app/views/shared/not-found/not-found.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 60px;\n}\n.wrapper .title {\n  margin-bottom: 10px;\n}\n.wrapper .img {\n  width: 150px;\n  height: 150px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksbUJBQUE7QUFBUjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURSIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 35606:
/*!******************************************************************************!*\
  !*** ./src/app/views/shared/pagination/pagination.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".paginator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  row-gap: 5px;\n  border-radius: 4px;\n  border: 2px solid #009688;\n  margin: auto;\n  padding: 5px 0;\n  position: fixed;\n  bottom: 0;\n  width: 90%;\n}\n\n.controls-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.page-size-wrapper {\n  display: block;\n  width: 45px;\n  margin-right: 20px;\n  padding: 6px 0;\n  overflow: hidden;\n  border: none;\n  border-radius: 4px;\n  position: relative;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.page-size-wrapper:after {\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #009688;\n  position: absolute;\n  top: 40%;\n  right: 5px;\n  content: \"\";\n  z-index: 98;\n}\n\n.page-size-not-visible {\n  display: none;\n}\n\n.page-size {\n  width: 65px;\n  border: 0;\n  position: relative;\n  top: -1px;\n  z-index: 99;\n  background: none;\n  cursor: pointer;\n  font-family: \"Poppins\", sans-serif;\n  padding-left: 8px;\n}\n\n.page-size:focus-visible {\n  outline: none;\n}\n\n.arrow-wrapper {\n  display: flex;\n  column-gap: 10px;\n}\n\n.arrow-wrapper .mat-raised-button {\n  min-width: 0;\n  padding: 0 10px;\n}\n\n.previous:not([disabled]):hover,\n.previous:not([disabled]):active,\n.next:not([disabled]):hover,\n.next:not([disabled]):active,\n.first:not([disabled]):hover,\n.first:not([disabled]):active,\n.last:not([disabled]):hover,\n.last:not([disabled]):active {\n  background: #def2f1;\n}\n\n.icon {\n  color: #009688;\n}\n\n.label {\n  font-size: 15px;\n}\n\n@media (min-width: 640px) {\n  .paginator {\n    width: 850px;\n    column-gap: 20px;\n    justify-content: flex-end;\n    flex-direction: row;\n    position: relative;\n  }\n\n  .arrow-wrapper {\n    margin-right: 15px;\n  }\n\n  .controls-wrapper {\n    order: 2;\n  }\n\n  .label {\n    margin-right: auto;\n    margin-left: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZGVmYXVsdC1wYWxsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlIQUFBO0FBREo7O0FBR0k7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURSOztBQUtBO0VBQ0ksYUFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NDdkRNO0VEd0ROLGlCQUFBO0FBRko7O0FBSUk7RUFDSSxhQUFBO0FBRlI7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFLSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBSFI7O0FBT0E7Ozs7Ozs7O0VBUUksbUJDbkZTO0FEK0ViOztBQU9BO0VBQ0ksY0MxRlM7QURzRmI7O0FBT0E7RUFDSSxlQUFBO0FBSko7O0FBT0E7RUFFSTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQUxOOztFQVFFO0lBQ0ksa0JBQUE7RUFMTjs7RUFRRTtJQUNJLFFBQUE7RUFMTjs7RUFRRTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7RUFMTjtBQUNGIiwiZmlsZSI6InBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdC1wYWxsZXR0ZS5zY3NzJztcclxuXHJcbi5wYWdpbmF0b3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICByb3ctZ2FwOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYXJteS1ncmVlbjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmNvbnRyb2xzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLXNpemUtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMnB4IDJweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCA1cHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICRhcm15LWdyZWVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgei1pbmRleDogOTg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWdlLXNpemUtbm90LXZpc2libGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnBhZ2Utc2l6ZSB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cclxuICAgICY6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmFycm93LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcblxyXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJldmlvdXM6bm90KFtkaXNhYmxlZF0pOmhvdmVyLFxyXG4ucHJldmlvdXM6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSxcclxuLm5leHQ6bm90KFtkaXNhYmxlZF0pOmhvdmVyLFxyXG4ubmV4dDpub3QoW2Rpc2FibGVkXSk6YWN0aXZlLFxyXG4uZmlyc3Q6bm90KFtkaXNhYmxlZF0pOmhvdmVyLFxyXG4uZmlyc3Q6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSxcclxuLmxhc3Q6bm90KFtkaXNhYmxlZF0pOmhvdmVyLFxyXG4ubGFzdDpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRsaWdodC1ibHVlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG5cclxuICAgIC5wYWdpbmF0b3Ige1xyXG4gICAgICAgIHdpZHRoOiA4NTBweDtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93LXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udHJvbHMtd3JhcHBlciB7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */";

/***/ }),

/***/ 31082:
/*!***************************************************************************!*\
  !*** ./src/app/views/shared/training/sets/sets.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".sets {\n  width: 300px;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  column-gap: 12px;\n}\n.sets-weight-lifted, .sets-reps {\n  width: 100px;\n}\n.sets--after-first {\n  padding-top: 5px;\n}\n.sets-success {\n  color: #009688;\n  font-size: 11px;\n}\n.error {\n  color: #c62828;\n  font-size: 11px;\n}\n.delete-set-wrapper {\n  margin-top: -15px;\n}\n.add-sets {\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n.add-sets-button {\n  margin-left: 16px;\n  margin-top: 11px;\n  font-family: \"Poppins\", sans-serif;\n}\n.add-sets-button:not([disabled]):hover, .add-sets-button:not([disabled]):active {\n  color: #def2f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGRlZmF1bHQtcGFsbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBRUksWUFBQTtBQUZSO0FBS0k7RUFDSSxnQkFBQTtBQUhSO0FBTUk7RUFDSSxjQ25CSztFRG9CTCxlQUFBO0FBSlI7QUFRQTtFQUNJLGNDckJPO0VEc0JQLGVBQUE7QUFMSjtBQVFBO0VBQ0ksaUJBQUE7QUFMSjtBQVFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQU9JO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQ3RDRTtBRGlDVjtBQVFJO0VBRUksY0M3Q0s7QURzQ2IiLCJmaWxlIjoic2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9kZWZhdWx0LXBhbGxldHRlLnNjc3MnO1xyXG5cclxuLnNldHMge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMnB4O1xyXG5cclxuICAgICYtd2VpZ2h0LWxpZnRlZCxcclxuICAgICYtcmVwcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtLWFmdGVyLWZpcnN0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtc3VjY2VzcyB7XHJcbiAgICAgICAgY29sb3I6ICRhcm15LWdyZWVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiAkZGFyay1yZWQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5kZWxldGUtc2V0LXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbi5hZGQtc2V0cyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICB9XHJcblxyXG4gICAgJi1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyLFxyXG4gICAgJi1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICRsaWdodC1ibHVlO1xyXG4gICAgfVxyXG59XHJcbiIsIiRhcm15LWdyZWVuOiAjMDA5Njg4O1xyXG4kbGlnaHQtcGVyaXdpbmtsZTogI2RlZGZlMTtcclxuJGJsdWUtZ3JleTogIzkzOTU5ZTtcclxuJGxpZ2h0LWJsdWU6ICNkZWYyZjE7XHJcbiRkYXJrLXJlZDogI2M2MjgyODtcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGVycm9yLWZvbnQtc2l6ZTogMTFweDtcclxuIl19 */";

/***/ }),

/***/ 13376:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/shared/training/single-exercise/single-exercise.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".invalid-bodyweight {\n  margin-top: 5px;\n}\n\n.exercise-wrapper {\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n}\n\n.exercise-form-field {\n  width: 230px;\n}\n\n.exercise-form-field .mat-select {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.label,\n.error {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.error {\n  color: #c62828;\n  font-size: 11px;\n}\n\n.exercise-option {\n  padding: 0 !important;\n}\n\n.exercise-img {\n  position: absolute;\n  bottom: 1%;\n  left: 0%;\n  display: inline-block;\n  width: 25%;\n  height: 48px;\n}\n\n.exercise-text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  margin: 0;\n  position: absolute;\n  bottom: 4%;\n  left: 25%;\n  text-align: center;\n  width: 165px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.delete-exercise-wrapper {\n  margin-top: -20px;\n}\n\n.add-exercise {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 300px;\n  margin-top: 10px;\n  column-gap: 5px;\n}\n\n.add-exercise-button {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.add-exercise-button:not([disabled]):hover, .add-exercise-button:not([disabled]):active {\n  color: #def2f1;\n}\n\n.add-exercise .empty-training-msg {\n  display: block;\n  text-align: center;\n  color: #c62828;\n  font-size: 13px;\n  margin-top: 10px;\n  line-height: 16px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1leGVyY2lzZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZGVmYXVsdC1wYWxsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFHSTtFQUNJLGtDQ1hFO0FEVVY7O0FBS0E7O0VBRUksa0NDakJNO0FEZVY7O0FBS0E7RUFDSSxjQ3RCTztFRHVCUCxlQ3JCYztBRG1CbEI7O0FBS0E7RUFDSSxxQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGtDQ3ZDTTtFRHdDTixlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlJO0VBQ0ksa0NDakVFO0FEK0RWOztBQUtJO0VBRUksY0N4RUs7QURvRWI7O0FBT0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQzdFRztFRDhFSCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTFIiLCJmaWxlIjoic2luZ2xlLWV4ZXJjaXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4uaW52YWxpZC1ib2R5d2VpZ2h0IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmV4ZXJjaXNlLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uZXhlcmNpc2UtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcblxyXG4gICAgLm1hdC1zZWxlY3Qge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIH1cclxufVxyXG5cclxuLmxhYmVsLFxyXG4uZXJyb3Ige1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6ICRkYXJrLXJlZDtcclxuICAgIGZvbnQtc2l6ZTogJGVycm9yLWZvbnQtc2l6ZTtcclxufVxyXG5cclxuLmV4ZXJjaXNlLW9wdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGVyY2lzZS1pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxJTtcclxuICAgIGxlZnQ6MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4uZXhlcmNpc2UtdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDQlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmRlbGV0ZS1leGVyY2lzZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG4uYWRkLWV4ZXJjaXNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGNvbHVtbi1nYXA6NXB4O1xyXG5cclxuICAgICYtYnV0dG9uIHtcclxuICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICB9XHJcblxyXG4gICAgJi1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyLFxyXG4gICAgJi1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICRsaWdodC1ibHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbXB0eS10cmFpbmluZy1tc2cge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogJGRhcmstcmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbn1cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */";

/***/ }),

/***/ 28149:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/shared/training/total-weight/total-weight.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  column-gap: 10px;\n  margin: 10px 0 15px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #009688;\n}\n.wrapper .key {\n  color: #009688;\n  font-size: 15px;\n}\n.wrapper .value {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdGFsLXdlaWdodC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZGVmYXVsdC1wYWxsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQURKO0FBR0k7RUFDSSxjQ1pLO0VEYUwsZUFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0FBRlIiLCJmaWxlIjoidG90YWwtd2VpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGFybXktZ3JlZW47XHJcblxyXG4gICAgLmtleSB7XHJcbiAgICAgICAgY29sb3I6ICRhcm15LWdyZWVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAudmFsdWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */";

/***/ }),

/***/ 19543:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.scss?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "::ng-deep .delete-training-dialog .mat-dialog-container {\n  padding: 30px;\n}\n\n.title {\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n}\n\n.content {\n  margin: 0 -30px;\n  padding: 0 30px;\n}\n\n.created-at-key {\n  display: block;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.created-at-value {\n  display: block;\n  color: #009688;\n  font-weight: 600;\n}\n\n.exercises-wrapper {\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  justify-content: flex-start;\n}\n\n.exercises-wrapper .title {\n  align-self: center;\n}\n\n.exercises-wrapper .exercise-value {\n  color: #009688;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-bottom: 2px solid #def2f1;\n  align-self: center;\n}\n\n.actions {\n  padding-top: 15px;\n  justify-content: flex-end;\n}\n\n.actions .delete-btn {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS10cmFpbmluZy1hY3Rpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxhQUFBO0FBRlI7O0FBTUE7RUFDSSxrQ0NKTTtFREtOLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU9JO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKUjs7QUFPSTtFQUNJLGNBQUE7RUFDQSxjQzNCSztFRDRCTCxnQkFBQTtBQUxSOztBQVNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBTko7O0FBUUk7RUFDSSxrQkFBQTtBQU5SOztBQVVRO0VBQ0ksY0M1Q0M7RUQ2Q0QsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFSWjs7QUFhQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFWSjs7QUFZSTtFQUNJLGlCQUFBO0FBVlIiLCJmaWxlIjoiZGVsZXRlLXRyYWluaW5nLWFjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9kZWZhdWx0LXBhbGxldHRlLnNjc3MnO1xyXG5cclxuOjpuZy1kZWVwIC5kZWxldGUtdHJhaW5pbmctZGlhbG9nIHtcclxuICAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIC0zMHB4O1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG59XHJcblxyXG4uY3JlYXRlZC1hdCB7XHJcbiAgICAmLWtleSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi12YWx1ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICRhcm15LWdyZWVuO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leGVyY2lzZXMtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHJvdy1nYXA6IDVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZXhlcmNpc2Uge1xyXG4gICAgICAgICYtdmFsdWUge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgLmRlbGV0ZS1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIiRhcm15LWdyZWVuOiAjMDA5Njg4O1xyXG4kbGlnaHQtcGVyaXdpbmtsZTogI2RlZGZlMTtcclxuJGJsdWUtZ3JleTogIzkzOTU5ZTtcclxuJGxpZ2h0LWJsdWU6ICNkZWYyZjE7XHJcbiRkYXJrLXJlZDogI2M2MjgyODtcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGVycm9yLWZvbnQtc2l6ZTogMTFweDtcclxuIl19 */";

/***/ }),

/***/ 62979:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/more-training-action/more-training-action.component.scss?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3JlLXRyYWluaW5nLWFjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n    <bl-side-nav></bl-side-nav>\r\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ }),

/***/ 33327:
/*!******************************************************************!*\
  !*** ./src/app/views/auth/login/login.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>login</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n    <p>tu sam</p>\r\n</ion-content>\r\n<!-- <div class=\"wrapper\">\r\n    <form\r\n        class=\"main-form\"\r\n        [formGroup]=\"form\"\r\n        (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field\r\n            class=\"main-form-field\"\r\n            appearance=\"fill\">\r\n            <mat-label class=\"label\">\r\n                {{ 'auth.email' | translate }}\r\n            </mat-label>\r\n            <input\r\n                matInput\r\n                type=\"email\"\r\n                formControlName=\"email\"\r\n                #emailRef>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('email').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.email_required' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('email').errors?.email\r\n                    && !accessFormData('email').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.invalid_email' | translate }}\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field\r\n            class=\"main-form-field\"\r\n            appearance=\"fill\">\r\n            <mat-label class=\"label\">\r\n                {{ 'auth.password' | translate }}\r\n            </mat-label>\r\n            <input\r\n                #inputPassword\r\n                matInput\r\n                type=\"password\"\r\n                formControlName=\"password\"\r\n                [errorStateMatcher]=\"formErrorStateMatcher\">\r\n            <mat-error\r\n                *ngIf=\"accessFormData('password').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_required' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('password').errors?.minlength\r\n                    || accessFormData('password').errors?.maxlength\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_length' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"form.errors?.passwordFitsEmail\r\n                    && !accessFormData('password').errors?.required\r\n                    && !accessFormData('password').errors?.minlength\r\n                    && !accessFormData('password').errors?.maxlength\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_wrong_email' | translate }}\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <button\r\n            mat-raised-button\r\n            class=\"submit\"\r\n            type=\"submit\"\r\n            color=\"primary\"\r\n            [disabled]=\"!form.valid || isLoading\"\r\n            [class.button-spinner]=\"isLoading\">\r\n            {{ 'auth.login' | translate }}\r\n        </button>\r\n    </form>\r\n    <span class=\"no_account_message\">\r\n        {{ 'auth.no_account_message' | translate }}\r\n        <a\r\n            class=\"no-account-link\"\r\n            routerLink=\"/auth/signup\">\r\n            {{ 'auth.signup_link' | translate }}\r\n        </a>\r\n        {{ 'common.here' | translate }}\r\n    </span>\r\n</div> -->\r\n";

/***/ }),

/***/ 36927:
/*!********************************************************************!*\
  !*** ./src/app/views/auth/signup/signup.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"wrapper\">\r\n    <mat-spinner\r\n        *ngIf=\"isLoading\"\r\n        class=\"spinner\"\r\n        [diameter]=\"spinnerSize\"></mat-spinner>\r\n    <form\r\n        *ngIf=\"!isLoading && form\"\r\n        class=\"form\"\r\n        [formGroup]=\"form\"\r\n        (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"preference-wrapper\">\r\n            <span class=\"preference-wrapper--entry-text\">\r\n                {{ 'auth.pick_language' | translate }}\r\n            </span>\r\n            <mat-radio-group\r\n                formControlName=\"language\">\r\n                <mat-radio-button\r\n                    class=\"preference-radio-button\"\r\n                    value=\"en\">\r\n                    {{ 'languages.english' | translate }}\r\n                </mat-radio-button>\r\n                <mat-radio-button\r\n                    class=\"preference-radio-button\"\r\n                    value=\"hr\">\r\n                    {{ 'languages.croatian' | translate }}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n            <span\r\n                *ngIf=\"accessFormData('language').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'preferences.errors.language_required' | translate }}\r\n            </span>\r\n            <span class=\"preference-wrapper--entry-text\">\r\n                {{ 'auth.pick_weight_format' | translate }}\r\n            </span>\r\n            <mat-radio-group\r\n                formControlName=\"weightFormat\">\r\n                <mat-radio-button\r\n                    class=\"preference-radio-button\"\r\n                    value=\"kg\">\r\n                    {{ 'common.kilograms' | translate }}\r\n                </mat-radio-button>\r\n                <mat-radio-button\r\n                    class=\"preference-radio-button\"\r\n                    value=\"lbs\">\r\n                    {{ 'common.pounds' | translate }}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n            <span\r\n                *ngIf=\"accessFormData('weightFormat').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.weight_format_required' | translate }}\r\n            </span>\r\n            <span\r\n                class=\"did-you-know\"\r\n                matTooltipClass=\"tooltip\"\r\n                [matTooltip]=\"'common.change_preference_registration' | translate\">\r\n                {{ 'common.did_you_know' | translate }}\r\n            </span>\r\n        </div>\r\n        <mat-form-field\r\n            class=\"form-field\"\r\n            appearance=\"fill\">\r\n            <mat-label class=\"label\">{{ 'auth.email' | translate }}</mat-label>\r\n            <input\r\n                matInput\r\n                type=\"email\"\r\n                formControlName=\"email\">\r\n            <mat-error\r\n                *ngIf=\"accessFormData('email').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.email_required' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('email').errors?.email\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.invalid_email' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('email').errors?.availableEmail\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.email_already_registered' | translate }}\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field\r\n            class=\"form-field\"\r\n            appearance=\"fill\">\r\n            <mat-label class=\"label\">\r\n                {{ 'auth.password' | translate }}\r\n            </mat-label>\r\n            <input\r\n                matInput\r\n                type=\"password\"\r\n                formControlName=\"password\"\r\n                #inputPassword>\r\n            <mat-hint>{{ inputPassword.value?.length || 0 }} / 6</mat-hint>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('password').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_required' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('password').errors?.minlength ||\r\n                    accessFormData('password').errors?.maxlength\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_length' | translate }}\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field\r\n            class=\"form-field\"\r\n            appearance=\"fill\">\r\n            <mat-label class=\"label\">\r\n                {{ 'auth.confirm_password' | translate }}\r\n            </mat-label>\r\n            <input\r\n                matInput\r\n                type=\"password\"\r\n                formControlName=\"confirmPassword\"\r\n                #inputConfirmPassword\r\n                [errorStateMatcher]=\"formErrorStateMatcher\">\r\n            <mat-hint>{{ inputConfirmPassword.value?.length || 0 }} / 6</mat-hint>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('confirmPassword').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.confirm_password_required' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('confirmPassword').errors?.minlength ||\r\n                    accessFormData('confirmPassword').errors?.maxlength\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_length' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"form.errors?.equalPass\r\n                    && !accessFormData('confirmPassword').errors?.minlength\r\n                    && !accessFormData('confirmPassword').errors?.maxlength\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.equal_passwords' | translate }}\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <button\r\n            mat-raised-button\r\n            class=\"submit\"\r\n            type=\"submit\"\r\n            color=\"primary\"\r\n            [class.button-spinner]=\"isLoading\"\r\n            [disabled]=\"isLoading\">\r\n            {{ 'auth.signup' | translate }}\r\n        </button>\r\n    </form>\r\n</div>\r\n";

/***/ }),

/***/ 35206:
/*!**************************************************************************!*\
  !*** ./src/app/views/navigation/header/header.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-toolbar\r\n    class=\"toolbar\"\r\n    color=\"primary\">\r\n    <div fxHide.gt-xs>\r\n        <button\r\n            mat-icon-button\r\n            class=\"toolbar-button\"\r\n            (click)=\"onToggle()\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div>\r\n        <a class=\"title\">\r\n            {{ 'navigation.title' | translate }}\r\n        </a>\r\n    </div>\r\n    <ng-container *ngIf=\"isAuthenticated$ | async\">\r\n        <button\r\n            *ngIf=\"isEditing$ | async\"\r\n            mat-raised-button\r\n            class=\"edit-button\"\r\n            type=\"button\"\r\n            (click)=\"goToPastTraining()\">\r\n            {{ 'navigation.buttons.edit_go_back' | translate }}\r\n        </button>\r\n    </ng-container>\r\n    <div\r\n        fxFlex\r\n        fxLayout\r\n        fxLayoutAlign=\"flex-end\"\r\n        fxHide.xs>\r\n        <ul class=\"nav-items\">\r\n            <li\r\n                *ngIf=\"!(isAuthenticated$ | async)\"\r\n                class=\"nav-item\">\r\n                <mat-icon class=\"icon\">login</mat-icon>\r\n                <a\r\n                    class=\"nav-item-txt\"\r\n                    routerLink=\"/auth/login\"\r\n                    [routerLinkActive]=\"'route-active'\">\r\n                    {{ 'navigation.login' | translate }}\r\n                </a>\r\n            </li>\r\n            <li\r\n                *ngIf=\"!(isAuthenticated$ | async)\"\r\n                class=\"nav-item\">\r\n                <mat-icon class=\"icon\">app_registration</mat-icon>\r\n                <a\r\n                    class=\"nav-item-txt\"\r\n                    routerLink=\"/auth/signup\"\r\n                    [routerLinkActive]=\"'route-active'\">\r\n                    {{ 'navigation.signup' | translate }}\r\n                </a>\r\n            </li>\r\n            <li\r\n                *ngIf=\"isAuthenticated$ | async\"\r\n                class=\"nav-item\">\r\n                <mat-icon class=\"icon\">fitness_center</mat-icon>\r\n                <a\r\n                    class=\"nav-item-txt\"\r\n                    routerLink=\"/training/new-training\"\r\n                    [routerLinkActive]=\"'route-active'\">\r\n                    {{ 'navigation.new_training' | translate }}\r\n                </a>\r\n            </li>\r\n            <li\r\n                *ngIf=\"isAuthenticated$ | async\"\r\n                class=\"nav-item\">\r\n                <mat-icon class=\"icon\">history</mat-icon>\r\n                <a\r\n                    class=\"nav-item-txt\"\r\n                    routerLink=\"/training/past-trainings\"\r\n                    [routerLinkActive]=\"'route-active'\"\r\n                    [routerLinkActiveOptions]=\"myMatchOptions\"\r\n                    [queryParams]=\"{ startDate: StartDate, endDate: EndDate }\">\r\n                    {{ 'navigation.past_trainings' | translate }}\r\n                </a>\r\n            </li>\r\n            <ng-container *ngIf=\"(loggedUserData$ | async) as userData\">\r\n                <li\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    class=\"nav-item\">\r\n                    <button\r\n                        mat-button\r\n                        [matMenuTriggerFor]=\"main\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n                    <mat-menu #main=\"matMenu\">\r\n                        <button\r\n                            class=\"nav-item--menu-items\"\r\n                            mat-menu-item\r\n                            [matMenuTriggerFor]=\"languages\">\r\n                            <mat-icon class=\"nav-item--icon\">language</mat-icon>\r\n                            <span>{{ 'navigation.language' | translate }}</span>\r\n                        </button>\r\n                        <button\r\n                            class=\"nav-item--menu-items\"\r\n                            mat-menu-item\r\n                            (click)=\"onLogout()\">\r\n                            <mat-icon class=\"nav-item--icon\">logout</mat-icon>\r\n                            <span>{{ 'navigation.logout' | translate }}</span>\r\n                        </button>\r\n                    </mat-menu>\r\n                    <mat-menu #languages=\"matMenu\">\r\n                        <button\r\n                            class=\"nav-item--menu-items nested-items\"\r\n                            [class.chosenLanguage]=\"userData?.Preferences?.language === 'hr'\"\r\n                            mat-menu-item\r\n                            (click)=\"changeLanguage('hr')\"\r\n                            [disabled]=\"userData?.Preferences?.language === 'hr'\">\r\n                            <img\r\n                                src=\"../../../../assets/images/flags/croatia.png\"\r\n                                height=\"40\"\r\n                                width=\"40\">\r\n                            <span class=\"nested-items--text\">\r\n                                {{ 'languages.croatian' | translate }}\r\n                            </span>\r\n                        </button>\r\n                        <button\r\n                            class=\"nav-item--menu-items nested-items\"\r\n                            [class.chosenLanguage]=\"userData?.Preferences?.language === 'en'\"\r\n                            [class.alignEn]=\"userData?.Preferences?.language === 'hr'\"\r\n                            mat-menu-item\r\n                            (click)=\"changeLanguage('en')\"\r\n                            [disabled]=\"userData?.Preferences?.language === 'en'\">\r\n                            <img\r\n                                src=\"../../../../assets/images/flags/united-kingdom.png\"\r\n                                height=\"24\"\r\n                                width=\"40\">\r\n                            <span class=\"nested-items--text\">\r\n                                {{ 'languages.english' | translate }}\r\n                            </span>\r\n                        </button>\r\n                    </mat-menu>\r\n                </li>\r\n            </ng-container>\r\n        </ul>\r\n    </div>\r\n</mat-toolbar>\r\n";

/***/ }),

/***/ 93763:
/*!******************************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/side-nav.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--TODO: ion-split-pane?-->\r\n<ion-menu\r\n    side=\"start\"\r\n    content-id=\"main\">\r\n    <ion-header>\r\n        <ion-toolbar color=\"primary\">\r\n            <ion-title>{{ 'navigation.title' | translate }}</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"!(isAuthenticated$ | async)\"\r\n                    routerLink=\"/auth/login\"\r\n                    (click)=\"onCloseSideNav()\">\r\n                    <ion-icon\r\n                        name=\"log-in-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.login' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"!(isAuthenticated$ | async)\"\r\n                    routerLink=\"/auth/signup\"\r\n                    (click)=\"onCloseSideNav()\">\r\n                    <ion-icon\r\n                        name=\"arrow-forward-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.signup' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    routerLink=\"/training/new-training\"\r\n                    (click)=\"onCloseSideNav()\">\r\n                    <ion-icon\r\n                        name=\"barbell-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.new_training' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    (click)=\"goToPastTrainings(); onCloseSideNav();\">\r\n                    <ion-icon\r\n                        name=\"analytics-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.past_trainings' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item>\r\n                    <ng-container *ngIf=\"(loggedUserData$ | async) as userData\">\r\n                        <a\r\n                            *ngIf=\"isAuthenticated$ | async\"\r\n                            [matMenuTriggerFor]=\"languages\">\r\n                            <ion-icon\r\n                                name=\"language-sharp\"\r\n                                class=\"icon\"></ion-icon>\r\n                            <span class=\"caption\">\r\n                                {{ 'navigation.language' | translate }}\r\n                            </span>\r\n                            <mat-menu #languages=\"matMenu\">\r\n                                <button\r\n                                    mat-menu-item\r\n                                    class=\"menu-item\"\r\n                                    [class.chosenLanguage]=\"userData?.Preferences?.language === 'hr'\"\r\n                                    [disabled]=\"userData?.Preferences?.language === 'hr'\"\r\n                                    (click)=\"changeLanguage('hr')\">\r\n                                    <img\r\n                                        src=\"../../../../assets/images/flags/croatia.png\"\r\n                                        height=\"40\"\r\n                                        width=\"40\">\r\n                                    <span class=\"menu-item--text\">\r\n                                        {{ 'languages.croatian' | translate }}\r\n                                    </span>\r\n                                </button>\r\n                                <button\r\n                                    mat-menu-item\r\n                                    class=\"menu-item\"\r\n                                    [class.chosenLanguage]=\"userData?.Preferences?.language === 'en'\"\r\n                                    [disabled]=\"userData?.Preferences?.language === 'en'\"\r\n                                    (click)=\"changeLanguage('en')\">\r\n                                    <img\r\n                                        src=\"../../../../assets/images/flags/united-kingdom.png\"\r\n                                        height=\"24\"\r\n                                        width=\"40\">\r\n                                    <span class=\"menu-item--text\">\r\n                                        {{ 'languages.english' | translate }}\r\n                                    </span>\r\n                                </button>\r\n                            </mat-menu>\r\n                        </a>\r\n                    </ng-container>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    (click)=\"onCloseSideNav(); onLogout();\">\r\n                    <ion-icon\r\n                        name=\"log-out-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.logout' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 79798:
/*!**********************************************************************!*\
  !*** ./src/app/views/shared/dialog/dialog.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<div\r\n    *ngIf=\"data.message\"\r\n    mat-dialog-title>\r\n    <p class=\"message\">{{ data.message }}</p>\r\n</div>\r\n\r\n<div\r\n    *ngIf=\"(data.deleteExercise.message$ | async) as message\"\r\n    mat-dialog-title>\r\n    <p class=\"message\">{{ message }}</p>\r\n</div>\r\n<div\r\n    *ngIf=\"data.deleteExercise\"\r\n    mat-dialog-content>\r\n    <p class=\"mat-subheading-1 message\">\r\n        {{ 'training.new_training.exercise_name' | translate }}\r\n        <strong>{{ data.deleteExercise.exerciseName | translate }}</strong>\r\n    </p>\r\n</div>\r\n<mat-dialog-actions class=\"actions\">\r\n    <button\r\n        mat-raised-button\r\n        type=\"button\"\r\n        [color]=\"data.isError ? 'primary' : ''\"\r\n        [mat-dialog-close]=\"false\">\r\n        {{ 'common.actions.close' | translate }}\r\n    </button>\r\n    <button\r\n        *ngIf=\"data.deleteExercise\"\r\n        mat-raised-button\r\n        type=\"button\"\r\n        color=\"primary\"\r\n        [mat-dialog-close]=\"true\">\r\n        {{ 'common.actions.delete' | translate }}\r\n    </button>\r\n</mat-dialog-actions>\r\n";

/***/ }),

/***/ 69490:
/*!****************************************************************************!*\
  !*** ./src/app/views/shared/not-found/not-found.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"wrapper\">\r\n    <h2 class=\"title\">\r\n        {{ 'common.page_not_found' | translate }}\r\n    </h2>\r\n    <span *ngIf=\"!(isAuth$ | async)\">\r\n        {{ 'common.errors.not_authenticated' | translate }}\r\n    </span>\r\n    <img\r\n        src=\"../../../../assets/images/error-404.png\"\r\n        class=\"img\">\r\n</div>\r\n";

/***/ }),

/***/ 86580:
/*!******************************************************************************!*\
  !*** ./src/app/views/shared/pagination/pagination.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"paginator\">\r\n    <div class=\"controls-wrapper\">\r\n        <div\r\n            class=\"page-size-wrapper\"\r\n            [class.page-size-not-visible]=\"!isSearch\">\r\n            <select\r\n                class=\"page-size\"\r\n                [(ngModel)]=\"size\"\r\n                (change)=\"loadPage()\">\r\n                <option\r\n                    *ngFor=\"let size of pageSizeOptions\"\r\n                    [value]=\"size\">\r\n                    {{ size }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div class=\"arrow-wrapper\">\r\n            <button\r\n                *ngIf=\"isPreviousPage\"\r\n                mat-raised-button\r\n                class=\"first\"\r\n                type=\"button\"\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"setPageTooltip(isSearch, 'First') | async\"\r\n                [matTooltipClass]=\"setPageTooltipClass(isSearch, 'First')\"\r\n                (click)=\"loadPage(\r\n                    'First',\r\n                    undefined,\r\n                    data?.Value?.Results?.EarliestTrainingDate)\">\r\n                <mat-icon class=\"icon\">first_page</mat-icon>\r\n            </button>\r\n            <div\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"setPageTooltip(isSearch, 'Previous') | async\"\r\n                [matTooltipClass]=\"setPageTooltipClass(isSearch, 'Previous')\">\r\n                <button\r\n                    mat-raised-button\r\n                    type=\"button\"\r\n                    class=\"previous\"\r\n                    [disabled]=\"data.IsLoading || !isPreviousPage\"\r\n                    (click)=\"loadPage(\r\n                        'Previous',\r\n                        data.Value?.Results?.Dates)\">\r\n                    <mat-icon class=\"icon\">navigate_before</mat-icon>\r\n                </button>\r\n            </div>\r\n            <div\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"setPageTooltip(isSearch, 'Next') | async\"\r\n                [matTooltipClass]=\"setPageTooltipClass(isSearch, 'Next')\">\r\n                <button\r\n                    mat-raised-button\r\n                    type=\"button\"\r\n                    class=\"next\"\r\n                    [disabled]=\"data.IsLoading || !isNextPage\"\r\n                    (click)=\"loadPage(\r\n                        'Next',\r\n                        data.Value?.Results?.Dates)\">\r\n                    <mat-icon class=\"icon\">navigate_next</mat-icon>\r\n                </button>\r\n            </div>\r\n            <button\r\n                *ngIf=\"isNextPage\"\r\n                mat-raised-button\r\n                class=\"last\"\r\n                type=\"button\"\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"setPageTooltip(isSearch, 'Last') | async\"\r\n                [matTooltipClass]=\"setPageTooltipClass(isSearch, 'Last')\"\r\n                (click)=\"loadPage('Last', undefined, undefined, data?.Value?.TotalPages)\">\r\n                <mat-icon class=\"icon\">last_page</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div\r\n        *ngIf=\"data?.Value?.TotalPages\"\r\n        class=\"label\"\r\n        [innerHTML]=\"setPageText(data.Value.TotalPages) | async\"></div>\r\n</div>\r\n";

/***/ }),

/***/ 34122:
/*!***************************************************************************!*\
  !*** ./src/app/views/shared/training/sets/sets.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form\r\n    [formGroup]=\"$any(form)\"\r\n    autocomplete=\"off\">\r\n    <ng-container *ngFor=\"let set of getSets(); let j = index\">\r\n        <ng-container [formGroupName]=\"j\">\r\n            <div\r\n                class=\"sets\"\r\n                [class.sets--after-first]=\"j > 0\">\r\n                <mat-form-field\r\n                    appearance=\"outline\"\r\n                    class=\"sets-weight-lifted\">\r\n                    <mat-label class=\"label\">\r\n                        {{ 'training.new_training.weight_lifted' | translate }}\r\n                    </mat-label>\r\n                    <input\r\n                        matInput\r\n                        type=\"text\"\r\n                        formControlName=\"weightLifted\"\r\n                        [errorStateMatcher]=\"formErrorStateMatcher\"\r\n                        (input)=\"onChangeSets(j)\"\r\n                        (blur)=\"onTouched()\">\r\n                    <mat-error\r\n                        *ngIf=\"(set.errors?.weightLiftedRequired && ((isExerciseFormSubmitted$ | async) || exerciseNameControl?.value))\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.weight_lifted_required' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"set.errors?.setNotEntered\r\n                            && (isExerciseFormSubmitted$ | async)\r\n                            && !set.errors?.weightLiftedRequired\r\n                            && !set.errors?.repsRequired\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.set_required' | translate }}\r\n                    </mat-error>\r\n                    <mat-hint\r\n                        *ngIf=\"accessFormField('weightLifted', j).value\r\n                            && accessFormField('weightLifted', j).valid\r\n                            && accessFormField('reps', j).value\r\n                            && accessFormField('reps', j).valid\r\n                            && !set.errors?.weightLiftedRequired\r\n                            && !set.errors?.repsRequired\r\n                            && !editMode\"\r\n                        class=\"sets-success\">\r\n                        {{ 'training.new_training.set_saved' | translate }}\r\n                    </mat-hint>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('weightLifted', j).errors?.onlyNumbers\r\n                            && !accessFormField('weightLifted', j).errors?.min\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.only_numbers' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('weightLifted', j).errors?.min\r\n                            && !accessFormField('weightLifted', j).errors?.onlyNumbers\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.weight_lifted_min' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('weightLifted', j).errors?.max\r\n                            && !accessFormField('weightLifted', j).errors?.onlyNumbers\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.weight_lifted_max' | translate }}\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field\r\n                    appearance=\"outline\"\r\n                    class=\"sets-reps\">\r\n                    <mat-label class=\"label\">\r\n                        {{ 'training.new_training.reps_performed' | translate }}\r\n                    </mat-label>\r\n                    <input\r\n                        matInput\r\n                        type=\"text\"\r\n                        formControlName=\"reps\"\r\n                        [errorStateMatcher]=\"formErrorStateMatcher\"\r\n                        (input)=\"onChangeSets(j)\"\r\n                        (blur)=\"onTouched()\">\r\n                    <mat-error\r\n                        *ngIf=\"(set.errors?.repsRequired && ((isExerciseFormSubmitted$ | async) || exerciseNameControl?.value))\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.reps_required' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('reps', j).errors?.pattern\r\n                            && !accessFormField('reps', j).errors?.onlyNumbers\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.only_positive' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('reps', j).errors?.min\r\n                            && !accessFormField('reps', j).errors?.onlyNumbers\r\n                            && !accessFormField('reps', j).errors?.pattern\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.reps_min' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('reps', j).errors?.max\r\n                            && !accessFormField('reps', j).errors?.onlyNumbers\r\n                            && !accessFormField('reps', j).errors?.pattern\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.reps_max' | translate }}\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <div\r\n                    class=\"delete-set-wrapper\"\r\n                    matTooltipPosition=\"above\"\r\n                    [matTooltip]=\"showDeleteSetTooltip(j) | async\"\r\n                    [matTooltipClass]=\"j > 0 ? 'tooltip' : 'tooltip-error'\">\r\n                    <button\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        class=\"button-delete-sets\"\r\n                        [disabled]=\"j === 0 || isLoading\"\r\n                        (click)=\"deleteSet(j)\">\r\n                        <mat-icon class=\"icon-delete-sets\">\r\n                            delete\r\n                        </mat-icon>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n</form>\r\n<div class=\"add-sets\">\r\n    <div\r\n        matTooltipClass=\"tooltip\"\r\n        [matTooltip]=\"showAddSetTooltip(form.errors?.setNotFilled) | async\">\r\n        <button\r\n            type=\"button\"\r\n            color=\"primary\"\r\n            mat-raised-button\r\n            class=\"add-sets-button\"\r\n            [disabled]=\"!exerciseNameControl.value || form.errors?.setNotFilled\"\r\n            (click)=\"addSet()\">\r\n            {{ 'training.new_training.buttons.add_set' | translate }}\r\n        </button>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 91068:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/shared/training/single-exercise/single-exercise.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form\r\n    [formGroup]=\"$any(form)\"\r\n    (ngSubmit)=\"onSubmit()\">\r\n    <ng-container\r\n        *ngFor=\"let group of getExercises(); let i = index\">\r\n        <ng-container [formGroupName]=\"i\">\r\n            <div class=\"exercise-wrapper\">\r\n                <mat-form-field\r\n                    appearance=\"outline\"\r\n                    class=\"exercise-form-field\"\r\n                    matTooltipClass=\"tooltip\"\r\n                    matTooltipPosition=\"above\"\r\n                    [matTooltipDisabled]=\"accessFormField('disabledTooltip', i).value\"\r\n                    [matTooltip]=\"accessFormField('name', i).value | translate\">\r\n                    <mat-label class=\"label\">\r\n                        {{ 'training.new_training.pick_exercise' | translate }}\r\n                    </mat-label>\r\n                    <mat-select\r\n                        disableRipple\r\n                        #exerciseNameChoice\r\n                        formControlName=\"name\"\r\n                        [errorStateMatcher]=\"setErrorMatcher(i)\"\r\n                        (selectionChange)=\"onExerciseNameChange($event, i, exerciseNameChoice)\">\r\n                        <mat-optgroup\r\n                            *ngFor=\"let exercise of exercises$ | newTraining:i:exerciseChanged | async\"\r\n                            [label]=\"exercise.primaryMuscleGroup\">\r\n                            <mat-option\r\n                                class=\"exercise-option\"\r\n                                [value]=\"exercise.name\">\r\n                                <img\r\n                                    class=\"exercise-img\"\r\n                                    [src]=\"exercise.imageUrl\">\r\n                                <p class=\"exercise-text\">\r\n                                    {{ exercise.name | translate }}\r\n                                </p>\r\n                            </mat-option>\r\n                        </mat-optgroup>\r\n                    </mat-select>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('name', i).errors?.required\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.exercise_name_required' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"form.errors?.duplicateExerciseName && form.errors?.duplicateExerciseName === accessFormField('name', i).value\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.exercise_name_duplicate' | translate }}\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <div\r\n                    class=\"delete-exercise-wrapper\"\r\n                    matTooltipPosition=\"above\"\r\n                    matTooltipClass=\"tooltip\"\r\n                    [matTooltip]=\"'training.new_training.buttons.delete_exercise' | translate\">\r\n                    <button\r\n                        mat-raised-button\r\n                        type=\"button\"\r\n                        color=\"warn\"\r\n                        (click)=\"deleteExercise(i, accessFormField('name', i).value)\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <bl-sets\r\n                formControlName=\"sets\"\r\n                [isExerciseFormSubmitted$]=\"isSubmitted$$.asObservable()\"\r\n                [exerciseStateChanged$]=\"exerciseStateChanged$$.asObservable()\"\r\n                [exerciseNameControl]=\"accessFormField('name', i)\"\r\n                [indexExercise]=\"i\"\r\n                [isLoading]=\"isLoading\"\r\n                [editMode]=\"editMode\"\r\n                (setAdded)=\"onChangeSets($event)\"\r\n                (setDeleted)=\"deleteSet($event)\"\r\n                (formStateChanged)=\"onSetFormChange($event)\"></bl-sets>\r\n            <bl-total-weight formControlName=\"total\"></bl-total-weight>\r\n        </ng-container>\r\n    </ng-container>\r\n    <div\r\n        *ngIf=\"(currentExerciseState$ | async) as currentExerciseState\"\r\n        class=\"add-exercise\">\r\n        <div\r\n            matTooltipClass=\"tooltip-error\"\r\n            [matTooltip]=\"showAddExerciseTooltip(\r\n                currentExerciseState[0].length,\r\n                currentExerciseState[1].length) | async\">\r\n            <button\r\n                mat-raised-button\r\n                type=\"button\"\r\n                color=\"primary\"\r\n                class=\"add-exercise-button\"\r\n                [disabled]=\"isAddingExercisesDisabled(\r\n                    currentExerciseState[0].length,\r\n                    currentExerciseState[1].length) || isLoading\"\r\n                (click)=\"addExercise($event)\">\r\n                {{ 'training.new_training.buttons.add_exercise' | translate }}\r\n            </button>\r\n        </div>\r\n        <div\r\n            matTooltipClass=\"tooltip-error\"\r\n            matTooltipPosition=\"below\"\r\n            [matTooltip]=\"currentExerciseState[0]?.length === 0 ? ('training.new_training.errors.at_least_one_exercise' | translate) : ''\">\r\n            <button\r\n                mat-raised-button\r\n                class=\"finish-training\"\r\n                type=\"submit\"\r\n                color=\"primary\"\r\n                matTooltipClass=\"tooltip\"\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"currentExerciseState[0]?.length > 0 ? ('training.new_training.finish_training' | translate) : ''\"\r\n                [class.button-spinner]=\"isLoading\"\r\n                [disabled]=\"currentExerciseState[0]?.length === 0 || isLoading\">\r\n                <mat-icon class=\"finish-training-icon\">done</mat-icon>\r\n            </button>\r\n        </div>\r\n        <span\r\n            *ngIf=\"form?.errors?.emptyTraining && (isSubmitted$$ | async) && currentExerciseState[0]?.length === 0\"\r\n            class=\"empty-training-msg\">\r\n            {{ 'training.new_training.errors.at_least_one_exercise' | translate }}\r\n        </span>\r\n    </div>\r\n</form>\r\n";

/***/ }),

/***/ 9463:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/shared/training/total-weight/total-weight.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<span class=\"wrapper\">\r\n    <strong class=\"key\">{{ 'training.new_training.total' | translate }}</strong>\r\n    <span class=\"value\">{{ value }}</span>\r\n</span>\r\n";

/***/ }),

/***/ 89843:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.html?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"(data.training$ | async) as training\">\r\n    <div>\r\n        <span\r\n            mat-dialog-title\r\n            class=\"title\">\r\n            {{ data.title$ | async }}\r\n        </span>\r\n    </div>\r\n    <mat-dialog-content class=\"content\">\r\n        <span class=\"created-at-key\">\r\n            {{ 'training.past_trainings.created_at' | translate }}\r\n            <span class=\"created-at-value\">\r\n                {{ data.dateCreated$ | async }}\r\n                <span class=\"dot\"></span>\r\n                <span>{{ ' ' + (data.timeCreated$ | async) }}</span>\r\n            </span>\r\n        </span>\r\n        <div\r\n            class=\"exercises-wrapper\">\r\n            <span class=\"title\">{{ 'common.exercises' | translate }}</span>\r\n            <strong\r\n                *ngFor=\"let exercise of training.exercise | slice:0:4\"\r\n                class=\"exercise-value\"\r\n                matTooltipClass=\"tooltip\"\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"training.exercise.length > 4 ? (training | showAllExercises | async) : ''\">\r\n                {{ exercise.exerciseName | translate }}\r\n            </strong>\r\n        </div>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions class=\"actions\">\r\n        <button\r\n            mat-raised-button\r\n            mat-dialog-close\r\n            [disabled]=\"isLoading\">\r\n            {{ 'common.actions.close' | translate }}\r\n        </button>\r\n        <button\r\n            mat-raised-button\r\n            class=\"delete-btn\"\r\n            color=\"primary\"\r\n            [class.button-spinner]=\"isLoading\"\r\n            [disabled]=\"isLoading\"\r\n            (click)=\"deleteTraining(training._id)\">\r\n            {{ 'common.actions.delete' | translate }}\r\n        </button>\r\n    </mat-dialog-actions>\r\n</ng-container>\r\n";

/***/ }),

/***/ 21229:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/more-training-action/more-training-action.component.html?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-menu></mat-menu>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map