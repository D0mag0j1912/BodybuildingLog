(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/kjZ":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "LUN3");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "T7if");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/snack-bar-duration.const */ "pAdW");
/* harmony import */ var _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/error-matchers/form-error-state-matcher.helper */ "p21/");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "9ans");
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/auth/login.service */ "TAW8");
/* harmony import */ var _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../validators/auth/auth.validators */ "YFTZ");













let LoginComponent = class LoginComponent {
  constructor(translateService, loginService, authService, changeDetectorRef, snackBar) {
    this.translateService = translateService;
    this.loginService = loginService;
    this.authService = authService;
    this.changeDetectorRef = changeDetectorRef;
    this.snackBar = snackBar;
    this.isLoading = false;
    this.formErrorStateMatcher = new _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_9__["FormErrorStateMatcher"]();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
      'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)])
    }, {
      asyncValidators: _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_12__["passwordFitsEmail"](this.loginService, this.changeDetectorRef)
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.emailInput.nativeElement.focus());
  }

  onSubmit() {
    if (!this.form.valid) {
      this.snackBar.open(this.translateService.instant('auth.errors.invalid_form'), null, {
        duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_8__["SNACK_BAR_DURATION"].ERROR,
        panelClass: 'app__snackbar-error'
      });
      return;
    }

    this.isLoading = true;
    this.authService.login(this.accessFormData('email').value, this.accessFormData('password').value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    })).subscribe(response => {
      if (response) {
        this.snackBar.open(this.translateService.instant(response.Message), null, {
          duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_8__["SNACK_BAR_DURATION"].GENERAL,
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
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
}, {
  type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"]
}, {
  type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
}, {
  type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
}];

LoginComponent.propDecorators = {
  emailInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
    args: ['emailRef', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }]
  }]
};
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'bl-login',
  template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
  styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
})], LoginComponent);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\trainingApk\src\main.ts */"zUnb");


/***/ }),

/***/ "305l":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material.module */ "vvyD");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth/auth.service */ "9ans");
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth/login.service */ "TAW8");
/* harmony import */ var _services_auth_signup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth/signup.service */ "4iuF");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../views/auth/login/login.component */ "/kjZ");
/* harmony import */ var _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/auth/signup/signup.component */ "cbJ7");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared.module */ "jvDc");













const COMPONENTS = [
    _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
    _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
];
const MY_IMPORTS = [
    _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
    _shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
];
const SERVICES = [
    _services_auth_signup_service__WEBPACK_IMPORTED_MODULE_9__["SignupService"],
    _services_auth_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"],
    _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
];
let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
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

/***/ "3SO4":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/shared/training/sets/sets.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\r\n    [formGroup]=\"$any(form)\"\r\n    autocomplete=\"off\">\r\n    <ng-container *ngFor=\"let set of getSets(); let j = index\">\r\n        <ng-container [formGroupName]=\"j\">\r\n            <div\r\n                class=\"sets\"\r\n                [class.sets--after-first]=\"j > 0\">\r\n                <mat-form-field\r\n                    appearance=\"outline\"\r\n                    class=\"sets-weight-lifted\">\r\n                    <mat-label class=\"label\">\r\n                        {{ 'training.new_training.weight_lifted' | translate }}\r\n                    </mat-label>\r\n                    <input\r\n                        matInput\r\n                        type=\"text\"\r\n                        formControlName=\"weightLifted\"\r\n                        [errorStateMatcher]=\"formErrorStateMatcher\"\r\n                        (input)=\"onChangeSets(j)\"\r\n                        (blur)=\"onTouched()\">\r\n                    <mat-error\r\n                        *ngIf=\"(set.errors?.weightLiftedRequired && ((isExerciseFormSubmitted$ | async) || exerciseNameControl?.value))\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.weight_lifted_required' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"set.errors?.setNotEntered\r\n                            && (isExerciseFormSubmitted$ | async)\r\n                            && !set.errors?.weightLiftedRequired\r\n                            && !set.errors?.repsRequired\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.set_required' | translate }}\r\n                    </mat-error>\r\n                    <mat-hint\r\n                        *ngIf=\"accessFormField('weightLifted', j).value\r\n                            && accessFormField('weightLifted', j).valid\r\n                            && accessFormField('reps', j).value\r\n                            && accessFormField('reps', j).valid\r\n                            && !set.errors?.weightLiftedRequired\r\n                            && !set.errors?.repsRequired\r\n                            && !editMode\"\r\n                        class=\"sets-success\">\r\n                        {{ 'training.new_training.set_saved' | translate }}\r\n                    </mat-hint>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('weightLifted', j).errors?.onlyNumbers\r\n                            && !accessFormField('weightLifted', j).errors?.min\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.only_numbers' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('weightLifted', j).errors?.min\r\n                            && !accessFormField('weightLifted', j).errors?.onlyNumbers\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.weight_lifted_min' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('weightLifted', j).errors?.max\r\n                            && !accessFormField('weightLifted', j).errors?.onlyNumbers\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.weight_lifted_max' | translate }}\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field\r\n                    appearance=\"outline\"\r\n                    class=\"sets-reps\">\r\n                    <mat-label class=\"label\">\r\n                        {{ 'training.new_training.reps_performed' | translate }}\r\n                    </mat-label>\r\n                    <input\r\n                        matInput\r\n                        type=\"text\"\r\n                        formControlName=\"reps\"\r\n                        [errorStateMatcher]=\"formErrorStateMatcher\"\r\n                        (input)=\"onChangeSets(j)\"\r\n                        (blur)=\"onTouched()\">\r\n                    <mat-error\r\n                        *ngIf=\"(set.errors?.repsRequired && ((isExerciseFormSubmitted$ | async) || exerciseNameControl?.value))\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.reps_required' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('reps', j).errors?.pattern\r\n                            && !accessFormField('reps', j).errors?.onlyNumbers\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.only_positive' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('reps', j).errors?.min\r\n                            && !accessFormField('reps', j).errors?.onlyNumbers\r\n                            && !accessFormField('reps', j).errors?.pattern\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.reps_min' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('reps', j).errors?.max\r\n                            && !accessFormField('reps', j).errors?.onlyNumbers\r\n                            && !accessFormField('reps', j).errors?.pattern\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.reps_max' | translate }}\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <div\r\n                    class=\"delete-set-wrapper\"\r\n                    matTooltipPosition=\"above\"\r\n                    [matTooltip]=\"showDeleteSetTooltip(j) | async\"\r\n                    [matTooltipClass]=\"j > 0 ? 'tooltip' : 'tooltip-error'\">\r\n                    <button\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        class=\"button-delete-sets\"\r\n                        [disabled]=\"j === 0 || isLoading\"\r\n                        (click)=\"deleteSet(j)\">\r\n                        <mat-icon class=\"icon-delete-sets\">\r\n                            delete\r\n                        </mat-icon>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n</form>\r\n<div class=\"add-sets\">\r\n    <div\r\n        matTooltipClass=\"tooltip\"\r\n        [matTooltip]=\"showAddSetTooltip(form.errors?.setNotFilled) | async\">\r\n        <button\r\n            type=\"button\"\r\n            color=\"primary\"\r\n            mat-raised-button\r\n            class=\"add-sets-button\"\r\n            [disabled]=\"!exerciseNameControl.value || form.errors?.setNotFilled\"\r\n            (click)=\"addSet()\">\r\n            {{ 'training.new_training.buttons.add_set' | translate }}\r\n        </button>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "3TyR":
/*!************************************************************************************!*\
  !*** ./src/app/helpers/error-matchers/exercise-name-error-state-matcher.helper.ts ***!
  \************************************************************************************/
/*! exports provided: ExerciseNameErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseNameErrorStateMatcher", function() { return ExerciseNameErrorStateMatcher; });
class ExerciseNameErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form === null || form === void 0 ? void 0 : form.submitted;
        return ((form === null || form === void 0 ? void 0 : form.invalid) && isSubmitted) ||
            ((control === null || control === void 0 ? void 0 : control.invalid) && ((control === null || control === void 0 ? void 0 : control.dirty) || (control === null || control === void 0 ? void 0 : control.touched) || isSubmitted));
    }
}


/***/ }),

/***/ "3gs1":
/*!************************************************************************************!*\
  !*** ./src/app/helpers/training/past-trainings/map-past-trainings-dates.helper.ts ***!
  \************************************************************************************/
/*! exports provided: mapDateInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDateInterval", function() { return mapDateInterval; });
function mapDateInterval(response) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return Object.assign(Object.assign({}, response), { Value: Object.assign(Object.assign({}, response.Value), { Results: Object.assign(Object.assign({}, response.Value.Results), { Dates: {
                    StartDate: new Date((_d = (_c = (_b = (_a = response.Value) === null || _a === void 0 ? void 0 : _a.Results) === null || _b === void 0 ? void 0 : _b.Dates) === null || _c === void 0 ? void 0 : _c.StartDate) !== null && _d !== void 0 ? _d : null),
                    EndDate: new Date((_h = (_g = (_f = (_e = response.Value) === null || _e === void 0 ? void 0 : _e.Results) === null || _f === void 0 ? void 0 : _f.Dates) === null || _g === void 0 ? void 0 : _g.EndDate) !== null && _h !== void 0 ? _h : null),
                } }) }) });
}


/***/ }),

/***/ "48Rf":
/*!*********************************************************************************************!*\
  !*** ./src/app/pipes/training/new-training/round-total-weight/round-total-weight.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: RoundTotalWeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundTotalWeightModule", function() { return RoundTotalWeightModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round-total-weight.pipe */ "6VvA");



let RoundTotalWeightModule = class RoundTotalWeightModule {
};
RoundTotalWeightModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_2__["RoundTotalWeightPipe"]],
        exports: [_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_2__["RoundTotalWeightPipe"]],
        providers: [_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_2__["RoundTotalWeightPipe"]],
    })
], RoundTotalWeightModule);



/***/ }),

