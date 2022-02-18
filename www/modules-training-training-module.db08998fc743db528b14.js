(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-training-training-module"],{

/***/ "/GTp":
/*!*****************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-section {\n  margin: 64px 16px 0 16px;\n}\n.main-section .spinner {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.main-section .error-wrapper {\n  width: 250px;\n  margin: 5rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main-section .error-wrapper .error-image {\n  width: 250px;\n  height: 200px;\n}\n.main-section .error-wrapper .error-title {\n  font-size: 18px;\n  margin-bottom: 5px;\n  text-align: center;\n}\n.main-section .error-wrapper .error-description {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 24px;\n  text-align: center;\n  color: #93959e;\n}\n.main-section .search-no-result-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n.main-section .search-no-result-wrapper .search-not-found-img {\n  width: 150px;\n  height: 150px;\n}\n.main-section .search-no-result-wrapper .search-not-found-title {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  margin: 20px 0;\n}\n.main-section .search-no-result-wrapper .search-not-found-description {\n  font-size: 14px;\n  color: #93959e;\n  text-align: center;\n}\n.main-section .card-info-wrapper {\n  padding: 10px 16px;\n  border: 2px solid #009688;\n}\n.main-section .card-info-wrapper .header-title {\n  font-size: 20px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n}\n.main-section .card-info-wrapper .footer {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.main-section .card-info-wrapper .footer .food-subtitle {\n  font-size: 16px;\n  text-align: center;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n}\n.main-section .card-info-wrapper .footer .food-subtitle--txt {\n  color: #009688;\n}\n.main-section .training-item-wrapper {\n  display: block;\n  margin: 10px 0;\n  overflow: auto;\n}\n.main-section .training-item-wrapper::-webkit-scrollbar {\n  width: 6px;\n}\n.main-section .training-item-wrapper::-webkit-scrollbar-thumb {\n  background-color: #dedfe1;\n  border-radius: 6px;\n}\n.main-section .no-trainings {\n  margin: 0 1rem 1rem 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main-section .no-trainings-title {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: normal;\n  text-align: center;\n}\n@media (min-width: 640px) {\n  .main-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .main-section .card-info-wrapper {\n    margin-top: 0.5rem;\n    width: 850px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .main-section .training-item-wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    column-gap: 18px;\n    max-height: 400px;\n    width: 850px;\n    overflow: auto;\n  }\n  .main-section .training-item-wrapper::-webkit-scrollbar {\n    width: 4px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFzdC10cmFpbmluZ3MuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxkZWZhdWx0LXBhbGxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx3QkFBQTtBQURKO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRFI7QUFJSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFJUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRlo7QUFLUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSFo7QUFNUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0NwQ0E7QURnQ1o7QUFRSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFOUjtBQVFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFOWjtBQVNRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUFo7QUFVUTtFQUNJLGVBQUE7RUFDQSxjQzVEQTtFRDZEQSxrQkFBQTtBQVJaO0FBWUk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBVlI7QUFZUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NDdEVGO0FENERWO0FBYVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBWFo7QUFhWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0NsRk47QUR1RVY7QUFhZ0I7RUFDSSxjQzFGUDtBRCtFYjtBQWlCSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWZSO0FBaUJRO0VBQ0ksVUFBQTtBQWZaO0FBa0JRO0VBQ0kseUJDekdPO0VEMEdQLGtCQUFBO0FBaEJaO0FBb0JJO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWxCUjtBQW9CUTtFQUNJLGtDQ2pIRjtFRGtIRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWxCWjtBQXdCQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUF0Qk47RUF3Qk07SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBdEJWO0VBeUJNO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUF2QlY7RUF5QlU7SUFDSSxVQUFBO0VBdkJkO0FBQ0YiLCJmaWxlIjoicGFzdC10cmFpbmluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdC1wYWxsZXR0ZSc7XHJcblxyXG4ubWFpbi1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogNjRweCAxNnB4IDAgMTZweDtcclxuXHJcbiAgICAuc3Bpbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9yLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBtYXJnaW46IDVyZW0gYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmVycm9yLWltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVycm9yLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lcnJvci1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlLWdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtbm8tcmVzdWx0LXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgIC5zZWFyY2gtbm90LWZvdW5kLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWFyY2gtbm90LWZvdW5kLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXJjaC1ub3QtZm91bmQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1ncmV5O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWluZm8td3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRhcm15LWdyZWVuO1xyXG5cclxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLmZvb2Qtc3VidGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG5cclxuICAgICAgICAgICAgICAgICYtLXR4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRhcm15LWdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50cmFpbmluZy1pdGVtLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1wZXJpd2lua2xlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uby10cmFpbmluZ3Mge1xyXG4gICAgICAgIG1hcmdpbjogMCAxcmVtIDFyZW0gMnJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcblxyXG4gICAgLm1haW4tc2VjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5jYXJkLWluZm8td3JhcHBlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDg1MHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRyYWluaW5nLWl0ZW0td3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMThweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NTBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiRhcm15LWdyZWVuOiAjMDA5Njg4O1xyXG4kbGlnaHQtcGVyaXdpbmtsZTogI2RlZGZlMTtcclxuJGJsdWUtZ3JleTogIzkzOTU5ZTtcclxuJGxpZ2h0LWJsdWU6ICNkZWYyZjE7XHJcbiRkYXJrLXJlZDogI2M2MjgyODtcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGVycm9yLWZvbnQtc2l6ZTogMTFweDtcclxuIl19 */");

/***/ }),

/***/ "/jOx":
/*!******************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/toDate/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toDate; });
/* harmony import */ var date_fns_esm_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js */ "JCDJ");
/* harmony import */ var _lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/tzParseTimezone */ "wUsO");




var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/, // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/, // 2 additional digits
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

  // timezone tokens (to identify the presence of a tz)
  timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/,
}

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
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (argument === null) {
    return new Date(NaN)
  }

  var options = dirtyOptions || {}

  var additionalDigits =
    options.additionalDigits == null
      ? DEFAULT_ADDITIONAL_DIGITS
      : Object(date_fns_esm_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.additionalDigits)
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === 'object' && Object.prototype.toString.call(argument) === '[object Date]')
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (
    typeof argument === 'number' ||
    Object.prototype.toString.call(argument) === '[object Number]'
  ) {
    return new Date(argument)
  } else if (
    !(
      typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]'
    )
  ) {
    return new Date(NaN)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (isNaN(date)) {
    return new Date(NaN)
  }

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)

      if (isNaN(time)) {
        return new Date(NaN)
      }
    }

    if (dateStrings.timezone || options.timeZone) {
      offset = Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_2__["default"])(dateStrings.timezone || options.timeZone, new Date(timestamp + time))
      if (isNaN(offset)) {
        return new Date(NaN)
      }
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = Object(date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(timestamp + time))
      offset = Object(date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(timestamp + time + offset))
    }

    return new Date(timestamp + time + offset)
  } else {
    return new Date(NaN)
  }
}

function splitDateString(dateString) {
  var dateStrings = {}
  var array = dateString.split(patterns.dateTimeDelimeter)
  var timeString

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
    dateStrings.timezone = array[2]
    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0]
      timeString = dateString.substr(dateStrings.date.length, dateString.length)
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits]
  var patternYYYYY = patterns.YYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length),
    }
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length),
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null,
  }
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1

    if (!validateDate(year, month)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)

    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // yyyy-MM-dd or YYYYMMDD
  token = patterns.MMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)

    if (!validateDate(year, month, day)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1

    if (!validateWeekDate(year, week)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1

    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime(timeString) {
  var token
  var hours
  var minutes

  // hh
  token = patterns.HH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))

    if (!validateTime(hours)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))

    if (!validateTime(hours, minutes)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))

    if (!validateTime(hours, minutes, seconds)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoWeekYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

// Validation functions

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false
  }

  if (date != null) {
    if (date < 1) {
      return false
    }

    var isLeapYear = isLeapYearIndex(year)
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false
    }
  }

  return true
}

function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false
  }

  var isLeapYear = isLeapYearIndex(year)
  if (isLeapYear && dayOfYear > 366) {
    return false
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false
  }

  return true
}

function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false
  }

  if (day != null && (day < 0 || day > 6)) {
    return false
  }

  return true
}

function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false
  }

  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false
  }

  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false
  }

  return true
}


