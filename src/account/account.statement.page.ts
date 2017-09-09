/**
 * Statement page component
 *
 * @date 09/01/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { AccountService } from '../api/account.service';
import * as _ from 'lodash';

@Component({
  templateUrl: './account.statement.page.html',
  // styleUrls: ['./cv.scss']
})
export class AccountStatementPageComponent implements OnInit {
  accounts: any = {};
  statements: any[];
  records: any[];
  maps: any[];
  year: string;
  month: string;

  constructor(private ds: AccountService) {}

  ngOnInit() {
    this.ds.accounts().subscribe(
      res => {
        res.map(item => {
          this.accounts[item.$key] = item;
        });
        this.loadStatement();
      }
    );
    this.year = '2017';
    this.month = '8';
  }

  // Load statements for selected date
  loadStatement() {
    let id = this.year + '/' + this.month;
    this.ds.statements(id).subscribe(res => {
      this.statements = res;
      this.records = this.prepareRecords(this.accounts, this.statements);
      this.maps = _.map(_.groupBy(this.records, 'type'), (records, key) => {
        return {
          type: key,
          records: records
        }
      });
      console.log(this.maps);
    });
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

}