/***/ "4fXl":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DeleteTrainingActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTrainingActionComponent", function() { return DeleteTrainingActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_training_action_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete-training-action.component.html */ "FGaY");
/* harmony import */ var _delete_training_action_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-training-action.component.scss */ "iwAV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../constants/snack-bar-duration.const */ "pAdW");
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../services/shared/shared.service */ "iBYA");












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
            `)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(_ => rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.isLoading = false;
            this.changeDetectorRef.markForCheck();
        })).subscribe((response) => {
            var _a, _b, _c;
            this.sharedService.deletedTraining$$.next(response);
            this.snackBar.open(this.translateService.instant((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.Results) === null || _b === void 0 ? void 0 : _b.Message) !== null && _c !== void 0 ? _c : ''), null, {
                duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_10__["SNACK_BAR_DURATION"].GENERAL,
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
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
DeleteTrainingActionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_delete_training_action_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_delete_training_action_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteTrainingActionComponent);



/***/ }),

/***/ "4iuF":
/*!*************************************************!*\
  !*** ./src/app/services/auth/signup.service.ts ***!
  \*************************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");




let SignupService = class SignupService {
    constructor(http) {
        this.http = http;
    }
    getEmails(email) {
        const params = `?email=${email}`;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BACKEND + '/get_all_emails' + params);
    }
};
SignupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SignupService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], SignupService);



/***/ }),

/***/ "4m6o":
/*!*******************************************************!*\
  !*** ./src/app/validators/training/set.validators.ts ***!
  \*******************************************************/
/*! exports provided: allSetsFilled, isSetValid, bothValuesRequired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allSetsFilled", function() { return allSetsFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSetValid", function() { return isSetValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bothValuesRequired", function() { return bothValuesRequired; });
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

/***/ "57ZC":
/*!**********************************************************!*\
  !*** ./src/app/helpers/control-value-accessor.helper.ts ***!
  \**********************************************************/
/*! exports provided: getControlValueAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControlValueAccessor", function() { return getControlValueAccessor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


function getControlValueAccessor(component) {
    return {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => component),
        multi: true,
    };
}


/***/ }),

/***/ "5Mm4":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/navigation/side-nav/side-nav.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list>\r\n    <a\r\n        *ngIf=\"!(isAuthenticated$ | async)\"\r\n        mat-list-item\r\n        routerLink=\"/login\"\r\n        (click)=\"onCloseSideNav()\">\r\n        <mat-icon class=\"icon\">login</mat-icon>\r\n        <span class=\"caption\">\r\n            {{ 'navigation.login' | translate }}\r\n        </span>\r\n    </a>\r\n    <a\r\n        *ngIf=\"!(isAuthenticated$ | async)\"\r\n        mat-list-item\r\n        routerLink=\"/signup\"\r\n        (click)=\"onCloseSideNav()\">\r\n        <mat-icon class=\"icon\">app_registration</mat-icon>\r\n        <span class=\"caption\">\r\n            {{ 'navigation.signup' | translate }}\r\n        </span>\r\n    </a>\r\n    <a\r\n        *ngIf=\"isAuthenticated$ | async\"\r\n        mat-list-item\r\n        routerLink=\"/training/new-training\"\r\n        (click)=\"onCloseSideNav()\">\r\n        <mat-icon class=\"icon\">fitness_center</mat-icon>\r\n        <span class=\"caption\">\r\n            {{ 'navigation.new_training' | translate }}\r\n        </span>\r\n    </a>\r\n    <a\r\n        *ngIf=\"isAuthenticated$ | async\"\r\n        mat-list-item\r\n        (click)=\"goToPastTrainings(); onCloseSideNav()\">\r\n        <mat-icon class=\"icon\">history</mat-icon>\r\n        <span class=\"caption\">\r\n            {{ 'navigation.past_trainings' | translate }}\r\n        </span>\r\n    </a>\r\n    <ng-container *ngIf=\"(loggedUserData$ | async) as userData\">\r\n        <a\r\n            *ngIf=\"isAuthenticated$ | async\"\r\n            mat-list-item\r\n            [matMenuTriggerFor]=\"languages\">\r\n            <mat-icon class=\"icon\">language</mat-icon>\r\n            <span class=\"caption\">\r\n                {{ 'navigation.language' | translate }}\r\n            </span>\r\n            <mat-menu #languages=\"matMenu\">\r\n                <button\r\n                    mat-menu-item\r\n                    class=\"menu-item\"\r\n                    [class.chosenLanguage]=\"userData?.Preferences?.language === 'hr'\"\r\n                    [disabled]=\"userData?.Preferences?.language === 'hr'\"\r\n                    (click)=\"changeLanguage('hr')\">\r\n                    <img\r\n                        src=\"../../../../assets/images/flags/croatia.png\"\r\n                        height=\"40\"\r\n                        width=\"40\">\r\n                    <span class=\"menu-item--text\">\r\n                        {{ 'languages.croatian' | translate }}\r\n                    </span>\r\n                </button>\r\n                <button\r\n                    mat-menu-item\r\n                    class=\"menu-item\"\r\n                    [class.chosenLanguage]=\"userData?.Preferences?.language === 'en'\"\r\n                    [disabled]=\"userData?.Preferences?.language === 'en'\"\r\n                    (click)=\"changeLanguage('en')\">\r\n                    <img\r\n                        src=\"../../../../assets/images/flags/united-kingdom.png\"\r\n                        height=\"24\"\r\n                        width=\"40\">\r\n                    <span class=\"menu-item--text\">\r\n                        {{ 'languages.english' | translate }}\r\n                    </span>\r\n                </button>\r\n            </mat-menu>\r\n        </a>\r\n    </ng-container>\r\n    <a\r\n        *ngIf=\"isAuthenticated$ | async\"\r\n        mat-list-item\r\n        (click)=\"onCloseSideNav(); onLogout();\">\r\n        <mat-icon class=\"icon\">logout</mat-icon>\r\n        <span class=\"caption\">\r\n            {{ 'navigation.logout' | translate }}\r\n        </span>\r\n    </a>\r\n</mat-nav-list>\r\n");

/***/ }),

/***/ "5T56":
/*!***************************************************************!*\
  !*** ./src/app/views/shared/not-found/not-found.component.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "HS9a");
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.scss */ "ymVw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "9ans");





let NotFoundComponent = class NotFoundComponent {
    constructor(authService) {
        this.authService = authService;
        this.isAuth$ = this.authService.isAuth$;
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bl-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotFoundComponent);



/***/ }),

/***/ "6VvA":
/*!*******************************************************************************************!*\
  !*** ./src/app/pipes/training/new-training/round-total-weight/round-total-weight.pipe.ts ***!
  \*******************************************************************************************/
/*! exports provided: RoundTotalWeightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundTotalWeightPipe", function() { return RoundTotalWeightPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_preferences_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/preferences.model */ "ziAg");



let RoundTotalWeightPipe = class RoundTotalWeightPipe {
    transform(totalWeight) {
        return totalWeight ? `${(Math.round(totalWeight * 100) / 100).toString()} ${_models_preferences_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_WEIGHT_FORMAT"]}` : `0 ${_models_preferences_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_WEIGHT_FORMAT"]}`;
    }
};
RoundTotalWeightPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'roundTotalWeight',
    })
], RoundTotalWeightPipe);



/***/ }),

/***/ "6YuZ":
/*!**********************************************!*\
  !*** ./src/app/modules/navigation.module.ts ***!
  \**********************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _views_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/navigation/header/header.component */ "qP1r");
/* harmony import */ var _views_navigation_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/navigation/side-nav/side-nav.component */ "uyZc");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "305l");










const COMPONENTS = [
    _views_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
    _views_navigation_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["SideNavComponent"],
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
    src_app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
];
const IMPORTS = [_auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"]];
let NavigationModule = class NavigationModule {
};
NavigationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [...COMPONENTS],
        imports: [
            ...EXTERNAL_IMPORTS,
            ...IMPORTS,
        ],
        exports: [...COMPONENTS],
    })
], NavigationModule);



/***/ }),

/***/ "7t4w":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/shared/dialog/dialog.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div\r\n    *ngIf=\"data.message\"\r\n    mat-dialog-title>\r\n    <p class=\"message\">{{ data.message }}</p>\r\n</div>\r\n\r\n<div\r\n    *ngIf=\"(data.deleteExercise.message$ | async) as message\"\r\n    mat-dialog-title>\r\n    <p class=\"message\">{{ message }}</p>\r\n</div>\r\n<div\r\n    *ngIf=\"data.deleteExercise\"\r\n    mat-dialog-content>\r\n    <p class=\"mat-subheading-1 message\">\r\n        {{ 'training.new_training.exercise_name' | translate }}\r\n        <strong>{{ data.deleteExercise.exerciseName | translate }}</strong>\r\n    </p>\r\n</div>\r\n<mat-dialog-actions class=\"actions\">\r\n    <button\r\n        mat-raised-button\r\n        type=\"button\"\r\n        [color]=\"data.isError ? 'primary' : ''\"\r\n        [mat-dialog-close]=\"false\">\r\n        {{ 'common.actions.close' | translate }}\r\n    </button>\r\n    <button\r\n        *ngIf=\"data.deleteExercise\"\r\n        mat-raised-button\r\n        type=\"button\"\r\n        color=\"primary\"\r\n        [mat-dialog-close]=\"true\">\r\n        {{ 'common.actions.delete' | translate }}\r\n    </button>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "8Xo1":
/*!**********************************************************************!*\
  !*** ./src/app/models/training/new-training/empty-training.model.ts ***!
  \**********************************************************************/
/*! exports provided: EMPTY_TRAINING_EDIT, EMPTY_TRAINING, createEmptyExercise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_TRAINING_EDIT", function() { return EMPTY_TRAINING_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_TRAINING", function() { return EMPTY_TRAINING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyExercise", function() { return createEmptyExercise; });
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

/***/ "9Fpr":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <mat-spinner\r\n        *ngIf=\"isLoading\"\r\n        class=\"spinner\"\r\n        [diameter]=\"spinnerSize\"></mat-spinner>\r\n    <form\r\n        *ngIf=\"!isLoading && form\"\r\n        class=\"form\"\r\n        [formGroup]=\"form\"\r\n        (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"preference-wrapper\">\r\n            <span class=\"preference-wrapper--entry-text\">\r\n                {{ 'auth.pick_language' | translate }}\r\n            </span>\r\n            <mat-radio-group\r\n                formControlName=\"language\">\r\n                <mat-radio-button\r\n                    class=\"preference-radio-button\"\r\n                    value=\"en\">\r\n                    {{ 'languages.english' | translate }}\r\n                </mat-radio-button>\r\n                <mat-radio-button\r\n                    class=\"preference-radio-button\"\r\n                    value=\"hr\">\r\n                    {{ 'languages.croatian' | translate }}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n            <span\r\n                *ngIf=\"accessFormData('language').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'preferences.errors.language_required' | translate }}\r\n            </span>\r\n            <span class=\"preference-wrapper--entry-text\">\r\n                {{ 'auth.pick_weight_format' | translate }}\r\n            </span>\r\n            <mat-radio-group\r\n                formControlName=\"weightFormat\">\r\n                <mat-radio-button\r\n                    class=\"preference-radio-button\"\r\n                    value=\"kg\">\r\n                    {{ 'common.kilograms' | translate }}\r\n                </mat-radio-button>\r\n                <mat-radio-button\r\n                    class=\"preference-radio-button\"\r\n                    value=\"lbs\">\r\n                    {{ 'common.pounds' | translate }}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n            <span\r\n                *ngIf=\"accessFormData('weightFormat').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.weight_format_required' | translate }}\r\n            </span>\r\n            <span\r\n                class=\"did-you-know\"\r\n                matTooltipClass=\"tooltip\"\r\n                [matTooltip]=\"'common.change_preference_registration' | translate\">\r\n                {{ 'common.did_you_know' | translate }}\r\n            </span>\r\n        </div>\r\n        <mat-form-field\r\n            class=\"form-field\"\r\n            appearance=\"fill\">\r\n            <mat-label class=\"label\">{{ 'auth.email' | translate }}</mat-label>\r\n            <input\r\n                matInput\r\n                type=\"email\"\r\n                formControlName=\"email\">\r\n            <mat-error\r\n                *ngIf=\"accessFormData('email').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.email_required' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('email').errors?.email\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.invalid_email' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('email').errors?.availableEmail\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.email_already_registered' | translate }}\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field\r\n            class=\"form-field\"\r\n            appearance=\"fill\">\r\n            <mat-label class=\"label\">\r\n                {{ 'auth.password' | translate }}\r\n            </mat-label>\r\n            <input\r\n                matInput\r\n                type=\"password\"\r\n                formControlName=\"password\"\r\n                #inputPassword>\r\n            <mat-hint>{{ inputPassword.value?.length || 0 }} / 6</mat-hint>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('password').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_required' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('password').errors?.minlength ||\r\n                    accessFormData('password').errors?.maxlength\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_length' | translate }}\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field\r\n            class=\"form-field\"\r\n            appearance=\"fill\">\r\n            <mat-label class=\"label\">\r\n                {{ 'auth.confirm_password' | translate }}\r\n            </mat-label>\r\n            <input\r\n                matInput\r\n                type=\"password\"\r\n                formControlName=\"confirmPassword\"\r\n                #inputConfirmPassword\r\n                [errorStateMatcher]=\"formErrorStateMatcher\">\r\n            <mat-hint>{{ inputConfirmPassword.value?.length || 0 }} / 6</mat-hint>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('confirmPassword').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.confirm_password_required' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('confirmPassword').errors?.minlength ||\r\n                    accessFormData('confirmPassword').errors?.maxlength\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_length' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"form.errors?.equalPass\r\n                    && !accessFormData('confirmPassword').errors?.minlength\r\n                    && !accessFormData('confirmPassword').errors?.maxlength\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.equal_passwords' | translate }}\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <button\r\n            mat-raised-button\r\n            class=\"submit\"\r\n            type=\"submit\"\r\n            color=\"primary\"\r\n            [class.button-spinner]=\"isLoading\"\r\n            [disabled]=\"isLoading\">\r\n            {{ 'auth.signup' | translate }}\r\n        </button>\r\n    </form>\r\n</div>\r\n");

/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/common/interfaces/common.model */ "WGPv");










let AuthService = class AuthService {
  constructor(http, router, translateService) {
    this.http = http;
    this.router = router;
    this.translateService = translateService;
    this.loggedUser$$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
    this.loggedUser$ = this.loggedUser$$.asObservable();
    this.isAuth$$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
    this.isAuth$ = this.isAuth$$.asObservable();
  }

  getToken() {
    return this.token;
  }

  updateUserData(preferences) {
    //TODO: Ovdje treba pokupiti podatke iz Subjecta, a ne LS
    const userData = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__["LocalStorageItems"].USER_DATA));
    const updatedUserData = Object.assign(Object.assign({}, userData), {
      Preferences: {
        userId: preferences.userId,
        language: preferences.language,
        weightFormat: 'kg'
      }
    });
    this.loggedUser$$.next(Object.assign({}, updatedUserData));
    localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__["LocalStorageItems"].USER_DATA, JSON.stringify(Object.assign({}, updatedUserData)));
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
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].BACKEND + '/signup', {
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
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].BACKEND + '/login', authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])( /*#__PURE__*/function () {
      var _ref = Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
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
    }()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(response => this.translateService.use(response.Preferences.language).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(_ => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(response)))));
  }

  autoLogin() {
    if (JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__["LocalStorageItems"].USER_DATA))) {
      const userData = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__["LocalStorageItems"].USER_DATA));

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

    return Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.token = null;

      _this2.isAuth$$.next(false);

      clearTimeout(_this2.tokenTimer);

      _this2.clearLS();

      yield _this2.router.navigate(['/login']);
    })();
  }

  setAuthTimer(duration) {
    var _this3 = this;

    this.tokenTimer = setTimeout( /*#__PURE__*/Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__["LocalStorageItems"].USER_DATA, JSON.stringify(userData));
  }

  clearLS() {
    localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__["LocalStorageItems"].USER_DATA);
    localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__["LocalStorageItems"].TRAINING_STATE);
    localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_9__["LocalStorageItems"].ALL_EXERCISES);
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
}];

AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ "AHSg":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/shared/pagination/pagination.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"paginator\">\r\n    <div class=\"controls-wrapper\">\r\n        <div\r\n            class=\"page-size-wrapper\"\r\n            [class.page-size-not-visible]=\"!isSearch\">\r\n            <select\r\n                class=\"page-size\"\r\n                [(ngModel)]=\"size\"\r\n                (change)=\"loadPage()\">\r\n                <option\r\n                    *ngFor=\"let size of pageSizeOptions\"\r\n                    [value]=\"size\">\r\n                    {{ size }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div class=\"arrow-wrapper\">\r\n            <button\r\n                *ngIf=\"isPreviousPage\"\r\n                mat-raised-button\r\n                class=\"first\"\r\n                type=\"button\"\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"setPageTooltip(isSearch, 'First') | async\"\r\n                [matTooltipClass]=\"setPageTooltipClass(isSearch, 'First')\"\r\n                (click)=\"loadPage(\r\n                    'First',\r\n                    undefined,\r\n                    data?.Value?.Results?.EarliestTrainingDate)\">\r\n                <mat-icon class=\"icon\">first_page</mat-icon>\r\n            </button>\r\n            <div\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"setPageTooltip(isSearch, 'Previous') | async\"\r\n                [matTooltipClass]=\"setPageTooltipClass(isSearch, 'Previous')\">\r\n                <button\r\n                    mat-raised-button\r\n                    type=\"button\"\r\n                    class=\"previous\"\r\n                    [disabled]=\"data.IsLoading || !isPreviousPage\"\r\n                    (click)=\"loadPage(\r\n                        'Previous',\r\n                        data.Value?.Results?.Dates)\">\r\n                    <mat-icon class=\"icon\">navigate_before</mat-icon>\r\n                </button>\r\n            </div>\r\n            <div\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"setPageTooltip(isSearch, 'Next') | async\"\r\n                [matTooltipClass]=\"setPageTooltipClass(isSearch, 'Next')\">\r\n                <button\r\n                    mat-raised-button\r\n                    type=\"button\"\r\n                    class=\"next\"\r\n                    [disabled]=\"data.IsLoading || !isNextPage\"\r\n                    (click)=\"loadPage(\r\n                        'Next',\r\n                        data.Value?.Results?.Dates)\">\r\n                    <mat-icon class=\"icon\">navigate_next</mat-icon>\r\n                </button>\r\n            </div>\r\n            <button\r\n                *ngIf=\"isNextPage\"\r\n                mat-raised-button\r\n                class=\"last\"\r\n                type=\"button\"\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"setPageTooltip(isSearch, 'Last') | async\"\r\n                [matTooltipClass]=\"setPageTooltipClass(isSearch, 'Last')\"\r\n                (click)=\"loadPage('Last', undefined, undefined, data?.Value?.TotalPages)\">\r\n                <mat-icon class=\"icon\">last_page</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div\r\n        *ngIf=\"data?.Value?.TotalPages\"\r\n        class=\"label\"\r\n        [innerHTML]=\"setPageText(data.Value.TotalPages) | async\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "AlOC":
/*!*******************************************************************!*\
  !*** ./src/app/validators/training/single-exercise.validators.ts ***!
  \*******************************************************************/
/*! exports provided: checkExerciseNumber, checkDuplicateExerciseName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkExerciseNumber", function() { return checkExerciseNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDuplicateExerciseName", function() { return checkDuplicateExerciseName; });
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

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    BACKEND: 'http://192.168.0.114:3000',
    TIMEZONE: Intl.DateTimeFormat().resolvedOptions().timeZone,
};


/***/ }),

/***/ "COC+":
/*!***************************************************!*\
  !*** ./src/app/services/errors/sentry.service.ts ***!
  \***************************************************/
/*! exports provided: SentryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryService", function() { return SentryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/minimal */ "gtzJ");



let SentryService = class SentryService {
    handleError(error) {
        Object(_sentry_minimal__WEBPACK_IMPORTED_MODULE_2__["captureException"])(error);
        throw error;
    }
};
SentryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SentryService);



/***/ }),

/***/ "FGaY":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(data.training$ | async) as training\">\r\n    <div>\r\n        <span\r\n            mat-dialog-title\r\n            class=\"title\">\r\n            {{ data.title$ | async }}\r\n        </span>\r\n    </div>\r\n    <mat-dialog-content class=\"content\">\r\n        <span class=\"created-at-key\">\r\n            {{ 'training.past_trainings.created_at' | translate }}\r\n            <span class=\"created-at-value\">\r\n                {{ data.dateCreated$ | async }}\r\n                <span class=\"dot\"></span>\r\n                <span>{{ ' ' + (data.timeCreated$ | async) }}</span>\r\n            </span>\r\n        </span>\r\n        <div\r\n            class=\"exercises-wrapper\">\r\n            <span class=\"title\">{{ 'common.exercises' | translate }}</span>\r\n            <strong\r\n                *ngFor=\"let exercise of training.exercise | slice:0:4\"\r\n                class=\"exercise-value\"\r\n                matTooltipClass=\"tooltip\"\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"training.exercise.length > 4 ? (training | showAllExercises | async) : ''\">\r\n                {{ exercise.exerciseName | translate }}\r\n            </strong>\r\n        </div>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions class=\"actions\">\r\n        <button\r\n            mat-raised-button\r\n            mat-dialog-close\r\n            [disabled]=\"isLoading\">\r\n            {{ 'common.actions.close' | translate }}\r\n        </button>\r\n        <button\r\n            mat-raised-button\r\n            class=\"delete-btn\"\r\n            color=\"primary\"\r\n            [class.button-spinner]=\"isLoading\"\r\n            [disabled]=\"isLoading\"\r\n            (click)=\"deleteTraining(training._id)\">\r\n            {{ 'common.actions.delete' | translate }}\r\n        </button>\r\n    </mat-dialog-actions>\r\n</ng-container>\r\n");

/***/ }),

/***/ "GBIN":
/*!***************************************************************!*\
  !*** ./src/app/views/navigation/header/header.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".route-active {\n  border-bottom: 2px solid white;\n}\n\n.toolbar {\n  padding-right: 0;\n  position: fixed;\n  z-index: 1;\n}\n\n.toolbar-button {\n  vertical-align: middle;\n}\n\n.title {\n  text-decoration: none;\n  font-size: 25px;\n  font-family: \"Anton\", sans-serif;\n  color: white;\n  vertical-align: middle;\n}\n\n.edit-button {\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n.edit-button:hover,\n.edit-button:active {\n  background: #def2f1;\n}\n\n.nav-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n}\n\n.nav-item--icon {\n  color: #009688;\n}\n\n.nav-item-txt {\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n  margin-right: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.nav-item--menu-items {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.nav-item--menu-items:not(:nth-child(1)) {\n  justify-content: flex-start;\n}\n\n.nav-item--menu-items:hover {\n  background: #def2f1;\n}\n\n.nav-item-txt:hover,\n.nav-item-txt:active,\n.title:hover,\n.title:active {\n  color: #def2f1;\n}\n\n.nested-items {\n  width: 150px;\n  column-gap: 10px;\n}\n\n.nested-items--text {\n  font-size: 15px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.chosenLanguage {\n  background: #009688;\n}\n\n.chosenLanguage .nested-items--text {\n  color: white;\n}\n\n.alignEn {\n  justify-content: center !important;\n}\n\n@media (min-width: 640px) {\n  .edit-button {\n    margin-right: 0;\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZGVmYXVsdC1wYWxsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksOEJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFESjs7QUFHSTtFQUNJLHNCQUFBO0FBRFI7O0FBS0E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBOztFQUVJLG1CQzVCUztBRDBCYjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlJO0VBQ0ksY0NqREs7QUQrQ2I7O0FBS0k7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0NwREU7QURpRFY7O0FBTUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQzNERTtBRHVEVjs7QUFNUTtFQUNJLDJCQUFBO0FBSlo7O0FBT1E7RUFDSSxtQkNwRUM7QUQrRGI7O0FBVUE7Ozs7RUFJSSxjQzdFUztBRHNFYjs7QUFXQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVVJO0VBQ0ksZUFBQTtFQUNBLGtDQ3JGRTtBRDZFVjs7QUFZQTtFQUNJLG1CQy9GUztBRHNGYjs7QUFXSTtFQUNJLFlBQUE7QUFUUjs7QUFhQTtFQUNJLGtDQUFBO0FBVko7O0FBYUE7RUFFSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQVhOO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4ucm91dGUtYWN0aXZlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1yaWdodDowO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmVkaXQtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZWRpdC1idXR0b246aG92ZXIsXHJcbi5lZGl0LWJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LWJsdWU7XHJcbn1cclxuXHJcbi5uYXYtaXRlbXMge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDVweDtcclxuXHJcbiAgICAmLS1pY29uIHtcclxuICAgICAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICB9XHJcblxyXG4gICAgJi10eHQge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tbWVudS1pdGVtcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuXHJcbiAgICAgICAgJjpub3QoOm50aC1jaGlsZCgxKSl7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXYtaXRlbS10eHQ6aG92ZXIsXHJcbi5uYXYtaXRlbS10eHQ6YWN0aXZlLFxyXG4udGl0bGU6aG92ZXIsXHJcbi50aXRsZTphY3RpdmUge1xyXG4gICAgY29sb3I6ICRsaWdodC1ibHVlO1xyXG59XHJcblxyXG5cclxuLm5lc3RlZC1pdGVtcyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG5cclxuICAgICYtLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaG9zZW5MYW5ndWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYXJteS1ncmVlbjtcclxuXHJcbiAgICAubmVzdGVkLWl0ZW1zLS10ZXh0IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbGlnbkVuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG5cclxuICAgIC5lZGl0LWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "HS9a":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/shared/not-found/not-found.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <h2 class=\"title\">\r\n        {{ 'common.page_not_found' | translate }}\r\n    </h2>\r\n    <span *ngIf=\"!(isAuth$ | async)\">\r\n        {{ 'common.errors.not_authenticated' | translate }}\r\n    </span>\r\n    <img\r\n        src=\"../../../../assets/images/error-404.png\"\r\n        class=\"img\">\r\n</div>\r\n");

/***/ }),

/***/ "IBs8":
/*!*********************************************************!*\
  !*** ./src/app/views/auth/signup/signup.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  margin-top: 6rem;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 6px;\n  width: 90%;\n  background: #def2f1;\n}\n\n.spinner {\n  margin: 80% auto;\n}\n\n.form {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 15px;\n}\n\n.form-field {\n  width: 300px;\n}\n\n.preference-wrapper {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n\n.preference-wrapper--entry-text {\n  font-size: 14px;\n  color: #009688;\n  font-weight: 500;\n}\n\n.did-you-know {\n  font-size: 12px;\n  color: #93959e;\n}\n\n.preference-radio-button:nth-of-type(2) {\n  margin-left: 20px;\n}\n\n.error {\n  font-size: 11px;\n  color: #c62828;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.submit,\n.label,\n.preference-radio-button {\n  font-family: \"Poppins\", sans-serif;\n}\n\n@media (min-width: 640px) {\n  .wrapper {\n    width: 400px;\n  }\n}\n\n@media (max-width: 320px) {\n  .wrapper {\n    margin-bottom: 20px;\n  }\n\n  .form-field {\n    width: 250px;\n  }\n\n  .preference-wrapper {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZGVmYXVsdC1wYWxsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJDTlM7QURJYjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUlJO0VBQ0ksZUFBQTtFQUNBLGNDckNLO0VEc0NMLGdCQUFBO0FBRlI7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsY0MxQ1E7QUR1Q1o7O0FBTUE7RUFDSSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGNDakRPO0VEa0RQLGtDQ2pETTtBRDhDVjs7QUFNQTs7O0VBR0ksa0NDdkRNO0FEb0RWOztBQU9BO0VBRUk7SUFDSSxZQUFBO0VBTE47QUFDRjs7QUFTQTtFQUVJO0lBQ0ksbUJBQUE7RUFSTjs7RUFXRTtJQUNJLFlBQUE7RUFSTjs7RUFXRTtJQUNJLFlBQUE7RUFSTjtBQUNGIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9kZWZhdWx0LXBhbGxldHRlLnNjc3MnO1xyXG5cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDZyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodCA6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LWJsdWU7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIG1hcmdpbjogODAlIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICByb3ctZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5wcmVmZXJlbmNlLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICByb3ctZ2FwOiAxMHB4O1xyXG5cclxuICAgICYtLWVudHJ5LXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmRpZC15b3Uta25vdyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogJGJsdWUtZ3JleTtcclxufVxyXG5cclxuLnByZWZlcmVuY2UtcmFkaW8tYnV0dG9uOm50aC1vZi10eXBlKDIpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICRkYXJrLXJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxufVxyXG5cclxuLnN1Ym1pdCxcclxuLmxhYmVsLFxyXG4ucHJlZmVyZW5jZS1yYWRpby1idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcblxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG5cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByZWZlcmVuY2Utd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "Iwd/":
/*!***********************************************************!*\
  !*** ./src/app/views/shared/dialog/dialog.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.actions {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZGVmYXVsdC1wYWxsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0NDRU07QURIVjs7QUFJQTtFQUNJLHlCQUFBO0FBREoiLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "IwjF":
/*!******************************************************************************!*\
  !*** ./src/app/views/shared/training/total-weight/total-weight.component.ts ***!
  \******************************************************************************/
/*! exports provided: TotalWeightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalWeightComponent", function() { return TotalWeightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_total_weight_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./total-weight.component.html */ "KKQx");
/* harmony import */ var _total_weight_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total-weight.component.scss */ "lueG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/control-value-accessor.helper */ "57ZC");
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
TotalWeightComponent = TotalWeightComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bl-total-weight',
        template: _raw_loader_total_weight_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        providers: [Object(_helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_4__["getControlValueAccessor"])(TotalWeightComponent_1)],
        styles: [_total_weight_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TotalWeightComponent);



/***/ }),

/***/ "KKQx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/shared/training/total-weight/total-weight.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"wrapper\">\r\n    <strong class=\"key\">{{ 'training.new_training.total' | translate }}</strong>\r\n    <span class=\"value\">{{ value }}</span>\r\n</span>\r\n");

/***/ }),

/***/ "LUN3":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <form\r\n        class=\"main-form\"\r\n        [formGroup]=\"form\"\r\n        (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field\r\n            class=\"main-form-field\"\r\n            appearance=\"fill\">\r\n            <mat-label class=\"label\">\r\n                {{ 'auth.email' | translate }}\r\n            </mat-label>\r\n            <input\r\n                matInput\r\n                type=\"email\"\r\n                formControlName=\"email\"\r\n                #emailRef>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('email').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.email_required' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('email').errors?.email\r\n                    && !accessFormData('email').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.invalid_email' | translate }}\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field\r\n            class=\"main-form-field\"\r\n            appearance=\"fill\">\r\n            <mat-label class=\"label\">\r\n                {{ 'auth.password' | translate }}\r\n            </mat-label>\r\n            <input\r\n                #inputPassword\r\n                matInput\r\n                type=\"password\"\r\n                formControlName=\"password\"\r\n                [errorStateMatcher]=\"formErrorStateMatcher\">\r\n            <mat-error\r\n                *ngIf=\"accessFormData('password').errors?.required\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_required' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"accessFormData('password').errors?.minlength\r\n                    || accessFormData('password').errors?.maxlength\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_length' | translate }}\r\n            </mat-error>\r\n            <mat-error\r\n                *ngIf=\"form.errors?.passwordFitsEmail\r\n                    && !accessFormData('password').errors?.required\r\n                    && !accessFormData('password').errors?.minlength\r\n                    && !accessFormData('password').errors?.maxlength\"\r\n                class=\"error\">\r\n                {{ 'auth.errors.password_wrong_email' | translate }}\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <button\r\n            mat-raised-button\r\n            class=\"submit\"\r\n            type=\"submit\"\r\n            color=\"primary\"\r\n            [disabled]=\"!form.valid || isLoading\"\r\n            [class.button-spinner]=\"isLoading\">\r\n            {{ 'auth.login' | translate }}\r\n        </button>\r\n    </form>\r\n    <span class=\"no_account_message\">\r\n        {{ 'auth.no_account_message' | translate }}\r\n        <a\r\n            class=\"no-account-link\"\r\n            routerLink=\"/signup\">\r\n            {{ 'auth.signup_link' | translate }}\r\n        </a>\r\n        {{ 'common.here' | translate }}\r\n    </span>\r\n</div>\r\n");

/***/ }),

/***/ "NxwY":
/*!***********************************************************!*\
  !*** ./src/app/services/training/new-training.service.ts ***!
  \***********************************************************/
/*! exports provided: NewTrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTrainingService", function() { return NewTrainingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/common/interfaces/common.model */ "WGPv");
/* harmony import */ var _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/training/new-training/empty-training.model */ "8Xo1");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.service */ "9ans");









let NewTrainingService = class NewTrainingService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.allExercisesChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.allExercisesChanged$ = this.allExercisesChanged$$.asObservable();
        this.currentTrainingChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](_models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_7__["EMPTY_TRAINING"]);
        this.currentTrainingChanged$ = this.currentTrainingChanged$$.asObservable();
    }
    getExercises() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BACKEND + '/training/get_exercises').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((response) => {
            const trainingState = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_6__["LocalStorageItems"].TRAINING_STATE));
            if (!trainingState) {
                return this.authService.loggedUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((authResponseData) => {
                    this.updateTrainingState(response.Value, true, authResponseData._id);
                    this.allExercisesChanged$$.next(response.Value);
                    localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_6__["LocalStorageItems"].ALL_EXERCISES, JSON.stringify(response.Value));
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(_ => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response)));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response);
            }
        }));
    }
    addTraining(trainingData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BACKEND + '/training/handle_training', { trainingData: trainingData });
    }
    updateTraining(trainingData, trainingId) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BACKEND + `/training/handle_training/${trainingId}`, { updatedTrainingData: trainingData });
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
            return this.allExercisesChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => {
                updatedExercises = updatedExercises.filter((exercise) => exercise.exerciseName !== deletedExerciseName);
                updatedTraining = Object.assign(Object.assign({}, currentTrainingState), { exercise: updatedExercises });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((allExercises) => [
                updatedTraining,
                allExercises.filter(exercise => exercise.name === deletedExerciseName),
            ]));
        }
        else {
            updatedExercises = updatedExercises.filter((_exercise, index) => index !== indexExercise);
            updatedTraining = Object.assign(Object.assign({}, currentTrainingState), { exercise: updatedExercises });
            this.saveTrainingData(updatedTraining);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
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
        const trainingState = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_6__["LocalStorageItems"].TRAINING_STATE));
        const allExercises = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_6__["LocalStorageItems"].ALL_EXERCISES));
        if (!trainingState || !allExercises) {
            return;
        }
        this.currentTrainingChanged$$.next(Object.assign({}, trainingState));
        this.allExercisesChanged$$.next([...allExercises]);
    }
    updateTrainingState(exercises, restartAll, userId) {
        let updatedTraining = this.currentTrainingChanged$$.getValue();
        if (restartAll) {
            updatedTraining = Object.assign(Object.assign({}, _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_7__["EMPTY_TRAINING"]), { userId: userId });
        }
        updatedTraining.exercise.push(Object(_models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_7__["createEmptyExercise"])(exercises));
        this.saveTrainingData(updatedTraining);
    }
    updateTrainingData(editTraining) {
        this.saveTrainingData(Object.assign({}, editTraining));
    }
    clearTrainingData() {
        this.saveTrainingData(Object.assign({}, _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_7__["EMPTY_TRAINING"]));
    }
    saveTrainingData(updatedTraining) {
        this.currentTrainingChanged$$.next(Object.assign({}, updatedTraining));
        localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_6__["LocalStorageItems"].TRAINING_STATE, JSON.stringify(Object.assign({}, updatedTraining)));
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
NewTrainingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], NewTrainingService);



/***/ }),

/***/ "OMtv":
/*!**************************************************!*\
  !*** ./src/app/helpers/is-never-check.helper.ts ***!
  \**************************************************/
/*! exports provided: isNeverCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNeverCheck", function() { return isNeverCheck; });
function isNeverCheck(_x) {
    throw new Error("Didn't expect to get here");
}


/***/ }),

/***/ "Ofj5":
/*!*******************************************************************!*\
  !*** ./src/app/views/shared/pagination/pagination.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".paginator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  row-gap: 5px;\n  border-radius: 4px;\n  border: 2px solid #009688;\n  margin: auto;\n  padding: 5px 0;\n  position: fixed;\n  bottom: 0;\n  width: 90%;\n}\n\n.controls-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.page-size-wrapper {\n  display: block;\n  width: 45px;\n  margin-right: 20px;\n  padding: 6px 0;\n  overflow: hidden;\n  border: none;\n  border-radius: 4px;\n  position: relative;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.page-size-wrapper:after {\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #009688;\n  position: absolute;\n  top: 40%;\n  right: 5px;\n  content: \"\";\n  z-index: 98;\n}\n\n.page-size-not-visible {\n  display: none;\n}\n\n.page-size {\n  width: 65px;\n  border: 0;\n  position: relative;\n  top: -1px;\n  z-index: 99;\n  background: none;\n  cursor: pointer;\n  font-family: \"Poppins\", sans-serif;\n  padding-left: 8px;\n}\n\n.page-size:focus-visible {\n  outline: none;\n}\n\n.arrow-wrapper {\n  display: flex;\n  column-gap: 10px;\n}\n\n.arrow-wrapper .mat-raised-button {\n  min-width: 0;\n  padding: 0 10px;\n}\n\n.previous:not([disabled]):hover,\n.previous:not([disabled]):active,\n.next:not([disabled]):hover,\n.next:not([disabled]):active,\n.first:not([disabled]):hover,\n.first:not([disabled]):active,\n.last:not([disabled]):hover,\n.last:not([disabled]):active {\n  background: #def2f1;\n}\n\n.icon {\n  color: #009688;\n}\n\n.label {\n  font-size: 15px;\n}\n\n@media (min-width: 640px) {\n  .paginator {\n    width: 850px;\n    column-gap: 20px;\n    justify-content: flex-end;\n    flex-direction: row;\n    position: relative;\n  }\n\n  .arrow-wrapper {\n    margin-right: 15px;\n  }\n\n  .controls-wrapper {\n    order: 2;\n  }\n\n  .label {\n    margin-right: auto;\n    margin-left: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGRlZmF1bHQtcGFsbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5SEFBQTtBQURKOztBQUdJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFEUjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQ3ZETTtFRHdETixpQkFBQTtBQUZKOztBQUlJO0VBQ0ksYUFBQTtBQUZSOztBQU1BO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBS0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUhSOztBQU9BOzs7Ozs7OztFQVFJLG1CQ25GUztBRCtFYjs7QUFPQTtFQUNJLGNDMUZTO0FEc0ZiOztBQU9BO0VBQ0ksZUFBQTtBQUpKOztBQU9BO0VBRUk7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFMTjs7RUFRRTtJQUNJLGtCQUFBO0VBTE47O0VBUUU7SUFDSSxRQUFBO0VBTE47O0VBUUU7SUFDSSxrQkFBQTtJQUNBLGlCQUFBO0VBTE47QUFDRiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcm93LWdhcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGFybXktZ3JlZW47XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5jb250cm9scy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnZS1zaXplLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSwgMHB4IDJweCAycHggMHB4IHJnYigwIDAgMCAvIDE0JSksIDBweCAxcHggNXB4IDBweCByZ2IoMCAwIDAgLyAxMiUpO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAkYXJteS1ncmVlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHotaW5kZXg6IDk4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFnZS1zaXplLW5vdC12aXNpYmxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wYWdlLXNpemUge1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuXHJcbiAgICAmOmZvY3VzLXZpc2libGUge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcnJvdy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG5cclxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByZXZpb3VzOm5vdChbZGlzYWJsZWRdKTpob3ZlcixcclxuLnByZXZpb3VzOm5vdChbZGlzYWJsZWRdKTphY3RpdmUsXHJcbi5uZXh0Om5vdChbZGlzYWJsZWRdKTpob3ZlcixcclxuLm5leHQ6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSxcclxuLmZpcnN0Om5vdChbZGlzYWJsZWRdKTpob3ZlcixcclxuLmZpcnN0Om5vdChbZGlzYWJsZWRdKTphY3RpdmUsXHJcbi5sYXN0Om5vdChbZGlzYWJsZWRdKTpob3ZlcixcclxuLmxhc3Q6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtYmx1ZTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgY29sb3I6ICRhcm15LWdyZWVuO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuXHJcbiAgICAucGFnaW5hdG9yIHtcclxuICAgICAgICB3aWR0aDogODUwcHg7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvdy13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRyb2xzLXdyYXBwZXIge1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbiIsIiRhcm15LWdyZWVuOiAjMDA5Njg4O1xyXG4kbGlnaHQtcGVyaXdpbmtsZTogI2RlZGZlMTtcclxuJGJsdWUtZ3JleTogIzkzOTU5ZTtcclxuJGxpZ2h0LWJsdWU6ICNkZWYyZjE7XHJcbiRkYXJrLXJlZDogI2M2MjgyODtcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGVycm9yLWZvbnQtc2l6ZTogMTFweDtcclxuIl19 */");

/***/ }),

/***/ "Oo9K":
/*!*****************************************************************!*\
  !*** ./src/app/views/shared/pagination/pagination.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pagination_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pagination.component.html */ "AHSg");
/* harmony import */ var _pagination_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.component.scss */ "Ofj5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/is-never-check.helper */ "OMtv");
/* harmony import */ var _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/common/interfaces/paginator.model */ "vAJ8");








let PaginationComponent = class PaginationComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.pageSizeOptions = [1, 3, 5, 10];
        this.isSearch = false;
        this.page = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__["INITIAL_PAGE"];
        this.size = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_SIZE"];
        this.isPreviousPage = true;
        this.isNextPage = true;
        this.data = undefined;
        this.paginatorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    loadPage(page, dateInterval, earliestTrainingDate, lastPage) {
        if (this.isSearch) {
            if (page) {
                switch (page) {
                    case 'First': {
                        this.page = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_7__["INITIAL_PAGE"];
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
                        Object(_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_6__["isNeverCheck"])(page);
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((value) => {
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
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
PaginationComponent.propDecorators = {
    isSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isPreviousPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isNextPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    paginatorChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PaginationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bl-pagination',
        template: _raw_loader_pagination_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_pagination_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaginationComponent);



/***/ }),

/***/ "RDNO":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");



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
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "RfZp":
/*!********************************************************!*\
  !*** ./src/app/validators/shared/common.validators.ts ***!
  \********************************************************/
/*! exports provided: isBroj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBroj", function() { return isBroj; });
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/common/interfaces/common.model */ "WGPv");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/shared/shared.service */ "iBYA");
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/training/new-training.service */ "NxwY");









let AppComponent = class AppComponent {
    constructor(authService, sharedService, newTrainingService, translateService) {
        var _a;
        this.authService = authService;
        this.sharedService = sharedService;
        this.newTrainingService = newTrainingService;
        this.translateService = translateService;
        this.translateService.setDefaultLang('en');
        const authData = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_5__["LocalStorageItems"].USER_DATA));
        this.translateService.use(((_a = authData === null || authData === void 0 ? void 0 : authData.Preferences) === null || _a === void 0 ? void 0 : _a.language) || 'en').subscribe();
    }
    ngOnInit() {
        this.authService.autoLogin();
        this.newTrainingService.keepTrainingState();
        this.sharedService.keepQueryParams();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_8__["NewTrainingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bl-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T7if":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 90%;\n  border-radius: 6px;\n  margin-top: 6rem;\n  margin-left: auto;\n  margin-right: auto;\n  background: #def2f1;\n  text-align: center;\n}\n\n.spinner {\n  margin: 80% auto;\n}\n\n.main-form {\n  padding-top: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 10px;\n}\n\n.main-form-field {\n  width: 300px;\n}\n\n.error {\n  font-size: 11px;\n  color: #c62828;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.error-custom {\n  align-self: flex-start;\n  margin-left: 20px;\n}\n\n.no_account_message {\n  font-size: 12px;\n  color: #93959e;\n  display: inline-block;\n  margin-top: 15px;\n  padding-bottom: 16px;\n}\n\n.no-account-link {\n  text-decoration: none;\n  font-weight: bold;\n  color: #93959e;\n  cursor: pointer;\n}\n\n.submit,\n.label {\n  font-family: \"Poppins\", sans-serif;\n}\n\n@media (min-width: 640px) {\n  .wrapper {\n    width: 400px;\n  }\n\n  .error-custom {\n    margin-left: 50px;\n  }\n}\n\n@media (max-width: 320px) {\n  .main-form-field {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkNMUztFRE1ULGtCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFHSTtFQUNJLFlBQUE7QUFEUjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxjQzFCTztFRDJCUCxrQ0MxQk07QUR3QlY7O0FBS0E7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsY0N2Q1E7RUR3Q1IscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBRko7O0FBS0E7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NoRFE7RURpRFIsZUFBQTtBQUZKOztBQUtBOztFQUVJLGtDQ25ETTtBRGlEVjs7QUFNQTtFQUVJO0lBQ0ksWUFBQTtFQUpOOztFQU9FO0lBQ0ksaUJBQUE7RUFKTjtBQUNGOztBQVFBO0VBRUk7SUFDSSxZQUFBO0VBUE47QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9kZWZhdWx0LXBhbGxldHRlLnNjc3MnO1xyXG5cclxuLndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDZyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICRsaWdodC1ibHVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IDgwJSBhdXRvO1xyXG59XHJcblxyXG4ubWFpbi1mb3JtIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcm93LWdhcDogMTBweDtcclxuXHJcbiAgICAmLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogJGRhcmstcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG59XHJcblxyXG4uZXJyb3ItY3VzdG9tIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLm5vX2FjY291bnRfbWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogJGJsdWUtZ3JleTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLm5vLWFjY291bnQtbGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAkYmx1ZS1ncmV5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3VibWl0LFxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcblxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItY3VzdG9tIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG5cclxuICAgIC5tYWluLWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "TAW8":
/*!************************************************!*\
  !*** ./src/app/services/auth/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    passwordFitsEmail(email, password) {
        const params = `?email=${email}&password=${password}`;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BACKEND + '/check_pass' + params);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], LoginService);



/***/ }),

/***/ "UMhR":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/more-training-action/more-training-action.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: MoreTrainingActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreTrainingActionComponent", function() { return MoreTrainingActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_more_training_action_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./more-training-action.component.html */ "abgy");
/* harmony import */ var _more_training_action_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more-training-action.component.scss */ "rdLC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MoreTrainingActionComponent = class MoreTrainingActionComponent {
};
MoreTrainingActionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bl-more-training-action',
        template: _raw_loader_more_training_action_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_more_training_action_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MoreTrainingActionComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(_route, _state) {
        return this.authService.isAuth$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((isAuth) => {
            if (!isAuth) {
                return this.router.createUrlTree(['/login']);
            }
            return true;
        }));
    }
    canLoad(_route) {
        return this.authService.isAuth$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((isAuth) => {
            if (!isAuth) {
                return this.router.createUrlTree(['/login']);
            }
            return true;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav\r\n        class=\"sidenav\"\r\n        #sidenav\r\n        role=\"navigation\">\r\n        <bl-side-nav\r\n            (closeSideNav)=\"sidenav.close()\"></bl-side-nav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"sidenav-content\">\r\n        <bl-header\r\n            (toggleSideNav)=\"sidenav.toggle()\"></bl-header>\r\n        <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "WGPv":
/*!**********************************************************!*\
  !*** ./src/app/models/common/interfaces/common.model.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageItems", function() { return LocalStorageItems; });
var LocalStorageItems;
(function (LocalStorageItems) {
    LocalStorageItems["TRAINING_STATE"] = "trainingState";
    LocalStorageItems["USER_DATA"] = "userData";
    LocalStorageItems["ALL_EXERCISES"] = "allExercises";
    LocalStorageItems["QUERY_PARAMS"] = "queryParams";
})(LocalStorageItems || (LocalStorageItems = {}));


/***/ }),

/***/ "XcPp":
/*!************************************************************************!*\
  !*** ./src/app/models/training/past-trainings/past-trainings.model.ts ***!
  \************************************************************************/
/*! exports provided: QUERY_PARAMS_DATE_FORMAT, TEMPLATE_DATE_FORMAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_PARAMS_DATE_FORMAT", function() { return QUERY_PARAMS_DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_DATE_FORMAT", function() { return TEMPLATE_DATE_FORMAT; });
const QUERY_PARAMS_DATE_FORMAT = 'dd-MM-yyyy';
const TEMPLATE_DATE_FORMAT = 'dd.MM.yyyy';


/***/ }),

/***/ "YFTZ":
/*!****************************************************!*\
  !*** ./src/app/validators/auth/auth.validators.ts ***!
  \****************************************************/
/*! exports provided: passwordFitsEmail, isEmailAvailable, samePasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordFitsEmail", function() { return passwordFitsEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmailAvailable", function() { return isEmailAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "samePasswords", function() { return samePasswords; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


function passwordFitsEmail(loginService, changeDetectorRef) {
    return (group) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(350).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(_ => {
        var _a, _b;
        if (group) {
            const email = (_a = group.get('email')) === null || _a === void 0 ? void 0 : _a.value;
            const password = (_b = group.get('password')) === null || _b === void 0 ? void 0 : _b.value;
            if (!email || !password) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
            }
            return loginService.passwordFitsEmail(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                if (!response) {
                    return { 'passwordFitsEmail': true };
                }
                return null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(_ => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => changeDetectorRef.markForCheck()));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }
    }));
}
function isEmailAvailable(signupService, changeDetectorRef) {
    return (control) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(350).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(_ => {
        if (control) {
            const email = control === null || control === void 0 ? void 0 : control.value;
            if (!email) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
            }
            return signupService.getEmails(email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                if (!response) {
                    return { 'availableEmail': true };
                }
                return null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(_ => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => changeDetectorRef.markForCheck()));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
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

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: httpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function() { return httpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sentry/angular */ "UH2p");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "RDNO");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "t2gh");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/auth/auth.module */ "305l");
/* harmony import */ var _modules_navigation_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/navigation.module */ "6YuZ");
/* harmony import */ var _services_errors_sentry_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/errors/sentry.service */ "COC+");



















Object(_sentry_angular__WEBPACK_IMPORTED_MODULE_8__["init"])({
    dsn: 'https://b4903b17554c4e40bbada176e50e4719@o997027.ingest.sentry.io/5955490',
});
function httpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
            _modules_navigation_module__WEBPACK_IMPORTED_MODULE_17__["NavigationModule"],
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: httpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
                },
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(),
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                multi: true,
            }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"],
                multi: true,
            }, {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
                useClass: _services_errors_sentry_service__WEBPACK_IMPORTED_MODULE_18__["SentryService"],
            },
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZAwS":
/*!**************************************************************!*\
  !*** ./src/app/views/shared/training/sets/sets.component.ts ***!
  \**************************************************************/
/*! exports provided: SetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetsComponent", function() { return SetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sets_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sets.component.html */ "3SO4");
/* harmony import */ var _sets_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sets.component.scss */ "mq7e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../helpers/control-value-accessor.helper */ "57ZC");
/* harmony import */ var _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../helpers/error-matchers/form-error-state-matcher.helper */ "p21/");
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ "i3RA");
/* harmony import */ var _validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../validators/shared/common.validators */ "RfZp");
/* harmony import */ var _validators_training_set_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../validators/training/set.validators */ "4m6o");
var SetsComponent_1;













let SetsComponent = SetsComponent_1 = class SetsComponent {
    constructor(translateService, unsubscribeService) {
        this.translateService = translateService;
        this.unsubscribeService = unsubscribeService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
        this.formErrorStateMatcher = new _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_9__["FormErrorStateMatcher"]();
        this.isExerciseFormSubmitted$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(false);
        this.exerciseStateChanged$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        this.indexExercise = 0;
        this.editMode = false;
        this.isLoading = false;
        this.setAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.setDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.formStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        this.form.setValidators([_validators_training_set_validators__WEBPACK_IMPORTED_MODULE_12__["allSetsFilled"]()]);
        this.form.updateValueAndValidity();
        this.formStateChanged.emit(this.formErrors);
        this.exerciseNameControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribeService)).subscribe((value) => {
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
        this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribeService)).subscribe((formValue) => {
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
        this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'setNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](set ? set.setNumber : this.getSets().length + 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'weightLifted': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({
                value: set ? set.weightLifted : null,
                disabled: this.exerciseNameControl.value ? false : true,
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(1000),
                _validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_11__["isBroj"]()]),
            'reps': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({
                value: set ? set.reps : null,
                disabled: this.exerciseNameControl.value ? false : true,
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(1000),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]*$')]),
        }, {
            validators: [_validators_training_set_validators__WEBPACK_IMPORTED_MODULE_12__["bothValuesRequired"](), _validators_training_set_validators__WEBPACK_IMPORTED_MODULE_12__["isSetValid"]()],
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])('');
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
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__["UnsubscribeService"] }
];
SetsComponent.propDecorators = {
    isExerciseFormSubmitted$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    exerciseStateChanged$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    exerciseNameControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    indexExercise: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    editMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    setAdded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    setDeleted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    formStateChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
SetsComponent = SetsComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bl-sets',
        template: _raw_loader_sets_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        providers: [
            Object(_helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_8__["getControlValueAccessor"])(SetsComponent_1),
            _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__["UnsubscribeService"],
        ],
        styles: [_sets_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SetsComponent);



/***/ }),

/***/ "abgy":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/shared/training/training-actions/more-training-action/more-training-action.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-menu></mat-menu>\r\n");

/***/ }),

/***/ "cbJ7":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "9Fpr");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component.scss */ "IBs8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../constants/snack-bar-duration.const */ "pAdW");
/* harmony import */ var _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants/spinner-size.const */ "dKYD");
/* harmony import */ var _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers/error-matchers/form-error-state-matcher.helper */ "p21/");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "9ans");
/* harmony import */ var _services_auth_signup_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/auth/signup.service */ "4iuF");
/* harmony import */ var _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../validators/auth/auth.validators */ "YFTZ");

















let SignupComponent = class SignupComponent {
  constructor(authService, signupService, translateService, changeDetectorRef, snackBar, router) {
    this.authService = authService;
    this.signupService = signupService;
    this.translateService = translateService;
    this.changeDetectorRef = changeDetectorRef;
    this.snackBar = snackBar;
    this.router = router;
    this.formErrorStateMatcher = new _helpers_error_matchers_form_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_13__["FormErrorStateMatcher"]();
    this.isLoading = false;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
      'language': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('en', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
      'weightFormat': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('kg', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
      'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email], [_validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_16__["isEmailAvailable"](this.signupService, this.changeDetectorRef)]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]),
      'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)])
    }, {
      validators: _validators_auth_auth_validators__WEBPACK_IMPORTED_MODULE_16__["samePasswords"]()
    });
  }

  get spinnerSize() {
    return _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_12__["SPINNER_SIZE"];
  }

  onSubmit() {
    var _this = this;

    if (!this.form.valid) {
      this.snackBar.open(this.translateService.instant('auth.errors.invalid_form'), null, {
        duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_11__["SNACK_BAR_DURATION"].ERROR,
        panelClass: 'app__snackbar-error'
      });
      return;
    }

    this.isLoading = true;
    this.authService.signup(this.accessFormData('language').value, this.accessFormData('weightFormat').value, this.accessFormData('email').value, this.accessFormData('password').value, this.accessFormData('confirmPassword').value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    })).subscribe( /*#__PURE__*/function () {
      var _ref = Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        if (response.Success) {
          _this.snackBar.open(_this.translateService.instant(response.Message), null, {
            duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_11__["SNACK_BAR_DURATION"].GENERAL,
            panelClass: response.Success ? 'app__snackbar' : 'app__snackbar-error'
          });

          yield _this.router.navigate(['/login']);
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
  type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]
}, {
  type: _services_auth_signup_service__WEBPACK_IMPORTED_MODULE_15__["SignupService"]
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
}, {
  type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
}];

SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
  selector: 'bl-signup',
  template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
  providers: [{
    provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MAT_RADIO_DEFAULT_OPTIONS"],
    useValue: {
      color: 'primary'
    }
  }],
  styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
})], SignupComponent);


/***/ }),

/***/ "dKYD":
/*!*************************************************!*\
  !*** ./src/app/constants/spinner-size.const.ts ***!
  \*************************************************/
/*! exports provided: SPINNER_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER_SIZE", function() { return SPINNER_SIZE; });
const SPINNER_SIZE = 40;


/***/ }),

/***/ "dPCz":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/navigation/header/header.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar\r\n    class=\"toolbar\"\r\n    color=\"primary\">\r\n    <div fxHide.gt-xs>\r\n        <button\r\n            mat-icon-button\r\n            class=\"toolbar-button\"\r\n            (click)=\"onToggle()\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div>\r\n        <a class=\"title\">\r\n            {{ 'navigation.title' | translate }}\r\n        </a>\r\n    </div>\r\n    <ng-container *ngIf=\"isAuthenticated$ | async\">\r\n        <button\r\n            *ngIf=\"isEditing$ | async\"\r\n            mat-raised-button\r\n            class=\"edit-button\"\r\n            type=\"button\"\r\n            (click)=\"goToPastTraining()\">\r\n            {{ 'navigation.buttons.edit_go_back' | translate }}\r\n        </button>\r\n    </ng-container>\r\n    <div\r\n        fxFlex\r\n        fxLayout\r\n        fxLayoutAlign=\"flex-end\"\r\n        fxHide.xs>\r\n        <ul class=\"nav-items\">\r\n            <li\r\n                *ngIf=\"!(isAuthenticated$ | async)\"\r\n                class=\"nav-item\">\r\n                <mat-icon class=\"icon\">login</mat-icon>\r\n                <a\r\n                    class=\"nav-item-txt\"\r\n                    routerLink=\"/login\"\r\n                    [routerLinkActive]=\"'route-active'\">\r\n                    {{ 'navigation.login' | translate }}\r\n                </a>\r\n            </li>\r\n            <li\r\n                *ngIf=\"!(isAuthenticated$ | async)\"\r\n                class=\"nav-item\">\r\n                <mat-icon class=\"icon\">app_registration</mat-icon>\r\n                <a\r\n                    class=\"nav-item-txt\"\r\n                    routerLink=\"/signup\"\r\n                    [routerLinkActive]=\"'route-active'\">\r\n                    {{ 'navigation.signup' | translate }}\r\n                </a>\r\n            </li>\r\n            <li\r\n                *ngIf=\"isAuthenticated$ | async\"\r\n                class=\"nav-item\">\r\n                <mat-icon class=\"icon\">fitness_center</mat-icon>\r\n                <a\r\n                    class=\"nav-item-txt\"\r\n                    routerLink=\"/training/new-training\"\r\n                    [routerLinkActive]=\"'route-active'\">\r\n                    {{ 'navigation.new_training' | translate }}\r\n                </a>\r\n            </li>\r\n            <li\r\n                *ngIf=\"isAuthenticated$ | async\"\r\n                class=\"nav-item\">\r\n                <mat-icon class=\"icon\">history</mat-icon>\r\n                <a\r\n                    class=\"nav-item-txt\"\r\n                    routerLink=\"/training/past-trainings\"\r\n                    [routerLinkActive]=\"'route-active'\"\r\n                    [routerLinkActiveOptions]=\"myMatchOptions\"\r\n                    [queryParams]=\"{ startDate: StartDate, endDate: EndDate }\">\r\n                    {{ 'navigation.past_trainings' | translate }}\r\n                </a>\r\n            </li>\r\n            <ng-container *ngIf=\"(loggedUserData$ | async) as userData\">\r\n                <li\r\n                    *ngIf=\"isAuthenticated$ | async\"\r\n                    class=\"nav-item\">\r\n                    <button\r\n                        mat-button\r\n                        [matMenuTriggerFor]=\"main\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n                    <mat-menu #main=\"matMenu\">\r\n                        <button\r\n                            class=\"nav-item--menu-items\"\r\n                            mat-menu-item\r\n                            [matMenuTriggerFor]=\"languages\">\r\n                            <mat-icon class=\"nav-item--icon\">language</mat-icon>\r\n                            <span>{{ 'navigation.language' | translate }}</span>\r\n                        </button>\r\n                        <button\r\n                            class=\"nav-item--menu-items\"\r\n                            mat-menu-item\r\n                            (click)=\"onLogout()\">\r\n                            <mat-icon class=\"nav-item--icon\">logout</mat-icon>\r\n                            <span>{{ 'navigation.logout' | translate }}</span>\r\n                        </button>\r\n                    </mat-menu>\r\n                    <mat-menu #languages=\"matMenu\">\r\n                        <button\r\n                            class=\"nav-item--menu-items nested-items\"\r\n                            [class.chosenLanguage]=\"userData?.Preferences?.language === 'hr'\"\r\n                            mat-menu-item\r\n                            (click)=\"changeLanguage('hr')\"\r\n                            [disabled]=\"userData?.Preferences?.language === 'hr'\">\r\n                            <img\r\n                                src=\"../../../../assets/images/flags/croatia.png\"\r\n                                height=\"40\"\r\n                                width=\"40\">\r\n                            <span class=\"nested-items--text\">\r\n                                {{ 'languages.croatian' | translate }}\r\n                            </span>\r\n                        </button>\r\n                        <button\r\n                            class=\"nav-item--menu-items nested-items\"\r\n                            [class.chosenLanguage]=\"userData?.Preferences?.language === 'en'\"\r\n                            [class.alignEn]=\"userData?.Preferences?.language === 'hr'\"\r\n                            mat-menu-item\r\n                            (click)=\"changeLanguage('en')\"\r\n                            [disabled]=\"userData?.Preferences?.language === 'en'\">\r\n                            <img\r\n                                src=\"../../../../assets/images/flags/united-kingdom.png\"\r\n                                height=\"24\"\r\n                                width=\"40\">\r\n                            <span class=\"nested-items--text\">\r\n                                {{ 'languages.english' | translate }}\r\n                            </span>\r\n                        </button>\r\n                    </mat-menu>\r\n                </li>\r\n            </ng-container>\r\n        </ul>\r\n    </div>\r\n</mat-toolbar>\r\n");

/***/ }),

/***/ "evjy":
/*!****************************************************************************!*\
  !*** ./src/app/pipes/training/past-trainings/map-training-actions.pipe.ts ***!
  \****************************************************************************/
/*! exports provided: MapTrainingItemActionsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTrainingItemActionsPipe", function() { return MapTrainingItemActionsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


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
MapTrainingItemActionsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'mapTrainingItemActions',
    })
], MapTrainingItemActionsPipe);



/***/ }),

/***/ "f2TX":
/*!***********************************************************************************************!*\
  !*** ./src/app/pipes/training/past-trainings/show-all-exercises/show-all-exercises.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ShowAllExercisesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllExercisesModule", function() { return ShowAllExercisesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _show_all_exercises_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-all-exercises.pipe */ "wSDh");



let ShowAllExercisesModule = class ShowAllExercisesModule {
};
ShowAllExercisesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_show_all_exercises_pipe__WEBPACK_IMPORTED_MODULE_2__["ShowAllExercisesPipe"]],
        exports: [_show_all_exercises_pipe__WEBPACK_IMPORTED_MODULE_2__["ShowAllExercisesPipe"]],
    })
], ShowAllExercisesModule);



/***/ }),

/***/ "gdzK":
/*!******************************************************************!*\
  !*** ./src/app/pipes/training/new-training/new-training.pipe.ts ***!
  \******************************************************************/
/*! exports provided: NewTrainingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTrainingPipe", function() { return NewTrainingPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/training/new-training.service */ "NxwY");




let NewTrainingPipe = class NewTrainingPipe {
    constructor(newTrainingService) {
        this.newTrainingService = newTrainingService;
    }
    transform(_value, index, _exerciseChanged) {
        return this.newTrainingService.currentTrainingChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((training) => { var _a, _b; return (_b = (_a = training.exercise[index]) === null || _a === void 0 ? void 0 : _a.availableExercises) !== null && _b !== void 0 ? _b : []; }));
    }
};
NewTrainingPipe.ctorParameters = () => [
    { type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_3__["NewTrainingService"] }
];
NewTrainingPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'newTraining',
    })
], NewTrainingPipe);



/***/ }),

/***/ "hHNi":
/*!*********************************************************!*\
  !*** ./src/app/views/shared/dialog/dialog.component.ts ***!
  \*********************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dialog.component.html */ "7t4w");
/* harmony import */ var _dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.component.scss */ "Iwd/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





let DialogComponent = class DialogComponent {
    constructor(data) {
        this.data = data;
    }
};
DialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
DialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DialogComponent);



/***/ }),

/***/ "hTPm":
/*!*****************************************************!*\
  !*** ./src/app/models/training/shared/set.model.ts ***!
  \*****************************************************/
/*! exports provided: createInitialSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialSet", function() { return createInitialSet; });
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

/***/ "i3RA":
/*!********************************************************!*\
  !*** ./src/app/services/shared/unsubscribe.service.ts ***!
  \********************************************************/
/*! exports provided: UnsubscribeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscribeService", function() { return UnsubscribeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let UnsubscribeService = class UnsubscribeService extends rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"] {
    ngOnDestroy() {
        this.next();
        this.complete();
    }
};
UnsubscribeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UnsubscribeService);



/***/ }),

/***/ "iBYA":
/*!***************************************************!*\
  !*** ./src/app/services/shared/shared.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/common/interfaces/common.model */ "WGPv");




let SharedService = class SharedService {
    constructor() {
        this.editingTraining$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pastTrainingsQueryParams$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.deletedTraining$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    subtractTwoHours(date) {
        return new Date(new Date(date).setHours(new Date(date).getHours() - 2));
    }
    keepQueryParams() {
        const queryParams = JSON.parse(localStorage.getItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_3__["LocalStorageItems"].QUERY_PARAMS));
        if (!queryParams) {
            return;
        }
        this.pastTrainingsQueryParams$$.next(queryParams);
    }
};
SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], SharedService);



/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _training_new_training_new_training_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training/new-training/new-training.pipe */ "gdzK");
/* harmony import */ var _training_past_trainings_map_training_actions_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training/past-trainings/map-training-actions.pipe */ "evjy");




let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _training_new_training_new_training_pipe__WEBPACK_IMPORTED_MODULE_2__["NewTrainingPipe"],
            _training_past_trainings_map_training_actions_pipe__WEBPACK_IMPORTED_MODULE_3__["MapTrainingItemActionsPipe"],
        ],
        exports: [
            _training_new_training_new_training_pipe__WEBPACK_IMPORTED_MODULE_2__["NewTrainingPipe"],
            _training_past_trainings_map_training_actions_pipe__WEBPACK_IMPORTED_MODULE_3__["MapTrainingItemActionsPipe"],
        ],
    })
], PipesModule);



/***/ }),

/***/ "iwAV":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/delete-training-action/delete-training-action.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .delete-training-dialog .mat-dialog-container {\n  padding: 30px;\n}\n\n.title {\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n}\n\n.content {\n  margin: 0 -30px;\n  padding: 0 30px;\n}\n\n.created-at-key {\n  display: block;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.created-at-value {\n  display: block;\n  color: #009688;\n  font-weight: 600;\n}\n\n.exercises-wrapper {\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  justify-content: flex-start;\n}\n\n.exercises-wrapper .title {\n  align-self: center;\n}\n\n.exercises-wrapper .exercise-value {\n  color: #009688;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-bottom: 2px solid #def2f1;\n  align-self: center;\n}\n\n.actions {\n  padding-top: 15px;\n  justify-content: flex-end;\n}\n\n.actions .delete-btn {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxkZWxldGUtdHJhaW5pbmctYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxhQUFBO0FBRlI7O0FBTUE7RUFDSSxrQ0NKTTtFREtOLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU9JO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKUjs7QUFPSTtFQUNJLGNBQUE7RUFDQSxjQzNCSztFRDRCTCxnQkFBQTtBQUxSOztBQVNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBTko7O0FBUUk7RUFDSSxrQkFBQTtBQU5SOztBQVVRO0VBQ0ksY0M1Q0M7RUQ2Q0QsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQVJaOztBQWFBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQVZKOztBQVlJO0VBQ0ksaUJBQUE7QUFWUiIsImZpbGUiOiJkZWxldGUtdHJhaW5pbmctYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG46Om5nLWRlZXAgLmRlbGV0ZS10cmFpbmluZy1kaWFsb2cge1xyXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgLTMwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGVkLWF0IHtcclxuICAgICYta2V5IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLXZhbHVlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmV4ZXJjaXNlcy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcm93LWdhcDogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5leGVyY2lzZSB7XHJcbiAgICAgICAgJi12YWx1ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYXJteS1ncmVlbjtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAuZGVsZXRlLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "jBOc":
/*!*******************************************************!*\
  !*** ./src/app/services/shared/navigation.service.ts ***!
  \*******************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/snack-bar-duration.const */ "pAdW");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.service */ "9ans");









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
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].BACKEND + `/preferences/${userId}`, { preferences: preferences }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => {
            this.authService.updateUserData({
                userId: userId,
                language: language,
                weightFormat: weightFormat,
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((response) => this.translateService.use(language).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => {
            this.snackBar.open(this.translateService.instant(response.Message), null, {
                duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_7__["SNACK_BAR_DURATION"].GENERAL,
                panelClass: 'app__snackbar',
            });
        }))));
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], NavigationService);



/***/ }),

/***/ "jEEv":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/shared/training/single-exercise/single-exercise.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\r\n    [formGroup]=\"$any(form)\"\r\n    (ngSubmit)=\"onSubmit()\">\r\n    <ng-container\r\n        *ngFor=\"let group of getExercises(); let i = index\">\r\n        <ng-container [formGroupName]=\"i\">\r\n            <div class=\"exercise-wrapper\">\r\n                <mat-form-field\r\n                    appearance=\"outline\"\r\n                    class=\"exercise-form-field\"\r\n                    matTooltipClass=\"tooltip\"\r\n                    matTooltipPosition=\"above\"\r\n                    [matTooltipDisabled]=\"accessFormField('disabledTooltip', i).value\"\r\n                    [matTooltip]=\"accessFormField('name', i).value | translate\">\r\n                    <mat-label class=\"label\">\r\n                        {{ 'training.new_training.pick_exercise' | translate }}\r\n                    </mat-label>\r\n                    <mat-select\r\n                        disableRipple\r\n                        #exerciseNameChoice\r\n                        formControlName=\"name\"\r\n                        [errorStateMatcher]=\"setErrorMatcher(i)\"\r\n                        (selectionChange)=\"onExerciseNameChange($event, i, exerciseNameChoice)\">\r\n                        <mat-optgroup\r\n                            *ngFor=\"let exercise of exercises$ | newTraining:i:exerciseChanged | async\"\r\n                            [label]=\"exercise.primaryMuscleGroup\">\r\n                            <mat-option\r\n                                class=\"exercise-option\"\r\n                                [value]=\"exercise.name\">\r\n                                <img\r\n                                    class=\"exercise-img\"\r\n                                    [src]=\"exercise.imageUrl\">\r\n                                <p class=\"exercise-text\">\r\n                                    {{ exercise.name | translate }}\r\n                                </p>\r\n                            </mat-option>\r\n                        </mat-optgroup>\r\n                    </mat-select>\r\n                    <mat-error\r\n                        *ngIf=\"accessFormField('name', i).errors?.required\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.exercise_name_required' | translate }}\r\n                    </mat-error>\r\n                    <mat-error\r\n                        *ngIf=\"form.errors?.duplicateExerciseName && form.errors?.duplicateExerciseName === accessFormField('name', i).value\"\r\n                        class=\"error\">\r\n                        {{ 'training.new_training.errors.exercise_name_duplicate' | translate }}\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <div\r\n                    class=\"delete-exercise-wrapper\"\r\n                    matTooltipPosition=\"above\"\r\n                    matTooltipClass=\"tooltip\"\r\n                    [matTooltip]=\"'training.new_training.buttons.delete_exercise' | translate\">\r\n                    <button\r\n                        mat-raised-button\r\n                        type=\"button\"\r\n                        color=\"warn\"\r\n                        (click)=\"deleteExercise(i, accessFormField('name', i).value)\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <bl-sets\r\n                formControlName=\"sets\"\r\n                [isExerciseFormSubmitted$]=\"isSubmitted$$.asObservable()\"\r\n                [exerciseStateChanged$]=\"exerciseStateChanged$$.asObservable()\"\r\n                [exerciseNameControl]=\"accessFormField('name', i)\"\r\n                [indexExercise]=\"i\"\r\n                [isLoading]=\"isLoading\"\r\n                [editMode]=\"editMode\"\r\n                (setAdded)=\"onChangeSets($event)\"\r\n                (setDeleted)=\"deleteSet($event)\"\r\n                (formStateChanged)=\"onSetFormChange($event)\"></bl-sets>\r\n            <bl-total-weight formControlName=\"total\"></bl-total-weight>\r\n        </ng-container>\r\n    </ng-container>\r\n    <div\r\n        *ngIf=\"(currentExerciseState$ | async) as currentExerciseState\"\r\n        class=\"add-exercise\">\r\n        <div\r\n            matTooltipClass=\"tooltip-error\"\r\n            [matTooltip]=\"showAddExerciseTooltip(\r\n                currentExerciseState[0].length,\r\n                currentExerciseState[1].length) | async\">\r\n            <button\r\n                mat-raised-button\r\n                type=\"button\"\r\n                color=\"primary\"\r\n                class=\"add-exercise-button\"\r\n                [disabled]=\"isAddingExercisesDisabled(\r\n                    currentExerciseState[0].length,\r\n                    currentExerciseState[1].length) || isLoading\"\r\n                (click)=\"addExercise($event)\">\r\n                {{ 'training.new_training.buttons.add_exercise' | translate }}\r\n            </button>\r\n        </div>\r\n        <div\r\n            matTooltipClass=\"tooltip-error\"\r\n            matTooltipPosition=\"below\"\r\n            [matTooltip]=\"currentExerciseState[0]?.length === 0 ? ('training.new_training.errors.at_least_one_exercise' | translate) : ''\">\r\n            <button\r\n                mat-raised-button\r\n                class=\"finish-training\"\r\n                type=\"submit\"\r\n                color=\"primary\"\r\n                matTooltipClass=\"tooltip\"\r\n                matTooltipPosition=\"above\"\r\n                [matTooltip]=\"currentExerciseState[0]?.length > 0 ? ('training.new_training.finish_training' | translate) : ''\"\r\n                [class.button-spinner]=\"isLoading\"\r\n                [disabled]=\"currentExerciseState[0]?.length === 0 || isLoading\">\r\n                <mat-icon class=\"finish-training-icon\">done</mat-icon>\r\n            </button>\r\n        </div>\r\n        <span\r\n            *ngIf=\"form?.errors?.emptyTraining && (isSubmitted$$ | async) && currentExerciseState[0]?.length === 0\"\r\n            class=\"empty-training-msg\">\r\n            {{ 'training.new_training.errors.at_least_one_exercise' | translate }}\r\n        </span>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "jvDc":
/*!******************************************!*\
  !*** ./src/app/modules/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "vvyD");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _pipes_training_new_training_round_total_weight_round_total_weight_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/training/new-training/round-total-weight/round-total-weight.module */ "48Rf");
/* harmony import */ var _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module */ "f2TX");
/* harmony import */ var _services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/shared/not-found-resolver.service */ "pf8g");
/* harmony import */ var _services_training_training_actions_delete_training_action_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/training/training-actions/delete-training-action.service */ "qK/Y");
/* harmony import */ var _views_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/shared/dialog/dialog.component */ "hHNi");
/* harmony import */ var _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/shared/not-found/not-found.component */ "5T56");
/* harmony import */ var _views_shared_training_sets_sets_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/shared/training/sets/sets.component */ "ZAwS");
/* harmony import */ var _views_shared_training_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/shared/training/single-exercise/single-exercise.component */ "r0Kp");
/* harmony import */ var _views_shared_training_total_weight_total_weight_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/shared/training/total-weight/total-weight.component */ "IwjF");
/* harmony import */ var _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/shared/training/training-actions/delete-training-action/delete-training-action.component */ "4fXl");
/* harmony import */ var _views_shared_training_training_actions_more_training_action_more_training_action_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/shared/training/training-actions/more-training-action/more-training-action.component */ "UMhR");
/* harmony import */ var _views_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/shared/pagination/pagination.component */ "Oo9K");



















const COMPONENTS = [
    _views_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"],
    _views_shared_training_single_exercise_single_exercise_component__WEBPACK_IMPORTED_MODULE_14__["SingleExerciseComponent"],
    _views_shared_training_sets_sets_component__WEBPACK_IMPORTED_MODULE_13__["SetsComponent"],
    _views_shared_training_total_weight_total_weight_component__WEBPACK_IMPORTED_MODULE_15__["TotalWeightComponent"],
    _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
    _views_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__["PaginationComponent"],
];
const ACTION_COMPONENTS = [
    _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_16__["DeleteTrainingActionComponent"],
    _views_shared_training_training_actions_more_training_action_more_training_action_component__WEBPACK_IMPORTED_MODULE_17__["MoreTrainingActionComponent"],
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
];
const IMPORTS = [
    _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_8__["ShowAllExercisesModule"],
    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
    _pipes_training_new_training_round_total_weight_round_total_weight_module__WEBPACK_IMPORTED_MODULE_7__["RoundTotalWeightModule"],
];
let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
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
            _views_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"],
            _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_16__["DeleteTrainingActionComponent"],
        ],
        providers: [
            _services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_9__["NotFoundResolverService"],
            _services_training_training_actions_delete_training_action_service__WEBPACK_IMPORTED_MODULE_10__["DeleteTrainingActionService"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		"grHM",
		"common",
		0
	],
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		1
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		2
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		3
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		4
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		5
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		6
	],
	"./ion-breadcrumb_2.entry.js": [
		"yIml",
		"common",
		7
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		8
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		9
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		10
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		11
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		12
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		13
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		14
	],
	"./ion-img.entry.js": [
		"wHD8",
		15
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		16
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		17
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		18
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		19
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		20
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		21
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		22
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		23
	],
	"./ion-picker-column-internal.entry.js": [
		"wPXX",
		"common",
		24
	],
	"./ion-picker-internal.entry.js": [
		"e90W",
		25
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		26
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		27
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		28
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		29
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		30
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		31
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		32
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		33
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		34
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		35
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		36
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		37
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		38
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		39
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		40
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		41
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		42
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		43
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		44
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		45
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		46
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "ldLg":
/*!**************************************************************************************!*\
  !*** ./src/app/views/shared/training/single-exercise/single-exercise.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-bodyweight {\n  margin-top: 5px;\n}\n\n.exercise-wrapper {\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n}\n\n.exercise-form-field {\n  width: 230px;\n}\n\n.exercise-form-field .mat-select {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.label,\n.error {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.error {\n  color: #c62828;\n  font-size: 11px;\n}\n\n.exercise-option {\n  padding: 0 !important;\n}\n\n.exercise-img {\n  position: absolute;\n  bottom: 1%;\n  left: 0%;\n  display: inline-block;\n  width: 25%;\n  height: 48px;\n}\n\n.exercise-text {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  margin: 0;\n  position: absolute;\n  bottom: 4%;\n  left: 25%;\n  text-align: center;\n  width: 165px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.delete-exercise-wrapper {\n  margin-top: -20px;\n}\n\n.add-exercise {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 300px;\n  margin-top: 10px;\n  column-gap: 5px;\n}\n\n.add-exercise-button {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.add-exercise-button:not([disabled]):hover, .add-exercise-button:not([disabled]):active {\n  color: #def2f1;\n}\n\n.add-exercise .empty-training-msg {\n  display: block;\n  text-align: center;\n  color: #c62828;\n  font-size: 13px;\n  margin-top: 10px;\n  line-height: 16px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNpbmdsZS1leGVyY2lzZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUdJO0VBQ0ksa0NDWEU7QURVVjs7QUFLQTs7RUFFSSxrQ0NqQk07QURlVjs7QUFLQTtFQUNJLGNDdEJPO0VEdUJQLGVDckJjO0FEbUJsQjs7QUFLQTtFQUNJLHFCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksa0NDdkNNO0VEd0NOLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUk7RUFDSSxrQ0NqRUU7QUQrRFY7O0FBS0k7RUFFSSxjQ3hFSztBRG9FYjs7QUFPSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNDN0VHO0VEOEVILGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFMUiIsImZpbGUiOiJzaW5nbGUtZXhlcmNpc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdC1wYWxsZXR0ZS5zY3NzJztcclxuXHJcbi5pbnZhbGlkLWJvZHl3ZWlnaHQge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZXhlcmNpc2Utd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5leGVyY2lzZS1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuXHJcbiAgICAubWF0LXNlbGVjdCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGFiZWwsXHJcbi5lcnJvciB7XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogJGRhcmstcmVkO1xyXG4gICAgZm9udC1zaXplOiAkZXJyb3ItZm9udC1zaXplO1xyXG59XHJcblxyXG4uZXhlcmNpc2Utb3B0aW9uIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4ZXJjaXNlLWltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDElO1xyXG4gICAgbGVmdDowJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi5leGVyY2lzZS10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNCU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTY1cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uZGVsZXRlLWV4ZXJjaXNlLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuXHJcbi5hZGQtZXhlcmNpc2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgY29sdW1uLWdhcDo1cHg7XHJcblxyXG4gICAgJi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIH1cclxuXHJcbiAgICAmLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXIsXHJcbiAgICAmLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogJGxpZ2h0LWJsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcHR5LXRyYWluaW5nLW1zZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAkZGFyay1yZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxufVxyXG4iLCIkYXJteS1ncmVlbjogIzAwOTY4ODtcclxuJGxpZ2h0LXBlcml3aW5rbGU6ICNkZWRmZTE7XHJcbiRibHVlLWdyZXk6ICM5Mzk1OWU7XHJcbiRsaWdodC1ibHVlOiAjZGVmMmYxO1xyXG4kZGFyay1yZWQ6ICNjNjI4Mjg7XHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRlcnJvci1mb250LXNpemU6IDExcHg7XHJcbiJdfQ== */");

/***/ }),

/***/ "lueG":
/*!********************************************************************************!*\
  !*** ./src/app/views/shared/training/total-weight/total-weight.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  column-gap: 10px;\n  margin: 10px 0 15px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #009688;\n}\n.wrapper .key {\n  color: #009688;\n  font-size: 15px;\n}\n.wrapper .value {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRvdGFsLXdlaWdodC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBREo7QUFHSTtFQUNJLGNDWks7RURhTCxlQUFBO0FBRFI7QUFJSTtFQUNJLGVBQUE7QUFGUiIsImZpbGUiOiJ0b3RhbC13ZWlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdC1wYWxsZXR0ZS5zY3NzJztcclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxNXB4IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYXJteS1ncmVlbjtcclxuXHJcbiAgICAua2V5IHtcclxuICAgICAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC52YWx1ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIkYXJteS1ncmVlbjogIzAwOTY4ODtcclxuJGxpZ2h0LXBlcml3aW5rbGU6ICNkZWRmZTE7XHJcbiRibHVlLWdyZXk6ICM5Mzk1OWU7XHJcbiRsaWdodC1ibHVlOiAjZGVmMmYxO1xyXG4kZGFyay1yZWQ6ICNjNjI4Mjg7XHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRlcnJvci1mb250LXNpemU6IDExcHg7XHJcbiJdfQ== */");

/***/ }),

/***/ "mq7e":
/*!****************************************************************!*\
  !*** ./src/app/views/shared/training/sets/sets.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sets {\n  width: 300px;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  column-gap: 12px;\n}\n.sets-weight-lifted, .sets-reps {\n  width: 100px;\n}\n.sets--after-first {\n  padding-top: 5px;\n}\n.sets-success {\n  color: #009688;\n  font-size: 11px;\n}\n.error {\n  color: #c62828;\n  font-size: 11px;\n}\n.delete-set-wrapper {\n  margin-top: -15px;\n}\n.add-sets {\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n.add-sets-button {\n  margin-left: 16px;\n  margin-top: 11px;\n  font-family: \"Poppins\", sans-serif;\n}\n.add-sets-button:not([disabled]):hover, .add-sets-button:not([disabled]):active {\n  color: #def2f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNldHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZGVmYXVsdC1wYWxsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0k7RUFFSSxZQUFBO0FBRlI7QUFLSTtFQUNJLGdCQUFBO0FBSFI7QUFNSTtFQUNJLGNDbkJLO0VEb0JMLGVBQUE7QUFKUjtBQVFBO0VBQ0ksY0NyQk87RURzQlAsZUFBQTtBQUxKO0FBUUE7RUFDSSxpQkFBQTtBQUxKO0FBUUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NDdENFO0FEaUNWO0FBUUk7RUFFSSxjQzdDSztBRHNDYiIsImZpbGUiOiJzZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4uc2V0cyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDEycHg7XHJcblxyXG4gICAgJi13ZWlnaHQtbGlmdGVkLFxyXG4gICAgJi1yZXBzIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tYWZ0ZXItZmlyc3Qge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1zdWNjZXNzIHtcclxuICAgICAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6ICRkYXJrLXJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmRlbGV0ZS1zZXQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuLmFkZC1zZXRzIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICYtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIH1cclxuXHJcbiAgICAmLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXIsXHJcbiAgICAmLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogJGxpZ2h0LWJsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "mxuI":
/*!*****************************************!*\
  !*** ./src/app/helpers/dates.helper.ts ***!
  \*****************************************/
/*! exports provided: isValidDate, constructDates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructDates", function() { return constructDates; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "b/SL");

const isValidDate = (dateStr) => !isNaN(new Date(dateStr).getDate());
const constructDates = (date) => {
    const startDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfWeek"])(date, {
        weekStartsOn: 1,
    });
    const endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfWeek"])(date, {
        weekStartsOn: 1,
    });
    return {
        StartDate: startDate,
        EndDate: endDate,
    };
};


/***/ }),

/***/ "p21/":
/*!***************************************************************************!*\
  !*** ./src/app/helpers/error-matchers/form-error-state-matcher.helper.ts ***!
  \***************************************************************************/
/*! exports provided: FormErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorStateMatcher", function() { return FormErrorStateMatcher; });
class FormErrorStateMatcher {
    isErrorState(control, _form) {
        const controlTouched = control && (control.dirty || control.touched);
        const parentInvalid = control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched);
        return parentInvalid && controlTouched;
    }
}


/***/ }),

/***/ "pAdW":
/*!*******************************************************!*\
  !*** ./src/app/constants/snack-bar-duration.const.ts ***!
  \*******************************************************/
/*! exports provided: SNACK_BAR_DURATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNACK_BAR_DURATION", function() { return SNACK_BAR_DURATION; });
const SNACK_BAR_DURATION = Object.freeze({
    GENERAL: 3000,
    ERROR: 5000,
});


/***/ }),

/***/ "pf8g":
/*!***************************************************************!*\
  !*** ./src/app/services/shared/not-found-resolver.service.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundResolverService", function() { return NotFoundResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/common/interfaces/common.model */ "WGPv");



let NotFoundResolverService = class NotFoundResolverService {
    resolve(_route, _state) {
        localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_2__["LocalStorageItems"].TRAINING_STATE);
    }
};
NotFoundResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NotFoundResolverService);



/***/ }),

/***/ "qK/Y":
/*!**************************************************************************************!*\
  !*** ./src/app/services/training/training-actions/delete-training-action.service.ts ***!
  \**************************************************************************************/
/*! exports provided: DeleteTrainingActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTrainingActionService", function() { return DeleteTrainingActionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-past-trainings-dates.helper */ "3gs1");
/* harmony import */ var _views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../views/shared/training/training-actions/delete-training-action/delete-training-action.component */ "4fXl");











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
        this.dialog.open(_views_shared_training_training_actions_delete_training_action_delete_training_action_component__WEBPACK_IMPORTED_MODULE_10__["DeleteTrainingActionComponent"], {
            data: {
                title$: this.translateService.stream('training.past_trainings.actions.delete_training'),
                dateCreated$: this.translateService.stream(`weekdays.${data.weekDays[data.dayIndex]}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((value) => `${value} (${this.datePipe.transform(data.training.createdAt, 'dd.MM.yyyy')})`)),
                timeCreated$: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(data.timeCreated),
                training$: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(data.training),
                deleteTrainingFn: (trainingId, currentDate) => this.deleteTraining(trainingId, currentDate),
            },
            panelClass: 'delete-training-dialog',
        });
    }
    deleteTraining(trainingId, currentDate) {
        const params = `?currentDate=${currentDate}`;
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].BACKEND + `/training/delete_training/${trainingId}${params}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => Object(_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_9__["mapDateInterval"])(response)));
    }
};
DeleteTrainingActionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
DeleteTrainingActionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], DeleteTrainingActionService);



/***/ }),

/***/ "qP1r":
/*!*************************************************************!*\
  !*** ./src/app/views/navigation/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./header.component.html */ "dPCz");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component.scss */ "GBIN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/training/past-trainings/past-trainings.model */ "XcPp");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "9ans");
/* harmony import */ var _services_shared_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/shared/navigation.service */ "jBOc");
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/shared/shared.service */ "iBYA");
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/training/new-training.service */ "NxwY");
/* harmony import */ var _helpers_dates_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers/dates.helper */ "mxuI");
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../models/common/interfaces/common.model */ "WGPv");















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
    this.toggleSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
  }

  get StartDate() {
    var _a, _b;

    return Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])((_b = (_a = Object(_helpers_dates_helper__WEBPACK_IMPORTED_MODULE_13__["constructDates"])(new Date())) === null || _a === void 0 ? void 0 : _a.StartDate) !== null && _b !== void 0 ? _b : new Date(), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__["QUERY_PARAMS_DATE_FORMAT"]);
  }

  get EndDate() {
    var _a, _b;

    return Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])((_b = (_a = Object(_helpers_dates_helper__WEBPACK_IMPORTED_MODULE_13__["constructDates"])(new Date())) === null || _a === void 0 ? void 0 : _a.EndDate) !== null && _b !== void 0 ? _b : new Date(), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__["QUERY_PARAMS_DATE_FORMAT"]);
  }

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuth$;
    this.loggedUserData$ = this.authService.loggedUser$;
    this.isEditing$ = this.sharedService.editingTraining$$;
  }

  onLogout() {
    var _this = this;

    return Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.newTrainingService.clearTrainingData();

      yield _this.authService.logout();
    })();
  }

  goToPastTraining() {
    var _this2 = this;

    this.sharedService.pastTrainingsQueryParams$$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe( /*#__PURE__*/function () {
      var _ref = Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        yield _this2.router.navigate(['/training/past-trainings'], {
          queryParams: {
            startDate: (response === null || response === void 0 ? void 0 : response.startDate) ? response.startDate : undefined,
            endDate: (response === null || response === void 0 ? void 0 : response.endDate) ? response.endDate : undefined,
            search: (response === null || response === void 0 ? void 0 : response.search) ? response.search : undefined,
            page: (response === null || response === void 0 ? void 0 : response.page) ? response.page : undefined,
            size: (response === null || response === void 0 ? void 0 : response.size) ? response.size : undefined
          }
        });
        localStorage.removeItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_14__["LocalStorageItems"].QUERY_PARAMS);
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
    this.authService.loggedUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(userData => this.navigationService.setPreferences(userData._id, language, 'kg'))).subscribe();
  }

};

HeaderComponent.ctorParameters = () => [{
  type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_12__["NewTrainingService"]
}, {
  type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
}, {
  type: _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]
}, {
  type: _services_shared_navigation_service__WEBPACK_IMPORTED_MODULE_10__["NavigationService"]
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
}];

HeaderComponent.propDecorators = {
  toggleSideNav: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
  selector: 'bl-header',
  template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
  styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
})], HeaderComponent);


/***/ }),

/***/ "r0Kp":
/*!************************************************************************************!*\
  !*** ./src/app/views/shared/training/single-exercise/single-exercise.component.ts ***!
  \************************************************************************************/
/*! exports provided: SingleExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleExerciseComponent", function() { return SingleExerciseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_single_exercise_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./single-exercise.component.html */ "jEEv");
/* harmony import */ var _single_exercise_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-exercise.component.scss */ "ldLg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constants/snack-bar-duration.const */ "pAdW");
/* harmony import */ var _helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../helpers/control-value-accessor.helper */ "57ZC");
/* harmony import */ var _helpers_error_matchers_exercise_name_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../helpers/error-matchers/exercise-name-error-state-matcher.helper */ "3TyR");
/* harmony import */ var _models_preferences_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../models/preferences.model */ "ziAg");
/* harmony import */ var _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../models/training/new-training/empty-training.model */ "8Xo1");
/* harmony import */ var _models_training_shared_set_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../models/training/shared/set.model */ "hTPm");
/* harmony import */ var _pipes_training_new_training_round_total_weight_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../pipes/training/new-training/round-total-weight/round-total-weight.pipe */ "6VvA");
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ "i3RA");
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../services/training/new-training.service */ "NxwY");
/* harmony import */ var _validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../validators/training/single-exercise.validators */ "AlOC");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../dialog/dialog.component */ "hHNi");
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
        this.exerciseStateChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.isSubmitted$$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
        this.exercises$ = undefined;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
        this.exerciseNameErrorStateMatcher = new _helpers_error_matchers_exercise_name_error_state_matcher_helper__WEBPACK_IMPORTED_MODULE_13__["ExerciseNameErrorStateMatcher"]();
        this.setErrors = [];
        this.exerciseChanged = false;
        this.editData = _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_15__["EMPTY_TRAINING_EDIT"];
        this.isLoading = false;
        this.editMode = false;
        this.currentExerciseState$ = this.exerciseStateChanged$$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(_ => Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])([
            this.newTrainingService.currentTrainingChanged$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((currentTrainingState) => currentTrainingState.exercise)),
            this.newTrainingService.allExercisesChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)),
        ])));
        this.form.setValidators([_validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_20__["checkDuplicateExerciseName"](), _validators_training_single_exercise_validators__WEBPACK_IMPORTED_MODULE_20__["checkExerciseNumber"]()]);
        this.form.updateValueAndValidity();
    }
    set exerciseNameChoice(exerciseName) {
        if (exerciseName) {
            this.newTrainingService.currentTrainingChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((currentTrainingState) => this.setExerciseNameTooltip(exerciseName, null, currentTrainingState)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribeService)).subscribe();
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
                    this.accessFormField('total', indexExercise).patchValue(exercise.total ? this.roundTotalWeightPipe.transform(exercise.total) : `0 ${_models_preferences_model__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_WEIGHT_FORMAT"]}`);
                    this.accessFormField('disabledTooltip', indexExercise).patchValue(exercise.disabledTooltip);
                }
            });
        }
        else {
            this.addExercise();
        }
    }
    registerOnChange(fn) {
        this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribeService)).subscribe(fn);
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
        this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'sets': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](Object(_models_training_shared_set_model__WEBPACK_IMPORTED_MODULE_16__["createInitialSet"])()),
            'total': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.roundTotalWeightPipe.transform(INITIAL_WEIGHT), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'disabledTooltip': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](true, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        }));
        if (clicked) {
            this.newTrainingService.addNewExercise(this.getAlreadyUsedExercises());
            this.exerciseStateChanged$$.next();
        }
    }
    deleteExercise(indexExercise, exerciseName) {
        if (exerciseName) {
            const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogComponent"], {
                data: {
                    isError: false,
                    deleteExercise: {
                        message$: this.translateService.stream('training.new_training.delete_exercise_prompt'),
                        exerciseName: exerciseName,
                    },
                },
            });
            dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((response) => {
                if (response) {
                    return this.newTrainingService.currentTrainingChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((currentTrainingState) => this.newTrainingService.deleteExercise(currentTrainingState, exerciseName)));
                }
                else {
                    return rxjs__WEBPACK_IMPORTED_MODULE_9__["EMPTY"];
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
                this.exerciseStateChanged$$.next();
                this.changeDetectorRef.markForCheck();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribeService)).subscribe((data) => {
                this.exerciseChanged = !this.exerciseChanged;
                this.form.removeAt(indexExercise);
                this.newTrainingService.pushToAvailableExercises(data[0], data[1]);
            });
        }
        else {
            this.newTrainingService.currentTrainingChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((currentTrainingState) => this.newTrainingService.deleteExercise(currentTrainingState, null, indexExercise)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => this.exerciseStateChanged$$.next()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribeService)).subscribe(_ => this.form.removeAt(indexExercise));
        }
    }
    onChangeSets($event) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribeService)).subscribe(_ => {
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
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])('');
                }
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])('');
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
        this.gatherAllFormData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((apiNewTraining) => {
            var _a;
            if (this.editMode) {
                return this.newTrainingService.updateTraining(apiNewTraining, (_a = this.editData.editTraining) === null || _a === void 0 ? void 0 : _a._id);
            }
            else {
                return this.newTrainingService.addTraining(apiNewTraining);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.isLoading = false;
            this.changeDetectorRef.markForCheck();
        })).subscribe((response) => {
            this.snackBar.open(this.translateService.instant(response.Message), null, {
                duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_11__["SNACK_BAR_DURATION"].GENERAL,
                panelClass: 'app__snackbar',
            });
        });
    }
    gatherAllFormData() {
        return this.newTrainingService.currentTrainingChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((currentTrainingState) => {
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribeService));
    }
    setExerciseNameTooltip(element, indexExercise, currentTrainingState) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(_ => {
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
    { type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_19__["NewTrainingService"] },
    { type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_18__["UnsubscribeService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _pipes_training_new_training_round_total_weight_round_total_weight_pipe__WEBPACK_IMPORTED_MODULE_17__["RoundTotalWeightPipe"] }
];
SingleExerciseComponent.propDecorators = {
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    bodyweight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    editMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    exerciseNameChoice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['exerciseNameChoice', {
                    read: _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"],
                },] }]
};
SingleExerciseComponent = SingleExerciseComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bl-single-exercise',
        template: _raw_loader_single_exercise_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        providers: [
            Object(_helpers_control_value_accessor_helper__WEBPACK_IMPORTED_MODULE_12__["getControlValueAccessor"])(SingleExerciseComponent_1),
            _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_18__["UnsubscribeService"],
        ],
        styles: [_single_exercise_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SingleExerciseComponent);



/***/ }),

