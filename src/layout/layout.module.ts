/**
 * Layout module
 *
 * @date 08/16/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdExpansionModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';

import { StBodyComponent } from './body.component';
import { StSidebarComponent } from './sidebar.component';
import { StNavbarComponent } from './navbar.component';
import { StSpinnerComponent } from './spinner.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SpinnerService } from './spinner.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MdButtonModule, MdSidenavModule,
    MdDialogModule,
    MdInputModule,
    MdExpansionModule,
    MdProgressSpinnerModule,
    MdSelectModule,
    MdToolbarModule,
    MdMenuModule,
    NgxDatatableModule,
  ],
  declarations: [
    StBodyComponent,
    StSidebarComponent, StNavbarComponent,
    StSpinnerComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdButtonModule, MdSidenavModule,
    MdDialogModule,
    MdInputModule,
    MdExpansionModule,
    MdProgressSpinnerModule,
    MdSelectModule,
    MdToolbarModule,
    MdMenuModule,
    NgxDatatableModule,
    StBodyComponent,
    StSidebarComponent, StNavbarComponent,
    StSpinnerComponent
  ],
  providers: [
    SpinnerService
  ]
})
export class StLayoutModule {}
