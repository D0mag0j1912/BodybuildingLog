"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_training_training_module_ts"],{

/***/ 66265:
/*!****************************************************!*\
  !*** ./src/app/constants/input-maxlength.const.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INPUT_MAX_LENGTH": () => (/* binding */ INPUT_MAX_LENGTH)
/* harmony export */ });
const INPUT_MAX_LENGTH = 50;


/***/ }),

/***/ 55209:
/*!*********************************************************************!*\
  !*** ./src/app/directives/training-item/training-item.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingItemDirective": () => (/* binding */ TrainingItemDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let TrainingItemDirective = class TrainingItemDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        renderer2.addClass(elementRef.nativeElement, 'bl-training-item');
    }
};
TrainingItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
TrainingItemDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({ selector: 'bl-training-item' })
], TrainingItemDirective);



/***/ }),

/***/ 10353:
/*!**************************************************!*\
  !*** ./src/app/handlers/new-training.handler.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillBodyweight": () => (/* binding */ fillBodyweight)
/* harmony export */ });
function fillBodyweight(initialBodyweight, editBodyweight) {
    if (initialBodyweight) {
        if (!editBodyweight) {
            return initialBodyweight.toString();
        }
        else {
            return editBodyweight.toString();
        }
    }
    else {
        if (!editBodyweight) {
            return null;
        }
        else {
            return editBodyweight.toString();
        }
    }
}


/***/ }),

/***/ 73140:
/*!******************************************!*\
  !*** ./src/app/helpers/months.helper.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_MONTHS": () => (/* binding */ ALL_MONTHS)
/* harmony export */ });
const ALL_MONTHS = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
];


/***/ }),

/***/ 83037:
/*!***************************************************************************!*\
  !*** ./src/app/helpers/training/past-trainings/map-stream-data.helper.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapStreamData": () => (/* binding */ mapStreamData)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 25722);


const mapStreamData = () => (source) => source
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((data) => ({
    IsLoading: false,
    Value: data.Value,
    IsError: false,
})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
    IsLoading: false,
    IsError: true,
})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)({
    IsLoading: true,
    IsError: false,
}));


/***/ }),

/***/ 39511:
/*!********************************************************!*\
  !*** ./src/app/helpers/training/show-by-day.helper.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateLastWeekDay": () => (/* binding */ calculateLastWeekDay),
/* harmony export */   "calculateFirstWeekDay": () => (/* binding */ calculateFirstWeekDay),
/* harmony export */   "getCurrentDayIndex": () => (/* binding */ getCurrentDayIndex)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 68031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 8210);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 20312);

function calculateLastWeekDay(startingDate) {
    const startOfCurrentWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(startingDate, { weekStartsOn: 1 });
    const currentWeekDayIndex = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(startingDate, startOfCurrentWeek);
    const startOfLastWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), { weekStartsOn: 1 });
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfLastWeek, currentWeekDayIndex);
}
function calculateFirstWeekDay(earliestTrainingDate, startingDate) {
    const startOfCurrentWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(startingDate, { weekStartsOn: 1 });
    const currentWeekDayIndex = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(startingDate, startOfCurrentWeek);
    const startOfFirstWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(earliestTrainingDate), { weekStartsOn: 1 });
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfFirstWeek, currentWeekDayIndex);
}
function getCurrentDayIndex(date) {
    const startOfWeekDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(date, { weekStartsOn: 1 });
    const currentDayIndex = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date, startOfWeekDate);
    return currentDayIndex;
}


/***/ }),

/***/ 22551:
/*!*************************************************************!*\
  !*** ./src/app/modules/training/training-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingRoutingModule": () => (/* binding */ TrainingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/training/new-training/new-training.component */ 57332);
/* harmony import */ var _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings.component */ 50157);





const routes = [
    {
        path: 'new-training',
        component: _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_0__.NewTrainingComponent,
    },
    {
        path: 'new-training/:id',
        component: _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_0__.NewTrainingComponent,
    },
    {
        path: 'past-trainings',
        component: _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_1__.PastTrainingsComponent,
    },
];
let TrainingRoutingModule = class TrainingRoutingModule {
};
TrainingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], TrainingRoutingModule);



/***/ }),

/***/ 89952:
/*!*****************************************************!*\
  !*** ./src/app/modules/training/training.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingModule": () => (/* binding */ TrainingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _directives_autofocus_autofocus_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/autofocus/autofocus.module */ 82638);
/* harmony import */ var _directives_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/skeleton-loader/skeleton-loader.module */ 13944);
/* harmony import */ var _directives_training_item_training_item_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/training-item/training-item.directive */ 55209);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/pipes.module */ 35503);
/* harmony import */ var _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module */ 31515);
/* harmony import */ var _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/training/new-training/new-training.component */ 57332);
/* harmony import */ var _views_training_new_training_reorder_exercises_reorder_exercises_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/training/new-training/reorder-exercises/reorder-exercises.component */ 38452);
/* harmony import */ var _views_training_past_trainings_past_trainings_filters_past_trainings_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings-filters/past-trainings-filters.component */ 84958);
/* harmony import */ var _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings.component */ 50157);
/* harmony import */ var _views_training_past_trainings_show_by_day_show_by_day_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../views/training/past-trainings/show-by-day/show-by-day.component */ 66582);
/* harmony import */ var _views_training_past_trainings_training_item_training_item_actions_training_item_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../views/training/past-trainings/training-item/training-item-actions/training-item-actions.component */ 72626);
/* harmony import */ var _views_training_past_trainings_training_item_training_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/training/past-trainings/training-item/training-item.component */ 54271);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared.module */ 95601);
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./training-routing.module */ 22551);




















const DIRECTIVES = [_directives_training_item_training_item_directive__WEBPACK_IMPORTED_MODULE_2__.TrainingItemDirective];
const COMPONENTS = [
    _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_5__.NewTrainingComponent,
    _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_8__.PastTrainingsComponent,
    _views_training_past_trainings_training_item_training_item_component__WEBPACK_IMPORTED_MODULE_11__.TrainingItemComponent,
    _views_training_past_trainings_training_item_training_item_actions_training_item_actions_component__WEBPACK_IMPORTED_MODULE_10__.TrainingItemActionsComponent,
    _views_training_past_trainings_past_trainings_filters_past_trainings_filters_component__WEBPACK_IMPORTED_MODULE_7__.PastTrainingsFiltersComponent,
    _views_training_past_trainings_show_by_day_show_by_day_component__WEBPACK_IMPORTED_MODULE_9__.ShowByDayComponent,
    _views_training_new_training_reorder_exercises_reorder_exercises_component__WEBPACK_IMPORTED_MODULE_6__.ReorderExercisesComponent,
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule,
];
const IMPORTS = [
    _training_routing_module__WEBPACK_IMPORTED_MODULE_13__.TrainingRoutingModule,
    _shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule,
    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
    _directives_autofocus_autofocus_module__WEBPACK_IMPORTED_MODULE_0__.AutofocusModule,
    _directives_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_1__.SkeletonLoaderModule,
];
const PIPES_MODULES = [_pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_4__.ShowAllExercisesModule];
let TrainingModule = class TrainingModule {
};
TrainingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.NgModule)({
        declarations: [
            ...COMPONENTS,
            ...DIRECTIVES,
        ],
        imports: [
            ...EXTERNAL_IMPORTS,
            ...IMPORTS,
            ...PIPES_MODULES,
        ],
        exports: [...COMPONENTS],
        entryComponents: [_views_training_new_training_reorder_exercises_reorder_exercises_component__WEBPACK_IMPORTED_MODULE_6__.ReorderExercisesComponent],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
    })
], TrainingModule);



/***/ }),

/***/ 37587:
/*!*****************************************************************!*\
  !*** ./src/app/services/api/training/past-trainings.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastTrainingsService": () => (/* binding */ PastTrainingsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-past-trainings-dates.helper */ 35717);






