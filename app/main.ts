// polyfills, comment the following out for debugging purpose
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';

//noinspection TypeScriptCheckImport
import { NguiParallaxScrollModule }  from '@ngui/parallax-scroll';

@NgModule({
  imports: [BrowserModule, NguiParallaxScrollModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
