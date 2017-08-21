/**
 * App module
 *
 * @date 08/15/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { STLayoutModule } from '../layout/layout.module';
import { DiagramModule } from '../diagram/diagram.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appComponents, appRoutes } from './app.routes';

import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    STLayoutModule,
    DiagramModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
      // enableTracing: true
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    MdButtonModule, MdSidenavModule,
  ],
  declarations: [
    appComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