const ROUTE_PREFIX = '/training/';
let PastTrainingsService = class PastTrainingsService {
    constructor(_http) {
        this._http = _http;
    }
    searchPastTrainings(searchValue, pageSize, currentPage) {
        const params = `?searchValue=${searchValue}&size=${pageSize.toString()}&page=${currentPage.toString()}`;
        return this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND}${ROUTE_PREFIX}search_trainings${params}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => (0,_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__.mapDateInterval)(response)));
    }
    getPastTrainings(currentDate, filterType) {
        const params = `?currentDate=${currentDate}&filterType=${filterType}`;
        return this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND}${ROUTE_PREFIX}past_trainings${params}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => (0,_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__.mapDateInterval)(response)));
    }
    getPastTraining(id) {
        return this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND}${ROUTE_PREFIX}past_trainings/${id}`);
    }
};
PastTrainingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
PastTrainingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
], PastTrainingsService);



/***/ }),

/***/ 58885:
/*!*************************************************************************!*\
  !*** ./src/app/services/store/training/past-trainings-store.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastTrainingsStoreService": () => (/* binding */ PastTrainingsStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);



let PastTrainingsStoreService = class PastTrainingsStoreService {
    constructor() {
        this._isSearch$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.isSearch$ = this._isSearch$$.asObservable();
    }
    emitSearch(value) {
        this._isSearch$$.next(!!value);
    }
};
PastTrainingsStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], PastTrainingsStoreService);



/***/ }),

/***/ 57332:
/*!***********************************************************************!*\
  !*** ./src/app/views/training/new-training/new-training.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTrainingComponent": () => (/* binding */ NewTrainingComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_training_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-training.component.html?ngResource */ 9370);
/* harmony import */ var _new_training_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-training.component.scss?ngResource */ 79973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var src_app_services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/store/shared/shared-store.service */ 81102);
/* harmony import */ var src_app_services_api_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/training/past-trainings.service */ 37587);
/* harmony import */ var _handlers_new_training_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../handlers/new-training.handler */ 10353);
/* harmony import */ var _helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-stream-data.helper */ 83037);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/common/interfaces/common.model */ 66756);
/* harmony import */ var _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/common/types/modal-roles.type */ 78033);
/* harmony import */ var _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/training/new-training/empty-training.model */ 42442);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../validators/shared/common.validators */ 9366);
/* harmony import */ var _shared_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/datetime-picker/datetime-picker.component */ 10185);
/* harmony import */ var _shared_training_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/training/single-exercise/single-exercise.component */ 72458);
/* harmony import */ var _services_store_training_training_store_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/store/training/training-store.service */ 70788);
/* harmony import */ var _services_api_training_training_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/api/training/training.service */ 9935);
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/store/auth/auth-store.service */ 88458);
/* harmony import */ var _reorder_exercises_reorder_exercises_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reorder-exercises/reorder-exercises.component */ 38452);


























let NewTrainingComponent = class NewTrainingComponent {
  constructor(trainingStoreService, trainingService, pastTrainingService, sharedStoreService, authStoreService, unsubscribeService, route, router, modalController, changeDetectorRef) {
    this.trainingStoreService = trainingStoreService;
    this.trainingService = trainingService;
    this.pastTrainingService = pastTrainingService;
    this.sharedStoreService = sharedStoreService;
    this.authStoreService = authStoreService;
    this.unsubscribeService = unsubscribeService;
    this.route = route;
    this.router = router;
    this.modalController = modalController;
    this.changeDetectorRef = changeDetectorRef;
    this.editData = _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_9__.EMPTY_TRAINING_EDIT;
    this.editMode = false;
    this.trainingStream$ = undefined;
    this.isAuthenticated$ = this.authStoreService.isAuth$;
    this.isEditing$ = this.sharedStoreService.editingTraining$;
    this.isReorder$ = this.trainingStoreService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(training => {
      const exercises = training.exercises;
      const areAtLeastTwoExercises = exercises.length >= 2 && exercises.every(exercise => !!exercise.exerciseData.name && exercise.sets.length > 0);
      return areAtLeastTwoExercises;
    }));
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroup({
      bodyweight: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl(null, {
        validators: [_validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_11__.isNumber(), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.min(30), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.max(300)],
        updateOn: 'blur'
      }),
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl(new Date().toISOString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]),
      exercises: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl([])
    });
  }

  ionViewWillEnter() {
    let allExercisesChanged;
    this.trainingStream$ = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(params => this.trainingStoreService.allExercisesChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(value => {
      if (value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(value);
      } else {
        return this.trainingService.getExercises();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(exercisesData => allExercisesChanged = exercisesData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(_ => params))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(params => {
      if (params['id']) {
        this.editMode = true;
        return this.pastTrainingService.getPastTraining(params['id']).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(response => {
          var _a, _b;

          this.editData = {
            editedDate: (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.trainingDate) !== null && _b !== void 0 ? _b : new Date(),
            editTraining: Object.assign(Object.assign({}, response === null || response === void 0 ? void 0 : response.Value), {
              editMode: true
            })
          };
          this.trainingStoreService.updateTrainingState(this.editData.editTraining);
        }));
      } else {
        return this.trainingStoreService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(trainingState => {
          var _a;

          const currentTrainingState = Object.assign({}, trainingState);

          if (currentTrainingState) {
            if (currentTrainingState.editMode && !this.editMode) {
              this.trainingStoreService.updateTrainingState(Object.assign(Object.assign({}, _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_9__.EMPTY_TRAINING), {
                exercises: [(0,_models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_9__.createEmptyExercise)(allExercisesChanged.Value)],
                userId: (_a = currentTrainingState === null || currentTrainingState === void 0 ? void 0 : currentTrainingState.userId) !== null && _a !== void 0 ? _a : ''
              }));
            }
          }
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(_ => this.sharedStoreService.emitEditingTraining(this.editMode)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(allExercisesChanged).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(_ => this._formInit()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)())));
    this.changeDetectorRef.markForCheck();
  }

  ionViewDidEnter() {
    var _this = this;

    if (this.ionContent) {
      setTimeout( /*#__PURE__*/(0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return yield _this.ionContent.scrollToBottom(300);
      }), 300);
    }
  }

  ionViewDidLeave() {
    this.sharedStoreService.emitEditingTraining(false);
  }

  ngOnDestroy() {
    this.sharedStoreService.completeDayClicked();
  }

  openReorderModal() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _reorder_exercises_reorder_exercises_component__WEBPACK_IMPORTED_MODULE_17__.ReorderExercisesComponent,
        keyboardClose: true
      });
      yield modal.present();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.from)(modal.onDidDismiss()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.filter)(response => (response === null || response === void 0 ? void 0 : response.role) === _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_8__.DialogRoles.REORDER_EXERCISES), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(_this2.unsubscribeService)).subscribe(response => {
        if (response === null || response === void 0 ? void 0 : response.data) {
          _this2.trainingStream$ = _this2.trainingStoreService.allExercisesChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(value => ({
            IsLoading: true,
            Value: value.Value,
            IsError: false
          })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.delay)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(_ => {
            _this2.trainingStoreService.updateTrainingState(response.data);

            _this2._formInit();
          }), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(_ => setTimeout( /*#__PURE__*/(0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return yield _this2.ionContent.scrollToBottom(300);
          }), 100)));

          _this2.changeDetectorRef.markForCheck();
        }
      });
    })();
  }

  openDateTimePicker() {
    var _this3 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _shared_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_12__.DateTimePickerComponent,
        componentProps: {
          dateValue: (0,date_fns__WEBPACK_IMPORTED_MODULE_28__["default"])(new Date(_this3.accessFormData('date').value), `yyyy-MM-dd'T'HH:mm:ss'Z'`)
        },
        cssClass: 'datetime-picker',
        mode: 'md'
      });
      yield modal.present();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.from)(modal.onDidDismiss()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.finalize)(() => _this3.changeDetectorRef.markForCheck()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(_this3.unsubscribeService)).subscribe(response => {
        const {
          data,
          role
        } = response;

        if (role === 'SELECT_DATE') {
          _this3.accessFormData('date').patchValue(data);

          _this3._setFormattedDate(data);
        }
      });
    })();
  }

  goToPastTraining() {
    var _this4 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.sharedStoreService.pastTrainingsQueryParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)).subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          yield _this4.router.navigate(['/training/past-trainings'], {
            queryParams: params
          });
          localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_7__.LocalStorageItems.QUERY_PARAMS);
        });

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }

  onBodyweightChange(bodyweight) {
    this.trainingStoreService.addBodyweightToStorage(typeof bodyweight === 'string' ? bodyweight : bodyweight.toString());
  }

  onExerciseAdded(event) {
    var _this5 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.ionContent) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)( /*#__PURE__*/function () {
          var _ref4 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
            return yield _this5.ionContent.scrollToBottom(300);
          });

          return function (_x2) {
            return _ref4.apply(this, arguments);
          };
        }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)( /*#__PURE__*/function () {
          var _ref5 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
            var _a, _b, _c;

            return yield (_c = (_b = (_a = _this5.singleExerciseCmps.last) === null || _a === void 0 ? void 0 : _a.exercisePickerEls) === null || _b === void 0 ? void 0 : _b.last) === null || _c === void 0 ? void 0 : _c.open(event);
          });

          return function (_x3) {
            return _ref5.apply(this, arguments);
          };
        }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(_this5.unsubscribeService)).subscribe();
      }
    })();
  }

  tryAgain() {
    var _a, _b;

    if ((_a = this.editData) === null || _a === void 0 ? void 0 : _a.editTraining) {
      this.trainingStream$ = this.pastTrainingService.getPastTraining((_b = this.editData.editTraining) === null || _b === void 0 ? void 0 : _b._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(response => {
        var _a, _b;

        this.editData = {
          editedDate: (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.trainingDate) !== null && _b !== void 0 ? _b : new Date(),
          editTraining: Object.assign(Object.assign({}, response === null || response === void 0 ? void 0 : response.Value), {
            editMode: this.editMode
          })
        };
        this.trainingStoreService.updateTrainingState(this.editData.editTraining);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(_ => this.trainingService.getExercises()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());
    } else {
      this.trainingStream$ = this.trainingService.getExercises().pipe((0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());
    }
  }

  accessFormData(formControl) {
    return this.form.get(formControl);
  }

  _formInit() {
    var _a;

    const currentTrainingState = Object.assign({}, this.trainingStoreService.getCurrentTrainingState());
    const dayClickedDate = this.sharedStoreService.getDayClickedDate();
    this.accessFormData('bodyweight').patchValue(this._fillBodyweight(currentTrainingState));
    this.accessFormData('date').patchValue(this._fillTrainingDate(dayClickedDate));
    this.accessFormData('exercises').patchValue((_a = currentTrainingState === null || currentTrainingState === void 0 ? void 0 : currentTrainingState.exercises) !== null && _a !== void 0 ? _a : []);

    this._setFormattedDate(this.accessFormData('date').value);
  }

  _setFormattedDate(dateValue) {
    const [date, time] = dateValue.split('T');
    this.formattedTodayDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_28__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_30__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_28__["default"])(new Date(date), 'yyyy-MM-dd') + `T${time}`), 'HH:mm, MMM d, yyyy');
  }

  _fillTrainingDate(dayClickedDate) {
    var _a;

    if ((_a = this.editData) === null || _a === void 0 ? void 0 : _a.editedDate) {
      return this.editData.editedDate;
    } else {
      return dayClickedDate ? dayClickedDate : new Date().toISOString();
    }
  }

  _fillBodyweight(currentTrainingState) {
    var _a, _b;

    return _handlers_new_training_handler__WEBPACK_IMPORTED_MODULE_5__.fillBodyweight(currentTrainingState.bodyweight, ((_a = this.editData) === null || _a === void 0 ? void 0 : _a.editTraining) ? (_b = this.editData.editTraining) === null || _b === void 0 ? void 0 : _b.bodyweight : null);
  }

};

NewTrainingComponent.ctorParameters = () => [{
  type: _services_store_training_training_store_service__WEBPACK_IMPORTED_MODULE_14__.TrainingStoreService
}, {
  type: _services_api_training_training_service__WEBPACK_IMPORTED_MODULE_15__.TrainingService
}, {
  type: src_app_services_api_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_4__.PastTrainingsService
}, {
  type: src_app_services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_3__.SharedStoreService
}, {
  type: _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_16__.AuthStoreService
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__.UnsubscribeService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_31__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_31__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.ModalController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_33__.ChangeDetectorRef
}];

NewTrainingComponent.propDecorators = {
  ionContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_33__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_32__.IonContent, {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.IonContent
    }]
  }],
  singleExerciseCmps: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_33__.ViewChildren,
    args: [_shared_training_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_13__.SingleExerciseComponent]
  }]
};
NewTrainingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_33__.Component)({
  selector: 'bl-new-training',
  template: _new_training_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_33__.ChangeDetectionStrategy.OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__.UnsubscribeService],
  styles: [_new_training_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NewTrainingComponent);


/***/ }),

/***/ 38452:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/training/new-training/reorder-exercises/reorder-exercises.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReorderExercisesComponent": () => (/* binding */ ReorderExercisesComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reorder_exercises_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reorder-exercises.component.html?ngResource */ 27886);
/* harmony import */ var _reorder_exercises_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reorder-exercises.component.scss?ngResource */ 87931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/common/types/modal-roles.type */ 78033);
/* harmony import */ var _services_store_training_training_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/store/training/training-store.service */ 70788);









let ReorderExercisesComponent = class ReorderExercisesComponent {
  constructor(trainingStoreService, modalController) {
    this.trainingStoreService = trainingStoreService;
    this.modalController = modalController;
    this.currentExercises$ = this.trainingStoreService.currentTrainingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(training => training.exercises.map(exercise => exercise.exerciseData.name)));
  }

  doReorder(ev) {
    const currentTrainingState = this.trainingStoreService.getCurrentTrainingState();
    const exerciseFrom = (this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState).exercises.find((_exercise, index) => index === ev.detail.from);
    const remainingExercises = (this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState).exercises.filter((_exercise, index) => index !== ev.detail.from);
    const reorderedExercises = [...remainingExercises.slice(0, ev.detail.to), exerciseFrom, ...remainingExercises.slice(ev.detail.to)];
    this.reorderedTrainingState = Object.assign(Object.assign({}, this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState), {
      exercises: reorderedExercises
    });
    ev.detail.complete();
  }

  reorderExercises() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalController.dismiss(_this.reorderedTrainingState, _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.REORDER_EXERCISES);
    })();
  }

  onCancel() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.modalController.dismiss(undefined, _models_common_types_modal_roles_type__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.CANCEL);
    })();
  }

};

ReorderExercisesComponent.ctorParameters = () => [{
  type: _services_store_training_training_store_service__WEBPACK_IMPORTED_MODULE_4__.TrainingStoreService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

ReorderExercisesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _reorder_exercises_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectionStrategy.OnPush,
  styles: [_reorder_exercises_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ReorderExercisesComponent);


/***/ }),

/***/ 84958:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastTrainingsFiltersComponent": () => (/* binding */ PastTrainingsFiltersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _past_trainings_filters_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./past-trainings-filters.component.html?ngResource */ 25798);
/* harmony import */ var _past_trainings_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./past-trainings-filters.component.scss?ngResource */ 24015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _constants_input_maxlength_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants/input-maxlength.const */ 66265);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/store/training/past-trainings-store.service */ 58885);












let PastTrainingsFiltersComponent = class PastTrainingsFiltersComponent {
    constructor(pastTrainingsStoreService, unsubscribeService, translateService, route) {
        var _a;
        this.pastTrainingsStoreService = pastTrainingsStoreService;
        this.unsubscribeService = unsubscribeService;
        this.translateService = translateService;
        this.route = route;
        this.keyUp$$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.periodFilter = 'week';
        this.periodDisabled = false;
        this.trainingEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.periodEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.searchValue = '';
        this.sortOptions = [
            {
                key: 'week',
                value: this.translateService.stream('training.past_trainings.show_by_week'),
            }, {
                key: 'day',
                value: this.translateService.stream('training.past_trainings.show_by_day'),
            },
        ];
        const searchQueryParam = (_a = this.route.snapshot.queryParamMap) === null || _a === void 0 ? void 0 : _a.get('search');
        if (searchQueryParam) {
            this.searchValue = searchQueryParam;
        }
        this.keyUp$$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((event) => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((value) => value === null || value === void 0 ? void 0 : value.trim().toLowerCase()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)((value) => value.length <= 50), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribeService))
            .subscribe((value) => this.trainingEmitted.next(value));
    }
    get inputMaxLength() {
        return _constants_input_maxlength_const__WEBPACK_IMPORTED_MODULE_2__.INPUT_MAX_LENGTH;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            var _a;
            if (this.searchEl) {
                const value = (_a = this.searchEl) === null || _a === void 0 ? void 0 : _a.value;
                this.pastTrainingsStoreService.emitSearch(value);
            }
        });
    }
    emitKeyboardEvent($event) {
        this.keyUp$$.next($event);
    }
    segmentChanged($event) {
        var _a;
        this.periodEmitted.emit((_a = $event === null || $event === void 0 ? void 0 : $event.detail) === null || _a === void 0 ? void 0 : _a.value);
    }
    openFilterDialog() {
        //TODO
    }
};
PastTrainingsFiltersComponent.ctorParameters = () => [
    { type: _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_4__.PastTrainingsStoreService },
    { type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute }
];
PastTrainingsFiltersComponent.propDecorators = {
    periodFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    periodDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    trainingEmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    periodEmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    searchEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['search', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInput },] }]
};
PastTrainingsFiltersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'bl-past-trainings-filters',
        template: _past_trainings_filters_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
        providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeService],
        styles: [_past_trainings_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PastTrainingsFiltersComponent);



/***/ }),

/***/ 50157:
/*!***************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastTrainingsComponent": () => (/* binding */ PastTrainingsComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _past_trainings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./past-trainings.component.html?ngResource */ 36269);
/* harmony import */ var _past_trainings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./past-trainings.component.scss?ngResource */ 32016);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! date-fns */ 68031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! date-fns */ 73637);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! date-fns */ 75845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! date-fns */ 11282);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! date-fns */ 53470);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! date-fns */ 97064);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! date-fns */ 88393);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store/shared/shared-store.service */ 81102);
/* harmony import */ var _helpers_months_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/months.helper */ 73140);
/* harmony import */ var _helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-stream-data.helper */ 83037);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/common/interfaces/common.model */ 66756);
/* harmony import */ var _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/common/interfaces/paginator.model */ 68350);
/* harmony import */ var _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/training/past-trainings/past-trainings.model */ 48941);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _services_api_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/api/training/past-trainings.service */ 37587);
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers/is-never-check.helper */ 13899);
/* harmony import */ var _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/store/training/past-trainings-store.service */ 58885);
/* harmony import */ var _services_store_shared_preferences_state_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/store/shared/preferences-state.service */ 99165);
/* harmony import */ var _services_shared_preferences_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/shared/preferences.service */ 68476);
/* harmony import */ var _helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helpers/training/show-by-day.helper */ 39511);

























var Heights;

(function (Heights) {
  Heights[Heights["WEEK_HEIGHT"] = 315] = "WEEK_HEIGHT";
  Heights[Heights["SEARCH_HEIGHT"] = 345] = "SEARCH_HEIGHT";
})(Heights || (Heights = {}));

let PastTrainingsComponent = class PastTrainingsComponent {
  constructor(pastTrainingsService, pastTrainingsStoreService, unsubscribeService, translateService, sharedStoreService, preferencesService, preferencesStoreService, changeDetectorRef, route, datePipe, router, navController) {
    var _a, _b;

    this.pastTrainingsService = pastTrainingsService;
    this.pastTrainingsStoreService = pastTrainingsStoreService;
    this.unsubscribeService = unsubscribeService;
    this.translateService = translateService;
    this.sharedStoreService = sharedStoreService;
    this.preferencesService = preferencesService;
    this.preferencesStoreService = preferencesStoreService;
    this.changeDetectorRef = changeDetectorRef;
    this.route = route;
    this.datePipe = datePipe;
    this.router = router;
    this.navController = navController;
    this.food = 3000;
    this.pageSizeOptions = [1, 3, 5, 10];
    this.size = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_SIZE;
    this.page = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__.INITIAL_PAGE;
    this.searchText = '';
    this.periodFilter = (_b = (_a = this.preferencesStoreService.getPreferences()) === null || _a === void 0 ? void 0 : _a.ShowByPeriod) !== null && _b !== void 0 ? _b : 'week';
    this.dayActivated = {
      Date: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(new Date()),
      DayNumber: 0
    };
    this.isNextPage = true;
    this.isPreviousPage = true;
    this.isSearch = false;
    this.pastTrainings$ = undefined;
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.unsubscribeService)).subscribe(params => this.currentQueryParams = params);
    this.sharedStoreService.deletedTraining$$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.unsubscribeService)).subscribe(response => {
      this.pastTrainings$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(response).pipe((0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_5__.mapStreamData)());
      this.changeDetectorRef.markForCheck();
    });
  }

  set timePeriodEl(timePeriodElement) {
    var _a;

    if (timePeriodElement) {
      const trainingElement = (_a = this.trainingItemWrapper) === null || _a === void 0 ? void 0 : _a.nativeElement;

      if (trainingElement) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(this.isSearch).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.unsubscribeService)).subscribe(isSearch => trainingElement.style.maxHeight = `calc(100vh - ${isSearch ? Heights.SEARCH_HEIGHT : Heights.WEEK_HEIGHT}px)`);
      }
    }
  }

  get dateFormat() {
    return _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__.TEMPLATE_DATE_FORMAT;
  } //TODO: make simple stream


  getDayTranslation$(dayName) {
    if (dayName) {
      return this.translateService.stream(dayName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(value => value === null || value === void 0 ? void 0 : value.toLowerCase()));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)('');
  }

  ionViewWillEnter() {
    localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_6__.LocalStorageItems.QUERY_PARAMS);
    this.pastTrainingsStoreService.isSearch$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.unsubscribeService)).subscribe(isSearch => {
      this.isSearch = isSearch;
      this.changeDetectorRef.markForCheck();
    });
    this.initView();
  }

  ionViewWillLeave() {
    this.sharedStoreService.emitPastTrainingsQueryParams(this.currentQueryParams);
    localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_6__.LocalStorageItems.QUERY_PARAMS, JSON.stringify(this.currentQueryParams));
  }

  searchEmitted(searchText) {
    var _this = this;

    this.pastTrainingsStoreService.emitSearch(searchText);
    this.page = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__.INITIAL_PAGE;
    this.pastTrainings$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(searchText).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(searchText => {
      this.searchText = searchText;
      return this.pastTrainingsService.searchPastTrainings(this.searchText, this.size, this.page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)( /*#__PURE__*/function () {
        var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          var _a;

          _this.showByDayStartDate = new Date();

          _this.updatePageAndSize(response);

          yield _this.router.navigate([], {
            relativeTo: _this.route,
            queryParams: _this.handleQueryParams(response, (_a = searchText === null || searchText === void 0 ? void 0 : searchText.trim()) !== null && _a !== void 0 ? _a : undefined)
          });

          _this.handlePaginationArrows(response);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_5__.mapStreamData)());
    }));
  }

  onPeriodEmitted($event, mondayDate) {
    var _this2 = this;

    if (mondayDate) {
      this.periodFilter = $event;

      if (this.periodFilter === 'day') {
        this.showByDayStartDate = mondayDate;
        this.dayActivated = {
          Date: this.showByDayStartDate,
          DayNumber: (0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_15__.getCurrentDayIndex)(this.showByDayStartDate)
        };
      }

      const currentPreferences = this.preferencesStoreService.getPreferences();
      this.preferencesService.setPreferences(Object.assign(Object.assign({}, currentPreferences), {
        ShowByPeriod: this.periodFilter
      }), 'showByPeriod').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.take)(1)).subscribe(_ => {
        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings((0,date_fns__WEBPACK_IMPORTED_MODULE_24__["default"])(mondayDate, {
          weekStartsOn: 1
        }), this.periodFilter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)( /*#__PURE__*/function () {
          var _ref2 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
            yield _this2.router.navigate([], {
              relativeTo: _this2.route,
              queryParams: _this2.handleQueryParams(response)
            });
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_5__.mapStreamData)());
        this.changeDetectorRef.markForCheck();
      });
    }
  }

  onDayActivated($event) {
    var _this3 = this;

    if (!this.isSearch) {
      this.dayActivated = $event;
      this.pastTrainings$ = this.pastTrainingsService.getPastTrainings($event.Date, 'day').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)( /*#__PURE__*/function () {
        var _ref3 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          yield _this3.router.navigate([], {
            relativeTo: _this3.route,
            queryParams: _this3.handleQueryParams(response)
          });
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_5__.mapStreamData)());
    }
  }

  onPaginatorChanged($event, dayFilterDate) {
    var _this4 = this;

    var _a, _b, _c;

    if ($event === null || $event === void 0 ? void 0 : $event.IsSearch) {
      this.pastTrainings$ = this.pastTrainingsService.searchPastTrainings((_c = (_b = (_a = this.searchText) === null || _a === void 0 ? void 0 : _a.trim()) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== null && _c !== void 0 ? _c : '', $event.Size, $event.Page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)( /*#__PURE__*/function () {
        var _ref4 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this4.updatePageAndSize(response);

          yield _this4.router.navigate([], {
            relativeTo: _this4.route,
            queryParams: _this4.handleQueryParams(response, _this4.searchText)
          });

          _this4.handlePaginationArrows(response);
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_5__.mapStreamData)());
    } else {
      if (this.periodFilter === 'day') {
        this.showByDayStartDate = this.calculateDate($event.PageType, undefined, $event.EarliestTrainingDate, dayFilterDate);
        this.dayActivated = {
          Date: this.showByDayStartDate,
          DayNumber: (0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_15__.getCurrentDayIndex)(this.showByDayStartDate)
        };
      }

      this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.periodFilter === 'week' ? this.onPaginatorChangedFilterHandler(this.periodFilter, $event) : this.onPaginatorChangedFilterHandler(this.periodFilter, undefined, this.showByDayStartDate), this.periodFilter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)( /*#__PURE__*/function () {
        var _ref5 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this4.handlePaginationArrows(response);

          yield _this4.router.navigate([], {
            relativeTo: _this4.route,
            queryParams: _this4.handleQueryParams(response)
          });
        });

        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_5__.mapStreamData)());
    }
  }

  logNewTraining() {
    var _this5 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dayClickedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_25__["default"])(_this5.dayActivated.Date, {
        hours: 7
      });

      _this5.sharedStoreService.emitDayClicked(dayClickedDate.toISOString());

      yield _this5.navController.navigateForward('/training/new-training');
    })();
  } //TODO: align with 'ShowByDay' feature


  tryAgain() {
    this.initView();
  }

  setTimePeriod$(results) {
    const dateInterval = results.Dates;

    if ((dateInterval === null || dateInterval === void 0 ? void 0 : dateInterval.StartDate) && (dateInterval === null || dateInterval === void 0 ? void 0 : dateInterval.EndDate)) {
      const isDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_26__["default"])(dateInterval.StartDate, dateInterval.EndDate);

      if (isDay) {
        return this.translateService.stream(results.DayName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate)));
      }

      const isWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_27__["default"])(dateInterval.StartDate, dateInterval.EndDate, {
        weekStartsOn: 1
      });

      if (isWeek) {
        return this.translateService.stream('common.week').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
      }

      const isMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_28__["default"])(dateInterval.StartDate, dateInterval.EndDate);

      if (isMonth) {
        const month = (0,date_fns__WEBPACK_IMPORTED_MODULE_29__["default"])(dateInterval.StartDate);
        return this.translateService.stream(`common.months.${_helpers_months_helper__WEBPACK_IMPORTED_MODULE_4__.ALL_MONTHS[month]}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
      }

      return this.translateService.stream('common.period').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)('');
    }
  }

  initView() {
    var _a, _b, _c, _d, _e;

    this.page = ((_a = this.route.snapshot.queryParamMap) === null || _a === void 0 ? void 0 : _a.get('page')) ? +this.route.snapshot.queryParamMap.get('page') : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__.INITIAL_PAGE;
    this.size = ((_b = this.route.snapshot.queryParamMap) === null || _b === void 0 ? void 0 : _b.get('size')) ? +this.route.snapshot.queryParamMap.get('size') : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_SIZE;
    this.searchText = (_c = this.route.snapshot.queryParamMap) === null || _c === void 0 ? void 0 : _c.get('search');

    if (this.searchText) {
      this.pastTrainings$ = this.pastTrainingsService.searchPastTrainings(this.searchText.trim().toLowerCase(), this.size, this.page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(response => this.handlePaginationArrows(response)), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_5__.mapStreamData)());
    } else {
      this.periodFilter = (_d = this.route.snapshot.queryParamMap) === null || _d === void 0 ? void 0 : _d.get('showBy');

      if (this.periodFilter === 'day') {
        this.showByDayStartDate = this.getDateTimeQueryParams();
        this.dayActivated = {
          Date: this.showByDayStartDate,
          DayNumber: (0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_15__.getCurrentDayIndex)(this.showByDayStartDate)
        };
      }

      this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams(), (_e = this.periodFilter) !== null && _e !== void 0 ? _e : 'week').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(response => this.handlePaginationArrows(response)), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_5__.mapStreamData)());
    }
  }

  onPaginatorChangedFilterHandler(periodFilterType, $weekEvent, startOfCurrentWeek) {
    switch (periodFilterType) {
      case 'week':
        {
          return this.calculateDate($weekEvent.PageType, $weekEvent.DateInterval, $weekEvent.EarliestTrainingDate);
        }

      case 'day':
        {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_30__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_24__["default"])(startOfCurrentWeek, {
            weekStartsOn: 1
          }), this.dayActivated.DayNumber);
        }

      default:
        (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_11__.isNeverCheck)(periodFilterType);
    }
  }

  updatePageAndSize(response) {
    var _a, _b, _c, _d;

    this.page = (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.CurrentPage) !== null && _b !== void 0 ? _b : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__.INITIAL_PAGE;
    this.size = (_d = (_c = response === null || response === void 0 ? void 0 : response.Value) === null || _c === void 0 ? void 0 : _c.Size) !== null && _d !== void 0 ? _d : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_SIZE;
    this.changeDetectorRef.markForCheck();
  }

  calculateDate(page, dateInterval, earliestTrainingDate, startingDate) {
    switch (page) {
      case 'Previous':
        {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_31__["default"])(startingDate ? startingDate : dateInterval.StartDate, 7);
        }

      case 'Next':
        {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_30__["default"])(startingDate ? startingDate : dateInterval.StartDate, 7);
        }

      case 'First':
        {
          return this.periodFilter === 'week' ? new Date(earliestTrainingDate) : (0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_15__.calculateFirstWeekDay)(earliestTrainingDate, startingDate);
        }

      case 'Last':
        {
          return this.periodFilter === 'week' ? new Date() : (0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_15__.calculateLastWeekDay)(startingDate);
        }

      default:
        return (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_11__.isNeverCheck)(page);
    }
  }

  handleQueryParams(trainingData, searchValue) {
    return {
      startDate: this.handleSpecificQueryParam(searchValue, trainingData, 'startDate'),
      endDate: this.handleSpecificQueryParam(searchValue, trainingData, 'endDate'),
      search: searchValue !== null && searchValue !== void 0 ? searchValue : undefined,
      page: this.handleSpecificQueryParam(searchValue, trainingData, 'page'),
      size: this.handleSpecificQueryParam(searchValue, trainingData, 'size'),
      showBy: !searchValue ? this.periodFilter : undefined
    };
  }

  handleSpecificQueryParam(searchValue, trainingData, queryParam) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;

    if (searchValue) {
      if (((_a = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _a === void 0 ? void 0 : _a.TotalCount) > 0) {
        if (queryParam === 'page') {
          return this.page.toString();
        } else if (queryParam === 'startDate') {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_32__["default"])((_e = (_d = (_c = (_b = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _b === void 0 ? void 0 : _b.Results) === null || _c === void 0 ? void 0 : _c.Dates) === null || _d === void 0 ? void 0 : _d.StartDate) !== null && _e !== void 0 ? _e : new Date(), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__.QUERY_PARAMS_DATE_FORMAT);
        } else if (queryParam === 'endDate') {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_32__["default"])((_j = (_h = (_g = (_f = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _f === void 0 ? void 0 : _f.Results) === null || _g === void 0 ? void 0 : _g.Dates) === null || _h === void 0 ? void 0 : _h.EndDate) !== null && _j !== void 0 ? _j : new Date(), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__.QUERY_PARAMS_DATE_FORMAT);
        } else {
          return this.size.toString();
        }
      } else {
        return undefined;
      }
    } else {
      if (queryParam === 'startDate') {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_32__["default"])((_o = (_m = (_l = (_k = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _k === void 0 ? void 0 : _k.Results) === null || _l === void 0 ? void 0 : _l.Dates) === null || _m === void 0 ? void 0 : _m.StartDate) !== null && _o !== void 0 ? _o : new Date(), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__.QUERY_PARAMS_DATE_FORMAT);
      } else if (queryParam === 'endDate') {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_32__["default"])((_s = (_r = (_q = (_p = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _p === void 0 ? void 0 : _p.Results) === null || _q === void 0 ? void 0 : _q.Dates) === null || _r === void 0 ? void 0 : _r.EndDate) !== null && _s !== void 0 ? _s : new Date(), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__.QUERY_PARAMS_DATE_FORMAT);
      } else {
        return undefined;
      }
    }
  }

  handlePaginationArrows(x) {
    var _a, _b, _c, _d, _e, _f;

    this.isPreviousPage = !!((_a = x === null || x === void 0 ? void 0 : x.Value) === null || _a === void 0 ? void 0 : _a.Previous);
    this.isNextPage = !!((_b = x === null || x === void 0 ? void 0 : x.Value) === null || _b === void 0 ? void 0 : _b.Next);

    if (((_d = (_c = x === null || x === void 0 ? void 0 : x.Value) === null || _c === void 0 ? void 0 : _c.Results) === null || _d === void 0 ? void 0 : _d.IsPreviousWeek) !== undefined && ((_f = (_e = x === null || x === void 0 ? void 0 : x.Value) === null || _e === void 0 ? void 0 : _e.Results) === null || _f === void 0 ? void 0 : _f.IsNextWeek) !== undefined) {
      this.isNextPage = x.Value.Results.IsNextWeek;
      this.isPreviousPage = x.Value.Results.IsPreviousWeek;
    }

    this.changeDetectorRef.markForCheck();
  }

  getDateTimeQueryParams() {
    var _a, _b, _c;

    const splittedDate = (_c = (_b = (_a = this.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.startDate) === null || _b === void 0 ? void 0 : _b.split('-')) !== null && _c !== void 0 ? _c : [];
    const utc = splittedDate.length > 0 ? new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString() : new Date().toUTCString();
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(new Date(utc));
  }

  generateHeaderTitle(period, startDate, endDate) {
    if (endDate) {
      return `
                <strong class="header-title--key">${period}</strong>
                <span class="header-title--value">(${this.datePipe.transform(startDate, this.dateFormat)} - ${this.datePipe.transform(endDate, this.dateFormat)})</span>`;
    } else {
      return `<strong class="header-title--key">${period}</strong>
                <span class="header-title--value">(${this.datePipe.transform(startDate, this.dateFormat)})</span`;
    }
  }

};