/***/ }),

/***/ "/t0t":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filters-wrapper\">\r\n    <form\r\n        #form=\"ngForm\"\r\n        class=\"search-wrapper\"\r\n        autocomplete=\"off\">\r\n        <input\r\n            #search=\"ngModel\"\r\n            name=\"search\"\r\n            type=\"text\"\r\n            class=\"search-input\"\r\n            [maxlength]=\"inputMaxLength\"\r\n            [placeholder]=\"'training.past_trainings.filters.enter_search_term' | translate\"\r\n            [(ngModel)]=\"searchValue\"\r\n            (keyup)=\"emitKeyboardEvent($event)\">\r\n        <span\r\n            *ngIf=\"search?.control?.errors?.maxlength\"\r\n            class=\"search-max-error\">\r\n            {{ 'training.past_trainings.filters.errors.search_max_length' | translate }}\r\n        </span>\r\n        <div class=\"sort-wrapper\">\r\n            <select>\r\n                <option\r\n                    *ngFor=\"let option of sortOptions\"\r\n                    [value]=\"option.key\">\r\n                    {{ option.value | async }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n    </form>\r\n    <div class=\"or-wrapper\">\r\n        <span class=\"or\">{{ 'common.or' | translate }}</span>\r\n        <mat-icon class=\"search-icon\">filter_list</mat-icon>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "4tCo":
/*!******************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  height: 225px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 10px 10px 10px;\n  padding: 10px 0 0 0;\n  cursor: pointer;\n}\n.wrapper .title-wrapper {\n  font-size: 20px;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n  display: flex;\n  margin-bottom: 10px;\n}\n.wrapper .title-wrapper .day-name {\n  color: #009688;\n  margin-right: 3px;\n}\n.wrapper .central-wrapper {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.wrapper .central-wrapper .bodyweight,\n.wrapper .central-wrapper .created-at {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: flex-start;\n  max-width: 120px;\n  white-space: nowrap;\n}\n.wrapper .central-wrapper .bodyweight--key,\n.wrapper .central-wrapper .created-at--key {\n  color: #009688;\n  font-family: \"Poppins\", sans-serif;\n  justify-content: center;\n}\n.wrapper .central-wrapper .bodyweight--value,\n.wrapper .central-wrapper .created-at--value {\n  justify-content: center;\n}\n.wrapper .central-wrapper .created-at {\n  align-self: flex-end;\n}\n.wrapper .centered-central-wrapper {\n  justify-content: center;\n}\n.wrapper .exercise-wrapper {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 80px;\n  width: 90%;\n}\n.wrapper .exercise-wrapper-no-dots {\n  margin-bottom: 20px;\n}\n.wrapper .exercise-wrapper .exercise-name {\n  font-family: \"Poppins\", sans-serif;\n  max-width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wrapper .exercise-wrapper .exercise-dots {\n  align-self: center;\n}\n.wrapper .actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 45px;\n  border-top: 1px solid #dedfe1;\n}\n.wrapper:hover,\n.wrapper:active {\n  background: #def2f1;\n}\n@media (min-width: 640px) {\n  .wrapper {\n    box-sizing: border-box;\n    height: 230px;\n    width: 270px;\n    margin: 0 0 5px 0;\n  }\n\n  .exercise-wrapper {\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRyYWluaW5nLWl0ZW0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZGVmYXVsdC1wYWxsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFESjtBQUdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NDVEU7RURVRixhQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBQ0ksY0NuQkM7RURvQkQsaUJBQUE7QUFEWjtBQUtJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSFI7QUFLUTs7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhaO0FBS1k7O0VBQ0ksY0N4Q0g7RUR5Q0csa0NDcENOO0VEcUNNLHVCQUFBO0FBRmhCO0FBS1k7O0VBQ0ksdUJBQUE7QUFGaEI7QUFNUTtFQUNJLG9CQUFBO0FBSlo7QUFRSTtFQUNJLHVCQUFBO0FBTlI7QUFTSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQVBSO0FBU1E7RUFDSSxtQkFBQTtBQVBaO0FBVVE7RUFDSSxrQ0NuRUY7RURvRUUsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVJaO0FBV1E7RUFDSSxrQkFBQTtBQVRaO0FBYUk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFYUjtBQWVBOztFQUVJLG1CQzdGUztBRGlGYjtBQWdCQTtFQUVJO0lBQ0ksc0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBZE47O0VBaUJFO0lBQ0ksdUJBQUE7RUFkTjtBQUNGIiwiZmlsZSI6InRyYWluaW5nLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdC1wYWxsZXR0ZS5zY3NzJztcclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGhlaWdodDogMjI1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC50aXRsZS13cmFwcGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAuZGF5LW5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2VudHJhbC13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIC5ib2R5d2VpZ2h0LFxyXG4gICAgICAgIC5jcmVhdGVkLWF0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgICAgICYtLWtleSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi0tdmFsdWUge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcmVhdGVkLWF0IHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jZW50ZXJlZC1jZW50cmFsLXdyYXBwZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5leGVyY2lzZS13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgICAgJi1uby1kb3RzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5leGVyY2lzZS1uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXhlcmNpc2UtZG90cyB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0LXBlcml3aW5rbGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53cmFwcGVyOmhvdmVyLFxyXG4ud3JhcHBlcjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LWJsdWU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuZXhlcmNpc2Utd3JhcHBlciB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIiRhcm15LWdyZWVuOiAjMDA5Njg4O1xyXG4kbGlnaHQtcGVyaXdpbmtsZTogI2RlZGZlMTtcclxuJGJsdWUtZ3JleTogIzkzOTU5ZTtcclxuJGxpZ2h0LWJsdWU6ICNkZWYyZjE7XHJcbiRkYXJrLXJlZDogI2M2MjgyODtcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGVycm9yLWZvbnQtc2l6ZTogMTFweDtcclxuIl19 */");

/***/ }),

/***/ "5qPs":
/*!******************************************!*\
  !*** ./src/app/helpers/months.helper.ts ***!
  \******************************************/
/*! exports provided: ALL_MONTHS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_MONTHS", function() { return ALL_MONTHS; });
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

/***/ "76Ze":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/training/past-trainings/training-item/training-item.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card\r\n    class=\"wrapper\"\r\n    (click)=\"trainingClicked()\">\r\n    <div class=\"title-wrapper\">\r\n        <strong class=\"day-name\">\r\n            {{ ('weekdays.' + weekDays[dayIndex] | translate) }}</strong>\r\n        {{ '(' + (training.createdAt | date: 'dd.MM.yyyy') + ')' }}\r\n    </div>\r\n    <div\r\n        class=\"central-wrapper\"\r\n        [class.centered-central-wrapper]=\"!training.bodyweight\">\r\n        <div\r\n            class=\"bodyweight\"\r\n            *ngIf=\"training.bodyweight\">\r\n            <strong class=\"bodyweight--key\">\r\n                {{ 'common.bodyweight' | translate }}\r\n            </strong>\r\n            <span class=\"bodyweight--value\">\r\n                {{ training.bodyweight + ' kg' }}\r\n            </span>\r\n        </div>\r\n        <div class=\"created-at\">\r\n            <strong class=\"created-at--key\">\r\n                {{ 'common.created_at_time' | translate }}\r\n            </strong>\r\n            <span class=\"created-at--value\">\r\n                {{ timeCreated }}\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div\r\n        class=\"exercise-wrapper\"\r\n        [class.exercise-wrapper-no-dots]=\"training.exercise.length <= 2\"\r\n        matTooltipClass=\"tooltip\"\r\n        [matTooltipDisabled]=\"isTooltipDisabled\"\r\n        [matTooltip]=\"(training | showAllExercises | async)\">\r\n        <span\r\n            #exerciseNameEl\r\n            *ngFor=\"let data of (training.exercise | slice:0:2); let i = index\"\r\n            class=\"exercise-name\">\r\n            {{ (i+1) + '. ' + (data.exerciseName | translate) }}\r\n        </span>\r\n        <span\r\n            *ngIf=\"training.exercise.length > 2\"\r\n            class=\"exercise-dots\">\r\n            &#8942;\r\n        </span>\r\n    </div>\r\n    <div class=\"actions\">\r\n        <bl-training-item-actions\r\n            *ngFor=\"let action of actions\"\r\n            [action]=\"action\"\r\n            [training]=\"training\"\r\n            [weekDays]=\"weekDays\"\r\n            [dayIndex]=\"dayIndex\"\r\n            [timeCreated]=\"timeCreated\"></bl-training-item-actions>\r\n    </div>\r\n</mat-card>\r\n");

