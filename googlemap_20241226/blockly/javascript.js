Blockly.JavaScript['googlemap_initial'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  key = key.replace(/"/g,"").replace(/'/g,"");
  
  var code = 'const styleSheets = document.styleSheets;\n'+
	     'for (let i = 0; i < styleSheets.length; i++) {\n'+
	     '    const styleSheet = styleSheets[i];\n'+
	     '		const rules = styleSheet.cssRules || styleSheet.rules;\n'+
	     '		for (let j = 0; j < rules.length; j++) {\n'+
	     '			const rule = rules[j];\n'+
	     '			if (rule.selectorText === "body div") {\n'+
	     '				rule.style.overflow = "";\n'+
	     '			}\n'+
	     '		}\n'+
	     '}\n'+
	     'var url1 = "https://fustyles.github.io/webduino/googlemap_20241226/googlemap.js";\n'+
             'var s1 = document.createElement("script");\n'+
             's1.src = url1;\n'+
             'document.getElementsByTagName("head")[0].append(s1);\n'+
             'await delay(3);\n';	  
	     'var url2 = "https://maps.googleapis.com/maps/api/js?key='+key+'&callback=initMap&v=weekly&libraries=marker";\n'+
             'var s2 = document.createElement("script");\n'+
             's2.async = true;\n'+
             's2.defer = true;\n'+
             's2.src = url2;\n'+
             'document.getElementsByTagName("head")[0].append(s2);\n'+
             'function initMap() {\n'+statement+'\n}\n'+
             'await delay(3);\n';	  
  return code;
};

Blockly.JavaScript['googlemap_addmap'] = function (block) {;
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var zoom = Blockly.JavaScript.valueToCode(block, 'zoom', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");
  
  Blockly.JavaScript.definitions_['googlemap_'+divid] = 'let map_'+mapid+';\n';  
  var code = ''+
	'let position_map_'+mapid+' = {lat: '+latitude+', lng: '+longitude+'};\n'+
	'map_'+mapid+' = new google.maps.Map(document.getElementById("gamediv_"+'+divid+'), {\n'+
	'  zoom: '+zoom+',\n'+
	'  center: position_map_'+mapid+',\n'+
	'  mapId: "mapid_"+'+divid+',\n'+
	'});\n';

  return code; 
};

Blockly.JavaScript['googlemap_addpoint'] = function (block) {
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";		
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");
  
  var code = 'addMapPoint('+pointid+', map_'+mapid+', '+latitude+', '+longitude+', '+title+', '+content+');\n';
  
  return code;
};

Blockly.JavaScript['googlemap_point_function'] = function (block) {		
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var func = block.getFieldValue('func');
  var content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC)||"";
  if (func=="update_content")
    var code = 'updateMarkerContent('+pointid+', '+content+', "content");\n';
  else if (func=="update_latitude")
    var code = 'updateMarkerContent('+pointid+', '+content+', "latitude");\n';
  else if (func=="update_longitude")
    var code = 'updateMarkerContent('+pointid+', '+content+', "longitude");\n';
  else if (func=="update_position")
    var code = 'updateMarkerContent('+pointid+', '+content+', "position");\n';
  else if (func=="update_title")
    var code = 'updateMarkerContent('+pointid+', '+content+', "title");\n';
  else if (func=="open_content")
    var code = 'openMarkerContent('+pointid+');\n';
  else if (func=="close_content")
    var code = 'closeMarkerContent('+pointid+');\n';
  else if (func=="clear")
    var code = 'clearMarker('+pointid+');\n';
  else
    var code = '';
  
  return code;
};

Blockly.JavaScript['googlemap_map_function'] = function (block) {		
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");
  var func = block.getFieldValue('func');
  if (func=="clear")
    var code = 'clearMap(map_'+mapid+');\n';
  else
    var code = '';
  return code;
};
