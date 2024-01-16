/*
@license
Copyright 2022 Taiwan (ChungYi Fu)
SPDX-License-Identifier: Apache-2.0

@fileoverview Blocklyduino F1 (online)
@author https://www.facebook.com/francefu/
@Update 1/1/2022 00:00 (Taiwan Standard Time)
*/

var arduino_version = "1.8.19";
var lang = "zh-hant";
var customCategory = [];
var customCategoryInsertAfter = "category_sep_main";
var languageList = "msg/language.js";
var xmlValue = "";
var topCheck = true;
var myTimer;
var showCode = false;
var showCodeMessage = false;
var showCodeDelay = 6000;
var myTimer;
var myTimer1;
var categoryBlocks = [];
var categoryArray = [];
var categoryExpand = [];

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


		//Double Click關閉彈出積木選單
		var blocklyWorkspace = document.getElementsByClassName("blocklyFlyout");
		for (var f=0;f<blocklyWorkspace.length;f++) {
			blocklyWorkspace[f].addEventListener('dblclick', function(){ 
				Blockly.hideChaff();
			});
		}
			
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
		updateMsg();
		newFile();
		contentZoom('arduino');
		
		document.getElementById('button_addExtensionBlocks').click();
	
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
					
					categoryArray = [];
					categoryArray.push(xmlValue);
					updateCategoryBlocks(categoryArray);
					
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

					categoryArray = [];
					categoryArray.push(new XMLSerializer().serializeToString(category));
					updateCategoryBlocks(categoryArray);						
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
		for (var i=0;i<customCategory.length;i++) {
			if (child==customCategory[i][2])
				customCategory.splice(i, 1);
		}
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

	//程式碼區塊顯示
	document.getElementById('button_code').onclick = function () {
		var div = document.getElementById('arduino_content');
		if (div.style.display == "none")
			div.style.display = "block";
		else
			div.style.display = "none";
	}
	
	//程式碼區塊調整大小功能	
	$(function() {
		$( "#arduino_content" ).draggable();
		$( "#arduino_content" ).resizable();
	} );

	//更新首頁語系文字
	function updateMsg() {
		if (typeof msg != "undefined") {
			for (var i=0;i<msg.length;i++) {
				if (msg[i][1]=="innerHTML"&&document.getElementById(msg[i][0]))
					document.getElementById(msg[i][0]).innerHTML=msg[i][2];
				else if (msg[i][1]=="title"&&document.getElementById(msg[i][0]))
					document.getElementById(msg[i][0]).title=msg[i][2];
			}
		}
	}
	
	//複製程式碼到剪貼簿
	document.getElementById('button_copycode').onclick = function () {
		var text = document.getElementById('arduino_code').innerText;
		navigator.clipboard.writeText(text).then(function() {
			alert('Copying to clipboard was successful!');
		}, function(err) {
			console.error('Async: Could not copy text: ', err);
		});
	}
	
	//重設工作區
	document.getElementById('button_reset').onclick = function () {
		var result = confirm(Blockly.Msg.BUTTON_RESET);
		if (result) newFile();
		document.getElementById('arduino_content').attributeStyleMap.clear();
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
			window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(xmlText);
			alert(e);
		}	
	}
	
	//開啟積木工具
	document.getElementById('button_tool').onclick = function () {
		var link = document.createElement('a');
		link.target="_blank";
		link.href="https://fustyles.github.io/webduino/SPduino_tool/index.html";
		document.body.appendChild(link);
		link.click();
		link.remove();
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
						}, 100);
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
		else
			if (typeof nw !== "undefined")
				nw.Shell.openExternal("https://fustyles.github.io/webduino/WebSerial.html")	
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
		else
			alert("Web bluetooth is not supported.");
	}
	
	//Web MQTT
	document.getElementById('button_webMQTT').addEventListener("click", function(evt) {
		if (typeof nw !== "undefined")
			nw.Shell.openExternal("http://127.0.0.1:3000/WebMQTT.html")
		else
			window.open("https://fustyles.github.io/webduino/mqtt_basic_page.html")
	}); 	
	
	//切換語言
	document.getElementById('lang-selector').onchange = function () {
		if (this.selectedIndex!=-1) 
			lang = this.options[this.selectedIndex].value;
		changeLanguage();
		/*
		var result = confirm(Blockly.Msg.RELOAD_TITLE);
		if (result) {
			chrome.runtime.reload();
		}
		*/
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
	
	//新增初始化積木
	function newFile() {
		var xmlDoc = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml"><block type="initializes_setup" id="0" x="100" y="50"><next><block type="initializes_loop" id="1"></block></next></block></xml>');
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xmlDoc, Blockly.getMainWorkspace());
	}
	
	function updateCategoryBlocks(newCategory) {
		categoryBlocks = [];
		for (var i=0;i<newCategory.length;i++){
			var categoryString = newCategory[i].replace(/(?:\r\n|\r|\n|\t)/g, "");
			var xml = new DOMParser().parseFromString(categoryString,"text/xml");
			searchCategoryBlocks(xml.firstChild.childNodes);
		}
	}
	function searchCategoryBlocks(nodes) {
		if (nodes.length>0) {
			for (var j=0;j<nodes.length;j++){
				if (nodes[j].nodeName=="category")
					searchCategoryBlocks(nodes[j].childNodes);
				else if (nodes[j].nodeName=="block")
					categoryBlocks.push(new XMLSerializer().serializeToString(nodes[j]));
			}
		}
	}	
});	

