/**
 * Diagram detail page component
 *
 * @date 08/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiagramService } from '../api/diagram.service';
import * as go from "gojs";

const $ = go.GraphObject.make;

@Component({
  templateUrl: './detail.page.component.html',
  styleUrls: ['./diagram.scss']
})
export class DiagramDetailPageComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('myDiagramDiv') element: ElementRef;
  diagram: go.Diagram;
  id: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private ds: DiagramService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.ds.get(this.id).subscribe(item => {
        console.log(item.diagram);
        this.render(item.diagram);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    this.diagram = $(go.Diagram, this.element.nativeElement,
      {
        initialContentAlignment: go.Spot.Center,  // center the content
        "undoManager.isEnabled": true  // enable undo & redo
      }
    );
  }

  render(diagram: any) {
    // define a simple Node template
    this.diagram.nodeTemplate =
      $(go.Node, "Auto",  // the Shape will go around the TextBlock
        $(go.Shape, "RoundedRectangle", { strokeWidth: 0 },
          // Shape.fill is bound to Node.data.color
          new go.Binding("fill", "color")),
        $(go.TextBlock,
          { margin: 8 },  // some room around the text
          // TextBlock.text is bound to Node.data.key
          new go.Binding("text", "key"))
      );

    // but use the default Link template, by not setting Diagram.linkTemplate

    // create the model data that will be represented by Nodes and Links
    this.diagram.model = new go.GraphLinksModel(
      diagram.nodeDataArray,
      diagram.linkDataArray
    )
  }


}
