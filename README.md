# ng2-parallax-scroll
Angular2 parallax direc tive

<a href="https://plnkr.co/edit/zaESbL?p=preview"">
  <img src="http://i.imgur.com/AsvUIGs.png" width="50% border="1" />
</a>

## Install

1. install ng2-parallax-scroll

        $ npm install ng2-parallax-scroll --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-parallax-scroll'] = 'node_modules/ng2-parallax-scroll/dist'
        packages['ng2-parallax-scroll'] = { main: 'index.js', defaultExtension: 'js']

## Use it in your code

1. Import directives and add `ng2-parallax-scroll` to your component

        import { Ng2ParallaxScrollDirective } from 'ng2-parallax-scroll';

        @Component({
          selector: 'my-app',
          template: `
            <div ng2-parallax style="height: 300px">
              <img src="http://materializecss.com/images/parallax1.jpg" />
            </div>`,
          directives: [ Ng2ParallaxScrollDirective ]
        })

## For Developers

### To start

    $ git clone https://github.com/ng2-ui/ng2-parallax-scroll.git
    $ cd ng2-parallax-scroll
    $ npm install
    $ npm start


