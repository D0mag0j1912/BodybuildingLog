"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_training_training_module_ts"],{

/***/ 6740:
/*!***********************************************************************!*\
  !*** ./src/app/constants/enums/training-item-wrapper-heights.enum.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingItemWrapperHeights": () => (/* binding */ TrainingItemWrapperHeights)
/* harmony export */ });
var TrainingItemWrapperHeights;
(function (TrainingItemWrapperHeights) {
    TrainingItemWrapperHeights[TrainingItemWrapperHeights["WEEK_HEIGHT"] = 285] = "WEEK_HEIGHT";
    TrainingItemWrapperHeights[TrainingItemWrapperHeights["SEARCH_HEIGHT"] = 315] = "SEARCH_HEIGHT";
})(TrainingItemWrapperHeights || (TrainingItemWrapperHeights = {}));


/***/ }),

/***/ 1676:
/*!***********************************************************!*\
  !*** ./src/app/constants/shared/input-maxlength.const.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INPUT_MAX_LENGTH": () => (/* binding */ INPUT_MAX_LENGTH)
/* harmony export */ });
const INPUT_MAX_LENGTH = 50;


/***/ }),

/***/ 5993:
/*!*****************************************************!*\
  !*** ./src/app/constants/shared/kg-to-lbs.const.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KG_TO_LBS": () => (/* binding */ KG_TO_LBS)
/* harmony export */ });
const KG_TO_LBS = 2.204;


/***/ }),

/***/ 5029:
/*!***********************************************************************!*\
  !*** ./src/app/constants/training/bodyweight-set-categories.const.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BODYWEIGHT_SET_CATEGORIES": () => (/* binding */ BODYWEIGHT_SET_CATEGORIES)
/* harmony export */ });
const BODYWEIGHT_SET_CATEGORIES = [
    'dynamicBodyweight',
    'dynamicWeighted',
    'staticBodyweight',
    'staticWeighted',
];


/***/ }),

/***/ 5209:
/*!*********************************************************************!*\
  !*** ./src/app/directives/training-item/training-item.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingItemDirective": () => (/* binding */ TrainingItemDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


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

/***/ 2134:
/*!**********************************************************!*\
  !*** ./src/app/helpers/control-value-accessor.helper.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getControlValueAccessor": () => (/* binding */ getControlValueAccessor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);


function getControlValueAccessor(component) {
    return {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => component),
        multi: true,
    };
}


/***/ }),

/***/ 3140:
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

/***/ 4746:
/*!***********************************************************!*\
  !*** ./src/app/helpers/round-to-decimal-places.helper.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "roundToDecimalPlaces": () => (/* binding */ roundToDecimalPlaces)
/* harmony export */ });
/* harmony import */ var _is_never_check_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-never-check.helper */ 3899);

function roundToDecimalPlaces(decimalPlaces, value) {
    switch (decimalPlaces) {
        case 1: {
            return Math.round(value * 10) / 10;
        }
        case 2: {
            return Math.round(value * 100) / 100;
        }
        default: {
            (0,_is_never_check_helper__WEBPACK_IMPORTED_MODULE_0__.isNeverCheck)(decimalPlaces);
        }
    }
}


/***/ }),

/***/ 2315:
/*!*****************************************************************!*\
  !*** ./src/app/helpers/training/convert-weight-units.helper.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertWeightUnit": () => (/* binding */ convertWeightUnit)
/* harmony export */ });
/* harmony import */ var _constants_shared_kg_to_lbs_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/shared/kg-to-lbs.const */ 5993);
/* harmony import */ var _round_to_decimal_places_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../round-to-decimal-places.helper */ 4746);


function convertWeightUnit(weightUnit, value) {
    return weightUnit === 'lbs'
        ? (0,_round_to_decimal_places_helper__WEBPACK_IMPORTED_MODULE_1__.roundToDecimalPlaces)(1, value * _constants_shared_kg_to_lbs_const__WEBPACK_IMPORTED_MODULE_0__.KG_TO_LBS)
        : (0,_round_to_decimal_places_helper__WEBPACK_IMPORTED_MODULE_1__.roundToDecimalPlaces)(1, value / _constants_shared_kg_to_lbs_const__WEBPACK_IMPORTED_MODULE_0__.KG_TO_LBS);
}


/***/ }),

/***/ 4391:
/*!********************************************************************!*\
  !*** ./src/app/helpers/training/new-training/bodyweight.helper.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillBodyweight": () => (/* binding */ fillBodyweight)
/* harmony export */ });
function fillBodyweight(initialBodyweight, editBodyweight) {
    if (initialBodyweight) {
        if (!editBodyweight) {
            return initialBodyweight;
        }
        else {
            return editBodyweight;
        }
    }
    else {
        if (!editBodyweight) {
            return null;
        }
        else {
            return editBodyweight;
        }
    }
}


/***/ }),

/***/ 3037:
/*!***************************************************************************!*\
  !*** ./src/app/helpers/training/past-trainings/map-stream-data.helper.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapStreamData": () => (/* binding */ mapStreamData)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5722);


const mapStreamData = () => (source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((data) => ({
    IsLoading: false,
    Value: data.Value,
    IsError: false,
})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((_) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
    IsLoading: false,
    IsError: true,
})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)({
    IsLoading: true,
    IsError: false,
}));


/***/ }),

/***/ 9511:
/*!********************************************************!*\
  !*** ./src/app/helpers/training/show-by-day.helper.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateFirstWeekDay": () => (/* binding */ calculateFirstWeekDay),
/* harmony export */   "calculateLastWeekDay": () => (/* binding */ calculateLastWeekDay),
/* harmony export */   "getCurrentDayIndex": () => (/* binding */ getCurrentDayIndex)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 8031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 8210);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 312);

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

/***/ 2551:
/*!*************************************************************!*\
  !*** ./src/app/modules/training/training-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingRoutingModule": () => (/* binding */ TrainingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/training/new-training/new-training.component */ 7332);
/* harmony import */ var _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings.component */ 157);





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

/***/ 9952:
/*!*****************************************************!*\
  !*** ./src/app/modules/training/training.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingModule": () => (/* binding */ TrainingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _directives_autofocus_autofocus_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/autofocus/autofocus.module */ 2638);
/* harmony import */ var _directives_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/skeleton-loader/skeleton-loader.module */ 3944);
/* harmony import */ var _directives_training_item_training_item_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/training-item/training-item.directive */ 5209);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/pipes.module */ 5503);
/* harmony import */ var _pipes_shared_camel_to_snake_case_camel_to_snake_case_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/shared/camel-to-snake-case/camel-to-snake-case.module */ 9442);
/* harmony import */ var _pipes_shared_sanitize_html_sanitize_html_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/shared/sanitize-html/sanitize-html.module */ 8487);
/* harmony import */ var _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module */ 1515);
/* harmony import */ var _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/training/new-training/new-training.component */ 7332);
/* harmony import */ var _views_training_new_training_reorder_exercises_reorder_exercises_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../views/training/new-training/reorder-exercises/reorder-exercises.component */ 8452);
/* harmony import */ var _views_training_new_training_single_exercise_sets_change_set_category_change_set_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../views/training/new-training/single-exercise/sets/change-set-category/change-set-category.component */ 2841);
/* harmony import */ var _views_training_new_training_single_exercise_sets_set_set_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../views/training/new-training/single-exercise/sets/set/set.component */ 5361);
/* harmony import */ var _views_training_new_training_single_exercise_sets_sets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/training/new-training/single-exercise/sets/sets.component */ 3640);
/* harmony import */ var _views_training_new_training_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../views/training/new-training/single-exercise/single-exercise.component */ 2387);
/* harmony import */ var _views_training_past_trainings_past_trainings_filters_past_trainings_filters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings-filters/past-trainings-filters.component */ 4958);
/* harmony import */ var _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings.component */ 157);
/* harmony import */ var _views_training_past_trainings_show_by_day_show_by_day_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../views/training/past-trainings/show-by-day/show-by-day.component */ 6582);
/* harmony import */ var _views_training_past_trainings_training_item_training_item_actions_training_item_actions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../views/training/past-trainings/training-item/training-item-actions/training-item-actions.component */ 2626);
/* harmony import */ var _views_training_past_trainings_training_item_training_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../views/training/past-trainings/training-item/training-item.component */ 4271);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared.module */ 5601);
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./training-routing.module */ 2551);


























const DIRECTIVES = [_directives_training_item_training_item_directive__WEBPACK_IMPORTED_MODULE_2__.TrainingItemDirective];
const COMPONENTS = [
    _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_7__.NewTrainingComponent,
    _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_14__.PastTrainingsComponent,
    _views_training_past_trainings_training_item_training_item_component__WEBPACK_IMPORTED_MODULE_17__.TrainingItemComponent,
    _views_training_past_trainings_training_item_training_item_actions_training_item_actions_component__WEBPACK_IMPORTED_MODULE_16__.TrainingItemActionsComponent,
    _views_training_past_trainings_past_trainings_filters_past_trainings_filters_component__WEBPACK_IMPORTED_MODULE_13__.PastTrainingsFiltersComponent,
    _views_training_past_trainings_show_by_day_show_by_day_component__WEBPACK_IMPORTED_MODULE_15__.ShowByDayComponent,
    _views_training_new_training_reorder_exercises_reorder_exercises_component__WEBPACK_IMPORTED_MODULE_8__.ReorderExercisesComponent,
    _views_training_new_training_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_12__.SingleExerciseComponent,
    _views_training_new_training_single_exercise_sets_sets_component__WEBPACK_IMPORTED_MODULE_11__.SetsComponent,
    _views_training_new_training_single_exercise_sets_change_set_category_change_set_category_component__WEBPACK_IMPORTED_MODULE_9__.ChangeSetCategoryComponent,
    _views_training_new_training_single_exercise_sets_set_set_component__WEBPACK_IMPORTED_MODULE_10__.SetComponent,
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonicModule,
];
const IMPORTS = [
    _training_routing_module__WEBPACK_IMPORTED_MODULE_19__.TrainingRoutingModule,
    _shared_module__WEBPACK_IMPORTED_MODULE_18__.SharedModule,
    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
    _directives_autofocus_autofocus_module__WEBPACK_IMPORTED_MODULE_0__.AutofocusModule,
    _directives_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_1__.SkeletonLoaderModule,
    _pipes_shared_camel_to_snake_case_camel_to_snake_case_module__WEBPACK_IMPORTED_MODULE_4__.CamelToSnakeCaseModule,
];
const PIPES_MODULES = [_pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_6__.ShowAllExercisesModule, _pipes_shared_sanitize_html_sanitize_html_module__WEBPACK_IMPORTED_MODULE_5__.SanitizeHtmlModule];
let TrainingModule = class TrainingModule {
};
TrainingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.NgModule)({
        declarations: [...COMPONENTS, ...DIRECTIVES],
        imports: [...EXTERNAL_IMPORTS, ...IMPORTS, ...PIPES_MODULES],
        exports: [...COMPONENTS],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe],
    })
], TrainingModule);



/***/ }),

/***/ 9442:
/*!********************************************************************************!*\
  !*** ./src/app/pipes/shared/camel-to-snake-case/camel-to-snake-case.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamelToSnakeCaseModule": () => (/* binding */ CamelToSnakeCaseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _camel_to_snake_case_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camel-to-snake-case.pipe */ 5866);



let CamelToSnakeCaseModule = class CamelToSnakeCaseModule {
};
CamelToSnakeCaseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_camel_to_snake_case_pipe__WEBPACK_IMPORTED_MODULE_0__.CamelToSnakeCasePipe],
        exports: [_camel_to_snake_case_pipe__WEBPACK_IMPORTED_MODULE_0__.CamelToSnakeCasePipe],
    })
], CamelToSnakeCaseModule);



/***/ }),

/***/ 5866:
/*!******************************************************************************!*\
  !*** ./src/app/pipes/shared/camel-to-snake-case/camel-to-snake-case.pipe.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamelToSnakeCasePipe": () => (/* binding */ CamelToSnakeCasePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let CamelToSnakeCasePipe = class CamelToSnakeCasePipe {
    transform(value) {
        return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
    }
};
CamelToSnakeCasePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'camelToSnakeCase' })
], CamelToSnakeCasePipe);



/***/ }),

/***/ 7465:
/*!***************************************************************!*\
  !*** ./src/app/services/api/training/new-training.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTrainingService": () => (/* binding */ NewTrainingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/enums/storage-items.enum */ 3236);
/* harmony import */ var _store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/auth/auth-store.service */ 8458);
/* harmony import */ var _store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/training/new-training-store.service */ 8573);
/* harmony import */ var _store_training_exercises_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/training/exercises-store.service */ 8220);











let NewTrainingService = class NewTrainingService {
    constructor(_http, _authStoreService, _newTrainingStoreService, _exercisesStoreService) {
        this._http = _http;
        this._authStoreService = _authStoreService;
        this._newTrainingStoreService = _newTrainingStoreService;
        this._exercisesStoreService = _exercisesStoreService;
    }
    getExerciseByName(exerciseName) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams().set('exerciseName', exerciseName);
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/training/get_exercise', {
            params: params,
        });
    }
    getExercises() {
        return this._http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/training/get-exercises')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)((response) => {
            this._exercisesStoreService.emitAllExercises(response);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_2__.StorageItems.TRAINING_STATE })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)((storedData) => {
                if (!storedData || !storedData?.value) {
                    return this._authStoreService.loggedUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)((authResponseData) => this._newTrainingStoreService.updateTrainingState(undefined, response.Value, true, authResponseData._id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)((_) => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(response)));
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(response);
            }));
        }));
    }
    addTraining(trainingData) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + '/training/handle-training', trainingData);
    }
    updateTraining(trainingData, trainingId) {
        return this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BACKEND + `/training/handle-training/${trainingId}`, trainingData);
    }
};
NewTrainingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_3__.AuthStoreService },
    { type: _store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_4__.NewTrainingStoreService },
    { type: _store_training_exercises_store_service__WEBPACK_IMPORTED_MODULE_5__.ExercisesStoreService }
];
NewTrainingService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({ providedIn: 'root' })
], NewTrainingService);



/***/ }),

/***/ 7587:
/*!*****************************************************************!*\
  !*** ./src/app/services/api/training/past-trainings.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastTrainingsService": () => (/* binding */ PastTrainingsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-past-trainings-dates.helper */ 5717);






