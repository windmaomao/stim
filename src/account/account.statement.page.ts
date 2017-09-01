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

  constructor(private ds: AccountService) {}

  ngOnInit() {
    this.ds.accounts().subscribe(
      res => {
        res.map(item => {
          this.accounts[item.$key] = item;
        });
      }
    );
    this.ds.statements('2015','4').subscribe(
      res => this.statements = res
    );
  }

  prepare() {

  }
}
