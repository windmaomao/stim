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
import { StLayoutModule } from '../layout/layout.module';

import { sampleComponents, sampleRoutes } from './sample.routes';
import { Ng2TableModule } from '../ng2-table/ng-table-module';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [
    BrowserModule,
    StLayoutModule,
    RouterModule.forChild(sampleRoutes),
    Ng2TableModule,
    SidebarModule.forRoot()
  ],
  declarations: [
    sampleComponents
  ],
  providers: [],
  bootstrap: []
})
export class SampleModule { }
