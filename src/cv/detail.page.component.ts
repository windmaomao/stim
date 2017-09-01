/**
 * Detail page component
 *
 * @date 08/30/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdSidenav } from '@angular/material';
import { CvService } from '../api/cv.service' ;

@Component({
  templateUrl: './detail.page.component.html',
  styleUrls: ['./cv.scss']
})
export class CvDetailPageComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MdSidenav;
  item: any;
  private id: string;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private ds: CvService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.ds.getEntry(this.id)
        .subscribe(res => {
          this.item = res;
          // console.log(res);
        })
      ;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
