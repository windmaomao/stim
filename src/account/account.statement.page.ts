/**
 * Statement page component
 *
 * @date 09/01/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../api/account.service';
import * as _ from 'lodash';
import { MdDialog } from '@angular/material';
import { AccountEditDialogComponent } from './account.edit.dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';

@Component({
  templateUrl: './account.statement.page.html',
  // styleUrls: ['./cv.scss']
})
export class AccountStatementPageComponent implements OnInit, OnDestroy {
  types: any = {};
  accounts: any = {};
  statements: any[];
  records: any[];
  maps: any[];
  year: string;
  month: string;
  icons: any;
  private sub: any;

  constructor(private ds: AccountService, public dialog: MdDialog, private route: ActivatedRoute) {
    this.icons = {
      cash: 'md-attach-money',
      investment: 'md-trending-up',
      credit: 'md-credit-card',
      hard: 'md-lock',
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.year = params['year'];
      this.month = params['month'];

      Observable.zip(
        this.ds.types(),
        this.ds.accounts(),
        this.ds.statements(this.year + '/' + this.month)
      ).subscribe(([types, accounts, statements]) => {
        types.map(item => {
          this.types[item.$key] = item;
        });
        accounts.map(item => {
          this.accounts[item.$key] = item;
        });
        this.statements = statements;
        this.records = this.prepareRecords(this.accounts, this.statements);
        this.maps = this.mapRecords(this.filterRecords(this.records));
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // Fill statements into accounts as records
  prepareRecords(accounts, statements) {
    let records = Object.assign({}, accounts);
    Object.keys(records).forEach(account => {
      let accountObj = accounts[account];
      records[account] = {
        account: account,
        title: accountObj.title,
        type: accountObj.type,
        number: accountObj.number,
        flow: 0.0, balance: 0.0
      };
    })
    statements.forEach(statement => {
      let account = statement.$key;
      records[account] = Object.assign(records[account], statement);
    });
    return Object.keys(records).map(account => {
      return records[account];
    })
  }

  // Filter records
  filterRecords(records) {
    // sort by name
    return _.orderBy(records, ['title']);
  }

  // Map records
  mapRecords(records) {
    // group by type
    return _.map(_.groupBy(records, 'type'), (items, key) => {
      return {
        type: key,
        records: items
      }
    });
  }

  // open dialog to edit record
  editRecord(record) {
    let dialogRef = this.dialog.open(AccountEditDialogComponent, {
      width: '250px',
      data: { record: record }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.saveRecord(res);
      }
    })
  }

  // save record
  saveRecord(record) {
    let id = this.year + '/' + this.month;
    let key = id + '/' + record.account;
    let item = {
      flow: parseFloat(record.flow),
      balance: parseFloat(record.balance)
    };
    this.ds.updateStatement(key, item);
  }

}