PastTrainingsComponent.ctorParameters = () => [{
  type: _services_api_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_10__.PastTrainingsService
}, {
  type: _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_12__.PastTrainingsStoreService
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__.UnsubscribeService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslateService
}, {
  type: _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_3__.SharedStoreService
}, {
  type: _services_shared_preferences_service__WEBPACK_IMPORTED_MODULE_14__.PreferencesService
}, {
  type: _services_store_shared_preferences_state_service__WEBPACK_IMPORTED_MODULE_13__.PreferencesStoreService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_34__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_35__.ActivatedRoute
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_36__.DatePipe
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_35__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_37__.NavController
}];

PastTrainingsComponent.propDecorators = {
  trainingItemWrapper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_34__.ViewChild,
    args: ['itemWrapper', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_34__.ElementRef
    }]
  }],
  timePeriodEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_34__.ViewChild,
    args: ['timePeriod', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_34__.ElementRef
    }]
  }]
};
PastTrainingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_38__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_34__.Component)({
  selector: 'bl-past-trainings',
  template: _past_trainings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_34__.ChangeDetectionStrategy.OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__.UnsubscribeService],
  styles: [_past_trainings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PastTrainingsComponent);


/***/ }),

/***/ 66582:
/*!************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/show-by-day/show-by-day.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowByDayComponent": () => (/* binding */ ShowByDayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _show_by_day_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-by-day.component.html?ngResource */ 57462);
/* harmony import */ var _show_by_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-by-day.component.scss?ngResource */ 63199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 68031);
/* harmony import */ var _helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/training/show-by-day.helper */ 39511);









