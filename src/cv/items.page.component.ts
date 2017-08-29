/**
 * Diagram list page component
 *
 * @date 08/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MdSidenav } from '@angular/material';

@Component({
  templateUrl: './items.page.component.html',
  styleUrls: ['./cv.scss']
})
export class CvItemsPageComponent {
  items: FirebaseListObservable<any[]>;
  icons: any;
  selected: any = null;
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/QPLOT/cv/entries');
    // this.items.subscribe(x => console.log(x));
    this.selected = this.item();
    this.icons = {
      project: 'md-web blue',
      publication: 'md-my-library-books teal',
      company: 'md-domain purple',
      repo: 'md-cloud-queue lime',
      education: 'md-school orange',
      award: 'md-stars red',
      blog: 'md-my-library-books light-blue',
      picture: 'md-image orange',
      recommend: 'md-thumb-up green',
      profile: 'md-portrait deep-orange',
    }
  }

  icon(type) {
    if (type in this.icons) {
      return this.icons[type];
    }
    return 'md-android lime';
  }

  // return a basic template of item
  item() {
    return { title: '', subtitle: '', section: '', description: '' };
  }

  // turn editor on or off
  editor(on) {
    if (on) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

  // tell if in edit or new mode
  editing() {
    if (this.selected) {
      if (this.selected.createdAt) {
        return true;
      }
    }
    return false;
  }

  // start to edit an item
  edit(item:any) {
    this.selected = Object.assign({}, item);
    this.selected.$key = item.$key;
    // console.log(this.selected);
    this.editor(true);
  }

  // // start to add an new item
  // add() {
  //   this.selected = this.item();
  //   this.editor(true);
  // }
  //
  // // save an item
  // save() {
  //   if (this.selected) {
  //     let item = Object.assign({}, this.selected);
  //     if ('$key' in item) {
  //       delete item['$key'];
  //       this.items.update(this.selected.$key, item);
  //     } else {
  //       this.items.push(item);
  //     }
  //   }
  //   this.editor(false);
  // }
  //
  // // delete an item
  // del(item: any) {
  //   this.items.remove(item.$key);
  // }
}
