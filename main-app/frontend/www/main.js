(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared/not-found-resolver.service */ 4183);
/* harmony import */ var _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/shared/not-found/not-found.component */ 326);







const routes = [{
  path: '',
  redirectTo: '/auth/login',
  pathMatch: 'full'
}, {
  path: 'auth',
  loadChildren: function () {
    var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 3970)).then(module => module.AuthModule);
    });

    return function loadChildren() {
      return _ref.apply(this, arguments);
    };
  }()
}, {
  path: 'training',
  loadChildren: function () {
    var _ref2 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "src_app_modules_training_training_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/training/training.module */ 9952)).then(module => module.TrainingModule);
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

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/enums/storage-items.enum */ 3236);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/shared/unsubscribe.service */ 523);
/* harmony import */ var _services_store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/store/training/new-training-store.service */ 8573);
/* harmony import */ var _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/store/training/past-trainings-store.service */ 8885);










let AppComponent = class AppComponent {
    constructor(_newTrainingStoreService, _pastTrainingsStoreService, _translateService, _unsubscribeService) {
        this._newTrainingStoreService = _newTrainingStoreService;
        this._pastTrainingsStoreService = _pastTrainingsStoreService;
        this._translateService = _translateService;
        this._unsubscribeService = _unsubscribeService;
    }
    ngOnInit() {
        this._newTrainingStoreService
            .keepTrainingState()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeService))
            .subscribe();
        this._pastTrainingsStoreService
            .keepStreamValues([
            _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.PAST_TRAININGS_SCROLL_WRAPPER,
            _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.QUERY_PARAMS,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeService))
            .subscribe();
        this._translateService.setDefaultLang('en');
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_4__.NewTrainingStoreService },
    { type: _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_5__.PastTrainingsStoreService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'bl-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
        providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeService],
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "httpLoaderFactory": () => (/* binding */ httpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3262);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/angular */ 5395);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 8189);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/error.interceptor */ 2379);
/* harmony import */ var _modules_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/navigation.module */ 3146);
/* harmony import */ var _services_errors_sentry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/errors/sentry.service */ 207);

















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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
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
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
                useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptor,
                multi: true,
            },
            {
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

/***/ 6988:
/*!*****************************************************!*\
  !*** ./src/app/constants/enums/model-roles.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogRoles": () => (/* binding */ DialogRoles)
/* harmony export */ });
var DialogRoles;
(function (DialogRoles) {
    DialogRoles["CANCEL"] = "CANCEL";
    DialogRoles["DELETE_TRAINING"] = "DELETE_TRAINING";
    DialogRoles["SELECT_DATE"] = "SELECT_DATE";
    DialogRoles["REORDER_EXERCISES"] = "REORDER_EXERCISES";
    DialogRoles["CHANGE_SET_CATEGORY"] = "CHANGE_SET_CATEGORY";
})(DialogRoles || (DialogRoles = {}));


/***/ }),

/***/ 3236:
/*!*******************************************************!*\
  !*** ./src/app/constants/enums/storage-items.enum.ts ***!
  \*******************************************************/
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
    StorageItems["PAST_TRAININGS_SCROLL_WRAPPER"] = "pastTrainingsScrollWrapper";
})(StorageItems || (StorageItems = {}));


/***/ }),

/***/ 1336:
/*!************************************************************!*\
  !*** ./src/app/constants/shared/default-language.const.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_LANGUAGE": () => (/* binding */ DEFAULT_LANGUAGE)
/* harmony export */ });
const DEFAULT_LANGUAGE = 'en';


/***/ }),

/***/ 6931:
/*!***************************************************************!*\
  !*** ./src/app/constants/shared/default-weight-unit.const.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_WEIGHT_UNIT": () => (/* binding */ DEFAULT_WEIGHT_UNIT)
/* harmony export */ });
const DEFAULT_WEIGHT_UNIT = 'kg';


/***/ }),

/***/ 3988:
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

/***/ 5938:
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

/***/ 9396:
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

/***/ 5675:
/*!**********************************************************!*\
  !*** ./src/app/constants/training/new-training.const.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_TRAINING": () => (/* binding */ EMPTY_TRAINING),
/* harmony export */   "TOTAL_INITIAL_WEIGHT": () => (/* binding */ TOTAL_INITIAL_WEIGHT),
/* harmony export */   "createEmptyExercise": () => (/* binding */ createEmptyExercise)
/* harmony export */ });
/* harmony import */ var _shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/default-weight-unit.const */ 6931);

const TOTAL_INITIAL_WEIGHT = 0;
const createEmptyExercise = (exercises) => ({
    exerciseData: {
        name: '',
        imageUrl: '',
        primaryMuscleGroup: '',
        translations: {
            hr: '',
            en: '',
        },
        availableSetCategories: ['freeWeighted'],
        selectedSetCategories: [],
    },
    sets: [],
    total: TOTAL_INITIAL_WEIGHT,
    availableExercises: [...exercises],
});
const EMPTY_TRAINING = {
    exercises: [createEmptyExercise([])],
    editMode: false,
    userId: '',
    _id: '',
    bodyweight: null,
    trainingDate: new Date().toISOString(),
    weightUnit: _shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_WEIGHT_UNIT,
};


/***/ }),

/***/ 1757:
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

/***/ 1543:
/*!*************************************************************!*\
  !*** ./src/app/directives/autofocus/autofocus.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutofocusDirective": () => (/* binding */ AutofocusDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);



let AutofocusDirective = class AutofocusDirective {
    constructor(ionInput) {
        this.ionInput = ionInput;
        this.duration = 350;
        this.firstTime = true;
    }
    ngAfterViewInit() {
        if (this.firstTime) {
            setTimeout(() => {
                this.ionInput?.setFocus();
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

/***/ 2638:
/*!**********************************************************!*\
  !*** ./src/app/directives/autofocus/autofocus.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutofocusModule": () => (/* binding */ AutofocusModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autofocus.directive */ 1543);



let AutofocusModule = class AutofocusModule {
};
AutofocusModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_autofocus_directive__WEBPACK_IMPORTED_MODULE_0__.AutofocusDirective],
        exports: [_autofocus_directive__WEBPACK_IMPORTED_MODULE_0__.AutofocusDirective],
    })
], AutofocusModule);



/***/ }),

/***/ 2343:
/*!***************************************************************!*\
  !*** ./src/app/directives/pagination/pagination.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationDirective": () => (/* binding */ PaginationDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


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

/***/ 8163:
/*!*************************************************************************!*\
  !*** ./src/app/directives/skeleton-loader/skeleton-loader.directive.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonLoaderDirective": () => (/* binding */ SkeletonLoaderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _views_shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/shared/skeleton-loader/skeleton-loader.component */ 8405);



let SkeletonLoaderDirective = class SkeletonLoaderDirective {
    constructor(_template, _viewContainerRef) {
        this._template = _template;
        this._viewContainerRef = _viewContainerRef;
        this.isLoading = false;
        this.size = 1;
    }
    ngOnChanges(changes) {
        if (changes?.isLoading) {
            this._viewContainerRef.clear();
            if (changes?.isLoading?.currentValue) {
                Array.from({ length: this.size }).forEach((_) => {
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

/***/ 3944:
/*!**********************************************************************!*\
  !*** ./src/app/directives/skeleton-loader/skeleton-loader.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonLoaderModule": () => (/* binding */ SkeletonLoaderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _skeleton_loader_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton-loader.directive */ 8163);



let SkeletonLoaderModule = class SkeletonLoaderModule {
};
SkeletonLoaderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_skeleton_loader_directive__WEBPACK_IMPORTED_MODULE_0__.SkeletonLoaderDirective],
        exports: [_skeleton_loader_directive__WEBPACK_IMPORTED_MODULE_0__.SkeletonLoaderDirective],
    })
], SkeletonLoaderModule);



/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _services_shared_preferences_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/shared/preferences.service */ 8476);
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store/auth/auth-store.service */ 8458);
/* harmony import */ var _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store/shared/preferences-store.service */ 7276);









let AuthGuard = class AuthGuard {
    constructor(_preferencesService, _preferencesStoreService, _authStoreService, _translateService, _router) {
        this._preferencesService = _preferencesService;
        this._preferencesStoreService = _preferencesStoreService;
        this._authStoreService = _authStoreService;
        this._translateService = _translateService;
        this._router = _router;
    }
    canLoad(_route) {
        return this._authStoreService.isAuth$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((isAuth) => {
            if (!isAuth) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this._authStoreService.autoLogin());
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(isAuth);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((isAuth) => {
            if (!isAuth) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(isAuth);
            }
            else {
                return this._authStoreService.loggedUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((loggedUser) => {
                    if (loggedUser) {
                        return this._preferencesService.getPreferences(loggedUser._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((preferences) => this._preferencesStoreService.emitPreferences(preferences)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((preferences) => this._translateService.use(preferences.languageCode || 'en')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((_) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(isAuth)));
                    }
                    else {
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(isAuth);
                    }
                }));
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((isAuth) => {
            if (!isAuth) {
                return this._router.createUrlTree(['/auth/login']);
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

/***/ 3899:
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

/***/ 5717:
/*!************************************************************************************!*\
  !*** ./src/app/helpers/training/past-trainings/map-past-trainings-dates.helper.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapDateInterval": () => (/* binding */ mapDateInterval)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 9377);

function mapDateInterval(response) {
    return {
        ...response,
        Value: {
            ...response.Value,
            Results: {
                ...response.Value.Results,
                Dates: {
                    StartDate: response?.Value?.Results?.Dates?.StartDate
                        ? (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(response.Value?.Results?.Dates?.StartDate))
                        : undefined,
                    EndDate: response?.Value?.Results?.Dates?.EndDate
                        ? (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(response.Value?.Results?.Dates?.EndDate))
                        : undefined,
                },
            },
        },
    };
}


/***/ }),

/***/ 8189:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store/auth/auth-store.service */ 8458);



let AuthInterceptor = class AuthInterceptor {
    constructor(authStoreService) {
        this.authStoreService = authStoreService;
    }
    intercept(request, next) {
        const token = this.authStoreService.getToken();
        const authRequest = request.clone({
            headers: request.headers.set('authorization', 'Bearer ' + token),
        });
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

/***/ 2379:
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/minimal */ 594);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/shared/message-duration.const */ 5938);
/* harmony import */ var _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shared/toast-controller.service */ 6467);









let ErrorInterceptor = class ErrorInterceptor {
    constructor(toastControllerService, translateService) {
        this.toastControllerService = toastControllerService;
        this.translateService = translateService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
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
                            if (/\d/.test(errorMessage)) {
                                errorMessage = errorMessage.substring(errorMessage.search(/\d/) + 2, errorMessage.length);
                            }
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

/***/ 9988:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/auth/login/login.component */ 2783);
/* harmony import */ var _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/auth/signup/signup.component */ 770);





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

/***/ 3970:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _services_api_auth_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api/auth/login.service */ 1211);
/* harmony import */ var _services_api_auth_signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/auth/signup.service */ 6935);
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/auth/login/login.component */ 2783);
/* harmony import */ var _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/auth/signup/signup.component */ 770);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.module */ 5601);
/* harmony import */ var _directives_autofocus_autofocus_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/autofocus/autofocus.module */ 2638);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ 9988);