let ShowByDayComponent = class ShowByDayComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date());
        this.dayActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.activeDay$$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(1);
        this.daysOfWeek$ = this.translateService.stream('weekdays')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => Object.values(value)));
    }
    ngOnChanges(changes) {
        var _a;
        const startDate = (_a = changes === null || changes === void 0 ? void 0 : changes.startDate) === null || _a === void 0 ? void 0 : _a.currentValue;
        if (startDate) {
            this.activeDay$$.next((0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_2__.getCurrentDayIndex)(startDate) + 1);
        }
    }
    onDayActivated(index) {
        const dayNumber = index + 1;
        this.activeDay$$.next(dayNumber);
        const newDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(this.startDate, { weekStartsOn: 1 }), index);
        this.dayActivated.next({ Date: newDate, DayNumber: index });
    }
};
ShowByDayComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService }
];
ShowByDayComponent.propDecorators = {
    startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    dayActivated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
ShowByDayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'bl-show-by-day',
        template: _show_by_day_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        styles: [_show_by_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShowByDayComponent);



/***/ }),

/***/ 72626:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingItemActionsComponent": () => (/* binding */ TrainingItemActionsComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _training_item_actions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-item-actions.component.html?ngResource */ 40251);
/* harmony import */ var _training_item_actions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-item-actions.component.scss?ngResource */ 78771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/training/delete-training-action.service */ 64490);






