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


const mapStreamData = () => (source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((trainingData) => ({
    IsLoading: false,
    Value: trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value,
    IsError: false,
})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
    IsLoading: false,
    IsError: true,
})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)({
    IsLoading: true,
    IsError: false,
}));


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 77114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material.module */ 63806);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/pipes.module */ 35503);
/* harmony import */ var _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module */ 31515);
/* harmony import */ var _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/training/new-training/new-training.component */ 57332);
/* harmony import */ var _views_training_past_trainings_past_trainings_filters_past_trainings_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings-filters/past-trainings-filters.component */ 84958);
/* harmony import */ var _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings.component */ 50157);
/* harmony import */ var _views_training_past_trainings_training_item_training_item_actions_training_item_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/training/past-trainings/training-item/training-item-actions/training-item-actions.component */ 72626);
/* harmony import */ var _views_training_past_trainings_training_item_training_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/training/past-trainings/training-item/training-item.component */ 54271);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ 95601);
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./training-routing.module */ 22551);


















const COMPONENTS = [
    _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_3__.NewTrainingComponent,
    _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_5__.PastTrainingsComponent,
    _views_training_past_trainings_training_item_training_item_component__WEBPACK_IMPORTED_MODULE_7__.TrainingItemComponent,
    _views_training_past_trainings_training_item_training_item_actions_training_item_actions_component__WEBPACK_IMPORTED_MODULE_6__.TrainingItemActionsComponent,
    _views_training_past_trainings_past_trainings_filters_past_trainings_filters_component__WEBPACK_IMPORTED_MODULE_4__.PastTrainingsFiltersComponent,
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
    _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
];
const IMPORTS = [
    _training_routing_module__WEBPACK_IMPORTED_MODULE_9__.TrainingRoutingModule,
    _shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
];
const PIPES_MODULES = [_pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_2__.ShowAllExercisesModule];
let TrainingModule = class TrainingModule {
};
TrainingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [...COMPONENTS],
        imports: [
            ...EXTERNAL_IMPORTS,
            ...IMPORTS,
            ...PIPES_MODULES,
        ],
        exports: [...COMPONENTS],
        providers: [
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MAT_DATE_LOCALE,
                useValue: 'en-GB',
            },
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe,
        ],
    })
], TrainingModule);



/***/ }),

/***/ 42960:
/*!*************************************************************!*\
  !*** ./src/app/services/training/past-trainings.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastTrainingsService": () => (/* binding */ PastTrainingsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/training/past-trainings/map-past-trainings-dates.helper */ 35717);






