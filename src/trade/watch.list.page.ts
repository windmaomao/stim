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
      short: 'md-trending-down',
      tech: 'md-sd-storage deep-orange',
      material: 'md-blur-on black',
      consumer: 'md-store-mall-directory purple',
      auto: 'md-local-gas-station lime',
      education: 'md-school orange',
      healthcare: 'md-local-hospital light-blue',
      industry: 'md-local-laundry-service yellow',
      financial: 'md-local-atm green',
      recommend: 'md-thumb-up green',
      profile: 'md-portrait deep-orange',
    };
  }
  ngOnInit() {
    Observable.zip(
      this.ds.watches(),
    ).subscribe(([watches]) => {
      watches.forEach(item => {
        let sgn = (item.type === 'short') ? -1 : 1;
        if ('price' in item) {
          if ('target' in item) {
            item['profit'] = (item.target - item.price) / item.price * 100 * sgn;
            if (item['profit'] < 0) {
              item['profit'] = 0.1;
            }
          }
          if ('exit' in item) {
            item['risk'] = (item.exit - item.price) / item.price * 100 * (-sgn);
            if (item['risk'] < 0) {
              item['risk'] = 0.1;
            }
          }
        }
        item['score'] = item.profit / item.risk;
      });
      this.watches = watches;
    });
  }
}
