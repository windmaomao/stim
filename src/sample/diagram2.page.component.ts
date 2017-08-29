/**
 * Diagram advance page component
 *
 * @date 08/28/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as go from "gojs";
import { diagramData } from './diagram2.data';

@Component({
  template: `
    <st-sidebar></st-sidebar>
    <div class="main-container">
      <st-navbar></st-navbar>
      <div class="main-content" autoscroll="true" bs-affix-target="" init-ripples="" style="">
        <div #myDiagramDiv id="myDiagramDiv"></div>
      </div>
    </div>
  `,
  styleUrls: ['./diagram.scss']
})
export class SampleDiagram2PageComponent implements AfterViewInit {
  @ViewChild('myDiagramDiv') element: ElementRef;

  public json: Object;

  constructor() {
    this.json = diagramData;
  }

  ngAfterViewInit() {
    const $ = go.GraphObject.make;

    const myDiagram: go.Diagram = $(go.Diagram, this.element.nativeElement,
      {
        initialContentAlignment: go.Spot.Center,  // center the content
        "undoManager.isEnabled": true  // enable undo & redo
      });

    // define a simple Node template
    var portSize = new go.Size(6, 6);
    myDiagram.nodeTemplate =
      $(go.Node, "Table",
        { locationObjectName: "BODY",
          locationSpot: go.Spot.Center,
          selectionObjectName: "BODY",
          // contextMenu: nodeMenu
        },
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        // the body
        $(go.Panel, "Auto",
          { row: 1, column: 1, name: "BODY",
            stretch: go.GraphObject.Fill },
          $(go.Shape, "Rectangle",
            { fill: "#AC193D", stroke: '#888', strokeWidth: 1, width: 50, height: 50 },
            new go.Binding("width", "width"),
            new go.Binding("height", "height"),
            new go.Binding("fill", "fill")
          ),
          $(go.TextBlock,
            { margin: 10, textAlign: "center", font: "14px  Segoe UI,sans-serif", stroke: "white", editable: true },
            new go.Binding("text", "name").makeTwoWay(),
            new go.Binding("stroke", "color")
          )
        ),  // end Auto Panel body
        // the Panel holding the left port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.leftArray
        $(go.Panel, "Vertical",
          new go.Binding("itemArray", "leftArray"),
          { row: 1, column: 0,
            itemTemplate:
              $(go.Panel,
                { _side: "left",  // internal property to make it easier to tell which side it's on
                  fromSpot: go.Spot.Left, toSpot: go.Spot.Left,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  // contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  { stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(1,0) },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        ),  // end Vertical Panel
        // the Panel holding the top port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.topArray
        $(go.Panel, "Horizontal",
          new go.Binding("itemArray", "topArray"),
          { row: 0, column: 1,
            itemTemplate:
              $(go.Panel,
                { _side: "top",
                  fromSpot: go.Spot.Top, toSpot: go.Spot.Top,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  // contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  { stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(0, 1) },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        ),  // end Horizontal Panel
        // the Panel holding the right port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.rightArray
        $(go.Panel, "Vertical",
          new go.Binding("itemArray", "rightArray"),
          { row: 1, column: 2,
            itemTemplate:
              $(go.Panel,
                { _side: "right",
                  fromSpot: go.Spot.Right, toSpot: go.Spot.Right,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  // contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  { stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(1, 0) },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        ),  // end Vertical Panel
        // the Panel holding the bottom port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.bottomArray
        $(go.Panel, "Horizontal",
          new go.Binding("itemArray", "bottomArray"),
          { row: 2, column: 1,
            itemTemplate:
              $(go.Panel,
                { _side: "bottom",
                  fromSpot: go.Spot.Bottom, toSpot: go.Spot.Bottom,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  // contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  { stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(0, 1) },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        )  // end Horizontal Panel
      );  // end Node

    // but use the default Link template, by not setting Diagram.linkTemplate
    myDiagram.linkTemplate = $(go.Link,
      {
        // routing: go.Link.AvoidsNodes,
        routing: go.Link.Orthogonal,
        corner: 3,
        // fromEndSegmentLength: 1,
        // toEndSegmentLength: 1,
        // fromShortLength: 1,
        // smoothness: 0.05,
        // curve: go.Link.JumpOver,
        // curve: go.Link.Bezier,
        // adjusting: go.Link.Stretch,
        reshapable: true,
        resegmentable: true,
        // relinkableFrom: true,
        // relinkableTo: true
      },
      new go.Binding("points").makeTwoWay(),
      $(go.Shape,
        { stroke: "#2F4F4F", strokeWidth: 2 },
        new go.Binding("stroke", "link")
      )
    );

    // create the model data that will be represented by Nodes and Links
    myDiagram.model = go.Model.fromJson(this.json);
  }

}