const COMPONENTS = [_views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent, _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
];
const MY_IMPORTS = [_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__.AuthRoutingModule, _directives_autofocus_autofocus_module__WEBPACK_IMPORTED_MODULE_5__.AutofocusModule];
const SERVICES = [_services_api_auth_signup_service__WEBPACK_IMPORTED_MODULE_1__.SignupService, _services_api_auth_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService];
let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [...COMPONENTS],
        imports: [...EXTERNAL_IMPORTS, ...MY_IMPORTS],
        exports: [...COMPONENTS],
        providers: [...SERVICES],
    })
], AuthModule);



/***/ }),

/***/ 3146:
/*!**********************************************!*\
  !*** ./src/app/modules/navigation.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationModule": () => (/* binding */ NavigationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _views_navigation_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/navigation/preferences/preferences.component */ 6010);
/* harmony import */ var _views_navigation_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/navigation/side-nav/side-nav.component */ 2207);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.module */ 3970);









const COMPONENTS = [_views_navigation_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__.SideNavComponent, _views_navigation_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_0__.PreferencesComponent];
const EXTERNAL_IMPORTS = [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule];
const IMPORTS = [_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule];
let NavigationModule = class NavigationModule {
};
NavigationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [...COMPONENTS],
        imports: [...EXTERNAL_IMPORTS, ...IMPORTS],
        exports: [...COMPONENTS],
    })
], NavigationModule);



/***/ }),

/***/ 5601:
/*!******************************************!*\
  !*** ./src/app/modules/shared.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/pipes.module */ 5503);
/* harmony import */ var _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module */ 1515);
/* harmony import */ var _services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared/not-found-resolver.service */ 4183);
/* harmony import */ var _services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api/training/delete-training-action.service */ 4490);
/* harmony import */ var _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/shared/not-found/not-found.component */ 326);
/* harmony import */ var _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/shared/training/training-actions/delete-training-action/delete-training-action.component */ 4758);
/* harmony import */ var _views_shared_training_training_actions_more_training_action_more_training_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/shared/training/training-actions/more-training-action/more-training-action.component */ 5651);
/* harmony import */ var _views_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/shared/pagination/pagination.component */ 9320);
/* harmony import */ var _directives_pagination_pagination_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/pagination/pagination.directive */ 2343);
/* harmony import */ var _views_shared_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/shared/datetime-picker/datetime-picker.component */ 185);
/* harmony import */ var _views_shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/shared/skeleton-loader/skeleton-loader.component */ 8405);
/* harmony import */ var _directives_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/skeleton-loader/skeleton-loader.module */ 3944);
/* harmony import */ var _pipes_shared_sanitize_html_sanitize_html_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipes/shared/sanitize-html/sanitize-html.module */ 8487);



















const DIRECTIVES = [_directives_pagination_pagination_directive__WEBPACK_IMPORTED_MODULE_8__.PaginationDirective];
const COMPONENTS = [
    _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent,
    _views_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent,
    _views_shared_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_9__.DateTimePickerComponent,
    _views_shared_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_10__.SkeletonLoaderComponent,
];
const ACTION_COMPONENTS = [_views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_5__.DeleteTrainingActionComponent, _views_shared_training_training_actions_more_training_action_more_training_action_component__WEBPACK_IMPORTED_MODULE_6__.MoreTrainingActionComponent];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule,
];
const IMPORTS = [_pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_1__.ShowAllExercisesModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _directives_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_11__.SkeletonLoaderModule, _pipes_shared_sanitize_html_sanitize_html_module__WEBPACK_IMPORTED_MODULE_12__.SanitizeHtmlModule];
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        declarations: [...COMPONENTS, ...DIRECTIVES, ...ACTION_COMPONENTS],
        imports: [...EXTERNAL_IMPORTS, ...IMPORTS],
        exports: [...COMPONENTS],
        providers: [_services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_2__.NotFoundResolverService, _services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_3__.DeleteTrainingActionService],
    })
], SharedModule);



/***/ }),

/***/ 5503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _training_new_training_filter_available_exercises_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training/new-training/filter-available-exercises.pipe */ 4524);
/* harmony import */ var _training_past_trainings_map_training_actions_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training/past-trainings/map-training-actions.pipe */ 8999);




let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_training_new_training_filter_available_exercises_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterAvailableExercisesPipe, _training_past_trainings_map_training_actions_pipe__WEBPACK_IMPORTED_MODULE_1__.MapTrainingItemActionsPipe],
        exports: [_training_new_training_filter_available_exercises_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterAvailableExercisesPipe, _training_past_trainings_map_training_actions_pipe__WEBPACK_IMPORTED_MODULE_1__.MapTrainingItemActionsPipe],
    })
], PipesModule);



/***/ }),

/***/ 8487:
/*!********************************************************************!*\
  !*** ./src/app/pipes/shared/sanitize-html/sanitize-html.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SanitizeHtmlModule": () => (/* binding */ SanitizeHtmlModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanitize-html.pipe */ 8841);



let SanitizeHtmlModule = class SanitizeHtmlModule {
};
SanitizeHtmlModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SanitizePipe],
        exports: [_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SanitizePipe],
    })
], SanitizeHtmlModule);



/***/ }),

/***/ 8841:
/*!******************************************************************!*\
  !*** ./src/app/pipes/shared/sanitize-html/sanitize-html.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SanitizePipe": () => (/* binding */ SanitizePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4497);



let SanitizePipe = class SanitizePipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value) {
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
};
SanitizePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
SanitizePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({ name: 'sanitizeHtml' })
], SanitizePipe);



/***/ }),

/***/ 4524:
/*!********************************************************************************!*\
  !*** ./src/app/pipes/training/new-training/filter-available-exercises.pipe.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterAvailableExercisesPipe": () => (/* binding */ FilterAvailableExercisesPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let FilterAvailableExercisesPipe = class FilterAvailableExercisesPipe {
    transform(currentExerciseState, index) {
        return currentExerciseState[index].availableExercises;
    }
};
FilterAvailableExercisesPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterAvailableExercises' })
], FilterAvailableExercisesPipe);



/***/ }),

/***/ 8999:
/*!****************************************************************************!*\
  !*** ./src/app/pipes/training/past-trainings/map-training-actions.pipe.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapTrainingItemActionsPipe": () => (/* binding */ MapTrainingItemActionsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let MapTrainingItemActionsPipe = class MapTrainingItemActionsPipe {
    constructor() {
        this.actionToIcon = {
            delete: {
                icon: 'trash-sharp',
                tooltip: 'training.past_trainings.buttons.delete_training',
            },
            more: {
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

/***/ 1515:
/*!***********************************************************************************************!*\
  !*** ./src/app/pipes/training/past-trainings/show-all-exercises/show-all-exercises.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowAllExercisesModule": () => (/* binding */ ShowAllExercisesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _show_all_exercises_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-all-exercises.pipe */ 3437);



let ShowAllExercisesModule = class ShowAllExercisesModule {
};
ShowAllExercisesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_show_all_exercises_pipe__WEBPACK_IMPORTED_MODULE_0__.ShowAllExercisesPipe],
        exports: [_show_all_exercises_pipe__WEBPACK_IMPORTED_MODULE_0__.ShowAllExercisesPipe],
    })
], ShowAllExercisesModule);



/***/ }),

/***/ 3437:
/*!*********************************************************************************************!*\
  !*** ./src/app/pipes/training/past-trainings/show-all-exercises/show-all-exercises.pipe.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowAllExercisesPipe": () => (/* binding */ ShowAllExercisesPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 6942);




let ShowAllExercisesPipe = class ShowAllExercisesPipe {
    constructor(translateService) {
        this.translateService = translateService;
    }
    transform(training) {
        return this.translateService
            .stream(training.exercises?.map((x) => x?.exerciseData.name) ?? [])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((value) => {
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

/***/ 279:
/*!***************************************************!*\
  !*** ./src/app/services/api/auth/auth.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth/auth-store.service */ 8458);








let AuthService = class AuthService {
  constructor(_http, _router, _authStoreService) {
    this._http = _http;
    this._router = _router;
    this._authStoreService = _authStoreService;
  }

  signup(language, weightUnit, email, password, confirmPassword) {
    const signupData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    const preferences = {
      languageCode: language,
      weightUnit: weightUnit
    };
    return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/auth/signup', {
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
    return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/auth/login', authData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)( /*#__PURE__*/function () {
      var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        if (response.Token) {
          _this._authStoreService.emitLoggedUser(response);

          _this._authStoreService.emitIsAuth(true);

          _this._authStoreService.setToken(response.Token);

          const expiresInDuration = response.ExpiresIn;

          _this._authStoreService.setAuthTimer(expiresInDuration);

          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          yield _this._authStoreService.saveLS(_this._authStoreService.getToken(), expirationDate, response._id);
          yield _this._router.navigate(['/training/new-training']);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_2__.AuthStoreService
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 1211:
/*!****************************************************!*\
  !*** ./src/app/services/api/auth/login.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);




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

/***/ 6935:
/*!*****************************************************!*\
  !*** ./src/app/services/api/auth/signup.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupService": () => (/* binding */ SignupService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);




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

/***/ 4490:
/*!*************************************************************************!*\
  !*** ./src/app/services/api/training/delete-training-action.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteTrainingActionService": () => (/* binding */ DeleteTrainingActionService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-past-trainings-dates.helper */ 5717);
/* harmony import */ var _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../views/shared/training/training-actions/delete-training-action/delete-training-action.component */ 4758);












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

/***/ 207:
/*!***************************************************!*\
  !*** ./src/app/services/errors/sentry.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SentryService": () => (/* binding */ SentryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/minimal */ 594);



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

/***/ 4786:
/*!***************************************************************!*\
  !*** ./src/app/services/shared/loading-controller.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingControllerService": () => (/* binding */ LoadingControllerService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





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

/***/ 4183:
/*!***************************************************************!*\
  !*** ./src/app/services/shared/not-found-resolver.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundResolverService": () => (/* binding */ NotFoundResolverService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/enums/storage-items.enum */ 3236);





let NotFoundResolverService = class NotFoundResolverService {
    resolve(_route, _state) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_1__.StorageItems.TRAINING_STATE }));
    }
};
NotFoundResolverService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], NotFoundResolverService);



/***/ }),

/***/ 8476:
/*!********************************************************!*\
  !*** ./src/app/services/shared/preferences.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesService": () => (/* binding */ PreferencesService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/shared/message-duration.const */ 5938);
