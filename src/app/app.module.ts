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
import { StLayoutModule } from '../layout/layout.module';
import { SampleModule } from '../sample/sample.module';
import { DiagramModule } from '../diagram/diagram.module';
import { CvModule } from '../cv/cv.module';
import { AccountModule } from '../account/account.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appComponents, appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StLayoutModule,
    SampleModule,
    DiagramModule,
    CvModule,
    AccountModule,
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
