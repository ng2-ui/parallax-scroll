import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';

import { NguiParallaxScrollDirective} from "./parallax-scroll.directive";

@NgModule({
  imports: [ CommonModule],
  declarations: [NguiParallaxScrollDirective],
  exports: [ NguiParallaxScrollDirective ]
})
export class NguiParallaxScrollModule {}

