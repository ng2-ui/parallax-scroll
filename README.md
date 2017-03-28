# parallax-scroll
Angular2 parallax direc tive

[Demo](https://rawgit.com/ng2-ui/parallax-scroll/master/app/index.html)

Plunker Example: https://plnkr.co/edit/zaESbL?p=preview

## Install

1. install @ngui/parallax-scroll

        $ npm install @ngui/parallax-scroll --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['@ngui/parallax-scroll'] = '@ngui/parallax-scroll/dist/parallax-scroll.umd.js';

3. import NguiParallaxScrollModule to your AppModule
        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { NguiParallaxScrollModule } from '@ngui/parallax-scroll';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, NguiParallaxScroll],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

         
For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.


## Use it in your code

      <div ngui-parallax style="height: 300px">
        <img src="http://materializecss.com/images/parallax1.jpg" />
      </div>`,
            
## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you.

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
You are only to be open-minded and interested in helping others.
As a contributor, you do following;

  * Updating README.md
  * Improving code comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 


## For Developers

### To start

    $ git clone https://github.com/ng2-ui/ngui-parallax-scroll.git
    $ cd ngui-parallax-scroll
    $ npm install
    $ npm start