/***/ }),

/***/ "8E6j":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/_lib/tzTokenizeDate/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tzTokenizeDate; });
/**
 * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
 * `date` as it will be rendered in the `timeZone`.
 */
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone)
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date)
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5,
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date)
  var filled = []
  for (var i = 0; i < formatted.length; i++) {
    var pos = typeToPos[formatted[i].type]

    if (pos >= 0) {
      filled[pos] = parseInt(formatted[i].value, 10)
    }
  }
  return filled
}

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, '')
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted)
  // var [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
  // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]]
}

// Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
// to get deterministic local date/time output according to the `en-US` locale which
// can be used to extract local time parts as necessary.
var dtfCache = {}
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
      second: '2-digit',
    }).format(new Date('2014-06-25T04:00:00.123Z'))
    var hourCycleSupported =
      testDateFormatted === '06/25/2014, 00:00:00' ||
      testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00'

    dtfCache[timeZone] = hourCycleSupported
      ? new Intl.DateTimeFormat('en-US', {
          hour12: false,
          timeZone: timeZone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      : new Intl.DateTimeFormat('en-US', {
          hourCycle: 'h23',
          timeZone: timeZone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
  }
  return dtfCache[timeZone]
}


/***/ }),

/***/ "8HUO":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: TrainingItemActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingItemActionsComponent", function() { return TrainingItemActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_training_item_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./training-item-actions.component.html */ "XSYt");
/* harmony import */ var _training_item_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-item-actions.component.scss */ "AxP3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_training_training_actions_delete_training_action_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/training/training-actions/delete-training-action.service */ "qK/Y");





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
    { type: src_app_services_training_training_actions_delete_training_action_service__WEBPACK_IMPORTED_MODULE_4__["DeleteTrainingActionService"] }
];
TrainingItemActionsComponent.propDecorators = {
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    training: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dayIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    weekDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    timeCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TrainingItemActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bl-training-item-actions',
        template: _raw_loader_training_item_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_training_item_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TrainingItemActionsComponent);



/***/ }),

/***/ "A2ZJ":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-icon {\n  color: #000000;\n  background-color: white;\n  padding: 3px;\n  border-radius: 8px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n\n.filters-wrapper {\n  display: flex;\n  align-items: flex-start;\n  column-gap: 10px;\n  margin: 8px 0;\n  padding: 5px 0;\n  border: 2px solid #009688;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.filters-wrapper .search-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  column-gap: 10px;\n  margin-left: 10px;\n}\n\n.filters-wrapper .search-wrapper .search-input {\n  width: 100%;\n  height: 22px;\n  border: 2px solid white;\n  border-radius: 6px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  font-family: \"Poppins\", sans-serif;\n}\n\n.filters-wrapper .search-wrapper .search-input:focus {\n  outline: none;\n  border: 2px solid #009688;\n  box-shadow: 0 0 10px #def2f1;\n}\n\n.filters-wrapper .search-wrapper .search-max-error {\n  font-size: 11px;\n  color: #c62828;\n  align-self: baseline;\n  padding-top: 2px;\n}\n\n.filters-wrapper .or-wrapper {\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  margin-right: 10px;\n}\n\n.filters-wrapper .or-wrapper .or {\n  color: #009688;\n  font-weight: 600;\n}\n\n@media (min-width: 640px) {\n  .filters-wrapper {\n    width: 850px;\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBhc3QtdHJhaW5pbmdzLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZGVmYXVsdC1wYWxsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUhBUFM7RUFRVCxlQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBS0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSFI7O0FBS1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5SEFsQ0M7RUFtQ0Qsa0NDaENGO0FENkJWOztBQUtZO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFIaEI7O0FBT1E7RUFDSSxlQ3pDTTtFRDBDTixjQzVDRDtFRDZDQyxvQkFBQTtFQUNBLGdCQUFBO0FBTFo7O0FBU0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUFI7O0FBU1E7RUFDSSxjQzdEQztFRDhERCxnQkFBQTtBQVBaOztBQVlBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7RUFUTjtBQUNGIiwiZmlsZSI6InBhc3QtdHJhaW5pbmdzLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdC1wYWxsZXR0ZSc7XHJcblxyXG4kYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMnB4IDJweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCA1cHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmlsdGVycy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYXJteS1ncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgLnNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbiAgICAgICAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcblxyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYXJteS1ncmVlbjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoLW1heC1lcnJvciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGVycm9yLWZvbnQtc2l6ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRkYXJrLXJlZDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5vci13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgIC5vciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYXJteS1ncmVlbjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgLmZpbHRlcnMtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDg1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiJGFybXktZ3JlZW46ICMwMDk2ODg7XHJcbiRsaWdodC1wZXJpd2lua2xlOiAjZGVkZmUxO1xyXG4kYmx1ZS1ncmV5OiAjOTM5NTllO1xyXG4kbGlnaHQtYmx1ZTogI2RlZjJmMTtcclxuJGRhcmstcmVkOiAjYzYyODI4O1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZXJyb3ItZm9udC1zaXplOiAxMXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "AGgl":
/*!***********************************************************************!*\
  !*** ./src/app/views/training/new-training/new-training.component.ts ***!
  \***********************************************************************/
/*! exports provided: NewTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTrainingComponent", function() { return NewTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_training_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-training.component.html */ "UCnu");
/* harmony import */ var _new_training_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-training.component.scss */ "UG29");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "iBYA");
/* harmony import */ var src_app_services_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/training/past-trainings.service */ "KVDu");
/* harmony import */ var _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/spinner-size.const */ "dKYD");
/* harmony import */ var _handlers_new_training_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../handlers/new-training.handler */ "gv4i");
/* harmony import */ var _helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-stream-data.helper */ "Kzd3");
/* harmony import */ var _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../models/training/new-training/empty-training.model */ "8Xo1");
/* harmony import */ var _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/training/new-training.service */ "NxwY");
/* harmony import */ var _validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../validators/shared/common.validators */ "RfZp");
















let NewTrainingComponent = class NewTrainingComponent {
    constructor(newTrainingService, pastTrainingService, sharedService, route) {
        this.newTrainingService = newTrainingService;
        this.pastTrainingService = pastTrainingService;
        this.sharedService = sharedService;
        this.route = route;
        this.editData = _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_13__["EMPTY_TRAINING_EDIT"];
        this.editMode = false;
        this.focusCounter = 0;
        this.trainingStream$ = undefined;
        this.trainingStream$ =
            this.route.params
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((params) => {
                if (params['id']) {
                    this.editMode = true;
                    this.editData._id = params['id'];
                    return this.pastTrainingService.getPastTraining(this.editData._id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((response) => {
                        var _a, _b;
                        this.editData = {
                            editedDate: (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.updatedAt) !== null && _b !== void 0 ? _b : new Date(),
                            editTraining: Object.assign(Object.assign({}, response === null || response === void 0 ? void 0 : response.Value), { editMode: true }),
                        };
                        this.newTrainingService.updateTrainingData(this.editData.editTraining);
                    }));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([
                        this.newTrainingService.allExercisesChanged$
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)),
                        this.newTrainingService.currentTrainingChanged$
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)),
                    ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(([exercises, training]) => {
                        var _a;
                        const currentTrainingState = Object.assign({}, training);
                        if (currentTrainingState) {
                            if (currentTrainingState.editMode && !this.editMode) {
                                this.newTrainingService.updateTrainingData(Object.assign(Object.assign({}, _models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_13__["EMPTY_TRAINING"]), { exercise: [Object(_models_training_new_training_empty_training_model__WEBPACK_IMPORTED_MODULE_13__["createEmptyExercise"])(exercises)], userId: (_a = currentTrainingState === null || currentTrainingState === void 0 ? void 0 : currentTrainingState.userId) !== null && _a !== void 0 ? _a : '' }));
                            }
                        }
                    }));
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(_ => this.sharedService.editingTraining$$.next(this.editMode)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(_ => this.newTrainingService.getExercises()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(_ => this.formInit()), Object(_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_12__["mapStreamData"])())));
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
        return _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_10__["SPINNER_SIZE"];
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
                .pipe(Object(_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_12__["mapStreamData"])()).subscribe((response) => {
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
                .pipe(Object(_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_12__["mapStreamData"])());
        }
    }
    formInit() {
        var _a, _b;
        const currentTrainingState = Object.assign({}, this.newTrainingService.getCurrentTrainingState());
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'bodyweight': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_handlers_new_training_handler__WEBPACK_IMPORTED_MODULE_11__["fillBodyweight"](currentTrainingState.bodyweight, ((_a = this.editData) === null || _a === void 0 ? void 0 : _a.editTraining) ? (_b = this.editData.editTraining) === null || _b === void 0 ? void 0 : _b.bodyweight : null), [_validators_shared_common_validators__WEBPACK_IMPORTED_MODULE_15__["isBroj"](), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(300)]),
            'exercise': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](currentTrainingState),
        });
    }
};
NewTrainingComponent.ctorParameters = () => [
    { type: _services_training_new_training_service__WEBPACK_IMPORTED_MODULE_14__["NewTrainingService"] },
    { type: src_app_services_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_9__["PastTrainingsService"] },
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
NewTrainingComponent.propDecorators = {
    bodyweightInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['bodyweightRef', {
                    read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
                },] }]
};
NewTrainingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bl-new-training',
        template: _raw_loader_new_training_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_new_training_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewTrainingComponent);



