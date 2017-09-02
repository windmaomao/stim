/**
 * Statement page component
 *
 * @date 09/01/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { AccountService } from '../api/account.service';

@Component({
  templateUrl: './account.statement.page.html',
  // styleUrls: ['./cv.scss']
})
export class AccountStatementPageComponent implements OnInit {
  accounts: any = {};
  statements: any[];
  records: any[];    // processed

  constructor(private ds: AccountService) {}

  ngOnInit() {
    this.ds.accounts().subscribe(
      res => {
        res.map(item => {
          this.accounts[item.$key] = item;
        });
        this.load();
      }
    );
  }

  load() {
    this.ds.statements('2015','4').subscribe(
      res => {
        this.statements = res;
        console.log(res);
        this.records = this.prepare(this.accounts, this.statements);
        console.log(this.records);
      }
    );
  }

  prepare(accounts, statements) {
    let records = Object.assign({}, accounts);
    Object.keys(records).forEach(account => {
      records[account] = {
        account: account,
        title: accounts[account].title,
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