/*
 * Copyright 2021 Taiwan
 * @fileoverview SPduino V1
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
	
	//新增初始化積木
	function newFile() {
		var xmlDoc = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml"><block type="initializes_setup" id="0" x="100" y="50"><next><block type="initializes_loop" id="1"></block></next></block></xml>');
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xmlDoc, Blockly.getMainWorkspace());
	}
	
	newFile();
	
	setInterval(function(){ 
		var div_code = document.getElementById('showcode');
		var code = Blockly.Arduino.workspaceToCode();			
		div_code.innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");				
	}, 500);

	//程式碼區塊顯示
	document.getElementById('arduino_code').onclick = function () {
		var div = document.getElementById('code_content');
		if (div.style.display == "none")
			div.style.display = "block";
		else
			div.style.display = "none";
	}
	
	//工作區顯示
	document.getElementById('workspace_show').onclick = function () {
		var developertool = document.getElementById('developertool');
		if (developertool.style.height != "220px"&&developertool.style.height != "") {
			displayTab('category_content');
			document.getElementById('code_content').style.display = "block";
			developertool.style.height = "220px";
			document.getElementById('insertBlocks').disabled = false;
		}
		else {
			document.getElementById('category_content').style.display = "none";
			document.getElementById('arduino_content').style.display = "none";
			document.getElementById('code_content').style.display = "none";
			developertool.style.height = "calc(100vh - 100px)";
			document.getElementById('insertBlocks').disabled = true;
		}
	}	
	
	//開啟Blockly Developer Tools
	document.getElementById('tool_open').onclick = function () {
		var link = document.createElement('a');
		link.target="_blank";
		link.href="https://blockly-demo.appspot.com/static/demos/blockfactory/index.html";
		document.body.appendChild(link);
		link.click();
		link.remove();
	}	
	
	//程式碼區塊調整大小功能	
	$(function() {
		$( "#code_content" ).draggable();
	});
	
	//程式碼區塊拖曳功能
	$(function() {
		$( "#code_content" ).resizable();
	});	
	
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

	function arduinoCode() {
		var code = Blockly.Arduino.workspaceToCode();
		document.getElementById('arduino_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
	}
	
	//複製程式碼到剪貼簿
	document.getElementById('copycode').onclick = function () {
		var text = document.getElementById('showcode').innerText;
		navigator.clipboard.writeText(text).then(function() {
			alert('Copying to clipboard was successful!');
		}, function(err) {
			console.error(err);
		});
	}	
	
	//儲存內容
	document.getElementById('save').onclick = function () {
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
		'	this.setColour(230);\n'+
		'   this.setTooltip("");\n'+
		'   this.setHelpUrl("");\n'+
		'  }\n'+
		'};';
		
	document.getElementById('arduino_function').value = ""+
		"Blockly.Arduino['test'] = function(block) {\n"+
		"  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);\n"+
		"  var value_val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);\n"+
		"  // TODO: Assemble Arduino into code variable.\n"+
		"  var code = 'digitalWrite(%1, %2);\\n'.replace('%1',value_pin).replace('%2',value_val);\n"+
		"  return code;\n"+
		"};";
		
	document.getElementById('category_function').value = ''+
		'<category id="category_custom" name="MYBLOCKS" colour="0">\n'+
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
	document.getElementById('updateDefinition').onclick = function () {
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
	
	//更新產出程式碼函式
	document.getElementById('updateGenerate').onclick = function () {
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

	//更新目錄
	document.getElementById('updateCategory').onclick = function () {
		var xml = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild;
		var dom = new DOMParser().parseFromString(document.getElementById('category_function').value,"text/xml").firstChild;
		xml.appendChild(dom);
		Blockly.getMainWorkspace().updateToolbox(xml);
	}
	
	//更新自訂積木
	document.getElementById('addBlocks').onclick = function () {
		document.getElementById('updateDefinition').disabled = false;
		document.getElementById('updateGenerate').disabled = false;
		document.getElementById('updateCategory').disabled = false;
		
		newFile();
		try {
			eval(document.getElementById('blocks_function').value);
		} catch (e) {
			if (e instanceof SyntaxError) {
				alert(e.message);
			} else {
				throw e;
			}	
		}
		try {
			eval(document.getElementById('arduino_function').value.replace(/Javascript/g,"Arduino"));
		} catch (e) {
			if (e instanceof SyntaxError) {
				alert(e.message);
			} else {
				throw e;
			}	
		}		
		var xml = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild;
		var dom = new DOMParser().parseFromString(document.getElementById('category_function').value,"text/xml").firstChild;
		xml.appendChild(dom);
		Blockly.getMainWorkspace().updateToolbox(xml);
	}	
	
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
var tabs = ['arduino_content','category_content'];
function displayTab(id) {
	for (var i in tabs) {
		document.getElementById(tabs[i]).style.display= (tabs[i]==id)?"block":"none";
		if (tabs[i]=='arduino_content') arduinoCode();
	}
}

function arduinoCode() {
	var code = Blockly.Arduino.workspaceToCode();
	document.getElementById('arduino_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}