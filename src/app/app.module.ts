/**
 * App module
 *
 * @date 08/15/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { STLayoutModule } from '../layout/layout.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appComponents, appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    STLayoutModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
      // enableTracing: true
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  declarations: [
    appComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
