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
import { STLayoutModule } from '../layout/layout.module';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { environment } from '../environments/environment';

import { diagramComponents, diagramRoutes } from './diagram.routes';

import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    STLayoutModule,
    RouterModule.forChild(diagramRoutes),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    FormsModule,
    MdButtonModule, MdSidenavModule,
  ],
  declarations: [
    diagramComponents
  ],
  providers: [],
  bootstrap: []
})
export class DiagramModule { }
