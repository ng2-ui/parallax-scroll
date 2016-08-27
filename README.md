# ng2-parallax-scroll
Angular2 parallax direc tive

[Demo](https://ng2-ui.github.io/#/parallax)

Plunker Example: https://plnkr.co/edit/zaESbL?p=preview

## Install

1. install ng2-parallax-scroll

        $ npm install ng2-parallax-scroll --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-parallax-scroll'] = 'node_modules/ng2-parallax-scroll/dist';
        packages['ng2-parallax-scroll'] = { main: 'index.js', defaultExtension: 'js' }

3. import Ng2ParallaxScrollModule to your AppModule
        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { Ng2ParallaxScrollModule } from 'ng2-parallax-scroll';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, Ng2ParallaxScroll],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

         
For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.


## Use it in your code

      <div ng2-parallax style="height: 300px">
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

    $ git clone https://github.com/ng2-ui/ng2-parallax-scroll.git
    $ cd ng2-parallax-scroll
    $ npm install
    $ npm start


