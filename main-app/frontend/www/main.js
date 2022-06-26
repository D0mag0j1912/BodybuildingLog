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
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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
    var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 83970)).then(module => module.AuthModule);
    });

    return function loadChildren() {
      return _ref.apply(this, arguments);
    };
  }()
}, {
  path: 'training',
  loadChildren: function () {
    var _ref2 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "src_app_modules_training_training_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/training/training.module */ 89952)).then(module => module.TrainingModule);
    });

    return function loadChildren() {
      return _ref2.apply(this, arguments);
    };
  }(),
  canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/store/shared/shared-store.service */ 81102);
/* harmony import */ var _services_store_training_training_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/store/training/training-store.service */ 70788);








let AppComponent = class AppComponent {
    constructor(trainingStoreService, sharedStoreService, translateService) {
        this.trainingStoreService = trainingStoreService;
        this.sharedStoreService = sharedStoreService;
        this.translateService = translateService;
    }
    ngOnInit() {
        this.trainingStoreService.keepTrainingState()
            .subscribe();
        this.sharedStoreService.keepQueryParams()
            .subscribe();
        this.translateService.setDefaultLang('en');
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_store_training_training_store_service__WEBPACK_IMPORTED_MODULE_4__.TrainingStoreService },
    { type: _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_3__.SharedStoreService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'bl-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectionStrategy.OnPush,
        providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_2__.UnsubscribeService],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32202);
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/angular */ 45395);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 78189);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/error.interceptor */ 92379);
/* harmony import */ var _modules_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/navigation.module */ 33146);
/* harmony import */ var _services_errors_sentry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/errors/sentry.service */ 30207);

















(0,_sentry_angular__WEBPACK_IMPORTED_MODULE_7__.init)({
    dsn: 'https://b4903b17554c4e40bbada176e50e4719@o997027.ingest.sentry.io/5955490',
});
function httpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http);
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _modules_navigation_module__WEBPACK_IMPORTED_MODULE_5__.NavigationModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateLoader,
                    useFactory: httpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient],
                },
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(),
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
                useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptor,
                multi: true,
            }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
                useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptor,
                multi: true,
            }, {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ErrorHandler,
                useClass: _services_errors_sentry_service__WEBPACK_IMPORTED_MODULE_6__.SentryService,
            },
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy,
            },
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient,
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 80760:
/*!**************************************************************!*\
  !*** ./src/app/constants/shared/create-initial-set.const.ts ***!
  \**************************************************************/
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

/***/ 84049:
/*!*****************************************************************!*\
  !*** ./src/app/constants/shared/default-weight-format.const.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_WEIGHT_FORMAT": () => (/* binding */ DEFAULT_WEIGHT_FORMAT)
/* harmony export */ });
const DEFAULT_WEIGHT_FORMAT = 'kg';


/***/ }),

/***/ 93988:
/*!***************************************************************!*\
  !*** ./src/app/constants/shared/ion-focus-durations.const.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonFocusDurations": () => (/* binding */ IonFocusDurations)
/* harmony export */ });
var IonFocusDurations;
(function (IonFocusDurations) {
    IonFocusDurations[IonFocusDurations["LOGIN"] = 350] = "LOGIN";
    IonFocusDurations[IonFocusDurations["SIGNUP"] = 500] = "SIGNUP";
})(IonFocusDurations || (IonFocusDurations = {}));


/***/ }),

/***/ 75938:
/*!************************************************************!*\
  !*** ./src/app/constants/shared/message-duration.const.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGE_DURATION": () => (/* binding */ MESSAGE_DURATION)
/* harmony export */ });
const MESSAGE_DURATION = Object.freeze({
    GENERAL: 3000,
    ERROR: 5000,
});


/***/ }),

/***/ 69396:
/*!*****************************************************!*\
  !*** ./src/app/constants/shared/paginator.const.ts ***!
  \*****************************************************/
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

/***/ 25675:
/*!**********************************************************!*\
  !*** ./src/app/constants/training/new-training.const.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_TRAINING_EDIT": () => (/* binding */ EMPTY_TRAINING_EDIT),
/* harmony export */   "EMPTY_TRAINING": () => (/* binding */ EMPTY_TRAINING),
/* harmony export */   "createEmptyExercise": () => (/* binding */ createEmptyExercise)
/* harmony export */ });
const EMPTY_TRAINING_EDIT = {
    editedDate: null,
    editTraining: null,
};
const EMPTY_TRAINING = {
    exercises: [],
    _id: '',
    bodyweight: null,
    editMode: false,
    userId: null,
};
const createEmptyExercise = (exercises) => ({
    exerciseData: { name: null },
    sets: [],
    total: null,
    disabledTooltip: true,
    availableExercises: [...exercises],
});


/***/ }),

/***/ 31757:
/*!************************************************************************!*\
  !*** ./src/app/constants/training/past-trainings-date-format.const.ts ***!
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

/***/ 81543:
/*!*************************************************************!*\
  !*** ./src/app/directives/autofocus/autofocus.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutofocusDirective": () => (/* binding */ AutofocusDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 93819);



let AutofocusDirective = class AutofocusDirective {
    constructor(ionInput) {
        this.ionInput = ionInput;
        this.duration = 350;
        this.firstTime = true;
    }
    ngAfterViewInit() {
        if (this.firstTime) {
            setTimeout(() => {
                var _a;
                (_a = this.ionInput) === null || _a === void 0 ? void 0 : _a.setFocus();
                this.firstTime = false;
            }, this.duration);
        }
    }
};
AutofocusDirective.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonInput }
];
AutofocusDirective.propDecorators = {
    duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['duration',] }]
};
AutofocusDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[ionFocus]' })
], AutofocusDirective);



/***/ }),

/***/ 82638:
/*!**********************************************************!*\
  !*** ./src/app/directives/autofocus/autofocus.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutofocusModule": () => (/* binding */ AutofocusModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autofocus.directive */ 81543);



let AutofocusModule = class AutofocusModule {
};
AutofocusModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_autofocus_directive__WEBPACK_IMPORTED_MODULE_0__.AutofocusDirective],
        exports: [_autofocus_directive__WEBPACK_IMPORTED_MODULE_0__.AutofocusDirective],
    })
], AutofocusModule);



/***/ }),

/***/ 92343:
/*!***************************************************************!*\
  !*** ./src/app/directives/pagination/pagination.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationDirective": () => (/* binding */ PaginationDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let PaginationDirective = class PaginationDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.renderer2.addClass(this.elementRef.nativeElement, 'bl-pagination');
    }
};
PaginationDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
PaginationDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({ selector: 'bl-pagination' })
], PaginationDirective);



/***/ }),

/***/ 78163:
/*!*************************************************************************!*\
  !*** ./src/app/directives/skeleton-loader/skeleton-loader.directive.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonLoaderDirective": () => (/* binding */ SkeletonLoaderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _views_shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/shared/skeleton-loader/skeleton-loader.component */ 62901);



let SkeletonLoaderDirective = class SkeletonLoaderDirective {
    constructor(_template, _viewContainerRef) {
        this._template = _template;
        this._viewContainerRef = _viewContainerRef;
        this.isLoading = false;
        this.size = 1;
    }
    ngOnChanges(changes) {
        var _a;
        if (changes === null || changes === void 0 ? void 0 : changes.isLoading) {
            this._viewContainerRef.clear();
            if ((_a = changes === null || changes === void 0 ? void 0 : changes.isLoading) === null || _a === void 0 ? void 0 : _a.currentValue) {
                Array.from({ length: this.size }).forEach(_ => {
                    const ref = this._viewContainerRef.createComponent(_views_shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_0__.SkeletonLoaderComponent);
                    Object.assign(ref.instance, {
                        width: this.width,
                        height: this.height,
                        borderRadius: this.borderRadius,
                        margin: this.margin,
                        className: this.className,
                    });
                });
            }
            else {
                this._viewContainerRef.createEmbeddedView(this._template);
            }
        }
    }
};
SkeletonLoaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef }
];
SkeletonLoaderDirective.propDecorators = {
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['skeleton',] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['skeletonRepeat',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['skeletonWidth',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['skeletonHeight',] }],
    borderRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['skeletonBorderRadius',] }],
    margin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['skeletonMargin',] }],
    className: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['skeletonClassName',] }]
};
SkeletonLoaderDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[skeleton]' })
], SkeletonLoaderDirective);



/***/ }),

/***/ 13944:
/*!**********************************************************************!*\
  !*** ./src/app/directives/skeleton-loader/skeleton-loader.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonLoaderModule": () => (/* binding */ SkeletonLoaderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _skeleton_loader_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton-loader.directive */ 78163);



let SkeletonLoaderModule = class SkeletonLoaderModule {
};
SkeletonLoaderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_skeleton_loader_directive__WEBPACK_IMPORTED_MODULE_0__.SkeletonLoaderDirective],
        exports: [_skeleton_loader_directive__WEBPACK_IMPORTED_MODULE_0__.SkeletonLoaderDirective],
    })
], SkeletonLoaderModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _services_shared_preferences_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/shared/preferences.service */ 68476);
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store/auth/auth-store.service */ 88458);
/* harmony import */ var _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store/shared/preferences-store.service */ 97276);









let AuthGuard = class AuthGuard {
    constructor(preferencesService, preferencesStoreService, authStoreService, translateService, router) {
        this.preferencesService = preferencesService;
        this.preferencesStoreService = preferencesStoreService;
        this.authStoreService = authStoreService;
        this.translateService = translateService;
        this.router = router;
    }
    canLoad(_route) {
        return this.authStoreService.isAuth$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(isAuth => {
            if (!isAuth) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.authStoreService.autoLogin());
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(isAuth);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(isAuth => {
            if (!isAuth) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(isAuth);
            }
            else {
                return this.authStoreService.loggedUser$
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(loggedUser => {
                    if (loggedUser) {
                        return this.preferencesService.getPreferences(loggedUser._id)
                            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(preferences => this.preferencesStoreService.emitPreferences(preferences)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(preferences => this.translateService.use(preferences.languageCode || 'en')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(isAuth)));
                    }
                    else {
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(isAuth);
                    }
                }));
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(isAuth => {
            if (!isAuth) {
                return this.router.createUrlTree(['/auth/login']);
            }
            return true;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_shared_preferences_service__WEBPACK_IMPORTED_MODULE_0__.PreferencesService },
    { type: _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_2__.PreferencesStoreService },
    { type: _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_1__.AuthStoreService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)()
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
    throw new Error('Didn\'t expect to get here');
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 69377);

function mapDateInterval(response) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return Object.assign(Object.assign({}, response), { Value: Object.assign(Object.assign({}, response.Value), { Results: Object.assign(Object.assign({}, response.Value.Results), { Dates: {
                    StartDate: ((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.Results) === null || _b === void 0 ? void 0 : _b.Dates) === null || _c === void 0 ? void 0 : _c.StartDate) ? (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date((_f = (_e = (_d = response.Value) === null || _d === void 0 ? void 0 : _d.Results) === null || _e === void 0 ? void 0 : _e.Dates) === null || _f === void 0 ? void 0 : _f.StartDate)) : undefined,
                    EndDate: ((_j = (_h = (_g = response === null || response === void 0 ? void 0 : response.Value) === null || _g === void 0 ? void 0 : _g.Results) === null || _h === void 0 ? void 0 : _h.Dates) === null || _j === void 0 ? void 0 : _j.EndDate) ? (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date((_m = (_l = (_k = response.Value) === null || _k === void 0 ? void 0 : _k.Results) === null || _l === void 0 ? void 0 : _l.Dates) === null || _m === void 0 ? void 0 : _m.EndDate)) : undefined,
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
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store/auth/auth-store.service */ 88458);



let AuthInterceptor = class AuthInterceptor {
    constructor(authStoreService) {
        this.authStoreService = authStoreService;
    }
    intercept(request, next) {
        const token = this.authStoreService.getToken();
        const authRequest = request.clone({ headers: request.headers.set('authorization', 'Bearer ' + token) });
        return next.handle(authRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_0__.AuthStoreService }
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/minimal */ 50594);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/shared/message-duration.const */ 75938);
/* harmony import */ var _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shared/toast-controller.service */ 76467);









let ErrorInterceptor = class ErrorInterceptor {
    constructor(toastControllerService, translateService) {
        this.toastControllerService = toastControllerService;
        this.translateService = translateService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            let errorMessage;
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
                (0,_sentry_minimal__WEBPACK_IMPORTED_MODULE_4__.captureException)(error);
                //TODO: fix for Ionic
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
            void this.toastControllerService.displayToast({
                message: errorMessage,
                duration: _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_DURATION.ERROR,
                color: 'danger',
            });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_1__.ToastControllerService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
], ErrorInterceptor);



/***/ }),

/***/ 66756:
/*!**********************************************************!*\
  !*** ./src/app/models/common/interfaces/common.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageItems": () => (/* binding */ StorageItems)
/* harmony export */ });
var StorageItems;
(function (StorageItems) {
    StorageItems["TRAINING_STATE"] = "trainingState";
    StorageItems["USER_DATA"] = "userData";
    StorageItems["QUERY_PARAMS"] = "queryParams";
})(StorageItems || (StorageItems = {}));


/***/ }),

/***/ 78033:
/*!*********************************************************!*\
  !*** ./src/app/models/common/types/modal-roles.type.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogRoles": () => (/* binding */ DialogRoles)
/* harmony export */ });
var DialogRoles;
(function (DialogRoles) {
    DialogRoles["CANCEL"] = "CANCEL";
    DialogRoles["DELETE_EXERCISE"] = "DELETE_EXERCISE";
    DialogRoles["DELETE_TRAINING"] = "DELETE_TRAINING";
    DialogRoles["SELECT_DATE"] = "SELECT_DATE";
    DialogRoles["REORDER_EXERCISES"] = "REORDER_EXERCISES";
})(DialogRoles || (DialogRoles = {}));


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
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/auth/login/login.component */ 2783);
/* harmony import */ var _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/auth/signup/signup.component */ 30770);





const routes = [
    {
        path: 'login',
        component: _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    {
        path: 'signup',
        component: _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent,
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
/* harmony import */ var _services_api_auth_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api/auth/login.service */ 81211);
/* harmony import */ var _services_api_auth_signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/auth/signup.service */ 96935);
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/auth/login/login.component */ 2783);
/* harmony import */ var _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/auth/signup/signup.component */ 30770);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.module */ 95601);
/* harmony import */ var _directives_autofocus_autofocus_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/autofocus/autofocus.module */ 82638);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ 89988);














const COMPONENTS = [
    _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent,
    _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
];
const MY_IMPORTS = [
    _shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
    _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__.AuthRoutingModule,
    _directives_autofocus_autofocus_module__WEBPACK_IMPORTED_MODULE_5__.AutofocusModule,
];
const SERVICES = [
    _services_api_auth_signup_service__WEBPACK_IMPORTED_MODULE_1__.SignupService,
    _services_api_auth_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _views_navigation_side_nav_languages_languages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/navigation/side-nav/languages/languages.component */ 47746);
/* harmony import */ var _views_navigation_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/navigation/side-nav/side-nav.component */ 82207);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.module */ 83970);









