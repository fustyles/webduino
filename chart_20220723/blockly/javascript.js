Blockly.JavaScript['chart_analoggauge_create'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  var decimal = Blockly.JavaScript.valueToCode(block, 'decimal', Blockly.JavaScript.ORDER_ATOMIC);
  var unit = Blockly.JavaScript.valueToCode(block, 'unit', Blockly.JavaScript.ORDER_ATOMIC);
  var count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
  var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);

  Blockly.JavaScript.definitions_['include_css'] = ''+
    'function include_css(url) {\n'+
	'	var link  = document.createElement("link");\n'+
	'	link.rel  = "stylesheet";\n'+
	'	link.type = "text/css";\n'+
	'	link.href = url;\n'+
	'	link.media = "all";\n'+
	'	document.getElementsByTagName("head")[0].appendChild(link);\n'+
	'}\n';
  
  var code = 'include_css("https://fustyles.github.io/webduino/chart_20220723/jquery.simplegauge.css");\nawait delay(2, true);\n';
  code +=  'simpleGauge({\n'+
	'	id:  '+id+',\n'+
    '   value: '+val+',\n'+	
    '   min: '+min+',\n'+
    '   max: '+max+',\n'+
	'	width: '+width+',\n'+
	'	height: '+height+',\n'+
	'	left: '+left+',\n'+
	'	top: '+top+',\n'+
	'	decimal: '+decimal+',\n'+
	'	unit: '+unit+',\n'+
    '    template: [\n'+
    '        "<div class=\'simpleGauge_container\'>",\n'+
    '        "<div class=\'simpleGauge\'>",\n'+
    '        "<div class=\'simpleGauge_title\'></div>",\n'+
    '        "<svg class=\'simpleGauge_bars simpleGauge_block\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\'></svg>",\n'+
    '        "<div class=\'simpleGauge_labels simpleGauge_block\'></div>",\n'+
    '        "<div class=\'simpleGauge_ticks simpleGauge_block\'></div>",\n'+
    '        "<svg class=\'simpleGauge_pointers simpleGauge_block\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\'></svg>",\n'+
    '        "<div class=\'simpleGauge_digital\'></div>",\n'+
    '        "</div>",\n'+
    '        "</div>"\n'+
    '    ].join(""),\n'+
    '    type:   "analog digital",\n'+
    '    container: {\n'+
    '        scale: 90,\n'+
    '        style: {}\n'+
    '    },\n'+
    '    title: {\n'+
    '        text: '+name+',\n'+
    '        style: {}\n'+
    '    },\n'+
    '    digital: {\n'+
    '        text: "{value.1}",\n'+
    '        style: {\n'+
    '            color: "auto"\n'+
    '        }\n'+
    '    },\n'+
    '    analog: {\n'+
    '        minAngle: -'+angle+',\n'+
    '        maxAngle: '+angle+'\n'+
    '    },\n'+
    '    labels: {\n'+
    '        text:   "{value}",\n'+
    '        count:  '+count+',\n'+
    '        scale:  95,\n'+
    '        style:  ""\n'+
    '    },\n'+
    '    ticks: {\n'+
    '        count:  '+count+',\n'+
    '        scale1: 77,\n'+
    '        scale2: 83,\n'+
    '        style:  ""\n'+
    '    },\n'+
    '    subTicks: {\n'+
    '        count:  0,\n'+
    '        scale1: 80,\n'+
    '        scale2: 83,\n'+
    '        style:  ""\n'+
    '    },\n'+
    '    bars: {\n'+
    '        scale1: 75,\n'+
    '        scale2: 80,\n'+
    '        style:  "",\n'+
    '        colors: \n'+
    '            '+color+
    '        \n'+
    '    },\n'+
    '    pointer: {\n'+
    '        scale: 85,\n'+
    '        shape: [\n'+
    '            "-2,-10",\n'+
    '            "2,-10",\n'+
    '            "2.1,-5.3",\n'+
    '            "4,-4",\n'+
    '            "5.3,-2.1",\n'+
    '            "5.7,0",\n'+
    '            "5.3,2.1",\n'+
    '            "4,4",\n'+
    '            "2.1,5.3",\n'+
    '            "2,50",\n'+
    '            "1.5,96",\n'+
    '            "0,100",\n'+
    '            "-1,96",\n'+
    '            "-2,50",\n'+
    '            "-2.1,5.3",\n'+
    '            "-4,4",\n'+
    '            "-5.3,2.1",\n'+
    '            "-5.7,0",\n'+
    '            "-5.3,-2.1",\n'+
    '            "-4,-4",\n'+
    '            "-2.1,-5.3",\n'+
    '            "-2,-10"\n'+
    '        ].join(" "),\n'+
    '        style: {\n'+
    '            color: "#8778",\n'+
    '            borderWidth: 0,\n'+
    '            borderColor: "#8778"\n'+
    '        }\n'+
    '    }\n'+
	'});';
												
  return code;
};

