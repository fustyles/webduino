/*
 * Copyright 2021 ChungYi Fu, Taiwan
 * @fileoverview SpBlockly tool
 * @author https://www.facebook.com/francefu/
*/

var lang = "en";
var customCategory = [['','']];
var customCategoryInsertAfter = "category_sep_main";

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
	
	setInterval(function(){
		var code = Blockly.Arduino.workspaceToCode();			
		document.getElementById('arduino_code').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
	}, 500);	
	
	//新增初始化積木
	function newFile() {
		var xmlDoc = Blockly.Xml.textToDom('<xml><block type="main" id="0" x="100" y="50" deletable="false" editable="false"></block></xml>');
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xmlDoc, Blockly.getMainWorkspace());
	}
	newFile();
	
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
			
			document.getElementById('blocks_function').value = code[0];
			document.getElementById('arduino_function').value = code[1];
			document.getElementById('category_function').value = code[2];
			document.getElementById('message_function').value = code[3];
			
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
		exportToFile("message_function","en.js");
		exportToFile("message_function","zh-hant.js");			
	}
	
	function exportToFile(id, filename) {
		var content = document.getElementById(id).value.replace(/Javascript/g,"Arduino");
		var link = document.createElement('a');
		link.download = filename;
		link.href="data:application/octet-stream;utf-8," + encodeURIComponent(content);
		document.body.appendChild(link);
		link.click();
		link.remove();	
	}

	//儲存ino檔
	document.getElementById('button_save_ino').onclick = function () {
		try {
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
		link.href="https://blockly-demo.appspot.com/static/demos/blockfactory/index.html";
		document.body.appendChild(link);
		link.click();
		link.remove();
	}
	
	//切換語言
	document.getElementById('button_lang').onclick = function () {
		if (lang == "en") {
			lang = "zh-hant";
			addScript("msg/zh-hant.js");
		}
		else {
			lang = "en";
			addScript("msg/en.js");
		}
		addScript("js/message.js");
		var category = document.getElementById('toolbox');
		Blockly.getMainWorkspace().updateToolbox(category);	
		updateMsg();
		var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());		
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
		'	this.setColour(Blockly.Msg["MYBLOCKS_HUE"]);\n'+
		'   this.setTooltip("Blocks definition");\n'+
		'   this.setHelpUrl("https://developers.google.com/blockly/guides/create-custom-blocks/overview");\n'+
		'  }\n'+
		'};',
		"Blockly.Arduino['test'] = function(block) {\n"+
		"  //Blockly.Arduino.definitions_['name'] = '\/\/definitions_\\n';\n"+
		"  //Blockly.Arduino.setups_top_['name'] = '\/\/setups_top_\\n';\n"+
		"  //Blockly.Arduino.setups_bottom_['name'] = '\/\/setups_bottom_';\n"+
		//"  //Blockly.Arduino.loops_top_['name'] = '\/\/loops_top_\\n';\n"+
		//"  //Blockly.Arduino.loops_bottom_['name'] = '\/\/loops_bottom_';\n"+		
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
		'Blockly.Msg["MYBLOCKS"] = "MY BLOCKS";\n'+
		'Blockly.Msg["MYBLOCKS_HUE"] = "350";'		
	]
		
		
	//積木定義
	document.getElementById('blocks_function').value = code[0];
		
	//程式碼產出
	document.getElementById('arduino_function').value = code[1];
		
	//工具箱目錄
	document.getElementById('category_function').value = code[2];
	
	//語言
	document.getElementById('message_function').value = code[3];	
		
	//更新積木定義函式
	document.getElementById('button_updateDefinition').onclick = function () {
		displayTab('category_content');
		try {
			eval(document.getElementById('blocks_function').value.replace(/Javascript/g,"Arduino"));
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
		
		var xml = document.getElementById('category_function').value.replace(/Javascript/g,"Arduino");
		if (customCategory[0][0]!= xml) {
			customCategory[0][0] = xml;
			customCategory[0][1] = customCategoryInsertAfter;
		}
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
			eval(document.getElementById('message_function').value.replace(/Javascript/g,"Arduino"));
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
		document.getElementById('button_updateDefinition').click();
		document.getElementById('button_updateGenerate').click();		
		document.getElementById('button_updateCategory').click();
	}
	
	//新增遠端自訂積木
	document.getElementById('button_addRemoteBlocks').onclick = function () {
		var customBlocksPath = prompt(Blockly.Msg["CUSTOMBLOCKS_TITLE"], 'customBlocks/basic/');
		if (customBlocksPath) {
			if (!customBlocksPath.endsWith("/"))
				customBlocksPath+="/";
			addCustomRemoteBlocks(customBlocksPath);
		}
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
					
					if (!checkCategoryExist(category_)) {
						customCategory.push([category_, customCategoryInsertAfter]);
					}
					
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
			if (child==customCategory[i][0])
				return true;
		}
		return false;
	}
	
	var xml = document.getElementById('toolbox');
	var xmlValue='<xml id="toolbox">';
	if (xml.childNodes.length>0) {
		for (var i=0;i<xml.childNodes.length;i++){
			var node = new XMLSerializer().serializeToString(xml.childNodes[i]);
			xmlValue+=node;
		}
	}
	xmlValue+='</xml>';	
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

//切換視窗上層顯示
var contents = ['updateDefinition_content','updateGenerate_content','updateCategory_content','updateMessage_content','arduino_content'];
function textareaFocus(id) {
	for (var i in contents) {
		const content = document.getElementById(contents[i]);
		content.style.zIndex = (contents[i]==id)?"999999":"999998";
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

function contentZoom(content) {
	const div_content = document.getElementById(content+"_content");
	const div_code = document.getElementById(content+"_code");
	if (div_content.style.height!= "40px") {
		div_content.tip1 = div_content.style.width;
		div_content.tip2 = div_content.style.height;
		
		div_content.style.width = "calc(20vw)";
		div_content.style.height = "40px";
		div_code.style.display = "none";		
	}
	else {
		div_content.style.width = div_content.tip1;
		div_content.style.height = div_content.tip2;
		div_code.style.display = "block";	
	}
}