let TrainingItemActionsComponent = class TrainingItemActionsComponent {
  constructor(deleteTrainingActionService) {
    this.deleteTrainingActionService = deleteTrainingActionService;
  }

  performAction(action) {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        weekDays: _this.weekDays,
        timeCreated: _this.timeCreated,
        dayIndex: _this.dayIndex,
        training: _this.training
      };

      switch (action) {
        case 'delete':
          yield _this.deleteTrainingActionService.perform(data);
      }
    })();
  }

};

TrainingItemActionsComponent.ctorParameters = () => [{
  type: src_app_services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_3__.DeleteTrainingActionService
}];

TrainingItemActionsComponent.propDecorators = {
  action: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  training: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  dayIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  weekDays: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  timeCreated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
};
TrainingItemActionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'bl-training-item-actions',
  template: _training_item_actions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
  styles: [_training_item_actions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TrainingItemActionsComponent);


/***/ }),

/***/ 54271:
/*!****************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingItemComponent": () => (/* binding */ TrainingItemComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _training_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-item.component.html?ngResource */ 26453);
/* harmony import */ var _training_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-item.component.scss?ngResource */ 80296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/common/interfaces/common.model */ 66756);
/* harmony import */ var _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/store/shared/shared-store.service */ 81102);










let TrainingItemComponent = class TrainingItemComponent {
  constructor(sharedStoreService, route, router) {
    this.sharedStoreService = sharedStoreService;
    this.route = route;
    this.router = router;
    this.weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    this.actions = ['delete', 'more'];
  }

  ngOnInit() {
    this.timeCreated = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(this.training.trainingDate), 'HH:mm');
    this.dayIndex = new Date(this.training.trainingDate).getDay();
  }

  trainingClicked() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          _this.sharedStoreService.emitPastTrainingsQueryParams(params);

          localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_3__.LocalStorageItems.QUERY_PARAMS, JSON.stringify(params));
          yield _this.router.navigate(['/training/new-training', _this.training._id]);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

};

TrainingItemComponent.ctorParameters = () => [{
  type: _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_4__.SharedStoreService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

TrainingItemComponent.propDecorators = {
  training: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
TrainingItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'bl-training-item',
  template: _training_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectionStrategy.OnPush,
  styles: [_training_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TrainingItemComponent);


/***/ }),

/***/ 20312:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ 88053:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ 73637:
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ 20312);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMonths/index.js */ 88053);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.seconds) : 0; // Add years and months

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ 30677:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ 86323:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 56610);
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 69377);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ 8210:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ 86323);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 97064:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ 75845:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 69377);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ 53470:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ 11282:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ 68031);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 * 
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * var result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ 86527:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 30677);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ 88393:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ 20312);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 80823:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 60014);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 10328);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}


/***/ }),

