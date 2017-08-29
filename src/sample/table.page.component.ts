/**
 * Table page component
 *
 * @date 08/28/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component } from '@angular/core';

@Component({
  template: `
    <st-sidebar></st-sidebar>
    <div class="main-container">
      <st-navbar></st-navbar>
      <div class="main-content" autoscroll="true" bs-affix-target="" init-ripples="" style="">
        <h3 class="table-title">Test</h3>
        <ng-table
          [config]="config"
          [rows]="rows" [columns]="columns"
        ></ng-table>
      </div>
    </div>
  `,
  // styleUrls: ['./diagram.component.scss']
})
export class SampleTablePageComponent {
  rows = [
    { section: 'project', title: 'DRM Orders', createdAt: '2011-03-02' },
    { section: 'company', title: 'RxAnte', createdAt: '2014-09-22' },
  ];
  columns = [
    { name: 'section', title: 'Section', filtering: { filterString: '', placeholder: 'Filter by section' } },
    { name: 'title', title: 'Title' },
    { name: 'createdAt', title: 'Created', sort: 'asc' },
  ];
  config = {
    className: 'table table-full m-b-60',
    sorting: { columns: this.columns }
  };

  constructor() {}
}