/***/ }),

/***/ "Ak4i":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings-filters/past-trainings-filters.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PastTrainingsFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastTrainingsFiltersComponent", function() { return PastTrainingsFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_past_trainings_filters_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./past-trainings-filters.component.html */ "/t0t");
/* harmony import */ var _past_trainings_filters_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./past-trainings-filters.component.scss */ "A2ZJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_input_maxlength_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constants/input-maxlength.const */ "O6kK");
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ "i3RA");










let PastTrainingsFiltersComponent = class PastTrainingsFiltersComponent {
    constructor(unsubscribeService, translateService, route) {
        var _a;
        this.unsubscribeService = unsubscribeService;
        this.translateService = translateService;
        this.route = route;
        this.keyUp$$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.trainingEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((event) => event.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((value) => value.trim().toLowerCase()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((value) => value.length <= 50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribeService))
            .subscribe((value) => this.trainingEmitted.next(value));
    }
    get inputMaxLength() {
        return _constants_input_maxlength_const__WEBPACK_IMPORTED_MODULE_8__["INPUT_MAX_LENGTH"];
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
    { type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__["UnsubscribeService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PastTrainingsFiltersComponent.propDecorators = {
    trainingEmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['search', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
PastTrainingsFiltersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bl-past-trainings-filters',
        template: _raw_loader_past_trainings_filters_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_9__["UnsubscribeService"]],
        styles: [_past_trainings_filters_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PastTrainingsFiltersComponent);



/***/ }),

/***/ "AxP3":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".action {\n  padding: 10px;\n  color: #009688;\n  font-size: 26px;\n  border-left: 1px solid #dedfe1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0cmFpbmluZy1pdGVtLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGRlZmF1bHQtcGFsbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxjQ0pTO0VES1QsZUFBQTtFQUNBLDhCQUFBO0FBREoiLCJmaWxlIjoidHJhaW5pbmctaXRlbS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4uYWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogJGFybXktZ3JlZW47XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRsaWdodC1wZXJpd2lua2xlO1xyXG59XHJcbiIsIiRhcm15LWdyZWVuOiAjMDA5Njg4O1xyXG4kbGlnaHQtcGVyaXdpbmtsZTogI2RlZGZlMTtcclxuJGJsdWUtZ3JleTogIzkzOTU5ZTtcclxuJGxpZ2h0LWJsdWU6ICNkZWYyZjE7XHJcbiRkYXJrLXJlZDogI2M2MjgyODtcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGVycm9yLWZvbnQtc2l6ZTogMTFweDtcclxuIl19 */");

/***/ }),

/***/ "J+st":
/*!******************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/format/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/format */ "sWYD");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatters */ "utPq");
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate */ "/jOx");




var tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g

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
 * import { eoLocale } from 'date-fns/esm/locale/eo'
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
  var formatStr = String(dirtyFormatStr)
  var options = dirtyOptions || {}

  var matches = formatStr.match(tzFormattingTokensRegExp)
  if (matches) {
    var date = Object(_toDate__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, options)
    formatStr = matches.reduce(function (result, token) {
      return token[0] === "'"
        ? result
        : result.replace(token, "'" + _formatters__WEBPACK_IMPORTED_MODULE_1__["default"][token[0]](date, token, null, options) + "'")
    }, formatStr)
  }

  return Object(date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, formatStr, options)
}


/***/ }),

/***/ "KIKB":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/getTimezoneOffset/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTimezoneOffset; });
/* harmony import */ var _lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/tzParseTimezone */ "wUsO");


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
  return -Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_0__["default"])(timeZone, date)
}


/***/ }),

/***/ "KVDu":
/*!*************************************************************!*\
  !*** ./src/app/services/training/past-trainings.service.ts ***!
  \*************************************************************/
/*! exports provided: PastTrainingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastTrainingsService", function() { return PastTrainingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/training/past-trainings/map-past-trainings-dates.helper */ "3gs1");






