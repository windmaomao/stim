/**
 * Diagram component
 *
 * @date 08/16/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as go from "gojs";

@Component({
  template: `
    <div class="main-content" autoscroll="true" bs-affix-target="" init-ripples="" style="">
      <div #myDiagramDiv id="myDiagramDiv"></div>
    </div>
  `,
  styleUrls: ['./diagram.component.scss']
})
export class STDiagramComponent implements AfterViewInit {
  @ViewChild('myDiagramDiv') element: ElementRef;

  ngAfterViewInit() {
    const $ = go.GraphObject.make;

    const myDiagram: go.Diagram = $(go.Diagram, this.element.nativeElement,
      {
        initialContentAlignment: go.Spot.Center,  // center the content
        "undoManager.isEnabled": true  // enable undo & redo
      });

    // define a simple Node template
    myDiagram.nodeTemplate =
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
    myDiagram.model = new go.GraphLinksModel(
      [
        { key: "Alpha", color: "lightblue" },
        { key: "Beta", color: "orange" },
        { key: "Gamma", color: "lightgreen" },
        { key: "Delta", color: "pink" }
      ],
      [
        { from: "Alpha", to: "Beta" },
        { from: "Alpha", to: "Gamma" },
        { from: "Beta", to: "Beta" },
        { from: "Gamma", to: "Delta" },
        { from: "Delta", to: "Alpha" }
      ]
    );
  }

}
