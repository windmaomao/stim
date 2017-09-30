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
import { SpinnerService } from '../layout/spinner.service';
import { MdDialog } from '@angular/material';
import { WatchEditDialogComponent } from './watch.edit.dialog';

@Component({
  templateUrl: './watch.list.page.html',
})
export class WatchListPageComponent implements OnInit {
  watches: any[];
  icons: any;
  actions: any;
  constructor(
    private ds: TradeService,
    private ss: SpinnerService,
    private dialog: MdDialog
  ) {
    this.icons = {
      long: 'md-trending-up green',
      short: 'md-trending-down',
      tech: 'md-memory deep-orange',
      material: 'md-blur-on black',
      consumer: 'md-store-mall-directory purple',
      auto: 'md-local-gas-station lime',
      education: 'md-school orange',
      healthcare: 'md-local-hospital light-blue',
      industry: 'md-local-laundry-service yellow',
      finance: 'md-account-balance light-blue darken-4',
      estate: 'md-domain blue darken-2',
      etf: 'md-texture light-green',
    };
    this.actions = {
      watch: 'md-insert-chart yellow',
      sell: 'md-trending-down red',
      buy: 'md-trending-up green'
    }
  }
  ngOnInit() {
    this.ss.start();
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
      this.ss.stop();
    });
  }

  edit(row) {
    let dialogRef = this.dialog.open(WatchEditDialogComponent, {
      width: '250px',
      data: { item: row }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.save(res);
      }
    })
  }

  save(row) {
    this.ds.updateWatch(row.$key, row);
  }

  // getRowClass(row) {
  //   return {
  //     'datatable-row-active': 'quantity' in row
  //   };
  // }
}