const ROUTE_PREFIX = '/training/';
let PastTrainingsService = class PastTrainingsService {
    constructor(http) {
        this.http = http;
    }
    searchPastTrainings(searchValue, pageSize, currentPage) {
        const params = `?searchValue=${searchValue}&size=${pageSize.toString()}&page=${currentPage.toString()}`;
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BACKEND}${ROUTE_PREFIX}search_trainings${params}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => Object(_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_5__["mapDateInterval"])(response)));
    }
    getPastTrainings(currentDate) {
        const params = `?currentDate=${currentDate}`;
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BACKEND}${ROUTE_PREFIX}past_trainings${params}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => Object(_helpers_training_past_trainings_map_past_trainings_dates_helper__WEBPACK_IMPORTED_MODULE_5__["mapDateInterval"])(response)));
    }
    getPastTraining(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BACKEND}${ROUTE_PREFIX}past_trainings/${id}`);
    }
};
PastTrainingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PastTrainingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], PastTrainingsService);



/***/ }),

/***/ "Kzd3":
/*!***************************************************************************!*\
  !*** ./src/app/helpers/training/past-trainings/map-stream-data.helper.ts ***!
  \***************************************************************************/
/*! exports provided: mapStreamData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStreamData", function() { return mapStreamData; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


const mapStreamData = () => (source) => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((trainingData) => ({
    IsLoading: false,
    Value: trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value,
    IsError: false,
})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(_ => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
    IsLoading: false,
    IsError: true,
})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])({
    IsLoading: true,
    IsError: false,
}));


/***/ }),

/***/ "MB6o":
/*!****************************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/training-item/training-item.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TrainingItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingItemComponent", function() { return TrainingItemComponent; });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_training_item_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./training-item.component.html */ "76Ze");
/* harmony import */ var _training_item_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training-item.component.scss */ "4tCo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../models/common/interfaces/common.model */ "WGPv");
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/shared/shared.service */ "iBYA");
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/shared/unsubscribe.service */ "i3RA");











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
    this.timeCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(this.sharedService.subtractTwoHours(new Date(this.training.createdAt)), 'HH:mm');
    this.dayIndex = this.sharedService.subtractTwoHours(new Date(this.training.createdAt)).getDay();
  }

  trainingClicked() {
    var _this = this;

    return Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])( /*#__PURE__*/function () {
        var _ref = Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          _this.sharedService.pastTrainingsQueryParams$$.next(params);

          localStorage.setItem(_models_common_interfaces_common_model__WEBPACK_IMPORTED_MODULE_8__["LocalStorageItems"].QUERY_PARAMS, JSON.stringify(params));
          yield _this.router.navigate(['/training/new-training', _this.training._id]);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribeService)).subscribe();
    })();
  }

};

TrainingItemComponent.ctorParameters = () => [{
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__["UnsubscribeService"]
}, {
  type: _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
}];

TrainingItemComponent.propDecorators = {
  training: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  exerciseNameEls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"],
    args: ['exerciseNameEl', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }]
  }]
};
TrainingItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
  selector: 'bl-training-item',
  template: _raw_loader_training_item_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_10__["UnsubscribeService"]],
  styles: [_training_item_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
})], TrainingItemComponent);


/***/ }),

/***/ "O6kK":
/*!****************************************************!*\
  !*** ./src/app/constants/input-maxlength.const.ts ***!
  \****************************************************/
/*! exports provided: INPUT_MAX_LENGTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_MAX_LENGTH", function() { return INPUT_MAX_LENGTH; });
const INPUT_MAX_LENGTH = 50;


/***/ }),

/***/ "OmKt":
/*!***************************************************************************!*\
  !*** ./src/app/views/training/past-trainings/past-trainings.component.ts ***!
  \***************************************************************************/
/*! exports provided: PastTrainingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastTrainingsComponent", function() { return PastTrainingsComponent; });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_past_trainings_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./past-trainings.component.html */ "YhkR");
/* harmony import */ var _past_trainings_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./past-trainings.component.scss */ "/GTp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns-tz */ "cb+M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "iBYA");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../constants/spinner-size.const */ "dKYD");
/* harmony import */ var _helpers_months_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helpers/months.helper */ "5qPs");
/* harmony import */ var _helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helpers/training/past-trainings/map-stream-data.helper */ "Kzd3");
/* harmony import */ var _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../models/common/interfaces/paginator.model */ "vAJ8");
/* harmony import */ var _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../models/training/past-trainings/past-trainings.model */ "XcPp");
/* harmony import */ var _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../services/shared/unsubscribe.service */ "i3RA");
/* harmony import */ var _services_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../services/training/past-trainings.service */ "KVDu");
/* harmony import */ var _helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../helpers/is-never-check.helper */ "OMtv");






















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
    this.size = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_17__["DEFAULT_SIZE"];
    this.page = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_17__["INITIAL_PAGE"];
    this.isNextPage = true;
    this.isPreviousPage = true;
    this.pastTrainings$ = undefined;
    this.sharedService.deletedTraining$$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.unsubscribeService)).subscribe(response => {
      this.pastTrainings$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(response).pipe(Object(_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_16__["mapStreamData"])());
      this.changeDetectorRef.markForCheck();
    });
    this.page = ((_a = this.route.snapshot.queryParamMap) === null || _a === void 0 ? void 0 : _a.get('page')) ? +this.route.snapshot.queryParamMap.get('page') : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_17__["INITIAL_PAGE"];
    this.size = ((_b = this.route.snapshot.queryParamMap) === null || _b === void 0 ? void 0 : _b.get('size')) ? +this.route.snapshot.queryParamMap.get('size') : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_17__["DEFAULT_SIZE"];
    const searchFilter = (_c = this.route.snapshot.queryParamMap) === null || _c === void 0 ? void 0 : _c.get('search');

    if (searchFilter) {
      this.pastTrainings$ = this.pastTrainingsService.searchPastTrainings(searchFilter.trim().toLowerCase(), this.size, this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(x => this.handleArrows(x)), Object(_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_16__["mapStreamData"])());
    } else {
      this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(response => this.handleArrows(response)), Object(_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_16__["mapStreamData"])());
    }
  }

  set timePeriodEl(timePeriodElement) {
    var _a;

    if (timePeriodElement) {
      const trainingElement = (_a = this.trainingItemWrapper) === null || _a === void 0 ? void 0 : _a.nativeElement;

      if (trainingElement) {
        this.isSearch$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.unsubscribeService)).subscribe(isSearch => {
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
    return _constants_spinner_size_const__WEBPACK_IMPORTED_MODULE_14__["SPINNER_SIZE"];
  }

  get dateFormat() {
    return _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_18__["TEMPLATE_DATE_FORMAT"];
  }

  get maxTrainingsPerPage() {
    return _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_17__["DEFAULT_SIZE"];
  }

  get isSearch$() {
    return this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(params => !!(params === null || params === void 0 ? void 0 : params.get('search'))));
  }

  searchEmitted($event) {
    var _this = this;

    this.page = _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_17__["INITIAL_PAGE"];
    this.pastTrainings$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])($event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(value => this.pastTrainingsService.searchPastTrainings(value, this.size, this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])( /*#__PURE__*/function () {
      var _ref = Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
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
    }()), Object(_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_16__["mapStreamData"])())));
  }

  onPaginatorChanged($event) {
    var _this2 = this;

    var _a, _b, _c, _d;

    if ($event === null || $event === void 0 ? void 0 : $event.IsSearch) {
      const currentSearchValue = (_b = (_a = this.route.snapshot.queryParamMap) === null || _a === void 0 ? void 0 : _a.get('search')) !== null && _b !== void 0 ? _b : undefined;
      this.pastTrainings$ = this.pastTrainingsService.searchPastTrainings((_d = (_c = currentSearchValue === null || currentSearchValue === void 0 ? void 0 : currentSearchValue.trim()) === null || _c === void 0 ? void 0 : _c.toLowerCase()) !== null && _d !== void 0 ? _d : '', $event.Size, $event.Page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])( /*#__PURE__*/function () {
        var _ref2 = Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
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
      }()), Object(_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_16__["mapStreamData"])());
    } else {
      this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.calculateDate($event.PageType, $event.DateInterval, $event.EarliestTrainingDate)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])( /*#__PURE__*/function () {
        var _ref3 = Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this2.handleArrows(response);

          yield _this2.router.navigate([], {
            relativeTo: _this2.route,
            queryParams: _this2.handleQueryParams(response)
          });
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }()), Object(_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_16__["mapStreamData"])());
    }
  }

  tryAgain() {
    this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams()).pipe(Object(_helpers_training_past_trainings_map_stream_data_helper__WEBPACK_IMPORTED_MODULE_16__["mapStreamData"])());
  }

  setTimePeriod(dateInterval) {
    const isDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(dateInterval.StartDate, dateInterval.EndDate);

    if (isDay) {
      return this.translateService.stream(`common.day`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => this.generateHeaderTitle(value, dateInterval.StartDate)));
    }

    const isWeek = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameWeek"])(dateInterval.StartDate, dateInterval.EndDate, {
      weekStartsOn: 1
    });

    if (isWeek) {
      return this.translateService.stream('common.week').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
    }

    const isMonth = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameMonth"])(dateInterval.StartDate, dateInterval.EndDate);

    if (isMonth) {
      const month = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["getMonth"])(dateInterval.StartDate);
      return this.translateService.stream(`common.months.${_helpers_months_helper__WEBPACK_IMPORTED_MODULE_15__["ALL_MONTHS"][month]}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
    }

    return this.translateService.stream('common.period').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)));
  }

  updatePageAndSize(response) {
    var _a, _b, _c, _d;

    this.page = (_b = (_a = response === null || response === void 0 ? void 0 : response.Value) === null || _a === void 0 ? void 0 : _a.CurrentPage) !== null && _b !== void 0 ? _b : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_17__["INITIAL_PAGE"];
    this.size = (_d = (_c = response === null || response === void 0 ? void 0 : response.Value) === null || _c === void 0 ? void 0 : _c.Size) !== null && _d !== void 0 ? _d : _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_17__["DEFAULT_SIZE"];
    this.changeDetectorRef.markForCheck();
  }

  calculateDate(page, dateInterval, earliestTrainingDate) {
    switch (page) {
      case 'Previous':
        {
          return Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["subDays"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_9__["utcToZonedTime"])(dateInterval.StartDate, _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].TIMEZONE), 7);
        }

      case 'Next':
        {
          return Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["addDays"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_9__["utcToZonedTime"])(dateInterval.StartDate, _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].TIMEZONE), 7);
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
        return Object(_helpers_is_never_check_helper__WEBPACK_IMPORTED_MODULE_21__["isNeverCheck"])(page);
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
          return Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_9__["utcToZonedTime"])((_e = (_d = (_c = (_b = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _b === void 0 ? void 0 : _b.Results) === null || _c === void 0 ? void 0 : _c.Dates) === null || _d === void 0 ? void 0 : _d.StartDate) !== null && _e !== void 0 ? _e : new Date(), _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].TIMEZONE), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_18__["QUERY_PARAMS_DATE_FORMAT"]);
        } else if (queryParam === 'endDate') {
          return Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_9__["utcToZonedTime"])((_j = (_h = (_g = (_f = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _f === void 0 ? void 0 : _f.Results) === null || _g === void 0 ? void 0 : _g.Dates) === null || _h === void 0 ? void 0 : _h.EndDate) !== null && _j !== void 0 ? _j : new Date(), _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].TIMEZONE), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_18__["QUERY_PARAMS_DATE_FORMAT"]);
        } else {
          return this.size.toString();
        }
      } else {
        return undefined;
      }
    } else {
      if (queryParam === 'startDate') {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_9__["utcToZonedTime"])((_o = (_m = (_l = (_k = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _k === void 0 ? void 0 : _k.Results) === null || _l === void 0 ? void 0 : _l.Dates) === null || _m === void 0 ? void 0 : _m.StartDate) !== null && _o !== void 0 ? _o : new Date(), _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].TIMEZONE), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_18__["QUERY_PARAMS_DATE_FORMAT"]);
      } else if (queryParam === 'endDate') {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_9__["utcToZonedTime"])((_s = (_r = (_q = (_p = trainingData === null || trainingData === void 0 ? void 0 : trainingData.Value) === null || _p === void 0 ? void 0 : _p.Results) === null || _q === void 0 ? void 0 : _q.Dates) === null || _r === void 0 ? void 0 : _r.EndDate) !== null && _s !== void 0 ? _s : new Date(), _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].TIMEZONE), _models_training_past_trainings_past_trainings_model__WEBPACK_IMPORTED_MODULE_18__["QUERY_PARAMS_DATE_FORMAT"]);
      } else {
        return undefined;
      }
    }
  }

  handleArrows(x) {
    var _a, _b, _c, _d, _e, _f, _g;

    if (((_a = x === null || x === void 0 ? void 0 : x.Value) === null || _a === void 0 ? void 0 : _a.TotalCount) <= _models_common_interfaces_paginator_model__WEBPACK_IMPORTED_MODULE_17__["DEFAULT_SIZE"]) {
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
    return Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_9__["utcToZonedTime"])(new Date(utc), _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].TIMEZONE);
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
  type: _services_training_past_trainings_service__WEBPACK_IMPORTED_MODULE_20__["PastTrainingsService"]
}, {
  type: _services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_19__["UnsubscribeService"]
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
}, {
  type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
}];