const ROUTE_PREFIX = '/training/';
let PastTrainingsService = class PastTrainingsService {
    constructor(_http) {
        this._http = _http;
    }
    searchPastTrainings(searchValue, pageSize, currentPage) {
        const params = `?searchValue=${searchValue}&size=${pageSize.toString()}&page=${currentPage.toString()}`;
        return this._http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND}${ROUTE_PREFIX}search-trainings${params}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => (0,_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__.mapDateInterval)(response)));
    }
    getPastTrainings(currentDate, filterType) {
        const params = `?currentDate=${currentDate}&filterType=${filterType}`;
        return this._http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND}${ROUTE_PREFIX}past-trainings${params}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => (0,_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__.mapDateInterval)(response)));
    }
    getPastTraining(id) {
        return this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND}${ROUTE_PREFIX}past-trainings/${id}`);
    }
};
PastTrainingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
PastTrainingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
], PastTrainingsService);



/***/ }),

/***/ 9651:
/*!*******************************************************************!*\
  !*** ./src/app/validators/training/single-exercise.validators.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDuplicateExerciseName": () => (/* binding */ checkDuplicateExerciseName)
/* harmony export */ });
function checkDuplicateExerciseName() {
    return (array) => {
        if (array) {
            const exerciseNames = [];
            for (const group of array.controls) {
                if (exerciseNames.indexOf(group.get('exerciseData.name')?.value) !== -1) {
                    return { duplicateExerciseName: group.get('exerciseData.name').value };
                }
                else {
                    exerciseNames.push(group.get('exerciseData.name')?.value);
                }
            }
            return null;
        }
        return null;
    };
}


/***/ }),

/***/ 7332:
/*!***********************************************************************!*\
  !*** ./src/app/views/training/new-training/new-training.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTrainingComponent": () => (/* binding */ NewTrainingComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_training_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-training.component.html?ngResource */ 9370);
/* harmony import */ var _new_training_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-training.component.scss?ngResource */ 9973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! date-fns */ 6527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/store/shared/shared-store.service */ 1102);
/* harmony import */ var _services_api_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api/training/past-trainings.service */ 7587);
/* harmony import */ var _helpers_training_new_training_bodyweight_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/training/new-training/bodyweight.helper */ 4391);
/* harmony import */ var _helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-stream-data.helper */ 3037);
/* harmony import */ var _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/enums/model-roles.enum */ 6988);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/shared/unsubscribe.service */ 523);
/* harmony import */ var _shared_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/datetime-picker/datetime-picker.component */ 185);
/* harmony import */ var _services_store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/store/training/new-training-store.service */ 8573);
/* harmony import */ var _services_api_training_new_training_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/api/training/new-training.service */ 7465);
/* harmony import */ var _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/store/auth/auth-store.service */ 8458);
/* harmony import */ var _constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../constants/training/new-training.const */ 5675);
/* harmony import */ var _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../constants/enums/storage-items.enum */ 3236);
/* harmony import */ var _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/store/shared/preferences-store.service */ 7276);
/* harmony import */ var _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/store/training/past-trainings-store.service */ 8885);
/* harmony import */ var _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../constants/shared/message-duration.const */ 5938);
/* harmony import */ var _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../services/shared/toast-controller.service */ 6467);
/* harmony import */ var _constants_training_bodyweight_set_categories_const__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../constants/training/bodyweight-set-categories.const */ 5029);
/* harmony import */ var _services_store_training_exercises_store_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../services/store/training/exercises-store.service */ 8220);
/* harmony import */ var _single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./single-exercise/single-exercise.component */ 2387);
/* harmony import */ var _reorder_exercises_reorder_exercises_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./reorder-exercises/reorder-exercises.component */ 8452);

































let NewTrainingComponent = class NewTrainingComponent {
  constructor(_newTrainingStoreService, _newTrainingService, _pastTrainingService, _sharedStoreService, _authStoreService, _unsubscribeService, _preferencesStoreService, _pastTrainingsStoreService, _exercisesStoreService, _toastControllerService, _translateService, _route, _router, _modalController, _changeDetectorRef) {
    this._newTrainingStoreService = _newTrainingStoreService;
    this._newTrainingService = _newTrainingService;
    this._pastTrainingService = _pastTrainingService;
    this._sharedStoreService = _sharedStoreService;
    this._authStoreService = _authStoreService;
    this._unsubscribeService = _unsubscribeService;
    this._preferencesStoreService = _preferencesStoreService;
    this._pastTrainingsStoreService = _pastTrainingsStoreService;
    this._exercisesStoreService = _exercisesStoreService;
    this._toastControllerService = _toastControllerService;
    this._translateService = _translateService;
    this._route = _route;
    this._router = _router;
    this._modalController = _modalController;
    this._changeDetectorRef = _changeDetectorRef;
    this._isSubmitted$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
    this._isApiLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
    this.isSubmitted$ = this._isSubmitted$.asObservable();
    this.isApiLoading$ = this._isApiLoading$.asObservable();
    this.trainingStream$ = undefined;
    this.currentPreferences$ = this._preferencesStoreService.preferencesChanged$;
    this.isAuthenticated$ = this._authStoreService.isAuth$;
    this.isEditing$ = this._sharedStoreService.editingTraining$;
    this.isReorder$ = this._newTrainingStoreService.trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(training => {
      const exercises = training.exercises;
      return exercises.length >= 2 && exercises.every(exercise => !!exercise.exerciseData.name && exercise.sets.length > 0);
    }));
    this.exercisesState$ = this._newTrainingStoreService.trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(currentTrainingState => currentTrainingState.exercises), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(exercises => {
      const isBodyweightCategory = exercises.some(exercise => this.bodyweightSetCategories.some(category => exercise.exerciseData.selectedSetCategories.includes(category)));
      this.newTrainingForm.controls.bodyweight.setValidators(isBodyweightCategory ? [...this.initialBodyweightValidators, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.required] : [...this.initialBodyweightValidators]);
      this.newTrainingForm.controls.bodyweight.updateValueAndValidity();
    }));
    this.initialBodyweightValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.pattern(/^[1-9]\d*(\.\d+)?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.min(30), _angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.max(300)];
    this.bodyweightSetCategories = _constants_training_bodyweight_set_categories_const__WEBPACK_IMPORTED_MODULE_20__.BODYWEIGHT_SET_CATEGORIES;
    this.newTrainingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormGroup({
      bodyweight: new _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormControl(0, {
        validators: this.initialBodyweightValidators
      }),
      trainingDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormControl(new Date().toISOString(), {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.required],
        nonNullable: true
      }),
      exercises: new _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormControl([], {
        nonNullable: true
      })
    });
    this.editMode = false;
  }

  ionViewWillEnter() {
    let allExercisesChanged;
    this.trainingStream$ = this._route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(params => this._exercisesStoreService.allExercisesState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(value => {
      if (value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(value);
      } else {
        return this._newTrainingService.getExercises();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(exercisesData => allExercisesChanged = exercisesData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(_ => params))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(params => {
      if (params['id']) {
        this.editMode = true;
        return this._pastTrainingService.getPastTraining(params['id']).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(response => {
          this.editTrainingData = { ...response.Value,
            editMode: true,
            trainingDate: response?.Value?.trainingDate
          };
          return this._newTrainingStoreService.updateTrainingState(this.editTrainingData);
        }));
      } else {
        return this._newTrainingStoreService.trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(currentTrainingState => {
          let newTrainingState;

          if (currentTrainingState.editMode && !this.editMode) {
            newTrainingState = { ..._constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_14__.EMPTY_TRAINING,
              exercises: [(0,_constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_14__.createEmptyExercise)(allExercisesChanged.Value)],
              userId: currentTrainingState?.userId ?? ''
            };
          } else if (!currentTrainingState.editMode && !this.editMode) {
            if (!currentTrainingState.exercises[0]?.exerciseData?.name) {
              newTrainingState = { ..._constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_14__.EMPTY_TRAINING,
                exercises: [(0,_constants_training_new_training_const__WEBPACK_IMPORTED_MODULE_14__.createEmptyExercise)(allExercisesChanged.Value)],
                userId: currentTrainingState?.userId ?? ''
              };
            } else {
              newTrainingState = currentTrainingState;
            }
          }

          return this._newTrainingStoreService.updateTrainingState(newTrainingState);
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(_ => this._sharedStoreService.emitEditingTraining(this.editMode)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(allExercisesChanged).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(_ => this._formInit()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)())));

    this._changeDetectorRef.markForCheck();
  }

  ionViewDidEnter() {
    var _this = this;

    if (this.ionContent) {
      setTimeout( /*#__PURE__*/(0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return yield _this.ionContent.scrollToBottom(500);
      }), 300);
    }
  }

  ionViewDidLeave() {
    this._sharedStoreService.emitEditingTraining(false);
  }

  ngOnDestroy() {
    this._sharedStoreService.completeDayClicked();

    this._isSubmitted$.complete();

    this._isApiLoading$.complete();
  }

  onSubmit() {
    var _this2 = this;

    this._isSubmitted$.next(true);

    if (!this.newTrainingForm.valid || !this._isExerciseFormValid()) {
      return;
    }

    this._isApiLoading$.next(true);

    this._newTrainingStoreService.trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(trainingData => {
      if (this.editMode) {
        return this._newTrainingService.updateTraining(trainingData, this.editTrainingData._id);
      } else {
        delete trainingData._id;
        return this._newTrainingService.addTraining(trainingData);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.finalize)(() => this._isApiLoading$.next(false))).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        yield _this2._toastControllerService.displayToast({
          message: _this2._translateService.instant(response.Message),
          duration: _constants_shared_message_duration_const__WEBPACK_IMPORTED_MODULE_18__.MESSAGE_DURATION.GENERAL,
          color: 'primary'
        });
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  openReorderModal() {
    var _this3 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3._modalController.create({
        component: _reorder_exercises_reorder_exercises_component__WEBPACK_IMPORTED_MODULE_23__.ReorderExercisesComponent,
        keyboardClose: true
      });
      yield modal.present();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_32__.from)(modal.onDidDismiss()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.filter)(response => response?.role === _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_8__.DialogRoles.REORDER_EXERCISES), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.takeUntil)(_this3._unsubscribeService)).subscribe(response => {
        if (response?.data) {
          let streamData;
          _this3.trainingStream$ = _this3._exercisesStoreService.allExercisesState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(value => {
            streamData = {
              IsLoading: true,
              Value: value.Value,
              IsError: false
            };
            return streamData;
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_35__.delay)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(_ => _this3._newTrainingStoreService.updateTrainingState(response.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(_ => _this3._formInit()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(streamData)), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(_ => setTimeout( /*#__PURE__*/(0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return yield _this3.ionContent.scrollToBottom(500);
          }), 100)));

          _this3._changeDetectorRef.markForCheck();
        }
      });
    })();
  }

  openDateTimePicker() {
    var _this4 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4._modalController.create({
        component: _shared_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_10__.DateTimePickerComponent,
        componentProps: {
          dateValue: (0,date_fns__WEBPACK_IMPORTED_MODULE_36__["default"])(new Date(_this4.newTrainingForm.controls.trainingDate.value), `yyyy-MM-dd'T'HH:mm:ss'Z'`)
        },
        cssClass: 'datetime-picker',
        mode: 'md'
      });
      yield modal.present();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_32__.from)(modal.onDidDismiss()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_37__.concatMap)(response => {
        if (response.role === _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_8__.DialogRoles.SELECT_DATE) {
          return _this4._newTrainingStoreService.updateTrainingDate(response.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(_ => response));
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(response);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.finalize)(() => _this4._changeDetectorRef.markForCheck()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.takeUntil)(_this4._unsubscribeService)).subscribe(response => {
        const {
          data,
          role
        } = response;

        if (role === _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_8__.DialogRoles.SELECT_DATE) {
          _this4.newTrainingForm.controls.trainingDate.patchValue(data);

          _this4._setFormattedDate(data);
        }
      });
    })();
  }

  goToPastTraining() {
    var _this5 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5._pastTrainingsStoreService.pastTrainingsQueryParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1)).subscribe( /*#__PURE__*/function () {
        var _ref4 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          yield _this5._router.navigate(['/training/past-trainings'], {
            queryParams: params
          });
          yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.remove({
            key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_15__.StorageItems.QUERY_PARAMS
          });
        });

        return function (_x2) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }

  onBodyweightChange() {
    this._newTrainingStoreService.updateBodyweight(this.newTrainingForm.controls.bodyweight.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_38__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.takeUntil)(this._unsubscribeService)).subscribe();
  }

  onExerciseAdded(event) {
    var _this6 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.ionContent) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_35__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)( /*#__PURE__*/function () {
          var _ref5 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
            return yield _this6.ionContent.scrollToBottom(300);
          });

          return function (_x3) {
            return _ref5.apply(this, arguments);
          };
        }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_35__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)( /*#__PURE__*/function () {
          var _ref6 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
            return yield _this6.singleExerciseComponents.last?.exercisePickerEls?.last?.open(event);
          });

          return function (_x4) {
            return _ref6.apply(this, arguments);
          };
        }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.takeUntil)(_this6._unsubscribeService)).subscribe();
      }
    })();
  }

  tryAgain() {
    if (this.editTrainingData) {
      this.trainingStream$ = this._pastTrainingService.getPastTraining(this.editTrainingData?._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(response => {
        this.editTrainingData = { ...response.Value,
          editMode: true,
          trainingDate: response?.Value?.trainingDate
        };
        return this._newTrainingStoreService.updateTrainingState(this.editTrainingData);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.switchMap)(_ => this._newTrainingService.getExercises()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)());
    } else {
      this.trainingStream$ = this._newTrainingService.getExercises().pipe((0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)());
    }
  }

  goToTop() {
    var _this7 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.ionContent.scrollToTop(400);
    })();
  }

  _formInit() {
    const currentTrainingState = this._newTrainingStoreService.getCurrentTrainingState();

    const dayClickedDate = this._sharedStoreService.getDayClickedDate();

    this.newTrainingForm.controls.bodyweight.patchValue(this._fillBodyweight(currentTrainingState));
    this.newTrainingForm.controls.trainingDate.patchValue(this._fillTrainingDate(dayClickedDate));
    this.newTrainingForm.controls.exercises.patchValue(currentTrainingState.exercises);

    this._setFormattedDate(this.newTrainingForm.controls.trainingDate.value);
  }

  _setFormattedDate(dateValue) {
    const [date, time] = dateValue.split('T');
    this.formattedTodayDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_36__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_39__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_36__["default"])(new Date(date), 'yyyy-MM-dd') + `T${time}`), 'HH:mm, MMM d, yyyy');
  }

  _fillTrainingDate(dayClickedDate) {
    if (this.editTrainingData) {
      return this.editTrainingData.trainingDate.toString();
    } else {
      return dayClickedDate ? dayClickedDate : new Date().toISOString();
    }
  }

  _fillBodyweight(currentTrainingState) {
    return _helpers_training_new_training_bodyweight_helper__WEBPACK_IMPORTED_MODULE_6__.fillBodyweight(currentTrainingState.bodyweight, this.editTrainingData ? this.editTrainingData.bodyweight : null);
  }

  _isExerciseFormValid() {
    let isFormValid = true;
    this.singleExerciseComponents.forEach(component => {
      const exerciseForm = component.form;

      if (exerciseForm.invalid) {
        isFormValid = false;
      }

      if (!component.areSetsValid()) {
        isFormValid = false;
      }
    });
    return isFormValid;
  }

};

NewTrainingComponent.ctorParameters = () => [{
  type: _services_store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_11__.NewTrainingStoreService
}, {
  type: _services_api_training_new_training_service__WEBPACK_IMPORTED_MODULE_12__.NewTrainingService
}, {
  type: _services_api_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_5__.PastTrainingsService
}, {
  type: _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_4__.SharedStoreService
}, {
  type: _services_store_auth_auth_store_service__WEBPACK_IMPORTED_MODULE_13__.AuthStoreService
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__.UnsubscribeService
}, {
  type: _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_16__.PreferencesStoreService
}, {
  type: _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_17__.PastTrainingsStoreService
}, {
  type: _services_store_training_exercises_store_service__WEBPACK_IMPORTED_MODULE_21__.ExercisesStoreService
}, {
  type: _services_shared_toast_controller_service__WEBPACK_IMPORTED_MODULE_19__.ToastControllerService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslateService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_41__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_41__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_42__.ModalController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_43__.ChangeDetectorRef
}];

NewTrainingComponent.propDecorators = {
  ionContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_43__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_42__.IonContent, {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_42__.IonContent
    }]
  }],
  singleExerciseComponents: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_43__.ViewChildren,
    args: [_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_22__.SingleExerciseComponent]
  }]
};
NewTrainingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_44__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_43__.Component)({
  selector: 'bl-new-training',
  template: _new_training_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_43__.ChangeDetectionStrategy.OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__.UnsubscribeService],
  styles: [_new_training_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NewTrainingComponent);


/***/ }),

/***/ 8452:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/training/new-training/reorder-exercises/reorder-exercises.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReorderExercisesComponent": () => (/* binding */ ReorderExercisesComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reorder_exercises_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reorder-exercises.component.html?ngResource */ 7886);
/* harmony import */ var _reorder_exercises_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reorder-exercises.component.scss?ngResource */ 7931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/enums/model-roles.enum */ 6988);
/* harmony import */ var _services_store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/store/training/new-training-store.service */ 8573);









let ReorderExercisesComponent = class ReorderExercisesComponent {
  constructor(newTrainingStoreService, modalController) {
    this.newTrainingStoreService = newTrainingStoreService;
    this.modalController = modalController;
    this.currentExercises$ = this.newTrainingStoreService.trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(training => training.exercises.map(exercise => exercise.exerciseData.name)));
  }

  doReorder(ev) {
    const currentTrainingState = this.newTrainingStoreService.getCurrentTrainingState();
    const exerciseFrom = (this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState).exercises.find((_exercise, index) => index === ev.detail.from);
    const remainingExercises = (this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState).exercises.filter((_exercise, index) => index !== ev.detail.from);
    const reorderedExercises = [...remainingExercises.slice(0, ev.detail.to), exerciseFrom, ...remainingExercises.slice(ev.detail.to)];
    this.reorderedTrainingState = { ...(this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState),
      exercises: reorderedExercises
    };
    ev.detail.complete();
  }

  reorderExercises() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalController.dismiss(_this.reorderedTrainingState, _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.REORDER_EXERCISES);
    })();
  }

  onCancel() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.modalController.dismiss(undefined, _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.CANCEL);
    })();
  }

};

ReorderExercisesComponent.ctorParameters = () => [{
  type: _services_store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_4__.NewTrainingStoreService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

ReorderExercisesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _reorder_exercises_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectionStrategy.OnPush,
  styles: [_reorder_exercises_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ReorderExercisesComponent);


/***/ }),

/***/ 2841:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/sets/change-set-category/change-set-category.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeSetCategoryComponent": () => (/* binding */ ChangeSetCategoryComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _change_set_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-set-category.component.html?ngResource */ 8889);
/* harmony import */ var _change_set_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-set-category.component.scss?ngResource */ 7821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../constants/enums/model-roles.enum */ 6988);







let ChangeSetCategoryComponent = class ChangeSetCategoryComponent {
  constructor(_modalController) {
    this._modalController = _modalController;
  }

  onCancel() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._modalController.dismiss(null, _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.CANCEL);
    })();
  }

  onChange() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2._modalController.dismiss(_this2.setCategory, _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_3__.DialogRoles.CHANGE_SET_CATEGORY);
    })();
  }

};

ChangeSetCategoryComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

ChangeSetCategoryComponent.propDecorators = {
  setCategories: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  setCategory: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
ChangeSetCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'bl-change-set-category',
  template: _change_set_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  styles: [_change_set_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ChangeSetCategoryComponent);


/***/ }),

/***/ 5361:
/*!***************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/sets/set/set.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetComponent": () => (/* binding */ SetComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _set_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set.component.html?ngResource */ 5320);
/* harmony import */ var _set_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set.component.scss?ngResource */ 4411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../helpers/is-never-check.helper */ 3899);
/* harmony import */ var _helpers_training_convert_weight_units_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../helpers/training/convert-weight-units.helper */ 2315);







let SetComponent = class SetComponent {
  constructor() {
    this._activeSetCategory = 'freeWeighted';
    this.isLoading = false;
    this.isSubmitted = false;
    this.isFirstSet = true;
    this.setChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.setDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.setConstituentKeydownEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.setCategoryModalOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }

  set weightUnit(newWeightUnit) {
    this._weightUnit = newWeightUnit;
  }

  get weightUnit() {
    return this._weightUnit;
  }

  set activeSetCategory(category) {
    var _this = this;

    if (category) {
      this._activeSetCategory = category;
      setTimeout( /*#__PURE__*/(0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this._focusSetConstituent(_this._activeSetCategory);
      }), 400);
    }
  }

  get activeSetCategory() {
    return this._activeSetCategory;
  }

  ngOnChanges(changes) {
    if (!changes.weightUnit?.firstChange && changes.weightUnit?.currentValue) {
      switch (this.activeSetCategory) {
        case 'freeWeighted':
          {
            const currentWeightValue = +this.form.controls.weight.value;

            if (currentWeightValue) {
              this.form.controls.weight.patchValue((0,_helpers_training_convert_weight_units_helper__WEBPACK_IMPORTED_MODULE_4__.convertWeightUnit)(changes.weightUnit.currentValue, currentWeightValue));
            }

            break;
          }
      }
    }
  }

  updateSetCategory() {
    this.setCategoryModalOpened.emit(this.activeSetCategory);
  }

  onChangeSets() {
    const weight = this.form.controls.weight?.value;
    const reps = this.form.controls.reps?.value;
    const setData = {
      exerciseName: this.exerciseControl.value,
      weight: weight && this._isSetConstituentValid('weight') ? this.form.controls.weight.value : undefined,
      reps: reps && this._isSetConstituentValid('reps') ? this.form.controls.reps.value : undefined
    };
    this.setChanged.emit({
      setData,
      setCategory: this.activeSetCategory
    });
  }

  deleteSet() {
    this.setDeleted.emit();
  }

  onSetConstituentKeydown(setConstituent) {
    this.setConstituentKeydownEmitted.emit(setConstituent);
  }

  _isSetConstituentValid(setConstituent) {
    return this.form.controls[setConstituent].valid;
  }

  _focusSetConstituent(setCategory) {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (setCategory) {
        case 'freeWeighted':
        case 'dynamicWeighted':
          {
            if (_this2.weightElement) {
              yield _this2.weightElement.setFocus();
            }

            break;
          }

        case 'dynamicBodyweight':
          {
            if (_this2.repsElement) {
              yield _this2.repsElement.setFocus();
            }

            break;
          }

        case 'staticBodyweight':
          {
            //TODO: BL-128
            break;
          }

        case 'staticWeighted':
          {
            //TODO: BL-123
            break;
          }

        default:
          {
            (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_3__.isNeverCheck)(setCategory);
          }
      }
    })();
  }

};
SetComponent.propDecorators = {
  form: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  weightUnit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  activeSetCategory: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  exerciseControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  availableSetCategoriesControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  isLoading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  isSubmitted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  isFirstSet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  setChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  setDeleted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  setConstituentKeydownEmitted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  setCategoryModalOpened: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  weightElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['weightEl']
  }],
  repsElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['repsEl']
  }]
};
SetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'bl-set',
  template: _set_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  styles: [_set_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SetComponent);


/***/ }),

/***/ 3640:
/*!************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/sets/sets.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetsComponent": () => (/* binding */ SetsComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sets.component.html?ngResource */ 5561);
/* harmony import */ var _sets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sets.component.scss?ngResource */ 7575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var _helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../helpers/control-value-accessor.helper */ 2134);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/shared/unsubscribe.service */ 523);
/* harmony import */ var _helpers_training_convert_weight_units_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../helpers/training/convert-weight-units.helper */ 2315);
/* harmony import */ var _constants_shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../constants/shared/default-weight-unit.const */ 6931);
/* harmony import */ var _services_store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/store/training/new-training-store.service */ 8573);
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helpers/is-never-check.helper */ 3899);
/* harmony import */ var _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../constants/enums/model-roles.enum */ 6988);
/* harmony import */ var _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../services/store/shared/preferences-store.service */ 7276);
/* harmony import */ var _change_set_category_change_set_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./change-set-category/change-set-category.component */ 2841);
/* harmony import */ var _set_set_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./set/set.component */ 5361);

var SetsComponent_1;


















let SetsComponent = SetsComponent_1 = class SetsComponent {
  constructor(_unsubscribeService, _newTrainingStoreService, _preferencesStoreService, _modalController) {
    this._unsubscribeService = _unsubscribeService;
    this._newTrainingStoreService = _newTrainingStoreService;
    this._preferencesStoreService = _preferencesStoreService;
    this._modalController = _modalController;
    this.currentPreferences$ = this._preferencesStoreService.preferencesChanged$;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormArray([]);
    this.indexExercise = 0;
    this.isSubmitted = false;
    this.editMode = false;
    this.isLoading = false;
    this.selectedCategoriesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
  }

  ngOnInit() {
    this.currentWeightUnit = this._preferencesStoreService.getPreferences().weightUnit ?? _constants_shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_WEIGHT_UNIT;
    this.currentPreferences$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(preferences => this.currentWeightUnit !== preferences.weightUnit), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeService)).subscribe(preferences => {
      this.currentWeightUnit = preferences.weightUnit;
    });
    this.selectedSetCategoriesControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(setCategories => {
      const selectedSetCategories = setCategories;

      while (this.form.length !== 0) {
        this.form.removeAt(0);
      }

      this._constructFormBasedOnSetCategory(selectedSetCategories[0], 'newExercise');

      return {
        index: this.indexExercise,
        setCategory: selectedSetCategories[0]
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(value => this._newTrainingStoreService.restartSets(value.index, value.setCategory)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeService)).subscribe();
  }

  writeValue(sets) {
    if (sets.length > 0) {
      for (const set of sets) {
        this.addSet(set);
      }
    } else {
      this.addSet();
    }
  }

  registerOnChange(fn) {
    this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeService)).subscribe(fn);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onSetChanged(data, setIndex) {
    const serviceData = { ...data.setData,
      setNumber: setIndex + 1,
      total: this._calculateTotal()
    };

    this._newTrainingStoreService.setsChanged(serviceData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeService)).subscribe();
  }

  onSetConstituentKeydownEmit(setConstituent, setIndex) {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentSetCmpData = _this.setCmps.toArray()[setIndex];

      const previousSetCmpData = _this.setCmps.toArray()[setIndex - 1];

      switch (setConstituent) {
        case 'weight':
          {
            switch (currentSetCmpData.activeSetCategory) {
              case 'freeWeighted':
              case 'dynamicWeighted':
                {
                  if (setIndex > 0) {
                    if (!currentSetCmpData.weightElement.value) {
                      _this.onSetDeleted(setIndex);

                      yield previousSetCmpData.repsElement.setFocus();
                    }
                  }

                  break;
                }
            }

            break;
          }

        case 'reps':
          {
            switch (currentSetCmpData.activeSetCategory) {
              case 'freeWeighted':
              case 'dynamicWeighted':
                {
                  if (!currentSetCmpData.repsElement.value) {
                    yield currentSetCmpData.weightElement.setFocus();
                  }

                  break;
                }

              case 'dynamicBodyweight':
                {
                  if (setIndex > 0) {
                    if (!currentSetCmpData.repsElement.value) {
                      _this.onSetDeleted(setIndex);

                      yield previousSetCmpData.repsElement.setFocus();
                    }
                  }

                  break;
                }
            }

            break;
          }
      }
    })();
  }

  onUpdateSetCategory(currentSetCategory, setIndex) {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2._modalController.create({
        component: _change_set_category_change_set_category_component__WEBPACK_IMPORTED_MODULE_11__.ChangeSetCategoryComponent,
        componentProps: {
          setCategories: _this2.availableSetCategoriesControl.value,
          setCategory: currentSetCategory
        },
        keyboardClose: true,
        canDismiss: true
      });
      yield modal.present();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.from)(modal.onDidDismiss()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.concatMap)(response => {
        if (response.role === _constants_enums_model_roles_enum__WEBPACK_IMPORTED_MODULE_9__.DialogRoles.CHANGE_SET_CATEGORY) {
          if (currentSetCategory !== response.data) {
            return _this2._newTrainingStoreService.updatePrimarySetCategory(_this2.indexExercise, setIndex, response.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(_ => {
              _this2._constructFormBasedOnSetCategory(response.data, 'sameExercise', undefined, setIndex);

              return response.data;
            }));
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_21__.EMPTY;
        }

        return rxjs__WEBPACK_IMPORTED_MODULE_21__.EMPTY;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(_this2._unsubscribeService)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (setCategory) {
          _this2.selectedCategoriesChanged.emit({
            setChangedType: 'updateSet',
            setCategory,
            setIndex
          });
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  addSet(set) {
    let setCategory;

    if (set) {
      setCategory = this.selectedSetCategoriesControl.value[this.form.controls.length];
    } else {
      if (this.selectedSetCategoriesControl.value.length > 1) {
        setCategory = this.selectedSetCategoriesControl.value[this.form.controls.length - 1];
      } else {
        setCategory = this.selectedSetCategoriesControl.value[0] ?? 'freeWeighted';
      }

      this.selectedCategoriesChanged.emit({
        setChangedType: 'addSet',
        setCategory
      });
    }

    this._constructFormBasedOnSetCategory(setCategory, 'newExercise', set);

    (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(setCategory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.concatMap)(setCategory => {
      if (!set) {
        return this._newTrainingStoreService.addSet(this.indexExercise, setCategory, this.form.controls.length);
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(setCategory);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeService)).subscribe();
  }

  onSetDeleted(setIndex) {
    this.form.removeAt(setIndex);

    this._newTrainingStoreService.deleteSet(this.indexExercise, setIndex, this._calculateTotal()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeService)).subscribe(_ => this.selectedCategoriesChanged.emit({
      setChangedType: 'deleteSet',
      setCategory: undefined,
      setIndex
    }));
  }

  _calculateTotal() {
    let total = 0;
    this.form.controls.forEach((group, index) => {
      const setCategory = this.selectedSetCategoriesControl.value[index];

      switch (setCategory) {
        case 'freeWeighted':
          {
            total += group.controls.weight.value * group.controls.reps.value;
            break;
          }

        case 'dynamicBodyweight':
          {
            total += this.bodyweightControl.value * group.controls.reps.value;
            break;
          }

        case 'dynamicWeighted':
          {
            total += (this.bodyweightControl.value + group.controls.weight.value) * group.controls.reps.value;
            break;
          }

        case 'staticBodyweight':
          {
            //TODO: BL-128
            break;
          }

        case 'staticWeighted':
          {
            //TODO: BL-123
            break;
          }

        default:
          {
            (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_8__.isNeverCheck)(setCategory);
          }
      }
    });
    return total;
  }

  _setWeightValue(weight) {
    if (this.editTrainingData) {
      const editTrainingWeightUnit = this.editTrainingData.weightUnit ?? _constants_shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_WEIGHT_UNIT;

      if (editTrainingWeightUnit !== this.currentWeightUnit) {
        return (0,_helpers_training_convert_weight_units_helper__WEBPACK_IMPORTED_MODULE_5__.convertWeightUnit)(this.currentWeightUnit, weight);
      }
    }

    return weight;
  }

  _constructSetForm(setConstituent, set, setControls) {
    setControls[setConstituent] = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({
      value: this._setFormValue(setConstituent, set),
      disabled: this.exerciseControl.value ? false : true
    }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(/^[1-9]\d*(\.\d+)?$/)]);
    return setControls;
  }

  _setFormValue(setConstituent, set) {
    if (set) {
      if (setConstituent in set) {
        if (setConstituent === 'weight') {
          return this._setWeightValue(set.weight);
        } else {
          return set.reps;
        }
      }
    }

    return null;
  }

  _constructFormBasedOnSetCategory(setCategory, constructionType, set, indexSet) {
    let setControls = Object.assign({});

    switch (setCategory) {
      case 'freeWeighted':
      case 'dynamicWeighted':
        {
          setControls = this._constructSetForm('weight', {
            setNumber: 1,
            weight: set ? set.weight : null
          }, setControls);
          setControls = this._constructSetForm('reps', {
            setNumber: 1,
            reps: set ? set.reps : null
          }, setControls);

          if (constructionType === 'newExercise') {
            this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup(setControls));
          } else {
            this.form.removeAt(indexSet);
            this.form.insert(indexSet, new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup(setControls));
          }

          break;
        }

      case 'dynamicBodyweight':
        {
          setControls = this._constructSetForm('reps', {
            setNumber: 1,
            reps: set ? set.reps : null
          }, setControls);

          if (constructionType === 'newExercise') {
            this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup(setControls));
          } else {
            this.form.removeAt(indexSet);
            this.form.insert(indexSet, new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup(setControls));
          }

          break;
        }

      case 'staticBodyweight':
        {
          //TODO: BL-128
          break;
        }

      case 'staticWeighted':
        {
          //TODO: BL-123
          break;
        }

      default:
        {
          (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_8__.isNeverCheck)(setCategory);
        }
    }
  }

};

SetsComponent.ctorParameters = () => [{
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_4__.UnsubscribeService
}, {
  type: _services_store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_7__.NewTrainingStoreService
}, {
  type: _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_10__.PreferencesStoreService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ModalController
}];

SetsComponent.propDecorators = {
  editTrainingData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input
  }],
  indexExercise: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input
  }],
  bodyweightControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input
  }],
  exerciseControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input
  }],
  availableSetCategoriesControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input
  }],
  selectedSetCategoriesControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input
  }],
  isSubmitted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input
  }],
  editMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input
  }],
  isLoading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input
  }],
  selectedCategoriesChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output
  }],
  setCmps: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChildren,
    args: ['set', {
      read: _set_set_component__WEBPACK_IMPORTED_MODULE_12__.SetComponent
    }]
  }]
};
SetsComponent = SetsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'bl-sets',
  template: _sets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [(0,_helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_3__.getControlValueAccessor)(SetsComponent_1), _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_4__.UnsubscribeService],
  styles: [_sets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SetsComponent);


/***/ }),

/***/ 2387:
/*!******************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/single-exercise.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleExerciseComponent": () => (/* binding */ SingleExerciseComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _single_exercise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-exercise.component.html?ngResource */ 4975);
/* harmony import */ var _single_exercise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-exercise.component.scss?ngResource */ 2351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 1745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/control-value-accessor.helper */ 2134);
/* harmony import */ var _constants_shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants/shared/default-weight-unit.const */ 6931);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ 523);
/* harmony import */ var _validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../validators/training/single-exercise.validators */ 9651);
/* harmony import */ var _services_store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/store/training/new-training-store.service */ 8573);
/* harmony import */ var _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/store/shared/preferences-store.service */ 7276);
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../helpers/is-never-check.helper */ 3899);
/* harmony import */ var _services_store_training_exercises_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/store/training/exercises-store.service */ 8220);
/* harmony import */ var _sets_sets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sets/sets.component */ 3640);

var SingleExerciseComponent_1;

















let SingleExerciseComponent = SingleExerciseComponent_1 = class SingleExerciseComponent {
  constructor(_newTrainingStoreService, _unsubscribeService, _preferencesStoreService, _exercisesStoreService, _translateService) {
    this._newTrainingStoreService = _newTrainingStoreService;
    this._unsubscribeService = _unsubscribeService;
    this._preferencesStoreService = _preferencesStoreService;
    this._exercisesStoreService = _exercisesStoreService;
    this._translateService = _translateService;
    this._isExercisePicker$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(true);
    this.isExercisePicker$ = this._isExercisePicker$.asObservable();
    this.exercisesState$ = this._newTrainingStoreService.trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(currentTrainingState => currentTrainingState.exercises));
    this.isAddExerciseAllowed$ = this.exercisesState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.withLatestFrom)(this._exercisesStoreService.allExercisesState$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([exerciseState, allExercises]) => {
      if (exerciseState.length > 0) {
        if (this.setsCmpRef) {
          return exerciseState.length <= allExercises.Value.length && this.form.controls[exerciseState.length - 1].controls.exerciseData?.controls.name?.value && exerciseState.length > 0 && this.areSetsValid();
        }

        return false;
      } else {
        return true;
      }
    }));
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormArray([]);
    this.isSubmitted = false;
    this.isLoading = false;
    this.isApiLoading = false;
    this.editMode = false;
    this.exerciseAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_17__.EventEmitter();
  }

  get currentWeightUnit() {
    return this._preferencesStoreService.getPreferences().weightUnit ?? _constants_shared_default_weight_unit_const__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_WEIGHT_UNIT;
  }

  ngOnInit() {
    this.form.setValidators([_validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_6__.checkDuplicateExerciseName()]);
    this.form.updateValueAndValidity();

    this._translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this._unsubscribeService)).subscribe(_ => {
      this._isExercisePicker$.next(false);

      setTimeout(() => this._isExercisePicker$.next(true), 1);
    });
  }

  ngOnDestroy() {
    this._isExercisePicker$.complete();
  }

  writeValue(exercises) {
    if (exercises && exercises?.length > 0) {
      while (this.form.length !== 0) {
        this.form.removeAt(0);
      }

      for (const exercise of exercises) {
        this.addExercise(exercise);
      }
    }
  }

  registerOnChange(fn) {
    this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this._unsubscribeService)).subscribe(fn);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onSelectedCategoriesChanged(data, exerciseIndex) {
    const selectedSetCategoriesValue = this.form.controls[exerciseIndex].controls.exerciseData.controls.selectedSetCategories.value;

    switch (data.setChangedType) {
      case 'addSet':
        {
          this.form.controls[exerciseIndex].controls.exerciseData.controls.selectedSetCategories.patchValue([...selectedSetCategoriesValue, data.setCategory], {
            emitEvent: false
          });
          break;
        }

      case 'updateSet':
        {
          this.form.controls[exerciseIndex].controls.exerciseData.controls.selectedSetCategories.patchValue([...selectedSetCategoriesValue].map((category, i) => {
            if (i === data.setIndex) {
              category = data.setCategory;
              return category;
            }

            return category;
          }), {
            emitEvent: false
          });
          break;
        }

      case 'deleteSet':
        {
          this.form.controls[exerciseIndex].controls.exerciseData.controls.selectedSetCategories.patchValue(selectedSetCategoriesValue.filter((_category, i) => i !== data.setIndex), {
            emitEvent: false
          });
          break;
        }
    }
  }

  onExerciseNameChange(indexExercise, element) {
    if (element?.value) {
      this._newTrainingStoreService.trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(currentTrainingState => {
        const selectedExerciseData = currentTrainingState.exercises[indexExercise].availableExercises.find(exercise => exercise.name === element.value);
        return this._newTrainingStoreService.updateExerciseChoices(element.value, indexExercise, currentTrainingState, selectedExerciseData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(_ => selectedExerciseData));
      })).subscribe(selectedExerciseData => {
        this.form.controls[indexExercise].controls.exerciseData.controls.imageUrl.patchValue(selectedExerciseData.imageUrl);
        this.form.controls[indexExercise].controls.exerciseData.controls.primaryMuscleGroup.patchValue(selectedExerciseData.primaryMuscleGroup);
        this.form.controls[indexExercise].controls.exerciseData.controls.availableSetCategories.patchValue(selectedExerciseData.availableSetCategories);
        this.form.controls[indexExercise].controls.exerciseData.controls.selectedSetCategories.patchValue(selectedExerciseData.selectedSetCategories);

        if (this.bodyweightControl?.errors) {
          this.bodyweightControl.markAsTouched();
        }
      });
    }
  }

  addExercise(exercise, event) {
    if (exercise) {
      exercise = { ...exercise,
        sets: [...exercise.sets].map((set, index) => {
          const {
            weight,
            reps
          } = this._prepareSet(exercise.exerciseData.selectedSetCategories[index]);

          if (!weight) {
            delete set.weight;
          }

          if (!reps) {
            delete set.reps;
          }

          return set;
        })
      };
    }

    this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
      exerciseData: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(exercise?.exerciseData?.name ?? '', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
        imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(exercise?.exerciseData?.imageUrl ?? ''),
        primaryMuscleGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(exercise?.exerciseData?.primaryMuscleGroup ?? ''),
        availableSetCategories: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(exercise?.exerciseData?.availableSetCategories ?? []),
        selectedSetCategories: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(exercise?.exerciseData?.selectedSetCategories ?? [])
      }),
      sets: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(exercise?.sets ?? [], {
        nonNullable: true
      })
    }));

    if (event) {
      this._newTrainingStoreService.addNewExercise(this._getAlreadyUsedExercises()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this._unsubscribeService)).subscribe(_ => this.exerciseAdded.next(event));
    }
  }

  deleteExercise(indexExercise, exerciseName) {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (exerciseName) {
        _this._newTrainingStoreService.trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(currentTrainingState => _this._newTrainingStoreService.deleteExercise(currentTrainingState, exerciseName)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(data => {
          _this.form.removeAt(indexExercise);

          return _this._newTrainingStoreService.pushToAvailableExercises(data[0], data[1]);
        })).subscribe();
      } else {
        _this._newTrainingStoreService.trainingState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(currentTrainingState => _this._newTrainingStoreService.deleteExercise(currentTrainingState, null, indexExercise)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(_this._unsubscribeService)).subscribe(_ => _this.form.removeAt(indexExercise));
      }
    })();
  }

  getExercises() {
    return this.form.controls;
  }

  areSetsValid() {
    let isFormValid = true;
    this.setsCmpRef.forEach(setCmp => {
      const form = setCmp.form;

      if (form?.errors) {
        isFormValid = false;
      }

      form.controls.forEach(group => {
        if (group?.errors) {
          isFormValid = false;
        }

        const weightErrors = group.controls.weight?.errors;
        const repsErrors = group.controls.reps?.errors;

        if (weightErrors) {
          isFormValid = false;
        }

        if (repsErrors) {
          isFormValid = false;
        }
      });
    });
    return isFormValid;
  }

  _getAlreadyUsedExercises() {
    const alreadyUsedExercises = [];

    for (const exercise of this.getExercises()) {
      if (exercise.get('exerciseData.name').value) {
        alreadyUsedExercises.push(exercise.get('exerciseData.name').value);
      }
    }

    return alreadyUsedExercises;
  }

  _prepareSet(setCategory) {
    let weight;
    let reps;

    switch (setCategory) {
      case 'freeWeighted':
      case 'dynamicWeighted':
        {
          weight = true;
          reps = true;
          break;
        }

      case 'dynamicBodyweight':
        {
          weight = false;
          reps = true;
          break;
        }

      case 'staticBodyweight':
        {
          //TODO: BL-128
          break;
        }

      case 'staticWeighted':
        {
          //TODO: BL-123
          break;
        }

      default:
        {
          (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_9__.isNeverCheck)(setCategory);
        }
    }

    return {
      weight,
      reps
    };
  }

};

SingleExerciseComponent.ctorParameters = () => [{
  type: _services_store_training_new_training_store_service__WEBPACK_IMPORTED_MODULE_7__.NewTrainingStoreService
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_5__.UnsubscribeService
}, {
  type: _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_8__.PreferencesStoreService
}, {
  type: _services_store_training_exercises_store_service__WEBPACK_IMPORTED_MODULE_10__.ExercisesStoreService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateService
}];

SingleExerciseComponent.propDecorators = {
  editTrainingData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input
  }],
  bodyweightControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input
  }],
  trainingDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input
  }],
  isSubmitted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input
  }],
  isLoading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input
  }],
  isApiLoading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input
  }],
  editMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input
  }],
  exerciseAdded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Output
  }],
  exercisePickerEls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChildren,
    args: ['exercisePicker']
  }],
  setsCmpRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChildren,
    args: [_sets_sets_component__WEBPACK_IMPORTED_MODULE_11__.SetsComponent]
  }]
};
SingleExerciseComponent = SingleExerciseComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'bl-single-exercise',
  template: _single_exercise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectionStrategy.OnPush,
  providers: [(0,_helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_3__.getControlValueAccessor)(SingleExerciseComponent_1), _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_5__.UnsubscribeService],
  styles: [_single_exercise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SingleExerciseComponent);


/***/ }),

/***/ 4958:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastTrainingsFiltersComponent": () => (/* binding */ PastTrainingsFiltersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _past_trainings_filters_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./past-trainings-filters.component.html?ngResource */ 5798);
/* harmony import */ var _past_trainings_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./past-trainings-filters.component.scss?ngResource */ 4015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _constants_shared_input_maxlength_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants/shared/input-maxlength.const */ 1676);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ 523);











let PastTrainingsFiltersComponent = class PastTrainingsFiltersComponent {
    constructor(unsubscribeService, translateService, route) {
        this.unsubscribeService = unsubscribeService;
        this.translateService = translateService;
        this.route = route;
        this.keyUp$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.periodFilter = 'week';
        this.periodDisabled = false;
        this.trainingEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.periodEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.searchEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.searchValue = '';
        this.sortOptions = [
            {
                key: 'week',
                value: this.translateService.stream('training.past_trainings.show_by_week'),
            },
            {
                key: 'day',
                value: this.translateService.stream('training.past_trainings.show_by_day'),
            },
        ];
        const searchQueryParam = this.route.snapshot.queryParamMap?.get('search');
        if (searchQueryParam) {
            this.searchValue = searchQueryParam;
        }
        this.keyUp$$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((event) => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((value) => value?.trim().toLowerCase()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((value) => value.length <= 50), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribeService))
            .subscribe((value) => this.trainingEmitted.next(value));
    }
    get inputMaxLength() {
        return _constants_shared_input_maxlength_const__WEBPACK_IMPORTED_MODULE_2__.INPUT_MAX_LENGTH;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.searchEl) {
                const value = this.searchEl?.value;
                this.searchEmitted.emit(!!value);
            }
        });
    }
    emitKeyboardEvent($event) {
        this.keyUp$$.next($event);
    }
    segmentChanged($event) {
        this.periodEmitted.emit($event?.detail?.value);
    }
    openFilterDialog() {
        //TODO
    }
};
PastTrainingsFiltersComponent.ctorParameters = () => [
    { type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute }
];
PastTrainingsFiltersComponent.propDecorators = {
    periodFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    periodDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    trainingEmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    periodEmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    searchEmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    searchEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['search', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInput },] }]
};
PastTrainingsFiltersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'bl-past-trainings-filters',
        template: _past_trainings_filters_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
        providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeService],
        styles: [_past_trainings_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PastTrainingsFiltersComponent);



/***/ }),

/***/ 157:
/*!***************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastTrainingsComponent": () => (/* binding */ PastTrainingsComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _past_trainings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./past-trainings.component.html?ngResource */ 6269);
/* harmony import */ var _past_trainings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./past-trainings.component.scss?ngResource */ 2016);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 9377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! date-fns */ 8031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! date-fns */ 3637);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! date-fns */ 5845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! date-fns */ 1282);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! date-fns */ 3470);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! date-fns */ 7064);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! date-fns */ 312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! date-fns */ 8393);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/store/shared/shared-store.service */ 1102);
/* harmony import */ var _helpers_months_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/months.helper */ 3140);
/* harmony import */ var _helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-stream-data.helper */ 3037);
/* harmony import */ var _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/training/past-trainings-date-format.const */ 1757);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/shared/unsubscribe.service */ 523);
/* harmony import */ var _services_api_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/api/training/past-trainings.service */ 7587);
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/is-never-check.helper */ 3899);
/* harmony import */ var _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/store/training/past-trainings-store.service */ 8885);
/* harmony import */ var _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/store/shared/preferences-store.service */ 7276);
/* harmony import */ var _services_shared_preferences_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/shared/preferences.service */ 8476);
/* harmony import */ var _helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helpers/training/show-by-day.helper */ 9511);
/* harmony import */ var _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../constants/shared/paginator.const */ 9396);
/* harmony import */ var _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../constants/enums/storage-items.enum */ 3236);
/* harmony import */ var _constants_enums_training_item_wrapper_heights_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../constants/enums/training-item-wrapper-heights.enum */ 6740);



























let PastTrainingsComponent = class PastTrainingsComponent {
  constructor(_pastTrainingsService, _pastTrainingsStoreService, _unsubscribeService, _translateService, _sharedStoreService, _preferencesService, _preferencesStoreService, _changeDetectorRef, _route, _datePipe, _router, _navController) {
    this._pastTrainingsService = _pastTrainingsService;
    this._pastTrainingsStoreService = _pastTrainingsStoreService;
    this._unsubscribeService = _unsubscribeService;
    this._translateService = _translateService;
    this._sharedStoreService = _sharedStoreService;
    this._preferencesService = _preferencesService;
    this._preferencesStoreService = _preferencesStoreService;
    this._changeDetectorRef = _changeDetectorRef;
    this._route = _route;
    this._datePipe = _datePipe;
    this._router = _router;
    this._navController = _navController;
    this.pageSizeOptions = [1, 3, 5, 10];
    this.size = _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_15__.DEFAULT_SIZE;
    this.page = _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_15__.INITIAL_PAGE;
    this.searchText = '';
    this.periodFilter = this._preferencesStoreService.getPreferences()?.showByPeriod ?? 'week';
    this.dayActivated = {
      Date: (0,date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(new Date()),
      DayNumber: 0
    };
    this._isSearch$$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(false);
    this._isNextPage$$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(false);
    this._isPreviousPage$$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(false);
    this.isSearch$ = this._isSearch$$.asObservable();
    this.isNextPage$ = this._isNextPage$$.asObservable();
    this.isPreviousPage$ = this._isPreviousPage$$.asObservable();
    this.pastTrainings$ = undefined;

    this._route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this._unsubscribeService)).subscribe(params => this.currentQueryParams = params);

    this._sharedStoreService.deletedTraining$$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this._unsubscribeService)).subscribe(response => {
      this.pastTrainings$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(response).pipe((0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());

      this._changeDetectorRef.markForCheck();
    });
  }

  set timePeriodEl(timePeriodElement) {
    if (timePeriodElement) {
      const trainingElement = this.trainingItemWrapper?.nativeElement;

      if (trainingElement) {
        this._isSearch$$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this._unsubscribeService)).subscribe(isSearch => trainingElement.style.maxHeight = `calc(100vh - ${isSearch ? _constants_enums_training_item_wrapper_heights_enum__WEBPACK_IMPORTED_MODULE_17__.TrainingItemWrapperHeights.SEARCH_HEIGHT : _constants_enums_training_item_wrapper_heights_enum__WEBPACK_IMPORTED_MODULE_17__.TrainingItemWrapperHeights.WEEK_HEIGHT}px)`);
      }
    }
  }

  get dateFormat() {
    return _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_7__.TEMPLATE_DATE_FORMAT;
  }

  getDayTranslation$(dayName) {
    if (dayName) {
      return this._translateService.stream(dayName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(value => value?.toLowerCase()));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)('');
  }

  ionViewWillEnter() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.remove({
        key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_16__.StorageItems.QUERY_PARAMS
      });

      _this.initView();
    })();
  }

  ionViewWillLeave() {
    var _this2 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2._pastTrainingsStoreService.emitPastTrainingsQueryParams(_this2.currentQueryParams);
    })();
  }

  ngAfterViewChecked() {
    this._pastTrainingsStoreService.pastTrainingsWrapperScroll$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.take)(1)).subscribe(scrollTop => {
      if (this.trainingItemWrapper) {
        this.trainingItemWrapper.nativeElement.scrollTop = scrollTop;
      }
    });
  }

  ngOnDestroy() {
    this._isSearch$$.complete();

    this._isPreviousPage$$.complete();

    this._isNextPage$$.complete();
  }

  onFiltersSearchEmitted(isSearch) {
    this._isSearch$$.next(isSearch);
  }

  searchEmitted(searchText) {
    var _this3 = this;

    this._isSearch$$.next(!!searchText);

    this.page = _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_15__.INITIAL_PAGE;
    this.pastTrainings$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(searchText).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(searchText => {
      this.searchText = searchText;
      return this._pastTrainingsService.searchPastTrainings(this.searchText, this.size, this.page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)( /*#__PURE__*/function () {
        var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this3.showByDayStartDate = new Date();

          _this3.updatePageAndSize(response);

          yield _this3._router.navigate([], {
            relativeTo: _this3._route,
            queryParams: _this3.handleQueryParams(response, searchText?.trim() ?? undefined)
          });

          _this3.handlePaginationArrows(response);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());
    }));
  }

  onPeriodEmitted($event, mondayDate) {
    var _this4 = this;

    if (mondayDate) {
      this.periodFilter = $event;

      if (this.periodFilter === 'day') {
        this.showByDayStartDate = mondayDate;
        this.dayActivated = {
          Date: this.showByDayStartDate,
          DayNumber: (0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_14__.getCurrentDayIndex)(this.showByDayStartDate)
        };
      }

      const currentPreferences = this._preferencesStoreService.getPreferences();

      this._preferencesService.setPreferences({ ...currentPreferences,
        showByPeriod: this.periodFilter
      }, 'showByPeriod').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.take)(1)).subscribe(_ => {
        this.pastTrainings$ = this._pastTrainingsService.getPastTrainings((0,date_fns__WEBPACK_IMPORTED_MODULE_27__["default"])(mondayDate, {
          weekStartsOn: 1
        }), this.periodFilter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)( /*#__PURE__*/function () {
          var _ref2 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
            yield _this4._router.navigate([], {
              relativeTo: _this4._route,
              queryParams: _this4.handleQueryParams(response)
            });
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());

        this._changeDetectorRef.markForCheck();
      });
    }
  }

  onDayActivated($event) {
    var _this5 = this;

    if (!this._isSearch$$.getValue()) {
      this.dayActivated = $event;
      this.pastTrainings$ = this._pastTrainingsService.getPastTrainings($event.Date, 'day').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)( /*#__PURE__*/function () {
        var _ref3 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          yield _this5._router.navigate([], {
            relativeTo: _this5._route,
            queryParams: _this5.handleQueryParams(response)
          });
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());
    }
  }

  onPaginatorChanged($event, dayFilterDate) {
    var _this6 = this;

    if ($event?.IsSearch) {
      this.pastTrainings$ = this._pastTrainingsService.searchPastTrainings(this.searchText?.trim()?.toLowerCase() ?? '', $event.Size, $event.Page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)( /*#__PURE__*/function () {
        var _ref4 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this6.updatePageAndSize(response);

          yield _this6._router.navigate([], {
            relativeTo: _this6._route,
            queryParams: _this6.handleQueryParams(response, _this6.searchText)
          });

          _this6.handlePaginationArrows(response);
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());
    } else {
      if (this.periodFilter === 'day') {
        this.showByDayStartDate = this.calculateDate($event.PageType, undefined, $event.EarliestTrainingDate, dayFilterDate);
        this.dayActivated = {
          Date: this.showByDayStartDate,
          DayNumber: (0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_14__.getCurrentDayIndex)(this.showByDayStartDate)
        };
      }

      this.pastTrainings$ = this._pastTrainingsService.getPastTrainings(this.periodFilter === 'week' ? this.onPaginatorChangedFilterHandler(this.periodFilter, $event) : this.onPaginatorChangedFilterHandler(this.periodFilter, undefined, this.showByDayStartDate), this.periodFilter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)( /*#__PURE__*/function () {
        var _ref5 = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this6.handlePaginationArrows(response);

          yield _this6._router.navigate([], {
            relativeTo: _this6._route,
            queryParams: _this6.handleQueryParams(response)
          });
        });

        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());
    }
  }

  onTrainingItemClicked() {
    var _this7 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.trainingItemWrapper) {
        const scrollTop = _this7.trainingItemWrapper.nativeElement.scrollTop;
        yield _this7._pastTrainingsStoreService.emitWrapperScroll(scrollTop);
      }
    })();
  }

  logNewTraining() {
    var _this8 = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dayClickedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_28__["default"])(_this8.dayActivated.Date, {
        hours: 7
      });

      _this8._sharedStoreService.emitDayClicked(dayClickedDate.toISOString());

      yield _this8._navController.navigateForward('/training/new-training');
    })();
  } //TODO: align with 'ShowByDay' feature


  tryAgain() {
    this.initView();
  }

  setTimePeriod$(results) {
    const dateInterval = results.Dates;

    if (dateInterval?.StartDate && dateInterval?.EndDate) {
      const isDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_29__["default"])(dateInterval.StartDate, dateInterval.EndDate);

      if (isDay) {
        return this._translateService.stream(results.DayName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate)));
      }

      const isWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_30__["default"])(dateInterval.StartDate, dateInterval.EndDate, {
        weekStartsOn: 1
      });

      if (isWeek) {
        return this._translateService.stream('common.week').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
      }

      const isMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_31__["default"])(dateInterval.StartDate, dateInterval.EndDate);

      if (isMonth) {
        const month = (0,date_fns__WEBPACK_IMPORTED_MODULE_32__["default"])(dateInterval.StartDate);
        return this._translateService.stream(`common.months.${_helpers_months_helper__WEBPACK_IMPORTED_MODULE_5__.ALL_MONTHS[month]}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
      }

      return this._translateService.stream('common.period').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)('');
    }
  }

  initView() {
    this.page = this._route.snapshot.queryParamMap?.get('page') ? +this._route.snapshot.queryParamMap.get('page') : _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_15__.INITIAL_PAGE;
    this.size = this._route.snapshot.queryParamMap?.get('size') ? +this._route.snapshot.queryParamMap.get('size') : _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_15__.DEFAULT_SIZE;
    this.searchText = this._route.snapshot.queryParamMap?.get('search');

    if (this.searchText) {
      this.pastTrainings$ = this._pastTrainingsService.searchPastTrainings(this.searchText.trim().toLowerCase(), this.size, this.page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(response => this.handlePaginationArrows(response)), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());
    } else {
      this.periodFilter = this._route.snapshot.queryParamMap?.get('showBy');

      if (this.periodFilter === 'day') {
        this.showByDayStartDate = this.getDateTimeQueryParams();
        this.dayActivated = {
          Date: this.showByDayStartDate,
          DayNumber: (0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_14__.getCurrentDayIndex)(this.showByDayStartDate)
        };
      }

      this.pastTrainings$ = this._pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams(), this.periodFilter ?? 'week').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(response => this.handlePaginationArrows(response)), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());
    }

    this._changeDetectorRef.markForCheck();
  }

  onPaginatorChangedFilterHandler(periodFilterType, $weekEvent, startOfCurrentWeek) {
    switch (periodFilterType) {
      case 'week':
        {
          return this.calculateDate($weekEvent.PageType, $weekEvent.DateInterval, $weekEvent.EarliestTrainingDate);
        }

      case 'day':
        {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_33__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_27__["default"])(startOfCurrentWeek, {
            weekStartsOn: 1
          }), this.dayActivated.DayNumber);
        }

      default:
        (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_10__.isNeverCheck)(periodFilterType);
    }
  }

  updatePageAndSize(response) {
    this.page = response?.Value?.CurrentPage ?? _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_15__.INITIAL_PAGE;
    this.size = response?.Value?.Size ?? _constants_shared_paginator_const__WEBPACK_IMPORTED_MODULE_15__.DEFAULT_SIZE;

    this._changeDetectorRef.markForCheck();
  }

  calculateDate(page, dateInterval, earliestTrainingDate, startingDate) {
    switch (page) {
      case 'Previous':
        {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_34__["default"])(startingDate ? startingDate : dateInterval.StartDate, 7);
        }

      case 'Next':
        {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_33__["default"])(startingDate ? startingDate : dateInterval.StartDate, 7);
        }

      case 'First':
        {
          return this.periodFilter === 'week' ? new Date(earliestTrainingDate) : (0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_14__.calculateFirstWeekDay)(earliestTrainingDate, startingDate);
        }

      case 'Last':
        {
          return this.periodFilter === 'week' ? new Date() : (0,_helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_14__.calculateLastWeekDay)(startingDate);
        }

      default:
        return (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_10__.isNeverCheck)(page);
    }
  }

  handleQueryParams(trainingData, searchValue) {
    return {
      startDate: this.handleSpecificQueryParam(searchValue, trainingData, 'startDate'),
      endDate: this.handleSpecificQueryParam(searchValue, trainingData, 'endDate'),
      search: searchValue ?? undefined,
      page: this.handleSpecificQueryParam(searchValue, trainingData, 'page'),
      size: this.handleSpecificQueryParam(searchValue, trainingData, 'size'),
      showBy: !searchValue ? this.periodFilter : undefined
    };
  }

  handleSpecificQueryParam(searchValue, trainingData, queryParam) {
    if (searchValue) {
      if (trainingData?.Value?.TotalCount > 0) {
        if (queryParam === 'page') {
          return this.page.toString();
        } else if (queryParam === 'startDate') {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_35__["default"])(trainingData?.Value?.Results?.Dates?.StartDate ?? new Date(), _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_7__.QUERY_PARAMS_DATE_FORMAT);
        } else if (queryParam === 'endDate') {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_35__["default"])(trainingData?.Value?.Results?.Dates?.EndDate ?? new Date(), _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_7__.QUERY_PARAMS_DATE_FORMAT);
        } else {
          return this.size.toString();
        }
      } else {
        return undefined;
      }
    } else {
      if (queryParam === 'startDate') {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_35__["default"])(trainingData?.Value?.Results?.Dates?.StartDate ?? new Date(), _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_7__.QUERY_PARAMS_DATE_FORMAT);
      } else if (queryParam === 'endDate') {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_35__["default"])(trainingData?.Value?.Results?.Dates?.EndDate ?? new Date(), _constants_training_past_trainings_date_format_const__WEBPACK_IMPORTED_MODULE_7__.QUERY_PARAMS_DATE_FORMAT);
      } else {
        return undefined;
      }
    }
  }

  handlePaginationArrows(response) {
    if (response.Value.Results.EarliestTrainingDate) {
      this._isPreviousPage$$.next(response.Value.Results.IsPreviousWeek ?? false);

      this._isNextPage$$.next(response.Value.Results.IsNextWeek ?? false);
    } else {
      this._isPreviousPage$$.next(!!response.Value.Previous);

      this._isNextPage$$.next(!!response.Value.Next);
    }
  }

  getDateTimeQueryParams() {
    const splittedDate = this._route.snapshot.queryParams?.startDate?.split('-') ?? [];
    const utc = splittedDate.length > 0 ? new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString() : new Date().toUTCString();
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(new Date(utc));
  }

  generateHeaderTitle(period, startDate, endDate) {
    if (endDate) {
      return `
                <strong class="header-title--key">${period}</strong>
                <span class="header-title--value">(${this._datePipe.transform(startDate, this.dateFormat)} - ${this._datePipe.transform(endDate, this.dateFormat)})</span>`;
    } else {
      return `<strong class="header-title--key">${period}</strong>
                <span class="header-title--value">(${this._datePipe.transform(startDate, this.dateFormat)})</span`;
    }
  }

};

