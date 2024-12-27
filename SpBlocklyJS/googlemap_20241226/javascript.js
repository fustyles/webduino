Blockly.JavaScript['googlemap_initial'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  key = key.replace(/"/g,"").replace(/'/g,"");
  
  var code = 'var url = "https://maps.googleapis.com/maps/api/js?key='+key+'&callback=initMap&v=weekly&libraries=marker";\n'+
             'var s = document.createElement("script");\n'+
             's.async = true;\n'+
             's.defer = true;\n'+
             's.src = url;\n'+
             'document.body.append(s);\n'+
             'function initMap() {\n'+statement+'\n}\nwindow.initMap = initMap;';
  return code;
};

Blockly.JavaScript['googlemap_addmap'] = function (block) {;
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var zoom = Blockly.JavaScript.valueToCode(block, 'zoom', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");
  
  Blockly.JavaScript.definitions_['googlemap_'+mapid] = 'let map_'+mapid+';\n';  
  var code = ''+
	'let position_map_'+mapid+' = {lat: '+latitude+', lng: '+longitude+'};\n'+
	'map_'+mapid+' = new google.maps.Map(document.getElementById("gamediv_'+mapid+'"), {\n'+
	'  zoom: '+zoom+',\n'+
	'  center: position_map_'+mapid+',\n'+
	'  mapId: "mapid_'+mapid+'",\n'+
	'});\n';

  return code; 
};

Blockly.JavaScript['googlemap_addpoint'] = function (block) {
  var pointid = Blockly.JavaScript.valueToCode(block, 'pointid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var mapid = divid.replace(/"/g,"").replace(/'/g,"");
  
  var code = 'addMapPoint('+pointid+', map_'+mapid+', '+latitude+', '+longitude+', '+title+', '+content+');\n';
  
  return code;
};