function searchBlocks() {
	var opt = {
		dialogClass: "dlg-no-close",
		draggable: true,			
		autoOpen: false,
		resizable: true,
		modal: false,
		//show: "blind",
		//hide: "blind",			
		width: 260,
		height: 180,
		buttons: [	
			{
				text: Blockly.Msg.BUTTON_CLOSE,
				click: function() {
					$(this).dialog("close");
				}
			},
			{
				text: Blockly.Msg.BUTTON_CLEAR,
				click: function() {
					document.getElementById('searchblocks_keyword').value="";
				}
			},		
			{
				text: Blockly.Msg["MYSEARCH"],
				click: function() {
					mySearchBlocks(document.getElementById('searchblocks_keyword').value);
				}
			}
		],
		title: Blockly.Msg["MYSEARCH_QUERY"]
	};
	$("#dialog_searchblocks").dialog(opt).dialog("open");
	event.preventDefault();
}

function selectBoard(board) {
  if (Blockly.getMainWorkspace()) {
	var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
	Blockly.getMainWorkspace().clear();
	Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
  }	
}

function addHeadScript(url) {
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.src = url;
	document.getElementsByTagName('head')[0].append(s);
}

//切換頁籤
var tabs = ['code_content','category_content'];
function displayTab(id) {
	for (var i in tabs) {
		document.getElementById(tabs[i]).style.display= (tabs[i]==id)?"block":"none";
		if (tabs[i]=='code_content') arduinoCode();
	}
}

function arduinoCode() {
	var code = Blockly.Arduino.workspaceToCode();
	document.getElementById('code_content').innerHTML = code.replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
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

//縮放視窗
function contentZoom(content) {
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
			div_content.style.top = "112px";
		}
		showCode = false;
	}
	else {
		div_content.style.width = div_content.w;
		div_content.style.height = div_content.h;
		div_code.style.display = "block";	
		
		if (content=="arduino") {
			div_content.style.left = div_content.l;	
			div_content.style.top = div_content.t;	
		}	
		var code = Blockly.Arduino.workspaceToCode();			
		editor.setValue(code);
		showCode = true;
	}
}

if (typeof require !== "undefined") {
	var http = require('http');
	var fs = require('fs');
	var path = require('path');

	http.createServer(function (request, response) {
		//console.log('request ', request.url.split("?")[0]);

		var filePath = './package.nw' + request.url.split("?")[0];
		if (filePath == './package.nw/') {
			filePath = './package.nw/main.html'
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
}