PastTrainingsComponent.ctorParameters = () => [{
  type: _services_api_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_9__.PastTrainingsService
}, {
  type: _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_11__.PastTrainingsStoreService
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_8__.UnsubscribeService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__.TranslateService
}, {
  type: _services_store_shared_shared_store_service__WEBPACK_IMPORTED_MODULE_4__.SharedStoreService
}, {
  type: _services_shared_preferences_service__WEBPACK_IMPORTED_MODULE_13__.PreferencesService
}, {
  type: _services_store_shared_preferences_store_service__WEBPACK_IMPORTED_MODULE_12__.PreferencesStoreService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_37__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_38__.ActivatedRoute
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_39__.DatePipe
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_38__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_40__.NavController
}];

PastTrainingsComponent.propDecorators = {
  trainingItemWrapper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_37__.ViewChild,
    args: ['itemWrapper', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_37__.ElementRef
    }]
  }],
  timePeriodEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_37__.ViewChild,
    args: ['timePeriod', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_37__.ElementRef
    }]
  }]
};
PastTrainingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_41__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_37__.Component)({
  selector: 'bl-past-trainings',
  template: _past_trainings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_37__.ChangeDetectionStrategy.OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_8__.UnsubscribeService],
  styles: [_past_trainings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PastTrainingsComponent);


/***/ }),

