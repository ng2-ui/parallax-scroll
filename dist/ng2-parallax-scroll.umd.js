(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["ng2-parallax-scroll"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
	else
		root["ng2-parallax-scroll"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var forms_1 = __webpack_require__(2);
	var platform_browser_1 = __webpack_require__(3);
	var ng2_parallax_scroll_directive_1 = __webpack_require__(4);
	exports.Ng2ParallaxScrollDirective = ng2_parallax_scroll_directive_1.Ng2ParallaxScrollDirective;
	var Ng2ParallaxScrollModule = (function () {
	    function Ng2ParallaxScrollModule() {
	    }
	    Ng2ParallaxScrollModule = __decorate([
	        core_1.NgModule({
	            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
	            declarations: [ng2_parallax_scroll_directive_1.Ng2ParallaxScrollDirective],
	            exports: [ng2_parallax_scroll_directive_1.Ng2ParallaxScrollDirective]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Ng2ParallaxScrollModule);
	    return Ng2ParallaxScrollModule;
	}());
	exports.Ng2ParallaxScrollModule = Ng2ParallaxScrollModule;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var Ng2ParallaxScrollDirective = (function () {
	    function Ng2ParallaxScrollDirective(viewContainer) {
	        this.viewContainer = viewContainer;
	        this.el = this.viewContainer.element.nativeElement;
	    }
	    Ng2ParallaxScrollDirective.prototype.ngAfterViewInit = function () {
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
	    Ng2ParallaxScrollDirective.prototype.setParallaxImage = function () {
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
	    Ng2ParallaxScrollDirective.prototype.updateParallaxImage = function () {
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
	        }
	    };
	    Ng2ParallaxScrollDirective = __decorate([
	        core_1.Directive({
	            selector: '[ng2-parallax], ng2-parallax'
	        }), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef])
	    ], Ng2ParallaxScrollDirective);
	    return Ng2ParallaxScrollDirective;
	}());
	exports.Ng2ParallaxScrollDirective = Ng2ParallaxScrollDirective;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-parallax-scroll.umd.js.map