const ROUTE_PREFIX = '/training/';
let PastTrainingsService = class PastTrainingsService {
    constructor(http) {
        this.http = http;
    }
    searchPastTrainings(searchValue, pageSize, currentPage) {
        const params = `?searchValue=${searchValue}&size=${pageSize.toString()}&page=${currentPage.toString()}`;
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND}${ROUTE_PREFIX}search_trainings${params}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => (0,_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__.mapDateInterval)(response)));
    }
    getPastTrainings(currentDate) {
        const params = `?currentDate=${currentDate}`;
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND}${ROUTE_PREFIX}past_trainings${params}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => (0,_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_1__.mapDateInterval)(response)));
    }
    getPastTraining(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND}${ROUTE_PREFIX}past_trainings/${id}`);
    }
};
PastTrainingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
PastTrainingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
], PastTrainingsService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_training_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-training.component.html?ngResource */ 9370);
/* harmony import */ var _new_training_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-training.component.scss?ngResource */ 79973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared/shared.service */ 41571);
/* harmony import */ var src_app_services_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/training/past-trainings.service */ 42960);
/* harmony import */ var _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/spinner-size.const */ 32439);
/* harmony import */ var _handlers_new_training_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../handlers/new-training.handler */ 10353);
/* harmony import */ var _helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-stream-data.helper */ 83037);
/* harmony import */ var _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/training/new-training/empty-training.model */ 42442);
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/training/new-training.service */ 53002);
/* harmony import */ var _validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../validators/shared/common.validators */ 9366);
















let NewTrainingComponent = class NewTrainingComponent {
    constructor(newTrainingService, pastTrainingService, sharedService, route) {
        this.newTrainingService = newTrainingService;
        this.pastTrainingService = pastTrainingService;
        this.sharedService = sharedService;
        this.route = route;
        this.editData = _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_7__.EMPTY_TRAINING_EDIT;
        this.editMode = false;
        this.focusCounter = 0;
        this.trainingStream$ = undefined;
        this.trainingStream$ =
            this.route.params
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)((params) => {
                if (params['id']) {
                    this.editMode = true;
                    this.editData._id = params['id'];
                    return this.pastTrainingService.getPastTraining(this.editData._id)
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)((response) => {
                        var _a, _b;
                        this.editData = {
                            editedDate: (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.updatedAt) !== null && _b !== void 0 ? _b : new Date(),
                            editTraining: Object.assign(Object.assign({}, response === null || response === void 0 ? void 0 : response.Value), { editMode: true }),
                        };
                        this.newTrainingService.updateTrainingData(this.editData.editTraining);
                    }));
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([
                        this.newTrainingService.allExercisesChanged$
                            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)),
                        this.newTrainingService.currentTrainingChanged$
                            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)),
                    ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(([exercises, training]) => {
                        var _a;
                        const currentTrainingState = Object.assign({}, training);
                        if (currentTrainingState) {
                            if (currentTrainingState.editMode && !this.editMode) {
                                this.newTrainingService.updateTrainingData(Object.assign(Object.assign({}, _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_7__.EMPTY_TRAINING), { exercise: [(0,_models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_7__.createEmptyExercise)(exercises)], userId: (_a = currentTrainingState === null || currentTrainingState === void 0 ? void 0 : currentTrainingState.userId) !== null && _a !== void 0 ? _a : '' }));
                            }
                        }
                    }));
                }
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => this.sharedService.editingTraining$$.next(this.editMode)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(_ => this.newTrainingService.getExercises()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => this.formInit()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)())));
    }
    set bodyweightInput(bodyweight) {
        if (bodyweight && this.focusCounter === 0) {
            setTimeout(() => {
                bodyweight.nativeElement.focus();
                this.focusCounter++;
            });
        }
    }
    get spinnerSize() {
        return _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_4__.SPINNER_SIZE;
    }
    get bodyweight() {
        return this.form.get('bodyweight');
    }
    ngOnDestroy() {
        this.sharedService.editingTraining$$.next(false);
    }
    onBodyweightChange(bodyweight) {
        this.newTrainingService.addBodyweightToStorage(bodyweight);
    }
    //TODO: fix edit mode
    tryAgain() {
        if (this.editData.editTraining) {
            this.pastTrainingService.getPastTraining(this.editData._id)
                .pipe((0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)()).subscribe((response) => {
                var _a, _b;
                this.editData = {
                    editedDate: (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.updatedAt) !== null && _b !== void 0 ? _b : new Date(),
                    editTraining: Object.assign(Object.assign({}, response === null || response === void 0 ? void 0 : response.Value), { editMode: this.editMode }),
                };
                this.newTrainingService.updateTrainingData(this.editData.editTraining);
            });
        }
        else {
            this.trainingStream$ = this.newTrainingService.getExercises()
                .pipe((0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_6__.mapStreamData)());
        }
    }
    formInit() {
        var _a, _b;
        const currentTrainingState = Object.assign({}, this.newTrainingService.getCurrentTrainingState());
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
            'bodyweight': new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(_handlers_new_training_handler__WEBPACK_IMPORTED_MODULE_5__.fillBodyweight(currentTrainingState.bodyweight, ((_a = this.editData) === null || _a === void 0 ? void 0 : _a.editTraining) ? (_b = this.editData.editTraining) === null || _b === void 0 ? void 0 : _b.bodyweight : null), [_validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_9__.isBroj(), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.min(30), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.max(300)]),
            'exercise': new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(currentTrainingState),
        });
    }
};
NewTrainingComponent.ctorParameters = () => [
    { type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_8__.NewTrainingService },
    { type: src_app_services_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_3__.PastTrainingsService },
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute }
];
NewTrainingComponent.propDecorators = {
    bodyweightInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['bodyweightRef', {
                    read: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ElementRef,
                },] }]
};
NewTrainingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'bl-new-training',
        template: _new_training_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectionStrategy.OnPush,
        styles: [_new_training_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewTrainingComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _past_trainings_filters_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./past-trainings-filters.component.html?ngResource */ 25798);
/* harmony import */ var _past_trainings_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./past-trainings-filters.component.scss?ngResource */ 24015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _constants_input_maxlength_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants/input-maxlength.const */ 66265);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ 50523);










let PastTrainingsFiltersComponent = class PastTrainingsFiltersComponent {
    constructor(unsubscribeService, translateService, route) {
        var _a;
        this.unsubscribeService = unsubscribeService;
        this.translateService = translateService;
        this.route = route;
        this.keyUp$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.trainingEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((event) => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((value) => value.trim().toLowerCase()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((value) => value.length <= 50), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribeService))
            .subscribe((value) => this.trainingEmitted.next(value));
    }
    get inputMaxLength() {
        return _constants_input_maxlength_const__WEBPACK_IMPORTED_MODULE_2__.INPUT_MAX_LENGTH;
    }
    ngAfterViewInit() {
        setTimeout(() => this.searchInput.nativeElement.focus());
    }
    emitKeyboardEvent($event) {
        this.keyUp$$.next($event);
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
    trainingEmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['search', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }]
};
PastTrainingsFiltersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'bl-past-trainings-filters',
        template: _past_trainings_filters_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
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
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _past_trainings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./past-trainings.component.html?ngResource */ 36269);
/* harmony import */ var _past_trainings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./past-trainings.component.scss?ngResource */ 32016);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 75845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 11282);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 53470);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 97064);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ 88393);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns-tz */ 31941);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared/shared.service */ 41571);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/spinner-size.const */ 32439);
/* harmony import */ var _helpers_months_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/months.helper */ 73140);
/* harmony import */ var _helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-stream-data.helper */ 83037);
/* harmony import */ var _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/common/interfaces/paginator.model */ 68350);
/* harmony import */ var _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/training/past-trainings/past-trainings.model */ 48941);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/shared/unsubscribe.service */ 50523);
/* harmony import */ var _services_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/training/past-trainings.service */ 42960);
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/is-never-check.helper */ 13899);






















var Heights;

(function (Heights) {
  Heights[Heights["LOWER_WEEK_HEIGHT"] = 275] = "LOWER_WEEK_HEIGHT";
  Heights[Heights["HIGHER_WEEK_HEIGHT"] = 305] = "HIGHER_WEEK_HEIGHT";
  Heights[Heights["LOWER_SEARCH_HEIGHT"] = 305] = "LOWER_SEARCH_HEIGHT";
  Heights[Heights["HIGHER_SEARCH_HEIGHT"] = 335] = "HIGHER_SEARCH_HEIGHT";
})(Heights || (Heights = {}));

let PastTrainingsComponent = class PastTrainingsComponent {
  constructor(pastTrainingsService, unsubscribeService, translateService, sharedService, changeDetectorRef, route, datePipe, router) {
    var _a, _b, _c;

    this.pastTrainingsService = pastTrainingsService;
    this.unsubscribeService = unsubscribeService;
    this.translateService = translateService;
    this.sharedService = sharedService;
    this.changeDetectorRef = changeDetectorRef;
    this.route = route;
    this.datePipe = datePipe;
    this.router = router;
    this.food = 3000;
    this.pageSizeOptions = [1, 3, 5, 10];
    this.size = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_SIZE;
    this.page = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_8__.INITIAL_PAGE;
    this.isNextPage = true;
    this.isPreviousPage = true;
    this.pastTrainings$ = undefined;
    this.sharedService.deletedTraining$$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.unsubscribeService)).subscribe(response => {
      this.pastTrainings$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(response).pipe((0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)());
      this.changeDetectorRef.markForCheck();
    });
    this.page = ((_a = this.route.snapshot.queryParamMap) === null || _a === void 0 ? void 0 : _a.get('page')) ? +this.route.snapshot.queryParamMap.get('page') : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_8__.INITIAL_PAGE;
    this.size = ((_b = this.route.snapshot.queryParamMap) === null || _b === void 0 ? void 0 : _b.get('size')) ? +this.route.snapshot.queryParamMap.get('size') : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_SIZE;
    const searchFilter = (_c = this.route.snapshot.queryParamMap) === null || _c === void 0 ? void 0 : _c.get('search');

    if (searchFilter) {
      this.pastTrainings$ = this.pastTrainingsService.searchPastTrainings(searchFilter.trim().toLowerCase(), this.size, this.page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(x => this.handleArrows(x)), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)());
    } else {
      this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(response => this.handleArrows(response)), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)());
    }
  }

  set timePeriodEl(timePeriodElement) {
    var _a;

    if (timePeriodElement) {
      const trainingElement = (_a = this.trainingItemWrapper) === null || _a === void 0 ? void 0 : _a.nativeElement;

      if (trainingElement) {
        this.isSearch$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.unsubscribeService)).subscribe(isSearch => {
          if (timePeriodElement.nativeElement.offsetHeight === 30) {
            trainingElement.style.maxHeight = `calc(100vh - ${isSearch ? Heights.LOWER_SEARCH_HEIGHT : Heights.LOWER_WEEK_HEIGHT}px)`;
          } else if (timePeriodElement.nativeElement.offsetHeight > 30) {
            trainingElement.style.maxHeight = `calc(100vh - ${isSearch ? Heights.HIGHER_SEARCH_HEIGHT : Heights.HIGHER_WEEK_HEIGHT}px)`;
          }
        });
      }
    }
  }

  get spinnerSize() {
    return _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_5__.SPINNER_SIZE;
  }

  get dateFormat() {
    return _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_9__.TEMPLATE_DATE_FORMAT;
  }

  get maxTrainingsPerPage() {
    return _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_SIZE;
  }

  get isSearch$() {
    return this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(params => !!(params === null || params === void 0 ? void 0 : params.get('search'))));
  }

  searchEmitted($event) {
    var _this = this;

    this.page = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_8__.INITIAL_PAGE;
    this.pastTrainings$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)($event).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(value => this.pastTrainingsService.searchPastTrainings(value, this.size, this.page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)( /*#__PURE__*/function () {
      var _ref = (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        _this.updatePageAndSize(response);

        yield _this.router.navigate([], {
          relativeTo: _this.route,
          queryParams: _this.handleQueryParams(response, $event.trim() !== '' ? $event.trim() : undefined)
        });

        _this.handleArrows(response);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)())));
  }

  onPaginatorChanged($event) {
    var _this2 = this;

    var _a, _b, _c, _d;

    if ($event === null || $event === void 0 ? void 0 : $event.IsSearch) {
      const currentSearchValue = (_b = (_a = this.route.snapshot.queryParamMap) === null || _a === void 0 ? void 0 : _a.get('search')) !== null && _b !== void 0 ? _b : undefined;
      this.pastTrainings$ = this.pastTrainingsService.searchPastTrainings((_d = (_c = currentSearchValue === null || currentSearchValue === void 0 ? void 0 : currentSearchValue.trim()) === null || _c === void 0 ? void 0 : _c.toLowerCase()) !== null && _d !== void 0 ? _d : '', $event.Size, $event.Page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)( /*#__PURE__*/function () {
        var _ref2 = (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this2.updatePageAndSize(response);

          yield _this2.router.navigate([], {
            relativeTo: _this2.route,
            queryParams: _this2.handleQueryParams(response, currentSearchValue)
          });

          _this2.handleArrows(response);
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)());
    } else {
      this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.calculateDate($event.PageType, $event.DateInterval, $event.EarliestTrainingDate)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)( /*#__PURE__*/function () {
        var _ref3 = (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this2.handleArrows(response);

          yield _this2.router.navigate([], {
            relativeTo: _this2.route,
            queryParams: _this2.handleQueryParams(response)
          });
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }()), (0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)());
    }
  }

  tryAgain() {
    this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams()).pipe((0,_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_7__.mapStreamData)());
  }

  setTimePeriod(dateInterval) {
    const isDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(dateInterval.StartDate, dateInterval.EndDate);

    if (isDay) {
      return this.translateService.stream(`common.day`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate)));
    }

    const isWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(dateInterval.StartDate, dateInterval.EndDate, {
      weekStartsOn: 1
    });

    if (isWeek) {
      return this.translateService.stream('common.week').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
    }

    const isMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])(dateInterval.StartDate, dateInterval.EndDate);

    if (isMonth) {
      const month = (0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(dateInterval.StartDate);
      return this.translateService.stream(`common.months.${_helpers_months_helper__WEBPACK_IMPORTED_MODULE_6__.ALL_MONTHS[month]}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
    }

    return this.translateService.stream('common.period').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
  }

  updatePageAndSize(response) {
    var _a, _b, _c, _d;

    this.page = (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.CurrentPage) !== null && _b !== void 0 ? _b : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_8__.INITIAL_PAGE;
    this.size = (_d = (_c = response === null || response === void 0 ? void 0 : response.Value) === null || _c === void 0 ? void 0 : _c.Size) !== null && _d !== void 0 ? _d : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_SIZE;
    this.changeDetectorRef.markForCheck();
  }

  calculateDate(page, dateInterval, earliestTrainingDate) {
    switch (page) {
      case 'Previous':
        {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_22__["default"])((0,date_fns_tz__WEBPACK_IMPORTED_MODULE_23__.utcToZonedTime)(dateInterval.StartDate, _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.TIMEZONE), 7);
        }

      case 'Next':
        {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_24__["default"])((0,date_fns_tz__WEBPACK_IMPORTED_MODULE_23__.utcToZonedTime)(dateInterval.StartDate, _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.TIMEZONE), 7);
        }

      case 'First':
        {
          return earliestTrainingDate;
        }

      case 'Last':
        {
          return new Date();
        }

      default:
        return (0,_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_12__.isNeverCheck)(page);
    }
  }

  handleQueryParams(trainingData, searchValue) {
    return {
      startDate: this.handleSpecificQueryParam(searchValue, trainingData, 'startDate'),
      endDate: this.handleSpecificQueryParam(searchValue, trainingData, 'endDate'),
      search: searchValue !== null && searchValue !== void 0 ? searchValue : undefined,
      page: this.handleSpecificQueryParam(searchValue, trainingData, 'page'),
      size: this.handleSpecificQueryParam(searchValue, trainingData, 'size')
    };
  }

  handleSpecificQueryParam(searchValue, trainingData, queryParam) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;

    if (searchValue) {
      if (((_a = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _a === void 0 ? void 0 : _a.TotalCount) > 0) {
        if (queryParam === 'page') {
          return this.page.toString();
        } else if (queryParam === 'startDate') {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_25__["default"])((0,date_fns_tz__WEBPACK_IMPORTED_MODULE_23__.utcToZonedTime)((_e = (_d = (_c = (_b = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _b === void 0 ? void 0 : _b.Results) === null || _c === void 0 ? void 0 : _c.Dates) === null || _d === void 0 ? void 0 : _d.StartDate) !== null && _e !== void 0 ? _e : new Date(), _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.TIMEZONE), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_9__.QUERY_PARAMS_DATE_FORMAT);
        } else if (queryParam === 'endDate') {
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_25__["default"])((0,date_fns_tz__WEBPACK_IMPORTED_MODULE_23__.utcToZonedTime)((_j = (_h = (_g = (_f = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _f === void 0 ? void 0 : _f.Results) === null || _g === void 0 ? void 0 : _g.Dates) === null || _h === void 0 ? void 0 : _h.EndDate) !== null && _j !== void 0 ? _j : new Date(), _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.TIMEZONE), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_9__.QUERY_PARAMS_DATE_FORMAT);
        } else {
          return this.size.toString();
        }
      } else {
        return undefined;
      }
    } else {
      if (queryParam === 'startDate') {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_25__["default"])((0,date_fns_tz__WEBPACK_IMPORTED_MODULE_23__.utcToZonedTime)((_o = (_m = (_l = (_k = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _k === void 0 ? void 0 : _k.Results) === null || _l === void 0 ? void 0 : _l.Dates) === null || _m === void 0 ? void 0 : _m.StartDate) !== null && _o !== void 0 ? _o : new Date(), _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.TIMEZONE), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_9__.QUERY_PARAMS_DATE_FORMAT);
      } else if (queryParam === 'endDate') {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_25__["default"])((0,date_fns_tz__WEBPACK_IMPORTED_MODULE_23__.utcToZonedTime)((_s = (_r = (_q = (_p = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _p === void 0 ? void 0 : _p.Results) === null || _q === void 0 ? void 0 : _q.Dates) === null || _r === void 0 ? void 0 : _r.EndDate) !== null && _s !== void 0 ? _s : new Date(), _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.TIMEZONE), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_9__.QUERY_PARAMS_DATE_FORMAT);
      } else {
        return undefined;
      }
    }
  }

  handleArrows(x) {
    var _a, _b, _c, _d, _e, _f, _g;

    if (((_a = x === null || x === void 0 ? void 0 : x.Value) === null || _a === void 0 ? void 0 : _a.TotalCount) <= _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_SIZE) {
      this.isNextPage = false;
      this.isPreviousPage = false;
    } else {
      this.isPreviousPage = !!((_b = x === null || x === void 0 ? void 0 : x.Value) === null || _b === void 0 ? void 0 : _b.Previous);
      this.isNextPage = !!((_c = x === null || x === void 0 ? void 0 : x.Value) === null || _c === void 0 ? void 0 : _c.Next);
    }

    if (((_e = (_d = x === null || x === void 0 ? void 0 : x.Value) === null || _d === void 0 ? void 0 : _d.Results) === null || _e === void 0 ? void 0 : _e.IsPreviousWeek) !== undefined && ((_g = (_f = x === null || x === void 0 ? void 0 : x.Value) === null || _f === void 0 ? void 0 : _f.Results) === null || _g === void 0 ? void 0 : _g.IsNextWeek) !== undefined) {
      this.isNextPage = x.Value.Results.IsNextWeek;
      this.isPreviousPage = x.Value.Results.IsPreviousWeek;
    }

    this.changeDetectorRef.markForCheck();
  }

  getDateTimeQueryParams() {
    var _a, _b, _c;

    const splittedDate = (_c = (_b = (_a = this.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.startDate) === null || _b === void 0 ? void 0 : _b.split('-')) !== null && _c !== void 0 ? _c : [];
    const utc = splittedDate.length > 0 ? new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString() : new Date().toUTCString();
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_23__.utcToZonedTime)(new Date(utc), _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.TIMEZONE);
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
  type: _services_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_11__.PastTrainingsService
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__.UnsubscribeService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService
}, {
  type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_28__.ActivatedRoute
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_29__.DatePipe
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_28__.Router
}];