PastTrainingsComponent.propDecorators = {
  trainingItemWrapper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
    args: ['itemWrapper', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
    }]
  }],
  timePeriodEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
    args: ['timePeriod', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
    }]
  }]
};
PastTrainingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
  selector: 'bl-past-trainings',
  template: _raw_loader_past_trainings_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
  providers: [_services_shared_unsubscribe_service__WEBPACK_IMPORTED_MODULE_19__["UnsubscribeService"]],
  styles: [_past_trainings_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
})], PastTrainingsComponent);


/***/ }),

/***/ "UCnu":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/training/new-training/new-training.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(trainingStream$ | async) as trainingData\">\r\n    <mat-spinner\r\n        *ngIf=\"trainingData?.IsLoading; else valueOrError\"\r\n        class=\"spinner\"\r\n        [diameter]=\"spinnerSize\"></mat-spinner>\r\n    <ng-template #valueOrError>\r\n        <section\r\n            *ngIf=\"trainingData?.Value\"\r\n            class=\"section\">\r\n            <form\r\n                *ngIf=\"form\"\r\n                class=\"main-form\"\r\n                autocomplete=\"off\"\r\n                [formGroup]=\"form\">\r\n                <mat-form-field\r\n                    appearance=\"outline\"\r\n                    class=\"bodyweight\">\r\n                    <mat-label class=\"label\">\r\n                        {{ 'training.new_training.pick_bodyweight' | translate }}\r\n                    </mat-label>\r\n                    <input\r\n                        #bodyweightRef\r\n                        matInput\r\n                        type=\"number\"\r\n                        formControlName=\"bodyweight\"\r\n                        (input)=\"onBodyweightChange(bodyweightRef.value)\">\r\n                    <mat-error *ngIf=\"(bodyweight.touched || bodyweight.dirty) && !bodyweight.valid\">\r\n                        <mat-error\r\n                            *ngIf=\"bodyweight?.errors?.onlyNumbers\"\r\n                            class=\"bodyweight-error\">\r\n                            {{ 'training.new_training.errors.only_numbers' | translate }}\r\n                        </mat-error>\r\n                        <mat-error\r\n                            *ngIf=\"bodyweight?.errors?.min\"\r\n                            class=\"bodyweight-error\">\r\n                            {{ 'training.new_training.errors.bodyweight_min' | translate }}\r\n                        </mat-error>\r\n                        <mat-error\r\n                            *ngIf=\"bodyweight?.errors?.max\"\r\n                            class=\"bodyweight-error\">\r\n                            {{ 'training.new_training.errors.bodyweight_max' | translate }}\r\n                        </mat-error>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <bl-single-exercise\r\n                    formControlName=\"exercise\"\r\n                    [bodyweight]=\"bodyweight\"\r\n                    [editData]=\"editData\"\r\n                    [isLoading]=\"trainingData.IsLoading\"\r\n                    [editMode]=\"editMode\"></bl-single-exercise>\r\n            </form>\r\n        </section>\r\n        <ng-container *ngIf=\"trainingData?.IsError\">\r\n            <div class=\"error-wrapper\">\r\n                <img\r\n                    class=\"error-image\"\r\n                    src=\"../../../../assets/svgs/error1.svg\">\r\n                <h3 class=\"error-title\">\r\n                    {{ 'training.new_training.errors.new_training_error_title' | translate }}\r\n                </h3>\r\n                <span\r\n                    *ngIf=\"editMode\"\r\n                    class=\"error-description\">\r\n                    {{ 'training.new_training.errors.new_training_error_description' | translate }}\r\n                </span>\r\n                <span\r\n                    *ngIf=\"!editMode\"\r\n                    class=\"error-description\">\r\n                    {{ 'training.new_training.errors.new_training_error_load' | translate }}\r\n                </span>\r\n                <button\r\n                    mat-raised-button\r\n                    color=\"primary\"\r\n                    type=\"button\"\r\n                    (click)=\"tryAgain()\">\r\n                    {{ 'common.try_again' | translate }}\r\n                </button>\r\n            </div>\r\n        </ng-container>\r\n    </ng-template>\r\n</ng-container>\r\n");

/***/ }),

/***/ "UG29":
/*!*************************************************************************!*\
  !*** ./src/app/views/training/new-training/new-training.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section {\n  margin-top: 56px;\n}\n\n.spinner {\n  position: absolute;\n  left: 45%;\n  top: 45%;\n}\n\n.main-form {\n  padding-top: 32px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bodyweight {\n  width: 300px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.bodyweight-error {\n  color: #c62828;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.error-wrapper {\n  width: 250px;\n  margin: 80px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.error-title {\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n\n.error-description {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 24px;\n  text-align: center;\n  color: #93959e;\n}\n\n.error-image {\n  width: 250px;\n  height: 200px;\n}\n\n@media (min-width: 640px) {\n  .spinner {\n    top: 50%;\n    left: 50%;\n  }\n\n  .error-wrapper {\n    width: 300px;\n    left: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmV3LXRyYWluaW5nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZGVmYXVsdC1wYWxsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGtDQ2pCTTtBRGdCVjs7QUFJQTtFQUNJLGNDdEJPO0VEdUJQLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ2hEUTtBRCtDWjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFFSTtJQUNJLFFBQUE7SUFDQSxTQUFBO0VBRk47O0VBS0U7SUFDSSxZQUFBO0lBQ0EsU0FBQTtFQUZOO0FBQ0YiLCJmaWxlIjoibmV3LXRyYWluaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHQtcGFsbGV0dGUuc2Nzcyc7XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICB0b3A6IDQ1JTtcclxufVxyXG5cclxuLm1haW4tZm9ybSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2R5d2VpZ2h0IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxufVxyXG5cclxuLmJvZHl3ZWlnaHQtZXJyb3Ige1xyXG4gICAgY29sb3I6ICRkYXJrLXJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uZXJyb3Itd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDgwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmVycm9yLWRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJGJsdWUtZ3JleTtcclxufVxyXG5cclxuLmVycm9yLWltYWdlIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG5cclxuICAgIC5zcGlubmVyIHtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9yLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIkYXJteS1ncmVlbjogIzAwOTY4ODtcclxuJGxpZ2h0LXBlcml3aW5rbGU6ICNkZWRmZTE7XHJcbiRibHVlLWdyZXk6ICM5Mzk1OWU7XHJcbiRsaWdodC1ibHVlOiAjZGVmMmYxO1xyXG4kZGFyay1yZWQ6ICNjNjI4Mjg7XHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRlcnJvci1mb250LXNpemU6IDExcHg7XHJcbiJdfQ== */");