/* harmony import */ var _store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/shared/preferences-store.service */ 7276);
/* harmony import */ var _store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/training/new-training-store.service */ 8573);
/* harmony import */ var _toast_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-controller.service */ 6467);












let PreferencesService = class PreferencesService {
  constructor(_http, _translateService, _toastControllerService, _preferencesStoreService, _newTrainingStoreService) {
    this._http = _http;
    this._translateService = _translateService;
    this._toastControllerService = _toastControllerService;
    this._preferencesStoreService = _preferencesStoreService;
    this._newTrainingStoreService = _newTrainingStoreService;
  }

  getPreferences(userId) {
    return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + `/preferences/${userId}`);
  }

  setPreferences(preferences, preferenceChanged) {
    var _this = this;

    const apiPreferences = {
      languageCode: preferences.languageCode,
      weightUnit: preferences.weightUnit,
      showByPeriod: preferences.showByPeriod
    };
    let apiResponse;
    return this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + `/preferences/${preferences.userId}`, {
      preferences: apiPreferences,
      preferenceChanged: preferenceChanged
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(response => {
      apiResponse = response;
      return this._translateService.use(preferences.languageCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)( /*#__PURE__*/function () {
        var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
          _this._preferencesStoreService.emitPreferences(preferences);

          if (response.Message) {
            yield _this._toastControllerService.displayToast({
              message: _this._translateService.instant(response.Message),
              duration: _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_DURATION.GENERAL,
              color: 'primary'
            });
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(_ => {
        if (preferenceChanged === 'weightUnit') {
          return this._newTrainingStoreService.updateWeightUnit(apiPreferences.weightUnit).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(apiResponse)));
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(apiResponse);
      }));
    }));
  }

};

PreferencesService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
}, {
  type: _toast_controller_service__WEBPACK_IMPORTED_MODULE_5__.ToastControllerService
}, {
  type: _store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_3__.PreferencesStoreService
}, {
  type: _store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_4__.NewTrainingStoreService
}];

PreferencesService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
  providedIn: 'root'
})], PreferencesService);


/***/ }),

/***/ 6467:
/*!*************************************************************!*\
  !*** ./src/app/services/shared/toast-controller.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastControllerService": () => (/* binding */ ToastControllerService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





let ToastControllerService = class ToastControllerService {
  constructor(translateService, toastController) {
    this.translateService = translateService;
    this.toastController = toastController;
  }

  displayToast(options) {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: _this.translateService.instant(options?.message),
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

/***/ 523:
/*!********************************************************!*\
  !*** ./src/app/services/shared/unsubscribe.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeService": () => (/* binding */ UnsubscribeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);



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

/***/ 8458:
/*!***********************************************************!*\
  !*** ./src/app/services/store/auth/auth-store.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthStoreService": () => (/* binding */ AuthStoreService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/enums/storage-items.enum */ 3236);








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
    return { ...this._loggedUser$$.getValue()
    };
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
      key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.USER_DATA
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(storedData => {
      if (!storedData || !storedData?.value) {
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
        key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.USER_DATA,
        value: JSON.stringify(userData)
      });
    })();
  }

  clearData() {
    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
        key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.USER_DATA
      });
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
        key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.TRAINING_STATE
      });
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
        key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.QUERY_PARAMS
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

/***/ 7276:
/*!********************************************************************!*\
  !*** ./src/app/services/store/shared/preferences-store.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesStoreService": () => (/* binding */ PreferencesStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);



let PreferencesStoreService = class PreferencesStoreService {
    constructor() {
        this._preferencesChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.preferencesChanged$ = this._preferencesChanged$$.asObservable();
    }
    emitPreferences(preferences) {
        this._preferencesChanged$$.next(preferences);
    }
    getPreferences() {
        return { ...this._preferencesChanged$$.getValue() };
    }
};
PreferencesStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], PreferencesStoreService);



/***/ }),

/***/ 1102:
/*!***************************************************************!*\
  !*** ./src/app/services/store/shared/shared-store.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedStoreService": () => (/* binding */ SharedStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);



let SharedStoreService = class SharedStoreService {
    constructor() {
        this._editingTraining$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.editingTraining$ = this._editingTraining$$.asObservable();
        this.deletedTraining$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._dayClicked$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    }
    completeDayClicked() {
        this._dayClicked$.complete();
    }
    emitDayClicked(dayClicked) {
        this._dayClicked$.next(dayClicked);
    }
    getDayClickedDate() {
        return this._dayClicked$.getValue();
    }
    emitEditingTraining(editMode) {
        this._editingTraining$$.next(editMode);
    }
};
SharedStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], SharedStoreService);



/***/ }),

/***/ 8220:
/*!********************************************************************!*\
  !*** ./src/app/services/store/training/exercises-store.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercisesStoreService": () => (/* binding */ ExercisesStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);



let ExercisesStoreService = class ExercisesStoreService {
    constructor() {
        this._allExercisesState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.allExercisesState$ = this._allExercisesState$.asObservable();
    }
    emitAllExercises(exercises) {
        this._allExercisesState$.next(exercises);
    }
};
ExercisesStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], ExercisesStoreService);



/***/ }),

/***/ 8573:
/*!***********************************************************************!*\
  !*** ./src/app/services/store/training/new-training-store.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTrainingStoreService": () => (/* binding */ NewTrainingStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/training/new-training.const */ 5675);
/* harmony import */ var _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/enums/storage-items.enum */ 3236);
/* harmony import */ var _shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/preferences-store.service */ 7276);
/* harmony import */ var _constants_shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/shared/default-weight-unit.const */ 6931);
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/is-never-check.helper */ 3899);
/* harmony import */ var _exercises_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercises-store.service */ 8220);











