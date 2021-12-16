var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-width" : 5.0,
      "height" : 35.0,
      "width" : 75.0,
      "border-color" : "rgb(37,37,37)",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-family" : "Dubai Bold",
      "font-weight" : "normal",
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "shape" : "roundrectangle",
      "background-color" : "rgb(177,0,38)",
      "color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "font-size" : 25,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[TP_and_KW = 'tagpoint']",
    "css" : {
      "background-color" : "rgb(103,169,207)"
    }
  }, {
    "selector" : "node[TP_and_KW = 'keyword']",
    "css" : {
      "background-color" : "rgb(231,41,138)"
    }
  }, {
    "selector" : "node[TP_and_KW = 'both']",
    "css" : {
      "background-color" : "rgb(140,107,177)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "width" : 2.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "line-color" : "rgb(132,132,132)",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "text-opacity" : 1.0,
      "opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10,
      "target-arrow-shape" : "none",
      "color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[EdgeBetweenness > 531.49186236]",
    "css" : {
      "line-color" : "rgb(0,0,4)"
    }
  }, {
    "selector" : "edge[EdgeBetweenness = 531.49186236]",
    "css" : {
      "line-color" : "rgb(29,17,71)"
    }
  }, {
    "selector" : "edge[EdgeBetweenness > 280.09083168][EdgeBetweenness < 531.49186236]",
    "css" : {
      "line-color" : "mapData(EdgeBetweenness,280.09083168,531.49186236,rgb(183,55,121),rgb(29,17,71))"
    }
  }, {
    "selector" : "edge[EdgeBetweenness > 28.68981545][EdgeBetweenness < 280.09083168]",
    "css" : {
      "line-color" : "mapData(EdgeBetweenness,28.68981545,280.09083168,rgb(254,196,136),rgb(183,55,121))"
    }
  }, {
    "selector" : "edge[EdgeBetweenness = 28.68981545]",
    "css" : {
      "line-color" : "rgb(254,196,136)"
    }
  }, {
    "selector" : "edge[EdgeBetweenness < 28.68981545]",
    "css" : {
      "line-color" : "rgb(252,253,191)"
    }
  }, {
    "selector" : "edge[Count > 3]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[Count = 3]",
    "css" : {
      "width" : 11.062488416346108
    }
  }, {
    "selector" : "edge[Count > 1][Count < 3]",
    "css" : {
      "width" : "mapData(Count,1,3,4.390243902439025,11.062488416346108)"
    }
  }, {
    "selector" : "edge[Count = 1]",
    "css" : {
      "width" : 4.390243902439025
    }
  }, {
    "selector" : "edge[Count < 1]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]