/***/ 79973:
/*!************************************************************************************!*\
  !*** ./src/app/views/training/new-training/new-training.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".reorder-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.hide-form {\n  display: none;\n}\n\nion-item {\n  padding: 0 10px;\n}\n\n::ng-deep .bodyweight-input input {\n  height: 30px;\n}\n\n.datetime-item {\n  margin-top: 10px;\n}\n\n.datetime-item .datetime-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.error-wrapper {\n  width: 250px;\n  margin: 80px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.error-title {\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n\n.error-description {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 24px;\n  text-align: center;\n  color: var(--ion-color-medium);\n}\n\n.error-image {\n  width: 250px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy10cmFpbmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBUjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBREoiLCJmaWxlIjoibmV3LXRyYWluaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yZW9yZGVyLWljb24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5oaWRlLWZvcm0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJvZHl3ZWlnaHQtaW5wdXQgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGF0ZXRpbWUtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgIC5kYXRldGltZS1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lcnJvci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogODBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXJyb3ItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZXJyb3ItZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufVxyXG5cclxuLmVycm9yLWltYWdlIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 87931:
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/reorder-exercises/reorder-exercises.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = ".wrapper {\n  box-shadow: var(--ion-box-shadow);\n  border-radius: 8px;\n}\n\n.actions {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlb3JkZXItZXhlcmNpc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJyZW9yZGVyLWV4ZXJjaXNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud3JhcHBlciB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1pb24tYm94LXNoYWRvdyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 24015:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = ".filters-wrapper {\n  display: flex;\n  align-items: flex-start;\n  column-gap: 10px;\n  padding: 5px 0;\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 4px;\n}\n.filters-wrapper .search-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  column-gap: 10px;\n  margin-left: 5px;\n}\n.filters-wrapper .search-wrapper .filter-wrapper {\n  display: flex;\n  column-gap: 10px;\n  width: 100%;\n}\n.filters-wrapper .search-wrapper .filter-wrapper .search-input ::ng-deep input {\n  border: 2px solid white;\n  border-radius: 6px;\n  box-shadow: var(--ion-box-shadow);\n  height: 35px;\n}\n.filters-wrapper .search-wrapper .filter-wrapper .search-input ::ng-deep input:focus {\n  outline: none;\n  border: 2px solid var(--ion-color-primary);\n  box-shadow: 0 0 10px var(--ion-color-light);\n}\n.filters-wrapper .search-wrapper .filter-wrapper .search-max-error {\n  font-size: 12px;\n  color: var(--ion-color-danger);\n  align-self: baseline;\n  padding-top: 2px;\n}\n.filters-wrapper .search-wrapper ion-segment {\n  margin-top: 10px;\n  background-color: var(--ion-color-light);\n  width: 90%;\n  margin-right: auto;\n}\n.filters-wrapper .or-wrapper {\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  margin-right: 10px;\n  height: 35px;\n}\n.filters-wrapper .or-wrapper .or {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n.filters-wrapper .or-wrapper .filter-icon {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n@media (min-width: 640px) {\n  .filters-wrapper {\n    width: 1020px;\n    margin: 0 auto;\n  }\n\n  ion-segment {\n    max-width: 500px;\n    margin-right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3QtdHJhaW5pbmdzLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FBREo7QUFHSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUdRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQURaO0FBSWdCO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQUZwQjtBQUlvQjtFQUNJLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0FBRnhCO0FBT1k7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBTGhCO0FBU1E7RUFDSSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBUFo7QUFXSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVFI7QUFXUTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7QUFUWjtBQVlRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVlo7QUFlQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGNBQUE7RUFaTjs7RUFlRTtJQUNJLGdCQUFBO0lBQ0Esa0JBQUE7RUFaTjtBQUNGIiwiZmlsZSI6InBhc3QtdHJhaW5pbmdzLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5maWx0ZXJzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIC5zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbiAgICAgICAgLmZpbHRlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIDo6bmctZGVlcCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlvbi1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VhcmNoLW1heC1lcnJvciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3Itd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuXHJcbiAgICAgICAgLm9yIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWx0ZXItaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgLmZpbHRlcnMtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VnbWVudCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 32016:
/*!****************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 5px;\n}\nion-content::part(scroll) {\n  overflow-y: hidden;\n}\n.ion-spinner-class {\n  top: 150px;\n}\n.error-wrapper {\n  width: 250px;\n  margin: 5rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.error-wrapper .error-image {\n  width: 250px;\n  height: 200px;\n}\n.error-wrapper .error-title {\n  font-size: 18px;\n  margin-bottom: 5px;\n  text-align: center;\n}\n.error-wrapper .error-description {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 24px;\n  text-align: center;\n  color: var(--ion-color-medium);\n}\nion-list {\n  margin-top: 10px;\n}\nion-list .search-not-found-img {\n  width: 150px;\n  height: 150px;\n  margin: 0 auto;\n}\nion-list .search-not-found-title {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  margin: 10px auto 0 auto;\n}\nion-list .search-not-found-description {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  text-align: center;\n  margin: 10px auto 0 auto;\n}\n.card-info-wrapper {\n  border: 2px solid var(--ion-color-primary);\n  box-shadow: var(--ion-box-shadow);\n  margin: 5px 0;\n}\n.card-info-wrapper--header {\n  padding: 16px 10px 8px 10px;\n}\n.card-info-wrapper .header-title {\n  font-size: 20px;\n  white-space: nowrap;\n}\n::ng-deep .card-info-wrapper .header-title--key {\n  color: var(--ion-color-primary);\n}\n::ng-deep .card-info-wrapper .header-title--value {\n  font-weight: 400;\n}\n.card-info-wrapper .food-key {\n  font-size: 16px;\n  color: var(--ion-color-primary);\n}\n.card-info-wrapper .food-value {\n  font-size: 16px;\n  color: black;\n}\n.training-item-wrapper {\n  display: block;\n  overflow: auto;\n}\n.training-item-wrapper::-webkit-scrollbar {\n  width: 6px;\n}\n.training-item-wrapper::-webkit-scrollbar-thumb {\n  background-color: var(--ion-color-light-periwinkle);\n  border-radius: 6px;\n}\n.training-item-wrapper .bl-training-item:first-of-type ::ng-deep ion-card {\n  margin-top: 3px;\n}\n.training-item-wrapper .no-trainings {\n  margin: 0 1rem 1rem 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.training-item-wrapper .no-trainings-title {\n  font-size: 18px;\n  font-weight: normal;\n  text-align: center;\n}\n@media (min-width: 640px) {\n  .card-info-wrapper {\n    width: 1020px;\n    margin: 0 auto;\n    margin-top: 5px;\n  }\n\n  .training-item-wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: baseline;\n    width: 1020px;\n    overflow: auto;\n    margin: 0 auto;\n  }\n\n  ion-list {\n    width: 1020px;\n    margin: 10px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3QtdHJhaW5pbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVJO0VBQ0ksa0JBQUE7QUFBUjtBQUlBO0VBQ0ksVUFBQTtBQURKO0FBSUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZSO0FBS0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBSFI7QUFPQTtFQUNJLGdCQUFBO0FBSko7QUFNSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUpSO0FBT0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBTFI7QUFRSTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFOUjtBQVVBO0VBQ0ksMENBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7QUFQSjtBQVNJO0VBQ0ksMkJBQUE7QUFQUjtBQVVJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBUlI7QUFVUTtFQUNJLCtCQUFBO0FBUlo7QUFXUTtFQUNJLGdCQUFBO0FBVFo7QUFhSTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQVhSO0FBY0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVpSO0FBZ0JBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFiSjtBQWVJO0VBQ0ksVUFBQTtBQWJSO0FBZ0JJO0VBQ0ksbURBQUE7RUFDQSxrQkFBQTtBQWRSO0FBa0JRO0VBQ0ksZUFBQTtBQWhCWjtBQW9CSTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFsQlI7QUFvQlE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWxCWjtBQXVCQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBckJOOztFQXdCRTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUFyQk47O0VBd0JFO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0VBckJOO0FBQ0YiLCJmaWxlIjoicGFzdC10cmFpbmluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XHJcblxyXG4gICAgJjo6cGFydChzY3JvbGwpIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pb24tc3Bpbm5lci1jbGFzcyB7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG59XHJcblxyXG4uZXJyb3Itd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuZXJyb3ItaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9yLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgLnNlYXJjaC1ub3QtZm91bmQtaW1nIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLW5vdC1mb3VuZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLW5vdC1mb3VuZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1pbmZvLXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0taW9uLWJveC1zaGFkb3cpO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuXHJcbiAgICAmLS1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTBweCA4cHggMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgOjpuZy1kZWVwICYtLWtleSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Om5nLWRlZXAgJi0tdmFsdWUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vZC1rZXkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb29kLXZhbHVlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG4udHJhaW5pbmctaXRlbS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1wZXJpd2lua2xlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJsLXRyYWluaW5nLWl0ZW06Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgOjpuZy1kZWVwIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm8tdHJhaW5pbmdzIHtcclxuICAgICAgICBtYXJnaW46IDAgMXJlbSAxcmVtIDJyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG5cclxuICAgIC5jYXJkLWluZm8td3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyYWluaW5nLWl0ZW0td3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMjBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMjBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 63199:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/show-by-day/show-by-day.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-fab {\n  margin-top: 35px;\n}\nion-fab ion-fab-button {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\nion-fab ion-fab-list ion-fab-button {\n  width: 50px;\n  height: 50px;\n}\n.active-day {\n  --background: var(--ion-color-primary-shade) !important;\n}\n@media (min-width: 640px) {\n  ion-fab {\n    position: absolute;\n    right: 380px;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYnktZGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksc0NBQUE7RUFDQSxjQUFBO0FBQVI7QUFJUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRlo7QUFPQTtFQUNJLHVEQUFBO0FBSko7QUFPQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoic2hvdy1ieS1kYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWZhYiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG5cclxuICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tZmFiLWxpc3Qge1xyXG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUtZGF5IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgaW9uLWZhYiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAzODBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 78771:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.scss?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  position: relative;\n}\n:host .action {\n  padding: 0 5px;\n  color: var(--ion-color-primary);\n  width: 32px;\n  height: 100%;\n  border-left: 1px solid var(--ion-color-light-periwinkle);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLWl0ZW0tYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FBQUo7QUFFSTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7QUFBUiIsImZpbGUiOiJ0cmFpbmluZy1pdGVtLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5hY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXBlcml3aW5rbGUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 80296:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  height: 230px;\n}\nion-card:hover, ion-card:active {\n  background: var(--ion-color-light);\n}\nion-card ion-card-header {\n  padding-bottom: 0;\n}\nion-card ion-card-header .day-name {\n  color: var(--ion-color-primary);\n  margin-right: 3px;\n}\nion-card ion-card-header .day-date {\n  font-weight: 400;\n}\nion-card ion-card-header ion-card-title {\n  white-space: nowrap;\n}\nion-card ion-card-content {\n  height: 83%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding: 0;\n}\nion-card ion-card-content .info-grid {\n  flex: 0;\n}\nion-card ion-card-content .info-grid .bodyweight,\nion-card ion-card-content .info-grid .created-at {\n  display: flex;\n  flex-direction: column;\n  white-space: nowrap;\n}\nion-card ion-card-content .info-grid .bodyweight--key,\nion-card ion-card-content .info-grid .created-at--key {\n  color: var(--ion-color-primary);\n  justify-content: center;\n  font-size: 16px;\n}\nion-card ion-card-content .info-grid .bodyweight--value,\nion-card ion-card-content .info-grid .created-at--value {\n  justify-content: center;\n  font-size: 16px;\n}\nion-card ion-card-content .info-grid .bodyweight--no-bodyweight,\nion-card ion-card-content .info-grid .created-at--no-bodyweight {\n  margin: 0 auto;\n}\nion-card ion-card-content .exercise-wrapper {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-card ion-card-content .exercise-wrapper-no-dots {\n  margin-bottom: 20px;\n}\nion-card ion-card-content .exercise-wrapper .exercise-name {\n  max-width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 16px;\n}\nion-card ion-card-content .exercise-wrapper .exercise-dots {\n  align-self: center;\n}\nion-card ion-card-content .actions {\n  display: flex;\n  justify-content: flex-end;\n  border-top: 1px solid var(--ion-color-light-periwinkle);\n  height: 40px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n@media (min-width: 640px) {\n  ion-card {\n    margin-right: 5px;\n    width: 325px;\n  }\n  ion-card ion-card-content {\n    min-height: calc(100% - 40px);\n    position: relative;\n  }\n  ion-card ion-card-content .actions {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0FBQUo7QUFFSTtFQUVJLGtDQUFBO0FBRFI7QUFJSTtFQUNJLGlCQUFBO0FBRlI7QUFJUTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7QUFGWjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWjtBQU1RO0VBQ0ksbUJBQUE7QUFKWjtBQVFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU5SO0FBUVE7RUFDSSxPQUFBO0FBTlo7QUFRWTs7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQU5oQjtBQVFnQjs7RUFDSSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUxwQjtBQVFnQjs7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFMcEI7QUFRZ0I7O0VBQ0ksY0FBQTtBQUxwQjtBQVVRO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVJaO0FBVVk7RUFDSSxtQkFBQTtBQVJoQjtBQVdZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFUaEI7QUFZWTtFQUNJLGtCQUFBO0FBVmhCO0FBY1E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBWlo7QUFpQkE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsWUFBQTtFQWROO0VBZ0JNO0lBQ0ksNkJBQUE7SUFDQSxrQkFBQTtFQWRWO0VBZ0JVO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQWRkO0FBQ0YiLCJmaWxlIjoidHJhaW5pbmctaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG5cclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAuZGF5LW5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXktZGF0ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogODMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgLmluZm8tZ3JpZCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDA7XHJcblxyXG4gICAgICAgICAgICAuYm9keXdlaWdodCxcclxuICAgICAgICAgICAgLmNyZWF0ZWQtYXQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgICYtLWtleSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi0tdmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLS1uby1ib2R5d2VpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmV4ZXJjaXNlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICYtbm8tZG90cyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZXhlcmNpc2UtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5leGVyY2lzZS1kb3RzIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXBlcml3aW5rbGUpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzMjVweDtcclxuXHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 9370:
/*!************************************************************************************!*\
  !*** ./src/app/views/training/new-training/new-training.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-title\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'navigation.new_training' | translate }}</ion-title>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button\r\n                *ngIf=\"(isAuthenticated$ | async) && (isEditing$ | async)\"\r\n                type=\"button\"\r\n                (click)=\"goToPastTraining()\">\r\n                <ion-icon name=\"arrow-back-circle-sharp\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button\r\n                *ngIf=\"isReorder$ | async\"\r\n                type=\"button\"\r\n                (click)=\"openReorderModal()\">\r\n                <ion-icon\r\n                    slot=\"icon-only\"\r\n                    class=\"reorder-icon\"\r\n                    name=\"git-compare-sharp\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-text-center ion-padding\">\r\n    <ng-container *ngIf=\"(trainingStream$ | async) as trainingData\">\r\n        <ng-container *ngIf=\"trainingData.IsError; else valueOrLoading\">\r\n            <div class=\"error-wrapper\">\r\n                <img\r\n                    class=\"error-image\"\r\n                    src=\"../../../../assets/svgs/error1.svg\">\r\n                <h3 class=\"error-title\">\r\n                    {{ 'training.new_training.errors.new_training_error_title' | translate }}\r\n                </h3>\r\n                <span class=\"error-description\">\r\n                    {{ editMode ? ('training.new_training.errors.new_training_error_description' | translate) : ('training.new_training.errors.new_training_error_load') | translate }}\r\n                </span>\r\n                <ion-button\r\n                    color=\"primary\"\r\n                    type=\"button\"\r\n                    (click)=\"tryAgain()\">\r\n                    {{ 'common.try_again' | translate }}\r\n                </ion-button>\r\n            </div>\r\n        </ng-container>\r\n        <ng-template #valueOrLoading>\r\n            <ion-spinner\r\n                *ngIf=\"trainingData.IsLoading\"\r\n                class=\"ion-spinner-class\"\r\n                name=\"crescent\"\r\n                color=\"primary\"></ion-spinner>\r\n            <form\r\n                autocomplete=\"off\"\r\n                [class.hide-form]=\"trainingData.IsLoading\"\r\n                [formGroup]=\"form\">\r\n                <ion-item\r\n                    fill=\"outline\">\r\n                    <ion-label position=\"floating\">{{ 'training.new_training.pick_bodyweight' | translate }}</ion-label>\r\n                    <ion-input\r\n                        #bodyweightRef\r\n                        class=\"bodyweight-input\"\r\n                        type=\"number\"\r\n                        formControlName=\"bodyweight\"\r\n                        (ionChange)=\"onBodyweightChange(bodyweightRef.value)\"></ion-input>\r\n                        <ion-note\r\n                            *ngIf=\"accessFormData('bodyweight')?.errors?.onlyNumbers\"\r\n                            slot=\"error\">\r\n                            {{ 'training.new_training.errors.only_numbers' | translate }}\r\n                        </ion-note>\r\n                        <ion-note\r\n                            *ngIf=\"accessFormData('bodyweight')?.errors?.min\"\r\n                            slot=\"error\">\r\n                            {{ 'training.new_training.errors.bodyweight_min' | translate }}\r\n                        </ion-note>\r\n                        <ion-note\r\n                            *ngIf=\"accessFormData('bodyweight')?.errors?.max\"\r\n                            slot=\"error\">\r\n                            {{ 'training.new_training.errors.bodyweight_max' | translate }}\r\n                        </ion-note>\r\n                </ion-item>\r\n\r\n                <ion-item\r\n                    class=\"datetime-item\"\r\n                    fill=\"outline\"\r\n                    lines=\"none\"\r\n                    (click)=\"openDateTimePicker()\">\r\n                    <ion-icon\r\n                        class=\"datetime-icon\"\r\n                        slot=\"start\"\r\n                        color=\"primary\"\r\n                        name=\"calendar-outline\"></ion-icon>\r\n                    <ion-label>{{ 'common.date' | translate }}</ion-label>\r\n                    <ion-text color=\"primary\">{{ formattedTodayDate }}</ion-text>\r\n                </ion-item>\r\n                <ng-container *ngIf=\"accessFormData('date')?.errors?.required\">\r\n                    <ion-note class=\"error\">{{ 'training.new_training.errors.date_required' | translate }}</ion-note>\r\n                </ng-container>\r\n\r\n                <bl-single-exercise\r\n                    formControlName=\"exercises\"\r\n                    [bodyweight]=\"accessFormData('bodyweight')\"\r\n                    [trainingDate]=\"accessFormData('date')\"\r\n                    [editData]=\"editData\"\r\n                    [isLoading]=\"trainingData.IsLoading\"\r\n                    [editMode]=\"editMode\"\r\n                    (exerciseAdded)=\"onExerciseAdded($event)\"></bl-single-exercise>\r\n            </form>\r\n        </ng-template>\r\n    </ng-container>\r\n</ion-content>\r\n";

/***/ }),

