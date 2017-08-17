/**
 * Layout module
 *
 * @date 08/16/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { NgModule } from '@angular/core';
import { STSidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    STSidebarComponent,
  ],
  exports: [
    STSidebarComponent,
  ]
})
export class STLayoutModule {}
