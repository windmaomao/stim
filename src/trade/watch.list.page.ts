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
    };
  }
  ngOnInit() {
    Observable.zip(
      this.ds.watches(),
    ).subscribe(([watches]) => {
      this.watches = watches;
    });
  }
}
