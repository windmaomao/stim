/**
 * Table page component
 *
 * @date 08/28/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component } from '@angular/core';

@Component({
  templateUrl: './table.page.html',
  // styleUrls: ['./diagram.component.scss']
})
export class SampleTablePageComponent {
  rows = [
    { icon: 'md-trending-up green', section: 'project', title: 'DRM Orders', createdAt: '2011-03-02' },
    { icon: 'md-trending-down lime', section: 'company', title: 'RxAnte', createdAt: '2014-09-22' },
    { icon: '3', section: 'company', title: 'Deutsche Bank', createdAt: '2014-09-22' },
    { icon: '4', section: 'company', title: 'PeopleDesigns', createdAt: '2014-09-22' },
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

  selectedSection: string;
  sections = [ 'steak', 'pizza', 'tacos' ];

  _opened: boolean = false;
  editor(status) {
    this._opened = status;
  }
  edit() {
    this.editor(1);
  }
  close() {
    this.editor(0);
  }


  constructor() {}
}