/***/ "rdLC":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/shared/training/training-actions/more-training-action/more-training-action.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3JlLXRyYWluaW5nLWFjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "t2gh":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/minimal */ "gtzJ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/snack-bar-duration.const */ "pAdW");









let ErrorInterceptor = class ErrorInterceptor {
    constructor(snackBar, translateService) {
        this.snackBar = snackBar;
        this.translateService = translateService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((error) => {
            let errorMessage;
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                Object(_sentry_minimal__WEBPACK_IMPORTED_MODULE_5__["captureException"])(error);
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
                duration: _constants_snack_bar_duration_const__WEBPACK_IMPORTED_MODULE_8__["SNACK_BAR_DURATION"].ERROR,
                panelClass: 'app__snackbar-error',
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "uyZc":
/*!*****************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/side-nav.component.ts ***!
  \*****************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_side_nav_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./side-nav.component.html */ "5Mm4");
/* harmony import */ var _side_nav_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-nav.component.scss */ "zJp3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/training/past-trainings/past-trainings.model */ "XcPp");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "9ans");
/* harmony import */ var _services_shared_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/shared/navigation.service */ "jBOc");
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/shared/unsubscribe.service */ "i3RA");
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/training/new-training.service */ "NxwY");













let SideNavComponent = class SideNavComponent {
  constructor(authService, navigationService, newTrainingService, unsubsService, router) {
    this.authService = authService;
    this.navigationService = navigationService;
    this.newTrainingService = newTrainingService;
    this.unsubsService = unsubsService;
    this.router = router;
    this.closeSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
  }

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuth$;
    this.loggedUserData$ = this.authService.loggedUser$;
  }

  onLogout() {
    var _this = this;

    return Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.newTrainingService.clearTrainingData();

      yield _this.authService.logout();
    })();
  }

  goToPastTrainings() {
    var _this2 = this;

    return Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const startDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["startOfWeek"])(new Date(), {
        weekStartsOn: 1
      });
      const endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["endOfWeek"])(new Date(), {
        weekStartsOn: 1
      });
      yield _this2.router.navigate(['/training/past-trainings'], {
        queryParams: {
          startDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(startDate, _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__["QUERY_PARAMS_DATE_FORMAT"]),
          endDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(endDate, _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_8__["QUERY_PARAMS_DATE_FORMAT"])
        }
      });
    })();
  }

  changeLanguage(language) {
    this.authService.loggedUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(userData => this.navigationService.setPreferences(userData._id, language, 'kg')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubsService)).subscribe(_ => this.onCloseSideNav());
  }

  onCloseSideNav() {
    this.closeSideNav.emit();
  }

};