PastTrainingsComponent.propDecorators = {
  trainingItemWrapper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild,
    args: ['itemWrapper', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ElementRef
    }]
  }],
  timePeriodEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild,
    args: ['timePeriod', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ElementRef
    }]
  }]
};
PastTrainingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.Component)({
  selector: 'bl-past-trainings',
  template: _past_trainings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ChangeDetectionStrategy.OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__.UnsubscribeService],
  styles: [_past_trainings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PastTrainingsComponent);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _training_item_actions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-item-actions.component.html?ngResource */ 40251);
/* harmony import */ var _training_item_actions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-item-actions.component.scss?ngResource */ 78771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_training_training_actions_delete_training_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/training/training-actions/delete-training-action.service */ 24513);





let TrainingItemActionsComponent = class TrainingItemActionsComponent {
    constructor(deleteTrainingActionService) {
        this.deleteTrainingActionService = deleteTrainingActionService;
    }
    performAction(action) {
        const data = {
            weekDays: this.weekDays,
            timeCreated: this.timeCreated,
            dayIndex: this.dayIndex,
            training: this.training,
        };
        switch (action) {
            case 'delete':
                this.deleteTrainingActionService.perform(data);
        }
    }
};
TrainingItemActionsComponent.ctorParameters = () => [
    { type: src_app_services_training_training_actions_delete_training_action_service__WEBPACK_IMPORTED_MODULE_2__.DeleteTrainingActionService }
];
TrainingItemActionsComponent.propDecorators = {
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    training: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    dayIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    weekDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    timeCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TrainingItemActionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'bl-training-item-actions',
        template: _training_item_actions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_training_item_actions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainingItemActionsComponent);



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
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _training_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-item.component.html?ngResource */ 26453);
/* harmony import */ var _training_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-item.component.scss?ngResource */ 80296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/common/interfaces/common.model */ 66756);
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared/shared.service */ 41571);
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ 50523);











const MAX_EXERCISE_NAME_WIDTH = 200;
let TrainingItemComponent = class TrainingItemComponent {
  constructor(unsubscribeService, sharedService, changeDetectorRef, route, router) {
    this.unsubscribeService = unsubscribeService;
    this.sharedService = sharedService;
    this.changeDetectorRef = changeDetectorRef;
    this.route = route;
    this.router = router;
    this.weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    this.actions = ['delete', 'more'];
    this.isTooltipDisabled = true;
  }

  set exerciseNameEls(exerciseNames) {
    if (exerciseNames) {
      setTimeout(() => {
        exerciseNames.forEach(exerciseName => {
          var _a;

          if (((_a = exerciseName.nativeElement) === null || _a === void 0 ? void 0 : _a.offsetWidth) > MAX_EXERCISE_NAME_WIDTH || this.training.exercise.length > 2) {
            this.isTooltipDisabled = false;
          }
        });
        this.changeDetectorRef.markForCheck();
      });
    }
  }

  ngOnInit() {
    //TODO: vrijeme ovdje ide 2 sata unaprijed (uskladiti s lokalnom zonom) - Zasad samo oduzimam 2 sata
    this.timeCreated = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(this.sharedService.subtractTwoHours(new Date(this.training.createdAt)), 'HH:mm');
    this.dayIndex = this.sharedService.subtractTwoHours(new Date(this.training.createdAt)).getDay();
  }

  trainingClicked() {
    var _this = this;

    return (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)( /*#__PURE__*/function () {
        var _ref = (0,C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          _this.sharedService.pastTrainingsQueryParams$$.next(params);

          localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_3__.LocalStorageItems.QUERY_PARAMS, JSON.stringify(params));
          yield _this.router.navigate(['/training/new-training', _this.training._id]);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(_this.unsubscribeService)).subscribe();
    })();
  }

};

TrainingItemComponent.ctorParameters = () => [{
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_5__.UnsubscribeService
}, {
  type: _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}];

TrainingItemComponent.propDecorators = {
  training: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  exerciseNameEls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChildren,
    args: ['exerciseNameEl', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
    }]
  }]
};
TrainingItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'bl-training-item',
  template: _training_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_5__.UnsubscribeService],
  styles: [_training_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TrainingItemComponent);


/***/ }),

/***/ 86113:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros/index.js ***!
  \*************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = addLeadingZeros;

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

module.exports = exports.default;

/***/ }),

/***/ 40876:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/_lib/assign/index.js ***!
  \****************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = assign;

function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

module.exports = exports.default;

/***/ }),

/***/ 28995:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/cloneObject/index.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = cloneObject;

var _index = _interopRequireDefault(__webpack_require__(/*! ../assign/index.js */ 40876));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneObject(dirtyObject) {
  return (0, _index.default)({}, dirtyObject);
}

module.exports = exports.default;

/***/ }),

/***/ 14414:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters/index.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ 24313));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ 2447));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ 61599));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ 79010));

var _index5 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ 69041));

var _index6 = _interopRequireDefault(__webpack_require__(/*! ../../addLeadingZeros/index.js */ 86113));

var _index7 = _interopRequireDefault(__webpack_require__(/*! ../lightFormatters/index.js */ 2059));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _index7.default.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0, _index5.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0, _index6.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0, _index6.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0, _index3.default)(date); // Padding

    return (0, _index6.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0, _index6.default)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0, _index6.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0, _index6.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _index7.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0, _index6.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0, _index4.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0, _index6.default)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0, _index2.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0, _index6.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _index7.default.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0, _index.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0, _index6.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0, _index6.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0, _index6.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0, _index6.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _index7.default.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _index7.default.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0, _index6.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0, _index6.default)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _index7.default.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _index7.default.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _index7.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0, _index6.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0, _index6.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0, _index6.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0, _index6.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0, _index6.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0, _index6.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

var _default = formatters;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 2059:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters/index.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../addLeadingZeros/index.js */ 86113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0, _index.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0, _index.default)(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0, _index.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0, _index.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0, _index.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0, _index.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0, _index.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0, _index.default)(fractionalSeconds, token.length);
  }
};
var _default = formatters;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 62781:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters/index.js ***!
  \*******************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var _default = longFormatters;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 2805:
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*****************************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getTimezoneOffsetInMilliseconds;

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

module.exports = exports.default;

/***/ }),

/***/ 24313:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCDayOfYear/index.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getUTCDayOfYear;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ 76255));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0, _index2.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

module.exports = exports.default;

/***/ }),

/***/ 61599:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCISOWeekYear/index.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getUTCISOWeekYear;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ 76255));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ 37490));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 42923));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear(dirtyDate) {
  (0, _index2.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0, _index3.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0, _index3.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

module.exports = exports.default;

/***/ }),

/***/ 2447:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCISOWeek/index.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getUTCISOWeek;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ 76255));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 42923));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ 79838));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0, _index4.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  var diff = (0, _index2.default)(date).getTime() - (0, _index3.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

module.exports = exports.default;

/***/ }),

/***/ 69041:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCWeekYear/index.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getUTCWeekYear;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ 76255));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ 37490));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCWeek/index.js */ 57039));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../toInteger/index.js */ 85633));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0, _index2.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index4.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index4.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0, _index3.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0, _index3.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

module.exports = exports.default;

/***/ }),

/***/ 79010:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCWeek/index.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getUTCWeek;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ 76255));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCWeek/index.js */ 57039));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCWeekYear/index.js */ 21365));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0, _index4.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  var diff = (0, _index2.default)(date, options).getTime() - (0, _index3.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

module.exports = exports.default;

/***/ }),

/***/ 48634:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
exports.isProtectedWeekYearToken = isProtectedWeekYearToken;
exports.throwProtectedError = throwProtectedError;
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];

function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}

function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}

function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ 37490:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/requiredArgs/index.js ***!
  \**********************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = requiredArgs;

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

module.exports = exports.default;

/***/ }),

/***/ 79838:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = startOfUTCISOWeekYear;

var _index = _interopRequireDefault(__webpack_require__(/*! ../getUTCISOWeekYear/index.js */ 61599));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 42923));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear(dirtyDate) {
  (0, _index3.default)(1, arguments);
  var year = (0, _index.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0, _index2.default)(fourthOfJanuary);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ 42923:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = startOfUTCISOWeek;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ 76255));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek(dirtyDate) {
  (0, _index2.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0, _index.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ 21365:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = startOfUTCWeekYear;

var _index = _interopRequireDefault(__webpack_require__(/*! ../getUTCWeekYear/index.js */ 69041));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ 37490));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCWeek/index.js */ 57039));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../toInteger/index.js */ 85633));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0, _index2.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index4.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index4.default)(options.firstWeekContainsDate);
  var year = (0, _index.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0, _index3.default)(firstWeek, dirtyOptions);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ 57039:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCWeek/index.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = startOfUTCWeek;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../toDate/index.js */ 76255));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ 37490));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../toInteger/index.js */ 85633));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0, _index2.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index3.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index3.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0, _index.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

