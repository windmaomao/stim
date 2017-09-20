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
import { FirebaseModule } from '../firebase/firebase.module';

import { AuthModule } from '../auth/auth.module';
import { SampleModule } from '../sample/sample.module';
import { DiagramModule } from '../diagram/diagram.module';
import { CvModule } from '../cv/cv.module';
import { AccountModule } from '../account/account.module';

import { StLayoutModule } from '../layout/layout.module';
import { AppComponent } from './app.component';
import { appComponents, appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FirebaseModule,                 // backend
    StLayoutModule,                 // layout
    SampleModule,                   // public pages
    AuthModule,                     // auth pages
    DiagramModule,                  // diagram app
    CvModule,                       // cv app
    AccountModule,                  // account app
    RouterModule.forRoot(appRoutes, {
      useHash: true
      // enableTracing: true
    }),
  ],
  declarations: [
    appComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
