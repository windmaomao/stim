/**
 * List page component
 *
 * @date 08/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MdSidenav } from '@angular/material';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { DataService } from '../api/data.service';

@Component({
  templateUrl: './items.page.component.html',
  styleUrls: ['./cv.scss']
})
export class CvItemsPageComponent implements OnInit {
  public items$: Observable<any[]>;
  private icons: any;
  selected: any = null;
  @ViewChild('sidenav') sidenav: MdSidenav;
  private filter$: Subject<any>;
  private _entriesAll: any[];
  private _sectionsAll: any[];
  entries: any[];
  metas: any;

  constructor(private db: AngularFireDatabase, private ds: DataService) {
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
    this.filter$ = new Subject();
    // this.items$ = this.entriesSource(this.filter$);
    this.items$ = this.entriesBy(this.filter$);
    this.items$.subscribe(res => {
      this.entries = res;
      // console.log('Items', res);
    });
    let api = '/QPLOT/cv';
    // get all entires and store in entriesAll
    this.db.list(api + '/entries')
      .subscribe(res => {
        this._entriesAll = res;
        this.filter$.next('all');
      })
    ;
    this.db.list(api + '/types')
      .subscribe(res => {
        this._sectionsAll = res;
        // console.log('Sections', res);
      })
    ;
    this.db.object(api + '/metas')
      .subscribe(res => {
        // console.log(res);
        this.metas = res;
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

  // return entries list obserable based on filter
  entriesBy(filters: Observable<any>) {
    return filters.distinctUntilChanged()
      .switchMap(filter => {
        if (filter === 'all') {
          return Observable.of(this._entriesAll.slice());
        }
        let entries = this._entriesAll.filter(item => {
          return item.section === filter;
        });
        return Observable.of(entries);
      })
    ;
  }

  // set filter
  filterBy(section: string) {
    this.filter$.next(section);
  }

  // search(terms: Observable<string>) {
  //   return terms.debounceTime(400)
  //     .distinctUntilChanged()
  //     .switchMap(terms => this.searchEntries(term))
  //   ;
  // }
  //
  // searchEntries(term) {
  //
  // }

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
