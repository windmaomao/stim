/**
 * Sample module
 * Holds sample and experimental pages
 *
 * @date 08/28/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { STLayoutModule } from '../layout/layout.module';

import { sampleComponents, sampleRoutes } from './sample.routes';

import { Ng2TableModule } from '../ng2-table/ng-table-module';

// import { FormsModule } from '@angular/forms';
// import { MdButtonModule } from '@angular/material';
// import { MdSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    STLayoutModule,
    RouterModule.forChild(sampleRoutes),
    // FormsModule,
    // MdButtonModule, MdSidenavModule,
    Ng2TableModule,
  ],
  declarations: [
    sampleComponents
  ],
  providers: [],
  bootstrap: []
})
export class SampleModule { }
