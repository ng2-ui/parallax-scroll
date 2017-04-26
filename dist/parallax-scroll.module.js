"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var parallax_scroll_directive_1 = require("./parallax-scroll.directive");
var NguiParallaxScrollModule = (function () {
    function NguiParallaxScrollModule() {
    }
    return NguiParallaxScrollModule;
}());
NguiParallaxScrollModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [parallax_scroll_directive_1.NguiParallaxScrollDirective],
                exports: [parallax_scroll_directive_1.NguiParallaxScrollDirective]
            },] },
];
/** @nocollapse */
NguiParallaxScrollModule.ctorParameters = function () { return []; };
exports.NguiParallaxScrollModule = NguiParallaxScrollModule;
//# sourceMappingURL=parallax-scroll.module.js.map