/*
 * Copyright 2021 Taiwan
 * @fileoverview SpBlockly tool
 * @author https://www.facebook.com/francefu/ (ChungYi Fu)
*/
 
document.addEventListener('DOMContentLoaded', function() {

	//初始化工作區	
	const workspace = Blockly.inject('root',{
			media: 'media/'
			,toolbox: document.getElementById('toolbox')
			,grid:{spacing: 20,length: 3,colour: '#eee',snap: true}
			,zoom:{controls: true, wheel: false, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2}
			,trashcan: true
			,move:{
				scrollbars: {
				  horizontal: true,
				  vertical: true
				},
				drag: true,
				wheel: true
			}
			,plugins: {
				'blockDragger': ScrollBlockDragger,
				'metricsManager': ScrollMetricsManager,
			}		
		}
	);
	
	//新增邊緣捲動插件
	//const AutoScrollOptionsPlugin = new AutoScroll(workspace);
	const scrollOptionsPlugin = new ScrollOptions(workspace);
	scrollOptionsPlugin.init({enableWheelScroll: true, enableEdgeScroll: true});
	ScrollBlockDragger.edgeScrollEnabled = false;	
	
	//新增暫存積木插件
	const myBackpack = new MyBackpack(workspace, "category_sep_main" , true);
	
	//程式碼區塊拖曳與調整大小功能	
	$(function() {
		$( "#code_content" ).draggable();
		$( "#code_content" ).resizable();
		$( "#updateDefinition_content" ).draggable();
		$( "#updateDefinition_content" ).resizable();
		$( "#updateGenerate_content" ).draggable();
		$( "#updateGenerate_content" ).resizable();
		$( "#updateCategory_content" ).draggable();
		$( "#updateCategory_content" ).resizable();		
	});	
	
	setInterval(function(){
		/*
		if (Blockly.getMainWorkspace().getBlocksByType("main").length==0) {
			const main_ = Blockly.getMainWorkspace().newBlock('main');
			main_.initSvg();
			Blockly.getMainWorkspace().render();
			main_.moveBy(100,50);
		}
		if (Blockly.getMainWorkspace().getBlocksByType("main").length==1) {
		*/
			var code = Blockly.Arduino.workspaceToCode();			
			document.getElementById('arduino_code').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
		/*
		}		
		else
			document.getElementById('arduino_code').innerHTML = "";
		*/
	}, 500);	
	
	//新增初始化積木
	function newFile() {
		var xmlDoc = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml"><block type="main" id="0" x="100" y="50" deletable="false" editable="false"></block></xml>');
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xmlDoc, Blockly.getMainWorkspace());
	}
	newFile();
	
	//程式碼區塊顯示
	document.getElementById('button_code').onclick = function () {
		var div = document.getElementById('code_content');
		if (div.style.display == "none")
			div.style.display = "block";
		else
			div.style.display = "none";
	}
	
	//工作區顯示
	document.getElementById('button_developertool').onclick = function () {
		var content = document.getElementById('updateDefinition_content');
		if (content.style.display == "block"||content.style.display == "") {
			document.getElementById('updateDefinition_content').style.display = "none";
			document.getElementById('updateGenerate_content').style.display = "none";
			document.getElementById('updateCategory_content').style.display = "none";
		}
		else {
			document.getElementById('updateDefinition_content').style.display = "block";
			document.getElementById('updateGenerate_content').style.display = "block";
			document.getElementById('updateCategory_content').style.display = "block";
		}
	}	
	
	//重設工作區
	document.getElementById('button_new').onclick = function () {
		var result = confirm(Blockly.Msg.BUTTON_RESET);
		if (result) {
			newFile();
			document.getElementById('blocks_function').value = code[0];
			document.getElementById('arduino_function').value = code[1];
			document.getElementById('category_function').value = code[2];
			
			document.getElementById('code_content').attributeStyleMap.clear();
			document.getElementById('updateDefinition_content').attributeStyleMap.clear();
			document.getElementById('updateGenerate_content').attributeStyleMap.clear();
			document.getElementById('updateCategory_content').attributeStyleMap.clear();
		}
	}

	//儲存內容
	document.getElementById('button_save').onclick = function () {
		var content = "" +
			document.getElementById('blocks_function').value + "\n\n" +
			document.getElementById('arduino_function').value + "\n\n" +
			document.getElementById('category_function').value;	

		var link = document.createElement('a');
		link.download="blocks.txt";
		link.href="data:application/octet-stream;utf-8," + encodeURIComponent(content);
		document.body.appendChild(link);
		link.click();
		link.remove();			
	}	
	
	//開啟Blockly Developer Tools
	document.getElementById('button_tool').onclick = function () {
		var link = document.createElement('a');
		link.target="_blank";
		link.href="https://blockly-demo.appspot.com/static/demos/blockfactory/index.html";
		document.body.appendChild(link);
		link.click();
		link.remove();
	}

	//複製程式碼到剪貼簿
	document.getElementById('button_copycode').onclick = function () {
		var text = document.getElementById('arduino_code').innerText;
		navigator.clipboard.writeText(text).then(function() {
			alert('Copying to clipboard was successful!');
		}, function(err) {
			console.error(err);
		});
	}
	
	var code = [
		'Blockly.Blocks["test"] = {\n'+
		' init: function() {\n'+
		'	this.appendValueInput("pin")\n'+
		'		.setCheck("Number")\n'+
		'		.appendField("digitalWrite")\n'+
		'		.appendField("pin");\n'+
		'	this.appendValueInput("val")\n'+
		'		.setCheck("Number")\n'+
		'		.appendField("value");\n'+
		'	this.setInputsInline(true);\n'+
		'	this.setPreviousStatement(true, null);\n'+
		'	this.setNextStatement(true, null);\n'+
		'	this.setColour(200);\n'+
		'   this.setTooltip("Blocks definition");\n'+
		'   this.setHelpUrl("https://developers.google.com/blockly/guides/create-custom-blocks/overview");\n'+
		'  }\n'+
		'};',
		"Blockly.Arduino['test'] = function(block) {\n"+
		"  //Blockly.Arduino.definitions_['name'] = '\/\/definitions_\\n';\n"+
		//"  //Blockly.Arduino.setups_top_['name'] = '\/\/setups_top_\\n';\n"+
		//"  //Blockly.Arduino.setups_bottom_['name'] = '\/\/setups_bottom_';\n"+
		//"  //Blockly.Arduino.loops_top_['name'] = '\/\/loops_top_\\n';\n"+
		//"  //Blockly.Arduino.loops_bottom_['name'] = '\/\/loops_bottom_';\n"+		
		"  //Blockly.Arduino.functions_['name'] = 'String blockly() {\\n  return \"Hello World\";\\n}';\n\n"+
		"  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);\n"+
		"  var value_val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);\n"+
		"  var code = 'digitalWrite(%1, %2);\\n'.replace('%1',value_pin).replace('%2',value_val);\n"+
		"  return code;\n"+
		"};",
		'<category id="category_custom" name="MYBLOCKS" colour="200">\n'+
		'	<block type="test">\n'+
		'		<value name="pin">\n'+
		'			<shadow type="math_number">\n'+
		'			<field name="NUM">2</field>\n'+
		'			</shadow>\n'+
		'		</value>\n'+
		'		<value name="val">\n'+
		'			<shadow type="math_number">\n'+
		'			<field name="NUM">0</field>\n'+
		'			</shadow>\n'+
		'		</value>\n'+
		'	</block>\n'+		
		'</category>'
	]
		
		
	//積木定義
	document.getElementById('blocks_function').value = code[0];
		
	//程式碼產出
	document.getElementById('arduino_function').value = code[1];
		
	//工具箱目錄
	document.getElementById('category_function').value = code[2];
		
	//更新積木定義函式
	document.getElementById('button_updateDefinition').onclick = function () {
		displayTab('category_content');
		try {
			eval(document.getElementById('blocks_function').value);
			var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
			Blockly.getMainWorkspace().clear();
			Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
		} catch (e) {
			if (e instanceof SyntaxError) {
				alert(e.message);
			} else {
				throw e;
			}	
		}
	}
	
	//更新程式碼產出函式
	document.getElementById('button_updateGenerate').onclick = function () {
		displayTab('category_content');
		try {
			eval(document.getElementById('arduino_function').value.replace(/Javascript/g,"Arduino"));
		} catch (e) {
			if (e instanceof SyntaxError) {
				alert(e.message);
			} else {
				throw e;
			}	
		}
	}

	//更新工具箱目錄
	document.getElementById('button_updateCategory').onclick = function () {
		displayTab('category_content');
		var xml = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild;
		var dom = new DOMParser().parseFromString(document.getElementById('category_function').value,"text/xml").firstChild;
		xml.appendChild(dom);
		Blockly.getMainWorkspace().updateToolbox(xml);
	}
	
	//新增自訂積木
	document.getElementById('button_addBlocks').onclick = function () {
		document.getElementById('button_updateDefinition').click();
		document.getElementById('button_updateGenerate').click();		
		document.getElementById('button_updateCategory').click();
	}
	
	//新增遠端自訂積木
	document.getElementById('button_addRemoteBlocks').onclick = function () {
		var customBlocksPath = prompt('Please input remote custom blocks path.\n Including blocks.js, javascript.js, toolbox.xml, en.js, zh-hant.js', 'customBlocks/basic/');
		if (customBlocksPath) {
			if (!customBlocksPath.endsWith("/"))
				customBlocksPath+="/";
			var lang = "en";
			addCustomRemoteBlocks(customBlocksPath, lang);
		}
	}
	
	//載入自訂積木
	function addCustomRemoteBlocks(customBlocksPath, lang) {
		var blocks_path = customBlocksPath+"blocks.js";   //載入自訂積木定義檔	
		var javascript_path = customBlocksPath+"javascript.js";   //載入自訂積木轉出程式碼檔	
		var toolbox_path = customBlocksPath+"toolbox.xml";  //載入自訂積木目錄檔	
		var en_path = customBlocksPath+"en.js";  //載入積木文字英文語系設定檔	
		var en_category_path = customBlocksPath+"en_category.xml";  //載入積木目錄文字英文語系設定檔
		var zhhant_path = customBlocksPath+"zh-hant.js";  //載入積木文字繁體語系設定檔(預設繁體語系)
		var zhhant_category_path = customBlocksPath+"zh-hant_category.xml";  //載入積木目錄文字繁體語系設定檔(預設繁體語系)
		
		addScript(blocks_path);
		addScript(javascript_path);
		if (lang=="en")
			addScript(en_path);
		else
			addScript(zhhant_path);
		
		$.ajax({
			type: "GET" ,
			url: toolbox_path ,
			dataType: "xml",
			timeout: 3000,
			async: false,
			success: function(xml, textStatus) {
				try {
					xmlValue_last = xmlValue;
					var xmlNewValue='<xml id="toolbox">';
					var len = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild.childNodes.length;
					if (len>0) {
						for (var i=0;i<len;i++){
							var node = new XMLSerializer().serializeToString(new DOMParser().parseFromString(xmlValue,"text/xml").firstChild.childNodes[i]);
							xmlNewValue+=node;
						}
					}
					xmlNewValue+=new XMLSerializer().serializeToString(xml.firstChild);
					xmlNewValue+='</xml>';
					xmlValue = xmlNewValue;
					
					try {
						if (lang=="en") {
							var xml = $.ajax({url: en_category_path, async: false}).responseXML.firstChild;
						} else {
							var xml = $.ajax({url: zhhant_category_path, async: false}).responseXML.firstChild;
						}
						xml = new DOMParser().parseFromString(new XMLSerializer().serializeToString(xml).replace(/\n/g, "").replace(/\r/g, "").replace(/\t/g, ""),"text/xml").firstChild;
						for (var i=0;i<xml.childNodes.length;i++) {
							if (xml.childNodes[i].nodeName.toLowerCase()=="category") {
								var ini = xml.childNodes[i].childNodes[0].firstChild.nodeValue;
								var rep = xml.childNodes[i].childNodes[1].firstChild.nodeValue;
								xmlValue = xmlValue.replace('name="'+ini+'"','name="'+rep+'"');	
							}
						}
						xmlValue_last = xmlValue;
					} catch (error) {
						//console.log(error);
					}					
				} catch (error) {
					console.log(error);
					xmlValue = xmlValue_last;
				}
				
				Blockly.getMainWorkspace().updateToolbox(Blockly.Xml.textToDom(xmlValue));
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR.statusText);
			}
		});	
	}	
	
	function addScript(url) {
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = url;
		$("body").append(s);
	}	
	
	//紀錄工具箱目錄原始內容
	var category = document.getElementById('toolbox');
	var xmlValue='<xml id="toolbox">';
	if (category.childNodes.length>0) {
		for (var i=0;i<category.childNodes.length;i++){
			var node = new XMLSerializer().serializeToString(category.childNodes[i]);
			xmlValue+=node;
		}
	}
	xmlValue+='</xml>';		
});	

//切換頁籤
var tabs = ['arduino_content','xml_content','category_content'];
function displayTab(id) {
	for (var i in tabs) {
		const tab = document.getElementById(tabs[i]);
		tab.style.display = (tabs[i]==id)?"block":"none";
		if (id=='arduino_content') 
			arduinoCode();
		else if (id=='xml_content') 
			xmlCode();
	}
}

//切換視窗上層顯示
var contents = ['updateDefinition_content','updateGenerate_content','updateCategory_content','code_content'];
function textareaFocus(id) {
	for (var i in contents) {
		const content = document.getElementById(contents[i]);
		content.style.zIndex = (contents[i]==id)?"999999":"999998";
	}
}

//Arduino原始碼顯示
function arduinoCode() {
	var code = Blockly.Arduino.workspaceToCode();
	document.getElementById('arduino_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}

//XML原始碼顯示
function xmlCode() {
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace, true);
	var code = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('xml_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}
