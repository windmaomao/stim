/**
 * Watch list page component
 *
 * @date 09/23/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { TradeService } from '../api/trade.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';

@Component({
  templateUrl: './watch.list.page.html',
})
export class WatchListPageComponent implements OnInit {
  watches: any[];
  icons: any;
  constructor(private ds: TradeService) {
    this.icons = {
      long: 'md-trending-up green',
      short: 'md-trending-down lime',
      tech: 'md-web blue',
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
      this.ds.watches(),
    ).subscribe(([watches]) => {
      watches.forEach(item => {
        item['score'] = item.profit / item.risk;
      });
      this.watches = watches;
      console.log(this.watches);
    });
  }
}
