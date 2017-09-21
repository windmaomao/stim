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

import { StLayoutModule } from '../layout/layout.module';
import { AppComponent } from './app.component';
import { appComponents, appRoutes } from './app.routes';

import { SampleModule } from '../sample/sample.module';
import { AuthModule } from '../auth/auth.module';
import { DiagramModule } from '../diagram/diagram.module';
import { CvModule } from '../cv/cv.module';
import { AccountModule } from '../account/account.module';
import { TradeModule } from '../trade/trade.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    FirebaseModule,                 // backend
    StLayoutModule,                 // layout
    RouterModule.forRoot(appRoutes, {
      useHash: true
      // enableTracing: true
    }),                             // core routes

    SampleModule,                   // public pages
    AuthModule,                     // auth pages
    DiagramModule,                  // diagram app pages
    CvModule,                       // cv app pages
    AccountModule,                  // account app pages
    TradeModule,                    // trade app pages
  ],
  declarations: [
    appComponents                   // core components
  ],
  providers: [],
  bootstrap: [AppComponent]         // bootstrap root component
})
export class AppModule { }