/***/ }),

/***/ "XSYt":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/training/past-trainings/training-item/training-item-actions/training-item-actions.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-icon\r\n    class=\"action\"\r\n    matTooltipClass=\"tooltip\"\r\n    [matTooltip]=\"(action | mapTrainingItemActions: 'tooltip') | translate\"\r\n    (click)=\"$event.stopPropagation(); performAction(action)\">\r\n    {{ action | mapTrainingItemActions: 'icon' }}\r\n</mat-icon>\r\n\r\n");

/***/ }),

/***/ "YhkR":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/training/past-trainings/past-trainings.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"pastTrainings$ | async as pastTrainings\">\r\n    <section class=\"main-section\">\r\n        <ng-container *ngIf=\"pastTrainings?.IsError; else valueOrLoading\">\r\n            <div class=\"error-wrapper\">\r\n                <img\r\n                    class=\"error-image\"\r\n                    src=\"../../../../assets/svgs/error1.svg\">\r\n                <h3 class=\"error-title\">\r\n                    {{ 'training.past_trainings.errors.past_trainings_error_title' | translate }}\r\n                </h3>\r\n                <span class=\"error-description\">\r\n                    {{ 'training.past_trainings.errors.past_trainings_error_description' | translate }}\r\n                </span>\r\n                <button\r\n                    mat-raised-button\r\n                    color=\"primary\"\r\n                    type=\"button\"\r\n                    (click)=\"tryAgain()\">\r\n                    {{ 'common.try_again' | translate }}\r\n                </button>\r\n            </div>\r\n        </ng-container>\r\n        <ng-template #valueOrLoading>\r\n            <bl-past-trainings-filters (trainingEmitted)=\"searchEmitted($event)\"></bl-past-trainings-filters>\r\n            <ng-container *ngIf=\"pastTrainings?.IsLoading; else value\">\r\n                <mat-spinner\r\n                    class=\"spinner\"\r\n                    [diameter]=\"spinnerSize\"></mat-spinner>\r\n            </ng-container>\r\n            <ng-template #value>\r\n                <ng-container *ngIf=\"(isSearch$ | async) && pastTrainings?.Value?.TotalCount === 0; else otherCases\">\r\n                    <div class=\"search-no-result-wrapper\">\r\n                        <img\r\n                            class=\"search-not-found-img\"\r\n                            src=\"../../../../assets/svgs/not-found.svg\">\r\n                        <span class=\"search-not-found-title\">\r\n                            {{ 'training.past_trainings.filters.search_no_result_title' | translate }}\r\n                        </span>\r\n                        <span class=\"search-not-found-description\">\r\n                            {{ 'training.past_trainings.filters.search_no_result_description' | translate }}\r\n                        </span>\r\n                    </div>\r\n                </ng-container>\r\n                <ng-template #otherCases>\r\n                    <mat-card class=\"card-info-wrapper\">\r\n                        <mat-card-title class=\"header-title\">\r\n                            <div\r\n                                #timePeriod\r\n                                [innerHTML]=\"setTimePeriod(pastTrainings.Value?.Results?.Dates) | async\"></div>\r\n                        </mat-card-title>\r\n                        <div class=\"footer\">\r\n                            <div class=\"food-subtitle\">\r\n                                <strong class=\"food-subtitle--txt\">\r\n                                    {{ ('common.food' | translate) + ': ' }}\r\n                                </strong>\r\n                                <span>{{ food + ' ' + ('common.kcal' | translate) }}</span>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card>\r\n                    <div\r\n                        *ngIf=\"pastTrainings.Value?.TotalCount > 0; else noTrainings\"\r\n                        #itemWrapper\r\n                        class=\"training-item-wrapper\"\r\n                        [class.no-trainings]=\"pastTrainings.Value?.TotalCount === 0\">\r\n                        <bl-training-item\r\n                            *ngFor=\"let training of pastTrainings.Value?.Results?.Trainings\"\r\n                            [training]=\"training\"></bl-training-item>\r\n                    </div>\r\n                    <ng-template #noTrainings>\r\n                        <section class=\"no-trainings\">\r\n                            <ng-container *ngIf=\"!(isSearch$ | async) && pastTrainings.Value?.TotalCount === 0;\">\r\n                                <h1 class=\"no-trainings-title\">\r\n                                    {{ 'training.past_trainings.no_trainings' | translate }}\r\n                                </h1>\r\n                                <button\r\n                                    mat-raised-button\r\n                                    class=\"no-trainings-button\"\r\n                                    type=\"button\"\r\n                                    routerLink=\"/training/new-training\"\r\n                                    color=\"primary\">\r\n                                    {{ 'training.past_trainings.log_training' | translate }}\r\n                                </button>\r\n                            </ng-container>\r\n                        </section>\r\n                    </ng-template>\r\n                    <bl-pagination\r\n                        [isSearch]=\"isSearch$ | async\"\r\n                        [page]=\"page\"\r\n                        [size]=\"size\"\r\n                        [isPreviousPage]=\"isPreviousPage\"\r\n                        [isNextPage]=\"isNextPage\"\r\n                        [data]=\"pastTrainings\"\r\n                        (paginatorChanged)=\"onPaginatorChanged($event)\"></bl-pagination>\r\n                </ng-template>\r\n            </ng-template>\r\n        </ng-template>\r\n    </section>\r\n</ng-container>\r\n");

/***/ }),

/***/ "ZWSW":
/*!*************************************************************!*\
  !*** ./src/app/modules/training/training-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TrainingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingRoutingModule", function() { return TrainingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/training/new-training/new-training.component */ "AGgl");
/* harmony import */ var _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings.component */ "OmKt");





const routes = [
    {
        path: 'new-training',
        component: _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_3__["NewTrainingComponent"],
    },
    {
        path: 'new-training/:id',
        component: _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_3__["NewTrainingComponent"],
    },
    {
        path: 'past-trainings',
        component: _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_4__["PastTrainingsComponent"],
    },
];
let TrainingRoutingModule = class TrainingRoutingModule {
};
TrainingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrainingRoutingModule);



/***/ }),

/***/ "cb+M":
/*!***********************************************!*\
  !*** ./node_modules/date-fns-tz/esm/index.js ***!
  \***********************************************/
/*! exports provided: format, getTimezoneOffset, toDate, utcToZonedTime, zonedTimeToUtc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format/index.js */ "J+st");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _format_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _getTimezoneOffset_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTimezoneOffset/index.js */ "KIKB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimezoneOffset", function() { return _getTimezoneOffset_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDate/index.js */ "/jOx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _utcToZonedTime_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utcToZonedTime/index.js */ "eLKX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcToZonedTime", function() { return _utcToZonedTime_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _zonedTimeToUtc_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zonedTimeToUtc/index.js */ "f29V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zonedTimeToUtc", function() { return _zonedTimeToUtc_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.








/***/ }),

/***/ "eLKX":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/utcToZonedTime/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return utcToZonedTime; });
/* harmony import */ var _lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/tzParseTimezone */ "wUsO");
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate */ "/jOx");



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
  var date = Object(_toDate__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, options)

  var offsetMilliseconds = Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_0__["default"])(timeZone, date, true) || 0

  var d = new Date(date.getTime() - offsetMilliseconds)

  var zonedTime = new Date(
    d.getUTCFullYear(),
    d.getUTCMonth(),
    d.getUTCDate(),
    d.getUTCHours(),
    d.getUTCMinutes(),
    d.getUTCSeconds(),
    d.getUTCMilliseconds()
  )

  return zonedTime
}


/***/ }),

/***/ "f29V":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/zonedTimeToUtc/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return zonedTimeToUtc; });
/* harmony import */ var date_fns_esm_lib_cloneObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/_lib/cloneObject */ "emD/");
/* harmony import */ var date_fns_esm_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/esm/format */ "sWYD");
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate */ "/jOx");




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
  if (date instanceof Date) {
    date = Object(date_fns_esm_format__WEBPACK_IMPORTED_MODULE_1__["default"])(date, "yyyy-MM-dd'T'HH:mm:ss.SSS")
  }
  var extendedOptions = Object(date_fns_esm_lib_cloneObject__WEBPACK_IMPORTED_MODULE_0__["default"])(options)
  extendedOptions.timeZone = timeZone
  return Object(_toDate__WEBPACK_IMPORTED_MODULE_2__["default"])(date, extendedOptions)
}