/***/ 6582:
/*!************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/show-by-day/show-by-day.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowByDayComponent": () => (/* binding */ ShowByDayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _show_by_day_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-by-day.component.html?ngResource */ 7462);
/* harmony import */ var _show_by_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-by-day.component.scss?ngResource */ 3199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 9377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 8031);
/* harmony import */ var _helpers_training_show_by_day_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/training/show-by-day.helper */ 9511);









let ShowByDayComponent = class ShowByDayComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date());
        this.isLoading = false;
        this.dayActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.activeDay$$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(1);
        this.daysOfWeek$ = this.translateService
            .stream('weekdays')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((value) => Object.values(value)));
    }
    ngOnChanges(changes) {
        const startDate = changes?.startDate?.currentValue;
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
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
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

/***/ 2626:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingItemActionsComponent": () => (/* binding */ TrainingItemActionsComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _training_item_actions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-item-actions.component.html?ngResource */ 251);
/* harmony import */ var _training_item_actions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-item-actions.component.scss?ngResource */ 8771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/api/training/delete-training-action.service */ 4490);






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
  type: _services_api_training_delete_training_action_service__WEBPACK_IMPORTED_MODULE_3__.DeleteTrainingActionService
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

/***/ 4271:
/*!****************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingItemComponent": () => (/* binding */ TrainingItemComponent)
/* harmony export */ });
/* harmony import */ var C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _training_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-item.component.html?ngResource */ 6453);
/* harmony import */ var _training_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-item.component.scss?ngResource */ 296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants/enums/storage-items.enum */ 3236);
/* harmony import */ var _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/store/training/past-trainings-store.service */ 8885);