/***/ 27886:
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/reorder-exercises/reorder-exercises.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"onCancel()\">\r\n                <ion-icon name=\"close\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'training.new_training.reorder_exercises' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n    <div\r\n        *ngIf=\"(currentExercises$ | async) as currentExercises\"\r\n        class=\"wrapper\">\r\n        <ion-reorder-group\r\n            [disabled]=\"false\"\r\n            (ionItemReorder)=\"doReorder($any($event))\">\r\n            <ion-item *ngFor=\"let exerciseName of currentExercises\">\r\n                <ion-label>\r\n                    {{ exerciseName | translate }}\r\n                </ion-label>\r\n                <ion-reorder slot=\"end\">\r\n                    <ion-icon\r\n                        color=\"primary\"\r\n                        name=\"repeat\"></ion-icon>\r\n                </ion-reorder>\r\n            </ion-item>\r\n        </ion-reorder-group>\r\n    </div>\r\n    <div class=\"actions\">\r\n        <ion-button\r\n            type=\"button\"\r\n            color=\"primary\"\r\n            (click)=\"reorderExercises()\">\r\n            {{ 'common.actions.confirm' | translate }}\r\n        </ion-button>\r\n    </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 25798:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"filters-wrapper\">\r\n    <form\r\n        #form=\"ngForm\"\r\n        class=\"search-wrapper\"\r\n        autocomplete=\"off\">\r\n        <div class=\"filter-wrapper\">\r\n            <ion-input\r\n                ngDefaultControl\r\n                #search=\"ngModel\"\r\n                name=\"search\"\r\n                type=\"text\"\r\n                class=\"search-input\"\r\n                [maxlength]=\"inputMaxLength\"\r\n                [placeholder]=\"'training.past_trainings.filters.enter_search_term' | translate\"\r\n                [(ngModel)]=\"searchValue\"\r\n                (keyup)=\"emitKeyboardEvent($event)\"></ion-input>\r\n            <span\r\n                *ngIf=\"search?.control?.errors?.maxlength\"\r\n                class=\"search-max-error\">\r\n                {{ 'training.past_trainings.filters.errors.search_max_length' | translate }}\r\n            </span>\r\n            <div class=\"or-wrapper\">\r\n                <span class=\"or\">{{ 'common.or' | translate }}</span>\r\n                <ion-icon\r\n                    name=\"filter-outline\"\r\n                    class=\"filter-icon\"></ion-icon>\r\n            </div>\r\n        </div>\r\n        <ion-segment\r\n            color=\"primary\"\r\n            mode=\"ios\"\r\n            [value]=\"periodFilter\"\r\n            [disabled]=\"periodDisabled\"\r\n            (ionChange)=\"segmentChanged($any($event))\">\r\n            <ng-container *ngFor=\"let option of sortOptions\">\r\n                <ion-segment-button [value]=\"option.key\">\r\n                    <ion-label color=\"primary\">{{ option.value | async }}</ion-label>\r\n                </ion-segment-button>\r\n            </ng-container>\r\n        </ion-segment>\r\n    </form>\r\n</div>\r\n";