let NewTrainingStoreService = class NewTrainingStoreService {
    constructor(_preferencesStoreService, _exercisesStoreService) {
        this._preferencesStoreService = _preferencesStoreService;
        this._exercisesStoreService = _exercisesStoreService;
        this._trainingState$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(_constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_1__.EMPTY_TRAINING);
        this.trainingState$ = this._trainingState$.asObservable();
    }
    getCurrentTrainingState() {
        return { ...this._trainingState$.getValue() };
    }
    updateWeightUnit(weightUnit) {
        return this._trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((trainingState) => {
            const updatedTraining = {
                ...trainingState,
                weightUnit,
            };
            return this.saveTrainingData(updatedTraining);
        }));
    }
    updateTrainingDate(trainingDate) {
        return this._trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((trainingState) => {
            const updatedTraining = {
                ...trainingState,
                trainingDate,
            };
            return this.saveTrainingData(updatedTraining);
        }));
    }
    updateBodyweight(bodyweight) {
        return this._trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((trainingState) => {
            const updatedTraining = {
                ...trainingState,
                bodyweight,
                exercises: [...trainingState.exercises].map((exercise) => {
                    let total = 0;
                    exercise.sets.forEach((set, index) => {
                        switch (exercise.exerciseData.selectedSetCategories[index]) {
                            case 'freeWeighted': {
                                total = total + set.weight * set.reps;
                                break;
                            }
                            case 'dynamicBodyweight': {
                                total = total + set.reps * bodyweight;
                                break;
                            }
                            case 'dynamicWeighted': {
                                total = total + (bodyweight + set.weight) * set.reps;
                                break;
                            }
                        }
                    });
                    return {
                        ...exercise,
                        total,
                    };
                }),
            };
            return updatedTraining;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((updatedTraining) => this.saveTrainingData(updatedTraining)));
    }
    updatePrimarySetCategory(indexExercise, indexSet, setCategory) {
        return this._trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((trainingState) => {
            let updatedSet;
            switch (setCategory) {
                case 'freeWeighted':
                case 'dynamicWeighted': {
                    updatedSet = { setNumber: indexSet + 1, weight: null, reps: null };
                    break;
                }
                case 'dynamicBodyweight': {
                    updatedSet = { setNumber: indexSet + 1, reps: null };
                    break;
                }
                case 'staticBodyweight': {
                    //TODO: BL-128
                    break;
                }
                case 'staticWeighted': {
                    //TODO: BL-123
                    break;
                }
                default: {
                    (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_5__.isNeverCheck)(setCategory);
                }
            }
            const updatedTraining = {
                ...trainingState,
                exercises: [...trainingState.exercises].map((exercise, i) => {
                    if (indexExercise === i) {
                        return {
                            ...exercise,
                            exerciseData: {
                                ...exercise.exerciseData,
                                selectedSetCategories: [
                                    ...exercise.exerciseData.selectedSetCategories,
                                ].map((category, j) => {
                                    if (indexSet === j) {
                                        return setCategory;
                                    }
                                    return category;
                                }),
                            },
                            sets: [...exercise.sets].map((set, k) => {
                                if (indexSet === k) {
                                    return updatedSet;
                                }
                                return set;
                            }),
                        };
                    }
                    return exercise;
                }),
            };
            return updatedTraining;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.concatMap)((updatedTraining) => this.saveTrainingData(updatedTraining)));
    }
    addSet(indexExercise, setCategory, setNumber) {
        return this._trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((trainingState) => {
            const updatedTraining = {
                ...trainingState,
                exercises: [...trainingState.exercises].map((exercise, i) => {
                    if (i === indexExercise) {
                        let set;
                        switch (setCategory) {
                            case 'freeWeighted':
                            case 'dynamicWeighted': {
                                set = { setNumber, weight: null, reps: null };
                                break;
                            }
                            case 'dynamicBodyweight': {
                                set = { setNumber, reps: null };
                                break;
                            }
                            case 'staticBodyweight': {
                                //TODO: BL-128
                                break;
                            }
                            case 'staticWeighted': {
                                //TODO: BL-123
                                break;
                            }
                            default: {
                                (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_5__.isNeverCheck)(setCategory);
                            }
                        }
                        return {
                            ...exercise,
                            sets: [...exercise.sets, set],
                            exerciseData: {
                                ...exercise.exerciseData,
                                selectedSetCategories: [
                                    ...exercise.exerciseData.selectedSetCategories,
                                    setCategory,
                                ],
                            },
                        };
                    }
                    return exercise;
                }),
            };
            return updatedTraining;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.concatMap)((updatedTraining) => this.saveTrainingData(updatedTraining).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((_) => setCategory))));
    }
    deleteSet(indexExercise, indexSet, newTotal) {
        return this._trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((trainingState) => {
            const updatedTraining = {
                ...trainingState,
                exercises: [...trainingState.exercises].map((exercise, i) => {
                    if (i === indexExercise) {
                        return {
                            ...exercise,
                            sets: [...exercise.sets]
                                .filter((_set, i) => i !== indexSet)
                                .map((set) => {
                                if (set.setNumber > indexSet + 1) {
                                    return {
                                        ...set,
                                        setNumber: set.setNumber - 1,
                                    };
                                }
                                return set;
                            }),
                            total: newTotal,
                            exerciseData: {
                                ...exercise.exerciseData,
                                selectedSetCategories: exercise.exerciseData.selectedSetCategories.filter((_category, i) => i !== indexSet),
                            },
                        };
                    }
                    return exercise;
                }),
            };
            return updatedTraining;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.concatMap)((updatedTraining) => this.saveTrainingData(updatedTraining)));
    }
    pushToAvailableExercises(currentTrainingState, toBeAddedExercise) {
        let updatedTraining = { ...currentTrainingState };
        updatedTraining = {
            ...updatedTraining,
            exercises: [...updatedTraining.exercises].map((exercise) => {
                const isDeletedExerciseInAE = exercise.availableExercises.find((exercise) => exercise._id === toBeAddedExercise[0]._id);
                if (!isDeletedExerciseInAE) {
                    return {
                        ...exercise,
                        availableExercises: [
                            ...exercise.availableExercises,
                            toBeAddedExercise[0],
                        ].sort(this.compare),
                    };
                }
                return exercise;
            }),
        };
        return this.saveTrainingData(updatedTraining);
    }
    deleteExercise(currentTrainingState, deletedExerciseName, indexExercise) {
        let updatedTraining;
        if (deletedExerciseName) {
            return this._exercisesStoreService.allExercisesState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((value) => value.Value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)((_) => {
                updatedTraining = {
                    ...currentTrainingState,
                    exercises: currentTrainingState.exercises.filter((exercise) => exercise.exerciseData.name !== deletedExerciseName),
                };
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((allExercises) => [
                updatedTraining,
                allExercises.filter((exercise) => exercise.name === deletedExerciseName),
            ]));
        }
        else {
            updatedTraining = {
                ...currentTrainingState,
                exercises: currentTrainingState.exercises.filter((_exercise, index) => index !== indexExercise),
            };
            const response = [updatedTraining, []];
            return this.saveTrainingData(updatedTraining).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((_) => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(response)));
        }
    }
    setsChanged(trainingData) {
        let updatedTraining = this._trainingState$.getValue();
        const indexOfChangedExercise = updatedTraining.exercises.findIndex((singleExercise) => singleExercise.exerciseData.name === trainingData.exerciseName);
        const indexFoundSet = updatedTraining.exercises[indexOfChangedExercise].sets.findIndex((set) => set.setNumber === trainingData.setNumber);
        if (indexFoundSet > -1) {
            updatedTraining = {
                ...updatedTraining,
                exercises: [...updatedTraining.exercises].map((exercise, i) => {
                    if (i === indexOfChangedExercise) {
                        return {
                            ...exercise,
                            sets: [...exercise.sets].map((set, j) => {
                                if (j === indexFoundSet) {
                                    let updatedSet;
                                    if (trainingData?.weight) {
                                        updatedSet = {
                                            ...set,
                                            weight: trainingData.weight,
                                            reps: trainingData.reps,
                                        };
                                    }
                                    else {
                                        updatedSet = {
                                            ...set,
                                            reps: trainingData.reps,
                                        };
                                    }
                                    return updatedSet;
                                }
                                return set;
                            }),
                            total: trainingData.total,
                        };
                    }
                    return exercise;
                }),
            };
        }
        else {
            let newSet;
            if (trainingData.weight) {
                newSet = {
                    setNumber: trainingData.setNumber,
                    weight: trainingData.weight,
                    reps: trainingData.reps,
                };
            }
            else {
                newSet = {
                    setNumber: trainingData.setNumber,
                    reps: trainingData.reps,
                };
            }
            updatedTraining = {
                ...updatedTraining,
                exercises: [...updatedTraining.exercises].map((exercise, i) => {
                    if (i === indexOfChangedExercise) {
                        return {
                            ...exercise,
                            sets: [...exercise.sets, newSet],
                            total: trainingData.total,
                        };
                    }
                    return exercise;
                }),
            };
        }
        return this.saveTrainingData(updatedTraining);
    }
    restartSets(indexExercise, setCategory) {
        return this._trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((currentTrainingState) => {
            let set;
            switch (setCategory) {
                case 'freeWeighted':
                case 'dynamicWeighted': {
                    set = { setNumber: 1, weight: null, reps: null };
                    break;
                }
                case 'dynamicBodyweight': {
                    set = { setNumber: 1, reps: null };
                    break;
                }
                case 'staticBodyweight': {
                    //TODO: BL-128
                    break;
                }
                case 'staticWeighted': {
                    //TODO: BL-123
                    break;
                }
                default: {
                    (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_5__.isNeverCheck)(setCategory);
                }
            }
            const updatedTraining = {
                ...currentTrainingState,
                exercises: [...currentTrainingState.exercises].map((exercise, index) => {
                    if (index === indexExercise) {
                        return {
                            ...exercise,
                            sets: [set],
                            total: _constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_1__.TOTAL_INITIAL_WEIGHT,
                        };
                    }
                    return exercise;
                }),
            };
            return updatedTraining;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.concatMap)((updatedTraining) => this.saveTrainingData(updatedTraining)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.concatMap)((_) => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(setCategory)));
    }
    addNewExercise(alreadyUsedExercises) {
        return this._exercisesStoreService.allExercisesState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((streamData) => streamData.Value.filter((exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.concatMap)((availableExercises) => this.updateTrainingState(undefined, availableExercises)));
    }
    updateExerciseChoices(selectedExercise, selectedIndex, trainingToBeUpdated, selectedExerciseData) {
        const previousSelectedExercise = trainingToBeUpdated.exercises[selectedIndex].exerciseData;
        const updatedTraining = {
            ...trainingToBeUpdated,
            exercises: [...trainingToBeUpdated.exercises].map((exercise, i) => {
                if (i === selectedIndex) {
                    return {
                        ...exercise,
                        exerciseData: selectedExerciseData,
                    };
                }
                else {
                    let availableExercises;
                    if (previousSelectedExercise.name) {
                        availableExercises = [
                            ...exercise.availableExercises,
                            previousSelectedExercise,
                        ].sort(this.compare);
                    }
                    else {
                        availableExercises = [...exercise.availableExercises].sort(this.compare);
                    }
                    return {
                        ...exercise,
                        availableExercises: availableExercises.filter((exercise) => exercise.name !== selectedExercise),
                    };
                }
            }),
        };
        return this.saveTrainingData(updatedTraining);
    }
    keepTrainingState() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.TRAINING_STATE })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((storedData) => {
            if (!storedData || !storedData?.value) {
                return false;
            }
            const trainingState = JSON.parse(storedData.value);
            this._trainingState$.next({ ...trainingState });
            return true;
        }));
    }
    updateTrainingState(newTrainingState, exercises, restartAll, userId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([
            this.trainingState$,
            this._preferencesStoreService.preferencesChanged$,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([currentTrainingState, currentPreferences]) => {
            let updatedTraining;
            if (exercises) {
                updatedTraining = currentTrainingState;
                if (restartAll) {
                    const weightUnit = currentPreferences?.weightUnit ?? _constants_shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_WEIGHT_UNIT;
                    updatedTraining = {
                        ..._constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_1__.EMPTY_TRAINING,
                        userId,
                        weightUnit,
                    };
                }
                updatedTraining = {
                    ...updatedTraining,
                    exercises: [...updatedTraining.exercises, (0,_constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_1__.createEmptyExercise)(exercises)],
                };
            }
            else {
                updatedTraining = newTrainingState;
            }
            return updatedTraining;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((updatedTraining) => this.saveTrainingData(updatedTraining)));
    }
    saveTrainingData(updatedTraining) {
        this._trainingState$.next(updatedTraining);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
            key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.TRAINING_STATE,
            value: JSON.stringify(updatedTraining),
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1));
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
NewTrainingStoreService.ctorParameters = () => [
    { type: _shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_3__.PreferencesStoreService },
    { type: _exercises_store_service__WEBPACK_IMPORTED_MODULE_6__.ExercisesStoreService }
];
NewTrainingStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Injectable)({ providedIn: 'root' })
], NewTrainingStoreService);



/***/ }),

/***/ 8885:
/*!*************************************************************************!*\
  !*** ./src/app/services/store/training/past-trainings-store.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastTrainingsStoreService": () => (/* binding */ PastTrainingsStoreService)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/enums/storage-items.enum */ 3236);







let PastTrainingsStoreService = class PastTrainingsStoreService {
  constructor() {
    this._pastTrainingsQueryParams$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.pastTrainingsQueryParams$ = this._pastTrainingsQueryParams$$.asObservable();
    this._pastTrainingsWrapperScroll$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
    this.pastTrainingsWrapperScroll$ = this._pastTrainingsWrapperScroll$$.asObservable();
  }

  emitPastTrainingsQueryParams(params) {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._pastTrainingsQueryParams$$.next(params);

      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
        key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.QUERY_PARAMS,
        value: JSON.stringify(params)
      });
    })();
  }

  emitWrapperScroll(scrollTop) {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._pastTrainingsWrapperScroll$$.next(scrollTop);

      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
        key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.PAST_TRAININGS_SCROLL_WRAPPER,
        value: JSON.stringify(scrollTop)
      });
    })();
  }

  keepStreamValues(storageItems) {
    const storageStreams = [];

    for (const key of storageItems) {
      storageStreams.push((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({
        key
      })));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(storageStreams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(storedData => {
      const isStoredData = storedData.every(item => !!item?.value);

      if (!storedData || !storedData.length || !isStoredData) {
        return false;
      }

      storedData.forEach((item, index) => {
        if (item?.value) {
          const parsedData = JSON.parse(item.value);
          const selectedStorageItem = storageItems.find((_item, i) => i === index);

          switch (selectedStorageItem) {
            case 'pastTrainingsScrollWrapper':
              {
                this._pastTrainingsWrapperScroll$$.next(parsedData);

                break;
              }

            case 'queryParams':
              {
                this._pastTrainingsQueryParams$$.next(parsedData);

                break;
              }
          }
        }
      });
      return true;
    }));
  }

};
PastTrainingsStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], PastTrainingsStoreService);


/***/ }),

/***/ 1618:
/*!****************************************************!*\
  !*** ./src/app/validators/auth/auth.validators.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEmailAvailable": () => (/* binding */ isEmailAvailable),
/* harmony export */   "passwordFitsEmail": () => (/* binding */ passwordFitsEmail),
/* harmony export */   "samePasswords": () => (/* binding */ samePasswords)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4661);