let TrainingItemComponent = class TrainingItemComponent {
  constructor(_pastTrainingsStoreService, _route, _router) {
    this._pastTrainingsStoreService = _pastTrainingsStoreService;
    this._route = _route;
    this._router = _router;
    this.weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    this.actions = ['delete', 'more'];
    this.trainingItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }

  ngOnInit() {
    this.timeCreated = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(this.training.trainingDate), 'HH:mm');
    this.dayIndex = new Date(this.training.trainingDate).getDay();
  }

  trainingClicked() {
    var _this = this;

    return (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Development_BodybuildingLog_main_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          _this.trainingItemClicked.emit();

          yield _this._pastTrainingsStoreService.emitPastTrainingsQueryParams(params);
          yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
            key: _constants_enums_storage_items_enum__WEBPACK_IMPORTED_MODULE_4__.StorageItems.QUERY_PARAMS,
            value: JSON.stringify(params)
          });
          yield _this._router.navigate(['/training/new-training', _this.training._id]);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

};

TrainingItemComponent.ctorParameters = () => [{
  type: _services_store_training_past_trainings_store_service__WEBPACK_IMPORTED_MODULE_5__.PastTrainingsStoreService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];

TrainingItemComponent.propDecorators = {
  training: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  trainingItemClicked: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }]
};
TrainingItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'bl-training-item',
  template: _training_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
  styles: [_training_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TrainingItemComponent);


/***/ }),

/***/ 312:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



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

/***/ 3637:
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ 312);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMonths/index.js */ 8053);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);





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

/***/ 677:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
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

/***/ 6323:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 6610);
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 9377);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



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
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ 6323);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


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

/***/ 7064:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


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

/***/ 5845:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 9377);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


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

/***/ 3470:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


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

/***/ 1282:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ 8031);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


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

/***/ 6527:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 677);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);



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

/***/ 8393:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ 312);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



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

/***/ 823:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  return source => source.lift(new DebounceTimeOperator(dueTime, scheduler));
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
      const {
        lastValue
      } = this;
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

/***/ 5843:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ 1293);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notification */ 7928);




function delay(delay, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  const absoluteDelay = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_1__.isDate)(delay);
  const delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
  return source => source.lift(new DelayOperator(delayFor, scheduler));
}

class DelayOperator {
  constructor(delay, scheduler) {
    this.delay = delay;
    this.scheduler = scheduler;
  }

  call(subscriber, source) {
    return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
  }

}

class DelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber {
  constructor(destination, delay, scheduler) {
    super(destination);
    this.delay = delay;
    this.scheduler = scheduler;
    this.queue = [];
    this.active = false;
    this.errored = false;
  }

  static dispatch(state) {
    const source = state.source;
    const queue = source.queue;
    const scheduler = state.scheduler;
    const destination = state.destination;

    while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
      queue.shift().notification.observe(destination);
    }

    if (queue.length > 0) {
      const delay = Math.max(0, queue[0].time - scheduler.now());
      this.schedule(state, delay);
    } else {
      this.unsubscribe();
      source.active = false;
    }
  }

  _schedule(scheduler) {
    this.active = true;
    const destination = this.destination;
    destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler: scheduler
    }));
  }

  scheduleNotification(notification) {
    if (this.errored === true) {
      return;
    }

    const scheduler = this.scheduler;
    const message = new DelayMessage(scheduler.now() + this.delay, notification);
    this.queue.push(message);

    if (this.active === false) {
      this._schedule(scheduler);
    }
  }

  _next(value) {
    this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createNext(value));
  }

  _error(err) {
    this.errored = true;
    this.queue = [];
    this.destination.error(err);
    this.unsubscribe();
  }

  _complete() {
    this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createComplete());
    this.unsubscribe();
  }

}

class DelayMessage {
  constructor(time, notification) {
    this.time = time;
    this.notification = notification;
  }

}

/***/ }),

/***/ 1745:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/withLatestFrom.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withLatestFrom": () => (/* binding */ withLatestFrom)
/* harmony export */ });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ 5266);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ 640);


function withLatestFrom(...args) {
  return source => {
    let project;

    if (typeof args[args.length - 1] === 'function') {
      project = args.pop();
    }

    const observables = args;
    return source.lift(new WithLatestFromOperator(observables, project));
  };
}

class WithLatestFromOperator {
  constructor(observables, project) {
    this.observables = observables;
    this.project = project;
  }

  call(subscriber, source) {
    return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
  }

}

class WithLatestFromSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.OuterSubscriber {
  constructor(destination, observables, project) {
    super(destination);
    this.observables = observables;
    this.project = project;
    this.toRespond = [];
    const len = observables.length;
    this.values = new Array(len);

    for (let i = 0; i < len; i++) {
      this.toRespond.push(i);
    }

    for (let i = 0; i < len; i++) {
      let observable = observables[i];
      this.add((0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.subscribeToResult)(this, observable, undefined, i));
    }
  }

  notifyNext(_outerValue, innerValue, outerIndex) {
    this.values[outerIndex] = innerValue;
    const toRespond = this.toRespond;

    if (toRespond.length > 0) {
      const found = toRespond.indexOf(outerIndex);

      if (found !== -1) {
        toRespond.splice(found, 1);
      }
    }
  }

  notifyComplete() {}

  _next(value) {
    if (this.toRespond.length === 0) {
      const args = [value, ...this.values];

      if (this.project) {
        this._tryProject(args);
      } else {
        this.destination.next(args);
      }
    }
  }

