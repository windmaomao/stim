/**
 * Entry component
 *
 * @date 08/26/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { diagramData } from './diagram2.data';

@Component({
  templateUrl: './entry.component.html',
  // styleUrls: ['./diagram.component.scss']
})
export class CVEntryComponent {
  json: Object;

  entries: FirebaseListObservable<any[]>;
  selected: any = null;

  constructor(db: AngularFireDatabase) {
    this.entries = db.list('/QPLOT/cv/entries');
    this.entries.subscribe(x => console.log(x));
  }

}
