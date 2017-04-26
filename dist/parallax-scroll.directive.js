"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
NguiParallaxScrollDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[ngui-parallax], ngui-parallax'
            },] },
];
/** @nocollapse */
NguiParallaxScrollDirective.ctorParameters = function () { return [
    { type: core_1.ViewContainerRef, },
]; };
exports.NguiParallaxScrollDirective = NguiParallaxScrollDirective;
//# sourceMappingURL=parallax-scroll.directive.js.map