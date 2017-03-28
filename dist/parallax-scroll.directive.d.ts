import { ViewContainerRef } from '@angular/core';
export declare class NguiParallaxScrollDirective {
    private viewContainer;
    el: HTMLElement;
    img: HTMLImageElement;
    imgOrgWidth: any;
    imgOrgHeight: any;
    constructor(viewContainer: ViewContainerRef);
    ngAfterViewInit(): void;
    private setParallaxImage();
    private updateParallaxImage();
}