const COMPONENTS = [
    _views_navigation_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__.SideNavComponent,
    _views_navigation_side_nav_languages_languages_component__WEBPACK_IMPORTED_MODULE_0__.LanguagesComponent,
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
];
const IMPORTS = [_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule];
let NavigationModule = class NavigationModule {
};
NavigationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/pipes.module */ 35503);
/* harmony import */ var _pipes_training_new_training_round_total_weight_round_total_weight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/training/new-training/round-total-weight/round-total-weight.module */ 38409);
/* harmony import */ var _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module */ 31515);
/* harmony import */ var _services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared/not-found-resolver.service */ 94183);
/* harmony import */ var _services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api/training/delete-training-action.service */ 64490);
/* harmony import */ var _views_shared_delete_exercise_dialog_delete_exercise_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/shared/delete-exercise-dialog/delete-exercise-dialog.component */ 89288);
/* harmony import */ var _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/shared/not-found/not-found.component */ 50326);
/* harmony import */ var _views_shared_training_sets_sets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/shared/training/sets/sets.component */ 4436);
/* harmony import */ var _views_shared_training_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/shared/training/single-exercise/single-exercise.component */ 72458);
/* harmony import */ var _views_shared_training_total_weight_total_weight_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/shared/training/total-weight/total-weight.component */ 73563);
/* harmony import */ var _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/shared/training/training-actions/delete-training-action/delete-training-action.component */ 94758);
/* harmony import */ var _views_shared_training_training_actions_more_training_action_more_training_action_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/shared/training/training-actions/more-training-action/more-training-action.component */ 75651);
/* harmony import */ var _views_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/shared/pagination/pagination.component */ 89320);
/* harmony import */ var _directives_pagination_pagination_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../directives/pagination/pagination.directive */ 92343);
/* harmony import */ var _views_shared_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/shared/datetime-picker/datetime-picker.component */ 10185);
/* harmony import */ var _views_shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/shared/skeleton-loader/skeleton-loader.component */ 62901);
/* harmony import */ var _directives_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../directives/skeleton-loader/skeleton-loader.module */ 13944);























const DIRECTIVES = [_directives_pagination_pagination_directive__WEBPACK_IMPORTED_MODULE_13__.PaginationDirective];
const COMPONENTS = [
    _views_shared_delete_exercise_dialog_delete_exercise_dialog_component__WEBPACK_IMPORTED_MODULE_5__.DeleteExerciseDialogComponent,
    _views_shared_training_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_8__.SingleExerciseComponent,
    _views_shared_training_sets_sets_component__WEBPACK_IMPORTED_MODULE_7__.SetsComponent,
    _views_shared_training_total_weight_total_weight_component__WEBPACK_IMPORTED_MODULE_9__.TotalWeightComponent,
    _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent,
    _views_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__.PaginationComponent,
    _views_shared_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_14__.DateTimePickerComponent,
    _views_shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_15__.SkeletonLoaderComponent,
];
const ACTION_COMPONENTS = [
    _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_10__.DeleteTrainingActionComponent,
    _views_shared_training_training_actions_more_training_action_more_training_action_component__WEBPACK_IMPORTED_MODULE_11__.MoreTrainingActionComponent,
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicModule,
];
const IMPORTS = [
    _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_2__.ShowAllExercisesModule,
    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
    _pipes_training_new_training_round_total_weight_round_total_weight_module__WEBPACK_IMPORTED_MODULE_1__.RoundTotalWeightModule,
    _directives_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_16__.SkeletonLoaderModule,
];
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.NgModule)({
        declarations: [
            ...COMPONENTS,
            ...DIRECTIVES,
            ...ACTION_COMPONENTS,
        ],
        imports: [
            ...EXTERNAL_IMPORTS,
            ...IMPORTS,
        ],
        exports: [...COMPONENTS],
        entryComponents: [
            _views_shared_delete_exercise_dialog_delete_exercise_dialog_component__WEBPACK_IMPORTED_MODULE_5__.DeleteExerciseDialogComponent,
            _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_10__.DeleteTrainingActionComponent,
            _views_shared_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_14__.DateTimePickerComponent,
        ],
        providers: [
            _services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_3__.NotFoundResolverService,
            _services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_4__.DeleteTrainingActionService,
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
/* harmony import */ var _services_store_training_training_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/store/training/training-store.service */ 70788);




let NewTrainingPipe = class NewTrainingPipe {
    constructor(trainingStoreService) {
        this.trainingStoreService = trainingStoreService;
    }
    transform(_value, index, _exerciseChanged) {
        return this.trainingStoreService.currentTrainingChanged$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((training) => { var _a, _b; return (_b = (_a = training.exercises[index]) === null || _a === void 0 ? void 0 : _a.availableExercises) !== null && _b !== void 0 ? _b : []; }));
    }
};
NewTrainingPipe.ctorParameters = () => [
    { type: _services_store_training_training_store_service__WEBPACK_IMPORTED_MODULE_0__.TrainingStoreService }
];
NewTrainingPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Pipe)({ name: 'newTraining' })
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
/* harmony import */ var _constants_shared_default_weight_format_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants/shared/default-weight-format.const */ 84049);



let RoundTotalWeightPipe = class RoundTotalWeightPipe {
    transform(totalWeight) {
        return totalWeight ? `${(Math.round(totalWeight * 100) / 100).toString()} ${_constants_shared_default_weight_format_const__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_WEIGHT_FORMAT}` : `0 ${_constants_shared_default_weight_format_const__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_WEIGHT_FORMAT}`;
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
                icon: 'trash-sharp',
                tooltip: 'training.past_trainings.buttons.delete_training',
            },
            'more': {
                icon: 'ellipsis-vertical-sharp',
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
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'mapTrainingItemActions' })
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
        return this.translateService.stream((_b = (_a = training.exercises) === null || _a === void 0 ? void 0 : _a.map((x) => x === null || x === void 0 ? void 0 : x.exerciseData.name)) !== null && _b !== void 0 ? _b : []).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((value) => {
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
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Pipe)({ name: 'showAllExercises' })
], ShowAllExercisesPipe);



/***/ }),

/***/ 40279:
/*!***************************************************!*\
  !*** ./src/app/services/api/auth/auth.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _shared_preferences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/preferences.service */ 68476);
/* harmony import */ var _store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/auth/auth-store.service */ 88458);
/* harmony import */ var _store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/shared/preferences-store.service */ 97276);











let AuthService = class AuthService {
  constructor(http, router, authStoreService, preferencesService, preferencesStoreService) {
    this.http = http;
    this.router = router;
    this.authStoreService = authStoreService;
    this.preferencesService = preferencesService;
    this.preferencesStoreService = preferencesStoreService;
  }

  signup(language, weightFormat, email, password, confirmPassword) {
    const signupData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    const preferences = {
      languageCode: language,
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
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/auth/login', authData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)( /*#__PURE__*/function () {
      var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        if (response.Token) {
          _this.authStoreService.emitLoggedUser(response);

          _this.authStoreService.emitIsAuth(true);

          _this.authStoreService.setToken(response.Token);

          const expiresInDuration = response.ExpiresIn;

          _this.authStoreService.setAuthTimer(expiresInDuration);

          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          yield _this.authStoreService.saveLS(_this.authStoreService.getToken(), expirationDate, response._id);
          yield _this.router.navigate(['/training/new-training']);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(response => this.preferencesService.getPreferences(response._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(preferences => this.preferencesStoreService.emitPreferences(preferences)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(response)))));
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_3__.AuthStoreService
}, {
  type: _shared_preferences_service__WEBPACK_IMPORTED_MODULE_2__.PreferencesService
}, {
  type: _store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_4__.PreferencesStoreService
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 81211:
/*!****************************************************!*\
  !*** ./src/app/services/api/auth/login.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);




let LoginService = class LoginService {
    constructor(_http) {
        this._http = _http;
    }
    passwordFitsEmail(email, password) {
        const params = `?email=${email}&password=${password}`;
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND + '/auth/check-pass' + params);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], LoginService);



/***/ }),

/***/ 96935:
/*!*****************************************************!*\
  !*** ./src/app/services/api/auth/signup.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupService": () => (/* binding */ SignupService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);




let SignupService = class SignupService {
    constructor(_http) {
        this._http = _http;
    }
    getEmails(email) {
        const params = `?email=${email}`;
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND + '/auth/get-all-emails' + params);
    }
};
SignupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
SignupService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], SignupService);



/***/ }),

/***/ 64490:
/*!*************************************************************************!*\
  !*** ./src/app/services/api/training/delete-training-action.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteTrainingActionService": () => (/* binding */ DeleteTrainingActionService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-past-trainings-dates.helper */ 35717);
/* harmony import */ var _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../views/shared/training/training-actions/delete-training-action/delete-training-action.component */ 94758);












