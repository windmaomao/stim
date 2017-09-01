/**
 * Diagram module
 * Page responsible for listing and editing diagrams
 *
 * @date 08/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StLayoutModule } from '../layout/layout.module';

import { diagramComponents, diagramRoutes } from './diagram.routes';

@NgModule({
  imports: [
    BrowserModule,
    StLayoutModule,
    RouterModule.forChild(diagramRoutes),
  ],
  declarations: [
    diagramComponents
  ],
  providers: [],
  bootstrap: []
})
export class DiagramModule { }