function passwordFitsEmail(loginService, changeDetectorRef) {
    return (group) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(350).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((_) => {
        if (group) {
            const email = group.get('email')?.value;
            const password = group.get('password')?.value;
            if (!email || !password) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
            }
            return loginService.passwordFitsEmail(email, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
                if (!response) {
                    return { passwordFitsEmail: true };
                }
                return null;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((_) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => changeDetectorRef.detectChanges()));
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
        }
    }));
}
function isEmailAvailable(signupService, changeDetectorRef) {
    return (control) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(350).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((_) => {
        if (control) {
            const email = control?.value;
            if (!email) {
                return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
            }
            return signupService.getEmails(email.trim().toLowerCase()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
                if (!response) {
                    return { availableEmail: true };
                }
                return null;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((_) => rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => changeDetectorRef.detectChanges()));
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
        }
    }));
}
function samePasswords() {
    return (group) => {
        if (group) {
            const password = group.get('password')?.value;
            const confirmPassword = group.get('confirmPassword')?.value;
            if (!password || !confirmPassword) {
                return null;
            }
            else {
                if (password !== confirmPassword) {
                    return { equalPass: true };
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
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.html?ngResource */ 3327);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 2767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/auth/auth.service */ 279);
/* harmony import */ var _services_api_auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/auth/login.service */ 1211);
/* harmony import */ var _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validators/auth/auth.validators */ 1618);
/* harmony import */ var _constants_shared_ion_focus_durations_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/shared/ion-focus-durations.const */ 3988);
/* harmony import */ var _services_shared_loading_controller_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shared/loading-controller.service */ 4786);














let LoginComponent = class LoginComponent {
  constructor(_loginService, _authService, _loadingControllerService, _router, _changeDetectorRef) {
    this._loginService = _loginService;
    this._authService = _authService;
    this._loadingControllerService = _loadingControllerService;
    this._router = _router;
    this._changeDetectorRef = _changeDetectorRef;
    this.isLoading = false;
    this.focusDuration = _constants_shared_ion_focus_durations_const__WEBPACK_IMPORTED_MODULE_6__.IonFocusDurations.LOGIN;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(20)])
    }, {
      asyncValidators: _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_5__.passwordFitsEmail(this._loginService, this._changeDetectorRef)
    });
  }

  onSubmit() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.form.valid) {
        return;
      }

      _this.isLoading = true;
      yield _this._loadingControllerService.displayLoader({
        message: 'auth.logging_in'
      });

      _this._authService.login(_this.form.controls.email.value, _this.form.controls.password.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_ => rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
        yield _this._loadingControllerService.dismissLoader();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          if (response) {
            yield _this._router.navigate(['/training/new-training']);
          }
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

};

LoginComponent.ctorParameters = () => [{
  type: _services_api_auth_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService
}, {
  type: _services_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _services_shared_loading_controller_service__WEBPACK_IMPORTED_MODULE_7__.LoadingControllerService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef
}];

LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'bl-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginComponent);


/***/ }),

/***/ 770:
/*!*******************************************************!*\
  !*** ./src/app/views/auth/signup/signup.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.html?ngResource */ 6927);
/* harmony import */ var _signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.scss?ngResource */ 5431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/shared/message-duration.const */ 5938);
/* harmony import */ var _services_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/auth/auth.service */ 279);
/* harmony import */ var _services_api_auth_signup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api/auth/signup.service */ 6935);
/* harmony import */ var _services_shared_loading_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared/loading-controller.service */ 4786);
/* harmony import */ var _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shared/toast-controller.service */ 6467);
/* harmony import */ var _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../validators/auth/auth.validators */ 1618);
/* harmony import */ var _constants_shared_ion_focus_durations_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants/shared/ion-focus-durations.const */ 3988);
/* harmony import */ var _constants_shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/shared/default-weight-unit.const */ 6931);
/* harmony import */ var _constants_shared_default_language_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../constants/shared/default-language.const */ 1336);



















let SignupComponent = class SignupComponent {
  constructor(_authService, _signupService, _translateService, _loadingControllerService, _toastControllerService, _changeDetectorRef, _router) {
    this._authService = _authService;
    this._signupService = _signupService;
    this._translateService = _translateService;
    this._loadingControllerService = _loadingControllerService;
    this._toastControllerService = _toastControllerService;
    this._changeDetectorRef = _changeDetectorRef;
    this._router = _router;
    this.isLoading = false;
    this.focusDuration = _constants_shared_ion_focus_durations_const__WEBPACK_IMPORTED_MODULE_9__.IonFocusDurations.SIGNUP;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      language: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(_constants_shared_default_language_const__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LANGUAGE, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      weightUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(_constants_shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_10__.DEFAULT_WEIGHT_UNIT, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        asyncValidators: [_validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_8__.isEmailAvailable(this._signupService, this._changeDetectorRef)]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(20)]),
      confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(20)])
    }, {
      validators: _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_8__.samePasswords()
    });
  }

  onSubmit() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.form.valid) {
        return;
      }

      _this.isLoading = true;
      yield _this._loadingControllerService.displayLoader({
        message: 'auth.signing_in'
      });

      _this._authService.signup(_this.form.controls.language.value, _this.form.controls.weightUnit.value, _this.form.controls.email.value, _this.form.controls.password.value, _this.form.controls.confirmPassword.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(_ => rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.finalize)( /*#__PURE__*/(0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
        yield _this._loadingControllerService.dismissLoader();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          if (response.Success) {
            yield _this._toastControllerService.displayToast({
              message: _this._translateService.instant(response.Message),
              duration: _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_DURATION.GENERAL,
              color: response.Success ? 'primary' : 'danger'
            });
            yield _this._router.navigate(['/auth/login']);
          }
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

};

SignupComponent.ctorParameters = () => [{
  type: _services_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _services_api_auth_signup_service__WEBPACK_IMPORTED_MODULE_5__.SignupService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService
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
  styles: [_signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignupComponent);


/***/ }),

/***/ 6010:
/*!***********************************************************************!*\
  !*** ./src/app/views/navigation/preferences/preferences.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesComponent": () => (/* binding */ PreferencesComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _preferences_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferences.component.html?ngResource */ 1440);
/* harmony import */ var _preferences_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preferences.component.scss?ngResource */ 8770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _services_shared_preferences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/preferences.service */ 8476);
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/store/auth/auth-store.service */ 8458);
/* harmony import */ var _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/store/shared/preferences-store.service */ 7276);










let PreferencesComponent = class PreferencesComponent {
  constructor(preferencesStoreService, authStoreService, preferencesService, popoverController, menuController) {
    this.preferencesStoreService = preferencesStoreService;
    this.authStoreService = authStoreService;
    this.preferencesService = preferencesService;
    this.popoverController = popoverController;
    this.menuController = menuController;
    this.preferenceType = 'language';
    this.languageData = [{
      LanguageCode: 'en',
      ImageUrl: '../../../../assets/images/flags/united-kingdom.png',
      LanguageName: 'languages.english'
    }, {
      LanguageCode: 'hr',
      ImageUrl: '../../../../assets/images/flags/croatia.png',
      LanguageName: 'languages.croatian'
    }];
    this.unitData = [{
      UnitName: 'units.kilograms',
      WeightUnit: 'kg'
    }, {
      UnitName: 'units.pounds',
      WeightUnit: 'lbs'
    }];
  }

  changePreference(preference) {
    var _this = this;

    const currentPreferences = this.preferencesStoreService.getPreferences();
    this.authStoreService.loggedUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(userData => {
      const preferences = {
        userId: userData._id,
        languageCode: this.preferenceType === 'language' ? preference : currentPreferences.languageCode,
        weightUnit: this.preferenceType === 'weightUnit' ? preference : currentPreferences.weightUnit,
        showByPeriod: currentPreferences.showByPeriod
      };
      return this.preferencesService.setPreferences(preferences, this.preferenceType);
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

PreferencesComponent.ctorParameters = () => [{
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

PreferencesComponent.propDecorators = {
  preferences: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  preferenceType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
PreferencesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'bl-preferences',
  template: _preferences_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
  styles: [_preferences_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PreferencesComponent);


/***/ }),

/***/ 2207:
/*!*****************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/side-nav.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavComponent": () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _side_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav.component.html?ngResource */ 3763);
/* harmony import */ var _side_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-nav.component.scss?ngResource */ 1362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 8031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 9377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 913);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 3200);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store/auth/auth-store.service */ 8458);
/* harmony import */ var _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/store/shared/preferences-store.service */ 7276);
/* harmony import */ var _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/training/past-trainings-date-format.const */ 1757);
/* harmony import */ var _preferences_preferences_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../preferences/preferences.component */ 6010);
/* harmony import */ var _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/store/training/past-trainings-store.service */ 8885);















let SideNavComponent = class SideNavComponent {
  constructor(_authStoreService, _pastTrainingsStoreService, _preferencesStoreService, _popoverController, _router) {
    this._authStoreService = _authStoreService;
    this._pastTrainingsStoreService = _pastTrainingsStoreService;
    this._preferencesStoreService = _preferencesStoreService;
    this._popoverController = _popoverController;
    this._router = _router;
    this.isAuthenticated$ = this._authStoreService.isAuth$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());
    this.preferences$ = this._preferencesStoreService.preferencesChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1));
  }

  onLogout() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._authStoreService.logout();
    })();
  }

  goToPastTrainings() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._pastTrainingsStoreService.pastTrainingsQueryParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          let queryParams;

          if (params) {
            queryParams = params;
          } else {
            const showByPeriod = _this2._preferencesStoreService.getPreferences()?.showByPeriod ?? 'week';
            const startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date()), {
              weekStartsOn: 1
            });
            const endDate = showByPeriod === 'week' ? (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date()), {
              weekStartsOn: 1
            }) : (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date()), {
              weekStartsOn: 1
            });
            queryParams = {
              startDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(startDate, _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_5__.QUERY_PARAMS_DATE_FORMAT),
              endDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(endDate, _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_5__.QUERY_PARAMS_DATE_FORMAT),
              showBy: showByPeriod
            };
          }

          yield _this2._router.navigate(['/training/past-trainings'], {
            queryParams
          });
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  openPreferencePopover($event, preferenceType) {
    $event.stopPropagation();
    this.preferences$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(preferences => (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.from)(this._popoverController.create({
      component: _preferences_preferences_component__WEBPACK_IMPORTED_MODULE_6__.PreferencesComponent,
      event: $event,
      componentProps: {
        preferences,
        preferenceType
      },
      side: 'left',
      keyboardClose: true
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(popover => (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.from)(popover.present()))).subscribe();
  }

};

SideNavComponent.ctorParameters = () => [{
  type: _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_3__.AuthStoreService
}, {
  type: _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_7__.PastTrainingsStoreService
}, {
  type: _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_4__.PreferencesStoreService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.PopoverController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
}];

SideNavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
  selector: 'bl-side-nav',
  template: _side_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectionStrategy.OnPush,
  styles: [_side_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SideNavComponent);


/***/ }),

/***/ 185:
/*!***************************************************************************!*\
  !*** ./src/app/views/shared/datetime-picker/datetime-picker.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimePickerComponent": () => (/* binding */ DateTimePickerComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datetime_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime-picker.component.html?ngResource */ 3030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 5654);