  _tryProject(args) {
    let result;

    try {
      result = this.project.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  }

}

/***/ }),

/***/ 1293:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDate": () => (/* binding */ isDate)
/* harmony export */ });
function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}

/***/ }),

/***/ 9973:
/*!************************************************************************************!*\
  !*** ./src/app/views/training/new-training/new-training.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".reorder-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.hide-form {\n  display: none;\n}\n\nion-item {\n  padding: 0 10px;\n}\n\n.bodyweight-input--unit {\n  position: absolute;\n  right: 15px;\n  font-weight: bold;\n  font-size: 16px;\n  color: var(--ion-color-primary);\n}\n\n.ios .bodyweight-input--unit {\n  top: 30px;\n}\n\n.invalid-bodyweight {\n  color: var(--ion-color-danger);\n}\n\n::ng-deep .bodyweight-input input {\n  height: 30px;\n}\n\n.datetime-item {\n  margin-top: 10px;\n}\n\n.datetime-item .datetime-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.ios .log-training-col {\n  margin-right: 20px;\n}\n\n.log-training-col .button-disabled {\n  --background: var(--ion-color-primary, #3880ff);\n}\n\n.at-least-one-exercise-txt {\n  text-align: start;\n}\n\n.at-least-one-exercise-txt .empty-training-msg {\n  font-size: 12px;\n  color: var(--ion-color-danger-tint);\n}\n\n.error-wrapper {\n  width: 250px;\n  margin: 80px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.error-title {\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n\n.error-description {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 24px;\n  text-align: center;\n  color: var(--ion-color-medium);\n}\n\n.error-image {\n  width: 250px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy10cmFpbmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQUFSOztBQUtJO0VBQ0ksU0FBQTtBQUZSOztBQU1BO0VBQ0ksOEJBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0FBSEo7O0FBS0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUhSOztBQU9BO0VBQ0ksa0JBQUE7QUFKSjs7QUFRSTtFQUNJLCtDQUFBO0FBTFI7O0FBU0E7RUFDSSxpQkFBQTtBQU5KOztBQVFJO0VBQ0ksZUFBQTtFQUNBLG1DQUFBO0FBTlI7O0FBVUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVBKIiwiZmlsZSI6Im5ldy10cmFpbmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZW9yZGVyLWljb24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5oaWRlLWZvcm0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4uYm9keXdlaWdodC1pbnB1dCB7XHJcbiAgICAmLS11bml0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pb3MgLmJvZHl3ZWlnaHQtaW5wdXQge1xyXG4gICAgJi0tdW5pdCB7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW52YWxpZC1ib2R5d2VpZ2h0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5ib2R5d2VpZ2h0LWlucHV0IGlucHV0IHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmRhdGV0aW1lLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAuZGF0ZXRpbWUtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW9zIC5sb2ctdHJhaW5pbmctY29sIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmxvZy10cmFpbmluZy1jb2wge1xyXG4gICAgLmJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hdC1sZWFzdC1vbmUtZXhlcmNpc2UtdHh0IHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cclxuICAgIC5lbXB0eS10cmFpbmluZy1tc2cge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50KTtcclxuICAgIH1cclxufVxyXG5cclxuLmVycm9yLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiA4MHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5lcnJvci1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcblxyXG4uZXJyb3ItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7931:
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/reorder-exercises/reorder-exercises.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = ".wrapper {\n  box-shadow: var(--ion-box-shadow);\n  border-radius: 8px;\n}\n\n.actions {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlb3JkZXItZXhlcmNpc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJyZW9yZGVyLWV4ZXJjaXNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWlvbi1ib3gtc2hhZG93KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7821:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/sets/change-set-category/change-set-category.component.scss?ngResource ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-left: 50px;\n}\n\n.cta-row {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1zZXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSiIsImZpbGUiOiJjaGFuZ2Utc2V0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10aXRsZSB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5jdGEtcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4411:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/sets/set/set.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = ".set-grid:first-of-type {\n  padding-bottom: 0;\n}\n.set-grid:not(:first-of-type) {\n  padding-top: 0;\n}\n.set-grid:not(:last-of-type) {\n  margin-bottom: 5px;\n}\n.set-row {\n  align-items: flex-start;\n}\n.set-row ::ng-deep .weight-input input {\n  height: 30px;\n}\n.set-row ::ng-deep .reps-input input {\n  height: 30px;\n}\n.set-row .ion-label {\n  font-size: 14px;\n}\n.set-ctas {\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n}\n.set-ctas .delete-set-btn,\n.set-ctas .change-set-category {\n  height: 25px;\n}\n.set-ctas .set-cta-icon {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n}\n.md .set-ctas {\n  margin-top: -5px;\n}\n.md .single-set-category {\n  margin-top: 10px;\n}\n.ios .single-set-category {\n  margin-top: 20px;\n}\n.weight-input {\n  max-width: 65px;\n}\n.weight-input--unit {\n  position: absolute;\n  right: 15px;\n  font-weight: bold;\n  font-size: 16px;\n  color: var(--ion-color-primary);\n}\n.ios .weight-input--unit {\n  top: 30px;\n}\n.invalid-weight {\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGlCQUFBO0FBRFI7QUFJSTtFQUNJLGNBQUE7QUFGUjtBQUtJO0VBQ0ksa0JBQUE7QUFIUjtBQU9BO0VBQ0ksdUJBQUE7QUFKSjtBQU1JO0VBQ0ksWUFBQTtBQUpSO0FBT0k7RUFDSSxZQUFBO0FBTFI7QUFRSTtFQUNJLGVBQUE7QUFOUjtBQVVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQVBKO0FBU0k7O0VBRUksWUFBQTtBQVBSO0FBVUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUlI7QUFZQTtFQUNJLGdCQUFBO0FBVEo7QUFZQTtFQUNJLGdCQUFBO0FBVEo7QUFZQTtFQUNJLGdCQUFBO0FBVEo7QUFZQTtFQUNJLGVBQUE7QUFUSjtBQVdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFUUjtBQWNJO0VBQ0ksU0FBQTtBQVhSO0FBZUE7RUFDSSw4QkFBQTtBQVpKIiwiZmlsZSI6InNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2V0LWdyaWQge1xyXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZXQtcm93IHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIDo6bmctZGVlcCAud2VpZ2h0LWlucHV0IGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5yZXBzLWlucHV0IGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2V0LWN0YXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgLmRlbGV0ZS1zZXQtYnRuLFxyXG4gICAgLmNoYW5nZS1zZXQtY2F0ZWdvcnkge1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2V0LWN0YS1pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWQgLnNldC1jdGFzIHtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuXHJcbi5tZCAuc2luZ2xlLXNldC1jYXRlZ29yeSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaW9zIC5zaW5nbGUtc2V0LWNhdGVnb3J5IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi53ZWlnaHQtaW5wdXQge1xyXG4gICAgbWF4LXdpZHRoOiA2NXB4O1xyXG5cclxuICAgICYtLXVuaXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxufVxyXG5cclxuLmlvcyAud2VpZ2h0LWlucHV0IHtcclxuICAgICYtLXVuaXQge1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmludmFsaWQtd2VpZ2h0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7575:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/sets/sets.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ".ios .add-set-btn {\n  margin-right: 20px;\n}\n\n.md .add-set-btn {\n  margin-right: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSiIsImZpbGUiOiJzZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pb3MgLmFkZC1zZXQtYnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm1kIC5hZGQtc2V0LWJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQzcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2351:
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/single-exercise.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = ".form {\n  padding: 0 0 0 10px;\n}\n.form .wrapper {\n  margin: 15px 0 0 0;\n}\n.form .wrapper .exercise-name-required {\n  align-items: center;\n}\nion-grid:first-of-type {\n  padding-top: 10px;\n  padding-bottom: 0;\n}\n.exercise-picker {\n  color: var(--ion-color-primary);\n  max-width: 230px;\n  padding-bottom: 0;\n}\n.delete-exercise-icon {\n  width: 30px;\n  height: 30px;\n}\n.md .exercise-row {\n  align-items: center;\n}\n.ios .exercise-row {\n  align-items: flex-end;\n}\n.ios .actions .add-exercise-btn {\n  margin-left: 20px;\n}\n.md .actions {\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1leGVyY2lzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFDUTtFQUNJLG1CQUFBO0FBQ1o7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREo7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBREo7QUFJQTtFQUNJLG1CQUFBO0FBREo7QUFJQTtFQUNJLHFCQUFBO0FBREo7QUFLSTtFQUNJLGlCQUFBO0FBRlI7QUFNQTtFQUNJLGlCQUFBO0FBSEoiLCJmaWxlIjoic2luZ2xlLWV4ZXJjaXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xyXG5cclxuICAgICAgICAuZXhlcmNpc2UtbmFtZS1yZXF1aXJlZCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZ3JpZDpmaXJzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5leGVyY2lzZS1waWNrZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1heC13aWR0aDogMjMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmRlbGV0ZS1leGVyY2lzZS1pY29uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubWQgLmV4ZXJjaXNlLXJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW9zIC5leGVyY2lzZS1yb3cge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uaW9zIC5hY3Rpb25zIHtcclxuICAgIC5hZGQtZXhlcmNpc2UtYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1kIC5hY3Rpb25zIHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 4015:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = ".filters-wrapper {\n  display: flex;\n  align-items: flex-start;\n  column-gap: 10px;\n  padding: 5px 0;\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 4px;\n}\n.filters-wrapper .search-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  column-gap: 10px;\n  margin-left: 5px;\n}\n.filters-wrapper .search-wrapper .filter-wrapper {\n  display: flex;\n  column-gap: 10px;\n  width: 100%;\n}\n.filters-wrapper .search-wrapper .filter-wrapper .search-input ::ng-deep input {\n  border: 2px solid white;\n  border-radius: 6px;\n  box-shadow: var(--ion-box-shadow);\n  height: 35px;\n}\n.filters-wrapper .search-wrapper .filter-wrapper .search-input ::ng-deep input:focus {\n  outline: none;\n  border: 2px solid var(--ion-color-primary);\n  box-shadow: 0 0 10px var(--ion-color-light);\n}\n.filters-wrapper .search-wrapper .filter-wrapper .search-max-error {\n  font-size: 12px;\n  color: var(--ion-color-danger);\n  align-self: baseline;\n  padding-top: 2px;\n}\n.filters-wrapper .search-wrapper ion-segment {\n  margin-top: 10px;\n  background-color: var(--ion-color-light);\n  width: 90%;\n  margin-right: auto;\n}\n.filters-wrapper .or-wrapper {\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  margin-right: 10px;\n  height: 35px;\n}\n.filters-wrapper .or-wrapper .or {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n.filters-wrapper .or-wrapper .filter-icon {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n@media (min-width: 640px) {\n  .filters-wrapper {\n    width: 1020px;\n    margin: 0 auto;\n  }\n  ion-segment {\n    max-width: 500px;\n    margin-right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3QtdHJhaW5pbmdzLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNaO0FBRWdCO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQUFwQjtBQUVvQjtFQUNJLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0FBQXhCO0FBS1k7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBSGhCO0FBT1E7RUFDSSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBTFo7QUFTSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBUFI7QUFTUTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7QUFQWjtBQVVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBUlo7QUFhQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGNBQUE7RUFWTjtFQWFFO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtFQVhOO0FBQ0YiLCJmaWxlIjoicGFzdC10cmFpbmluZ3MtZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIC5zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbiAgICAgICAgLmZpbHRlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIDo6bmctZGVlcCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlvbi1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VhcmNoLW1heC1lcnJvciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3Itd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuXHJcbiAgICAgICAgLm9yIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWx0ZXItaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgLmZpbHRlcnMtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VnbWVudCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2016:
/*!****************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 5px;\n}\nion-content::part(scroll) {\n  overflow-y: hidden;\n}\n.ion-spinner-class {\n  top: 150px;\n}\n.error-wrapper {\n  width: 250px;\n  margin: 5rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.error-wrapper .error-image {\n  width: 250px;\n  height: 200px;\n}\n.error-wrapper .error-title {\n  font-size: 18px;\n  margin-bottom: 5px;\n  text-align: center;\n}\n.error-wrapper .error-description {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 24px;\n  text-align: center;\n  color: var(--ion-color-medium);\n}\n.card-info-wrapper {\n  border: 2px solid var(--ion-color-primary);\n  box-shadow: var(--ion-box-shadow);\n  margin: 5px 0;\n}\n.card-info-wrapper--header {\n  padding: 16px 10px 16px 10px;\n}\n.card-info-wrapper .header-title {\n  font-size: 20px;\n  white-space: nowrap;\n}\n::ng-deep .card-info-wrapper .header-title--key {\n  color: var(--ion-color-primary);\n}\n::ng-deep .card-info-wrapper .header-title--value {\n  font-weight: 400;\n}\n.training-item-wrapper {\n  display: block;\n  overflow: auto;\n  scroll-behavior: smooth;\n}\n.training-item-wrapper::-webkit-scrollbar {\n  width: 6px;\n}\n.training-item-wrapper::-webkit-scrollbar-thumb {\n  background-color: var(--ion-color-light-periwinkle);\n  border-radius: 6px;\n}\n.training-item-wrapper .bl-training-item:first-of-type ::ng-deep ion-card {\n  margin-top: 3px;\n}\n.training-item-wrapper .no-trainings {\n  margin: 0 16px 16px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.training-item-wrapper .no-trainings-title {\n  font-size: 18px;\n  font-weight: normal;\n  text-align: center;\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .card-info-wrapper {\n    width: 1020px;\n    margin: 0 auto;\n    margin-top: 5px;\n  }\n  .training-item-wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: baseline;\n    width: 1020px;\n    overflow: auto;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3QtdHJhaW5pbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUdBO0VBQ0ksVUFBQTtBQUFKO0FBR0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFSO0FBR0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBRlI7QUFNQTtFQUNJLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0FBSEo7QUFLSTtFQUNJLDRCQUFBO0FBSFI7QUFNSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUpSO0FBTVE7RUFDSSwrQkFBQTtBQUpaO0FBT1E7RUFDSSxnQkFBQTtBQUxaO0FBVUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBUEo7QUFTSTtFQUNJLFVBQUE7QUFQUjtBQVVJO0VBQ0ksbURBQUE7RUFDQSxrQkFBQTtBQVJSO0FBWVE7RUFDSSxlQUFBO0FBVlo7QUFjSTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFaUjtBQWNRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBWlo7QUFpQkE7RUFDSTtJQUNJLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQWROO0VBaUJFO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQWZOO0FBQ0YiLCJmaWxlIjoicGFzdC10cmFpbmluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDVweDtcclxuXHJcbiAgICAmOjpwYXJ0KHNjcm9sbCkge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuLmlvbi1zcGlubmVyLWNsYXNzIHtcclxuICAgIHRvcDogMTUwcHg7XHJcbn1cclxuXHJcbi5lcnJvci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5lcnJvci1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9yLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtaW5mby13cmFwcGVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWlvbi1ib3gtc2hhZG93KTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcblxyXG4gICAgJi0taGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDEwcHggMTZweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICA6Om5nLWRlZXAgJi0ta2V5IHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6bmctZGVlcCAmLS12YWx1ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udHJhaW5pbmctaXRlbS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXBlcml3aW5rbGUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmwtdHJhaW5pbmctaXRlbTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICA6Om5nLWRlZXAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uby10cmFpbmluZ3Mge1xyXG4gICAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMzJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgLmNhcmQtaW5mby13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAudHJhaW5pbmctaXRlbS13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICB3aWR0aDogMTAyMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3199:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/show-by-day/show-by-day.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-fab {\n  margin-top: 35px;\n}\nion-fab ion-fab-button {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\nion-fab ion-fab-list ion-fab-button {\n  width: 50px;\n  height: 50px;\n}\n.active-day {\n  --background: var(--ion-color-primary-shade) !important;\n}\n@media (min-width: 640px) {\n  ion-fab {\n    position: absolute;\n    right: 380px;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYnktZGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksc0NBQUE7RUFDQSxjQUFBO0FBQ1I7QUFHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRFo7QUFNQTtFQUNJLHVEQUFBO0FBSEo7QUFNQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoic2hvdy1ieS1kYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiIHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcblxyXG4gICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1mYWItbGlzdCB7XHJcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZS1kYXkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcbiAgICBpb24tZmFiIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDM4MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 8771:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.scss?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  position: relative;\n}\n:host .action {\n  padding: 0 5px;\n  color: var(--ion-color-primary);\n  width: 32px;\n  height: 100%;\n  border-left: 1px solid var(--ion-color-light-periwinkle);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLWl0ZW0tYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7QUFDUiIsImZpbGUiOiJ0cmFpbmluZy1pdGVtLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmFjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtcGVyaXdpbmtsZSk7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 296:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  height: 230px;\n}\nion-card:hover, ion-card:active {\n  background: var(--ion-color-light);\n}\nion-card ion-card-header {\n  padding-bottom: 0;\n}\nion-card ion-card-header .day-name {\n  color: var(--ion-color-primary);\n  margin-right: 3px;\n}\nion-card ion-card-header .day-date {\n  font-weight: 400;\n}\nion-card ion-card-header ion-card-title {\n  white-space: nowrap;\n}\nion-card ion-card-content {\n  height: 83%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding: 0;\n}\nion-card ion-card-content .info-grid {\n  flex: 0;\n}\nion-card ion-card-content .info-grid .bodyweight,\nion-card ion-card-content .info-grid .created-at {\n  display: flex;\n  flex-direction: column;\n  white-space: nowrap;\n}\nion-card ion-card-content .info-grid .bodyweight--key,\nion-card ion-card-content .info-grid .created-at--key {\n  color: var(--ion-color-primary);\n  justify-content: center;\n  font-size: 16px;\n}\nion-card ion-card-content .info-grid .bodyweight--value,\nion-card ion-card-content .info-grid .created-at--value {\n  justify-content: center;\n  font-size: 16px;\n}\nion-card ion-card-content .info-grid .bodyweight--no-bodyweight,\nion-card ion-card-content .info-grid .created-at--no-bodyweight {\n  margin: 0 auto;\n}\nion-card ion-card-content .exercise-wrapper {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-card ion-card-content .exercise-wrapper-no-dots {\n  margin-bottom: 20px;\n}\nion-card ion-card-content .exercise-wrapper .exercise-name {\n  max-width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 16px;\n}\nion-card ion-card-content .exercise-wrapper .exercise-dots {\n  align-self: center;\n}\nion-card ion-card-content .actions {\n  display: flex;\n  justify-content: flex-end;\n  border-top: 1px solid var(--ion-color-light-periwinkle);\n  height: 40px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n@media (min-width: 640px) {\n  ion-card {\n    margin-right: 5px;\n    width: 325px;\n  }\n  ion-card ion-card-content {\n    min-height: calc(100% - 40px);\n    position: relative;\n  }\n  ion-card ion-card-content .actions {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFDSTtFQUVJLGtDQUFBO0FBQVI7QUFHSTtFQUNJLGlCQUFBO0FBRFI7QUFHUTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7QUFEWjtBQUlRO0VBQ0ksZ0JBQUE7QUFGWjtBQUtRO0VBQ0ksbUJBQUE7QUFIWjtBQU9JO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUxSO0FBT1E7RUFDSSxPQUFBO0FBTFo7QUFPWTs7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxoQjtBQU9nQjs7RUFDSSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUpwQjtBQU9nQjs7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFKcEI7QUFPZ0I7O0VBQ0ksY0FBQTtBQUpwQjtBQVNRO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVBaO0FBU1k7RUFDSSxtQkFBQTtBQVBoQjtBQVVZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFSaEI7QUFXWTtFQUNJLGtCQUFBO0FBVGhCO0FBYVE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBWFo7QUFnQkE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsWUFBQTtFQWJOO0VBZU07SUFDSSw2QkFBQTtJQUNBLGtCQUFBO0VBYlY7RUFlVTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFiZDtBQUNGIiwiZmlsZSI6InRyYWluaW5nLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG5cclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAuZGF5LW5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXktZGF0ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogODMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgLmluZm8tZ3JpZCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDA7XHJcblxyXG4gICAgICAgICAgICAuYm9keXdlaWdodCxcclxuICAgICAgICAgICAgLmNyZWF0ZWQtYXQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgICYtLWtleSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi0tdmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLS1uby1ib2R5d2VpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmV4ZXJjaXNlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICYtbm8tZG90cyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZXhlcmNpc2UtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5leGVyY2lzZS1kb3RzIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXBlcml3aW5rbGUpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzMjVweDtcclxuXHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9370:
/*!************************************************************************************!*\
  !*** ./src/app/views/training/new-training/new-training.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-title\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{\r\n            editMode ? ('navigation.edit_training' | translate) : ('navigation.new_training' | translate)\r\n        }}</ion-title>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button\r\n                *ngIf=\"(isAuthenticated$ | async) && (isEditing$ | async)\"\r\n                type=\"button\"\r\n                (click)=\"goToPastTraining()\"\r\n            >\r\n                <ion-icon name=\"arrow-back-circle-sharp\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button *ngIf=\"isReorder$ | async\" type=\"button\" (click)=\"openReorderModal()\">\r\n                <ion-icon slot=\"icon-only\" class=\"reorder-icon\" name=\"git-compare-sharp\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-text-center ion-padding\">\r\n    <ng-container *ngIf=\"trainingStream$ | async as trainingData\">\r\n        <ng-container *ngIf=\"trainingData.IsError; else valueOrLoading\">\r\n            <div class=\"error-wrapper\">\r\n                <img class=\"error-image\" src=\"../../../../assets/svgs/error1.svg\" />\r\n                <h3 class=\"error-title\">\r\n                    {{ 'training.new_training.errors.new_training_error_title' | translate }}\r\n                </h3>\r\n                <span class=\"error-description\">\r\n                    {{\r\n                        editMode\r\n                            ? ('training.new_training.errors.new_training_error_description' | translate)\r\n                            : ('training.new_training.errors.new_training_error_load' | translate)\r\n                    }}\r\n                </span>\r\n                <ion-button color=\"primary\" type=\"button\" (click)=\"tryAgain()\">\r\n                    {{ 'common.try_again' | translate }}\r\n                </ion-button>\r\n            </div>\r\n        </ng-container>\r\n        <ng-template #valueOrLoading>\r\n            <ion-spinner\r\n                *ngIf=\"trainingData.IsLoading\"\r\n                class=\"ion-spinner-class\"\r\n                name=\"crescent\"\r\n                color=\"primary\"\r\n            ></ion-spinner>\r\n            <form autocomplete=\"off\" [class.hide-form]=\"trainingData.IsLoading\" [formGroup]=\"newTrainingForm\">\r\n                <ion-item fill=\"outline\">\r\n                    <ion-label position=\"floating\">{{ 'training.new_training.pick_bodyweight' | translate }}</ion-label>\r\n                    <ng-container *ngIf=\"currentPreferences$ | async as currentPreferences\">\r\n                        <ion-input\r\n                            #bodyweightRef\r\n                            class=\"bodyweight-input\"\r\n                            type=\"number\"\r\n                            formControlName=\"bodyweight\"\r\n                            (ionChange)=\"onBodyweightChange()\"\r\n                        ></ion-input>\r\n                        <ion-text\r\n                            class=\"bodyweight-input--unit\"\r\n                            slot=\"end\"\r\n                            [class.invalid-bodyweight]=\"newTrainingForm.controls.bodyweight.invalid\"\r\n                        >\r\n                            {{ bodyweightRef?.value ? currentPreferences.weightUnit : '' }}\r\n                        </ion-text>\r\n                    </ng-container>\r\n                    <ion-note *ngIf=\"newTrainingForm.controls.bodyweight.errors?.pattern\" slot=\"error\">\r\n                        {{ 'training.new_training.errors.only_numbers' | translate }}\r\n                    </ion-note>\r\n                    <ion-note *ngIf=\"newTrainingForm.controls.bodyweight.errors?.min\" slot=\"error\">\r\n                        {{ 'training.new_training.errors.bodyweight_min' | translate }}\r\n                    </ion-note>\r\n                    <ion-note *ngIf=\"newTrainingForm.controls.bodyweight.errors?.max\" slot=\"error\">\r\n                        {{ 'training.new_training.errors.bodyweight_max' | translate }}\r\n                    </ion-note>\r\n                    <ion-note *ngIf=\"newTrainingForm.controls.bodyweight.errors?.required\" slot=\"error\">\r\n                        {{ 'training.new_training.errors.bodyweight_required' | translate }}\r\n                    </ion-note>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"datetime-item\" fill=\"outline\" lines=\"none\" (click)=\"openDateTimePicker()\">\r\n                    <ion-icon class=\"datetime-icon\" slot=\"start\" color=\"primary\" name=\"calendar-outline\"></ion-icon>\r\n                    <ion-label>{{ 'common.date' | translate }}</ion-label>\r\n                    <ion-text color=\"primary\">{{ formattedTodayDate }}</ion-text>\r\n                </ion-item>\r\n                <ng-container *ngIf=\"newTrainingForm.get('trainingDate').errors?.required\">\r\n                    <ion-note class=\"error\">{{ 'training.new_training.errors.date_required' | translate }}</ion-note>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"exercisesState$ | async as exercisesState\">\r\n                    <bl-single-exercise\r\n                        formControlName=\"exercises\"\r\n                        [bodyweightControl]=\"newTrainingForm.controls.bodyweight\"\r\n                        [trainingDate]=\"newTrainingForm.get('trainingDate')\"\r\n                        [editTrainingData]=\"editTrainingData\"\r\n                        [isSubmitted]=\"isSubmitted$ | async\"\r\n                        [isLoading]=\"trainingData.IsLoading\"\r\n                        [isApiLoading]=\"isApiLoading$ | async\"\r\n                        [editMode]=\"editMode\"\r\n                        (exerciseAdded)=\"onExerciseAdded($event)\">\r\n                        <ion-col class=\"ion-text-end log-training-col\">\r\n                            <ion-button\r\n                                (click)=\"onSubmit()\"\r\n                                [disabled]=\"!exercisesState?.length || (isApiLoading$ | async)\"\r\n                            >\r\n                            {{ 'training.new_training.log_training' | translate }}\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </bl-single-exercise>\r\n                    <ion-text *ngIf=\"\r\n                        newTrainingForm.controls.bodyweight.errors?.required &&\r\n                        (isSubmitted$ | async)\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.bodyweight_required' | translate }}\r\n                    </ion-text>\r\n                    <ion-grid>\r\n                        <ion-row>\r\n                            <ion-col class=\"ion-text-center at-least-one-exercise-txt\">\r\n                                <ion-note\r\n                                    *ngIf=\"\r\n                                        (isSubmitted$ | async) &&\r\n                                        exercisesState?.length === 0\r\n                                    \"\r\n                                    class=\"empty-training-msg\"\r\n                                >\r\n                                    {{ 'training.new_training.errors.at_least_one_exercise' | translate }}\r\n                                </ion-note>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                </ng-container>\r\n            </form>\r\n        </ng-template>\r\n    </ng-container>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon\r\n                name=\"arrow-up-circle-sharp\"\r\n                (click)=\"goToTop()\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n</ion-content>\r\n";

/***/ }),

