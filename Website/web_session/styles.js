var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "font-family" : "Elephant",
      "font-weight" : "normal",
      "border-opacity" : 1.0,
      "background-opacity" : 1.0,
      "text-opacity" : 1.0,
      "background-color" : "rgb(253,141,60)",
      "font-size" : 15,
      "text-valign" : "center",
      "text-halign" : "center",
      "width" : 75.0,
      "border-color" : "rgb(204,204,204)",
      "height" : 35.0,
      "color" : "rgb(0,0,0)",
      "shape" : "roundrectangle",
      "border-width" : 0.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Target_Desc = 'poemTitle']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[TP_and_KW = 'tagpoint']",
    "css" : {
      "background-color" : "rgb(158,202,225)"
    }
  }, {
    "selector" : "node[TP_and_KW = 'keyword']",
    "css" : {
      "background-color" : "rgb(250,159,181)"
    }
  }, {
    "selector" : "node[TP_and_KW = 'both']",
    "css" : {
      "background-color" : "rgb(158,154,200)"
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
      "color" : "rgb(0,0,0)",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "opacity" : 1.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(132,132,132)",
      "width" : 2.0,
      "font-size" : 10,
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "content" : ""
    }
  }, {
    "selector" : "edge[EdgeBetweenness > 531.49186236]",
    "css" : {
      "line-color" : "rgb(68,1,84)"
    }
  }, {
    "selector" : "edge[EdgeBetweenness = 531.49186236]",
    "css" : {
      "line-color" : "rgb(68,2,86)"
    }
  }, {
    "selector" : "edge[EdgeBetweenness > 280.09083168][EdgeBetweenness < 531.49186236]",
    "css" : {
      "line-color" : "mapData(EdgeBetweenness,280.09083168,531.49186236,rgb(33,145,140),rgb(68,2,86))"
    }
  }, {
    "selector" : "edge[EdgeBetweenness > 28.68981545][EdgeBetweenness < 280.09083168]",
    "css" : {
      "line-color" : "mapData(EdgeBetweenness,28.68981545,280.09083168,rgb(251,231,35),rgb(33,145,140))"
    }
  }, {
    "selector" : "edge[EdgeBetweenness = 28.68981545]",
    "css" : {
      "line-color" : "rgb(251,231,35)"
    }
  }, {
    "selector" : "edge[EdgeBetweenness < 28.68981545]",
    "css" : {
      "line-color" : "rgb(253,231,37)"
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