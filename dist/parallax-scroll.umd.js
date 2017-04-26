(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["parallax-scroll"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["parallax-scroll"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var NguiParallaxScrollDirective = (function () {
    function NguiParallaxScrollDirective(viewContainer) {
        this.viewContainer = viewContainer;
        this.el = this.viewContainer.element.nativeElement;
    }
    NguiParallaxScrollDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.img = this.el.querySelector("img");
        this.img.onload = function () {
            _this.imgOrgWidth = _this.imgOrgWidth || _this.img.offsetWidth;
            _this.imgOrgHeight = _this.imgOrgHeight || _this.img.offsetHeight;
            console.log(_this.img.offsetWidth, _this.img.offsetHeight, _this.img.width, _this.img.height);
            _this.setParallaxImage();
            _this.updateParallaxImage();
            window.addEventListener('scroll', function () {
                _this.updateParallaxImage();
            });
            window.addEventListener('resize', function () {
                _this.setParallaxImage();
                _this.updateParallaxImage();
            });
        };
    };
    NguiParallaxScrollDirective.prototype.setParallaxImage = function () {
        //set img style
        var imgSize = this.imgOrgWidth > this.el.offsetWidth ?
            { width: this.el.offsetWidth + 'px' } : { height: this.el.offsetHeight * 1.5 + 'px' };
        Object.assign(this.img.style, {
            display: 'block', position: 'absolute', bottom: 0, left: 0
        }, imgSize);
        // set container style
        Object.assign(this.el.style, {
            position: 'relative', overflow: 'hidden'
        });
        // wrap image with a div, then set style
        var imgWrapperEl = this.el.querySelector('.parallax-img-wrapper');
        if (!imgWrapperEl) {
            imgWrapperEl = document.createElement('div');
            imgWrapperEl.className = 'parallax-img-wrapper';
            imgWrapperEl.appendChild(this.img);
            this.el.appendChild(imgWrapperEl);
        }
        Object.assign(imgWrapperEl.style, {
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1
        });
    };
    NguiParallaxScrollDirective.prototype.updateParallaxImage = function () {
        var elRect = this.el.getBoundingClientRect();
        var imgRect = this.img.getBoundingClientRect();
        var imgDist = imgRect.height - elRect.height;
        var bottom = this.el.offsetTop + elRect.height;
        var top = this.el.offsetTop;
        var scrollTop = document.body.scrollTop;
        var windowBottom = scrollTop + window.innerHeight;
        var percentScrolled = (windowBottom - top) / (elRect.height + window.innerHeight);
        //console.log(imgDist, percentScrolled, imgDist * percentScrolled);
        var parallax = Math.round((imgDist * percentScrolled));
        if ((bottom > scrollTop) && (top < (scrollTop + window.innerHeight))) {
            this.img.style.bottom = parallax * -1 + 'px';
            //img.style.transform = "translate3D(0%," + parallax + "px, 0)";
        }
    };
    return NguiParallaxScrollDirective;
}());
NguiParallaxScrollDirective = __decorate([
    core_1.Directive({
        selector: '[ngui-parallax], ngui-parallax'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], NguiParallaxScrollDirective);
exports.NguiParallaxScrollDirective = NguiParallaxScrollDirective;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(4);
var parallax_scroll_directive_1 = __webpack_require__(0);
var NguiParallaxScrollModule = (function () {
    function NguiParallaxScrollModule() {
    }
    return NguiParallaxScrollModule;
}());
NguiParallaxScrollModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [parallax_scroll_directive_1.NguiParallaxScrollDirective],
        exports: [parallax_scroll_directive_1.NguiParallaxScrollDirective]
    })
], NguiParallaxScrollModule);
exports.NguiParallaxScrollModule = NguiParallaxScrollModule;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parallax_scroll_directive_1 = __webpack_require__(0);
exports.NguiParallaxScrollDirective = parallax_scroll_directive_1.NguiParallaxScrollDirective;
var parallax_scroll_module_1 = __webpack_require__(2);
exports.NguiParallaxScrollModule = parallax_scroll_module_1.NguiParallaxScrollModule;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=parallax-scroll.umd.js.map