/* harmony import */ var _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/enums/model-roles.enum */ 6988);







let DateTimePickerComponent = class DateTimePickerComponent {
  constructor(modalController) {
    this.modalController = modalController;
    this.maxDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
    this.minDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 2), 'yyyy-MM-dd');
  }

  dateChanged(currentDateValue) {
    this.dateValue = currentDateValue;
  }

  close() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.dateTimeEl?.cancel();
      yield _this.modalController.dismiss(undefined, _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_2__.DialogRoles.CANCEL);
    })();
  }

  select() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.dateTimeEl?.confirm();
      yield _this2.modalController.dismiss(_this2.dateValue, _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_2__.DialogRoles.SELECT_DATE);
    })();
  }

};

DateTimePickerComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

DateTimePickerComponent.propDecorators = {
  dateValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  dateTimeEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['datetime', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonDatetime
    }]
  }]
};
DateTimePickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  template: _datetime_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush
})], DateTimePickerComponent);


/***/ }),

/***/ 326:
/*!***************************************************************!*\
  !*** ./src/app/views/shared/not-found/not-found.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component.html?ngResource */ 9490);
/* harmony import */ var _not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component.scss?ngResource */ 6108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/store/auth/auth-store.service */ 8458);





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

/***/ 9320:
/*!*****************************************************************!*\
  !*** ./src/app/views/shared/pagination/pagination.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.component.html?ngResource */ 6580);
/* harmony import */ var _pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.component.scss?ngResource */ 5606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/is-never-check.helper */ 3899);
/* harmony import */ var _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/shared/paginator.const */ 9396);








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
        return this.translateService.stream('common').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((value) => `
                        ${value['page']}
                        <strong class="primary">${this.page?.toString() ?? '1'}</strong>
                        ${value['of']}
                        <strong class="primary">${totalPages?.toString() ?? '1'}</strong>
                    `));
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

/***/ 8405:
/*!***************************************************************************!*\
  !*** ./src/app/views/shared/skeleton-loader/skeleton-loader.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonLoaderComponent": () => (/* binding */ SkeletonLoaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _skeleton_loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton-loader.component.html?ngResource */ 1301);
