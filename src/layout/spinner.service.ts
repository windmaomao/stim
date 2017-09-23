/**
 * Spinner service
 *
 * @date 09/22/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SpinnerService {
  busy$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  start() {
    this.busy$.next(true);
  }

  stop() {
    this.busy$.next(false);
  }

  toggle(value: boolean) {
    this.busy$.next(value);
  }
}