/***/ }),

/***/ "fy56":
/*!*****************************************************!*\
  !*** ./src/app/modules/training/training.module.ts ***!
  \*****************************************************/
/*! exports provided: TrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModule", function() { return TrainingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material.module */ "vvyD");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module */ "f2TX");
/* harmony import */ var _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../views/training/new-training/new-training.component */ "AGgl");
/* harmony import */ var _views_training_past_trainings_past_trainings_filters_past_trainings_filters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings-filters/past-trainings-filters.component */ "Ak4i");
/* harmony import */ var _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../views/training/past-trainings/past-trainings.component */ "OmKt");
/* harmony import */ var _views_training_past_trainings_training_item_training_item_actions_training_item_actions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../views/training/past-trainings/training-item/training-item-actions/training-item-actions.component */ "8HUO");
/* harmony import */ var _views_training_past_trainings_training_item_training_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../views/training/past-trainings/training-item/training-item.component */ "MB6o");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared.module */ "jvDc");
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./training-routing.module */ "ZWSW");

















const COMPONENTS = [
    _views_training_new_training_new_training_component__WEBPACK_IMPORTED_MODULE_10__["NewTrainingComponent"],
    _views_training_past_trainings_past_trainings_component__WEBPACK_IMPORTED_MODULE_12__["PastTrainingsComponent"],
    _views_training_past_trainings_training_item_training_item_component__WEBPACK_IMPORTED_MODULE_14__["TrainingItemComponent"],
    _views_training_past_trainings_training_item_training_item_actions_training_item_actions_component__WEBPACK_IMPORTED_MODULE_13__["TrainingItemActionsComponent"],
    _views_training_past_trainings_past_trainings_filters_past_trainings_filters_component__WEBPACK_IMPORTED_MODULE_11__["PastTrainingsFiltersComponent"],
];
const EXTERNAL_IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
    _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
];
const IMPORTS = [
    _training_routing_module__WEBPACK_IMPORTED_MODULE_16__["TrainingRoutingModule"],
    _shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
];
const PIPES_MODULES = [_pipes_training_past_trainings_show_all_exercises_show_all_exercises_module__WEBPACK_IMPORTED_MODULE_9__["ShowAllExercisesModule"]];
let TrainingModule = class TrainingModule {
};
TrainingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [...COMPONENTS],
        imports: [
            ...EXTERNAL_IMPORTS,
            ...IMPORTS,
            ...PIPES_MODULES,
        ],
        exports: [...COMPONENTS],
        providers: [
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"],
                useValue: 'en-GB',
            },
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
        ],
    })
], TrainingModule);



/***/ }),

/***/ "gv4i":
/*!**************************************************!*\
  !*** ./src/app/handlers/new-training.handler.ts ***!
  \**************************************************/
/*! exports provided: fillBodyweight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillBodyweight", function() { return fillBodyweight; });
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

/***/ "utPq":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/format/formatters/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tzIntlTimeZoneName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/tzIntlTimeZoneName */ "zlKo");
/* harmony import */ var _lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/tzParseTimezone */ "wUsO");



var MILLISECONDS_IN_MINUTE = 60 * 1000

var formatters = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = options.timeZone
      ? Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__["default"])(options.timeZone, originalDate) / MILLISECONDS_IN_MINUTE
      : originalDate.getTimezoneOffset()

    if (timezoneOffset === 0) {
      return 'Z'
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = options.timeZone
      ? Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__["default"])(options.timeZone, originalDate) / MILLISECONDS_IN_MINUTE
      : originalDate.getTimezoneOffset()

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (GMT)
  O: function (date, token, localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = options.timeZone
      ? Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__["default"])(options.timeZone, originalDate) / MILLISECONDS_IN_MINUTE
      : originalDate.getTimezoneOffset()

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, localize, options) {
    var originalDate = options._originalDate || date

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return Object(_lib_tzIntlTimeZoneName__WEBPACK_IMPORTED_MODULE_0__["default"])('short', originalDate, options)
      // Long
      case 'zzzz':
      default:
        return Object(_lib_tzIntlTimeZoneName__WEBPACK_IMPORTED_MODULE_0__["default"])('long', originalDate, options)
    }
  },
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : ''
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return sign + output
}

function formatTimezone(offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2)
  var minutes = addLeadingZeros(absOffset % 60, 2)
  return sign + hours + delimeter + minutes
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+'
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2)
  }
  return formatTimezone(offset, dirtyDelimeter)
}

function formatTimezoneShort(offset, dirtyDelimeter) {
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  if (minutes === 0) {
    return sign + String(hours)
  }
  var delimeter = dirtyDelimeter || ''
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2)
}

/* harmony default export */ __webpack_exports__["default"] = (formatters);


/***/ }),

/***/ "wUsO":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tzParseTimezone; });
/* harmony import */ var _tzTokenizeDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tzTokenizeDate/index.js */ "8E6j");


var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000

var patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
}

// Parse various time zone offset formats to an offset in milliseconds
function tzParseTimezone(timezoneString, date, isUtcDate) {
  var token
  var absoluteOffset

  // Z
  token = patterns.timezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  var hours

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString)
  if (token) {
    hours = parseInt(token[2], 10)

    if (!validateTimezone(hours)) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR
    return token[1] === '+' ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString)
  if (token) {
    hours = parseInt(token[2], 10)
    var minutes = parseInt(token[3], 10)

    if (!validateTimezone(hours, minutes)) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE
    return token[1] === '+' ? -absoluteOffset : absoluteOffset
  }

  // IANA time zone
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now())
    var utcDate = isUtcDate ? date : toUtcDate(date)

    var offset = calcOffset(utcDate, timezoneString)

    var fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString)

    return -fixedOffset
  }

  return 0
}

function toUtcDate(date) {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  )
}

function calcOffset(date, timezoneString) {
  var tokens = Object(_tzTokenizeDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, timezoneString)

  var asUTC = Date.UTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5])

  var asTS = date.getTime()
  var over = asTS % 1000
  asTS -= over >= 0 ? over : 1000 + over
  return asUTC - asTS
}

function fixOffset(date, offset, timezoneString) {
  var localTS = date.getTime()

  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - offset

  // Test whether the zone matches the offset for this ts
  var o2 = calcOffset(new Date(utcGuess), timezoneString)

  // If so, offset didn't change and we're done
  if (offset === o2) {
    return offset
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= o2 - offset

  // If that gives us the local time we want, we're done
  var o3 = calcOffset(new Date(utcGuess), timezoneString)
  if (o2 === o3) {
    return o2
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return Math.max(o2, o3)
}

function validateTimezone(hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false
  }

  return true
}

function isValidTimezoneIANAString(timeZoneString) {
  try {
    Intl.DateTimeFormat(undefined, {timeZone: timeZoneString});
    return true;
  } catch (error) {
    return false;
  }
}


/***/ }),

/***/ "zlKo":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/_lib/tzIntlTimeZoneName/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tzIntlTimeZoneName; });
/**
 * Returns the formatted time zone name of the provided `timeZone` or the current
 * system time zone if omitted, accounting for DST according to the UTC value of
 * the date.
 */
function tzIntlTimeZoneName(length, date, options) {
  var dtf = getDTF(length, options.timeZone, options.locale)
  return dtf.formatToParts ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date)
}

function partsTimeZone(dtf, date) {
  var formatted = dtf.formatToParts(date)
  return formatted[formatted.length - 1].value
}

function hackyTimeZone(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, '')
  var tzNameMatch = / [\w-+ ]+$/.exec(formatted)
  return tzNameMatch ? tzNameMatch[0].substr(1) : ''
}

// If a locale has been provided `en-US` is used as a fallback in case it is an
// invalid locale, otherwise the locale is left undefined to use the system locale.
function getDTF(length, timeZone, locale) {
  if (locale && !locale.code) {
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`"
    )
  }
  return new Intl.DateTimeFormat(locale ? [locale.code, 'en-US'] : undefined, {
    timeZone: timeZone,
    timeZoneName: length,
  })
}


/***/ })

}]);
//# sourceMappingURL=modules-training-training-module.db08998fc743db528b14.js.map