/* harmony import */ var _skeleton_loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skeleton-loader.component.scss?ngResource */ 1957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




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
        return {
            width: this.width ?? '',
            height: this.height ?? '',
            'border-radius': this.borderRadius ?? '',
            margin: this.margin ?? '',
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

/***/ 4758:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteTrainingActionComponent": () => (/* binding */ DeleteTrainingActionComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _delete_training_action_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-training-action.component.html?ngResource */ 9843);
/* harmony import */ var _delete_training_action_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-training-action.component.scss?ngResource */ 9543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../constants/enums/model-roles.enum */ 6988);
/* harmony import */ var _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/store/shared/shared-store.service */ 1102);
/* harmony import */ var _services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/api/training/delete-training-action.service */ 4490);
/* harmony import */ var _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../constants/shared/paginator.const */ 9396);













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

        yield _this.modalController.dismiss(false, _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.DELETE_TRAINING);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  onCancel() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.modalController.dismiss(false, _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.CANCEL);
    })();
  }

  getDeleteTrainingMeta() {
    const isSearch = !!this.route.snapshot.queryParams?.search;

    if (isSearch) {
      const searchValue = this.route.snapshot.queryParams?.search.trim();
      const page = +this.route.snapshot.queryParams?.page ?? _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_6__.INITIAL_PAGE;
      const size = +this.route.snapshot.queryParams?.size ?? _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_SIZE;
      return {
        searchData: {
          page: page,
          size: size,
          searchValue: searchValue
        },
        currentDate: undefined
      };
    } else {
      const splittedDate = this.route.snapshot.queryParams.startDate?.split('-');
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

/***/ 5651:
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/more-training-action/more-training-action.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreTrainingActionComponent": () => (/* binding */ MoreTrainingActionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _more_training_action_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-training-action.component.html?ngResource */ 1229);
/* harmony import */ var _more_training_action_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-training-action.component.scss?ngResource */ 2979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




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

/***/ 2340:
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
    BACKEND: 'http://192.168.0.114:3000',
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(_err => {
    //TODO
});


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		4832,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
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
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 2767:
/*!******************************************************************!*\
  !*** ./src/app/views/auth/login/login.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "span:not(:last-child) {\n  font-size: 11px;\n  color: var(--ion-color-danger);\n}\n\n.submit {\n  margin-top: 10px;\n}\n\n.no_account_message {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  display: inline-block;\n  margin-top: 15px;\n  padding-bottom: 16px;\n}\n\n.no_account_message .no-account-link {\n  text-decoration: none;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0k7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBQ1IiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ub19hY2NvdW50X21lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG5cclxuICAgIC5uby1hY2NvdW50LWxpbmsge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 5431:
/*!********************************************************************!*\
  !*** ./src/app/views/auth/signup/signup.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-row {\n  flex-wrap: nowrap;\n}\n\n.description {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  font-weight: 500;\n}\n\n.label {\n  margin-left: 10px;\n}\n\n.radio {\n  margin: 0;\n}\n\n.did-you-know {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n\n.submit {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93IHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnJhZGlvIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRpZC15b3Uta25vdyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 8770:
/*!************************************************************************************!*\
  !*** ./src/app/views/navigation/preferences/preferences.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-item {\n  cursor: pointer;\n}\n\nion-img {\n  height: 40px;\n  width: 40px;\n}\n\n.txt {\n  margin-left: 10px;\n  font-size: 18px;\n}\n\n.checkmark {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZlcmVuY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSiIsImZpbGUiOiJwcmVmZXJlbmNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLnR4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNoZWNrbWFyayB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1362:
/*!******************************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/side-nav.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu-toggle {\n  cursor: pointer;\n}\n\n.app-title {\n  padding-inline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LXRvZ2dsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcHAtdGl0bGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDA7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6108:
/*!****************************************************************************!*\
  !*** ./src/app/views/shared/not-found/not-found.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 60px;\n}\n.wrapper .title {\n  margin-bottom: 10px;\n}\n.wrapper .img {\n  width: 150px;\n  height: 150px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7QUFDUjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUFSIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5606:
/*!******************************************************************************!*\
  !*** ./src/app/views/shared/pagination/pagination.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-card {\n  position: fixed;\n  bottom: 0;\n  margin: 0 auto;\n  border: 2px solid var(--ion-color-primary);\n  box-shadow: var(--ion-box-shadow);\n  width: 95%;\n}\nion-card ion-card-content {\n  padding: 5px 10px;\n}\n.md ion-button {\n  font-size: 5px;\n}\n.ios ion-button {\n  font-size: 12px;\n}\n.paginator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  row-gap: 5px;\n}\n.controls-wrapper {\n  display: flex;\n  align-items: center;\n}\n.page-size-wrapper {\n  display: block;\n  width: 45px;\n  margin-right: 20px;\n  padding: 6px 0;\n  overflow: hidden;\n  border: none;\n  border-radius: 4px;\n  position: relative;\n  box-shadow: var(--ion-box-shadow);\n}\n.page-size-wrapper:after {\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid var(--ion-color-primary);\n  position: absolute;\n  top: 40%;\n  right: 5px;\n  content: \"\";\n  z-index: 98;\n}\n.page-size {\n  width: 65px;\n  border: 0;\n  position: relative;\n  top: -1px;\n  z-index: 99;\n  background: none;\n  cursor: pointer;\n  padding-left: 8px;\n}\n.page-size:focus-visible {\n  outline: none;\n}\n.arrow-wrapper {\n  display: flex;\n  column-gap: 10px;\n}\n.previous:not([disabled]):hover,\n.previous:not([disabled]):active,\n.next:not([disabled]):hover,\n.next:not([disabled]):active,\n.first:not([disabled]):hover,\n.first:not([disabled]):active,\n.last:not([disabled]):hover,\n.last:not([disabled]):active {\n  background: var(--ion-color-light);\n}\n.icon {\n  color: var(--ion-color-primary);\n}\n.label {\n  font-size: 15px;\n}\n@media (min-width: 640px) {\n  ion-card {\n    width: 1020px;\n    position: relative;\n    margin-top: 5px;\n  }\n  .paginator {\n    column-gap: 20px;\n    justify-content: flex-end;\n    flex-direction: row;\n  }\n  .arrow-wrapper {\n    margin-right: 15px;\n  }\n  .controls-wrapper {\n    order: 2;\n  }\n  .label {\n    margin-right: auto;\n    margin-left: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBR0E7RUFDSSxjQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUFKO0FBRUk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFSO0FBSUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURKO0FBR0k7RUFDSSxhQUFBO0FBRFI7QUFLQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUZKO0FBS0E7Ozs7Ozs7O0VBUUksa0NBQUE7QUFGSjtBQUtBO0VBQ0ksK0JBQUE7QUFGSjtBQUtBO0VBQ0ksZUFBQTtBQUZKO0FBS0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUFGTjtFQUtFO0lBQ0ksZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0VBSE47RUFNRTtJQUNJLGtCQUFBO0VBSk47RUFPRTtJQUNJLFFBQUE7RUFMTjtFQVFFO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtFQU5OO0FBQ0YiLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0taW9uLWJveC1zaGFkb3cpO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuXHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1kIGlvbi1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiA1cHg7XHJcbn1cclxuXHJcbi5pb3MgaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0b3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICByb3ctZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5jb250cm9scy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnZS1zaXplLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWlvbi1ib3gtc2hhZG93KTtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItdG9wOiA2cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHotaW5kZXg6IDk4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFnZS1zaXplIHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcblxyXG4gICAgJjpmb2N1cy12aXNpYmxlIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXJyb3ctd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxufVxyXG5cclxuLnByZXZpb3VzOm5vdChbZGlzYWJsZWRdKTpob3ZlcixcclxuLnByZXZpb3VzOm5vdChbZGlzYWJsZWRdKTphY3RpdmUsXHJcbi5uZXh0Om5vdChbZGlzYWJsZWRdKTpob3ZlcixcclxuLm5leHQ6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSxcclxuLmZpcnN0Om5vdChbZGlzYWJsZWRdKTpob3ZlcixcclxuLmZpcnN0Om5vdChbZGlzYWJsZWRdKTphY3RpdmUsXHJcbi5sYXN0Om5vdChbZGlzYWJsZWRdKTpob3ZlcixcclxuLmxhc3Q6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRvciB7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93LXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udHJvbHMtd3JhcHBlciB7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1957:
/*!****************************************************************************************!*\
  !*** ./src/app/views/shared/skeleton-loader/skeleton-loader.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".skeleton {\n  width: 120px;\n  height: 35px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNrZWxldG9uLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJza2VsZXRvbi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tlbGV0b24ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 9543:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.scss?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".title {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.dot {\n  height: 8px;\n  width: 8px;\n  margin-bottom: 2px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.created-at-key {\n  display: block;\n  margin-top: 20px;\n  font-size: 18px;\n}\n\n.created-at-value {\n  display: block;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.created-at-value .time {\n  color: var(--ion-color-primary);\n}\n\n.exercises-wrapper {\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  justify-content: flex-start;\n}\n\n.exercises-wrapper .exercises-key {\n  align-self: center;\n  margin-top: 20px;\n  font-size: 18px;\n}\n\n.exercises-wrapper .exercises-value {\n  color: var(--ion-color-primary);\n  width: -moz-fit-content;\n  width: fit-content;\n  border-bottom: 2px solid var(--ion-color-light);\n  align-self: center;\n  font-size: 18px;\n}\n\n.exercises-wrapper .exercises-value:last-of-type {\n  border-bottom: none;\n}\n\n.delete-btn {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS10cmFpbmluZy1hY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFHSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBUjs7QUFHSTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURSOztBQUdRO0VBQ0ksK0JBQUE7QUFEWjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUhKOztBQU1RO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFKWjs7QUFPUTtFQUNJLCtCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTFo7O0FBUVE7RUFDSSxtQkFBQTtBQU5aOztBQVdBO0VBQ0ksZ0JBQUE7QUFSSiIsImZpbGUiOiJkZWxldGUtdHJhaW5pbmctYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kb3Qge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY3JlYXRlZC1hdCB7XHJcbiAgICAmLWtleSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi12YWx1ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmV4ZXJjaXNlcy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcm93LWdhcDogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC5leGVyY2lzZXMge1xyXG4gICAgICAgICYta2V5IHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXZhbHVlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXZhbHVlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 2979:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/more-training-action/more-training-action.component.scss?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3JlLXRyYWluaW5nLWFjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n    <bl-side-nav></bl-side-nav>\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 3327:
/*!******************************************************************!*\
  !*** ./src/app/views/auth/login/login.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-title\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'navigation.login' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col sizeSm=\"4\">\r\n                <ion-card>\r\n                    <ion-card-content>\r\n                        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" (keydown.enter)=\"onSubmit()\">\r\n                            <ion-grid>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item>\r\n                                            <ion-label position=\"floating\">\r\n                                                {{ 'auth.email' | translate }}\r\n                                            </ion-label>\r\n                                            <ion-input\r\n                                                ionFocus\r\n                                                [duration]=\"focusDuration\"\r\n                                                type=\"email\"\r\n                                                formControlName=\"email\"\r\n                                            ></ion-input>\r\n                                            <ion-note\r\n                                                *ngIf=\"\r\n                                                    form.controls.email.errors?.required &&\r\n                                                    (form.controls.email.dirty || form.controls.email.touched)\r\n                                                \"\r\n                                                slot=\"error\"\r\n                                            >\r\n                                                {{ 'auth.errors.email_required' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note\r\n                                                *ngIf=\"\r\n                                                    form.controls.email.errors?.email &&\r\n                                                    !form.controls.email.errors?.required\r\n                                                \"\r\n                                                slot=\"error\"\r\n                                            >\r\n                                                {{ 'auth.errors.invalid_email' | translate }}\r\n                                            </ion-note>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item>\r\n                                            <ion-label position=\"floating\">\r\n                                                {{ 'auth.password' | translate }}\r\n                                            </ion-label>\r\n                                            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n                                            <ion-note\r\n                                                *ngIf=\"\r\n                                                    form.controls.password.errors?.required &&\r\n                                                    (form.controls.password.dirty || form.controls.password.touched)\r\n                                                \"\r\n                                                slot=\"error\"\r\n                                            >\r\n                                                {{ 'auth.errors.password_required' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note\r\n                                                *ngIf=\"\r\n                                                    form.controls.password.errors?.minlength ||\r\n                                                    form.controls.password.errors?.maxlength\r\n                                                \"\r\n                                                slot=\"error\"\r\n                                            >\r\n                                                {{ 'auth.errors.password_length' | translate }}\r\n                                            </ion-note>\r\n                                        </ion-item>\r\n                                        <ion-note\r\n                                            *ngIf=\"\r\n                                                form.errors?.passwordFitsEmail &&\r\n                                                !form.controls.password.errors?.required &&\r\n                                                !form.controls.password.errors?.minlength &&\r\n                                                !form.controls.password.errors?.maxlength\r\n                                            \"\r\n                                            class=\"error\"\r\n                                        >\r\n                                            {{ 'auth.errors.password_wrong_email' | translate }}\r\n                                        </ion-note>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col class=\"ion-text-center\">\r\n                                        <ion-button\r\n                                            class=\"submit\"\r\n                                            type=\"submit\"\r\n                                            color=\"primary\"\r\n                                            [disabled]=\"!form.valid || isLoading\"\r\n                                        >\r\n                                            {{ 'auth.login' | translate }}\r\n                                        </ion-button>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row class=\"ion-text-center\">\r\n                                    <ion-col>\r\n                                        <ion-note class=\"no_account_message\">\r\n                                            {{ 'auth.no_account_message' | translate }}\r\n                                            <a class=\"no-account-link\" routerLink=\"/auth/signup\">\r\n                                                {{ 'auth.signup_link' | translate }}\r\n                                            </a>\r\n                                            {{ 'common.here' | translate }}\r\n                                        </ion-note>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </form>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6927:
/*!********************************************************************!*\
  !*** ./src/app/views/auth/signup/signup.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-title\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'navigation.signup' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col sizeSm=\"4\">\r\n                <ion-card>\r\n                    <ion-card-content>\r\n                        <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" (keydown.enter)=\"onSubmit()\">\r\n                            <ion-grid>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-note class=\"description\">\r\n                                            {{ 'auth.pick_language' | translate }}\r\n                                        </ion-note>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-radio-group formControlName=\"language\">\r\n                                    <ion-row>\r\n                                        <ion-col>\r\n                                            <ion-item lines=\"none\">\r\n                                                <ion-label class=\"label\">{{\r\n                                                    'languages.english' | translate\r\n                                                }}</ion-label>\r\n                                                <ion-radio class=\"radio\" slot=\"start\" value=\"en\"> </ion-radio>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                        <ion-col>\r\n                                            <ion-item lines=\"none\">\r\n                                                <ion-label class=\"label\">{{\r\n                                                    'languages.croatian' | translate\r\n                                                }}</ion-label>\r\n                                                <ion-radio class=\"radio\" slot=\"start\" value=\"hr\"> </ion-radio>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                    <ion-note *ngIf=\"form.controls.language.errors?.required\" class=\"error\">\r\n                                        {{ 'preferences.errors.language_required' | translate }}\r\n                                    </ion-note>\r\n                                </ion-radio-group>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-note class=\"description\">\r\n                                            {{ 'auth.pick_weight_unit' | translate }}\r\n                                        </ion-note>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-radio-group formControlName=\"weightUnit\">\r\n                                    <ion-row>\r\n                                        <ion-col>\r\n                                            <ion-item lines=\"none\">\r\n                                                <ion-label class=\"label\">{{\r\n                                                    'common.kilograms' | translate\r\n                                                }}</ion-label>\r\n                                                <ion-radio class=\"radio\" slot=\"start\" value=\"kg\"> </ion-radio>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                        <ion-col>\r\n                                            <ion-item lines=\"none\">\r\n                                                <ion-label class=\"label\">{{ 'common.pounds' | translate }}</ion-label>\r\n                                                <ion-radio class=\"radio\" slot=\"start\" value=\"lbs\"> </ion-radio>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                    <ion-note *ngIf=\"form.controls.weightUnit.errors?.required\" class=\"error\">\r\n                                        {{ 'preferences.errors.weight_unit_required' | translate }}\r\n                                    </ion-note>\r\n                                </ion-radio-group>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item>\r\n                                            <ion-label position=\"floating\">{{ 'auth.email' | translate }}</ion-label>\r\n                                            <ion-input\r\n                                                ionFocus\r\n                                                [duration]=\"focusDuration\"\r\n                                                type=\"email\"\r\n                                                formControlName=\"email\"\r\n                                            ></ion-input>\r\n                                            <ion-note\r\n                                                *ngIf=\"\r\n                                                    form.controls.email.errors?.required &&\r\n                                                    (form.controls.email.dirty || form.controls.email.touched)\r\n                                                \"\r\n                                                slot=\"error\"\r\n                                            >\r\n                                                {{ 'auth.errors.email_required' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note *ngIf=\"form.controls.email.errors?.email\" slot=\"error\">\r\n                                                {{ 'auth.errors.invalid_email' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note *ngIf=\"form.controls.email.errors?.availableEmail\" slot=\"error\">\r\n                                                {{ 'auth.errors.email_already_registered' | translate }}\r\n                                            </ion-note>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item>\r\n                                            <ion-label position=\"floating\">{{ 'auth.password' | translate }}</ion-label>\r\n                                            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n                                            <ion-note\r\n                                                *ngIf=\"\r\n                                                    form.controls.password.errors?.required &&\r\n                                                    (form.controls.password.dirty || form.controls.password.touched)\r\n                                                \"\r\n                                                slot=\"error\"\r\n                                            >\r\n                                                {{ 'auth.errors.password_required' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note\r\n                                                *ngIf=\"\r\n                                                    form.controls.password.errors?.minlength ||\r\n                                                    form.controls.password.errors?.maxlength\r\n                                                \"\r\n                                                slot=\"error\"\r\n                                            >\r\n                                                {{ 'auth.errors.password_length' | translate }}\r\n                                            </ion-note>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item>\r\n                                            <ion-label position=\"floating\">{{\r\n                                                'auth.confirm_password' | translate\r\n                                            }}</ion-label>\r\n                                            <!--TODO: input hint-->\r\n                                            <ion-input type=\"password\" formControlName=\"confirmPassword\"></ion-input>\r\n                                            <ion-note\r\n                                                *ngIf=\"\r\n                                                    form.controls.confirmPassword.errors?.required &&\r\n                                                    (form.controls.confirmPassword.dirty ||\r\n                                                        form.controls.confirmPassword.touched)\r\n                                                \"\r\n                                                slot=\"error\"\r\n                                            >\r\n                                                {{ 'auth.errors.confirm_password_required' | translate }}\r\n                                            </ion-note>\r\n                                            <ion-note\r\n                                                *ngIf=\"\r\n                                                    form.controls.confirmPassword.errors?.minlength ||\r\n                                                    form.controls.confirmPassword.errors?.maxlength\r\n                                                \"\r\n                                                slot=\"error\"\r\n                                            >\r\n                                                {{ 'auth.errors.password_length' | translate }}\r\n                                            </ion-note>\r\n                                        </ion-item>\r\n                                        <ion-note\r\n                                            *ngIf=\"\r\n                                                form.errors?.equalPass &&\r\n                                                !form.controls.confirmPassword.errors?.minlength &&\r\n                                                !form.controls.confirmPassword.errors?.maxlength\r\n                                            \"\r\n                                            class=\"error\"\r\n                                        >\r\n                                            {{ 'auth.errors.equal_passwords' | translate }}\r\n                                        </ion-note>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col class=\"ion-text-center\">\r\n                                        <ion-button\r\n                                            class=\"submit\"\r\n                                            type=\"submit\"\r\n                                            color=\"primary\"\r\n                                            [disabled]=\"!form.valid || isLoading\"\r\n                                        >\r\n                                            {{ 'auth.signup' | translate }}\r\n                                        </ion-button>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </form>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1440:
/*!************************************************************************************!*\
  !*** ./src/app/views/navigation/preferences/preferences.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\r\n    <ng-container [ngSwitch]=\"preferenceType\">\r\n        <ng-container *ngSwitchCase=\"'language'\">\r\n            <ion-item\r\n                *ngFor=\"let language of languageData\"\r\n                lines=\"none\"\r\n                [disabled]=\"preferences.languageCode === language.LanguageCode\"\r\n                (click)=\"changePreference(language.LanguageCode)\"\r\n            >\r\n                <ion-img [src]=\"language.ImageUrl\"></ion-img>\r\n                <ion-text class=\"txt\">\r\n                    {{ language.LanguageName | translate }}\r\n                </ion-text>\r\n                <ion-icon\r\n                    *ngIf=\"preferences.languageCode === language.LanguageCode\"\r\n                    name=\"checkmark-outline\"\r\n                    class=\"checkmark\"\r\n                    slot=\"end\"\r\n                ></ion-icon>\r\n            </ion-item>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'weightUnit'\">\r\n            <ion-item\r\n                *ngFor=\"let unit of unitData\"\r\n                lines=\"none\"\r\n                [disabled]=\"preferences.weightUnit === unit.WeightUnit\"\r\n                (click)=\"changePreference(unit.WeightUnit)\"\r\n            >\r\n                <ion-text class=\"txt\">\r\n                    {{ unit.UnitName | translate }}\r\n                </ion-text>\r\n                <ion-icon\r\n                    *ngIf=\"preferences.weightUnit === unit.WeightUnit\"\r\n                    name=\"checkmark-outline\"\r\n                    class=\"checkmark\"\r\n                    slot=\"end\"\r\n                ></ion-icon>\r\n            </ion-item>\r\n        </ng-container>\r\n    </ng-container>\r\n</ion-list>\r\n";

/***/ }),

