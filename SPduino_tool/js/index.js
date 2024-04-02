/*
@license
Copyright 2022 Taiwan (ChungYi Fu)
SPDX-License-Identifier: Apache-2.0

@fileoverview SpBlockly V1 (Developer tool)
@author https://www.facebook.com/francefu/
@Update 1/1/2022 00:00 (Taiwan Standard Time)
*/

var lang = "en";
var customCategory = [['','','']];
var customCategoryInsertAfter = "category_sep_main";
var languageList = "msg/language.js";
var xmlValue = "";
var topCheck = true;
var showCode = true;
var myTimer;
var myTimer1;

document.addEventListener('DOMContentLoaded', function() {
	
	setTimeout(function(){
		
		//載入工具箱目錄
		$.ajax({
			type: "GET" ,
			url: "category/category.xml" ,
			dataType: "xml",
			timeout: 3000,
			async: false,
			success: function(xml, textStatus) {
				if (xml.firstChild) {
					var toolbox_ = document.getElementById('toolbox');
					var Nodes = xml.firstChild.childNodes;
					for (var i=0;i<Nodes.length;i++){
						if (Nodes[i].nodeName!="#text") {
							toolbox_.appendChild(Nodes[i]);
						}							
					}
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				//console.log(jqXHR.statusText);
			}
		});
		
		var category = document.getElementById('toolbox');
		xmlValue='<xml id="toolbox">';
		if (category.childNodes.length>0) {
			for (var i=0;i<category.childNodes.length;i++){
				var node = new XMLSerializer().serializeToString(category.childNodes[i]);
				xmlValue+=node;
			}
		}
		xmlValue+='</xml>';	
			
		//初始化工作區	
		const workspace = Blockly.inject('root',{
				media: 'media/'
				,toolbox: xmlValue
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
		
		//當工作區變動
		var blockChange = {};
		function onBlocksChange(event) {
				clearTimeout(myTimer);
				clearTimeout(myTimer1);
				blockChange = {};
				
				myTimer = setTimeout(function(){
					var enabledBlockList = ["initializes_loop"];
					var variableBlockList = ["variables_set","variables_set1","variables_set7"];
					var variableGlobalBlockList = ["variables_set","variables_set1"];
					var blocks = Blockly.mainWorkspace.getAllBlocks();
					var p;
					
					for (var i=0;i<blocks.length;i++) {
						p = blocks[i];
						if (enabledBlockList.includes(p.type)||variableBlockList.includes(p.type)||(p.previousConnection==null&&p.outputConnection==null)) {
							if (topCheck&&blocks[i].getParent()&&!blocks[i].isEnabled()) 
								blockChange[blocks[i].id] = true;
							if (variableGlobalBlockList.includes(blocks[i].type)&&blocks[i].getField("POSITION")) {
								if (blocks[i].getFieldValue("POSITION")=="global")
									continue;
							}
							else
								continue;
						}
						p = p.getParent()||p.getPreviousBlock()?p.getParent()||p.getPreviousBlock():"";
						while(p) {
							if ((enabledBlockList.includes(p.type)||variableBlockList.includes(p.type)||(p.previousConnection==null&&p.outputConnection==null))&&!p.getParent()) {
								if (topCheck&&blocks[i].getParent()&&!blocks[i].isEnabled()) 
									blockChange[blocks[i].id] = true;
								break;
							}
							p = p.getParent()||p.getPreviousBlock()?p.getParent()||p.getPreviousBlock():"";
						}
						if ((!blocks[i].getParent()||!blocks[i].getParent().isEnabled())&&(blocks[i].targetConnection==null||blocks[i].outputConnection==null)) {
							if (topCheck&&(!blocks[i].getParent()||!blocks[i].outputConnection||blocks[i].previousConnection)&&blocks[i].isEnabled()) 
								blockChange[blocks[i].id] = false;
						}
						if (blocks[i].getParent()&&blocks[i].getPreviousBlock()) {
							if (variableBlockList.includes(p.type)&&variableBlockList.includes(blocks[i].getParent().type)) {
								if (topCheck) 
									blocks[i].unplug();
							}
						}
					}
				}, 200);
				
				myTimer1 = setTimeout(function(){
					if (showCode) {
						var code = Blockly.Arduino.workspaceToCode(Blockly.getMainWorkspace());			
						editor.setValue(code);
					}
					if (topCheck) {
						for (var i in blockChange) {
							var block = workspace.getBlockById(i);
							if (block.parentBlock_) {
								while (block.parentBlock_) {
									block = block.parentBlock_;
								}
								if (block.isEnabled())
									workspace.getBlockById(i).setEnabled(true);
								else
									workspace.getBlockById(i).setEnabled(blockChange[i]);
							}
							else 
								workspace.getBlockById(i).setEnabled(blockChange[i]);
						}
					}
				}, 500);	
		}
		workspace.addChangeListener(onBlocksChange);	
		
		
		//新增系統自訂積木
		if (typeof systemBlocks != "undefined") {
			for (var i=0;i<systemBlocks.length;i++) {
				var customBlocksPath = systemBlocks[i][0];  //自訂積木連結
				var insertAfterCategoryName = systemBlocks[i][1];  //可將自訂積木插入在指定目錄後
				addSystemBlocks(customBlocksPath, insertAfterCategoryName);
			}
		}
		
		//載入語言選單
		if (typeof language != "undefined") {
			for (var i=0;i<language.length;i++) {
				if (language[i][0]==lang)
					addScript(language[i][1]);
			}
			addScript(languageList);
			var select = document.getElementById('lang-selector');
			for (var i=0;i<language.length;i++) {
				select.add(new Option(language[i][2], language[i][0]));
			}	
			document.getElementById('lang-selector').value = lang;
		}	
				
		changeLanguage();
		
		newFile();
		
	}, 1000);			
	
	//載入系統自訂積木
	function addSystemBlocks(customBlocksPath, insertAfterCategoryName) {
		var blocks_path = customBlocksPath+"blocks.js";   //載入自訂積木定義檔	
		var javascript_path = customBlocksPath+"javascript.js";   //載入自訂積木轉出程式碼檔	
		var toolbox_path = customBlocksPath+"toolbox.xml";  //載入自訂積木目錄檔	
		var en_path = customBlocksPath+"en.js";  //載入積木文字英文語系設定檔	
		var en_category_path = customBlocksPath+"en_category.xml";  //載入積木目錄文字英文語系設定檔
		var zhhant_path = customBlocksPath+"zh-hant.js";  //載入積木文字繁體語系設定檔(預設繁體語系)
		var zhhant_category_path = customBlocksPath+"zh-hant_category.xml";  //載入積木目錄文字繁體語系設定檔(預設繁體語系)
		
		if (lang=="en")
			addScript(en_path);
		else
			addScript(zhhant_path);	
		
		addScript(blocks_path);
		addScript(javascript_path);
		
		$.ajax({
			type: "GET" ,
			url: toolbox_path ,
			dataType: "xml",
			timeout: 3000,
			async: false,
			success: function(xml, textStatus) {
				//if (new XMLSerializer().serializeToString(xml.firstChild))
					//customCategory.push([new XMLSerializer().serializeToString(xml.firstChild) ,insertAfterCategoryName ,'']);
				
				try {
					var len = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild.childNodes.length;
					var xmlNewValue='<xml id="toolbox">';
					if (len>0) {
							var exist = false;
							for (var i=0;i<len;i++){
								if (insertAfterCategoryName=="") {
									xmlNewValue+=new XMLSerializer().serializeToString(xml.firstChild);
									insertAfterCategoryName="insertTop";
									exist = true;
								}
								var node = new XMLSerializer().serializeToString(new DOMParser().parseFromString(xmlValue,"text/xml").firstChild.childNodes[i]);
								xmlNewValue+=node;
								if (node.indexOf(insertAfterCategoryName)!=-1&&insertAfterCategoryName!="") {
									xmlNewValue+=new XMLSerializer().serializeToString(xml.firstChild);
									exist = true;
								}
							}
							if (exist == false)
								xmlNewValue+=new XMLSerializer().serializeToString(xml.firstChild);
					}
					xmlNewValue+='</xml>';
					xmlValue = xmlNewValue;
					
					Blockly.getMainWorkspace().updateToolbox(xmlValue);	
				} catch (error) {
					console.log(error);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR.statusText);
			}
		});	
	}
	
	//載入遠端自訂積木
	function addCustomRemoteBlocks(customBlocksPath) {
		var blocks_path = customBlocksPath+"blocks.js";   //載入自訂積木定義檔	
		var javascript_path = customBlocksPath+"javascript.js";   //載入自訂積木轉出程式碼檔	
		var toolbox_path = customBlocksPath+"toolbox.xml";  //載入自訂積木目錄檔	
		var en_path = customBlocksPath+"en.js";  //載入積木文字英文語系設定檔	
		var en_category_path = customBlocksPath+"en_category.xml";  //載入積木目錄文字英文語系設定檔
		var zhhant_path = customBlocksPath+"zh-hant.js";  //載入積木文字繁體語系設定檔(預設繁體語系)
		var zhhant_category_path = customBlocksPath+"zh-hant_category.xml";  //載入積木目錄文字繁體語系設定檔(預設繁體語系)
		
		if (lang=="en")
			addScript(en_path);
		else
			addScript(zhhant_path);		
		addScript(blocks_path);
		addScript(javascript_path);
		
		$.ajax({
			type: "GET" ,
			url: toolbox_path ,
			dataType: "xml",
			timeout: 3000,
			async: false,
			success: function(xml, textStatus) {
				if (xml.firstChild) {
					var category_ = new XMLSerializer().serializeToString(xml.firstChild);
					try {
						if (lang=="en") {
							var xmlCustom = $.ajax({url: en_category_path, async: false}).responseXML.firstChild;
						} else {
							var xmlCustom = $.ajax({url: zhhant_category_path, async: false}).responseXML.firstChild;
						}
						for (var i=0;i<xmlCustom.childNodes.length;i++) {
							if (xmlCustom.childNodes[i].nodeName.toLowerCase()=="category") {
								var ini = xmlCustom.childNodes[i].childNodes[0].firstChild.nodeValue;
								var rep = xmlCustom.childNodes[i].childNodes[1].firstChild.nodeValue;
								category_ = category_.replace('name="'+ini+'"','name="'+rep+'"');								
							}
						}
					}
					catch (e) {
						//console.log(e);
					}
					
					checkCategoryExist(customBlocksPath);
					customCategory.push([category_, customCategoryInsertAfter, customBlocksPath]);
					
					var category = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild;
					if (category.childNodes.length>0) {
						for (var j=0;j<customCategory.length;j++) {
							for (var i=0;i<category.childNodes.length;i++){
								if (category.childNodes[i].id==customCategory[j][1]&&customCategory[j][0])
									category.insertBefore(new DOMParser().parseFromString(customCategory[j][0],"text/xml").firstChild,category.childNodes[i].nextSibling);
							}								
						}
					}
						
					Blockly.getMainWorkspace().updateToolbox(category);				
				}				
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

	function checkCategoryExist(child) {
		for (var i=1;i<customCategory.length;i++) {
			if (child==customCategory[i][2])
				customCategory.splice(i, 1);
		}
	}
	
	//程式碼區塊拖曳與調整大小功能	
	$(function() {
		$( "#arduino_content" ).draggable();
		$( "#arduino_content" ).resizable();
		$( "#updateDefinition_content" ).draggable();
		$( "#updateDefinition_content" ).resizable();
		$( "#updateGenerate_content" ).draggable();
		$( "#updateGenerate_content" ).resizable();
		$( "#updateCategory_content" ).draggable();
		$( "#updateCategory_content" ).resizable();
		$( "#updateMessage_content" ).draggable();
		$( "#updateMessage_content" ).resizable();			
	});	
	
	//更新首頁語系文字
	function updateMsg() {
		if (typeof msg != "undefined") {
			for (var i=0;i<msg.length;i++) {
				if (msg[i][1]=="innerHTML")
					document.getElementById(msg[i][0]).innerHTML=msg[i][2];
				else if (msg[i][1]=="title")
					document.getElementById(msg[i][0]).title=msg[i][2];			
			}
		}
	}
	updateMsg();
	
	/*
	setInterval(function(){
		var code = Blockly.Arduino.workspaceToCode();			
		document.getElementById('arduino_code').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
	}, 500);
	*/
	
	//新增初始化積木
	function newFile() {
		var xmlDoc = Blockly.Xml.textToDom('<xml><block type="main" id="0" x="100" y="50" deletable="false" editable="false"></block></xml>');
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xmlDoc, Blockly.getMainWorkspace());
	}
	
	//程式碼區塊顯示
	document.getElementById('button_code').onclick = function () {
		var div = document.getElementById('arduino_content');
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
			document.getElementById('updateMessage_content').style.display = "none";			
		}
		else {
			document.getElementById('updateDefinition_content').style.display = "block";
			document.getElementById('updateGenerate_content').style.display = "block";
			document.getElementById('updateCategory_content').style.display = "block";
			document.getElementById('updateMessage_content').style.display = "block";
		}
	}	
	
	//重設工作區
	document.getElementById('button_reset').onclick = function () {
		var result = confirm(Blockly.Msg.BUTTON_RESET);
		if (result) {
			newFile();
			
			document.getElementById('blocks_function').value = "";
			document.getElementById('arduino_function').value = "";
			document.getElementById('category_function').value = '<category id="category_custom" name="MyBlocks" colour="100">\n\n</category>';
			document.getElementById('message_function').value = '//Blockly.Msg["MYBLOCKS"] = "MyBlocks";\n//Blockly.Msg["MYBLOCKS_HUE"] = "100";'
			
			document.getElementById('arduino_content').attributeStyleMap.clear();
			document.getElementById('updateDefinition_content').attributeStyleMap.clear();
			document.getElementById('updateGenerate_content').attributeStyleMap.clear();
			document.getElementById('updateCategory_content').attributeStyleMap.clear();
			document.getElementById('updateMessage_content').attributeStyleMap.clear();
			document.getElementById('updateDefinition_code').attributeStyleMap.clear();
			document.getElementById('updateGenerate_code').attributeStyleMap.clear();
			document.getElementById('updateCategory_code').attributeStyleMap.clear();
			document.getElementById('updateMessage_code').attributeStyleMap.clear();			
		}
	}

	//儲存內容
	document.getElementById('button_export_blocks').onclick = function () {
		exportToFile("blocks_function","blocks.js");
		exportToFile("arduino_function","javascript.js");
		exportToFile("category_function","toolbox.xml");
		exportToFile("category_function_js","toolbox.js");
		exportToFile("function_js","function.js");
		exportToFile("message_function","en.js");
		exportToFile("message_function","zh-hans.js");		
		exportToFile("message_function","zh-hant.js");			
	}
	
	function exportToFile(id, filename) {
		var content = document.getElementById(id).value.replace(/JavaScript/g,"Arduino");
		var link = document.createElement('a');
		link.download = filename;
		link.href="data:application/octet-stream;utf-8," + encodeURIComponent(content);
		document.body.appendChild(link);
		link.click();
		link.remove();	
	}

	//匯出工作區積木與原始檔
	document.getElementById('button_save_ino').onclick = function () {
		try {
			var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
			var xmlText = Blockly.Xml.domToText(xml);

			var link = document.createElement('a');
			link.download="project.xml";
			link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xmlText);
			document.body.appendChild(link);
			link.click();
			link.remove();
			
			var code = Blockly.Arduino.workspaceToCode();			
			var link = document.createElement('a');
			link.download="project.ino";
			link.href="data:application/octet-stream;utf-8," + encodeURIComponent(code);
			document.body.appendChild(link);
			link.click();
			link.remove();				
		} catch (e) {
			alert(e);
		}
	}
	
	//開啟Blockly Developer Tools
	document.getElementById('button_tool').onclick = function () {
		var link = document.createElement('a');
		link.target="_blank";
		link.href="https://fustyles.github.io/BlocklyResearch/blockfactoryV9/index.html";
		document.body.appendChild(link);
		link.click();
		link.remove();
	}
	
	//切換語言
	document.getElementById('lang-selector').onchange = function () {
		if (this.selectedIndex!=-1) 
			lang = this.options[this.selectedIndex].value;
		changeLanguage();
	}	
	
	//切換語言
	function changeLanguage() {
		addScript(languageList);
		if (typeof language != "undefined") {
			for (var i=0;i<language.length;i++) {
				if (language[i][0]==lang) {
					addScript(language[i][1]);
				}
			}
			addScript(languageList);			
			for (var i=0;i<language.length;i++) {
				document.getElementById('lang-selector').options[i].text = language[i][2];
			}
		}
		
		if (typeof systemBlocks != "undefined") {
			for (var i=0;i<systemBlocks.length;i++) {
				if (document.getElementById('lang-selector').value=="en")
					addScript(systemBlocks[i][0]+"en.js");
				else
					addScript(systemBlocks[i][0]+"zh-hant.js");
			}
		}
		
		addScript("js/message.js");
		flashToolbox();
		updateMsg();
		updateCategory();
		
		var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
	}
	
	function flashToolbox() {
		var category = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild;
		Blockly.getMainWorkspace().updateToolbox(category);
		
		var category = JSON.parse(JSON.stringify(customCategory));
		for (var i=0;i<category.length;i++) {
			if (category[i][2]) addCustomRemoteBlocks(category[i][2]);
		}
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
	
	//匯入備份積木檔
	document.getElementById('button_open_xml').onclick = function () {
		var e = document.getElementById("importBlocks");
		if (e) {
			e.click();
			return;
		}
		
		var input=document.createElement('input');
		input.type="file";
		input.id="importBlocks";
		input.style.display = "none";
		input.accept=".xml";
		input.onchange = function(element) {
			try {	
				var file = this.files[0];
				if (file) {
					var fr = new FileReader();           
					fr.onload = function (event) {
						Blockly.getMainWorkspace().clear();
						var blocks = Blockly.Xml.textToDom(event.target.result);
						Blockly.Xml.domToWorkspace(blocks, Blockly.mainWorkspace);
					};
					fr.readAsText(file);
				}
			} catch (e) {
				alert(e);
			}	  
		}

		document.body.appendChild(input);
		setTimeout(function(){
			input.click();
		},500);
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
		'	this.setColour(Blockly.Msg["MYBLOCKS_HUE"]);\n'+
		'   this.setTooltip("Blocks definition");\n'+
		'   this.setHelpUrl("https://developers.google.com/blockly/guides/create-custom-blocks/overview");\n'+
		'  }\n'+
		'};',
		"Blockly.Arduino['test'] = function(block) {\n"+
		"  //Blockly.Arduino.definitions_['name'] = '\/\/definitions_';\n"+
		"  //Blockly.Arduino.setups_['name'] = '\/\/setups_';\n"+
		"  //Blockly.Arduino.setupsTop_['name'] = '\/\/setupsTop_';\n"+
		//"  //Blockly.Arduino.loops_['name'] = '\/\/loops_';\n"+
		//"  //Blockly.Arduino.loopsTop_['name'] = '\/\/loopTop_';\n"+		
		"  //Blockly.Arduino.functions_['name'] = 'String blockly() {\\n  return \"Hello World\";\\n}';\n\n"+
		"  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);\n"+
		"  var value_val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);\n"+
		"  var code = 'digitalWrite(%1, %2);\\n'.replace('%1',value_pin).replace('%2',value_val);\n"+
		"  return code;\n"+
		"};",
		'<category id="category_custom" name="%{BKY_MYBLOCKS}" colour="%{BKY_MYBLOCKS_HUE}">\n'+
		'	<block type="test">\n'+
		'		<value name="pin">\n'+
		'			<shadow type="math_number">\n'+
		'				<field name="NUM">2</field>\n'+
		'			</shadow>\n'+
		'		</value>\n'+
		'		<value name="val">\n'+
		'			<shadow type="math_number">\n'+
		'				<field name="NUM">0</field>\n'+
		'			</shadow>\n'+
		'		</value>\n'+
		'	</block>\n'+		
		'</category>',
		'Blockly.Msg["MYBLOCKS"] = "MyBlocks";\n'+
		'Blockly.Msg["MYBLOCKS_HUE"] = "100";'		
	]
		
		
	//積木定義
	document.getElementById('blocks_function').value = code[0];
		
	//程式碼產出
	document.getElementById('arduino_function').value = code[1];
		
	//工具箱目錄
	document.getElementById('category_function').value = code[2];
	catecoryJS();
	document.getElementById('category_function').onchange = function () {
		catecoryJS();
	}
	function catecoryJS() {
		var code = document.getElementById('category_function').value.split('\n');
		var js = "'use strict';\n\nif (typeof toolbox_custom == 'undefined')\n  var toolbox_custom = [];\n\ntoolbox_custom.push(''";
		for (var i=0;i<code.length;i++) {
			js+= "\n+'" + code[i] + "'";
		}
		js+= ");";
		document.getElementById('category_function_js').value = js;
	}
	
	//語言
	document.getElementById('message_function').value = code[3];	
		
	//更新積木定義函式
	document.getElementById('button_updateDefinition').onclick = function () {
		displayTab('category_content');
		var code = document.getElementById('blocks_function').value;
		try {
			eval(code.replace(/JavaScript/g,"Arduino"));
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
		var code = document.getElementById('arduino_function').value;
		try {
			eval(code.replace(/JavaScript/g,"Arduino"));
			var code = Blockly.Arduino.workspaceToCode();			
			editor.setValue(code);
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
		var code = document.getElementById('category_function').value;
		var xml = code.replace(/JavaScript/g,"Arduino");
		if (customCategory[0][0]!= xml) {
			customCategory[0][0] = xml;
			customCategory[0][1] = customCategoryInsertAfter;
			customCategory[0][2] = '';
		}
	
		updateCategory();
	}
	
	function updateCategory() {
		var category = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild;
		if (category.childNodes.length>0) {
			for (var j=0;j<customCategory.length;j++) {
				for (var i=0;i<category.childNodes.length;i++){
					if (category.childNodes[i].id==customCategory[j][1])
						category.insertBefore(new DOMParser().parseFromString(customCategory[j][0],"text/xml").firstChild,category.childNodes[i].nextSibling);
				}								
			}
		}
		Blockly.getMainWorkspace().updateToolbox(category);
	}		
	
	//工具箱目錄顯示選單
	document.getElementById('button_toolbox').onclick = function () {
		toolboxCategory();
		var opt = {
			draggable: true,			
			autoOpen: false,
			resizable: true,
			modal: false,
			//show: "blind",
			//hide: "blind",			
			width: 600,
			height: 450,
			buttons: [
				{
					text: Blockly.Msg.BUTTON_CLOSE,
					click: function() {
						$(this).dialog("close");
					}
				}
			],
			title: Blockly.Msg.TOOLBOX_DISPLAY
		};
		$("#dialog_toolbox").dialog(opt).dialog("open");
		event.preventDefault();
	}

	//Web Serial
	if (typeof navigator.serial !== "undefined") {
		let serial_port = null;
		let serial_textEncoder = {};
		let serial_writableStreamClosed = {};
		let serial_writer = {};
		let serial_reader = null;
		let serial_readSting = "";
		let serial_keepReading = true;
		let serial_selProductId = "";
		let serial_selVendorId = "";

		let serial_baud = document.getElementById('serial_baud');
		let serial_command = document.getElementById('serial_command');
		let serial_status = document.getElementById('serial_status');
		let serial_buttonRequest = document.getElementById('serial_request_port');
		let serial_buttonClose = document.getElementById('serial_close_port');
		let serial_sendString = document.getElementById('serial_sendString');	
		let serial_clearStatus = document.getElementById('serial_clearStatus');
		let serial_end = document.getElementById('serial_end');		
		let serial_timer;
		
		navigator.serial.addEventListener("connect", (event) => {
		  serial_message("Device connect","red");
		});

		navigator.serial.addEventListener("disconnect", (event) => {
			serial_message("Device disconnect","red");
		});	
					
		async function readUntilClosed() {
		  while (serial_port.readable && serial_keepReading) {
			serial_reader = serial_port.readable.getReader();
			try {
			  while (true) {
				const { value, done } = await serial_reader.read();
				if (done) {
				  // |reader| has been canceled.
				  break;
				}
				if (value) {
					serial_readSting += new TextDecoder().decode(value);
					if (value.includes(10)) {    //Serial.println(data);
						clearTimeout(serial_timer);
						serial_message(serial_readSting,"green");
						serial_readSting = "";
					}
					else {    //Serial.print(data);
						serial_timer = setTimeout(function() {
							if (serial_readSting != "") serial_message(serial_readSting,"green");
							serial_readSting = "";
						}, 10);
					}
				}
			  }
			} catch (error) {
			  // Handle |error|...
			} finally {
			  serial_reader.releaseLock();
			}
		  }
		}

		serial_buttonRequest.addEventListener('click', async () => {

			if ("serial" in navigator) {
				/*
				const filters = [
					{ usbVendorId: 0x2341, usbProductId: 0x0043 },
					{ usbVendorId: 0x2341, usbProductId: 0x0001 }
				];
				*/
				const filters = [];
				
				serial_port = await navigator.serial.requestPort({ filters });
				const { usbProductId, usbVendorId } = serial_port.getInfo();
				serial_selProductId = (usbProductId)?"0x"+usbProductId:"null";
				serial_selVendorId = (usbVendorId)?"0x"+usbVendorId:"null";
				
				serial_keepReading = true;
				
				try {
					var rate =  Number(serial_baud.value);
					await serial_port.open({ baudRate: rate });
					var msg = "VendorId: 0x"+serial_selVendorId.toString(16)+" ProductId: 0x"+serial_selProductId.toString(16)+" Ready!";
					serial_message(msg,"blue");
					
					//await serial_port.setSignals({ dataTerminalReady: false });
					//await new Promise(resolve => setTimeout(resolve, 200));
					//await serial_port.setSignals({ dataTerminalReady: true });			
					
					serial_textEncoder[serial_selProductId] = new TextEncoderStream();
					serial_writableStreamClosed[serial_selProductId] = serial_textEncoder[serial_selProductId].readable.pipeTo(serial_port.writable);
					serial_writer[serial_selProductId] = serial_textEncoder[serial_selProductId].writable.getWriter();			
					
					const closed = readUntilClosed();
				} catch (error) {
					var errorString = error.message;
					if (errorString.indexOf("already open")!=-1) {
						var msg = "VendorId: 0x"+serial_selVendorId.toString(16)+" ProductId: 0x"+serial_selProductId.toString(16)+" Ready!";
						serial_message(msg,"blue");
					}
					else if (errorString.indexOf("Failed to open serial port")!=-1) {
						setTimeout(function(){serial_buttonRequest.click();},1000);
					}
					else {
						serial_message(errorString,"red");
					}
				}
			}
				
		});

		serial_buttonClose.addEventListener('click', async () => {
			try {
				if (serial_port) {	
					/*
					serial_keepReading = false;
					serial_reader.cancel();
					await closed;
					*/
					
					serial_port.close();
					serial_port = null;
					serial_message("Closed","blue");
				}
			} catch (error) {
					serial_message(error.message,"red");
			}	
		});

		serial_sendString.addEventListener('click', async () => {
			if (serial_port&&serial_writer) {
				try {	
					var msg = serial_command.value + serial_end.value;
					serial_message(msg,"orange");
					await serial_writer[serial_selProductId].write(msg);
				} catch (error) {
					serial_message(error.message,"red");
				}
			}
		});

		serial_clearStatus.addEventListener('click', async () => {
			serial_status.innerHTML = "";
		});

		function serial_message(msg, colour) {
			serial_status.innerHTML += "<font color='"+colour+"'>"+msg+"</font><br>";
			serial_status.scrollTop = serial_status.scrollHeight;
		}
	}
	
	//Web Serial
	document.getElementById('button_webSerial').onclick = function () {
		if (typeof navigator.serial !== "undefined") {
			var opt = {
				draggable: true,			
				autoOpen: false,
				resizable: true,
				modal: false,
				//show: "blind",
				//hide: "blind",			
				width: 570,
				height: 470,
				buttons: [
					{
						text: Blockly.Msg["BUTTON_UPLOADCODE"],
						click: function() {
							var uploader = document.getElementById('arduino-web-uploader');
							var result = prompt(Blockly.Msg["BUTTON_UPLOADCODE"], 'https://fustyles.github.io/webduino/SPduino_tool/hex/test.hex');
							uploader.setAttribute("hex-href", result);
							document.getElementById('arduino-web-uploader').click();
						}
					},				
					{
						text: Blockly.Msg.BUTTON_CLOSE,
						click: function() {
							$(this).dialog("close");
						}
					}
				],
				title: Blockly.Msg["MSG_WEBSERIAL"]
			};
			$("#dialog_webSerial").dialog(opt).dialog("open");
			event.preventDefault();
		}
		else {
			if (typeof nw !== "undefined") {
				nw.Shell.openExternal("http://127.0.0.1:3000/WebSerial.html")    // NW.js
			}
			else
				window.open("https://fustyles.github.io/webduino/WebSerial.html")
		}
	}

	//Web Bluetooth
	if (typeof navigator.bluetooth !== "undefined") {
		let Bluetooth_command = document.getElementById('Bluetooth_command');
		let Bluetooth_status = document.getElementById('Bluetooth_status');
		let Bluetooth_buttonRequest = document.getElementById('Bluetooth_request_device');
		let Bluetooth_buttonDisconnect = document.getElementById('Bluetooth_disconnect_device');
		let Bluetooth_sendString = document.getElementById('Bluetooth_sendString');	
		let Bluetooth_clearText = document.getElementById('Bluetooth_clearText');
		let Bluetooth_end = document.getElementById('Bluetooth_end');
		let Bluetooth_uuid_service = document.getElementById('Bluetooth_uuid_service');
		let Bluetooth_uuid_tx = document.getElementById('Bluetooth_uuid_tx');
		let Bluetooth_uuid_rx = document.getElementById('Bluetooth_uuid_rx');

		let Bluetooth_device = null;
		let Bluetooth_characteristics = null;
		let Bluetooth_readCharacteristic = null;
		let Bluetooth_writeCharacteristic = null;
		let busy = false;
		let commandQueue = [];

		// https://www.uuidgenerator.net/
		var service_uuid = "";
		var CHARACTERISTIC_TX_UUID = "";
		var CHARACTERISTIC_RX_UUID = "";
				
		Bluetooth_buttonRequest.addEventListener('click', async () => {
			service_uuid = Bluetooth_uuid_service.value;
			CHARACTERISTIC_TX_UUID = Bluetooth_uuid_tx.value;
			CHARACTERISTIC_RX_UUID = Bluetooth_uuid_rx.value;

			let options = {};
			options.acceptAllDevices = true;
			options.optionalServices = [service_uuid];
			
			//let filters = [];
			//filters.push({services: [0x1234, 0x12345678, '99999999-0000-1000-8000-00805f9b34fb']});
			//filters.push({name: 'xxx'});
			//filters.push({namePrefix: 'yyy'});		
			//options.filters = filters;
			
			navigator.bluetooth.requestDevice(options)
			.then(device => {
				Bluetooth_device = device;
				var msg = 'Connect to Name:' + device.name;
				Bluetooth_message(msg, "blue");
				Bluetooth_message(service_uuid, "blue");
				
				return device.gatt.connect();
			})
			.then(server => {
				return server.getPrimaryService(service_uuid);
			})
			.then(service => {
				return service.getCharacteristics();
			})
			.then(characteristics => {
				Bluetooth_message("Device connected", "blue");
					
				Bluetooth_characteristics = characteristics;
				Bluetooth_device.addEventListener('gattserverdisconnected', onDisconnected);

				characteristics.forEach(characteristic => {
				
					/*
					console.log('> Characteristic UUID:  ' + characteristic.uuid);
					console.log('> Broadcast:            ' + characteristic.properties.broadcast);
					console.log('> Read:                 ' + characteristic.properties.read);
					console.log('> Write w/o response:   ' + characteristic.properties.writeWithoutResponse);
					console.log('> Write:                ' + characteristic.properties.write);
					console.log('> Notify:               ' + characteristic.properties.notify);
					console.log('> Indicate:             ' + characteristic.properties.indicate);
					console.log('> Signed Write:         ' + characteristic.properties.authenticatedSignedWrites);
					console.log('> Queued Write:         ' + characteristic.properties.reliableWrite);
					console.log('> Writable Auxiliaries: ' + characteristic.properties.writableAuxiliaries);
					*/
					
					Bluetooth_message(characteristic.uuid, "blue");
					
					switch (characteristic.uuid) {
						case CHARACTERISTIC_RX_UUID:
							Bluetooth_readCharacteristic = characteristic;
							break;
						case CHARACTERISTIC_TX_UUID:
							Bluetooth_writeCharacteristic = characteristic;
							break;
					}
				});
				
				Bluetooth_readCharacteristic.startNotifications().then(_ => {
					Bluetooth_message('Notifications started',"blue");
					Bluetooth_readCharacteristic.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged);
				});
				
				return Bluetooth_readCharacteristic.readValue();
			})
			.catch(error => {
				console.log(error);
				Bluetooth_message(error,"red"); 
			});
		});

		Bluetooth_buttonDisconnect.addEventListener('click', async () => {
			if (Bluetooth_device && Bluetooth_device.gatt.connected) {
				if (Bluetooth_device.gatt.connected)
					Bluetooth_device.gatt.disconnect();
			}	
		});

		function handleCharacteristicValueChanged(event) {
			const value = new TextDecoder().decode(event.target.value);
			//console.log(value);
			Bluetooth_message(value, "orange");
		}

		function onDisconnected(event) {
			const device = event.target;
			var msg = "Device " + device.name + " is disconnected.";
			Bluetooth_message(msg,"blue");
			Bluetooth_device = null;
			Bluetooth_characteristics = null;
			Bluetooth_readCharacteristic = null;
			Bluetooth_writeCharacteristic = null;	
		}

		function sendCommand(cmd) {
		  if (Bluetooth_writeCharacteristic) {
			if (busy) {
			  commandQueue.push(cmd);
			  return Promise.resolve();
			}
			busy = true;

			return Bluetooth_writeCharacteristic.writeValue(cmd).then(() => {
			  busy = false;
			  let nextCommand = commandQueue.shift();
			  if (nextCommand) {
				sendCommand(nextCommand);
			  }
			});
		  } else {
			return Promise.resolve();
		  }
		}

		Bluetooth_clearText.addEventListener('click', async () => {
			Bluetooth_status.innerHTML = "";
		});

		Bluetooth_sendString.addEventListener('click', async () => {
			var msg = Bluetooth_command.value + Bluetooth_end.value;
			Bluetooth_message(msg, "green");
			var cmd = new TextEncoder().encode(msg);
			sendCommand(cmd).then(() => {
				//Bluetooth_message(new TextDecoder().decode(cmd), "green");
			})
			.catch(error => {
				console.log(error);
				Bluetooth_message(error,"red"); 
			});
		});
				
		function Bluetooth_message(msg, colour) {
			Bluetooth_status.innerHTML += "<font color='"+colour+"'>"+msg+"</font><br>";
			Bluetooth_status.scrollTop = Bluetooth_status.scrollHeight;
		}
	}
	
	//Web Bluetooth
	document.getElementById('button_webBluetooth').onclick = function () {
		if (typeof navigator.bluetooth !== "undefined") {
			var opt = {
				draggable: true,			
				autoOpen: false,
				resizable: true,
				modal: false,
				//show: "blind",
				//hide: "blind",			
				width: 570,
				height: 470,
				buttons: [					
					{
						text: Blockly.Msg.BUTTON_CLOSE,
						click: function() {
							$(this).dialog("close");
						}
					}
				],
				title: Blockly.Msg["MSG_WEBBLUETOOTH"]
			};
			$("#dialog_webBluetooth").dialog(opt).dialog("open");
			event.preventDefault();
		}
		else {
			if (typeof nw !== "undefined")
				nw.Shell.openExternal("http://127.0.0.1:3000/WebBluetooth.html")    // NW.js
			else
				window.open("https://fustyles.github.io/webduino/WebBluetooth.html")
		}
	}	
	
	//工具箱目錄顯示選單內容
	function toolboxCategory() {
		var categorymenu = '<table width="580">';
		var items = Blockly.getMainWorkspace().getToolbox().getToolboxItems();
		var j=0;
		var checked = "";
		for (var i=0;i<items.length;i++) {
			if (items[i].toolboxItemDef_.kind=="CATEGORY"&&!items[i].parent_) {
				checked = items[i].isHidden_?"":" checked";
				j++;
				if (j%3==1) categorymenu +="<tr>";
				if (items[i].toolboxItemDef_.name.indexOf("%{BKY_")!=-1)
					categorymenu +='<td><input type="checkbox" onchange="toolbox_display(this,\''+items[i].toolboxItemDef_.id+'\')" '+checked+'></td><td align="left">'+eval(items[i].toolboxItemDef_.name.replace("%{BKY_","Blockly.Msg[\"").replace("}","\"]"))+'</td>';
				else
					categorymenu +='<td><input type="checkbox" onchange="toolbox_display(this,\''+items[i].toolboxItemDef_.id+'\')" '+checked+'></td><td align="left">'+items[i].toolboxItemDef_.name+'</td>';
				if (j%3==0) categorymenu +="</tr>";
			}
			
		}
		if (j%3!=0) categorymenu +="</tr>";
		categorymenu +="<table>";
		document.getElementById('dialog_toolbox').innerHTML = categorymenu;
	}	
	
	//更新文字
	document.getElementById('button_updateMessage').onclick = function () {
		displayTab('category_content');
		try {
			eval(document.getElementById('message_function').value.replace(/JavaScript/g,"Arduino"));
			document.getElementById('button_updateDefinition').click();	
			document.getElementById('button_updateCategory').click();
		} catch (e) {
			if (e instanceof SyntaxError) {
				alert(e.message);
			} else {
				throw e;
			}	
		}
	}	
	
	//新增自訂積木
	document.getElementById('button_addBlocks').onclick = function () {
		document.getElementById('button_updateMessage').click();
		document.getElementById('button_updateGenerate').click();
		document.getElementById('button_updateDefinition').click();
		document.getElementById('button_updateCategory').click();
	}

	//新增擴充自訂積木
	document.getElementById('button_addExtensionBlocks').onclick = function () {
		if (typeof customBlocks != "undefined") {
			for (var i=0;i<customBlocks.length;i++) {
				var customBlocksPath = customBlocks[i][0];  //自訂積木連結
				addCustomRemoteBlocks(customBlocksPath);
			}
		}
	}	
	
	//新增遠端自訂積木
	document.getElementById('button_addRemoteBlocks').onclick = function () {
		var customBlocksPath = prompt(Blockly.Msg["CUSTOMBLOCKS_TITLE"], '');
		if (customBlocksPath) {
			if (!customBlocksPath.endsWith("/"))
				customBlocksPath+="/";
			addCustomRemoteBlocks(customBlocksPath);
		}
	}	

	//Double Click關閉彈出積木選單
	setTimeout(function() {
		var blocklyWorkspace = document.getElementsByClassName("blocklyFlyout");
		for (var f=0;f<blocklyWorkspace.length;f++) {
			blocklyWorkspace[f].addEventListener('dblclick', function(){ 
				Blockly.hideChaff();
			});
		}
	}, 3000);
	
});	

//切換頁籤
var tabs = ['code_content','xml_content','category_content'];
function displayTab(id) {
	for (var i in tabs) {
		const tab = document.getElementById(tabs[i]);
		tab.style.display = (tabs[i]==id)?"block":"none";
		if (id=='code_content') 
			arduinoCode();
		else if (id=='xml_content') 
			xmlCode();
	}
}

//工具箱目錄顯示與紀錄
function toolbox_display(chk, categoryid) {
	var category =  Blockly.getMainWorkspace().getToolbox().getToolboxItems();
	for (var i=0;i<category.length;i++) {
		if (category[i].toolboxItemDef_.id==categoryid)
			chk.checked==false?category[i].hide():category[i].show();
	}
	Blockly.getMainWorkspace().resize();
	
	category =  Blockly.getMainWorkspace().getToolbox().getToolboxItems();
	var items = [];
	for (var i=0;i<category.length;i++) {
		if (category[i].toolboxItemDef_.id!="category_sep")
			items.push([category[i].toolboxItemDef_.id , category[i].isHidden_==true?0:1]);
	}
}

//Arduino原始碼顯示
function arduinoCode() {
	var code = Blockly.Arduino.workspaceToCode();
	document.getElementById('code_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}

//XML原始碼顯示
function xmlCode() {
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace, true);
	var code = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('xml_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}

//視窗最上層顯示
var contents = ['updateDefinition_content','updateGenerate_content','updateCategory_content','updateMessage_content','arduino_content'];
function textareaFocus(id) {
	for (var i in contents) {
		const content = document.getElementById(contents[i]);
		content.style.zIndex = (contents[i]==id)?"99":"98";
	}
}

//縮放視窗
function contentZoom(content) {
	const div_title = document.getElementById(content+"_title");
	const div_content = document.getElementById(content+"_content");
	const div_code = document.getElementById(content+"_code");
	if (div_content.style.height!= "40px") {
		div_content.w = div_content.style.width;
		div_content.h = div_content.style.height;
		div_content.l = div_content.style.left;
		div_content.t = div_content.style.top;
		
		div_content.style.width = "calc(20vw)";
		div_content.style.height = "40px";
		div_code.style.display = "none";

		if (content=="arduino") {
			div_content.style.left = "calc(98% - 20vw)";
			div_content.style.top = "64px";
			showCode = false;
		}
	}
	else {
		div_content.style.width = div_content.w;
		div_content.style.height = div_content.h;
		div_code.style.display = "block";
		
		if (content=="arduino") {
			div_content.style.left = div_content.l;	
			div_content.style.top = div_content.t;	
			
			var code = Blockly.Arduino.workspaceToCode();			
			editor.setValue(code);
			showCode = true;			
		}	
	}
}

/*
// NW.js

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    //console.log('request ', request.url.split("?")[0]);

    var filePath = './package.nw' + request.url.split("?")[0];
    if (filePath == './package.nw/') {
        filePath = './package.nw/index.html'
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(3000);

// Server: http://127.0.0.1:3000
*/