module.exports = exports.default;

/***/ }),

/***/ 85633:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/toInteger/index.js ***!
  \*******************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = toInteger;

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

module.exports = exports.default;

/***/ }),

/***/ 60536:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/addMilliseconds/index.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = addMilliseconds;

var _index = _interopRequireDefault(__webpack_require__(/*! ../_lib/toInteger/index.js */ 85633));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ 76255));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0, _index3.default)(2, arguments);
  var timestamp = (0, _index2.default)(dirtyDate).getTime();
  var amount = (0, _index.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

module.exports = exports.default;

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

/***/ 69377:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
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

/***/ 84802:
/*!***********************************************!*\
  !*** ./node_modules/date-fns/format/index.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = format;

var _index = _interopRequireDefault(__webpack_require__(/*! ../isValid/index.js */ 16112));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../locale/en-US/index.js */ 92431));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../subMilliseconds/index.js */ 83780));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ 76255));

var _index5 = _interopRequireDefault(__webpack_require__(/*! ../_lib/format/formatters/index.js */ 14414));

var _index6 = _interopRequireDefault(__webpack_require__(/*! ../_lib/format/longFormatters/index.js */ 62781));

var _index7 = _interopRequireDefault(__webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 2805));

var _index8 = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ 48634);

var _index9 = _interopRequireDefault(__webpack_require__(/*! ../_lib/toInteger/index.js */ 85633));

var _index10 = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0, _index10.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _index2.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index9.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index9.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index9.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index9.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0, _index4.default)(dirtyDate);

  if (!(0, _index.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0, _index7.default)(originalDate);
  var utcDate = (0, _index3.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _index6.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _index5.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0, _index8.isProtectedWeekYearToken)(substring)) {
        (0, _index8.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0, _index8.isProtectedDayOfYearToken)(substring)) {
        (0, _index8.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

module.exports = exports.default;

/***/ }),

/***/ 20203:
/*!***********************************************!*\
  !*** ./node_modules/date-fns/isDate/index.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isDate;

var _index = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0, _index.default)(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

module.exports = exports.default;

/***/ }),

/***/ 16112:
/*!************************************************!*\
  !*** ./node_modules/date-fns/isValid/index.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isValid;

var _index = _interopRequireDefault(__webpack_require__(/*! ../isDate/index.js */ 20203));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ 76255));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0, _index3.default)(1, arguments);

  if (!(0, _index.default)(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0, _index2.default)(dirtyDate);
  return !isNaN(Number(date));
}

module.exports = exports.default;

/***/ }),

/***/ 64167:
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js ***!
  \**********************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = buildFormatLongFn;

function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

module.exports = exports.default;

/***/ }),

/***/ 96704:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js ***!
  \********************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = buildLocalizeFn;

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

module.exports = exports.default;

/***/ }),

/***/ 76695:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn/index.js ***!
  \*****************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = buildMatchFn;

function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

module.exports = exports.default;

/***/ }),

/***/ 38822:
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js ***!
  \************************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = buildMatchPatternFn;

function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

module.exports = exports.default;

/***/ }),

/***/ 70825:
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js ***!
  \*************************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

var _default = formatDistance;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 76095:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ 64167));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0, _index.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0, _index.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0, _index.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
var _default = formatLong;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 73740:
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js ***!
  \*************************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

var _default = formatRelative;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 74741:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize/index.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ 96704));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0, _index.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0, _index.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0, _index.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 9384:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match/index.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ 76695));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ 38822));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0, _index.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0, _index.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0, _index.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0, _index.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0, _index.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 92431:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/index.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ 70825));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ 76095));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ 73740));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ 74741));

var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ 9384));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _index.default,
  formatLong: _index2.default,
  formatRelative: _index3.default,
  localize: _index4.default,
  match: _index5.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
var _default = locale;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 83780:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/subMilliseconds/index.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = subMilliseconds;

var _index = _interopRequireDefault(__webpack_require__(/*! ../_lib/toInteger/index.js */ 85633));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../addMilliseconds/index.js */ 60536));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0, _index3.default)(2, arguments);
  var amount = (0, _index.default)(dirtyAmount);
  return (0, _index2.default)(dirtyDate, -amount);
}

module.exports = exports.default;

/***/ }),

/***/ 76255:
/*!***********************************************!*\
  !*** ./node_modules/date-fns/toDate/index.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = toDate;

var _index = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ 37490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0, _index.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

module.exports = exports.default;

/***/ }),

/***/ 79973:
/*!************************************************************************************!*\
  !*** ./src/app/views/training/new-training/new-training.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".section {\n  margin-top: 56px;\n}\n\n.spinner {\n  position: absolute;\n  left: 45%;\n  top: 45%;\n}\n\n.main-form {\n  padding-top: 32px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bodyweight {\n  width: 300px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.bodyweight-error {\n  color: #c62828;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.error-wrapper {\n  width: 250px;\n  margin: 80px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.error-title {\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n\n.error-description {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 24px;\n  text-align: center;\n  color: #93959e;\n}\n\n.error-image {\n  width: 250px;\n  height: 200px;\n}\n\n@media (min-width: 640px) {\n  .spinner {\n    top: 50%;\n    left: 50%;\n  }\n\n  .error-wrapper {\n    width: 300px;\n    left: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy10cmFpbmluZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0NDakJNO0FEZ0JWOztBQUlBO0VBQ0ksY0N0Qk87RUR1QlAsZUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNDaERRO0FEK0NaOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUVJO0lBQ0ksUUFBQTtJQUNBLFNBQUE7RUFGTjs7RUFLRTtJQUNJLFlBQUE7SUFDQSxTQUFBO0VBRk47QUFDRiIsImZpbGUiOiJuZXctdHJhaW5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdC1wYWxsZXR0ZS5zY3NzJztcclxuXHJcbi5zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIHRvcDogNDUlO1xyXG59XHJcblxyXG4ubWFpbi1mb3JtIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvZHl3ZWlnaHQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG59XHJcblxyXG4uYm9keXdlaWdodC1lcnJvciB7XHJcbiAgICBjb2xvcjogJGRhcmstcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5lcnJvci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogODBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXJyb3ItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZXJyb3ItZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkYmx1ZS1ncmV5O1xyXG59XHJcblxyXG4uZXJyb3ItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcblxyXG4gICAgLnNwaW5uZXIge1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3Itd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIiRhcm15LWdyZWVuOiAjMDA5Njg4O1xyXG4kbGlnaHQtcGVyaXdpbmtsZTogI2RlZGZlMTtcclxuJGJsdWUtZ3JleTogIzkzOTU5ZTtcclxuJGxpZ2h0LWJsdWU6ICNkZWYyZjE7XHJcbiRkYXJrLXJlZDogI2M2MjgyODtcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGVycm9yLWZvbnQtc2l6ZTogMTFweDtcclxuIl19 */";

/***/ }),

/***/ 24015:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = ".search-icon {\n  color: #000000;\n  background-color: white;\n  padding: 3px;\n  border-radius: 8px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n\n.filters-wrapper {\n  display: flex;\n  align-items: flex-start;\n  column-gap: 10px;\n  margin: 8px 0;\n  padding: 5px 0;\n  border: 2px solid #009688;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.filters-wrapper .search-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  column-gap: 10px;\n  margin-left: 10px;\n}\n\n.filters-wrapper .search-wrapper .search-input ::ng-deep input {\n  border: 2px solid white;\n  border-radius: 6px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  font-family: \"Poppins\", sans-serif;\n}\n\n.filters-wrapper .search-wrapper .search-input ::ng-deep input:focus {\n  outline: none;\n  border: 2px solid #009688;\n  box-shadow: 0 0 10px #def2f1;\n}\n\n.filters-wrapper .search-wrapper .search-max-error {\n  font-size: 11px;\n  color: #c62828;\n  align-self: baseline;\n  padding-top: 2px;\n}\n\n.filters-wrapper .or-wrapper {\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  margin-right: 10px;\n}\n\n.filters-wrapper .or-wrapper .or {\n  color: #009688;\n  font-weight: 600;\n}\n\n.filters-wrapper .or-wrapper .filter-icon {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n@media (min-width: 640px) {\n  .filters-wrapper {\n    width: 850px;\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3QtdHJhaW5pbmdzLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGRlZmF1bHQtcGFsbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlIQVBTO0VBUVQsZUFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUhKOztBQUtJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUhSOztBQU9ZO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlIQWxDSDtFQW1DRyxrQ0NoQ047QUQyQlY7O0FBT2dCO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFMcEI7O0FBVVE7RUFDSSxlQzFDTTtFRDJDTixjQzdDRDtFRDhDQyxvQkFBQTtFQUNBLGdCQUFBO0FBUlo7O0FBWUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVlI7O0FBWVE7RUFDSSxjQzlEQztFRCtERCxnQkFBQTtBQVZaOztBQWFRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFYWjs7QUFnQkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtFQWJOO0FBQ0YiLCJmaWxlIjoicGFzdC10cmFpbmluZ3MtZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9kZWZhdWx0LXBhbGxldHRlJztcclxuXHJcbiRib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksIDBweCAycHggMnB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDVweCAwcHggcmdiKDAgMCAwIC8gMTIlKTtcclxuXHJcbi5zZWFyY2gtaWNvbiB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWx0ZXJzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRhcm15LWdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAuc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAgICAgICAuc2VhcmNoLWlucHV0IHtcclxuXHJcbiAgICAgICAgICAgIDo6bmctZGVlcCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG5cclxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGFybXktZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWFyY2gtbWF4LWVycm9yIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkZXJyb3ItZm9udC1zaXplO1xyXG4gICAgICAgICAgICBjb2xvcjogJGRhcmstcmVkO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9yLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgLm9yIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhcm15LWdyZWVuO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpbHRlci1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAgIC5maWx0ZXJzLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiA4NTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcbiIsIiRhcm15LWdyZWVuOiAjMDA5Njg4O1xyXG4kbGlnaHQtcGVyaXdpbmtsZTogI2RlZGZlMTtcclxuJGJsdWUtZ3JleTogIzkzOTU5ZTtcclxuJGxpZ2h0LWJsdWU6ICNkZWYyZjE7XHJcbiRkYXJrLXJlZDogI2M2MjgyODtcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGVycm9yLWZvbnQtc2l6ZTogMTFweDtcclxuIl19 */";

/***/ }),

