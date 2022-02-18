(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "STjf":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_ripple_effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_ripple_effect", function() { return RippleEffect; });
/* harmony import */ var C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-06cd27b1.js */ "A2ku");
/* harmony import */ var _ionic_global_a049bcbf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-a049bcbf.js */ "JO23");


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const rippleEffectCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}";
let RippleEffect = class {
  constructor(hostRef) {
    Object(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    /**
     * Sets the type of ripple-effect:
     *
     * - `bounded`: the ripple effect expands from the user's click position
     * - `unbounded`: the ripple effect expands from the center of the button and overflows the container.
     *
     * NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,
     * while surfaces for unbounded ripples should have it set to visible.
     */

    this.type = 'bounded';
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */


  addRipple(x, y) {
    var _this = this;

    return Object(C_Development_trainingApk_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        Object(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_1__["f"])(() => {
          const rect = _this.el.getBoundingClientRect();

          const width = rect.width;
          const height = rect.height;
          const hypotenuse = Math.sqrt(width * width + height * height);
          const maxDim = Math.max(height, width);
          const maxRadius = _this.unbounded ? maxDim : hypotenuse + PADDING;
          const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
          const finalScale = maxRadius / initialSize;
          let posX = x - rect.left;
          let posY = y - rect.top;

          if (_this.unbounded) {
            posX = width * 0.5;
            posY = height * 0.5;
          }

          const styleX = posX - initialSize * 0.5;
          const styleY = posY - initialSize * 0.5;
          const moveX = width * 0.5 - posX;
          const moveY = height * 0.5 - posY;
          Object(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_1__["c"])(() => {
            const div = document.createElement('div');
            div.classList.add('ripple-effect');
            const style = div.style;
            style.top = styleY + 'px';
            style.left = styleX + 'px';
            style.width = style.height = initialSize + 'px';
            style.setProperty('--final-scale', `${finalScale}`);
            style.setProperty('--translate-end', `${moveX}px, ${moveY}px`);
            const container = _this.el.shadowRoot || _this.el;
            container.appendChild(div);
            setTimeout(() => {
              resolve(() => {
                removeRipple(div);
              });
            }, 225 + 100);
          });
        });
      });
    })();
  }

  get unbounded() {
    return this.type === 'unbounded';
  }

  render() {
    const mode = Object(_ionic_global_a049bcbf_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
    return Object(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_1__["H"], {
      role: "presentation",
      class: {
        [mode]: true,
        'unbounded': this.unbounded
      }
    });
  }

  get el() {
    return Object(_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this);
  }

};

const removeRipple = ripple => {
  ripple.classList.add('fade-out');
  setTimeout(() => {
    ripple.remove();
  }, 200);
};

const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.5;
RippleEffect.style = rippleEffectCss;


/***/ })

}]);
//# sourceMappingURL=32.06262c029b97a4857456.js.map