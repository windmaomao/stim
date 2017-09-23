/**
 * Cv module
 * Page responsible for listing and editing cv
 *
 * @date 08/25/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StLayoutModule } from '../layout/layout.module';
import { ApiModule } from '../api/api.module';
import { CvComponents, CvRoutes } from './cv.routes';
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  imports: [
    StLayoutModule,
    ApiModule,
    RouterModule.forChild(CvRoutes),
    MarkdownModule.forRoot(),
  ],
  declarations: [
    CvComponents
  ],
  providers: [],
  bootstrap: []
})
export class CvModule { }
