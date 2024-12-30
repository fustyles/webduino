Blockly.JavaScript['googlemap_initial'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  key = key.replace(/"/g,"").replace(/'/g,"");

  Blockly.JavaScript.definitions_['googlemap_mapMarkers'] = 'let mapMarkers = [];\n';

  var code = ''+
	     'const styleSheets = document.styleSheets;\n'+
	     'const selectorsToRemove = ["body, html", "body *", "body div"];\n'+
	     'for (let i = 0; i < styleSheets.length; i++) {\n'+
	     '	const styleSheet = styleSheets[i];\n'+
	     '	if (styleSheet.href && styleSheet.href.includes("main.css")) {\n'+
	     '		try {\n'+
	     '			const rules = styleSheet.cssRules || styleSheet.rules;\n'+
	     '			for (let j = rules.length - 1; j >= 0; j--) {\n'+
	     '				const rule = rules[j];\n'+
	     '				if (selectorsToRemove.includes(rule.selectorText)) {\n'+
	     '					styleSheet.deleteRule(j);\n'+
	     '				}\n'+
	     '			}\n'+
	     '		} catch (e) {\n'+
	     '			console.error("Error accessing stylesheet rules: ", e);\n'+
	     '		}\n'+
	     '	}\n'+
	     '}\n'+
	     'var url = "https://maps.googleapis.com/maps/api/js?key='+key+'&callback=initMap&v=weekly&libraries=marker";\n'+
	     'var s = document.createElement("script");\n'+
	     's.async = true;\n'+
	     's.defer = true;\n'+
	     's.src = url;\n'+
	     'document.body.append(s);\n'+
	     'function initMap() {\n'+statement+'\n'+
			'function addMapPoint(pID, pMapId, pLat, pLng, pTitle, pContent) {\n'+
			'	let markerData = {\n'+
			'	  position: { lat: pLat, lng: pLng },\n'+
			'	  title: pTitle,\n'+
			'	};\n'+
			'	let marker = new google.maps.marker.AdvancedMarkerElement({\n'+
			'	  position: markerData.position,\n'+
			'	  map: pMapId,\n'+
			'	  title: markerData.title,\n'+
			'	});\n'+
			'	let infoWindow = new google.maps.InfoWindow({\n'+
			'	  content: pContent,\n'+
			'	});\n'+
			'	marker.addListener("click", () => {\n'+
			'	  infoWindow.open(pMapId, marker);\n'+
			'	});\n'+
			'	mapMarkers.push(["point_"+pID, pMapId, marker, infoWindow, markerData.position]);\n'+
			'}\n'+
			'function clearMarker(pID) {\n'+
			'	for (var i=0;i<mapMarkers.length;i++) {\n'+
			'		if ("point_"+pID==mapMarkers[i][0]) {\n'+
			'			mapMarkers[i][2].setMap(null);\n'+
			'			mapMarkers.splice(i, 1);\n'+
			'			break;\n'+
			'		}\n'+
			'	}\n'+
			'}\n'+
			'function updateMarkerContent(pID, newContent, type) {\n'+
			'	for (var i=0;i<mapMarkers.length;i++) {\n'+
			'		if ("point_"+pID==mapMarkers[i][0]) {\n'+
			'			if (type=="content") {\n'+
			'				mapMarkers[i][3].setContent(newContent);\n'+
			'			}\n'+
			'			else if (type === "latitude") {\n'+
			'				mapMarkers[i][4].lat = Number(newContent);\n'+
			'				mapMarkers[i][2].position = mapMarkers[i][4];\n'+			
			'			}\n'+
			'			else if (type === "longitude") {\n'+
			'				mapMarkers[i][4].lng = Number(newContent);\n'+
			'				mapMarkers[i][2].position = mapMarkers[i][4];\n'+			
			'			}\n'+
			'			else if (type === "position") {\n'+
			'				newContent = newContent.split(",");\n'+
			'				mapMarkers[i][4].lat = Number(newContent[0]);\n'+
			'				mapMarkers[i][4].lng = Number(newContent[1]);\n'+
			'				mapMarkers[i][2].position = mapMarkers[i][4];\n'+			
			'			}\n'+
			'			else if (type=="title") {\n'+
			'				mapMarkers[i][2].title = newContent;\n'+
			'			}\n'+
			'			else if (type=="zindex") {\n'+
			'				mapMarkers[i][2].zIndex = Number(newContent);\n'+
			'			}\n'+
			'			else if (type=="icon") {\n'+
			'				const flagImg = document.createElement("img");\n'+
			'				flagImg.src = newContent;\n'+
			'				mapMarkers[i][2].content= flagImg;\n'+
			'			}\n'+	  
			'			break;\n'+
			'		}\n'+
			'	}\n'+
			'}\n'+
			'function openMarkerContent(pID) {\n'+
			'	for (var i=0;i<mapMarkers.length;i++) {\n'+
			'		if ("point_"+pID==mapMarkers[i][0]) {\n'+
			'			mapMarkers[i][3].open(mapMarkers[i][1], mapMarkers[i][2]);\n'+
			'			break;\n'+
			'		}\n'+
			'	}\n'+
			'}\n'+
			'function closeMarkerContent(pID) {\n'+
			'	for (var i=0;i<mapMarkers.length;i++) {\n'+
			'		if ("point_"+pID==mapMarkers[i][0]) {\n'+
			'			mapMarkers[i][3].close();\n'+
			'			break;\n'+
			'		}\n'+
			'	}\n'+
			'}\n'+
			'function clearMap(pMapId) {\n'+
			'	for (var i=0;i<mapMarkers.length;i++) {\n'+
			'		if (pMapId==mapMarkers[i][1]) {\n'+
			'			mapMarkers[i][2].setMap(null);\n'+
			'			mapMarkers.splice(i, 1);\n'+
			'			i--;\n'+
			'		}\n'+
			'	}\n'+
			'}\n'+
			'function zoomMap(pMapId, zoom) {\n'+
			'	pMapId.setZoom(Number(zoom));\n'+
			'}\n'+
			'function centerMap(pMapId, lat, lng) {\n'+
			'	const newCenter = new google.maps.LatLng(Number(lat), Number(lng));\n'+
			'	pMapId.setCenter(newCenter);\n'+
			'}\n'+
			'window.addMapPoint = addMapPoint;\n'+
			'window.clearMarker = clearMarker;\n'+
			'window.updateMarkerContent = updateMarkerContent;\n'+
			'window.openMarkerContent = openMarkerContent;\n'+
			'window.closeMarkerContent = closeMarkerContent;\n'+
			'window.centerMap = centerMap;\n'+
			'window.zoomMap = zoomMap;\n'+	  
			'window.clearMap = clearMap;\n'+
	  		'loadedMap();\n'+
	     '}\n'+
	     'window.initMap = initMap;\n';

  return code;
};

Blockly.JavaScript['googlemap_loaded'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = 'async function loadedMap() {\n'+statement+'\n}\n'+
	     'window.loadedMap = loadedMap;\n';
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
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");
  
  var code = 'centerMap(map_'+mapid+', '+latitude+', '+longitude+');\n';
  
  return code;
};

Blockly.JavaScript['googlemap_map_function'] = function (block) {		
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var zoom = Blockly.JavaScript.valueToCode(block, 'zoom', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");
  var func = block.getFieldValue('func');
  if (func=="zoom")
    var code = 'zoomMap(map_'+mapid+', '+zoom+');\n';	
  else if (func=="clear")
    var code = 'clearMap(map_'+mapid+');\n';
  else
    var code = '';
  return code;
};