/***/ 32016:
/*!****************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".main-section {\n  margin: 64px 16px 0 16px;\n}\n.main-section .spinner {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.main-section .error-wrapper {\n  width: 250px;\n  margin: 5rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main-section .error-wrapper .error-image {\n  width: 250px;\n  height: 200px;\n}\n.main-section .error-wrapper .error-title {\n  font-size: 18px;\n  margin-bottom: 5px;\n  text-align: center;\n}\n.main-section .error-wrapper .error-description {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 24px;\n  text-align: center;\n  color: #93959e;\n}\n.main-section .search-no-result-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n.main-section .search-no-result-wrapper .search-not-found-img {\n  width: 150px;\n  height: 150px;\n}\n.main-section .search-no-result-wrapper .search-not-found-title {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  margin: 20px 0;\n}\n.main-section .search-no-result-wrapper .search-not-found-description {\n  font-size: 14px;\n  color: #93959e;\n  text-align: center;\n}\n.main-section .card-info-wrapper {\n  padding: 10px 16px;\n  border: 2px solid #009688;\n}\n.main-section .card-info-wrapper .header-title {\n  font-size: 20px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n}\n.main-section .card-info-wrapper .footer {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.main-section .card-info-wrapper .footer .food-subtitle {\n  font-size: 16px;\n  text-align: center;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n.main-section .card-info-wrapper .footer .food-subtitle--txt {\n  color: #009688;\n}\n.main-section .training-item-wrapper {\n  display: block;\n  margin: 10px 0;\n  overflow: auto;\n}\n.main-section .training-item-wrapper::-webkit-scrollbar {\n  width: 6px;\n}\n.main-section .training-item-wrapper::-webkit-scrollbar-thumb {\n  background-color: #dedfe1;\n  border-radius: 6px;\n}\n.main-section .no-trainings {\n  margin: 0 1rem 1rem 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main-section .no-trainings-title {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: normal;\n  text-align: center;\n}\n@media (min-width: 640px) {\n  .main-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .main-section .card-info-wrapper {\n    margin-top: 0.5rem;\n    width: 850px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .main-section .training-item-wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    column-gap: 18px;\n    max-height: 400px;\n    width: 850px;\n    overflow: auto;\n  }\n  .main-section .training-item-wrapper::-webkit-scrollbar {\n    width: 4px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3QtdHJhaW5pbmdzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGRlZmF1bHQtcGFsbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdCQUFBO0FBREo7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFEUjtBQUlJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUlRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFGWjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIWjtBQU1RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ3BDQTtBRGdDWjtBQVFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU5SO0FBUVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQU5aO0FBU1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFQWjtBQVVRO0VBQ0ksZUFBQTtFQUNBLGNDNURBO0VENkRBLGtCQUFBO0FBUlo7QUFZSTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUFWUjtBQVlRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0N0RUY7QUQ0RFY7QUFhUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFYWjtBQWFZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQ2xGTjtBRHVFVjtBQWFnQjtFQUNJLGNDMUZQO0FEK0ViO0FBaUJJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBZlI7QUFpQlE7RUFDSSxVQUFBO0FBZlo7QUFrQlE7RUFDSSx5QkN6R087RUQwR1Asa0JBQUE7QUFoQlo7QUFvQkk7RUFDSSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBbEJSO0FBb0JRO0VBQ0ksa0NDakhGO0VEa0hFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbEJaO0FBd0JBO0VBRUk7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQXRCTjtFQXdCTTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUF0QlY7RUF5Qk07SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQXZCVjtFQXlCVTtJQUNJLFVBQUE7RUF2QmQ7QUFDRiIsImZpbGUiOiJwYXN0LXRyYWluaW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9kZWZhdWx0LXBhbGxldHRlJztcclxuXHJcbi5tYWluLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiA2NHB4IDE2cHggMCAxNnB4O1xyXG5cclxuICAgIC5zcGlubmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3Itd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXJlbSBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuZXJyb3ItaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXJyb3ItdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVycm9yLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtZ3JleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1uby1yZXN1bHQtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgICAgLnNlYXJjaC1ub3QtZm91bmQtaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXJjaC1ub3QtZm91bmQtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoLW5vdC1mb3VuZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlLWdyZXk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW5mby13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGFybXktZ3JlZW47XHJcblxyXG4gICAgICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAuZm9vZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcblxyXG4gICAgICAgICAgICAgICAgJi0tdHh0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRyYWluaW5nLWl0ZW0td3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXBlcml3aW5rbGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5vLXRyYWluaW5ncyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFyZW0gMXJlbSAycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuXHJcbiAgICAubWFpbi1zZWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmNhcmQtaW5mby13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogODUwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHJhaW5pbmctaXRlbS13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg1MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */";

/***/ }),

/***/ 78771:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.scss?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".action {\n  padding: 10px;\n  color: #009688;\n  font-size: 26px;\n  border-left: 1px solid #dedfe1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLWl0ZW0tYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGRlZmF1bHQtcGFsbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxjQ0pTO0VES1QsZUFBQTtFQUNBLDhCQUFBO0FBREoiLCJmaWxlIjoidHJhaW5pbmctaXRlbS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4uYWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRsaWdodC1wZXJpd2lua2xlO1xyXG59XHJcbiIsIiRhcm15LWdyZWVuOiAjMDA5Njg4O1xyXG4kbGlnaHQtcGVyaXdpbmtsZTogI2RlZGZlMTtcclxuJGJsdWUtZ3JleTogIzkzOTU5ZTtcclxuJGxpZ2h0LWJsdWU6ICNkZWYyZjE7XHJcbiRkYXJrLXJlZDogI2M2MjgyODtcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGVycm9yLWZvbnQtc2l6ZTogMTFweDtcclxuIl19 */";

/***/ }),

/***/ 80296:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = ".wrapper {\n  height: 225px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 10px 10px 10px;\n  padding: 10px 0 0 0;\n  cursor: pointer;\n}\n.wrapper .title-wrapper {\n  font-size: 20px;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n  display: flex;\n  margin-bottom: 10px;\n}\n.wrapper .title-wrapper .day-name {\n  color: #009688;\n  margin-right: 3px;\n}\n.wrapper .central-wrapper {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.wrapper .central-wrapper .bodyweight,\n.wrapper .central-wrapper .created-at {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: flex-start;\n  max-width: 120px;\n  white-space: nowrap;\n}\n.wrapper .central-wrapper .bodyweight--key,\n.wrapper .central-wrapper .created-at--key {\n  color: #009688;\n  font-family: \"Poppins\", sans-serif;\n  justify-content: center;\n}\n.wrapper .central-wrapper .bodyweight--value,\n.wrapper .central-wrapper .created-at--value {\n  justify-content: center;\n}\n.wrapper .central-wrapper .created-at {\n  align-self: flex-end;\n}\n.wrapper .centered-central-wrapper {\n  justify-content: center;\n}\n.wrapper .exercise-wrapper {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 80px;\n  width: 90%;\n}\n.wrapper .exercise-wrapper-no-dots {\n  margin-bottom: 20px;\n}\n.wrapper .exercise-wrapper .exercise-name {\n  font-family: \"Poppins\", sans-serif;\n  max-width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wrapper .exercise-wrapper .exercise-dots {\n  align-self: center;\n}\n.wrapper .actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 45px;\n  border-top: 1px solid #dedfe1;\n}\n.wrapper:hover,\n.wrapper:active {\n  background: #def2f1;\n}\n@media (min-width: 640px) {\n  .wrapper {\n    box-sizing: border-box;\n    height: 230px;\n    width: 270px;\n    margin: 0 0 5px 0;\n  }\n\n  .exercise-wrapper {\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLWl0ZW0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGRlZmF1bHQtcGFsbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQ1RFO0VEVUYsYUFBQTtFQUNBLG1CQUFBO0FBRFI7QUFHUTtFQUNJLGNDbkJDO0VEb0JELGlCQUFBO0FBRFo7QUFLSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS1E7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFIWjtBQUtZOztFQUNJLGNDeENIO0VEeUNHLGtDQ3BDTjtFRHFDTSx1QkFBQTtBQUZoQjtBQUtZOztFQUNJLHVCQUFBO0FBRmhCO0FBTVE7RUFDSSxvQkFBQTtBQUpaO0FBUUk7RUFDSSx1QkFBQTtBQU5SO0FBU0k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFQUjtBQVNRO0VBQ0ksbUJBQUE7QUFQWjtBQVVRO0VBQ0ksa0NDbkVGO0VEb0VFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFSWjtBQVdRO0VBQ0ksa0JBQUE7QUFUWjtBQWFJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBWFI7QUFlQTs7RUFFSSxtQkM3RlM7QURpRmI7QUFnQkE7RUFFSTtJQUNJLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQWROOztFQWlCRTtJQUNJLHVCQUFBO0VBZE47QUFDRiIsImZpbGUiOiJ0cmFpbmluZy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwIDAgMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAudGl0bGUtd3JhcHBlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgLmRheS1uYW1lIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhcm15LWdyZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRyYWwtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAuYm9keXdlaWdodCxcclxuICAgICAgICAuY3JlYXRlZC1hdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAgICAgICAmLS1rZXkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRhcm15LWdyZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYtLXZhbHVlIHtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3JlYXRlZC1hdCB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2VudGVyZWQtY2VudHJhbC13cmFwcGVyIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZXhlcmNpc2Utd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgICAgICYtbm8tZG90cyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXhlcmNpc2UtbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmV4ZXJjaXNlLWRvdHMge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRsaWdodC1wZXJpd2lua2xlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud3JhcHBlcjpob3ZlcixcclxuLndyYXBwZXI6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRsaWdodC1ibHVlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcblxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4ZXJjaXNlLXdyYXBwZXIge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIkYXJteS1ncmVlbjogIzAwOTY4ODtcclxuJGxpZ2h0LXBlcml3aW5rbGU6ICNkZWRmZTE7XHJcbiRibHVlLWdyZXk6ICM5Mzk1OWU7XHJcbiRsaWdodC1ibHVlOiAjZGVmMmYxO1xyXG4kZGFyay1yZWQ6ICNjNjI4Mjg7XHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRlcnJvci1mb250LXNpemU6IDExcHg7XHJcbiJdfQ== */";

/***/ }),