let DeleteTrainingActionService = class DeleteTrainingActionService {
  constructor(http, modalController, datePipe, translateService) {
    this.http = http;
    this.modalController = modalController;
    this.datePipe = datePipe;
    this.translateService = translateService;
  }

  perform(data) {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.openDeleteTrainingDialog(data);
    })();
  }

  openDeleteTrainingDialog(data) {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_3__.DeleteTrainingActionComponent,
        componentProps: {
          title$: _this2.translateService.stream('training.past_trainings.actions.delete_training'),
          dateCreated$: _this2.translateService.stream(`weekdays.${data.weekDays[data.dayIndex]}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(value => `${value} (${_this2.datePipe.transform(data.training.trainingDate, 'dd.MM.yyyy')})`)),
          timeCreated$: (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(data.timeCreated),
          training$: (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(data.training)
        }
      });
      yield modal.present();
    })();
  }

  deleteTraining(trainingId, deleteTrainingMeta) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams().set('meta', JSON.stringify(deleteTrainingMeta));
    return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + `/training/delete-training/${trainingId}`, {
      params: params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => (0,_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_2__.mapDateInterval)(response)));
  }

};

DeleteTrainingActionService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
}];

DeleteTrainingActionService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)()], DeleteTrainingActionService);


/***/ }),

/***/ 9935:
/*!***********************************************************!*\
  !*** ./src/app/services/api/training/training.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingService": () => (/* binding */ TrainingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/common/interfaces/common.model */ 66756);
/* harmony import */ var _store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/auth/auth-store.service */ 88458);
/* harmony import */ var _store_training_training_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/training/training-store.service */ 70788);










let TrainingService = class TrainingService {
    constructor(http, authStoreService, trainingStoreService) {
        this.http = http;
        this.authStoreService = authStoreService;
        this.trainingStoreService = trainingStoreService;
    }
    getExerciseByName(exerciseName) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams().set('exerciseName', exerciseName);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/training/get_exercise', { params: params });
    }
    getExercises() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/training/get-exercises')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((response) => {
            this.trainingStoreService.emitAllExercises(response);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.StorageItems.TRAINING_STATE }))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(storedData => {
                if (!storedData || !(storedData === null || storedData === void 0 ? void 0 : storedData.value)) {
                    return this.authStoreService.loggedUser$
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((authResponseData) => this.trainingStoreService.updateTrainingState(undefined, response.Value, true, authResponseData._id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(response)));
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(response);
            }));
        }));
    }
    addTraining(trainingData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/training/handle-training', { trainingData });
    }
    updateTraining(trainingData, trainingId) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + `/training/handle-training/${trainingId}`, { updatedTrainingData: trainingData });
    }
};
TrainingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_3__.AuthStoreService },
    { type: _store_training_training_store_service__WEBPACK_IMPORTED_MODULE_4__.TrainingStoreService }
];
TrainingService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({ providedIn: 'root' })
], TrainingService);



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

/***/ 84786:
/*!***************************************************************!*\
  !*** ./src/app/services/shared/loading-controller.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingControllerService": () => (/* binding */ LoadingControllerService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





let LoadingControllerService = class LoadingControllerService {
  constructor(translateService, loadingController) {
    this.translateService = translateService;
    this.loadingController = loadingController;
  }

  displayLoader(options) {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        message: _this.translateService.instant(options.message),
        keyboardClose: true
      });
      yield loading.present();
    })();
  }

  dismissLoader() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.loadingController.dismiss();
    })();
  }

};

LoadingControllerService.ctorParameters = () => [{
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
}];

LoadingControllerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], LoadingControllerService);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/common/interfaces/common.model */ 66756);





let NotFoundResolverService = class NotFoundResolverService {
    resolve(_route, _state) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key: _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__.StorageItems.TRAINING_STATE }));
    }
};
NotFoundResolverService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], NotFoundResolverService);



/***/ }),

/***/ 68476:
/*!********************************************************!*\
  !*** ./src/app/services/shared/preferences.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesService": () => (/* binding */ PreferencesService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/shared/message-duration.const */ 75938);
/* harmony import */ var _store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/shared/preferences-store.service */ 97276);
/* harmony import */ var _toast_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast-controller.service */ 76467);










let PreferencesService = class PreferencesService {
  constructor(http, translateService, toastControllerService, preferencesStoreService) {
    this.http = http;
    this.translateService = translateService;
    this.toastControllerService = toastControllerService;
    this.preferencesStoreService = preferencesStoreService;
  }

  getPreferences(userId) {
    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + `/preferences/${userId}`);
  }

  setPreferences(preferences, preferenceChanged) {
    var _this = this;

    const apiPreferences = {
      languageCode: preferences.languageCode,
      weightFormat: preferences.weightFormat,
      showByPeriod: preferences.showByPeriod
    };
    return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + `/preferences/${preferences.userId}`, {
      preferences: apiPreferences,
      preferenceChanged: preferenceChanged
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(response => this.translateService.use(preferences.languageCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)( /*#__PURE__*/function () {
      var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
        _this.preferencesStoreService.emitPreferences(preferences);

        if (response.Message) {
          yield _this.toastControllerService.displayToast({
            message: _this.translateService.instant(response.Message),
            duration: _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_DURATION.GENERAL,
            color: 'primary'
          });
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()))));
  }

};

PreferencesService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
}, {
  type: _toast_controller_service__WEBPACK_IMPORTED_MODULE_4__.ToastControllerService
}, {
  type: _store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_3__.PreferencesStoreService
}];

PreferencesService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
  providedIn: 'root'
})], PreferencesService);


/***/ }),

/***/ 76467:
/*!*************************************************************!*\
  !*** ./src/app/services/shared/toast-controller.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastControllerService": () => (/* binding */ ToastControllerService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





let ToastControllerService = class ToastControllerService {
  constructor(translateService, toastController) {
    this.translateService = translateService;
    this.toastController = toastController;
  }

  displayToast(options) {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: _this.translateService.instant(options === null || options === void 0 ? void 0 : options.message),
        duration: options.duration,
        color: options.color
      });
      yield toast.present();
    })();
  }

};

ToastControllerService.ctorParameters = () => [{
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
}];

ToastControllerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], ToastControllerService);


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

/***/ 88458:
/*!***********************************************************!*\
  !*** ./src/app/services/store/auth/auth-store.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthStoreService": () => (/* binding */ AuthStoreService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/common/interfaces/common.model */ 66756);








let AuthStoreService = class AuthStoreService {
  constructor(router) {
    this.router = router;
    this._loggedUser$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.loggedUser$ = this._loggedUser$$.asObservable();
    this._isAuth$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.isAuth$ = this._isAuth$$.asObservable();
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
  }

  getLoggedUser() {
    return Object.assign({}, this._loggedUser$$.getValue());
  }

  emitLoggedUser(loggedUser) {
    this._loggedUser$$.next(loggedUser);
  }

  getIsAuth() {
    return this._isAuth$$.getValue();
  }

  emitIsAuth(isAuth) {
    this._isAuth$$.next(isAuth);
  }

  autoLogin() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({
      key: _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.StorageItems.USER_DATA
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(storedData => {
      if (!storedData || !(storedData === null || storedData === void 0 ? void 0 : storedData.value)) {
        return false;
      }

      const userData = JSON.parse(storedData.value);

      if (!userData.Token || !userData.ExpirationDate) {
        return false;
      }

      const authData = {
        Token: userData.Token,
        ExpirationDate: new Date(userData.ExpirationDate),
        _id: userData._id
      };
      const now = new Date();
      const expiresIn = authData.ExpirationDate.getTime() - now.getTime();

      if (expiresIn > 0) {
        this.token = userData.Token;
        this.setAuthTimer(expiresIn / 1000);
        this.emitIsAuth(true);
        this.emitLoggedUser(authData);
        return true;
      } else {
        return false;
      }
    }));
  }

  logout() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.token = null;

      _this.emitIsAuth(false);

      clearTimeout(_this.tokenTimer);
      yield _this.clearData();
      yield _this.router.navigate(['/auth/login']);
    })();
  }

  setAuthTimer(duration) {
    var _this2 = this;

    this.tokenTimer = setTimeout( /*#__PURE__*/(0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.logout();
    }), duration * 1000);
  }

  saveLS(token, expirationDate, userId) {
    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userData = {
        Token: token,
        ExpirationDate: expirationDate,
        _id: userId
      };
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
        key: _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.StorageItems.USER_DATA,
        value: JSON.stringify(userData)
      });
    })();
  }

  clearData() {
    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
        key: _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.StorageItems.USER_DATA
      });
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
        key: _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.StorageItems.TRAINING_STATE
      });
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
        key: _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__.StorageItems.QUERY_PARAMS
      });
    })();
  }

};

AuthStoreService.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

AuthStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], AuthStoreService);


/***/ }),

/***/ 97276:
/*!********************************************************************!*\
  !*** ./src/app/services/store/shared/preferences-store.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesStoreService": () => (/* binding */ PreferencesStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);



let PreferencesStoreService = class PreferencesStoreService {
    constructor() {
        this._preferencesChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.preferencesChanged$ = this._preferencesChanged$$.asObservable();
    }
    emitPreferences(preferences) {
        this._preferencesChanged$$.next(preferences);
    }
    getPreferences() {
        return Object.assign({}, this._preferencesChanged$$.getValue());
    }
};
PreferencesStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], PreferencesStoreService);



/***/ }),

/***/ 81102:
/*!***************************************************************!*\
  !*** ./src/app/services/store/shared/shared-store.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedStoreService": () => (/* binding */ SharedStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/common/interfaces/common.model */ 66756);






let SharedStoreService = class SharedStoreService {
    constructor() {
        this._pastTrainingsQueryParams$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.pastTrainingsQueryParams$ = this._pastTrainingsQueryParams$$.asObservable();
        this._editingTraining$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.editingTraining$ = this._editingTraining$$.asObservable();
        this.deletedTraining$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.dayClicked$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    completeDayClicked() {
        this.dayClicked$$.complete();
    }
    emitDayClicked(dayClicked) {
        this.dayClicked$$.next(dayClicked);
    }
    getDayClickedDate() {
        return this.dayClicked$$.getValue();
    }
    emitEditingTraining(editMode) {
        this._editingTraining$$.next(editMode);
    }
    keepQueryParams() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__.StorageItems.QUERY_PARAMS }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(storedData => {
            if (!storedData || !(storedData === null || storedData === void 0 ? void 0 : storedData.value)) {
                return false;
            }
            const queryParams = JSON.parse(storedData.value);
            this._pastTrainingsQueryParams$$.next(queryParams);
            return true;
        }));
    }
    emitPastTrainingsQueryParams(params) {
        this._pastTrainingsQueryParams$$.next(params);
    }
};
SharedStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({ providedIn: 'root' })
], SharedStoreService);



/***/ }),

/***/ 70788:
/*!*******************************************************************!*\
  !*** ./src/app/services/store/training/training-store.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingStoreService": () => (/* binding */ TrainingStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/common/interfaces/common.model */ 66756);
/* harmony import */ var _constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/training/new-training.const */ 25675);







let TrainingStoreService = class TrainingStoreService {
    constructor() {
        this._allExercisesChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.allExercisesChanged$ = this._allExercisesChanged$$.asObservable();
        this._currentTrainingChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(_constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_2__.EMPTY_TRAINING);
        this.currentTrainingChanged$ = this._currentTrainingChanged$$.asObservable();
    }
    emitAllExercises(exercises) {
        this._allExercisesChanged$$.next(exercises);
    }
    getCurrentTrainingState() {
        return Object.assign({}, this._currentTrainingChanged$$.getValue());
    }
    addBodyweightToStorage(value) {
        const updatedTraining = Object.assign(Object.assign({}, this._currentTrainingChanged$$.getValue()), { bodyweight: +value });
        this.saveTrainingData(Object.assign({}, updatedTraining))
            .subscribe();
    }
    deleteSet(indexExercise, indexSet, newTotal) {
        const updatedTraining = Object.assign({}, this._currentTrainingChanged$$.getValue());
        updatedTraining.exercises[indexExercise].sets.splice(indexSet, 1);
        updatedTraining.exercises[indexExercise].sets.map((set) => {
            if (set.setNumber > (indexSet + 1)) {
                set.setNumber--;
            }
        });
        updatedTraining.exercises[indexExercise].total = newTotal;
        this.saveTrainingData(Object.assign({}, updatedTraining))
            .subscribe();
    }
    pushToAvailableExercises(currentTrainingState, toBeAddedExercise) {
        const updatedTraining = Object.assign({}, currentTrainingState);
        updatedTraining.exercises.map((exercise) => {
            const isDeletedExerciseInAE = exercise.availableExercises.find((exercise) => exercise._id === toBeAddedExercise[0]._id);
            if (!isDeletedExerciseInAE) {
                exercise.availableExercises.push(toBeAddedExercise[0]);
                exercise.availableExercises.sort(this.compare);
            }
        });
        return this.saveTrainingData(Object.assign({}, updatedTraining));
    }
    deleteExercise(currentTrainingState, deletedExerciseName, indexExercise) {
        let updatedExercises = [...currentTrainingState.exercises];
        let updatedTraining;
        if (deletedExerciseName) {
            return this.allExercisesChanged$
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(value => value.Value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => {
                updatedExercises = updatedExercises.filter((exercise) => exercise.exerciseData.name !== deletedExerciseName);
                updatedTraining = Object.assign(Object.assign({}, currentTrainingState), { exercises: updatedExercises });
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((allExercises) => [
                updatedTraining,
                allExercises.filter(exercise => exercise.name === deletedExerciseName),
            ]));
        }
        else {
            updatedExercises = updatedExercises.filter((_exercise, index) => index !== indexExercise);
            updatedTraining = Object.assign(Object.assign({}, currentTrainingState), { exercises: updatedExercises });
            const response = [updatedTraining, []];
            return this.saveTrainingData(updatedTraining)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(response)));
        }
    }
    setsChanged(trainingData) {
        const updatedTraining = Object.assign({}, this._currentTrainingChanged$$.getValue());
        const indexOfChangedExercise = updatedTraining.exercises.findIndex((singleExercise) => singleExercise.exerciseData.name === trainingData.exerciseName);
        const indexFoundSet = updatedTraining.exercises[indexOfChangedExercise].sets.findIndex(set => set.setNumber === trainingData.setNumber);
        if (indexFoundSet > -1) {
            updatedTraining.exercises[indexOfChangedExercise].sets[indexFoundSet] = Object.assign(Object.assign({}, updatedTraining.exercises[indexOfChangedExercise].sets[indexFoundSet]), { weightLifted: trainingData.weightLifted, reps: trainingData.reps });
            updatedTraining.exercises[indexOfChangedExercise].total = trainingData.total;
        }
        else {
            updatedTraining.exercises[indexOfChangedExercise].sets.push({
                setNumber: trainingData.setNumber,
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps,
            });
            updatedTraining.exercises[indexOfChangedExercise].total = trainingData.total;
        }
        return this.saveTrainingData(Object.assign({}, updatedTraining));
    }
    addNewExercise(alreadyUsedExercises) {
        const allExercises = [...this._allExercisesChanged$$.getValue().Value];
        const availableExercises = allExercises.filter((exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1);
        return this.updateTrainingState(undefined, availableExercises);
    }
    updateExerciseChoices(selectedExercise, selectedIndex, disabledTooltip, trainingToBeUpdated, selectedExerciseData) {
        trainingToBeUpdated.exercises[selectedIndex].exerciseData = selectedExerciseData;
        trainingToBeUpdated.exercises[selectedIndex].disabledTooltip = disabledTooltip;
        trainingToBeUpdated.exercises.forEach((exercise, index) => {
            if (index !== selectedIndex) {
                exercise.availableExercises = exercise.availableExercises.filter((exercise) => exercise.name !== selectedExercise);
            }
        });
        return this.saveTrainingData(Object.assign({}, trainingToBeUpdated));
    }
    keepTrainingState() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__.StorageItems.TRAINING_STATE }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(storedData => {
            if (!storedData || !(storedData === null || storedData === void 0 ? void 0 : storedData.value)) {
                return false;
            }
            const trainingState = JSON.parse(storedData.value);
            this._currentTrainingChanged$$.next(Object.assign({}, trainingState));
            return true;
        }));
    }
    updateTrainingState(newTrainingState, exercises, restartAll, userId) {
        let updatedTraining;
        if (exercises) {
            updatedTraining = this._currentTrainingChanged$$.getValue();
            if (restartAll) {
                updatedTraining = Object.assign(Object.assign({}, _constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_2__.EMPTY_TRAINING), { userId: userId });
            }
            updatedTraining.exercises.push((0,_constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_2__.createEmptyExercise)(exercises));
        }
        else {
            updatedTraining = newTrainingState;
        }
        return this.saveTrainingData(Object.assign({}, updatedTraining));
    }
    saveTrainingData(updatedTraining) {
        this._currentTrainingChanged$$.next(Object.assign({}, updatedTraining));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
            key: _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_1__.StorageItems.TRAINING_STATE,
            value: JSON.stringify(Object.assign({}, updatedTraining)),
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1));
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
TrainingStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({ providedIn: 'root' })
], TrainingStoreService);



/***/ }),

/***/ 31618:
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26439);
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
            return loginService.passwordFitsEmail(email, password)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
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
function isEmailAvailable(signupService, cd) {
    return (control) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(350).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(_ => {
        if (control) {
            const email = control === null || control === void 0 ? void 0 : control.value;
            if (!email) {
                return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
            }
            return signupService.getEmails(email.trim().toLowerCase())
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
                if (!response) {
                    return { 'availableEmail': true };
                }
                return null;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(_ => rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => cd.markForCheck()));
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
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
/* harmony export */   "isNumber": () => (/* binding */ isNumber)
/* harmony export */ });
function isNumber() {
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
                if (!set.get('weightLifted').value || !set.get('reps').value ||
                    set.get('weightLifted').errors || set.get('reps').errors) {
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
                if (exerciseNames.indexOf((_a = group.get('exerciseData.name')) === null || _a === void 0 ? void 0 : _a.value) !== -1) {
                    return { 'duplicateExerciseName': group.get('exerciseData.name').value };
                }
                else {
                    exerciseNames.push((_b = group.get('exerciseData.name')) === null || _b === void 0 ? void 0 : _b.value);
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
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.html?ngResource */ 33327);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 92767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/shared/message-duration.const */ 75938);
/* harmony import */ var _services_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/auth/auth.service */ 40279);
/* harmony import */ var _services_api_auth_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api/auth/login.service */ 81211);
/* harmony import */ var _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validators/auth/auth.validators */ 31618);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _constants_shared_ion_focus_durations_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/shared/ion-focus-durations.const */ 93988);
/* harmony import */ var _services_shared_loading_controller_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/shared/loading-controller.service */ 84786);
/* harmony import */ var _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/shared/toast-controller.service */ 76467);



















let LoginComponent = class LoginComponent {
  constructor(unsubscribeService, translateService, loginService, authService, changeDetectorRef, router, loadingControllerService, toastControllerService) {
    this.unsubscribeService = unsubscribeService;
    this.translateService = translateService;
    this.loginService = loginService;
    this.authService = authService;
    this.changeDetectorRef = changeDetectorRef;
    this.router = router;
    this.loadingControllerService = loadingControllerService;
    this.toastControllerService = toastControllerService;
    this.isLoading = false;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(20)])
    }, {
      asyncValidators: _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_6__.passwordFitsEmail(this.loginService, this.changeDetectorRef)
    });
  }

  get focusDuration() {
    return _constants_shared_ion_focus_durations_const__WEBPACK_IMPORTED_MODULE_8__.IonFocusDurations.LOGIN;
  }

  onSubmit() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.form.valid) {
        return;
      }

      _this.isLoading = true;
      yield _this.loadingControllerService.displayLoader({
        message: 'auth.logging_in'
      });

      _this.authService.login(_this.accessFormData('email').value, _this.accessFormData('password').value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(_ => rxjs__WEBPACK_IMPORTED_MODULE_13__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.finalize)( /*#__PURE__*/(0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
        yield _this.loadingControllerService.dismissLoader();

        _this.changeDetectorRef.markForCheck();
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(_this.unsubscribeService)).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          if (response) {
            yield _this.toastControllerService.displayToast({
              message: _this.translateService.instant(response.Message),
              duration: _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_DURATION.GENERAL,
              color: response.Token ? 'primary' : 'danger'
            });
            yield _this.router.navigate(['/training/new-training']);
          }
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  accessFormData(formFieldName) {
    return this.form.get(formFieldName);
  }

};

LoginComponent.ctorParameters = () => [{
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_7__.UnsubscribeService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService
}, {
  type: _services_api_auth_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService
}, {
  type: _services_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
}, {
  type: _services_shared_loading_controller_service__WEBPACK_IMPORTED_MODULE_9__.LoadingControllerService
}, {
  type: _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_10__.ToastControllerService
}];

LoginComponent.propDecorators = {
  passwordInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ['passwordEl', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonInput
    }]
  }]
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'bl-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectionStrategy.OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_7__.UnsubscribeService],
  styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
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
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.html?ngResource */ 36927);
/* harmony import */ var _signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.scss?ngResource */ 35431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/shared/message-duration.const */ 75938);
/* harmony import */ var _services_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/auth/auth.service */ 40279);
/* harmony import */ var _services_api_auth_signup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api/auth/signup.service */ 96935);
/* harmony import */ var _services_shared_loading_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared/loading-controller.service */ 84786);
/* harmony import */ var _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shared/toast-controller.service */ 76467);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../validators/auth/auth.validators */ 31618);
/* harmony import */ var _constants_shared_ion_focus_durations_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/shared/ion-focus-durations.const */ 93988);


















let SignupComponent = class SignupComponent {
  constructor(authService, signupService, translateService, unsubscribeService, loadingControllerService, toastControllerService, changeDetectorRef, router) {
    this.authService = authService;
    this.signupService = signupService;
    this.translateService = translateService;
    this.unsubscribeService = unsubscribeService;
    this.loadingControllerService = loadingControllerService;
    this.toastControllerService = toastControllerService;
    this.changeDetectorRef = changeDetectorRef;
    this.router = router;
    this.isLoading = false;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      language: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('en', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      weightFormat: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('kg', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email],
        asyncValidators: [_validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_9__.isEmailAvailable(this.signupService, this.changeDetectorRef)]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(20)]),
      confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(20)])
    }, {
      validators: _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_9__.samePasswords()
    });
  }

  get focusDuration() {
    return _constants_shared_ion_focus_durations_const__WEBPACK_IMPORTED_MODULE_10__.IonFocusDurations.SIGNUP;
  }

  onSubmit() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.form.valid) {
        return;
      }

      _this.isLoading = true;
      yield _this.loadingControllerService.displayLoader({
        message: 'auth.signing_in'
      });

      _this.authService.signup(_this.accessFormData('language').value, _this.accessFormData('weightFormat').value, _this.accessFormData('email').value, _this.accessFormData('password').value, _this.accessFormData('confirmPassword').value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(_ => rxjs__WEBPACK_IMPORTED_MODULE_13__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.finalize)( /*#__PURE__*/(0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
        yield _this.loadingControllerService.dismissLoader();

        _this.changeDetectorRef.markForCheck();
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(_this.unsubscribeService)).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          if (response.Success) {
            yield _this.toastControllerService.displayToast({
              message: _this.translateService.instant(response.Message),
              duration: _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_DURATION.GENERAL,
              color: response.Success ? 'primary' : 'danger'
            });
            yield _this.router.navigate(['/auth/login']);
          }
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  accessFormData(formFieldName) {
    return this.form.get(formFieldName);
  }

};

SignupComponent.ctorParameters = () => [{
  type: _services_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _services_api_auth_signup_service__WEBPACK_IMPORTED_MODULE_5__.SignupService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_8__.UnsubscribeService
}, {
  type: _services_shared_loading_controller_service__WEBPACK_IMPORTED_MODULE_6__.LoadingControllerService
}, {
  type: _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_7__.ToastControllerService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
}];

SignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'bl-signup',
  template: _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectionStrategy.OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_8__.UnsubscribeService],
  styles: [_signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignupComponent);


/***/ }),

/***/ 47746:
/*!****************************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/languages/languages.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagesComponent": () => (/* binding */ LanguagesComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _languages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languages.component.html?ngResource */ 46735);
/* harmony import */ var _languages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages.component.scss?ngResource */ 45138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _services_shared_preferences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared/preferences.service */ 68476);
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/store/auth/auth-store.service */ 88458);
/* harmony import */ var _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/store/shared/preferences-store.service */ 97276);










let LanguagesComponent = class LanguagesComponent {
  constructor(preferencesStoreService, authStoreService, navigationService, popoverController, menuController) {
    this.preferencesStoreService = preferencesStoreService;
    this.authStoreService = authStoreService;
    this.navigationService = navigationService;
    this.popoverController = popoverController;
    this.menuController = menuController;
    this.languageData = [{
      LanguageCode: 'en',
      ImageUrl: '../../../../assets/images/flags/united-kingdom.png',
      LanguageName: 'languages.english'
    }, {
      LanguageCode: 'hr',
      ImageUrl: '../../../../assets/images/flags/croatia.png',
      LanguageName: 'languages.croatian'
    }];
  }

  changeLanguage(language) {
    var _this = this;

    const currentPreferences = this.preferencesStoreService.getPreferences();
    this.authStoreService.loggedUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(userData => {
      const preferences = {
        userId: userData._id,
        languageCode: language,
        weightFormat: 'kg',
        showByPeriod: currentPreferences.showByPeriod
      };
      return this.navigationService.setPreferences(preferences, 'language');
    })).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
        yield _this.popoverController.dismiss();
        yield _this.menuController.close();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

};

LanguagesComponent.ctorParameters = () => [{
  type: _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_5__.PreferencesStoreService
}, {
  type: _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_4__.AuthStoreService
}, {
  type: _services_shared_preferences_service__WEBPACK_IMPORTED_MODULE_3__.PreferencesService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
}];

LanguagesComponent.propDecorators = {
  preferences$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
LanguagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'bl-languages',
  template: _languages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
  styles: [_languages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LanguagesComponent);


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
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _side_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav.component.html?ngResource */ 93763);
/* harmony import */ var _side_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-nav.component.scss?ngResource */ 11362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 68031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 10913);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 33200);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store/auth/auth-store.service */ 88458);
/* harmony import */ var _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/store/shared/preferences-store.service */ 97276);
/* harmony import */ var _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/store/shared/shared-store.service */ 81102);
/* harmony import */ var _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/training/past-trainings-date-format.const */ 31757);
/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./languages/languages.component */ 47746);














let SideNavComponent = class SideNavComponent {
  constructor(authStoreService, sharedStoreService, preferencesStoreService, popoverController, router) {
    this.authStoreService = authStoreService;
    this.sharedStoreService = sharedStoreService;
    this.preferencesStoreService = preferencesStoreService;
    this.popoverController = popoverController;
    this.router = router;
    this.isAuthenticated$ = this.authStoreService.isAuth$;
    this.preferences$ = this.preferencesStoreService.preferencesChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1));
  }

  onLogout() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.authStoreService.logout();
    })();
  }

  goToPastTrainings() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.sharedStoreService.pastTrainingsQueryParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          var _a, _b;

          let queryParams;

          if (params) {
            queryParams = params;
          } else {
            const showByPeriod = (_b = (_a = _this2.preferencesStoreService.getPreferences()) === null || _a === void 0 ? void 0 : _a.showByPeriod) !== null && _b !== void 0 ? _b : 'week';
            const startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date()), {
              weekStartsOn: 1
            });
            const endDate = showByPeriod === 'week' ? (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date()), {
              weekStartsOn: 1
            }) : (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date()), {
              weekStartsOn: 1
            });
            queryParams = {
              startDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(startDate, _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_6__.QUERY_PARAMS_DATE_FORMAT),
              endDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(endDate, _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_6__.QUERY_PARAMS_DATE_FORMAT),
              showBy: showByPeriod
            };
          }

          yield _this2.router.navigate(['/training/past-trainings'], {
            queryParams
          });
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  openPopover($event) {
    var _this3 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this3.popoverController.create({
        component: _languages_languages_component__WEBPACK_IMPORTED_MODULE_7__.LanguagesComponent,
        event: $event,
        componentProps: {
          preferences$: _this3.preferences$
        },
        side: 'left',
        keyboardClose: true
      });
      yield popover.present();
    })();
  }

};

SideNavComponent.ctorParameters = () => [{
  type: _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_3__.AuthStoreService
}, {
  type: _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_5__.SharedStoreService
}, {
  type: _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_4__.PreferencesStoreService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.PopoverController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
}];

SideNavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'bl-side-nav',
  template: _side_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectionStrategy.OnPush,
  styles: [_side_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SideNavComponent);


/***/ }),

/***/ 10185:
/*!***************************************************************************!*\
  !*** ./src/app/views/shared/datetime-picker/datetime-picker.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimePickerComponent": () => (/* binding */ DateTimePickerComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _datetime_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime-picker.component.html?ngResource */ 53030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/common/types/modal-roles.type */ 78033);







let DateTimePickerComponent = class DateTimePickerComponent {
  constructor(modalController) {
    this.modalController = modalController;
    this.maxDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
  }

  dateChanged(currentDateValue) {
    this.dateValue = currentDateValue;
  }

  close() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      yield (_a = _this.dateTimeEl) === null || _a === void 0 ? void 0 : _a.cancel();
      yield _this.modalController.dismiss(undefined, _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_2__.DialogRoles.CANCEL);
    })();
  }

  select() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      yield (_a = _this2.dateTimeEl) === null || _a === void 0 ? void 0 : _a.confirm();
      yield _this2.modalController.dismiss(_this2.dateValue, _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_2__.DialogRoles.SELECT_DATE);
    })();
  }

};

DateTimePickerComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

DateTimePickerComponent.propDecorators = {
  dateValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  dateTimeEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['datetime', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonDatetime
    }]
  }]
};
DateTimePickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _datetime_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush
})], DateTimePickerComponent);


/***/ }),

/***/ 89288:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/shared/delete-exercise-dialog/delete-exercise-dialog.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteExerciseDialogComponent": () => (/* binding */ DeleteExerciseDialogComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_exercise_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-exercise-dialog.component.html?ngResource */ 71504);
/* harmony import */ var _delete_exercise_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-exercise-dialog.component.scss?ngResource */ 79948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/common/types/modal-roles.type */ 78033);







let DeleteExerciseDialogComponent = class DeleteExerciseDialogComponent {
  constructor(modalController) {
    this.modalController = modalController;
    this.isError = false;
  }

  onCancel() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalController.dismiss(false, _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.CANCEL);
    })();
  }

  onDeleteExercise() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.modalController.dismiss(true, _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.DELETE_EXERCISE);
    })();
  }

};

DeleteExerciseDialogComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

DeleteExerciseDialogComponent.propDecorators = {
  isError: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  deleteExercise: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
DeleteExerciseDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _delete_exercise_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  styles: [_delete_exercise_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DeleteExerciseDialogComponent);


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
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/store/auth/auth-store.service */ 88458);





let NotFoundComponent = class NotFoundComponent {
    constructor(authStoreService) {
        this.authStoreService = authStoreService;
        this.isAuth$ = this.authStoreService.isAuth$;
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_2__.AuthStoreService }
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
/* harmony import */ var _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/shared/paginator.const */ 69396);








let PaginationComponent = class PaginationComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.pageSizeOptions = [1, 3, 5, 10];
        this.isSearch = false;
        this.page = _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_3__.INITIAL_PAGE;
        this.size = _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_SIZE;
        this.isPreviousPage = false;
        this.isNextPage = false;
        this.data = undefined;
        this.isLoading = false;
        this.paginatorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    loadPage(page, dateInterval, earliestTrainingDate, lastPage) {
        if (this.isSearch) {
            if (page) {
                switch (page) {
                    case 'First': {
                        this.page = _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_3__.INITIAL_PAGE;
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
    setPageText$(totalPages) {
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
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
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

/***/ 62901:
/*!***************************************************************************!*\
  !*** ./src/app/views/shared/skeleton-loader/skeleton-loader.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonLoaderComponent": () => (/* binding */ SkeletonLoaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _skeleton_loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton-loader.component.html?ngResource */ 61301);
/* harmony import */ var _skeleton_loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skeleton-loader.component.scss?ngResource */ 71957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let SkeletonLoaderComponent = class SkeletonLoaderComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        const host = this.elementRef.nativeElement;
        if (this.className) {
            host.classList.add(this.className);
        }
    }
    styleSkeleton() {
        var _a, _b, _c, _d;
        return {
            'width': (_a = this.width) !== null && _a !== void 0 ? _a : '',
            'height': (_b = this.height) !== null && _b !== void 0 ? _b : '',
            'border-radius': (_c = this.borderRadius) !== null && _c !== void 0 ? _c : '',
            'margin': (_d = this.margin) !== null && _d !== void 0 ? _d : '',
        };
    }
};
SkeletonLoaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
SkeletonLoaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'bl-skeleton-loader',
        template: _skeleton_loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_skeleton_loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SkeletonLoaderComponent);



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
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sets.component.html?ngResource */ 34122);
/* harmony import */ var _sets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sets.component.scss?ngResource */ 31082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var _helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/control-value-accessor.helper */ 2134);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../validators/shared/common.validators */ 9366);
/* harmony import */ var _validators_training_set_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../validators/training/set.validators */ 11564);

var SetsComponent_1;











let SetsComponent = SetsComponent_1 = class SetsComponent {
  constructor(unsubscribeService) {
    this.unsubscribeService = unsubscribeService;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]);
    this.isExerciseFormSubmitted$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
    this.exerciseStateChanged$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
    this.indexExercise = 0;
    this.editMode = false;
    this.isLoading = false;
    this.setAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.setDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.formStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
  }

  get formErrors() {
    var _a;

    let errors = [];

    if ((_a = this.form) === null || _a === void 0 ? void 0 : _a.errors) {
      const mappedKeys = Object.keys(this.form.errors).map(key => key);
      errors = errors.concat(mappedKeys);
    }

    this.form.controls.forEach(group => {
      if (group === null || group === void 0 ? void 0 : group.errors) {
        const mappedKeys = Object.keys(group.errors).map(key => key);
        errors = errors.concat(mappedKeys);
      }
    });
    return errors;
  }

  ngOnInit() {
    var _this = this;

    this.form.setValidators([_validators_training_set_validators__WEBPACK_IMPORTED_MODULE_6__.allSetsFilled()]);
    this.form.updateValueAndValidity();
    this.formStateChanged.emit(this.formErrors);
    this.exerciseNameControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribeService)).subscribe(value => {
      value ? this.accessFormField('weightLifted', 0).enable() : this.accessFormField('weightLifted', 0).disable();
      value ? this.accessFormField('reps', 0).enable() : this.accessFormField('reps', 0).disable();
    });
    this.exerciseStateChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(state => state === 'Update'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribeService)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
        var _a;

        if ((_a = _this.weightLiftedEl) === null || _a === void 0 ? void 0 : _a.first) {
          yield _this.weightLiftedEl.first.setFocus();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngOnChanges() {
    this.form.updateValueAndValidity({
      emitEvent: true
    });
  }

  writeValue(sets) {
    if (sets) {
      if (sets.length > 0) {
        for (const set of sets) {
          this.addSet(set);
        }
      } else {
        this.addSet();
      }
    }
  } //Sending parent new form value when form value changes


  registerOnChange(fn) {
    this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribeService)).subscribe(formValue => {
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
    var _this2 = this;

    this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      setNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(set ? set.setNumber : this.getSets().length + 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      weightLifted: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({
        value: set ? set.weightLifted : null,
        disabled: this.exerciseNameControl.value ? false : true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(1000), _validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_5__.isNumber()]),
      reps: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({
        value: set ? set.reps : null,
        disabled: this.exerciseNameControl.value ? false : true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]*$')])
    }, {
      validators: [_validators_training_set_validators__WEBPACK_IMPORTED_MODULE_6__.bothValuesRequired(), _validators_training_set_validators__WEBPACK_IMPORTED_MODULE_6__.isSetValid()]
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribeService)).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
        var _a;

        if (_this2.weightLiftedEl) {
          yield (_a = _this2.weightLiftedEl.last) === null || _a === void 0 ? void 0 : _a.setFocus();
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  deleteSet(indexSet) {
    this.form.removeAt(indexSet);
    this.setDeleted.emit({
      indexExercise: this.indexExercise,
      indexSet: indexSet,
      newTotal: this.calculateTotal()
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
        reps: +this.accessFormField('reps', indexSet).value
      }
    });
  }

  accessFormField(formField, indexSet) {
    var _a;

    return (_a = this.form.at(indexSet)) === null || _a === void 0 ? void 0 : _a.get(formField);
  }

  setIonComponentClass(set, isExerciseFormSubmitted, exerciseName, setConstituent) {
    var _a, _b;

    return (setConstituent === 'weightLifted' ? (_a = set.errors) === null || _a === void 0 ? void 0 : _a.weightLiftedRequired : (_b = set.errors) === null || _b === void 0 ? void 0 : _b.repsRequired) && (isExerciseFormSubmitted || !!exerciseName);
  }

  calculateTotal() {
    var _a, _b;

    let total = 0;

    for (const group of this.getSets()) {
      total += +((_a = group.get('weightLifted')) === null || _a === void 0 ? void 0 : _a.value) * +((_b = group.get('reps')) === null || _b === void 0 ? void 0 : _b.value);
    }

    return total;
  }

};

SetsComponent.ctorParameters = () => [{
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_4__.UnsubscribeService
}];

SetsComponent.propDecorators = {
  isExerciseFormSubmitted$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  exerciseStateChanged$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  exerciseNameControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  indexExercise: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  editMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  isLoading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  setAdded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  setDeleted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  formStateChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  weightLiftedEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChildren,
    args: ['weightLiftedEl']
  }]
};
SetsComponent = SetsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'bl-sets',
  template: _sets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
  providers: [(0,_helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_3__.getControlValueAccessor)(SetsComponent_1), _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_4__.UnsubscribeService],
  styles: [_sets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SetsComponent);


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
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _single_exercise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-exercise.component.html?ngResource */ 91068);
/* harmony import */ var _single_exercise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-exercise.component.scss?ngResource */ 13376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/shared/message-duration.const */ 75938);
/* harmony import */ var _helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/control-value-accessor.helper */ 2134);
/* harmony import */ var _constants_shared_default_weight_format_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants/shared/default-weight-format.const */ 84049);
/* harmony import */ var _pipes_training_new_training_round_total_weight_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pipes/training/new-training/round-total-weight/round-total-weight.pipe */ 62857);
/* harmony import */ var _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/shared/toast-controller.service */ 76467);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _services_api_training_training_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/api/training/training.service */ 9935);
/* harmony import */ var _validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../validators/training/single-exercise.validators */ 29651);
/* harmony import */ var _delete_exercise_dialog_delete_exercise_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../delete-exercise-dialog/delete-exercise-dialog.component */ 89288);
/* harmony import */ var _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../models/common/types/modal-roles.type */ 78033);
/* harmony import */ var _services_store_training_training_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/store/training/training-store.service */ 70788);
/* harmony import */ var _constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../constants/training/new-training.const */ 25675);
/* harmony import */ var _constants_shared_create_initial_set_const__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../constants/shared/create-initial-set.const */ 80760);

var SingleExerciseComponent_1;






















const INITIAL_WEIGHT = 0;
let SingleExerciseComponent = SingleExerciseComponent_1 = class SingleExerciseComponent {
  constructor(trainingStoreService, trainingService, unsubscribeService, translateService, changeDetectorRef, toastControllerService, modalController, roundTotalWeightPipe) {
    this.trainingStoreService = trainingStoreService;
    this.trainingService = trainingService;
    this.unsubscribeService = unsubscribeService;
    this.translateService = translateService;
    this.changeDetectorRef = changeDetectorRef;
    this.toastControllerService = toastControllerService;
    this.modalController = modalController;
    this.roundTotalWeightPipe = roundTotalWeightPipe;
    this.exerciseStateChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
    this.isSubmitted$$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(false);
    this.exercises$ = undefined;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormArray([]);
    this.setErrors = [];
    this.exerciseChanged = false;
    this.isApiLoading = false;
    this.editData = _constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_14__.EMPTY_TRAINING_EDIT;
    this.isLoading = false;
    this.editMode = false;
    this.exerciseAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_19__.EventEmitter();
    this.currentExerciseState$ = this.exerciseStateChanged$$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.startWith)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([this.trainingStoreService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.map)(currentTrainingState => currentTrainingState.exercises)), this.trainingStoreService.allExercisesChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.map)(value => {
      var _a;

      return (_a = value === null || value === void 0 ? void 0 : value.Value) !== null && _a !== void 0 ? _a : [];
    }))])));
    this.form.setValidators([_validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_10__.checkDuplicateExerciseName(), _validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_10__.checkExerciseNumber()]);
    this.form.updateValueAndValidity();
  }

  writeValue(exercises) {
    if (exercises) {
      if (exercises.length > 0) {
        while (this.form.length !== 0) {
          this.form.removeAt(0);
        }

        exercises.forEach((exercise, indexExercise) => {
          var _a;

          this.addExercise();

          if ((_a = exercise === null || exercise === void 0 ? void 0 : exercise.exerciseData) === null || _a === void 0 ? void 0 : _a.name) {
            this.accessFormGroup('exerciseData', 'name', indexExercise).patchValue(exercise.exerciseData.name);
            this.accessFormGroup('exerciseData', 'imageUrl', indexExercise).patchValue(exercise.exerciseData.imageUrl);
            this.accessFormGroup('exerciseData', 'primaryMuscleGroup', indexExercise).patchValue(exercise.exerciseData.primaryMuscleGroup);
            this.accessFormGroup('exerciseData', 'translations', indexExercise).patchValue(exercise.exerciseData.translations);
            this.accessFormField('sets', indexExercise).patchValue(exercise.sets);
            this.accessFormField('total', indexExercise).patchValue((exercise === null || exercise === void 0 ? void 0 : exercise.total) ? this.roundTotalWeightPipe.transform(exercise.total) : `0 ${_constants_shared_default_weight_format_const__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_WEIGHT_FORMAT}`);
            this.accessFormField('disabledTooltip', indexExercise).patchValue(exercise.disabledTooltip);
          }
        });
      }
    }
  }

  registerOnChange(fn) {
    this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.unsubscribeService)).subscribe(fn);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onExerciseNameChange(indexExercise, element) {
    if (element === null || element === void 0 ? void 0 : element.value) {
      const currentTraining = Object.assign({}, this.trainingStoreService.getCurrentTrainingState());
      const selectedExerciseData = currentTraining.exercises[indexExercise].availableExercises.find(exercise => exercise.name === element.value);
      this.accessFormGroup('exerciseData', 'imageUrl', indexExercise).patchValue(selectedExerciseData.imageUrl);
      this.accessFormGroup('exerciseData', 'primaryMuscleGroup', indexExercise).patchValue(selectedExerciseData.primaryMuscleGroup);
      this.accessFormGroup('exerciseData', 'translations', indexExercise).patchValue(selectedExerciseData.translations);
      this.trainingStoreService.updateExerciseChoices(element.value, indexExercise, this.accessFormField('disabledTooltip', indexExercise).value, currentTraining, selectedExerciseData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.unsubscribeService)).subscribe(_ => {
        this.exerciseChanged = !this.exerciseChanged;
        this.exerciseStateChanged$$.next('Update');
        this.changeDetectorRef.markForCheck();
      });
    }
  }

  addExercise(event) {
    this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup({
      exerciseData: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup({
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]),
        imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null),
        primaryMuscleGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null),
        translations: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null)
      }),
      sets: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl((0,_constants_shared_create_initial_set_const__WEBPACK_IMPORTED_MODULE_15__.createInitialSet)()),
      total: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(this.roundTotalWeightPipe.transform(INITIAL_WEIGHT), [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]),
      disabledTooltip: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required])
    }));

    if (event) {
      this.trainingStoreService.addNewExercise(this.getAlreadyUsedExercises()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.unsubscribeService)).subscribe(_ => {
        this.exerciseStateChanged$$.next('Add');
        this.exerciseAdded.next(event);
      });
    }
  }

  deleteExercise(indexExercise, exerciseName) {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (exerciseName) {
        const modal = yield _this.modalController.create({
          component: _delete_exercise_dialog_delete_exercise_dialog_component__WEBPACK_IMPORTED_MODULE_11__.DeleteExerciseDialogComponent,
          componentProps: {
            isError: false,
            deleteExercise: {
              message$: _this.translateService.stream('training.new_training.delete_exercise_prompt'),
              exerciseName: exerciseName
            }
          },
          keyboardClose: true,
          swipeToClose: true
        });
        yield modal.present();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.from)(modal.onDidDismiss()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(response => {
          if (response.role === _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_12__.DialogRoles.DELETE_EXERCISE) {
            return _this.trainingStoreService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(currentTrainingState => _this.trainingStoreService.deleteExercise(currentTrainingState, exerciseName)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(data => {
              _this.exerciseChanged = !_this.exerciseChanged;

              _this.form.removeAt(indexExercise);

              return _this.trainingStoreService.pushToAvailableExercises(data[0], data[1]);
            }));
          } else {
            return rxjs__WEBPACK_IMPORTED_MODULE_27__.EMPTY;
          }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.finalize)(() => {
          _this.exerciseStateChanged$$.next('Delete');

          _this.changeDetectorRef.markForCheck();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(_this.unsubscribeService)).subscribe();
      } else {
        _this.trainingStoreService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(currentTrainingState => _this.trainingStoreService.deleteExercise(currentTrainingState, null, indexExercise)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.finalize)(() => _this.exerciseStateChanged$$.next('Delete')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(_this.unsubscribeService)).subscribe(_ => _this.form.removeAt(indexExercise));
      }
    })();
  }

  onChangeSets($event) {
    let isExerciseValid = false;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(_ => {
      if (($event === null || $event === void 0 ? void 0 : $event.isWeightLiftedValid) && ($event === null || $event === void 0 ? void 0 : $event.isRepsValid) && this.accessFormGroup('exerciseData', 'name', $event.indexExercise).value) {
        isExerciseValid = true;
        const trainingData = {
          exerciseName: this.accessFormGroup('exerciseData', 'name', $event.indexExercise).value,
          setNumber: $event.newSet.setNumber,
          weightLifted: $event.newSet.weightLifted,
          reps: $event.newSet.reps,
          total: $event.newTotal
        };
        return this.trainingStoreService.setsChanged(trainingData);
      } else {
        isExerciseValid = false;
        return rxjs__WEBPACK_IMPORTED_MODULE_27__.EMPTY;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.unsubscribeService)).subscribe(_ => this.accessFormField('total', $event.indexExercise).patchValue(this.roundTotalWeightPipe.transform(isExerciseValid ? $event.newTotal : 0)));
  }

  deleteSet($event) {
    this.accessFormField('total', $event.indexExercise).patchValue(this.roundTotalWeightPipe.transform($event.newTotal));
    this.trainingStoreService.deleteSet($event.indexExercise, $event.indexSet, $event.newTotal);
  }

  getExercises() {
    return this.form.controls;
  }

  accessFormField(formField, indexExercise) {
    var _a;

    return (_a = this.form.at(indexExercise)) === null || _a === void 0 ? void 0 : _a.get(formField);
  }

  accessFormGroup(formGroup, formField, indexExercise) {
    var _a;

    return (_a = this.form.at(indexExercise).get(formGroup)) === null || _a === void 0 ? void 0 : _a.get(formField);
  }

  onSetFormChange($event) {
    this.setErrors = $event;
    this.changeDetectorRef.markForCheck();
  }

  isAddingExercisesDisabled(currentExercisesLength, allExercisesLength) {
    var _a;

    if (this.getExercises().length > 0) {
      return currentExercisesLength >= allExercisesLength || !((_a = this.accessFormGroup('exerciseData', 'name', this.getExercises().length - 1)) === null || _a === void 0 ? void 0 : _a.value) && this.getExercises().length > 0 || this.setErrors.includes('setNotEntered') || this.setErrors.includes('setNotValid');
    } else {
      return false;
    }
  }

  onSubmit() {
    var _this2 = this;

    this.isSubmitted$$.next(true);

    if (!this.form.valid || this.setErrors.length > 0) {
      return;
    }

    this.isApiLoading = true;
    this.gatherAllFormData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(apiNewTraining => {
      var _a;

      if (this.editMode) {
        return this.trainingService.updateTraining(apiNewTraining, (_a = this.editData.editTraining) === null || _a === void 0 ? void 0 : _a._id);
      } else {
        return this.trainingService.addTraining(apiNewTraining);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.finalize)(() => {
      this.isApiLoading = false;
      this.changeDetectorRef.markForCheck();
    })).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        yield _this2.toastControllerService.displayToast({
          message: _this2.translateService.instant(response.Message),
          duration: _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_DURATION.GENERAL,
          color: 'primary'
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  gatherAllFormData() {
    return this.trainingStoreService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.map)(currentTrainingState => {
      var _a;

      const exerciseFormData = [];
      this.getExercises().forEach((_exercise, indexExercise) => {
        var _a;

        const splittedTotal = this.accessFormField('total', indexExercise).value.split(' ');
        const exerciseData = {
          name: this.accessFormGroup('exerciseData', 'name', indexExercise).value,
          imageUrl: this.accessFormGroup('exerciseData', 'imageUrl', indexExercise).value,
          primaryMuscleGroup: this.accessFormGroup('exerciseData', 'primaryMuscleGroup', indexExercise).value,
          translations: this.accessFormGroup('exerciseData', 'translations', indexExercise).value
        };
        exerciseFormData.push({
          exerciseData,
          sets: [],
          total: +splittedTotal[0],
          disabledTooltip: this.accessFormField('disabledTooltip', indexExercise).value,
          availableExercises: ((_a = currentTrainingState.exercises[indexExercise]) === null || _a === void 0 ? void 0 : _a.availableExercises) || []
        });
        const formSetData = [];
        this.accessFormField('sets', indexExercise).value.forEach(set => {
          const apiSet = {
            setNumber: +set.setNumber,
            weightLifted: +set.weightLifted,
            reps: +set.reps
          };
          formSetData.push(apiSet);
        });
        exerciseFormData[indexExercise].sets = formSetData;
      });
      return {
        exercises: exerciseFormData,
        bodyweight: this.bodyweight.value ? +this.bodyweight.value : null,
        trainingDate: (_a = new Date(this.trainingDate.value)) !== null && _a !== void 0 ? _a : new Date(),
        editMode: this.editMode,
        userId: currentTrainingState.userId
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.unsubscribeService));
  }

  getAlreadyUsedExercises() {
    const alreadyUsedExercises = [];

    for (const exercise of this.getExercises()) {
      if (exercise.get('exerciseData.name').value) {
        alreadyUsedExercises.push(exercise.get('exerciseData.name').value);
      }
    }

    return alreadyUsedExercises;
  }

};

SingleExerciseComponent.ctorParameters = () => [{
  type: _services_store_training_training_store_service__WEBPACK_IMPORTED_MODULE_13__.TrainingStoreService
}, {
  type: _services_api_training_training_service__WEBPACK_IMPORTED_MODULE_9__.TrainingService
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_8__.UnsubscribeService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslateService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef
}, {
  type: _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_7__.ToastControllerService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_31__.ModalController
}, {
  type: _pipes_training_new_training_round_total_weight_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_6__.RoundTotalWeightPipe
}];

SingleExerciseComponent.propDecorators = {
  editData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Input
  }],
  bodyweight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Input
  }],
  trainingDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Input
  }],
  isLoading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Input
  }],
  editMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Input
  }],
  exerciseAdded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Output
  }],
  exercisePickerEls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChildren,
    args: ['exercisePicker']
  }]
};
SingleExerciseComponent = SingleExerciseComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_32__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: 'bl-single-exercise',
  template: _single_exercise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectionStrategy.OnPush,
  providers: [(0,_helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_4__.getControlValueAccessor)(SingleExerciseComponent_1), _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_8__.UnsubscribeService],
  styles: [_single_exercise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SingleExerciseComponent);


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
        this.isLoading = false;
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
TotalWeightComponent.propDecorators = {
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
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
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_training_action_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-training-action.component.html?ngResource */ 89843);
/* harmony import */ var _delete_training_action_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-training-action.component.scss?ngResource */ 19543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/common/types/modal-roles.type */ 78033);
/* harmony import */ var _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/store/shared/shared-store.service */ 81102);
/* harmony import */ var _services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/api/training/delete-training-action.service */ 64490);
/* harmony import */ var _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../constants/shared/paginator.const */ 69396);













let DeleteTrainingActionComponent = class DeleteTrainingActionComponent {
  constructor(sharedStoreService, deleteTrainingActionService, modalController, changeDetectorRef, route) {
    this.sharedStoreService = sharedStoreService;
    this.deleteTrainingActionService = deleteTrainingActionService;
    this.modalController = modalController;
    this.changeDetectorRef = changeDetectorRef;
    this.route = route;
    this.title$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)('');
    this.dateCreated$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)('');
    this.timeCreated$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)('');
    this.isLoading = false;
  }

  deleteTraining(trainingId) {
    var _this = this;

    this.isLoading = true;
    this.deleteTrainingActionService.deleteTraining(trainingId, this.getDeleteTrainingMeta()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(_ => rxjs__WEBPACK_IMPORTED_MODULE_9__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    })).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        _this.sharedStoreService.deletedTraining$$.next(response);

        yield _this.modalController.dismiss(false, _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.DELETE_TRAINING);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  onCancel() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.modalController.dismiss(false, _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.CANCEL);
    })();
  }

  getDeleteTrainingMeta() {
    var _a, _b, _c, _d, _e, _f, _g;

    const isSearch = !!((_a = this.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.search);

    if (isSearch) {
      const searchValue = ((_b = this.route.snapshot.queryParams) === null || _b === void 0 ? void 0 : _b.search).trim();
      const page = (_d = +((_c = this.route.snapshot.queryParams) === null || _c === void 0 ? void 0 : _c.page)) !== null && _d !== void 0 ? _d : _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_6__.INITIAL_PAGE;
      const size = (_f = +((_e = this.route.snapshot.queryParams) === null || _e === void 0 ? void 0 : _e.size)) !== null && _f !== void 0 ? _f : _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_SIZE;
      return {
        searchData: {
          page: page,
          size: size,
          searchValue: searchValue
        },
        currentDate: undefined
      };
    } else {
      const splittedDate = (_g = this.route.snapshot.queryParams.startDate) === null || _g === void 0 ? void 0 : _g.split('-');
      return {
        searchData: undefined,
        currentDate: new Date(`
                    ${splittedDate[2]}-
                    ${splittedDate[1]}-
                    ${splittedDate[0]}
                `)
      };
    }
  }

};

DeleteTrainingActionComponent.ctorParameters = () => [{
  type: _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_4__.SharedStoreService
}, {
  type: _services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_5__.DeleteTrainingActionService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
}];

DeleteTrainingActionComponent.propDecorators = {
  title$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }],
  dateCreated$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }],
  timeCreated$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }],
  training$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }]
};
DeleteTrainingActionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  template: _delete_training_action_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectionStrategy.OnPush,
  styles: [_delete_training_action_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DeleteTrainingActionComponent);


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
module.exports = "span:not(:last-child) {\n  font-size: 11px;\n  color: var(--ion-color-danger);\n}\n\n.submit {\n  margin-top: 10px;\n}\n\n.no_account_message {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  display: inline-block;\n  margin-top: 15px;\n  padding-bottom: 16px;\n}\n\n.no_account_message .no-account-link {\n  text-decoration: none;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBRUk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBQVIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuc3Bhbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKVxyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ub19hY2NvdW50X21lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG5cclxuICAgIC5uby1hY2NvdW50LWxpbmsge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 35431:
/*!********************************************************************!*\
  !*** ./src/app/views/auth/signup/signup.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-row {\n  flex-wrap: nowrap;\n}\n\n.description {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  font-weight: 500;\n}\n\n.label {\n  margin-left: 10px;\n}\n\n.radio {\n  margin: 0;\n}\n\n.did-you-know {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n\n.submit {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXJvdyB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5yYWRpbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5kaWQteW91LWtub3cge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 45138:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/languages/languages.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-item {\n  cursor: pointer;\n}\n\nion-img {\n  height: 40px;\n  width: 40px;\n}\n\n.language-txt {\n  margin-left: 10px;\n  font-size: 18px;\n}\n\n.checkmark {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLCtCQUFBO0FBQUoiLCJmaWxlIjoibGFuZ3VhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLmxhbmd1YWdlLXR4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNoZWNrbWFyayB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 11362:
/*!******************************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/side-nav.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu-toggle {\n  cursor: pointer;\n}\n\n.icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0ksK0JBQUE7QUFBSiIsImZpbGUiOiJzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tbWVudS10b2dnbGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 79948:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/shared/delete-exercise-dialog/delete-exercise-dialog.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".delete-exercise-msg {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1leGVyY2lzZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0FBQUoiLCJmaWxlIjoiZGVsZXRlLWV4ZXJjaXNlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZGVsZXRlLWV4ZXJjaXNlLW1zZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIl19 */";

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
module.exports = "ion-card {\n  position: fixed;\n  bottom: 0;\n  margin: 0 auto;\n  border: 2px solid var(--ion-color-primary);\n  box-shadow: var(--ion-box-shadow);\n  width: 95%;\n}\nion-card ion-card-content {\n  padding: 5px 10px;\n}\n.md ion-button {\n  font-size: 5px;\n}\n.ios ion-button {\n  font-size: 12px;\n}\n.paginator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  row-gap: 5px;\n}\n.controls-wrapper {\n  display: flex;\n  align-items: center;\n}\n.page-size-wrapper {\n  display: block;\n  width: 45px;\n  margin-right: 20px;\n  padding: 6px 0;\n  overflow: hidden;\n  border: none;\n  border-radius: 4px;\n  position: relative;\n  box-shadow: var(--ion-box-shadow);\n}\n.page-size-wrapper:after {\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid var(--ion-color-primary);\n  position: absolute;\n  top: 40%;\n  right: 5px;\n  content: \"\";\n  z-index: 98;\n}\n.page-size {\n  width: 65px;\n  border: 0;\n  position: relative;\n  top: -1px;\n  z-index: 99;\n  background: none;\n  cursor: pointer;\n  padding-left: 8px;\n}\n.page-size:focus-visible {\n  outline: none;\n}\n.arrow-wrapper {\n  display: flex;\n  column-gap: 10px;\n}\n.previous:not([disabled]):hover,\n.previous:not([disabled]):active,\n.next:not([disabled]):hover,\n.next:not([disabled]):active,\n.first:not([disabled]):hover,\n.first:not([disabled]):active,\n.last:not([disabled]):hover,\n.last:not([disabled]):active {\n  background: var(--ion-color-light);\n}\n.icon {\n  color: var(--ion-color-primary);\n}\n.label {\n  font-size: 15px;\n}\n@media (min-width: 640px) {\n  ion-card {\n    width: 1020px;\n    position: relative;\n    margin-top: 5px;\n  }\n\n  .paginator {\n    column-gap: 20px;\n    justify-content: flex-end;\n    flex-direction: row;\n  }\n\n  .arrow-wrapper {\n    margin-right: 15px;\n  }\n\n  .controls-wrapper {\n    order: 2;\n  }\n\n  .label {\n    margin-right: auto;\n    margin-left: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtBQUFKO0FBRUk7RUFDSSxpQkFBQTtBQUFSO0FBSUE7RUFDSSxjQUFBO0FBREo7QUFJQTtFQUNJLGVBQUE7QUFESjtBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBREo7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQURKO0FBR0k7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURSO0FBS0E7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZKO0FBSUk7RUFDSSxhQUFBO0FBRlI7QUFNQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUE7Ozs7Ozs7O0VBUUksa0NBQUE7QUFISjtBQU1BO0VBQ0ksK0JBQUE7QUFISjtBQU1BO0VBQ0ksZUFBQTtBQUhKO0FBTUE7RUFFSTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUFKTjs7RUFPRTtJQUNJLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtFQUpOOztFQU9FO0lBQ0ksa0JBQUE7RUFKTjs7RUFPRTtJQUNJLFFBQUE7RUFKTjs7RUFPRTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7RUFKTjtBQUNGIiwiZmlsZSI6InBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1pb24tYm94LXNoYWRvdyk7XHJcbiAgICB3aWR0aDogOTUlO1xyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWQgaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDVweDtcclxufVxyXG5cclxuLmlvcyBpb24tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHJvdy1nYXA6IDVweDtcclxufVxyXG5cclxuLmNvbnRyb2xzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLXNpemUtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0taW9uLWJveC1zaGFkb3cpO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB6LWluZGV4OiA5ODtcclxuICAgIH1cclxufVxyXG5cclxuLnBhZ2Utc2l6ZSB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cclxuICAgICY6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmFycm93LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5wcmV2aW91czpub3QoW2Rpc2FibGVkXSk6aG92ZXIsXHJcbi5wcmV2aW91czpub3QoW2Rpc2FibGVkXSk6YWN0aXZlLFxyXG4ubmV4dDpub3QoW2Rpc2FibGVkXSk6aG92ZXIsXHJcbi5uZXh0Om5vdChbZGlzYWJsZWRdKTphY3RpdmUsXHJcbi5maXJzdDpub3QoW2Rpc2FibGVkXSk6aG92ZXIsXHJcbi5maXJzdDpub3QoW2Rpc2FibGVkXSk6YWN0aXZlLFxyXG4ubGFzdDpub3QoW2Rpc2FibGVkXSk6aG92ZXIsXHJcbi5sYXN0Om5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdG9yIHtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3ctd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250cm9scy13cmFwcGVyIHtcclxuICAgICAgICBvcmRlcjogMjtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 71957:
/*!****************************************************************************************!*\
  !*** ./src/app/views/shared/skeleton-loader/skeleton-loader.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".skeleton {\n  width: 120px;\n  height: 35px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNrZWxldG9uLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJza2VsZXRvbi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNrZWxldG9uIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 31082:
/*!***************************************************************************!*\
  !*** ./src/app/views/shared/training/sets/sets.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-grid:first-of-type {\n  padding-bottom: 0;\n}\nion-grid:not(:first-of-type) {\n  padding-top: 0;\n}\n.ion-item-error {\n  --highlight-background: var(--ion-color-danger);\n}\n.ion-label-error {\n  color: var(--ion-color-danger) !important;\n}\n.set-row {\n  align-items: flex-start;\n}\n.set-row ::ng-deep .weight-lifted-input input {\n  height: 30px;\n}\n.set-row ::ng-deep .reps-input input {\n  height: 30px;\n}\n.set-row .ion-label {\n  font-size: 14px;\n}\n.set-saved-msg {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  font-size: 14px;\n}\n.delete-set-col {\n  margin-top: 5px;\n}\n.delete-set-col .delete-set-icon {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtBQURSO0FBSUk7RUFDSSxjQUFBO0FBRlI7QUFNQTtFQUNJLCtDQUFBO0FBSEo7QUFNQTtFQUNJLHlDQUFBO0FBSEo7QUFNQTtFQUNJLHVCQUFBO0FBSEo7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQU1JO0VBQ0ksWUFBQTtBQUpSO0FBT0k7RUFDSSxlQUFBO0FBTFI7QUFTQTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTko7QUFTQTtFQUNJLGVBQUE7QUFOSjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5SIiwiZmlsZSI6InNldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWdyaWQge1xyXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW9uLWl0ZW0tZXJyb3Ige1xyXG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn1cclxuXHJcbi5pb24tbGFiZWwtZXJyb3Ige1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXQtcm93IHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIDo6bmctZGVlcCAud2VpZ2h0LWxpZnRlZC1pbnB1dCBpbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAucmVwcy1pbnB1dCBpbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNldC1zYXZlZC1tc2cge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZGVsZXRlLXNldC1jb2wge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAgIC5kZWxldGUtc2V0LWljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 13376:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/shared/training/single-exercise/single-exercise.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".form {\n  padding: 0 10px;\n}\n\n.wrapper {\n  border-radius: 4px;\n  margin-top: 10px;\n}\n\n.wrapper--not-loading {\n  box-shadow: var(--ion-box-shadow);\n}\n\nion-grid:first-of-type {\n  padding-top: 10px;\n  padding-bottom: 0;\n}\n\n.exercise-picker {\n  color: var(--ion-color-primary);\n  max-width: 220px;\n  padding-bottom: 0;\n}\n\n.md .exercise-row {\n  align-items: center;\n}\n\n.ios .exercise-row {\n  align-items: flex-end;\n}\n\n.empty-training-msg {\n  font-size: 14px;\n}\n\n.at-least-one-exercise-txt {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1leGVyY2lzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFSTtFQUNJLGlDQUFBO0FBQVI7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESiIsImZpbGUiOiJzaW5nbGUtZXhlcmNpc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICYtLW5vdC1sb2FkaW5nIHtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pb24tYm94LXNoYWRvdyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1ncmlkOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmV4ZXJjaXNlLXBpY2tlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubWQgLmV4ZXJjaXNlLXJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW9zIC5leGVyY2lzZS1yb3cge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZW1wdHktdHJhaW5pbmctbXNnIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmF0LWxlYXN0LW9uZS1leGVyY2lzZS10eHQge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 28149:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/shared/training/total-weight/total-weight.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  column-gap: 10px;\n  padding-bottom: 10px;\n}\n.wrapper .key {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n.wrapper .value {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdGFsLXdlaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUFKO0FBRUk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUdJO0VBQ0ksZUFBQTtBQURSIiwiZmlsZSI6InRvdGFsLXdlaWdodC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgLmtleSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZhbHVlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 19543:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.scss?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".title {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.dot {\n  height: 8px;\n  width: 8px;\n  margin-bottom: 2px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.created-at-key {\n  display: block;\n  margin-top: 20px;\n  font-size: 18px;\n}\n\n.created-at-value {\n  display: block;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.created-at-value .time {\n  color: var(--ion-color-primary);\n}\n\n.exercises-wrapper {\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  justify-content: flex-start;\n}\n\n.exercises-wrapper .exercises-key {\n  align-self: center;\n  margin-top: 20px;\n  font-size: 18px;\n}\n\n.exercises-wrapper .exercises-value {\n  color: var(--ion-color-primary);\n  width: -moz-fit-content;\n  width: fit-content;\n  border-bottom: 2px solid var(--ion-color-light);\n  align-self: center;\n  font-size: 18px;\n}\n\n.delete-btn {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS10cmFpbmluZy1hY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFJSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFEUjs7QUFJSTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUZSOztBQUlRO0VBQ0ksK0JBQUE7QUFGWjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUpKOztBQU9RO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMWjs7QUFRUTtFQUNJLCtCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTlo7O0FBV0E7RUFDSSxnQkFBQTtBQVJKIiwiZmlsZSI6ImRlbGV0ZS10cmFpbmluZy1hY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kb3Qge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY3JlYXRlZC1hdCB7XHJcbiAgICAmLWtleSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi12YWx1ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmV4ZXJjaXNlcy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcm93LWdhcDogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC5leGVyY2lzZXMge1xyXG4gICAgICAgICYta2V5IHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXZhbHVlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */";

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
module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-title\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'navigation.login' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col sizeSm=\"4\">\r\n                <ion-card>\r\n                    <ion-card-content>\r\n                        <form\r\n                            [formGroup]=\"form\"\r\n                            (ngSubmit)=\"onSubmit()\"\r\n                            (keydown.enter)=\"onSubmit()\">\r\n                            <ion-grid>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item>\r\n                                            <ion-label position=\"floating\">\r\n                                                {{ 'auth.email' | translate }}\r\n                                            </ion-label>\r\n                                            <ion-input\r\n                                                ionFocus\r\n                                                [duration]=\"focusDuration\"\r\n                                                type=\"email\"\r\n                                                formControlName=\"email\"></ion-input>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('email').errors?.required &&\r\n                                                    (accessFormData('email').dirty || accessFormData('email').touched)\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.email_required' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('email').errors?.email &&\r\n                                                    !accessFormData('email').errors?.required\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.invalid_email' | translate }}\r\n                                            </ion-note>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item>\r\n                                            <ion-label position=\"floating\">\r\n                                                {{ 'auth.password' | translate }}\r\n                                            </ion-label>\r\n                                            <ion-input\r\n                                                #passwordEl\r\n                                                type=\"password\"\r\n                                                formControlName=\"password\"></ion-input>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('password').errors?.required &&\r\n                                                    (accessFormData('password').dirty || accessFormData('password').touched)\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.password_required' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('password').errors?.minlength\r\n                                                    || accessFormData('password').errors?.maxlength\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.password_length' | translate }}\r\n                                            </ion-note>\r\n                                        </ion-item>\r\n                                        <ion-note\r\n                                            *ngIf=\"form.errors?.passwordFitsEmail\r\n                                                && !accessFormData('password').errors?.required\r\n                                                && !accessFormData('password').errors?.minlength\r\n                                                && !accessFormData('password').errors?.maxlength\"\r\n                                            class=\"error\">\r\n                                            {{ 'auth.errors.password_wrong_email' | translate }}\r\n                                        </ion-note>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col class=\"ion-text-center\">\r\n                                        <ion-button\r\n                                            class=\"submit\"\r\n                                            type=\"submit\"\r\n                                            color=\"primary\"\r\n                                            [disabled]=\"!form.valid || isLoading\">\r\n                                            {{ 'auth.login' | translate }}\r\n                                        </ion-button>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row class=\"ion-text-center\">\r\n                                    <ion-col>\r\n                                        <ion-note class=\"no_account_message\">\r\n                                            {{ 'auth.no_account_message' | translate }}\r\n                                            <a\r\n                                                class=\"no-account-link\"\r\n                                                routerLink=\"/auth/signup\">\r\n                                                {{ 'auth.signup_link' | translate }}\r\n                                            </a>\r\n                                            {{ 'common.here' | translate }}\r\n                                        </ion-note>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </form>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n\r\n";

/***/ }),

/***/ 36927:
/*!********************************************************************!*\
  !*** ./src/app/views/auth/signup/signup.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-title\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'navigation.signup' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col sizeSm=\"4\">\r\n                <ion-card>\r\n                    <ion-card-content>\r\n                        <form\r\n                            *ngIf=\"form\"\r\n                            [formGroup]=\"form\"\r\n                            (ngSubmit)=\"onSubmit()\"\r\n                            (keydown.enter)=\"onSubmit()\">\r\n                            <ion-grid>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-note class=\"description\">\r\n                                            {{ 'auth.pick_language' | translate }}\r\n                                        </ion-note>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-radio-group formControlName=\"language\">\r\n                                    <ion-row>\r\n                                        <ion-col>\r\n                                            <ion-item lines=\"none\">\r\n                                                <ion-label class=\"label\">{{ 'languages.english' | translate }}</ion-label>\r\n                                                <ion-radio\r\n                                                    class=\"radio\"\r\n                                                    slot=\"start\"\r\n                                                    value=\"en\">\r\n                                                </ion-radio>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                        <ion-col>\r\n                                            <ion-item lines=\"none\">\r\n                                                <ion-label class=\"label\">{{ 'languages.croatian' | translate }}</ion-label>\r\n                                                <ion-radio\r\n                                                    class=\"radio\"\r\n                                                    slot=\"start\"\r\n                                                    value=\"hr\">\r\n                                                </ion-radio>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                    <ion-note\r\n                                        *ngIf=\"accessFormData('language').errors?.required\"\r\n                                        class=\"error\">\r\n                                        {{ 'preferences.errors.language_required' | translate }}\r\n                                    </ion-note>\r\n                                </ion-radio-group>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-note class=\"description\">\r\n                                            {{ 'auth.pick_weight_format' | translate }}\r\n                                        </ion-note>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-radio-group formControlName=\"weightFormat\">\r\n                                    <ion-row>\r\n                                        <ion-col>\r\n                                            <ion-item lines=\"none\">\r\n                                                <ion-label class=\"label\">{{ 'common.kilograms' | translate }}</ion-label>\r\n                                                <ion-radio\r\n                                                    class=\"radio\"\r\n                                                    slot=\"start\"\r\n                                                    value=\"kg\">\r\n                                                </ion-radio>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                        <ion-col>\r\n                                            <ion-item lines=\"none\">\r\n                                                <ion-label class=\"label\">{{ 'common.pounds' | translate }}</ion-label>\r\n                                                <ion-radio\r\n                                                    class=\"radio\"\r\n                                                    slot=\"start\"\r\n                                                    value=\"lbs\">\r\n                                                </ion-radio>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                    <ion-note\r\n                                        *ngIf=\"accessFormData('weightFormat').errors?.required\"\r\n                                        class=\"error\">\r\n                                        {{ 'preferences.errors.weight_format_required' | translate }}\r\n                                    </ion-note>\r\n                                </ion-radio-group>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item>\r\n                                            <ion-label position=\"floating\">{{ 'auth.email' | translate }}</ion-label>\r\n                                            <ion-input\r\n                                                ionFocus\r\n                                                [duration]=\"focusDuration\"\r\n                                                type=\"email\"\r\n                                                formControlName=\"email\"></ion-input>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('email').errors?.required &&\r\n                                                    (accessFormData('email').dirty || accessFormData('email').touched)\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.email_required' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('email').errors?.email\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.invalid_email' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('email').errors?.availableEmail\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.email_already_registered' | translate }}\r\n                                            </ion-note>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item>\r\n                                            <ion-label position=\"floating\">{{ 'auth.password' | translate }}</ion-label>\r\n                                            <!--TODO: input hint-->\r\n                                            <ion-input\r\n                                                type=\"password\"\r\n                                                formControlName=\"password\"></ion-input>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('password').errors?.required &&\r\n                                                    (accessFormData('password').dirty || accessFormData('password').touched)\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.password_required' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('password').errors?.minlength ||\r\n                                                    accessFormData('password').errors?.maxlength\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.password_length' | translate }}\r\n                                            </ion-note>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item>\r\n                                            <ion-label position=\"floating\">{{ 'auth.confirm_password' | translate }}</ion-label>\r\n                                            <!--TODO: input hint-->\r\n                                            <ion-input\r\n                                                type=\"password\"\r\n                                                formControlName=\"confirmPassword\"></ion-input>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('confirmPassword').errors?.required &&\r\n                                                    (accessFormData('confirmPassword').dirty || accessFormData('confirmPassword').touched)\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.confirm_password_required' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note\r\n                                                *ngIf=\"accessFormData('confirmPassword').errors?.minlength ||\r\n                                                    accessFormData('confirmPassword').errors?.maxlength\"\r\n                                                slot=\"error\">\r\n                                                {{ 'auth.errors.password_length' | translate }}\r\n                                            </ion-note>\r\n                                        </ion-item>\r\n                                        <ion-note\r\n                                            *ngIf=\"form.errors?.equalPass\r\n                                                && !accessFormData('confirmPassword').errors?.minlength\r\n                                                && !accessFormData('confirmPassword').errors?.maxlength\"\r\n                                            class=\"error\">\r\n                                            {{ 'auth.errors.equal_passwords' | translate }}\r\n                                        </ion-note>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col class=\"ion-text-center\">\r\n                                        <ion-button\r\n                                            class=\"submit\"\r\n                                            type=\"submit\"\r\n                                            color=\"primary\"\r\n                                            [disabled]=\"isLoading\">\r\n                                            {{ 'auth.signup' | translate }}\r\n                                        </ion-button>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </form>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 46735:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/languages/languages.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"(preferences$ | async) as preferences\">\r\n    <ion-list>\r\n        <ion-item\r\n            *ngFor=\"let language of languageData\"\r\n            lines=\"none\"\r\n            [disabled]=\"preferences.languageCode === language.LanguageCode\"\r\n            (click)=\"changeLanguage(language.LanguageCode)\">\r\n            <ion-img [src]=\"language.ImageUrl\"></ion-img>\r\n            <ion-text class=\"language-txt\">\r\n                {{ language.LanguageName | translate }}\r\n            </ion-text>\r\n            <ion-icon\r\n                *ngIf=\"preferences.languageCode === language.LanguageCode\"\r\n                name=\"checkmark-outline\"\r\n                class=\"checkmark\"\r\n                slot=\"end\"></ion-icon>\r\n        </ion-item>\r\n    </ion-list>\r\n</ng-container>\r\n";

/***/ }),

/***/ 93763:
/*!******************************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/side-nav.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu\r\n    side=\"start\"\r\n    content-id=\"main\">\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-title>{{ 'navigation.title' | translate }}</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"!(isAuthenticated$ | async)\"\r\n                    lines=\"none\"\r\n                    routerLink=\"/auth/login\"\r\n                    routerDirection=\"forward\">\r\n                    <ion-icon\r\n                        slot=\"start\"\r\n                        name=\"log-in-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.login' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"!(isAuthenticated$ | async)\"\r\n                    lines=\"none\"\r\n                    routerLink=\"/auth/signup\"\r\n                    routerDirection=\"forward\">\r\n                    <ion-icon\r\n                        slot=\"start\"\r\n                        name=\"arrow-forward-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.signup' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    lines=\"none\"\r\n                    routerLink=\"/training/new-training\"\r\n                    routerDirection=\"forward\">\r\n                    <ion-icon\r\n                        slot=\"start\"\r\n                        name=\"barbell-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.new_training' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    lines=\"none\"\r\n                    (click)=\"goToPastTrainings()\">\r\n                    <ion-icon\r\n                        slot=\"start\"\r\n                        name=\"analytics-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.past_trainings' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    lines=\"none\"\r\n                    (click)=\"$event.stopPropagation(); openPopover($event);\">\r\n                    <ion-icon\r\n                        slot=\"start\"\r\n                        name=\"language-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.language' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    lines=\"none\"\r\n                    routerDirection=\"backward\"\r\n                    (click)=\"onLogout()\">\r\n                    <ion-icon\r\n                        slot=\"start\"\r\n                        name=\"log-out-sharp\"\r\n                        class=\"icon\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.logout' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 53030:
/*!****************************************************************************************!*\
  !*** ./src/app/views/shared/datetime-picker/datetime-picker.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <ion-datetime\r\n        #datetime\r\n        presentation=\"date-time\"\r\n        size=\"cover\"\r\n        firstDayOfWeek=\"1\"\r\n        [value]=\"dateValue\"\r\n        [max]=\"maxDate\"\r\n        (ionChange)=\"dateChanged(datetime.value)\">\r\n        <ion-buttons slot=\"buttons\">\r\n            <ion-button (click)=\"close()\">{{ 'common.actions.close' | translate }}</ion-button>\r\n            <ion-button\r\n                color=\"primary\"\r\n                (click)=\"select()\">{{ 'common.actions.confirm' | translate }}</ion-button>\r\n        </ion-buttons>\r\n    </ion-datetime>\r\n</ion-content>\r\n";

/***/ }),

/***/ 71504:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/shared/delete-exercise-dialog/delete-exercise-dialog.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"onCancel()\">\r\n                <ion-icon name=\"close\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'training.new_training.buttons.delete_exercise' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding ion-text-center\">\r\n    <ion-text\r\n        *ngIf=\"(deleteExercise?.message$ | async) as message\"\r\n        class=\"delete-exercise-msg\">\r\n        {{ message }}\r\n    </ion-text>\r\n    <ion-text>\r\n        <p>\r\n            {{ 'training.new_training.exercise_name' | translate }}\r\n            <strong>{{ (deleteExercise?.exerciseName | translate) ?? '' }}</strong>\r\n        </p>\r\n    </ion-text>\r\n    <ion-button\r\n        *ngIf=\"deleteExercise\"\r\n        type=\"button\"\r\n        color=\"primary\"\r\n        (click)=\"onDeleteExercise()\">\r\n        {{ 'common.actions.delete' | translate }}\r\n    </ion-button>\r\n</ion-content>\r\n";

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
module.exports = "<ion-card mode=\"md\">\r\n    <ion-card-content>\r\n        <div class=\"paginator\">\r\n            <div class=\"controls-wrapper\">\r\n                <ng-container *ngIf=\"isSearch\">\r\n                    <div\r\n                        *skeleton=\"isLoading; width: '50px'; height: '35px'; margin: '0 10px 0 0'\"\r\n                        class=\"page-size-wrapper\">\r\n                        <select\r\n                            class=\"page-size\"\r\n                            [(ngModel)]=\"size\"\r\n                            (change)=\"loadPage()\">\r\n                            <option\r\n                                *ngFor=\"let size of pageSizeOptions\"\r\n                                [value]=\"size\">\r\n                                {{ size }}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </ng-container>\r\n                <div class=\"arrow-wrapper\">\r\n                    <ng-container *ngIf=\"isPreviousPage\">\r\n                        <ion-button\r\n                            *skeleton=\"isLoading; width: '50px'; height: '35px'\"\r\n                            mode=\"md\"\r\n                            class=\"first\"\r\n                            type=\"button\"\r\n                            color=\"primary\"\r\n                            fill=\"outline\"\r\n                            (click)=\"loadPage(\r\n                                'First',\r\n                                undefined,\r\n                                data?.Value?.Results?.EarliestTrainingDate)\">\r\n                            <ion-icon name=\"play-back-sharp\"></ion-icon>\r\n                        </ion-button>\r\n                    </ng-container>\r\n                    <ion-button\r\n                        *skeleton=\"isLoading; width: '50px'; height: '35px'\"\r\n                        mode=\"md\"\r\n                        type=\"button\"\r\n                        class=\"previous\"\r\n                        color=\"primary\"\r\n                        fill=\"outline\"\r\n                        [disabled]=\"data?.IsLoading || !isPreviousPage\"\r\n                        (click)=\"loadPage(\r\n                            'Previous',\r\n                            data.Value?.Results?.Dates)\">\r\n                        <ion-icon name=\"chevron-back-sharp\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button\r\n                        *skeleton=\"isLoading; width: '50px'; height: '35px'\"\r\n                        mode=\"md\"\r\n                        type=\"button\"\r\n                        class=\"next\"\r\n                        color=\"primary\"\r\n                        fill=\"outline\"\r\n                        [disabled]=\"data.IsLoading || !isNextPage\"\r\n                        (click)=\"loadPage(\r\n                            'Next',\r\n                            data.Value?.Results?.Dates)\">\r\n                        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n                    </ion-button>\r\n                    <ng-container *ngIf=\"isNextPage\">\r\n                        <ion-button\r\n                            *skeleton=\"isLoading; width: '50px'; height: '35px'\"\r\n                            mode=\"md\"\r\n                            type=\"button\"\r\n                            class=\"last\"\r\n                            color=\"primary\"\r\n                            fill=\"outline\"\r\n                            (click)=\"loadPage('Last', undefined, undefined, data?.Value?.TotalPages)\">\r\n                            <ion-icon name=\"play-forward-sharp\"></ion-icon>\r\n                        </ion-button>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n            <ng-container *ngIf=\"data?.Value?.TotalPages\">\r\n                <div\r\n                    *skeleton=\"isLoading; width: '75px'; height: '25px'\"\r\n                    class=\"label\"\r\n                    [innerHTML]=\"setPageText$(data.Value?.TotalPages) | async\"></div>\r\n            </ng-container>\r\n        </div>\r\n    </ion-card-content>\r\n</ion-card>\r\n";

/***/ }),

/***/ 61301:
/*!****************************************************************************************!*\
  !*** ./src/app/views/shared/skeleton-loader/skeleton-loader.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-skeleton-text\r\n    animated\r\n    class=\"skeleton\"\r\n    [ngStyle]=\"styleSkeleton()\"></ion-skeleton-text>\r\n";

/***/ }),

/***/ 34122:
/*!***************************************************************************!*\
  !*** ./src/app/views/shared/training/sets/sets.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form\r\n    [formGroup]=\"$any(form)\"\r\n    autocomplete=\"off\">\r\n    <ng-container *ngFor=\"let set of getSets(); let j = index\">\r\n        <ng-container [formGroupName]=\"j\">\r\n            <ion-grid>\r\n                <ion-row class=\"ion-text-center set-row\">\r\n                    <ion-col size=\"5\">\r\n                        <ion-item\r\n                            fill=\"outline\"\r\n                            [class.ion-item-error]=\"setIonComponentClass(\r\n                                set,\r\n                                isExerciseFormSubmitted$ | async,\r\n                                exerciseNameControl?.value,\r\n                                'weightLifted')\">\r\n                            <ion-label\r\n                                class=\"ion-label\"\r\n                                position=\"floating\"\r\n                                [class.ion-label-error]=\"setIonComponentClass(\r\n                                    set,\r\n                                    isExerciseFormSubmitted$ | async,\r\n                                    exerciseNameControl?.value,\r\n                                    'weightLifted')\">\r\n                                {{ 'training.new_training.weight_lifted' | translate }}\r\n                            </ion-label>\r\n                            <ion-input\r\n                                #weightLiftedEl\r\n                                type=\"number\"\r\n                                class=\"weight-lifted-input\"\r\n                                formControlName=\"weightLifted\"\r\n                                (ionChange)=\"onChangeSets(j)\"\r\n                                (ionBlur)=\"onTouched()\"></ion-input>\r\n                            <ion-text\r\n                                *ngIf=\"accessFormField('weightLifted', j).errors?.onlyNumbers &&\r\n                                    !accessFormField('weightLifted', j).errors?.min &&\r\n                                    !isLoading\"\r\n                                slot=\"error\">\r\n                                {{ 'training.new_training.errors.only_numbers' | translate }}\r\n                            </ion-text>\r\n                            <ion-text\r\n                                *ngIf=\"accessFormField('weightLifted', j).errors?.min &&\r\n                                    !accessFormField('weightLifted', j).errors?.onlyNumbers &&\r\n                                    !isLoading\"\r\n                                slot=\"error\">\r\n                                {{ 'training.new_training.errors.weight_lifted_min' | translate }}\r\n                            </ion-text>\r\n                            <ion-text\r\n                                *ngIf=\"accessFormField('weightLifted', j).errors?.max &&\r\n                                    !accessFormField('weightLifted', j).errors?.onlyNumbers &&\r\n                                    !isLoading\"\r\n                                slot=\"error\">\r\n                                {{ 'training.new_training.errors.weight_lifted_max' | translate }}\r\n                            </ion-text>\r\n                        </ion-item>\r\n                        <ion-text\r\n                            *ngIf=\"(set.errors?.weightLiftedRequired && ((isExerciseFormSubmitted$ | async) || exerciseNameControl?.value)) &&\r\n                                !accessFormField('weightLifted', j).errors?.min &&\r\n                                !isLoading\"\r\n                            class=\"error\">\r\n                            {{ 'training.new_training.errors.weight_lifted_required' | translate }}\r\n                        </ion-text>\r\n                        <ion-text\r\n                            *ngIf=\"set.errors?.setNotEntered\r\n                                && (isExerciseFormSubmitted$ | async)\r\n                                && !set.errors?.weightLiftedRequired\r\n                                && !set.errors?.repsRequired\r\n                                && !isLoading\"\r\n                            class=\"error\">\r\n                            {{ 'training.new_training.errors.set_required' | translate }}\r\n                        </ion-text>\r\n                        <ion-text\r\n                            *ngIf=\"accessFormField('weightLifted', j).value\r\n                                && accessFormField('weightLifted', j).valid\r\n                                && accessFormField('reps', j).value\r\n                                && accessFormField('reps', j).valid\r\n                                && !set.errors?.weightLiftedRequired\r\n                                && !set.errors?.repsRequired\r\n                                && !editMode\r\n                                && !isLoading\"\r\n                            class=\"set-saved-msg\">\r\n                            {{ 'training.new_training.set_saved' | translate }}\r\n                        </ion-text>\r\n                    </ion-col>\r\n                    <ion-col size=\"5\">\r\n                        <ion-item\r\n                            fill=\"outline\"\r\n                            [class.ion-item-error]=\"setIonComponentClass(\r\n                                set,\r\n                                isExerciseFormSubmitted$ | async,\r\n                                exerciseNameControl?.value,\r\n                                'reps')\">\r\n                            <ion-label\r\n                                class=\"ion-label\"\r\n                                position=\"floating\"\r\n                                [class.ion-label-error]=\"setIonComponentClass(\r\n                                    set,\r\n                                    isExerciseFormSubmitted$ | async,\r\n                                    exerciseNameControl?.value,\r\n                                    'reps')\">\r\n                                    {{ 'training.new_training.reps_performed' | translate }}\r\n                                </ion-label>\r\n                            <ion-input\r\n                                type=\"number\"\r\n                                class=\"reps-input\"\r\n                                formControlName=\"reps\"\r\n                                (ionChange)=\"onChangeSets(j)\"\r\n                                (ionBlur)=\"onTouched()\"></ion-input>\r\n                            <ion-text\r\n                                *ngIf=\"accessFormField('reps', j).errors?.pattern &&\r\n                                    !accessFormField('reps', j).errors?.onlyNumbers &&\r\n                                    !isLoading\"\r\n                                slot=\"error\">\r\n                                {{ 'training.new_training.errors.only_positive' | translate }}\r\n                            </ion-text>\r\n                            <ion-text\r\n                                *ngIf=\"accessFormField('reps', j).errors?.min &&\r\n                                    !accessFormField('reps', j).errors?.onlyNumbers &&\r\n                                    !accessFormField('reps', j).errors?.pattern &&\r\n                                    !isLoading\"\r\n                                slot=\"error\">\r\n                                {{ 'training.new_training.errors.reps_min' | translate }}\r\n                            </ion-text>\r\n                            <ion-text\r\n                                *ngIf=\"accessFormField('reps', j).errors?.max &&\r\n                                    !accessFormField('reps', j).errors?.onlyNumbers &&\r\n                                    !accessFormField('reps', j).errors?.pattern &&\r\n                                    !isLoading\"\r\n                                slot=\"error\">\r\n                                {{ 'training.new_training.errors.reps_max' | translate }}\r\n                            </ion-text>\r\n                        </ion-item>\r\n                        <ion-text\r\n                            *ngIf=\"(set.errors?.repsRequired &&\r\n                                ((isExerciseFormSubmitted$ | async) || exerciseNameControl?.value)) &&\r\n                                !isLoading\"\r\n                            class=\"error\">\r\n                            {{ 'training.new_training.errors.reps_required' | translate }}\r\n                        </ion-text>\r\n                    </ion-col>\r\n                    <ion-col\r\n                        size=\"2\"\r\n                        class=\"delete-set-col\">\r\n                        <ion-button\r\n                            class=\"button-no-background\"\r\n                            type=\"button\"\r\n                            [disabled]=\"j === 0 || isLoading\"\r\n                            (click)=\"deleteSet(j)\">\r\n                            <ion-icon\r\n                                name=\"trash-sharp\"\r\n                                color=\"danger\"\r\n                                class=\"delete-set-icon\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ng-container>\r\n    </ng-container>\r\n</form>\r\n<ion-grid>\r\n    <ion-row class=\"ion-text-center\">\r\n        <ion-col>\r\n            <ion-button\r\n                type=\"button\"\r\n                color=\"primary\"\r\n                [disabled]=\"!exerciseNameControl.value || form.errors?.setNotFilled\"\r\n                (click)=\"addSet()\">\r\n                {{ 'training.new_training.buttons.add_set' | translate }}\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 91068:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/shared/training/single-exercise/single-exercise.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form\r\n    class=\"form\"\r\n    [formGroup]=\"$any(form)\"\r\n    (ngSubmit)=\"onSubmit()\">\r\n    <ng-container\r\n        *ngFor=\"let group of getExercises(); let i = index\">\r\n        <ng-container [formGroupName]=\"i\">\r\n            <div\r\n                class=\"wrapper\"\r\n                [class.wrapper--not-loading]=\"!isLoading\">\r\n                <ng-container formGroupName=\"exerciseData\">\r\n                    <ion-grid>\r\n                        <ion-row class=\"ion-text-center exercise-row\">\r\n                            <ion-col size=\"10\">\r\n                                <ion-item fill=\"outline\">\r\n                                    <ion-label position=\"floating\">{{ 'training.new_training.pick_exercise' | translate }}</ion-label>\r\n                                    <ion-select\r\n                                        #exercisePicker\r\n                                        class=\"exercise-picker\"\r\n                                        interface=\"popover\"\r\n                                        formControlName=\"name\"\r\n                                        (ionChange)=\"onExerciseNameChange(i, exercisePicker)\">\r\n                                        <ion-select-option\r\n                                            *ngFor=\"let exercise of exercises$ | newTraining:i:exerciseChanged | async\"\r\n                                            [value]=\"exercise.name\">\r\n                                            {{ exercise.name | translate }}\r\n                                        </ion-select-option>\r\n                                    </ion-select>\r\n                                    <ion-note\r\n                                        *ngIf=\"accessFormGroup('exerciseData', 'name', i)?.errors?.required &&\r\n                                            ((accessFormGroup('exerciseData', 'name', i).touched || accessFormGroup('exerciseData', 'name', i).dirty) || (isSubmitted$$ | async)) &&\r\n                                            !isLoading\"\r\n                                        slot=\"error\">\r\n                                        {{ 'training.new_training.errors.exercise_name_required' | translate }}\r\n                                    </ion-note>\r\n                                </ion-item>\r\n                                <ion-note\r\n                                    *ngIf=\"form?.errors?.duplicateExerciseName &&\r\n                                        form?.errors?.duplicateExerciseName === accessFormGroup('exerciseData', 'name', i)?.value &&\r\n                                        !isLoading\"\r\n                                    class=\"error\">\r\n                                    {{ 'training.new_training.errors.exercise_name_duplicate' | translate }}\r\n                                </ion-note>\r\n                            </ion-col>\r\n                            <ion-col size=\"2\">\r\n                                <ion-icon\r\n                                    name=\"trash-bin-sharp\"\r\n                                    color=\"danger\"\r\n                                    (click)=\"deleteExercise(i, accessFormGroup('exerciseData', 'name', i).value)\"></ion-icon>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                </ng-container>\r\n                <bl-sets\r\n                    [formControl]=\"$any(form.controls[i].get('sets'))\"\r\n                    [isExerciseFormSubmitted$]=\"isSubmitted$$.asObservable()\"\r\n                    [exerciseStateChanged$]=\"exerciseStateChanged$$.asObservable()\"\r\n                    [exerciseNameControl]=\"accessFormGroup('exerciseData', 'name', i)\"\r\n                    [indexExercise]=\"i\"\r\n                    [isLoading]=\"isLoading\"\r\n                    [editMode]=\"editMode\"\r\n                    (setAdded)=\"onChangeSets($event)\"\r\n                    (setDeleted)=\"deleteSet($event)\"\r\n                    (formStateChanged)=\"onSetFormChange($event)\"></bl-sets>\r\n                <bl-total-weight\r\n                    formControlName=\"total\"\r\n                    [isLoading]=\"isLoading\"></bl-total-weight>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"(currentExerciseState$ | async) as currentExerciseState\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button\r\n                        type=\"button\"\r\n                        color=\"primary\"\r\n                        [disabled]=\"isAddingExercisesDisabled(\r\n                            currentExerciseState[0].length,\r\n                            currentExerciseState[1].length) || isApiLoading\"\r\n                        (click)=\"addExercise($event)\">\r\n                        {{ 'training.new_training.buttons.add_exercise' | translate }}\r\n                    </ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-button\r\n                        type=\"submit\"\r\n                        [disabled]=\"currentExerciseState[0]?.length === 0 || isApiLoading\">\r\n                        <ion-icon name=\"checkmark-sharp\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"at-least-one-exercise-txt\">\r\n                    <ion-text\r\n                        *ngIf=\"form?.errors?.emptyTraining && (isSubmitted$$ | async) && currentExerciseState[0]?.length === 0\"\r\n                        color=\"danger\"\r\n                        class=\"empty-training-msg\">\r\n                        {{ 'training.new_training.errors.at_least_one_exercise' | translate }}\r\n                    </ion-text>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ng-container>\r\n</form>\r\n";

/***/ }),

/***/ 9463:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/shared/training/total-weight/total-weight.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"!isLoading\">\r\n    <span class=\"wrapper\">\r\n        <strong class=\"key\">{{ 'training.new_training.total' | translate }}</strong>\r\n        <span class=\"value\">{{ value }}</span>\r\n    </span>\r\n</ng-container>\r\n";

/***/ }),

/***/ 89843:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.html?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"onCancel()\">\r\n                <ion-icon name=\"close\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-center\">{{ 'training.new_training.buttons.delete_exercise' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding ion-text-center\">\r\n    <ng-container *ngIf=\"(training$ | async) as training\">\r\n        <ion-text class=\"title\">{{ title$ | async }}</ion-text>\r\n        <ion-text class=\"created-at-key\">{{ 'training.past_trainings.created_at' | translate }}</ion-text>\r\n        <ion-text class=\"created-at-value\">\r\n            {{ dateCreated$ | async }}\r\n            <span class=\"dot\"></span>\r\n            <span class=\"time\">{{ ' ' + (timeCreated$ | async) }}</span>\r\n        </ion-text>\r\n        <div\r\n            class=\"exercises-wrapper\">\r\n            <span class=\"exercises-key\">{{ 'common.exercises' | translate }}</span>\r\n            <strong\r\n                *ngFor=\"let exercise of training.exercises\"\r\n                class=\"exercises-value\">\r\n                {{ exercise.exerciseData.name | translate }}\r\n            </strong>\r\n        </div>\r\n        <ion-button\r\n            class=\"delete-btn\"\r\n            color=\"primary\"\r\n            [disabled]=\"isLoading\"\r\n            (click)=\"deleteTraining(training._id)\">\r\n            {{ 'common.actions.delete' | translate }}\r\n        </ion-button>\r\n    </ng-container>\r\n</ion-content>\r\n";

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