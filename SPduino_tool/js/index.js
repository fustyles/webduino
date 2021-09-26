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
	const myBackpack = new MyBackpack(workspace, "category_initializes" , true);
	
	//程式碼區塊調整大小功能	
	$(function() {
		$( "#code_content" ).draggable();
	});
	
	//程式碼區塊拖曳功能
	$(function() {
		$( "#code_content" ).resizable();
	});	
	
	setInterval(function(){ 
		var div_code = document.getElementById('arduino_code');
		var code = Blockly.Arduino.workspaceToCode();			
		div_code.innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");				
	}, 500);	
	
	//新增初始化積木
	function newFile() {
		var xmlDoc = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml"><block type="main" id="0" x="100" y="50"></block></xml>');
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
	document.getElementById('button_workspace').onclick = function () {
		var developertool = document.getElementById('developertool');
		if (developertool.style.height == "220px"||developertool.style.height == "") {
			displayTab('category_content');
			document.getElementById('category_content').style.display = "none";
			document.getElementById('arduino_content').style.display = "none";
			document.getElementById('code_content').style.display = "none";
			developertool.style.height = "calc(100vh - 100px)";
		}
		else {

			displayTab('category_content');
			document.getElementById('code_content').style.display = "block";	
		}
	}	
	
	//重設工作區
	document.getElementById('button_new').onclick = function () {
		var result = confirm(Blockly.Msg.BUTTON_RESET);
		if (result) {
			newFile();
			document.getElementById('blocks_function').value = "";
			document.getElementById('arduino_function').value = "";
			document.getElementById('category_function').value = "";
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
	
	//積木定義
	document.getElementById('blocks_function').value = ''+
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
		'};';
		
	//程式碼產出
	document.getElementById('arduino_function').value = ""+
		"Blockly.Arduino['test'] = function(block) {\n"+
		"  //Blockly.Arduino.definitions_['name'] = '\/\/Hello World';\n"+
		"  //Blockly.Arduino.functions_['name'] = 'String blockly() {\\n  return \"Hello World\";\\n}';\n\n"+
		"  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);\n"+
		"  var value_val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);\n"+
		"  var code = 'digitalWrite(%1, %2);\\n'.replace('%1',value_pin).replace('%2',value_val);\n"+
		"  return code;\n"+
		"};";
		
	//工具箱目錄
	document.getElementById('category_function').value = ''+
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
		'</category>';
		
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
	document.getElementById('addBlocks').onclick = function () {
		newFile();
		document.getElementById('button_updateDefinition').click();
		document.getElementById('button_updateGenerate').click();		
		document.getElementById('button_updateCategory').click();
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
	developertool.style.height = "220px";
}

//Arduino原始碼顯示
function arduinoCode() {
	document.getElementById('code_content').style.display = "block";
	var code = Blockly.Arduino.workspaceToCode();
	document.getElementById('arduino_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}

//XML原始碼顯示
function xmlCode() {
	document.getElementById('code_content').style.display = "none";
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace, true);
	var code = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('xml_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}