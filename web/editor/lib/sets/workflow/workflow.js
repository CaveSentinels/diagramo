"use strict";

/*
Copyright [2014] [Diagramo]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**Figure set declaration*/
figureSets["workflow"] = {
    name: 'Workflow',
    description : 'The workflow patterns',
    figures: [
        {figureFunction: "Seq", image: "seq.png"},
        {figureFunction: "Split", image: "split.png"},
        {figureFunction: "Sync", image: "sync.png"}
    ]
};

/**Object with default values for figures*/
var FigureDefaults = {
    /**Size of figure's segment*/
    segmentSize : 70,

    /**Size of figure's short segment*/
    segmentShortSize : 40,

    /**Size of radius*/
    radiusSize : 35,

    /**Size of offset for parallels
    * For example: for parallelogram it's projection of inclined line on X axis*/
    parallelsOffsetSize : 40,

    /**Corner radius
    * For example: for rounded rectangle*/
    corner : 10,

    /**Corner roundness
    * Value from 0 to 10, where 10 - it's circle radius.*/
    cornerRoundness : 8,

    /**Color of lines*/
    strokeStyle : "#000000",

    /**Color of fill*/
    fillStyle : "#ffffff",

    /**Text size*/
    textSize : 12,

    /**Text label*/
    textStr : "Text",

    /**Text font*/
    textFont : "Arial",

    /**Color of text*/
    textColor : "#000000"
};


function figure_Seq(x, y)
{
    var f = new Figure("Seq");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));

    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));

    var rectangleHeight = FigureDefaults.segmentShortSize + 5;

    var r = new Polygon();
//    var r = new Polyline();
//    r.style.lineCap = r.style.STYLE_LINE_CAP_BUTT;
//    r.style.lineJoin = r.style.STYLE_LINE_JOIN_MITER;
    r.addPoint(new Point(x, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y + rectangleHeight));
    r.addPoint(new Point(x, y + rectangleHeight));

    f.addPrimitive(r);

    var t2 = new Text("Seq", x + FigureDefaults.segmentSize/2, y + rectangleHeight/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    //test line style
//    f.addPrimitive(new Line(new Point(10, 10), new Point(300, 300)));
    //end test

//    //point
//    var p = new Point(x + 50, y  +50);
//    f.addPrimitive(p);

    var l = FigureDefaults.segmentShortSize + 5;
    //top
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 - 10, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + 10, y), ConnectionPoint.TYPE_FIGURE);

    //bottom
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 - 10, y + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2, y + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + 10, y + l), ConnectionPoint.TYPE_FIGURE);

    //right
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2 + 10), ConnectionPoint.TYPE_FIGURE);

    //left
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2 + 10), ConnectionPoint.TYPE_FIGURE);

    f.finalise();
    return f;
}


function figure_Split(x, y)
{
    var f = new Figure("Split");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;


    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));

    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));

    var rectangleHeight = FigureDefaults.segmentShortSize + 5;

    var r = new Polygon();
    r.addPoint(new Point(x, y + FigureDefaults.segmentSize / 2));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y + FigureDefaults.segmentSize));

    f.addPrimitive(r);

    var t2 = new Text("Split", x + FigureDefaults.segmentSize/2, y + FigureDefaults.segmentSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    var l = FigureDefaults.segmentSize + 5;

    //right
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2 + 10), ConnectionPoint.TYPE_FIGURE);

    //left
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2), ConnectionPoint.TYPE_FIGURE);

    f.finalise();
    return f;
}


function figure_Sync(x, y)
{
    var f = new Figure("Sync");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;


    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

//    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('Stroke Style', 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Fill Style', 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty('Line Width', 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty('Line Style', 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));

    f.properties.push(new BuilderProperty(BuilderProperty.SEPARATOR));
    f.properties.push(new BuilderProperty('URL', 'url', BuilderProperty.TYPE_URL));

    var rectangleHeight = FigureDefaults.segmentShortSize + 5;

    var r = new Polygon();
    r.addPoint(new Point(x, y))
    r.addPoint(new Point(x, y + FigureDefaults.segmentSize));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y + FigureDefaults.segmentSize / 2));

    f.addPrimitive(r);

    var t2 = new Text("Sync", x + FigureDefaults.segmentSize/2, y + FigureDefaults.segmentSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    var l = FigureDefaults.segmentSize + 5;

    //right
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + l / 2), ConnectionPoint.TYPE_FIGURE);

    //left
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l / 2 + 10), ConnectionPoint.TYPE_FIGURE);

    f.finalise();
    return f;
}