SideNavComponent.ctorParameters = () => [{
  type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
}, {
  type: _services_shared_navigation_service__WEBPACK_IMPORTED_MODULE_10__["NavigationService"]
}, {
  type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_12__["NewTrainingService"]
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_11__["UnsubscribeService"]
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
}];

SideNavComponent.propDecorators = {
  closeSideNav: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};
SideNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
  selector: 'bl-side-nav',
  template: _raw_loader_side_nav_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_11__["UnsubscribeService"]],
  styles: [_side_nav_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
})], SideNavComponent);


/***/ }),

/***/ "vAJ8":
/*!*************************************************************!*\
  !*** ./src/app/models/common/interfaces/paginator.model.ts ***!
  \*************************************************************/
/*! exports provided: DEFAULT_SIZE, INITIAL_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SIZE", function() { return DEFAULT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_PAGE", function() { return INITIAL_PAGE; });
const DEFAULT_SIZE = 3;
const INITIAL_PAGE = 1;


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/shared/not-found-resolver.service */ "pf8g");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/auth/login/login.component */ "/kjZ");
/* harmony import */ var _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/auth/signup/signup.component */ "cbJ7");
/* harmony import */ var _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/shared/not-found/not-found.component */ "5T56");









const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
}, {
  path: 'signup',
  component: _views_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
}, {
  path: 'training',
  loadChildren: function () {
    var _ref = Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() | modules-training-training-module */ "modules-training-training-module").then(__webpack_require__.bind(null, /*! ./modules/training/training.module */ "fy56")).then(module => module.TrainingModule);
    });

    return function loadChildren() {
      return _ref.apply(this, arguments);
    };
  }(),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
}, {
  path: 'not-found',
  component: _views_shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
  resolve: [_services_shared_not_found_resolver_service__WEBPACK_IMPORTED_MODULE_5__["NotFoundResolverService"]]
}, {
  path: '**',
  redirectTo: '/not-found'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"]
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
})], AppRoutingModule);


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");


















