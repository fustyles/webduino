Blockly.JavaScript['googlemap_initial'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');

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
	     'var url = "https://maps.googleapis.com/maps/api/js?key="+'+key+'+"&callback=initMap&v=weekly&libraries=marker";\n'+
	     'var s = document.createElement("script");\n'+
	     's.async = true;\n'+
	     's.defer = true;\n'+
	     's.src = url;\n'+
	     'document.body.append(s);\n'+
	     'function initMap() {\n'+statement+'\n'+
			'function addMapPoint(pID, pMapId, pLat, pLng, pAlt, pTitle, pContent) {\n'+
			'	let markerData = {\n'+
			'	  position: { lat: pLat, lng: pLng, altitude: pAlt},\n'+
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
			'function getMarker(pID) {\n'+
			'	for (var i=0;i<mapMarkers.length;i++) {\n'+
			'		if ("point_"+pID==mapMarkers[i][0]) {\n'+
			'			return mapMarkers[i][2];\n'+
			'		}\n'+
			'	}\n'+
			'	return null;\n'+
			'}\n'+
			'function updateMarkerContent(pID, newContent, type) {\n'+
			'	for (var i=0;i<mapMarkers.length;i++) {\n'+
			'		if ("point_"+pID==mapMarkers[i][0]) {\n'+
			'			if (type=="update_content") {\n'+
			'				mapMarkers[i][3].setContent(newContent);\n'+
			'			} else if (type=="update_headercontent") {\n'+
			'				mapMarkers[i][3].setHeaderContent(newContent);\n'+
			'			} else if (type === "update_latitude") {\n'+
			'				mapMarkers[i][4].lat = Number(newContent);\n'+
			'				mapMarkers[i][4].lng = mapMarkers[i][2].position.lng;\n'+
			'				mapMarkers[i][4].altitude = mapMarkers[i][2].position.altitude;\n'+
			'				mapMarkers[i][2].position = mapMarkers[i][4];\n'+				
			'			} else if (type === "update_longitude") {\n'+
			'				mapMarkers[i][4].lat = mapMarkers[i][2].position.lat;\n'+
			'				mapMarkers[i][4].lng = Number(newContent);\n'+
			'				mapMarkers[i][4].altitude = mapMarkers[i][2].position.altitude;\n'+
			'				mapMarkers[i][2].position = mapMarkers[i][4];\n'+
			'			} else if (type === "update_altitude") {\n'+
			'				mapMarkers[i][4].lat = mapMarkers[i][2].position.lat;\n'+
			'				mapMarkers[i][4].lng = mapMarkers[i][2].position.lng;\n'+
			'				mapMarkers[i][4].altitude = Number(newContent);\n'+
			'				mapMarkers[i][2].position = mapMarkers[i][4];\n'+
			'			} else if (type === "update_position") {\n'+
			'				newContent = newContent.split(",");\n'+
			'				mapMarkers[i][4].lat = Number(newContent[0]);\n'+
			'				mapMarkers[i][4].lng = Number(newContent[1]);\n'+
			'				mapMarkers[i][4].altitude = Number(newContent[2]);\n'+
			'				mapMarkers[i][2].position = mapMarkers[i][4];\n'+
			'			} else if (type=="update_title") {\n'+
			'				mapMarkers[i][2].title = newContent;\n'+
			'			} else if (type=="update_zindex") {\n'+
			'				mapMarkers[i][2].zIndex = Number(newContent);\n'+
			'			} else if (type=="update_icon") {\n'+
			'				const flagImg = document.createElement("img");\n'+
			'				flagImg.src = newContent;\n'+
			'				mapMarkers[i][2].content= flagImg;\n'+
			'			} else if (type=="update_gmpDraggable") {\n'+
			'				mapMarkers[i][2].gmpDraggable = newContent;\n'+
			'			} else if (type=="update_gmpClickable") {\n'+
			'				mapMarkers[i][2].gmpClickable = newContent;\n'+
			'			} else if (type=="open_content") {\n'+
			'				mapMarkers[i][3].open(mapMarkers[i][1], mapMarkers[i][2]);\n'+
			'			} else if (type=="close_content") {\n'+
			'				mapMarkers[i][3].close();\n'+
			'			} else if (type=="clear") {\n'+
			'				mapMarkers[i][2].setMap(null);\n'+
			'				mapMarkers.splice(i, 1);\n'+
			'			}\n'+
			'			break;\n'+
			'		}\n'+
			'	}\n'+
			'}\n'+
			'function getMarkerSetting(pID, property) {\n'+
			'	for (var i=0;i<mapMarkers.length;i++) {\n'+
			'		if ("point_"+pID==mapMarkers[i][0]) {\n'+
			'			if (property=="latitude") {\n'+
			'				const position = mapMarkers[i][2].position;\n'+
			'				return position.lat;\n'+
			'			} else if (property=="longtitude") {\n'+
			'				const position = mapMarkers[i][2].position;\n'+
			'				return position.lng;\n'+
			'			} else if (property=="altitude") {\n'+
			'				const position = mapMarkers[i][2].position;\n'+
			'				return position.altitude;\n'+
			'			} else if (property=="latlngalt") {\n'+
			'				const position = mapMarkers[i][2].position;\n'+
			'				return [position.lat, position.lng, position.altitude];\n'+
			'			}\n'+
			'		}\n'+
			'	}\n'+
			'	return null;\n'+
			'}\n'+
			'function updateMapContent(pMapId, val, type) {\n'+
			'	if (type=="zoom") {\n'+
			'		pMapId.setZoom(Number(val));\n'+
			'	} else if (type === "clear") {\n'+
			'		for (var i=0;i<mapMarkers.length;i++) {\n'+
			'			if (pMapId==mapMarkers[i][1]) {\n'+
			'				mapMarkers[i][2].setMap(null);\n'+
			'				mapMarkers.splice(i, 1);\n'+
			'				i--;\n'+
			'			}\n'+
			'		}\n'+		
			'	} else if (type=="heading") {\n'+
			'		let povData = {\n'+
			'			heading: Number(val),\n'+
			'			pitch: pMapId.getPov().pitch\n'+
			'		};\n'+
			'		pMapId.setPov(povData);\n'+
			'	} else if (type === "pitch") {\n'+
			'		let povData = {\n'+
			'			heading: pMapId.getPov().heading,\n'+
			'			pitch: Number(val)\n'+
			'		};\n'+
			'		pMapId.setPov(povData);\n'+
			'	}\n'+
			'}\n'+
			'function centerMap(pMapId, lat, lng) {\n'+
			'	const newCenter = new google.maps.LatLng(Number(lat), Number(lng));\n'+
			'	pMapId.setCenter(newCenter);\n'+
			'}\n'+
			'function positionMap(pMapId, lat, lng) {\n'+
			'	const newCenter = new google.maps.LatLng(Number(lat), Number(lng));\n'+
			'	pMapId.setPosition(newCenter);\n'+
			'}\n'+
			'window.addMapPoint = addMapPoint;\n'+
			'window.getMarker = getMarker;\n'+
			'window.updateMarkerContent = updateMarkerContent;\n'+
			'window.getMarkerSetting = getMarkerSetting;\n'+
			'window.updateMapContent = updateMapContent;\n'+
			'window.centerMap = centerMap;\n'+
			'window.positionMap = positionMap;\n'+
	  		'if (typeof loadedMap === "function") loadedMap();\n'+
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

  var code = 'map_'+mapid+'.addListener("'+event+'", async function(event) {\n'+statement+'\n}\n);\n';	
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