/***/ }),

/***/ 36269:
/*!****************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header mode=\"md\">\r\n    <ion-toolbar class=\"toolbar-title\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'navigation.past_trainings' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ng-container *ngIf=\"pastTrainings$ | async as state\">\r\n        <bl-show-by-day\r\n            *ngIf=\"periodFilter === 'day' && !isSearch && !state.IsError\"\r\n            [startDate]=\"showByDayStartDate\"\r\n            (dayActivated)=\"onDayActivated($event)\"></bl-show-by-day>\r\n        <ng-container *ngIf=\"state.IsError; else valueOrLoading\">\r\n            <div class=\"error-wrapper\">\r\n                <img\r\n                    class=\"error-image\"\r\n                    src=\"../../../../assets/svgs/error1.svg\">\r\n                <h3 class=\"error-title\">\r\n                    {{ 'training.past_trainings.errors.past_trainings_error_title' | translate }}\r\n                </h3>\r\n                <span class=\"error-description\">\r\n                    {{ 'training.past_trainings.errors.past_trainings_error_description' | translate }}\r\n                </span>\r\n                <ion-button\r\n                    color=\"primary\"\r\n                    type=\"button\"\r\n                    (click)=\"tryAgain()\">\r\n                    {{ 'common.try_again' | translate }}\r\n                </ion-button>\r\n            </div>\r\n        </ng-container>\r\n        <ng-template #valueOrLoading>\r\n            <ng-container *ngIf=\"state.IsLoading\">\r\n                <ion-spinner\r\n                    class=\"ion-spinner-class\"\r\n                    name=\"crescent\"\r\n                    color=\"primary\"></ion-spinner>\r\n            </ng-container>\r\n            <bl-past-trainings-filters\r\n                [periodDisabled]=\"isSearch\"\r\n                [periodFilter]=\"periodFilter\"\r\n                (trainingEmitted)=\"searchEmitted($event)\"\r\n                (periodEmitted)=\"onPeriodEmitted($event, state.Value?.Results?.Dates?.StartDate)\"></bl-past-trainings-filters>\r\n            <ng-container *ngIf=\"isSearch && state.Value?.TotalCount === 0; else otherCases\">\r\n                <ion-list class=\"ion-text-center\">\r\n                    <ion-item lines=\"none\">\r\n                        <img\r\n                            class=\"search-not-found-img\"\r\n                            src=\"../../../../assets/svgs/not-found.svg\">\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                        <ion-text class=\"search-not-found-title\">\r\n                            {{ 'training.past_trainings.filters.search_no_result_title' | translate }}\r\n                        </ion-text>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                        <ion-text class=\"search-not-found-description\">\r\n                            {{ 'training.past_trainings.filters.search_no_result_description' | translate }}\r\n                        </ion-text>\r\n                    </ion-item>\r\n                </ion-list>\r\n            </ng-container>\r\n            <ng-template #otherCases>\r\n                <ion-card class=\"card-info-wrapper ion-text-center\">\r\n                    <ion-card-header class=\"card-info-wrapper--header\">\r\n                        <ion-card-title class=\"header-title\">\r\n                            <div\r\n                                *skeleton=\"state.IsLoading; width: '305px'; height: '25px';\"\r\n                                #timePeriod\r\n                                [innerHTML]=\"setTimePeriod$(state.Value?.Results) | async\"></div>\r\n                        </ion-card-title>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ng-container *skeleton=\"state.IsLoading; width: '305px'; height: '25px';\">\r\n                            <strong class=\"food-key\">\r\n                                {{ ('common.food' | translate) + ': ' }}\r\n                            </strong>\r\n                            <span class=\"food-value\">{{ food + ' ' + ('common.kcal' | translate) }}</span>\r\n                        </ng-container>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n                <div\r\n                    #itemWrapper\r\n                    class=\"training-item-wrapper\">\r\n                    <ng-container *ngIf=\"state.Value?.TotalCount > 0; else noTrainings\">\r\n                        <bl-training-item\r\n                            *ngFor=\"let training of state.Value?.Results?.Trainings\"\r\n                            [training]=\"training\"></bl-training-item>\r\n                    </ng-container>\r\n                    <ng-template #noTrainings>\r\n                        <section class=\"no-trainings\">\r\n                            <ng-container *ngIf=\"!isSearch && state.Value?.TotalCount === 0\">\r\n                                <h1 class=\"no-trainings-title\">\r\n                                    {{ periodFilter === 'week' ?\r\n                                        ('training.past_trainings.no_trainings_week' | translate) :\r\n                                        ('training.past_trainings.no_trainings_day' | translate: { dayName: getDayTranslation$(state.Value?.Results?.DayName) | async }) }}\r\n                                </h1>\r\n                                <ion-button\r\n                                    mode=\"md\"\r\n                                    type=\"button\"\r\n                                    color=\"primary\"\r\n                                    (click)=\"logNewTraining()\">\r\n                                    {{ 'training.past_trainings.log_training' | translate }}\r\n                                </ion-button>\r\n                            </ng-container>\r\n                        </section>\r\n                    </ng-template>\r\n                </div>\r\n                <bl-pagination\r\n                    [isSearch]=\"isSearch\"\r\n                    [page]=\"page\"\r\n                    [size]=\"size\"\r\n                    [isPreviousPage]=\"isPreviousPage\"\r\n                    [isNextPage]=\"isNextPage\"\r\n                    [data]=\"state\"\r\n                    [isLoading]=\"state.IsLoading\"\r\n                    (paginatorChanged)=\"onPaginatorChanged(\r\n                        $event,\r\n                        state.Value?.Results?.Dates?.StartDate)\"></bl-pagination>\r\n            </ng-template>\r\n        </ng-template>\r\n    </ng-container>\r\n</ion-content>\r\n";

/***/ }),

/***/ 57462:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/show-by-day/show-by-day.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-fab\r\n    horizontal=\"end\"\r\n    vertical=\"down\"\r\n    slot=\"fixed\"\r\n    [activated]=\"true\">\r\n    <ion-fab-button color=\"primary\">\r\n        <ion-icon name=\"calendar-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list>\r\n        <ion-fab-button\r\n            *ngFor=\"let day of (daysOfWeek$ | async); let i = index;\"\r\n            type=\"button\"\r\n            [class.active-day]=\"(activeDay$$ | async) === (i + 1)\"\r\n            (click)=\"$event.stopPropagation(); onDayActivated(i);\">\r\n            {{ day.substring(0, 3) }}\r\n        </ion-fab-button>\r\n    </ion-fab-list>\r\n</ion-fab>\r\n";

/***/ }),

/***/ 40251:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.html?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-icon\r\n    class=\"action\"\r\n    [name]=\"action | mapTrainingItemActions: 'icon'\"\r\n    (click)=\"$event.stopPropagation(); performAction(action)\"></ion-icon>\r\n\r\n";

/***/ }),

/***/ 26453:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card\r\n    mode=\"md\"\r\n    class=\"ion-text-center\"\r\n    (click)=\"trainingClicked()\">\r\n    <ion-card-header>\r\n        <ion-card-title>\r\n            <strong class=\"day-name\">{{ ('weekdays.' + weekDays[dayIndex] | translate) }}</strong>\r\n            <ion-text class=\"day-date\">{{ '(' + (training.trainingDate | date: 'dd.MM.yyyy') + ')' }}</ion-text>\r\n        </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n        <ion-grid class=\"info-grid\">\r\n            <ion-row>\r\n                <ion-col *ngIf=\"training?.bodyweight\">\r\n                    <div class=\"bodyweight\">\r\n                        <strong class=\"bodyweight--key\">\r\n                            {{ 'common.bodyweight' | translate }}\r\n                        </strong>\r\n                        <span class=\"bodyweight--value\">\r\n                            {{ training.bodyweight + ' kg' }}\r\n                        </span>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <div\r\n                        class=\"created-at\"\r\n                        [class.created-at--no-bodyweight]=\"!training?.bodyweight\">\r\n                        <strong class=\"created-at--key\">\r\n                            {{ 'common.created_at_time' | translate }}\r\n                        </strong>\r\n                        <span class=\"created-at--value\">\r\n                            {{ timeCreated }}\r\n                        </span>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n        <div\r\n            class=\"exercise-wrapper\"\r\n            [class.exercise-wrapper-no-dots]=\"training.exercises.length <= 2\">\r\n            <span\r\n                *ngFor=\"let data of (training.exercises | slice:0:2); let i = index\"\r\n                class=\"exercise-name\">\r\n                {{ (i+1) + '. ' + (data.exerciseData.name | translate) }}\r\n            </span>\r\n            <span\r\n                *ngIf=\"training.exercises.length > 2\"\r\n                class=\"exercise-dots\">\r\n                &#8942;\r\n            </span>\r\n        </div>\r\n        <div class=\"actions\">\r\n            <bl-training-item-actions\r\n                *ngFor=\"let action of actions\"\r\n                [action]=\"action\"\r\n                [training]=\"training\"\r\n                [weekDays]=\"weekDays\"\r\n                [dayIndex]=\"dayIndex\"\r\n                [timeCreated]=\"timeCreated\"></bl-training-item-actions>\r\n        </div>\r\n    </ion-card-content>\r\n</ion-card>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_training_training_module_ts.js.map