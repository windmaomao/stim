/**
 * Spinner component
 *
 * @date 09/22/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'st-spinner',
  template: `
    <div class="loader-wrapper" *ngIf="busy">
      <md-spinner class="loader"></md-spinner>
    </div>
  `,
})
export class StSpinnerComponent {
  busy: boolean;
  constructor(private ss: SpinnerService) {
    this.ss.busy$.subscribe(value => {
      this.busy = value;
    })
  }
}