/***/ 9370:
/*!************************************************************************************!*\
  !*** ./src/app/views/training/new-training/new-training.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"(trainingStream$ | async) as trainingData\">\r\n    <mat-spinner\r\n        *ngIf=\"trainingData?.IsLoading; else valueOrError\"\r\n        class=\"spinner\"\r\n        [diameter]=\"spinnerSize\"></mat-spinner>\r\n    <ng-template #valueOrError>\r\n        <section\r\n            *ngIf=\"trainingData?.Value\"\r\n            class=\"section\">\r\n            <form\r\n                *ngIf=\"form\"\r\n                class=\"main-form\"\r\n                autocomplete=\"off\"\r\n                [formGroup]=\"form\">\r\n                <mat-form-field\r\n                    appearance=\"outline\"\r\n                    class=\"bodyweight\">\r\n                    <mat-label class=\"label\">\r\n                        {{ 'training.new_training.pick_bodyweight' | translate }}\r\n                    </mat-label>\r\n                    <input\r\n                        #bodyweightRef\r\n                        matInput\r\n                        type=\"number\"\r\n                        formControlName=\"bodyweight\"\r\n                        (input)=\"onBodyweightChange(bodyweightRef.value)\">\r\n                    <mat-error *ngIf=\"(bodyweight.touched || bodyweight.dirty) && !bodyweight.valid\">\r\n                        <mat-error\r\n                            *ngIf=\"bodyweight?.errors?.onlyNumbers\"\r\n                            class=\"bodyweight-error\">\r\n                            {{ 'training.new_training.errors.only_numbers' | translate }}\r\n                        </mat-error>\r\n                        <mat-error\r\n                            *ngIf=\"bodyweight?.errors?.min\"\r\n                            class=\"bodyweight-error\">\r\n                            {{ 'training.new_training.errors.bodyweight_min' | translate }}\r\n                        </mat-error>\r\n                        <mat-error\r\n                            *ngIf=\"bodyweight?.errors?.max\"\r\n                            class=\"bodyweight-error\">\r\n                            {{ 'training.new_training.errors.bodyweight_max' | translate }}\r\n                        </mat-error>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <bl-single-exercise\r\n                    formControlName=\"exercise\"\r\n                    [bodyweight]=\"bodyweight\"\r\n                    [editData]=\"editData\"\r\n                    [isLoading]=\"trainingData.IsLoading\"\r\n                    [editMode]=\"editMode\"></bl-single-exercise>\r\n            </form>\r\n        </section>\r\n        <ng-container *ngIf=\"trainingData?.IsError\">\r\n            <div class=\"error-wrapper\">\r\n                <img\r\n                    class=\"error-image\"\r\n                    src=\"../../../../assets/svgs/error1.svg\">\r\n                <h3 class=\"error-title\">\r\n                    {{ 'training.new_training.errors.new_training_error_title' | translate }}\r\n                </h3>\r\n                <span\r\n                    *ngIf=\"editMode\"\r\n                    class=\"error-description\">\r\n                    {{ 'training.new_training.errors.new_training_error_description' | translate }}\r\n                </span>\r\n                <span\r\n                    *ngIf=\"!editMode\"\r\n                    class=\"error-description\">\r\n                    {{ 'training.new_training.errors.new_training_error_load' | translate }}\r\n                </span>\r\n                <button\r\n                    mat-raised-button\r\n                    color=\"primary\"\r\n                    type=\"button\"\r\n                    (click)=\"tryAgain()\">\r\n                    {{ 'common.try_again' | translate }}\r\n                </button>\r\n            </div>\r\n        </ng-container>\r\n    </ng-template>\r\n</ng-container>\r\n";

/***/ }),

/***/ 25798:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"filters-wrapper\">\r\n    <form\r\n        #form=\"ngForm\"\r\n        class=\"search-wrapper\"\r\n        autocomplete=\"off\">\r\n        <ion-input\r\n            ngDefaultControl\r\n            #search=\"ngModel\"\r\n            name=\"search\"\r\n            type=\"text\"\r\n            class=\"search-input\"\r\n            [maxlength]=\"inputMaxLength\"\r\n            [placeholder]=\"'training.past_trainings.filters.enter_search_term' | translate\"\r\n            [(ngModel)]=\"searchValue\"\r\n            (keyup)=\"emitKeyboardEvent($event)\"></ion-input>\r\n        <span\r\n            *ngIf=\"search?.control?.errors?.maxlength\"\r\n            class=\"search-max-error\">\r\n            {{ 'training.past_trainings.filters.errors.search_max_length' | translate }}\r\n        </span>\r\n        <div class=\"sort-wrapper\">\r\n            <select>\r\n                <option\r\n                    *ngFor=\"let option of sortOptions\"\r\n                    [value]=\"option.key\">\r\n                    {{ option.value | async }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n    </form>\r\n    <div class=\"or-wrapper\">\r\n        <span class=\"or\">{{ 'common.or' | translate }}</span>\r\n        <ion-icon\r\n            name=\"filter-outline\"\r\n            slot=\"icon-only\"\r\n            class=\"filter-icon\"></ion-icon>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 36269:
/*!****************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"pastTrainings$ | async as pastTrainings\">\r\n    <section class=\"main-section\">\r\n        <ng-container *ngIf=\"pastTrainings?.IsError; else valueOrLoading\">\r\n            <div class=\"error-wrapper\">\r\n                <img\r\n                    class=\"error-image\"\r\n                    src=\"../../../../assets/svgs/error1.svg\">\r\n                <h3 class=\"error-title\">\r\n                    {{ 'training.past_trainings.errors.past_trainings_error_title' | translate }}\r\n                </h3>\r\n                <span class=\"error-description\">\r\n                    {{ 'training.past_trainings.errors.past_trainings_error_description' | translate }}\r\n                </span>\r\n                <button\r\n                    mat-raised-button\r\n                    color=\"primary\"\r\n                    type=\"button\"\r\n                    (click)=\"tryAgain()\">\r\n                    {{ 'common.try_again' | translate }}\r\n                </button>\r\n            </div>\r\n        </ng-container>\r\n        <ng-template #valueOrLoading>\r\n            <bl-past-trainings-filters (trainingEmitted)=\"searchEmitted($event)\"></bl-past-trainings-filters>\r\n            <ng-container *ngIf=\"pastTrainings?.IsLoading; else value\">\r\n                <mat-spinner\r\n                    class=\"spinner\"\r\n                    [diameter]=\"spinnerSize\"></mat-spinner>\r\n            </ng-container>\r\n            <ng-template #value>\r\n                <ng-container *ngIf=\"(isSearch$ | async) && pastTrainings?.Value?.TotalCount === 0; else otherCases\">\r\n                    <div class=\"search-no-result-wrapper\">\r\n                        <img\r\n                            class=\"search-not-found-img\"\r\n                            src=\"../../../../assets/svgs/not-found.svg\">\r\n                        <span class=\"search-not-found-title\">\r\n                            {{ 'training.past_trainings.filters.search_no_result_title' | translate }}\r\n                        </span>\r\n                        <span class=\"search-not-found-description\">\r\n                            {{ 'training.past_trainings.filters.search_no_result_description' | translate }}\r\n                        </span>\r\n                    </div>\r\n                </ng-container>\r\n                <ng-template #otherCases>\r\n                    <mat-card class=\"card-info-wrapper\">\r\n                        <mat-card-title class=\"header-title\">\r\n                            <div\r\n                                #timePeriod\r\n                                [innerHTML]=\"setTimePeriod(pastTrainings.Value?.Results?.Dates) | async\"></div>\r\n                        </mat-card-title>\r\n                        <div class=\"footer\">\r\n                            <div class=\"food-subtitle\">\r\n                                <strong class=\"food-subtitle--txt\">\r\n                                    {{ ('common.food' | translate) + ': ' }}\r\n                                </strong>\r\n                                <span>{{ food + ' ' + ('common.kcal' | translate) }}</span>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card>\r\n                    <div\r\n                        *ngIf=\"pastTrainings.Value?.TotalCount > 0; else noTrainings\"\r\n                        #itemWrapper\r\n                        class=\"training-item-wrapper\"\r\n                        [class.no-trainings]=\"pastTrainings.Value?.TotalCount === 0\">\r\n                        <bl-training-item\r\n                            *ngFor=\"let training of pastTrainings.Value?.Results?.Trainings\"\r\n                            [training]=\"training\"></bl-training-item>\r\n                    </div>\r\n                    <ng-template #noTrainings>\r\n                        <section class=\"no-trainings\">\r\n                            <ng-container *ngIf=\"!(isSearch$ | async) && pastTrainings.Value?.TotalCount === 0;\">\r\n                                <h1 class=\"no-trainings-title\">\r\n                                    {{ 'training.past_trainings.no_trainings' | translate }}\r\n                                </h1>\r\n                                <button\r\n                                    mat-raised-button\r\n                                    class=\"no-trainings-button\"\r\n                                    type=\"button\"\r\n                                    routerLink=\"/training/new-training\"\r\n                                    color=\"primary\">\r\n                                    {{ 'training.past_trainings.log_training' | translate }}\r\n                                </button>\r\n                            </ng-container>\r\n                        </section>\r\n                    </ng-template>\r\n                    <bl-pagination\r\n                        [isSearch]=\"isSearch$ | async\"\r\n                        [page]=\"page\"\r\n                        [size]=\"size\"\r\n                        [isPreviousPage]=\"isPreviousPage\"\r\n                        [isNextPage]=\"isNextPage\"\r\n                        [data]=\"pastTrainings\"\r\n                        (paginatorChanged)=\"onPaginatorChanged($event)\"></bl-pagination>\r\n                </ng-template>\r\n            </ng-template>\r\n        </ng-template>\r\n    </section>\r\n</ng-container>\r\n";

/***/ }),

/***/ 40251:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.html?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<mat-icon\r\n    class=\"action\"\r\n    matTooltipClass=\"tooltip\"\r\n    [matTooltip]=\"(action | mapTrainingItemActions: 'tooltip') | translate\"\r\n    (click)=\"$event.stopPropagation(); performAction(action)\">\r\n    {{ action | mapTrainingItemActions: 'icon' }}\r\n</mat-icon>\r\n\r\n";

/***/ }),

