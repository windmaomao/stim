/**
 * Auth module
 *
 * @date 09/19/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StLayoutModule } from '../layout/layout.module';
import { AuthRoutes } from './auth.routes';
import { AuthComponents } from './auth.routes';

@NgModule({
  imports: [
    RouterModule.forChild(AuthRoutes),
    StLayoutModule,
  ],
  declarations: [
    AuthComponents
  ],
  exports: [
  ],
  providers: [
  ]
})
export class AuthModule {}
