/**
 * Layout module
 *
 * @date 08/16/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

import { StSidebarComponent } from './sidebar.component';
import { StNavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    FormsModule,
    MdButtonModule, MdSidenavModule,
    MdDialogModule,
    MdInputModule,
  ],
  declarations: [
    StSidebarComponent, StNavbarComponent
  ],
  exports: [
    FormsModule,
    MdButtonModule, MdSidenavModule,
    MdDialogModule,
    MdInputModule,
    StSidebarComponent, StNavbarComponent
  ]
})
export class StLayoutModule {}