/***/ 7886:
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/reorder-exercises/reorder-exercises.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"onCancel()\">\r\n                <ion-icon name=\"close\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'training.new_training.reorder_exercises' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n    <div *ngIf=\"currentExercises$ | async as currentExercises\" class=\"wrapper\">\r\n        <ion-reorder-group [disabled]=\"false\" (ionItemReorder)=\"doReorder($any($event))\">\r\n            <ion-item *ngFor=\"let exerciseName of currentExercises\">\r\n                <ion-label>\r\n                    {{ exerciseName | translate }}\r\n                </ion-label>\r\n                <ion-reorder slot=\"end\">\r\n                    <ion-icon color=\"primary\" name=\"repeat\"></ion-icon>\r\n                </ion-reorder>\r\n            </ion-item>\r\n        </ion-reorder-group>\r\n    </div>\r\n    <div class=\"actions\">\r\n        <ion-button type=\"button\" color=\"primary\" (click)=\"reorderExercises()\">\r\n            {{ 'common.actions.confirm' | translate }}\r\n        </ion-button>\r\n    </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 8889:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/sets/change-set-category/change-set-category.component.html?ngResource ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"onCancel()\">\r\n                <ion-icon name=\"close\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'training.update_set_category' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding ion-text-center\">\r\n    <ion-list>\r\n        <ion-radio-group *ngFor=\"let category of setCategories\" [(ngModel)]=\"setCategory\">\r\n            <ion-item>\r\n                <ion-label>{{ 'training.set_categories.' + (category | camelToSnakeCase) | translate }}</ion-label>\r\n                <ion-radio slot=\"end\" color=\"primary\" [value]=\"category\"></ion-radio>\r\n            </ion-item>\r\n        </ion-radio-group>\r\n    </ion-list>\r\n    <ion-row class=\"cta-row\">\r\n        <ion-col>\r\n            <ion-button type=\"button\" color=\"primary\" (click)=\"onChange()\">\r\n                {{ 'common.actions.change' | translate }}\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n";

/***/ }),

/***/ 5320:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/sets/set/set.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\r\n    <ion-grid class=\"set-grid\">\r\n        <ion-row\r\n            class=\"ion-text-center set-row\"\r\n            [class.ion-justify-content-center]=\"!form.controls.weight\">\r\n            <ion-col\r\n                *ngIf=\"form.controls.weight\"\r\n                size=\"5\">\r\n                <ion-item fill=\"outline\">\r\n                    <ion-label class=\"ion-label\" position=\"floating\">\r\n                        {{ 'training.new_training.weight' | translate }}\r\n                    </ion-label>\r\n                    <ion-input\r\n                        #weightEl\r\n                        type=\"number\"\r\n                        class=\"weight-input\"\r\n                        formControlName=\"weight\"\r\n                        (ionChange)=\"onChangeSets()\"\r\n                        (keydown.backspace)=\"onSetConstituentKeydown('weight')\"\r\n                    >\r\n                    </ion-input>\r\n                    <ion-text\r\n                        class=\"weight-input--unit\"\r\n                        slot=\"end\"\r\n                        [class.invalid-weight]=\"form.controls.weight?.invalid\"\r\n                    >\r\n                        {{ weightEl?.value ? weightUnit : '' }}\r\n                    </ion-text>\r\n                    <ion-text\r\n                        *ngIf=\"\r\n                            form.controls.weight?.errors?.pattern &&\r\n                            !form.controls.weight?.errors?.min &&\r\n                            !isLoading\r\n                        \"\r\n                        slot=\"error\"\r\n                    >\r\n                        {{ 'training.new_training.errors.only_numbers' | translate }}\r\n                    </ion-text>\r\n                    <ion-text\r\n                        *ngIf=\"\r\n                            form.controls.weight?.errors?.min &&\r\n                            !form.controls.weight?.errors?.pattern &&\r\n                            !isLoading\r\n                        \"\r\n                        slot=\"error\"\r\n                    >\r\n                        {{ 'training.new_training.errors.weight_min' | translate }}\r\n                    </ion-text>\r\n                    <ion-text\r\n                        *ngIf=\"\r\n                            form.controls.weight?.errors?.max &&\r\n                            !form.controls.weight?.errors?.pattern &&\r\n                            !isLoading\r\n                        \"\r\n                        slot=\"error\"\r\n                    >\r\n                        {{ 'training.new_training.errors.weight_max' | translate }}\r\n                    </ion-text>\r\n                    <ion-text\r\n                        *ngIf=\"\r\n                            form.controls.weight?.errors?.required &&\r\n                            (isSubmitted ||\r\n                                form.controls.weight.touched) &&\r\n                            !isLoading\r\n                        \"\r\n                        slot=\"error\"\r\n                    >\r\n                        {{ 'training.new_training.errors.weight_required' | translate }}\r\n                    </ion-text>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col\r\n                *ngIf=\"form.controls.reps\"\r\n                size=\"5\">\r\n                <ion-item fill=\"outline\">\r\n                    <ion-label class=\"ion-label\" position=\"floating\">\r\n                        {{ 'training.new_training.reps' | translate }}\r\n                    </ion-label>\r\n                    <ion-input\r\n                        #repsEl\r\n                        type=\"number\"\r\n                        class=\"reps-input\"\r\n                        formControlName=\"reps\"\r\n                        (ionChange)=\"onChangeSets()\"\r\n                        (keydown.backspace)=\"onSetConstituentKeydown('reps')\"\r\n                    ></ion-input>\r\n                    <ion-text\r\n                        *ngIf=\"\r\n                            form.controls.reps?.errors?.pattern &&\r\n                            !form.controls.reps?.errors?.pattern &&\r\n                            !isLoading\r\n                        \"\r\n                        slot=\"error\"\r\n                    >\r\n                        {{ 'training.new_training.errors.only_numbers' | translate }}\r\n                    </ion-text>\r\n                    <ion-text\r\n                        *ngIf=\"\r\n                            form.controls.reps?.errors?.min &&\r\n                            !form.controls.reps?.errors?.pattern &&\r\n                            !form.controls.reps?.errors?.pattern &&\r\n                            !isLoading\r\n                        \"\r\n                        slot=\"error\"\r\n                    >\r\n                        {{ 'training.new_training.errors.reps_min' | translate }}\r\n                    </ion-text>\r\n                    <ion-text\r\n                        *ngIf=\"\r\n                            form.controls.reps?.errors?.max &&\r\n                            !form.controls.reps?.errors?.pattern &&\r\n                            !form.controls.reps?.errors?.pattern &&\r\n                            !isLoading\r\n                        \"\r\n                        slot=\"error\"\r\n                    >\r\n                        {{ 'training.new_training.errors.reps_max' | translate }}\r\n                    </ion-text>\r\n                    <ion-text\r\n                        *ngIf=\"\r\n                            form.controls.reps?.errors?.required &&\r\n                            (isSubmitted || form.controls.reps.touched) &&\r\n                            !isLoading\r\n                        \"\r\n                        slot=\"error\"\r\n                    >\r\n                        {{ 'training.new_training.errors.reps_required' | translate }}\r\n                    </ion-text>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"2\" class=\"set-ctas\" [class.single-set-category]=\"availableSetCategoriesControl.value.length === 1\">\r\n                <ion-button\r\n                    class=\"button-no-background delete-set-btn\"\r\n                    type=\"button\"\r\n                    [disabled]=\"isFirstSet || isLoading\"\r\n                    (click)=\"deleteSet()\"\r\n                >\r\n                    <ion-icon name=\"trash-sharp\" color=\"primary\" class=\"set-cta-icon\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button\r\n                    *ngIf=\"availableSetCategoriesControl.value.length > 1\"\r\n                    class=\"button-no-background change-set-category\"\r\n                    type=\"button\"\r\n                    (click)=\"updateSetCategory()\">\r\n                    <ion-icon class=\"set-cta-icon\" name=\"construct-sharp\" color=\"primary\"></ion-icon>\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</form>\r\n";