/***/ 3763:
/*!******************************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/side-nav.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu side=\"start\" content-id=\"main\">\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-title class=\"app-title\">{{ 'navigation.title' | translate }}</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"!(isAuthenticated$ | async)\"\r\n                    lines=\"none\"\r\n                    routerLink=\"/auth/login\"\r\n                    routerDirection=\"forward\"\r\n                >\r\n                    <ion-icon slot=\"start\" name=\"log-in-sharp\" color=\"primary\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.login' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"!(isAuthenticated$ | async)\"\r\n                    lines=\"none\"\r\n                    routerLink=\"/auth/signup\"\r\n                    routerDirection=\"forward\"\r\n                >\r\n                    <ion-icon slot=\"start\" name=\"arrow-forward-sharp\" color=\"primary\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.signup' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    lines=\"none\"\r\n                    routerLink=\"/training/new-training\"\r\n                    routerDirection=\"forward\"\r\n                    [detail]=\"false\"\r\n                >\r\n                    <ion-icon slot=\"start\" name=\"barbell-sharp\" color=\"primary\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.new_training' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item *ngIf=\"isAuthenticated$ | async\" lines=\"none\" (click)=\"goToPastTrainings()\">\r\n                    <ion-icon slot=\"start\" name=\"analytics-sharp\" color=\"primary\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.past_trainings' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    lines=\"none\"\r\n                    (click)=\"openPreferencePopover($event, 'language')\"\r\n                >\r\n                    <ion-icon slot=\"start\" name=\"language-sharp\" color=\"primary\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.language' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    lines=\"none\"\r\n                    (click)=\"openPreferencePopover($event, 'weightUnit')\"\r\n                >\r\n                    <ion-icon slot=\"start\" name=\"calculator-sharp\" color=\"primary\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.unit' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle [autoHide]=\"false\">\r\n                <ion-item *ngIf=\"isAuthenticated$ | async\" lines=\"none\" routerDirection=\"backward\" (click)=\"onLogout()\">\r\n                    <ion-icon slot=\"start\" name=\"log-out-sharp\" color=\"primary\"></ion-icon>\r\n                    <ion-label>{{ 'navigation.logout' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 3030:
/*!****************************************************************************************!*\
  !*** ./src/app/views/shared/datetime-picker/datetime-picker.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <ion-datetime\r\n        #datetime\r\n        presentation=\"date-time\"\r\n        size=\"cover\"\r\n        firstDayOfWeek=\"1\"\r\n        [value]=\"dateValue\"\r\n        [max]=\"maxDate\"\r\n        [min]=\"minDate\"\r\n        (ionChange)=\"dateChanged(datetime.value)\"\r\n    >\r\n        <ion-buttons slot=\"buttons\">\r\n            <ion-button (click)=\"close()\">{{ 'common.actions.close' | translate }}</ion-button>\r\n            <ion-button color=\"primary\" (click)=\"select()\">{{ 'common.actions.confirm' | translate }}</ion-button>\r\n        </ion-buttons>\r\n    </ion-datetime>\r\n</ion-content>\r\n";

/***/ }),

/***/ 9490:
/*!****************************************************************************!*\
  !*** ./src/app/views/shared/not-found/not-found.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"wrapper\">\r\n    <h2 class=\"title\">\r\n        {{ 'common.page_not_found' | translate }}\r\n    </h2>\r\n    <span *ngIf=\"!(isAuth$ | async)\">\r\n        {{ 'common.errors.not_authenticated' | translate }}\r\n    </span>\r\n    <img src=\"../../../../assets/images/error-404.png\" class=\"img\" />\r\n</div>\r\n";

/***/ }),

/***/ 6580:
/*!******************************************************************************!*\
  !*** ./src/app/views/shared/pagination/pagination.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\r\n    <ion-card-content>\r\n        <div class=\"paginator\">\r\n            <div class=\"controls-wrapper\">\r\n                <ng-container *ngIf=\"isSearch\">\r\n                    <div\r\n                        *skeleton=\"isLoading; width: '50px'; height: '35px'; margin: '0 10px 0 0'\"\r\n                        class=\"page-size-wrapper\"\r\n                    >\r\n                        <select class=\"page-size\" [(ngModel)]=\"size\" (change)=\"loadPage()\">\r\n                            <option *ngFor=\"let size of pageSizeOptions\" [value]=\"size\">\r\n                                {{ size }}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </ng-container>\r\n                <div class=\"arrow-wrapper\">\r\n                    <ion-button\r\n                        *skeleton=\"isLoading; width: '50px'; height: '35px'\"\r\n                        class=\"first\"\r\n                        type=\"button\"\r\n                        color=\"primary\"\r\n                        fill=\"outline\"\r\n                        (click)=\"loadPage('First', undefined, data?.Value?.Results?.EarliestTrainingDate)\"\r\n                        [disabled]=\"!isPreviousPage\"\r\n                    >\r\n                        <ion-icon name=\"play-back-sharp\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button\r\n                        *skeleton=\"isLoading; width: '50px'; height: '35px'\"\r\n                        type=\"button\"\r\n                        class=\"previous\"\r\n                        color=\"primary\"\r\n                        fill=\"outline\"\r\n                        [disabled]=\"data?.IsLoading || !isPreviousPage\"\r\n                        (click)=\"loadPage('Previous', data.Value?.Results?.Dates)\"\r\n                    >\r\n                        <ion-icon name=\"chevron-back-sharp\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button\r\n                        *skeleton=\"isLoading; width: '50px'; height: '35px'\"\r\n                        type=\"button\"\r\n                        class=\"next\"\r\n                        color=\"primary\"\r\n                        fill=\"outline\"\r\n                        [disabled]=\"data.IsLoading || !isNextPage\"\r\n                        (click)=\"loadPage('Next', data.Value?.Results?.Dates)\"\r\n                    >\r\n                        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button\r\n                        *skeleton=\"isLoading; width: '50px'; height: '35px'\"\r\n                        type=\"button\"\r\n                        class=\"last\"\r\n                        color=\"primary\"\r\n                        fill=\"outline\"\r\n                        (click)=\"loadPage('Last', undefined, undefined, data?.Value?.TotalPages)\"\r\n                        [disabled]=\"!isNextPage\"\r\n                    >\r\n                        <ion-icon name=\"play-forward-sharp\"></ion-icon>\r\n                    </ion-button>\r\n                </div>\r\n            </div>\r\n            <ng-container *ngIf=\"data?.Value?.TotalPages\">\r\n                <div\r\n                    *skeleton=\"isLoading; width: '75px'; height: '25px'\"\r\n                    class=\"label\"\r\n                    [innerHTML]=\"setPageText$(data.Value?.TotalPages) | async | sanitizeHtml\"\r\n                ></div>\r\n            </ng-container>\r\n        </div>\r\n    </ion-card-content>\r\n</ion-card>\r\n";

/***/ }),

/***/ 1301:
/*!****************************************************************************************!*\
  !*** ./src/app/views/shared/skeleton-loader/skeleton-loader.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-skeleton-text animated class=\"skeleton\" [ngStyle]=\"styleSkeleton()\"></ion-skeleton-text>\r\n";

/***/ }),

/***/ 9843:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.html?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"onCancel()\">\r\n                <ion-icon name=\"close\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-center\">{{ 'training.new_training.buttons.delete_exercise' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding ion-text-center\">\r\n    <ng-container *ngIf=\"training$ | async as training\">\r\n        <ion-text class=\"title\">{{ title$ | async }}</ion-text>\r\n        <ion-text class=\"created-at-key\">{{ 'training.past_trainings.created_at' | translate }}</ion-text>\r\n        <ion-text class=\"created-at-value\">\r\n            {{ dateCreated$ | async }}\r\n            <span class=\"dot\"></span>\r\n            <span class=\"time\">{{ ' ' + (timeCreated$ | async) }}</span>\r\n        </ion-text>\r\n        <div class=\"exercises-wrapper\">\r\n            <span class=\"exercises-key\">{{ 'common.exercises' | translate }}</span>\r\n            <strong *ngFor=\"let exercise of training.exercises\" class=\"exercises-value\">\r\n                {{ exercise.exerciseData.name | translate }}\r\n            </strong>\r\n        </div>\r\n        <ion-button class=\"delete-btn\" color=\"primary\" [disabled]=\"isLoading\" (click)=\"deleteTraining(training._id)\">\r\n            {{ 'common.actions.delete' | translate }}\r\n        </ion-button>\r\n    </ng-container>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1229:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/more-training-action/more-training-action.component.html?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-menu></mat-menu>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map