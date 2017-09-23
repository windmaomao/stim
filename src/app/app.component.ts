/**
 * App component
 *
 * @date 08/15/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <st-spinner></st-spinner>
    <st-body>
      <router-outlet></router-outlet>
    </st-body>
  `,
})
export class AppComponent {
  title = 'app';
}
