import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
import { Ng2ParallaxScrollModule }  from 'ng2-parallax-scroll';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2ParallaxScrollModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
