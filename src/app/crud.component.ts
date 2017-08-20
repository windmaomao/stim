/**
 * Crud component
 *
 * @date 08/16/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MdSidenav } from '@angular/material';

@Component({
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class STCrudComponent {
  items: FirebaseListObservable<any[]>;
  // editing:boolean;
  selected: any = null;
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/STIM/items');
    this.selected = this.item();
    // this.editing = false;
  }

  item() {
    return { title: '' };
  }

  editor(on) {
    if (on) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

  edit(item:any) {
    this.selected = item;
    this.editor(true);
  }
}