/***/ 26453:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<mat-card\r\n    class=\"wrapper\"\r\n    (click)=\"trainingClicked()\">\r\n    <div class=\"title-wrapper\">\r\n        <strong class=\"day-name\">\r\n            {{ ('weekdays.' + weekDays[dayIndex] | translate) }}</strong>\r\n        {{ '(' + (training.createdAt | date: 'dd.MM.yyyy') + ')' }}\r\n    </div>\r\n    <div\r\n        class=\"central-wrapper\"\r\n        [class.centered-central-wrapper]=\"!training.bodyweight\">\r\n        <div\r\n            class=\"bodyweight\"\r\n            *ngIf=\"training.bodyweight\">\r\n            <strong class=\"bodyweight--key\">\r\n                {{ 'common.bodyweight' | translate }}\r\n            </strong>\r\n            <span class=\"bodyweight--value\">\r\n                {{ training.bodyweight + ' kg' }}\r\n            </span>\r\n        </div>\r\n        <div class=\"created-at\">\r\n            <strong class=\"created-at--key\">\r\n                {{ 'common.created_at_time' | translate }}\r\n            </strong>\r\n            <span class=\"created-at--value\">\r\n                {{ timeCreated }}\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div\r\n        class=\"exercise-wrapper\"\r\n        [class.exercise-wrapper-no-dots]=\"training.exercise.length <= 2\"\r\n        matTooltipClass=\"tooltip\"\r\n        [matTooltipDisabled]=\"isTooltipDisabled\"\r\n        [matTooltip]=\"(training | showAllExercises | async)\">\r\n        <span\r\n            #exerciseNameEl\r\n            *ngFor=\"let data of (training.exercise | slice:0:2); let i = index\"\r\n            class=\"exercise-name\">\r\n            {{ (i+1) + '. ' + (data.exerciseName | translate) }}\r\n        </span>\r\n        <span\r\n            *ngIf=\"training.exercise.length > 2\"\r\n            class=\"exercise-dots\">\r\n            &#8942;\r\n        </span>\r\n    </div>\r\n    <div class=\"actions\">\r\n        <bl-training-item-actions\r\n            *ngFor=\"let action of actions\"\r\n            [action]=\"action\"\r\n            [training]=\"training\"\r\n            [weekDays]=\"weekDays\"\r\n            [dayIndex]=\"dayIndex\"\r\n            [timeCreated]=\"timeCreated\"></bl-training-item-actions>\r\n    </div>\r\n</mat-card>\r\n";

/***/ }),

/***/ 53653:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns-tz/_lib/tzIntlTimeZoneName/index.js ***!
  \*******************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = tzIntlTimeZoneName;

/**
 * Returns the formatted time zone name of the provided `timeZone` or the current
 * system time zone if omitted, accounting for DST according to the UTC value of
 * the date.
 */
function tzIntlTimeZoneName(length, date, options) {
  var dtf = getDTF(length, options.timeZone, options.locale);
  return dtf.formatToParts ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date);
}

function partsTimeZone(dtf, date) {
  var formatted = dtf.formatToParts(date);
  return formatted[formatted.length - 1].value;
}

function hackyTimeZone(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, '');
  var tzNameMatch = / [\w-+ ]+$/.exec(formatted);
  return tzNameMatch ? tzNameMatch[0].substr(1) : '';
} // If a locale has been provided `en-US` is used as a fallback in case it is an
// invalid locale, otherwise the locale is left undefined to use the system locale.


function getDTF(length, timeZone, locale) {
  if (locale && !locale.code) {
    throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");
  }

  return new Intl.DateTimeFormat(locale ? [locale.code, 'en-US'] : undefined, {
    timeZone: timeZone,
    timeZoneName: length
  });
}

module.exports = exports.default;

/***/ }),

/***/ 61433:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns-tz/_lib/tzParseTimezone/index.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = tzParseTimezone;

var _index = _interopRequireDefault(__webpack_require__(/*! ../tzTokenizeDate/index.js */ 45474));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
}; // Parse various time zone offset formats to an offset in milliseconds

function tzParseTimezone(timezoneString, date, isUtcDate) {
  var token;
  var absoluteOffset; // Empty string

  if (timezoneString === '') {
    return 0;
  } // Z


  token = patterns.timezoneZ.exec(timezoneString);

  if (token) {
    return 0;
  }

  var hours; // ±hh

  token = patterns.timezoneHH.exec(timezoneString);

  if (token) {
    hours = parseInt(token[1], 10);

    if (!validateTimezone(hours)) {
      return NaN;
    }

    return -(hours * MILLISECONDS_IN_HOUR);
  } // ±hh:mm or ±hhmm


  token = patterns.timezoneHHMM.exec(timezoneString);

  if (token) {
    hours = parseInt(token[1], 10);
    var minutes = parseInt(token[2], 10);

    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }

    absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    return hours > 0 ? -absoluteOffset : absoluteOffset;
  } // IANA time zone


  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now());
    var utcDate = isUtcDate ? date : toUtcDate(date);
    var offset = calcOffset(utcDate, timezoneString);
    var fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
    return -fixedOffset;
  }

  return NaN;
}

function toUtcDate(date) {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
}

function calcOffset(date, timezoneString) {
  var tokens = (0, _index.default)(date, timezoneString);
  var asUTC = Date.UTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5]);
  var asTS = date.getTime();
  var over = asTS % 1000;
  asTS -= over >= 0 ? over : 1000 + over;
  return asUTC - asTS;
}

function fixOffset(date, offset, timezoneString) {
  var localTS = date.getTime(); // Our UTC time is just a guess because our offset is just a guess

  var utcGuess = localTS - offset; // Test whether the zone matches the offset for this ts

  var o2 = calcOffset(new Date(utcGuess), timezoneString); // If so, offset didn't change, and we're done

  if (offset === o2) {
    return offset;
  } // If not, change the ts by the difference in the offset


  utcGuess -= o2 - offset; // If that gives us the local time we want, we're done

  var o3 = calcOffset(new Date(utcGuess), timezoneString);

  if (o2 === o3) {
    return o2;
  } // If it's different, we're in a hole time. The offset has changed, but we don't adjust the time


  return Math.max(o2, o3);
}

function validateTimezone(hours, minutes) {
  return hours === 12 && (minutes == null || minutes === 0) || -11 <= hours && hours <= 11 && (minutes == null || 0 <= minutes && minutes < 59);
}

var validIANATimezoneCache = {};

function isValidTimezoneIANAString(timeZoneString) {
  if (validIANATimezoneCache[timeZoneString]) return true;

  try {
    Intl.DateTimeFormat(undefined, {
      timeZone: timeZoneString
    });
    validIANATimezoneCache[timeZoneString] = true;
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = exports.default;

/***/ }),

/***/ 32860:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns-tz/_lib/tzPattern/index.js ***!
  \**********************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/** Regex to identify the presence of a time zone specifier in a date string */
var tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
var _default = tzPattern;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 45474:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns-tz/_lib/tzTokenizeDate/index.js ***!
  \***************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = tzTokenizeDate;

/**
 * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
 * `date` as it will be rendered in the `timeZone`.
 */
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function partsOffset(dtf, date) {
  try {
    var formatted = dtf.formatToParts(date);
    var filled = [];

    for (var i = 0; i < formatted.length; i++) {
      var pos = typeToPos[formatted[i].type];

      if (pos >= 0) {
        filled[pos] = parseInt(formatted[i].value, 10);
      }
    }

    return filled;
  } catch (error) {
    if (error instanceof RangeError) {
      return [NaN];
    }

    throw error;
  }
}

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, '');
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted); // var [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
  // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]

  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
} // Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
// to get deterministic local date/time output according to the `en-US` locale which
// can be used to extract local time parts as necessary.


var dtfCache = {};

function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
    var testDateFormatted = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(new Date('2014-06-25T04:00:00.123Z'));
    var hourCycleSupported = testDateFormatted === '06/25/2014, 00:00:00' || testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00';
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }) : new Intl.DateTimeFormat('en-US', {
      hourCycle: 'h23',
      timeZone: timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  return dtfCache[timeZone];
}

module.exports = exports.default;

/***/ }),

/***/ 30419:
/*!************************************************************!*\
  !*** ./node_modules/date-fns-tz/formatInTimeZone/index.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = formatInTimeZone;

var _index = _interopRequireDefault(__webpack_require__(/*! date-fns/_lib/cloneObject/index.js */ 28995));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../format/index.js */ 67293));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../utcToZonedTime/index.js */ 58864));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name formatInTimeZone
 * @category Time Zone Helpers
 * @summary Gets the offset in milliseconds between the time zone and Universal Coordinated Time (UTC)
 *
 * @param {Date|String|Number} date - the date representing the local time / real UTC time
 * @param {String} timeZone - the time zone this date should be formatted for; can be an offset or IANA time zone
 * @param {String} formatStr - the string of tokens
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link
 *   https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See
 *   [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens
 *   (`yy`, `yyyy`). See: https://git.io/fxCyr
 * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 * @returns {String} the formatted date string
 */
function formatInTimeZone(date, timeZone, formatStr, options) {
  var extendedOptions = (0, _index.default)(options);
  extendedOptions.timeZone = timeZone;
  return (0, _index2.default)((0, _index3.default)(date, timeZone), formatStr, extendedOptions);
}

module.exports = exports.default;

/***/ }),

/***/ 32486:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns-tz/format/formatters/index.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../_lib/tzIntlTimeZoneName/index.js */ 53653));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../_lib/tzParseTimezone/index.js */ 61433));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_MINUTE = 60 * 1000;
var formatters = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, localize, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimeter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, localize, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimeter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, localize, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return (0, _index.default)('short', originalDate, options);
      // Long

      case 'zzzz':
      default:
        return (0, _index.default)('long', originalDate, options);
    }
  }
};

function getTimeZoneOffset(timeZone, originalDate) {
  var timeZoneOffset = timeZone ? (0, _index2.default)(timeZone, originalDate, true) / MILLISECONDS_IN_MINUTE : originalDate.getTimezoneOffset();

  if (Number.isNaN(timeZoneOffset)) {
    throw new RangeError('Invalid time zone specified: ' + timeZone);
  }

  return timeZoneOffset;
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

function formatTimezone(offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimeter + minutes;
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimeter);
}

function formatTimezoneShort(offset, dirtyDelimeter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimeter = dirtyDelimeter || '';
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2);
}

