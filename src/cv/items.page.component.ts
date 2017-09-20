/**
 * List page component
 *
 * @date 08/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { CvService } from '../api/cv.service';
import { MdSidenav } from '@angular/material';
import * as _ from 'lodash';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './items.page.component.html',
  styleUrls: ['./cv.scss']
})
export class CvItemsPageComponent implements OnInit {
  public items$: Observable<any[]>;
  private icons: any;
  selected: any = null;
  @ViewChild('sidenav') sidenav: MdSidenav;

  private filter$: Subject<any> = new Subject();
  private _entriesAll: any[];
  _sectionsAll: any[];
  entries: any[];
  metas: any;
  busy$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private ds: CvService) {
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
    };
  }

  ngOnInit() {
    Observable.zip(
      this.ds.entries(),
      this.ds.types(),
      this.ds.metas()
    ).subscribe(([entries, types, metas]) => {
      this.metas = metas;
      this._sectionsAll = types;
      this._entriesAll = entries;
      this.filter$.next('');
    });

    this.filter$.distinctUntilChanged()
      .subscribe(filter => {
        this.busy$.next(true);
        if (!filter) {
          this.entries = _.clone(this._entriesAll);
        } else {
          this.entries = _.filter(this._entriesAll, filter);
        }
        this.busy$.next(false);
      })
    ;
  }

  // returns entries list obserable
  // entriesSource(section: Observable<any>) {
  //   return this.db.list('/QPLOT/cv/entries', {
  //     query: {
  //       orderByChild: 'section',
  //       equalTo: section
  //     }
  //   });
  // }

  // set filter
  filterBy(section: string) {
    this.filter$.next({ section: section });
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

  // start to add an new item
  add() {
    this.selected = this.item();
    this.editor(true);
  }

  // save an item
  save() {
    console.log(this.selected);
    if (this.selected) {
      let item = Object.assign({}, this.selected);
      if ('$key' in item) {
        let key = item['$key'];
        delete item['$key'];
        this.ds.updateEntry(key, item);
      }
    }
    this.editor(false);
  }
  //
  // // delete an item
  // del(item: any) {
  //   this.items.remove(item.$key);
  // }
}
