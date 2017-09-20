/**
 * Body component
 *
 * @date 09/19/17
 * @author Fang Jin <windmaomao@gmail.com>
 */
 
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'st-body',
  template: `
    <main [ngClass]="page">
      <ng-content></ng-content>
    </main>
  `,
  styleUrls: ['./scss/styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StBodyComponent {
  page = '';
  constructor(private router: Router) {
    // listen to page variable from router events
    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild;
        this.page = 'page-' + route.data.page || '';
        // console.log('Page', this.page);
      }
    });
  }
}
