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

import { AppComponent } from './app.component';
import { appComponents, appRoutes } from './app.routes';

@NgModule({
  declarations: [
    appComponents
  ],
  imports: [
    BrowserModule,
    STLayoutModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
      // enableTracing: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
