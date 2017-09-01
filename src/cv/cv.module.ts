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
import { StLayoutModule } from '../layout/layout.module';
import { ApiModule } from '../api/api.module';

import { cvComponents, cvRoutes } from './cv.routes';

import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  imports: [
    BrowserModule,
    StLayoutModule,
    ApiModule,
    RouterModule.forChild(cvRoutes),
    MarkdownModule.forRoot(),
  ],
  declarations: [
    cvComponents
  ],
  providers: [],
  bootstrap: []
})
export class CvModule { }