/***/ }),

/***/ 5561:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/sets/sets.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"exerciseControl.value\">\r\n    <form *ngFor=\"let group of form.controls; let i = index;\" [formGroup]=\"group\">\r\n        <bl-set\r\n            #set\r\n            [form]=\"group\"\r\n            [weightUnit]=\"currentWeightUnit\"\r\n            [activeSetCategory]=\"selectedSetCategoriesControl.value[i]\"\r\n            [exerciseControl]=\"exerciseControl\"\r\n            [availableSetCategoriesControl]=\"availableSetCategoriesControl\"\r\n            [isLoading]=\"isLoading\"\r\n            [isSubmitted]=\"isSubmitted\"\r\n            [isFirstSet]=\"i === 0\"\r\n            (setChanged)=\"onSetChanged($event, i)\"\r\n            (setDeleted)=\"onSetDeleted(i)\"\r\n            (setConstituentKeydownEmitted)=\"onSetConstituentKeydownEmit($event, i)\"\r\n            (setCategoryModalOpened)=\"onUpdateSetCategory($event, i)\"></bl-set>\r\n    </form>\r\n</ng-container>\r\n<ion-grid>\r\n    <ion-row class=\"ion-text-center\">\r\n        <ion-col>\r\n            <ion-button\r\n                class=\"add-set-btn\"\r\n                type=\"button\"\r\n                color=\"primary\"\r\n                [disabled]=\"!exerciseControl.value || !form.valid\"\r\n                (click)=\"addSet()\"\r\n            >\r\n                {{ 'training.new_training.buttons.add_set' | translate }}\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 4975:
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/training/new-training/single-exercise/single-exercise.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<form\r\n    *ngFor=\"let group of form.controls; let i = index\"\r\n    class=\"form\"\r\n    [formGroup]=\"group\">\r\n    <ion-card class=\"wrapper\">\r\n        <ng-container formGroupName=\"exerciseData\">\r\n            <ion-grid>\r\n                <ion-row\r\n                    class=\"ion-text-center exercise-row\"\r\n                    [class.exercise-name-required]=\"form.controls[i].controls.exerciseData.controls.name.errors?.required &&\r\n                        (form.controls[i].controls.exerciseData.controls.name.touched ||\r\n                        form.controls[i].controls.exerciseData.controls.name.dirty ||\r\n                            isSubmitted) &&\r\n                        !isLoading\">\r\n                    <ion-col size=\"10\">\r\n                        <ion-item fill=\"outline\">\r\n                            <ion-label position=\"floating\">{{\r\n                                'training.new_training.pick_exercise' | translate\r\n                            }}</ion-label>\r\n                            <ion-select\r\n                                *ngIf=\"isExercisePicker$ | async\"\r\n                                #exercisePicker\r\n                                class=\"exercise-picker\"\r\n                                interface=\"popover\"\r\n                                formControlName=\"name\"\r\n                                (ionChange)=\"onExerciseNameChange(i, exercisePicker)\"\r\n                            >\r\n                                <ion-select-option\r\n                                    *ngFor=\"\r\n                                        let exercise of exercisesState$ | async | filterAvailableExercises: i\r\n                                    \"\r\n                                    [value]=\"exercise.name\"\r\n                                >\r\n                                    {{ exercise.name | translate }}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                            <ion-note\r\n                                *ngIf=\"\r\n                                form.controls[i].controls.exerciseData.controls.name.errors?.required &&\r\n                                    (form.controls[i].controls.exerciseData.controls.name.touched ||\r\n                                    form.controls[i].controls.exerciseData.controls.name.dirty ||\r\n                                        isSubmitted) &&\r\n                                    !isLoading\r\n                                \"\r\n                                slot=\"error\"\r\n                            >\r\n                                {{ 'training.new_training.errors.exercise_name_required' | translate }}\r\n                            </ion-note>\r\n                        </ion-item>\r\n                        <ion-note\r\n                            *ngIf=\"\r\n                                form.errors?.duplicateExerciseName &&\r\n                                form.errors?.duplicateExerciseName ===\r\n                                form.controls[i].controls.exerciseData.controls.name.value &&\r\n                                !isLoading\r\n                            \"\r\n                            class=\"error\"\r\n                        >\r\n                            {{ 'training.new_training.errors.exercise_name_duplicate' | translate }}\r\n                        </ion-note>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\">\r\n                        <ion-icon\r\n                            class=\"delete-exercise-icon\"\r\n                            name=\"trash-outline\"\r\n                            color=\"primary\"\r\n                            (click)=\"deleteExercise(i, form.controls[i].controls.exerciseData.controls.name.value)\"\r\n                        ></ion-icon>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ng-container>\r\n        <bl-sets\r\n            formControlName=\"sets\"\r\n            [editTrainingData]=\"editTrainingData\"\r\n            [indexExercise]=\"i\"\r\n            [bodyweightControl]=\"bodyweightControl\"\r\n            [exerciseControl]=\"form.controls[i].controls.exerciseData.controls.name\"\r\n            [availableSetCategoriesControl]=\"form.controls[i].controls.exerciseData.controls.availableSetCategories\"\r\n            [selectedSetCategoriesControl]=\"form.controls[i].controls.exerciseData.controls.selectedSetCategories\"\r\n            [isSubmitted]=\"isSubmitted\"\r\n            [editMode]=\"editMode\"\r\n            [isLoading]=\"isLoading\"\r\n            (selectedCategoriesChanged)=\"onSelectedCategoriesChanged($event, i)\"\r\n        ></bl-sets>\r\n    </ion-card>\r\n</form>\r\n\r\n<ion-grid>\r\n    <ion-row class=\"actions\">\r\n        <ion-col>\r\n            <ion-button\r\n                class=\"add-exercise-btn\"\r\n                type=\"button\"\r\n                color=\"primary\"\r\n                [disabled]=\"!(isAddExerciseAllowed$ | async) || isApiLoading\"\r\n                (click)=\"addExercise(undefined, $event)\"\r\n            >\r\n                {{ 'training.new_training.buttons.add_exercise' | translate }}\r\n            </ion-button>\r\n        </ion-col>\r\n        <ng-content></ng-content>\r\n    </ion-row>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 5798:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"filters-wrapper\">\r\n    <form #form=\"ngForm\" class=\"search-wrapper\" autocomplete=\"off\">\r\n        <div class=\"filter-wrapper\">\r\n            <ion-input\r\n                ngDefaultControl\r\n                #search=\"ngModel\"\r\n                name=\"search\"\r\n                type=\"text\"\r\n                class=\"search-input\"\r\n                [maxlength]=\"inputMaxLength\"\r\n                [placeholder]=\"'training.past_trainings.filters.enter_search_term' | translate\"\r\n                [(ngModel)]=\"searchValue\"\r\n                (keyup)=\"emitKeyboardEvent($event)\"\r\n            ></ion-input>\r\n            <span *ngIf=\"search?.control?.errors?.maxlength\" class=\"search-max-error\">\r\n                {{ 'training.past_trainings.filters.errors.search_max_length' | translate }}\r\n            </span>\r\n            <div class=\"or-wrapper\">\r\n                <span class=\"or\">{{ 'common.or' | translate }}</span>\r\n                <ion-icon name=\"filter-outline\" class=\"filter-icon\"></ion-icon>\r\n            </div>\r\n        </div>\r\n        <ion-segment\r\n            color=\"primary\"\r\n            mode=\"ios\"\r\n            [value]=\"periodFilter\"\r\n            [disabled]=\"periodDisabled\"\r\n            (ionChange)=\"segmentChanged($any($event))\"\r\n        >\r\n            <ng-container *ngFor=\"let option of sortOptions\">\r\n                <ion-segment-button [value]=\"option.key\">\r\n                    <ion-label color=\"primary\">{{ option.value | async }}</ion-label>\r\n                </ion-segment-button>\r\n            </ng-container>\r\n        </ion-segment>\r\n    </form>\r\n</div>\r\n";

/***/ }),

/***/ 6269:
/*!****************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-title\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ 'navigation.past_trainings' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ng-container *ngIf=\"pastTrainings$ | async as state\">\r\n        <bl-show-by-day\r\n            *ngIf=\"periodFilter === 'day' && !(isSearch$ | async) && !state.IsError\"\r\n            [startDate]=\"showByDayStartDate\"\r\n            [isLoading]=\"state.IsLoading\"\r\n            (dayActivated)=\"onDayActivated($event)\"\r\n        ></bl-show-by-day>\r\n        <ng-container *ngIf=\"state.IsError; else valueOrLoading\">\r\n            <div class=\"error-wrapper\">\r\n                <img class=\"error-image\" src=\"../../../../assets/svgs/error1.svg\" />\r\n                <h3 class=\"error-title\">\r\n                    {{ 'training.past_trainings.errors.past_trainings_error_title' | translate }}\r\n                </h3>\r\n                <span class=\"error-description\">\r\n                    {{ 'training.past_trainings.errors.past_trainings_error_description' | translate }}\r\n                </span>\r\n                <ion-button color=\"primary\" type=\"button\" (click)=\"tryAgain()\">\r\n                    {{ 'common.try_again' | translate }}\r\n                </ion-button>\r\n            </div>\r\n        </ng-container>\r\n        <ng-template #valueOrLoading>\r\n            <ng-container *ngIf=\"state.IsLoading\">\r\n                <ion-spinner class=\"ion-spinner-class\" name=\"crescent\" color=\"primary\"></ion-spinner>\r\n            </ng-container>\r\n            <bl-past-trainings-filters\r\n                [periodDisabled]=\"(isSearch$ | async) || state.IsLoading\"\r\n                [periodFilter]=\"periodFilter\"\r\n                (trainingEmitted)=\"searchEmitted($event)\"\r\n                (periodEmitted)=\"onPeriodEmitted($event, state.Value?.Results?.Dates?.StartDate)\"\r\n                (searchEmitted)=\"onFiltersSearchEmitted($event)\"\r\n            ></bl-past-trainings-filters>\r\n            <ion-card class=\"card-info-wrapper ion-text-center\">\r\n                <ion-card-header class=\"card-info-wrapper--header\">\r\n                    <ion-card-title class=\"header-title\">\r\n                        <div\r\n                            *skeleton=\"state.IsLoading; width: '305px'; height: '25px'\"\r\n                            #timePeriod\r\n                            [innerHTML]=\"setTimePeriod$(state.Value?.Results) | async | sanitizeHtml\"\r\n                        ></div>\r\n                    </ion-card-title>\r\n                </ion-card-header>\r\n            </ion-card>\r\n            <div #itemWrapper class=\"training-item-wrapper\">\r\n                <ng-container *ngIf=\"state.Value?.TotalCount > 0; else noTrainings\">\r\n                    <bl-training-item\r\n                        *ngFor=\"let training of state.Value?.Results?.Trainings\"\r\n                        [training]=\"training\"\r\n                        (trainingItemClicked)=\"onTrainingItemClicked()\"\r\n                    ></bl-training-item>\r\n                </ng-container>\r\n                <ng-template #noTrainings>\r\n                    <section class=\"no-trainings\">\r\n                        <ng-container *ngIf=\"state.Value?.TotalCount === 0\">\r\n                            <h1 class=\"no-trainings-title\">\r\n                                <ng-container *ngIf=\"!(isSearch$ | async); else noResultSearch\">\r\n                                    {{\r\n                                        periodFilter === 'week'\r\n                                            ? ('training.past_trainings.no_trainings_week' | translate)\r\n                                            : ('training.past_trainings.no_trainings_day'\r\n                                              | translate\r\n                                                  : {\r\n                                                        dayName:\r\n                                                            getDayTranslation$(state.Value?.Results?.DayName) | async\r\n                                                    })\r\n                                    }}\r\n                                </ng-container>\r\n                                <ng-template #noResultSearch>\r\n                                    <span\r\n                                        [innerHTML]=\"\r\n                                            'training.past_trainings.no_trainings_search'\r\n                                                | translate: { searchText }\r\n                                                | sanitizeHtml\r\n                                        \"\r\n                                    ></span>\r\n                                </ng-template>\r\n                            </h1>\r\n                            <ion-button\r\n                                *ngIf=\"!(isSearch$ | async)\"\r\n                                type=\"button\"\r\n                                color=\"primary\"\r\n                                (click)=\"logNewTraining()\"\r\n                            >\r\n                                {{ 'training.past_trainings.log_training' | translate }}\r\n                            </ion-button>\r\n                        </ng-container>\r\n                    </section>\r\n                </ng-template>\r\n            </div>\r\n            <bl-pagination\r\n                [isSearch]=\"isSearch$ | async\"\r\n                [page]=\"page\"\r\n                [size]=\"size\"\r\n                [isPreviousPage]=\"isPreviousPage$ | async\"\r\n                [isNextPage]=\"isNextPage$ | async\"\r\n                [data]=\"state\"\r\n                [isLoading]=\"state.IsLoading\"\r\n                (paginatorChanged)=\"onPaginatorChanged($event, state.Value?.Results?.Dates?.StartDate)\"\r\n            ></bl-pagination>\r\n        </ng-template>\r\n    </ng-container>\r\n</ion-content>\r\n";

/***/ }),

/***/ 7462:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/show-by-day/show-by-day.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-fab horizontal=\"end\" vertical=\"down\" slot=\"fixed\" [activated]=\"true\">\r\n    <ion-fab-button color=\"primary\">\r\n        <ion-icon name=\"calendar-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list>\r\n        <ion-fab-button\r\n            *ngFor=\"let day of daysOfWeek$ | async; let i = index\"\r\n            type=\"button\"\r\n            [class.active-day]=\"(activeDay$$ | async) === i + 1\"\r\n            [disabled]=\"isLoading\"\r\n            (click)=\"$event.stopImmediatePropagation(); onDayActivated(i);\"\r\n        >\r\n            {{ day.substring(0, 3) }}\r\n        </ion-fab-button>\r\n    </ion-fab-list>\r\n</ion-fab>\r\n";

/***/ }),

/***/ 251:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.html?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-icon\r\n    class=\"action\"\r\n    [name]=\"action | mapTrainingItemActions: 'icon'\"\r\n    (click)=\"$event.stopPropagation(); performAction(action)\"\r\n></ion-icon>\r\n";

/***/ }),

/***/ 6453:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card mode=\"md\" class=\"ion-text-center\" (click)=\"trainingClicked()\">\r\n    <ion-card-header>\r\n        <ion-card-title>\r\n            <strong class=\"day-name\">{{ 'weekdays.' + weekDays[dayIndex] | translate }}</strong>\r\n            <ion-text class=\"day-date\">{{ '(' + (training.trainingDate | date: 'dd.MM.yyyy') + ')' }}</ion-text>\r\n        </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n        <ion-grid class=\"info-grid\">\r\n            <ion-row>\r\n                <ion-col *ngIf=\"training?.bodyweight\">\r\n                    <div class=\"bodyweight\">\r\n                        <strong class=\"bodyweight--key\">\r\n                            {{ 'common.bodyweight' | translate }}\r\n                        </strong>\r\n                        <span class=\"bodyweight--value\">\r\n                            {{ training.bodyweight + ' kg' }}\r\n                        </span>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <div class=\"created-at\" [class.created-at--no-bodyweight]=\"!training?.bodyweight\">\r\n                        <strong class=\"created-at--key\">\r\n                            {{ 'common.created_at_time' | translate }}\r\n                        </strong>\r\n                        <span class=\"created-at--value\">\r\n                            {{ timeCreated }}\r\n                        </span>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n        <div class=\"exercise-wrapper\" [class.exercise-wrapper-no-dots]=\"training.exercises.length <= 2\">\r\n            <span *ngFor=\"let data of training.exercises | slice: 0:2; let i = index\" class=\"exercise-name\">\r\n                {{ i + 1 + '. ' + (data.exerciseData.name | translate) }}\r\n            </span>\r\n            <span *ngIf=\"training.exercises.length > 2\" class=\"exercise-dots\"> &#8942; </span>\r\n        </div>\r\n        <div class=\"actions\">\r\n            <bl-training-item-actions\r\n                *ngFor=\"let action of actions\"\r\n                [action]=\"action\"\r\n                [training]=\"training\"\r\n                [weekDays]=\"weekDays\"\r\n                [dayIndex]=\"dayIndex\"\r\n                [timeCreated]=\"timeCreated\"\r\n            ></bl-training-item-actions>\r\n        </div>\r\n    </ion-card-content>\r\n</ion-card>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_training_training_module_ts.js.map