let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        ],
    })
], MaterialModule);



/***/ }),

/***/ "wSDh":
/*!*********************************************************************************************!*\
  !*** ./src/app/pipes/training/past-trainings/show-all-exercises/show-all-exercises.pipe.ts ***!
  \*********************************************************************************************/
/*! exports provided: ShowAllExercisesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllExercisesPipe", function() { return ShowAllExercisesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ShowAllExercisesPipe = class ShowAllExercisesPipe {
    constructor(translateService) {
        this.translateService = translateService;
    }
    transform(training) {
        var _a, _b;
        return this.translateService.stream((_b = (_a = training.exercise) === null || _a === void 0 ? void 0 : _a.map((x) => x === null || x === void 0 ? void 0 : x.exerciseName)) !== null && _b !== void 0 ? _b : []).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => {
            let exercisesToConcat = '';
            Object.values(value).forEach((exerciseName, index) => {
                exercisesToConcat += `${index + 1}. ${exerciseName}\n`;
            });
            return exercisesToConcat;
        }));
    }
};
ShowAllExercisesPipe.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
ShowAllExercisesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'showAllExercises',
    })
], ShowAllExercisesPipe);



/***/ }),

/***/ "ymVw":
/*!*****************************************************************!*\
  !*** ./src/app/views/shared/not-found/not-found.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 60px;\n}\n.wrapper .title {\n  margin-bottom: 10px;\n}\n.wrapper .img {\n  width: 150px;\n  height: 150px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUk7RUFDSSxtQkFBQTtBQUFSO0FBR0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRFIiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container,\n.sidenav-content,\n.sidenav {\n  height: 100%;\n}\n\n.sidenav {\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7RUFHSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zaWRlbmF2LWNvbnRhaW5lcixcclxuLnNpZGVuYXYtY29udGVudCxcclxuLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "zJp3":
/*!*******************************************************************!*\
  !*** ./src/app/views/navigation/side-nav/side-nav.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n  color: #009688;\n}\n\n.caption {\n  display: inline-block;\n  padding-left: 6px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.menu-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  column-gap: 10px;\n  width: 150px;\n}\n\n.menu-item--text {\n  font-size: 15px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.chosenLanguage {\n  background: #009688;\n}\n\n.chosenLanguage .sidenav__menu-item--text {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQ0pTO0FERWI7O0FBS0E7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NDTE07QURHVjs7QUFLQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUk7RUFDSSxlQUFBO0VBQ0Esa0NDakJFO0FEZVY7O0FBTUE7RUFDSSxtQkMzQlM7QUR3QmI7O0FBS0k7RUFDSSxZQUFBO0FBSFIiLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdC1wYWxsZXR0ZS5zY3NzJztcclxuXHJcblxyXG4uaWNvbiB7XHJcbiAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG59XHJcblxyXG4ubWVudS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuXHJcbiAgICAmLS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2hvc2VuTGFuZ3VhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogJGFybXktZ3JlZW47XHJcblxyXG4gICAgLnNpZGVuYXZfX21lbnUtaXRlbS0tdGV4dCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(_err => {
    //TODO
});


/***/ }),

/***/ "ziAg":
/*!*********************************************!*\
  !*** ./src/app/models/preferences.model.ts ***!
  \*********************************************/
/*! exports provided: DEFAULT_WEIGHT_FORMAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WEIGHT_FORMAT", function() { return DEFAULT_WEIGHT_FORMAT; });
const DEFAULT_WEIGHT_FORMAT = 'kg';


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.c75bc0b91995b869b441.js.map