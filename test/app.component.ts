import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <div style="height: 300px">
      scroll up/down and see how image changes.
      To see the proper parallax effect, the container window
      should be smaller than the image behind.
    </div>
    <div ng2-parallax style="height: 300px">
      <img src="parallax1.jpg" />
    </div>
    <div style="height: 300px">
      scroll up/down and see how image changes
    </div>
    <div ng2-parallax style="height: 300px">
      <img src="parallax2.jpg" />
    </div>
    <div style="height: 300px">
      scroll up/down and see how image changes
    </div>
    <div style="height: 300px">
      scroll up/down and see how image changes
    </div>
  `
})
export class AppComponent {}
