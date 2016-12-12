import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { Ng2ParallaxScrollDirective} from "./ng2-parallax-scroll.directive";

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [Ng2ParallaxScrollDirective],
  exports: [ Ng2ParallaxScrollDirective ]
})
export class Ng2ParallaxScrollModule {}