var _default = formatters;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 67293:
/*!**************************************************!*\
  !*** ./node_modules/date-fns-tz/format/index.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = format;

var _index = _interopRequireDefault(__webpack_require__(/*! date-fns/format/index.js */ 84802));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ./formatters/index.js */ 32486));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ 8234));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 8     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 8     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | PDT, EST, CEST                    | 6     |
 * |                                 | zzzz    | Pacific Daylight Time             | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are created using the Intl browser API. The output is determined by the
 *    preferred standard of the current locale (en-US by default) which may not always give the expected result.
 *    For this reason it is recommended to supply a `locale` in the format options when formatting a time zone name.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. These tokens are often confused with others. See: https://git.io/fxCyr
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole
 *   library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard
 *   #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). See [this
 *   post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link
 *   https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See
 *   [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens
 *   (`yy`, `yyyy`). See: https://git.io/fxCyr
 * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.awareOfUnicodeTokens` must be set to `true` to use `XX` token; see:
 *   https://git.io/fxCyr
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var matches = formatStr.match(tzFormattingTokensRegExp);

  if (matches) {
    var date = (0, _index3.default)(dirtyDate, options); // Work through each match and replace the tz token in the format string with the quoted
    // formatted time zone so the remaining tokens can be filled in by date-fns#format.

    formatStr = matches.reduce(function (result, token) {
      if (token[0] === "'") {
        return result; // This is a quoted portion, matched only to ensure we don't match inside it
      }

      var pos = result.indexOf(token);
      var precededByQuotedSection = result[pos - 1] === "'";
      var replaced = result.replace(token, "'" + _index2.default[token[0]](date, token, null, options) + "'"); // If the replacement results in two adjoining quoted strings, the back to back quotes
      // are removed so it doesn't look like an escaped quote.

      return precededByQuotedSection ? replaced.substring(0, pos - 1) + replaced.substring(pos + 1) : replaced;
    }, formatStr);
  }

  return (0, _index.default)(dirtyDate, formatStr, options);
}

module.exports = exports.default;

/***/ }),

/***/ 95581:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns-tz/getTimezoneOffset/index.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getTimezoneOffset;

var _index = _interopRequireDefault(__webpack_require__(/*! ../_lib/tzParseTimezone/index.js */ 61433));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getTimezoneOffset
 * @category Time Zone Helpers
 * @summary Gets the offset in milliseconds between the time zone and Universal Coordinated Time (UTC)
 *
 * @description
 * Returns the time zone offset from UTC time in milliseconds for IANA time zones as well
 * as other time zone offset string formats.
 *
 * For time zones where daylight savings time is applicable a `Date` should be passed on
 * the second parameter to ensure the offset correctly accounts for DST at that time of
 * year. When omitted, the current date is used.
 *
 * @param {String} timeZone - the time zone of this local time, can be an offset or IANA time zone
 * @param {Date|Number} [date] - the date with values representing the local time
 * @returns {Number} the time zone offset in milliseconds
 *
 * @example
 * const result = getTimezoneOffset('-07:00')
 *   //=> -18000000 (-7 * 60 * 60 * 1000)
 * const result = getTimezoneOffset('Africa/Johannesburg')
 *   //=> 7200000 (2 * 60 * 60 * 1000)
 * const result = getTimezoneOffset('America/New_York', new Date(2016, 0, 1))
 *   //=> -18000000 (-5 * 60 * 60 * 1000)
 * const result = getTimezoneOffset('America/New_York', new Date(2016, 6, 1))
 *   //=> -14400000 (-4 * 60 * 60 * 1000)
 */
function getTimezoneOffset(timeZone, date) {
  return -(0, _index.default)(timeZone, date);
}

module.exports = exports.default;

/***/ }),

/***/ 31941:
/*!*******************************************!*\
  !*** ./node_modules/date-fns-tz/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.
module.exports = {
  format: __webpack_require__(/*! ./format/index.js */ 67293),
  formatInTimeZone: __webpack_require__(/*! ./formatInTimeZone/index.js */ 30419),
  getTimezoneOffset: __webpack_require__(/*! ./getTimezoneOffset/index.js */ 95581),
  toDate: __webpack_require__(/*! ./toDate/index.js */ 8234),
  utcToZonedTime: __webpack_require__(/*! ./utcToZonedTime/index.js */ 58864),
  zonedTimeToUtc: __webpack_require__(/*! ./zonedTimeToUtc/index.js */ 70879)
};

/***/ }),

/***/ 8234:
/*!**************************************************!*\
  !*** ./node_modules/date-fns-tz/toDate/index.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = toDate;

var _index = _interopRequireDefault(__webpack_require__(/*! date-fns/_lib/toInteger/index.js */ 85633));

var _index2 = _interopRequireDefault(__webpack_require__(/*! date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js */ 2805));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../_lib/tzParseTimezone/index.js */ 61433));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../_lib/tzPattern/index.js */ 32860));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [/^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [/^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: _index4.default
};
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */

function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  if (argument === null) {
    return new Date(NaN);
  }

  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0, _index.default)(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  } // Clone the date


  if (argument instanceof Date || typeof argument === 'object' && Object.prototype.toString.call(argument) === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || Object.prototype.toString.call(argument) === '[object Number]') {
    return new Date(argument);
  } else if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate(restDateString, year);

  if (isNaN(date)) {
    return new Date(NaN);
  }

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);

      if (isNaN(time)) {
        return new Date(NaN);
      }
    }

    if (dateStrings.timeZone || options.timeZone) {
      offset = (0, _index3.default)(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));

      if (isNaN(offset)) {
        return new Date(NaN);
      }
    } else {
      // get offset accurate to hour in time zones that change offset
      offset = (0, _index2.default)(new Date(timestamp + time));
      offset = (0, _index2.default)(new Date(timestamp + time + offset));
    }

    return new Date(timestamp + time + offset);
  } else {
    return new Date(NaN);
  }
}

function splitDateString(dateString) {
  var dateStrings = {};
  var parts = patterns.dateTimePattern.exec(dateString);
  var timeString;

  if (!parts) {
    parts = patterns.datePattern.exec(dateString);

    if (parts) {
      dateStrings.date = parts[1];
      timeString = parts[2];
    } else {
      dateStrings.date = null;
      timeString = dateString;
    }
  } else {
    dateStrings.date = parts[1];
    timeString = parts[3];
  }

  if (timeString) {
    var token = patterns.timeZone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timeZone = token[1].trim();
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];
  var token; // YYYY or ±YYYYY

  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);

  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  } // YY or ±YYY


  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);

  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  } // Invalid ISO-formatted year


  return {
    year: null
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null;
  }

  var token;
  var date;
  var month;
  var week; // YYYY

  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  } // YYYY-MM


  token = patterns.MM.exec(dateString);

  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;

    if (!validateDate(year, month)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month);
    return date;
  } // YYYY-DDD or YYYYDDD


  token = patterns.DDD.exec(dateString);

  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);

    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  } // yyyy-MM-dd or YYYYMMDD


  token = patterns.MMDD.exec(dateString);

  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);

    if (!validateDate(year, month, day)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, day);
    return date;
  } // YYYY-Www or YYYYWww


  token = patterns.Www.exec(dateString);

  if (token) {
    week = parseInt(token[1], 10) - 1;

    if (!validateWeekDate(year, week)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week);
  } // YYYY-Www-D or YYYYWwwD


  token = patterns.WwwD.exec(dateString);

  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;

    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } // Invalid ISO-formatted date


  return null;
}

function parseTime(timeString) {
  var token;
  var hours;
  var minutes; // hh

  token = patterns.HH.exec(timeString);

  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));

    if (!validateTime(hours)) {
      return NaN;
    }

    return hours % 24 * MILLISECONDS_IN_HOUR;
  } // hh:mm or hhmm


  token = patterns.HHMM.exec(timeString);

  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));

    if (!validateTime(hours, minutes)) {
      return NaN;
    }

    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  } // hh:mm:ss or hhmmss


  token = patterns.HHMMSS.exec(timeString);

  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));

    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }

    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
  } // Invalid ISO-formatted time


  return null;
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions


var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }

  if (date != null) {
    if (date < 1) {
      return false;
    }

    var isLeapYear = isLeapYearIndex(year);

    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }

    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }

  return true;
}

function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }

  var isLeapYear = isLeapYearIndex(year);

  if (isLeapYear && dayOfYear > 366) {
    return false;
  }

  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }

  return true;
}

function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }

  if (day != null && (day < 0 || day > 6)) {
    return false;
  }

  return true;
}

function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false;
  }

  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }

  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }

  return true;
}

module.exports = exports.default;

/***/ }),

/***/ 58864:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns-tz/utcToZonedTime/index.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = utcToZonedTime;

var _index = _interopRequireDefault(__webpack_require__(/*! ../_lib/tzParseTimezone/index.js */ 61433));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ 8234));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name utcToZonedTime
 * @category Time Zone Helpers
 * @summary Get a date/time representing local time in a given time zone from the UTC date
 *
 * @description
 * Returns a date instance with values representing the local time in the time zone
 * specified of the UTC time from the date provided. In other words, when the new date
 * is formatted it will show the equivalent hours in the target time zone regardless
 * of the current system time zone.
 *
 * @param {Date|String|Number} date - the date with the relevant UTC time
 * @param {String} timeZone - the time zone to get local time for, can be an offset or IANA time zone
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = utcToZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */
function utcToZonedTime(dirtyDate, timeZone, options) {
  var date = (0, _index2.default)(dirtyDate, options);
  var offsetMilliseconds = (0, _index.default)(timeZone, date, true);
  var d = new Date(date.getTime() - offsetMilliseconds);
  return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
}

module.exports = exports.default;

/***/ }),

/***/ 70879:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns-tz/zonedTimeToUtc/index.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = zonedTimeToUtc;

var _index = _interopRequireDefault(__webpack_require__(/*! date-fns/_lib/cloneObject/index.js */ 28995));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ 8234));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../_lib/tzPattern/index.js */ 32860));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../_lib/tzParseTimezone/index.js */ 61433));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name zonedTimeToUtc
 * @category Time Zone Helpers
 * @summary Get the UTC date/time from a date representing local time in a given time zone
 *
 * @description
 * Returns a date instance with the UTC time of the provided date of which the values
 * represented the local time in the time zone specified. In other words, if the input
 * date represented local time in time time zone, the timestamp of the output date will
 * give the equivalent UTC of that local time regardless of the current system time zone.
 *
 * @param {Date|String|Number} date - the date with values representing the local time
 * @param {String} timeZone - the time zone of this local time, can be an offset or IANA time zone
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am in Los Angeles is 5pm UTC
 * const result = zonedTimeToUtc(new Date(2014, 5, 25, 10, 0, 0), 'America/Los_Angeles')
 * //=> 2014-06-25T17:00:00.000Z
 */
function zonedTimeToUtc(date, timeZone, options) {
  if (typeof date === 'string' && !date.match(_index3.default)) {
    var extendedOptions = (0, _index.default)(options);
    extendedOptions.timeZone = timeZone;
    return (0, _index2.default)(date, extendedOptions);
  }

  var d = (0, _index2.default)(date, options);
  var utc = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
  var offsetMilliseconds = (0, _index4.default)(timeZone, new Date(utc));
  return new Date(utc + offsetMilliseconds);
}

module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=src_app_modules_training_training_module_ts.js.map