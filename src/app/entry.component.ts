/**
 * Entry component
 *
 * @date 08/26/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component } from '@angular/core';
// import { diagramData } from './diagram2.data';

@Component({
  templateUrl: './entry.component.html',
  // styleUrls: ['./diagram.component.scss']
})
export class CVEntryComponent {
  public json: Object;

  constructor() {
    // this.json = diagramData;
  }
}
