Blockly.JavaScript['googlemap_initial'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  
  var code = 'var url = "https://maps.googleapis.com/maps/api/js?key="+'+key+'+"&callback=initMap&v=weekly&libraries=marker&v=beta";\n'+
             'var s = document.createElement("script");\n'+
             's.async = true;\n'+
             's.defer = true;\n'+
             's.src = url;\n'+
             'document.body.append(s);\n'+
             'function initMap() {\n'+statement+'\nif (typeof loadedMap === "function") loadedMap();\n}\n'+
             'window.initMap = initMap;\n';
  return code;
};

Blockly.JavaScript['googlemap_loaded'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = 'async function loadedMap() {\n'+statement+'\n}\n'+
	     'window.loadedMap = loadedMap;\n';
  return code;
};

Blockly.JavaScript['googlemap_addmap'] = function (block) {
  var type = block.getFieldValue('type');
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
	'  mapTypeId: "'+type+'",\n'+	  
	'});\n';

  return code; 
};

Blockly.JavaScript['googlemap_addstreetview'] = function (block) {
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var heading = Blockly.JavaScript.valueToCode(block, 'heading', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var pitch = Blockly.JavaScript.valueToCode(block, 'pitch', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");
  
  Blockly.JavaScript.definitions_['googlemap_'+divid] = 'let map_'+mapid+';\n';  
  var code = ''+
	'let position_map_'+mapid+' = {lat: '+latitude+', lng: '+longitude+'};\n'+
	'map_'+mapid+' = new google.maps.StreetViewPanorama(document.getElementById("gamediv_"+'+divid+'), {\n'+
	'  position: position_map_'+mapid+',\n'+
	'  mapId: "mapid_"+'+divid+',\n'+
	'  pov: {\n'+
	'       heading: '+Number(heading)+',\n'+
	'       pitch: '+Number(pitch)+',\n'+
	'  },\n'+
	'});\n';

  return code; 
};

Blockly.JavaScript['googlemap_map_event_add'] = function (block) {
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var event = block.getFieldValue('event');
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");

  var code = 'map_'+mapid+'.addListener("'+event+'", () => {\n'+statement+'\n}\n);\n';	
  return code;
};

Blockly.JavaScript['googlemap_map_event_remove'] = function (block) {
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var event = block.getFieldValue('event');
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");

  var code = 'map_'+mapid+'.removeListener("'+event+'");\n';	  
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

Blockly.JavaScript['googlemap_point_event_add'] = function (block) {
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var event = block.getFieldValue('event');
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');

  var code = 'getMarker('+pointid+').addListener("'+event+'", () => {\n'+statement+'\n}\n);\n';	
  return code;
};

Blockly.JavaScript['googlemap_point_event_remove'] = function (block) {
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var event = block.getFieldValue('event');

  var code = 'getMarker('+pointid+').removeListener("'+event+'");\n';	  
  return code;
};

Blockly.JavaScript['googlemap_point_function'] = function (block) {		
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var func = block.getFieldValue('func');
  var content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC)||"";
  if (func=="update_content")
    var code = 'updateMarkerContent('+pointid+', '+content+', "content");\n';
  else if (func=="update_headercontent")
    var code = 'updateMarkerContent('+pointid+', '+content+', "headercontent");\n';	  
  else if (func=="update_latitude")
    var code = 'updateMarkerContent('+pointid+', '+content+', "latitude");\n';
  else if (func=="update_longitude")
    var code = 'updateMarkerContent('+pointid+', '+content+', "longitude");\n';
  else if (func=="update_position")
    var code = 'updateMarkerContent('+pointid+', '+content+', "position");\n';
  else if (func=="update_title")
    var code = 'updateMarkerContent('+pointid+', '+content+', "title");\n';
  else if (func=="update_zindex")
    var code = 'updateMarkerContent('+pointid+', '+content+', "zindex");\n';	  
  else if (func=="update_icon")
    var code = 'updateMarkerContent('+pointid+', '+content+', "icon");\n';	  
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

Blockly.JavaScript['googlemap_map_center'] = function (block) {
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var type = block.getFieldValue('type');
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");

  if (type=="center")
  	var code = 'centerMap(map_'+mapid+', '+latitude+', '+longitude+');\n';
  else if (type=="position")
  	var code = 'positionMap(map_'+mapid+', '+latitude+', '+longitude+');\n';	  
  else
  	var code = '';	  
  return code;
};

Blockly.JavaScript['googlemap_map_function'] = function (block) {		
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");
  var func = block.getFieldValue('func');
  if (func=="zoom")
    var code = 'zoomMap(map_'+mapid+', '+val+');\n';	
  else if (func=="clear")
    var code = 'clearMap(map_'+mapid+');\n';
  else if (func=="heading")
    var code = 'headingMap(map_'+mapid+', '+val+');\n';	
  else if (func=="pitch")
    var code = 'pitchMap(map_'+mapid+', '+val+');\n';	
  else
    var code = '';
  return code;
};
