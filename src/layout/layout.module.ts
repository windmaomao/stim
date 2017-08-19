/**
 * Layout module
 *
 * @date 08/16/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { NgModule } from '@angular/core';
import { STSidebarComponent } from './sidebar.component';
import { STNavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    STSidebarComponent, STNavbarComponent
  ],
  exports: [
    STSidebarComponent, STNavbarComponent
  ]
})
export class STLayoutModule {}
