Blockly.JavaScript['googlemap_initial'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  
  var code = 'var url = "https://maps.googleapis.com/maps/api/js?key="+'+key+'+"&callback=initMap&v=weekly&libraries=marker";\n'+
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
  var mapid = block.getFieldValue('divid')||"";
  var divid = '"'+mapid+'"';
  
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
  var mapid = block.getFieldValue('divid')||"";
  var divid = '"'+mapid+'"';
  
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
  var event = block.getFieldValue('event');
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var mapid = block.getFieldValue('divid')||"";
  var divid = '"'+mapid+'"';

  var code = 'map_'+mapid+'.addListener("'+event+'", async function(e) {\n'+statement+'\n}\n);\n';	
  return code;
};

Blockly.JavaScript['googlemap_map_event_remove'] = function (block) {
  var event = block.getFieldValue('event');
  var mapid = block.getFieldValue('divid')||"";
  var divid = '"'+mapid+'"';

  var code = 'google.maps.event.clearListeners(map_'+mapid+', "'+event+'");\n';	  
  return code;
};

Blockly.JavaScript['googlemap_addpoint'] = function (block) {	
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"22.625384";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"120.371016";
  var altitude = Blockly.JavaScript.valueToCode(block, 'altitude', Blockly.JavaScript.ORDER_ATOMIC)||"0";
  var title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var mapid = block.getFieldValue('divid')||"";
  var divid = '"'+mapid+'"';
  
  var code = 'addMapPoint('+pointid+', map_'+mapid+', '+latitude+', '+longitude+', '+altitude+', '+title+', '+content+');\n';
  
  return code;
};

Blockly.JavaScript['googlemap_point_event_add'] = function (block) {
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var event = block.getFieldValue('event');
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');

  var code = 'getMarker('+pointid+').addListener("'+event+'", async function(e) {\n'+statement+'\n}\n);\n';	
  return code;
};

Blockly.JavaScript['googlemap_point_event_remove'] = function (block) {
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var event = block.getFieldValue('event');

  var code = 'google.maps.event.clearListeners(getMarker('+pointid+'), "'+event+'");\n';
  return code;
};

Blockly.JavaScript['googlemap_point_function'] = function (block) {		
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var func = block.getFieldValue('func');
  var content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC)||"";
  
  var code = 'updateMarkerContent('+pointid+', '+content+', "'+func+'");\n';
  return code;
};

Blockly.JavaScript['googlemap_point_get'] = function (block) {		
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var property = block.getFieldValue('property');
  
  var code = 'getMarkerSetting('+pointid+', "'+property+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['googlemap_map_center'] = function (block) {
  var type = block.getFieldValue('type');
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var mapid = block.getFieldValue('divid')||"";
  var divid = '"'+mapid+'"';

  if (type=="center")
  	var code = 'centerMap(map_'+mapid+', '+latitude+', '+longitude+');\n';
  else if (type=="position")
  	var code = 'positionMap(map_'+mapid+', '+latitude+', '+longitude+');\n';	  
  else
  	var code = '';	  
  return code;
};

Blockly.JavaScript['googlemap_map_function'] = function (block) {		
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var func = block.getFieldValue('func');
  var mapid = block.getFieldValue('divid')||"";
  var divid = '"'+mapid+'"';	
	
  var code = 'updateMapContent(map_'+mapid+', '+val+', "'+func+'");\n';	
  return code;
};
