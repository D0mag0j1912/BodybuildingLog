(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "ISmu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-text.entry.js ***!
  \*************************************************************/
/*! exports provided: ion_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_text", function() { return Text; });
/* harmony import */ var _index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-06cd27b1.js */ "A2ku");
/* harmony import */ var _ionic_global_a049bcbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-a049bcbf.js */ "JO23");
/* harmony import */ var _theme_a24ff1ad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-a24ff1ad.js */ "zR+n");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

let Text = class {
  constructor(hostRef) {
    Object(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    const mode = Object(_ionic_global_a049bcbf_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
    return (Object(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_theme_a24ff1ad_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color, {
        [mode]: true,
      }) }, Object(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
Text.style = textCss;




/***/ })

}]);
//# sourceMappingURL=42.0f81b5368e484d4b6534.js.map