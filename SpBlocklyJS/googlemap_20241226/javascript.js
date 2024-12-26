Blockly.JavaScript['googlemap_initial'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var statements = Blockly.JavaScript.statementToCode(block, 'statement');
  
  var code = "document.write('<script async defer src=\"https://maps.googleapis.com/maps/api/js?key="+key+"&callback=initMap&v=weekly&libraries=marker\"></script>')\n";
  code += 'function initMap() {\n'+statement+'\n};\n';
  return code;
};

Blockly.JavaScript['googlemap_addmap'] = function (block) {
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var zoom = Blockly.JavaScript.valueToCode(block, 'zoom', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var mapid = ";
  
  var code = ''
	+'let map_'+mapid+';\n'
	+'let position_map_'+mapid+';\n'	
	+'position_map_'+mapid+' = {lat: '+latitude+', lng: '+longitude+'};\n'
	+'map_'+mapid+' = new google.maps.Map(document.getElementById("gamediv_'+mapid+'"), {\n'
	+'  zoom: '+zoom+",\n'
	+'  center: position_map_'+mapid+',\n'
	+'  mapId: "id_'+mapid+'",\n'
	+'});\n'
  return code; 
};

Blockly.JavaScript['googlemap_addpoint'] = function (block) {
  var divid = Blockly.JavaScript.valueToCode(block, 'divid', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var latitude = Blockly.JavaScript.valueToCode(block, 'latitude', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var longitude = Blockly.JavaScript.valueToCode(block, 'longitude', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var code = 'addMapPoint('+divid+', '+latitude+', '+longitude+', '+title+', '+content+');\n';
  return code; 
};