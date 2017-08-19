/**
 * Crud component
 *
 * @date 08/16/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class STCrudComponent {
  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/STIM/items');
  }
}