Blockly.JavaScript['chart_analoggauge_colorset'] = function(block) {
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '[ '+val+', '+color+', 0, 0 ]';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['chart_analoggauge_set'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  code = 'simpleGauge({id:'+id+', value: '+val+'});\n';
  return code;
};

Blockly.JavaScript['chart_doughnut_create'] = function(block) {
  var id = "chart_"+this.id.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  var decimal = Blockly.JavaScript.valueToCode(block, 'decimal', Blockly.JavaScript.ORDER_ATOMIC);
  var labelsize = Blockly.JavaScript.valueToCode(block, 'labelsize', Blockly.JavaScript.ORDER_ATOMIC);
  var valuesize = Blockly.JavaScript.valueToCode(block, 'valuesize', Blockly.JavaScript.ORDER_ATOMIC);
  var unit = Blockly.JavaScript.valueToCode(block, 'unit', Blockly.JavaScript.ORDER_ATOMIC);
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = "";
  code +=  'doughnutWidget.chartname['+name+'] = {\n'+
			'	container: "'+id+'",\n'+
			'	width: '+width+',\n'+
			'	height: '+height+',\n'+
			'	left: '+left+',\n'+
			'	top: '+top+',\n'+
			'	cutout: 50,\n'+
			'	data: {\n'+
			'		val: '+val+',\n'+
			'		min: '+min+',\n'+
			'		max: '+max+',\n'+
			'		color: '+color+',\n'+
			'		unit: " "+'+unit+',\n'+
			'		decimal: '+decimal+',\n'+	
			'		labelsize: '+labelsize+',\n'+
			'		valuesize: '+valuesize+',\n'+
			'		//link: "http://www.google.com",\n'+
			'		//click: function(e) {\n'+
			'		//	console.log("hi");\n'+
			'		//}\n'+
			'	}\n'+
			'};\n'+
			'doughnutWidget.createChart('+name+');\n';
												
  return code;
};

Blockly.JavaScript['chart_doughnut_set'] = function(block) {
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  code = 'doughnutWidget.updateData('+name+', '+val+');\n';
  return code;
};

Blockly.JavaScript['chart_gauge_create'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  var decimal = Blockly.JavaScript.valueToCode(block, 'decimal', Blockly.JavaScript.ORDER_ATOMIC);
  var labelsize = Blockly.JavaScript.valueToCode(block, 'labelsize', Blockly.JavaScript.ORDER_ATOMIC);
  var unit = Blockly.JavaScript.valueToCode(block, 'unit', Blockly.JavaScript.ORDER_ATOMIC);
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = "";
  code +=  'temperatureGauge({\n'+
			'	id: '+id+',\n'+
			'	name: '+name+',\n'+			
			'	width: '+width+',\n'+
			'	left: '+left+',\n'+
			'	top: '+top+',\n'+
			'	val: '+val+',\n'+
			'	min: '+min+',\n'+
			'	max: '+max+',\n'+
			'	fillColor: '+color+',\n'+
			'	borderWidth: 4,\n'+		
			'	unit: " "+'+unit+',\n'+
			'	decimal: '+decimal+',\n'+	
			'	showLabel: true,\n'+	
			'	labelSize: '+labelsize+',\n'+
			'});\n';
												
  return code;
};

Blockly.JavaScript['chart_gauge_set'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  code = 'temperatureGauge({id: '+id+',val: '+val+'});\n';
  return code;
};

Blockly.JavaScript['chart_waterbubble_create'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  var decimal = Blockly.JavaScript.valueToCode(block, 'decimal', Blockly.JavaScript.ORDER_ATOMIC);
  var unit = Blockly.JavaScript.valueToCode(block, 'unit', Blockly.JavaScript.ORDER_ATOMIC);
  var watercolor = Blockly.JavaScript.valueToCode(block, 'watercolor', Blockly.JavaScript.ORDER_ATOMIC);
  var textcolor = Blockly.JavaScript.valueToCode(block, 'textcolor', Blockly.JavaScript.ORDER_ATOMIC);  
  
  var code = "";
  code +=  'waterbubble({\n'+
			'	id: '+id+',\n'+
			'	name: '+name+',\n'+			
			'	radius: '+radius+',\n'+
			'	left: '+left+',\n'+
			'	top: '+top+',\n'+
			'	val: '+val+',\n'+
			'	min: '+min+',\n'+
			'	max: '+max+',\n'+
			'	unit: " "+'+unit+',\n'+
			'	decimal: '+decimal+',\n'+
			'	waterColor: '+watercolor+',\n'+
			'	textColor: '+textcolor+',\n'+			
			'	lineWidth: 4,\n'+
			'	wave: true,\n'+
			'	animation: true\n'+		
			'});\n';
												
  return code;
};

Blockly.JavaScript['chart_waterbubble_set'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  code = 'waterbubble({id: '+id+',val: '+val+'});\n';
  return code;
};

Blockly.JavaScript['chart_line_create'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
  var title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
  var titlex = Blockly.JavaScript.valueToCode(block, 'titlex', Blockly.JavaScript.ORDER_ATOMIC);
  var titley = Blockly.JavaScript.valueToCode(block, 'titley', Blockly.JavaScript.ORDER_ATOMIC); 
  var dataset = Blockly.JavaScript.valueToCode(block, 'dataset', Blockly.JavaScript.ORDER_ATOMIC);
  if ((dataset.indexOf("[")==0)&&(dataset.lastIndexOf("]")==dataset.length-1))
    dataset = dataset.substring(1,dataset.length-1);
  else
	dataset = "{}";
  
  var code = "";
  code += 'var config = {\n'+
'	  id: '+id+',\n'+
'	  type: "line",\n'+
'	  data: {\n'+
'			  labels: [],\n'+
'			  datasets: [\n'+
'				'+dataset+'\n'+
'			  ]\n'+
'	  },\n'+
'	  options: {\n'+
'		responsive: true,\n'+
'		maintainAspectRatio: false,\n'+
'		plugins: {\n'+
'		  legend: {\n'+
'			position: "top",\n'+
'		  },\n'+
'		  title: {\n'+
'			display: true,\n'+
'			text: '+title+'\n'+
'		  }\n'+
'		},\n'+
'		scales: {\n'+
'				yAxes: {\n'+
'					title: {\n'+
'						display: true,\n'+
'						text: '+titley+',\n'+
'					},\n'+
'					ticks: {\n'+
'						precision: 0\n'+
'					}\n'+
'				},\n'+
'				xAxes: {\n'+
'					title: {\n'+
'						display: true,\n'+
'						text: '+titlex+',\n'+
'					}\n'+
'				}\n'+
'			}\n'+
'	  },\n'+
'	  width: '+width+',\n'+
'	  height: '+height+',\n'+
'	  left: '+left+',\n'+
'	  top: '+top+',\n'+
'	  count: '+count+'\n'+
'	};\n'+
'	linechart(config);\n';
												
  return code;
};

Blockly.JavaScript['chart_line_dataset'] = function(block) {
  var label = Blockly.JavaScript.valueToCode(block, 'label', Blockly.JavaScript.ORDER_ATOMIC);
  var borderColor = Blockly.JavaScript.valueToCode(block, 'borderColor', Blockly.JavaScript.ORDER_ATOMIC);
  var backgroundColor = Blockly.JavaScript.valueToCode(block, 'backgroundColor', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{'+
			'  label: '+label+','+
			'  data: [],\n'+
			'  borderColor: '+borderColor+','+
			'  backgroundColor: '+backgroundColor+
			'}';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['chart_line_set'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var datax = Blockly.JavaScript.valueToCode(block, 'datax', Blockly.JavaScript.ORDER_ATOMIC);
  var dataset = Blockly.JavaScript.valueToCode(block, 'dataset', Blockly.JavaScript.ORDER_ATOMIC);
  if ((dataset.indexOf("[")==0)&&(dataset.lastIndexOf("]")==dataset.length-1))
      dataset = datax+', ' + dataset.substring(1,dataset.length-1);
  else
	  dataset = "";

  code = 'linechart({id: '+id+', data: ['+dataset+']});\n';
  return code;
};

Blockly.JavaScript['chart_line_clear'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'linechart({id: '+id+', clear: ""});\n';
  return code;
};

Blockly.JavaScript['chart_bar_create'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
  var title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
  var titlex = Blockly.JavaScript.valueToCode(block, 'titlex', Blockly.JavaScript.ORDER_ATOMIC);
  var titley = Blockly.JavaScript.valueToCode(block, 'titley', Blockly.JavaScript.ORDER_ATOMIC); 
  var dataset = Blockly.JavaScript.valueToCode(block, 'dataset', Blockly.JavaScript.ORDER_ATOMIC);
  if ((dataset.indexOf("[")==0)&&(dataset.lastIndexOf("]")==dataset.length-1))
    dataset = dataset.substring(1,dataset.length-1);
  else
	dataset = "{}";
  
  var code = "";
  code += 'var config = {\n'+
'	  id: '+id+',\n'+
'	  type: "bar",\n'+
'	  data: {\n'+
'			  labels: [],\n'+
'			  datasets: [\n'+
'				'+dataset+'\n'+
'			  ]\n'+
'	  },\n'+
'	  options: {\n'+
'		responsive: true,\n'+
'		maintainAspectRatio: false,\n'+
'		plugins: {\n'+
'		  legend: {\n'+
'			position: "top",\n'+
'		  },\n'+
'		  title: {\n'+
'			display: true,\n'+
'			text: '+title+'\n'+
'		  }\n'+
'		},\n'+
'		scales: {\n'+
'				yAxes: {\n'+
'					title: {\n'+
'						display: true,\n'+
'						text: '+titley+',\n'+
'					},\n'+
'					ticks: {\n'+
'						precision: 0\n'+
'					}\n'+
'				},\n'+
'				xAxes: {\n'+
'					title: {\n'+
'						display: true,\n'+
'						text: '+titlex+',\n'+
'					}\n'+
'				}\n'+
'			}\n'+
'	  },\n'+
'	  width: '+width+',\n'+
'	  height: '+height+',\n'+
'	  left: '+left+',\n'+
'	  top: '+top+',\n'+
'	  count: '+count+'\n'+
'	};\n'+
'	barchart(config);\n';
												
  return code;
};

Blockly.JavaScript['chart_bar_dataset'] = function(block) {
  var label = Blockly.JavaScript.valueToCode(block, 'label', Blockly.JavaScript.ORDER_ATOMIC);
  var borderColor = Blockly.JavaScript.valueToCode(block, 'borderColor', Blockly.JavaScript.ORDER_ATOMIC);
  var backgroundColor = Blockly.JavaScript.valueToCode(block, 'backgroundColor', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{'+
			'  label: '+label+','+
			'  data: [],\n'+
			'  borderColor: '+borderColor+','+
			'  backgroundColor: '+backgroundColor+
			'}';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['chart_bar_set'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var datax = Blockly.JavaScript.valueToCode(block, 'datax', Blockly.JavaScript.ORDER_ATOMIC);
  var dataset = Blockly.JavaScript.valueToCode(block, 'dataset', Blockly.JavaScript.ORDER_ATOMIC);
  if ((dataset.indexOf("[")==0)&&(dataset.lastIndexOf("]")==dataset.length-1))
      dataset = datax+', ' + dataset.substring(1,dataset.length-1);
  else
	  dataset = "";

  var code = 'barchart({id: '+id+', data: ['+dataset+']});\n';
  return code;
};

Blockly.JavaScript['chart_bar_clear'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'barchart({id: '+id+', clear: ""});\n';
  return code;
};