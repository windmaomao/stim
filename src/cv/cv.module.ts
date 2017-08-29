/**
 * Cv module
 * Page responsible for listing and editing cv
 *
 * @date 08/25/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { STLayoutModule } from '../layout/layout.module';

import { cvComponents, cvRoutes } from './cv.routes';

import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    STLayoutModule,
    RouterModule.forChild(cvRoutes),
    FormsModule,
    MdButtonModule, MdSidenavModule,
  ],
  declarations: [
    cvComponents
  ],
  providers: [],
  bootstrap: []
})
export class CvModule { }
