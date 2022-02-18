(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-c10ad309-js"],{

/***/ "7lu2":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-c10ad309.js ***!
  \******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-06cd27b1.js */ "A2ku");
/* harmony import */ var _helpers_6e1e5b65_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-6e1e5b65.js */ "//2v");


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    Object(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_1__["f"])(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);

      if (!el) {
        return;
      }

      const contentEl = el.closest('ion-content');

      if (contentEl) {
        new Promise(resolve => Object(_helpers_6e1e5b65_js__WEBPACK_IMPORTED_MODULE_2__["c"])(contentEl, resolve)).then(() => {
          Object(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_1__["c"])( /*#__PURE__*/Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            yield contentEl.scrollToTop(300);
            contentEl.style.removeProperty('--overflow');
          }));
        });
      }
    });
  });
};



/***/ })

}]);
//# sourceMappingURL=status-tap-c10ad309-js.e84aaf2e8ea4708e41eb.js.map