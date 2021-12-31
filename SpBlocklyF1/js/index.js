/*
 * Copyright 2021 ChungYi Fu, Taiwan
 * @fileoverview SPduino V1
 * @author https://www.facebook.com/francefu/
*/

var arduino_version = "1.8.16";
var lang = "zh-hant";
var customCategory = [];
var customCategoryInsertAfter = "category_sep_main";
var languageList = "msg/language.js";

document.addEventListener('DOMContentLoaded', function() {
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
			console.log(jqXHR.statusText);
		}
	});	
	
	//載入自訂積木
	var category = document.getElementById('toolbox');
	var xmlValue='<xml id="toolbox">';
	if (category.childNodes.length>0) {
		for (var i=0;i<category.childNodes.length;i++){
			var node = new XMLSerializer().serializeToString(category.childNodes[i]);
			xmlValue+=node;
		}
	}
	xmlValue+='</xml>';	
	var xmlValue_last = xmlValue;
	
	if (typeof systemBlocks != "undefined") {
		for (var i=0;i<systemBlocks.length;i++) {
			var customBlocksPath = systemBlocks[i][0];  //自訂積木連結
			var insertAfterCategoryName = systemBlocks[i][1];  //可將自訂積木插入在指定目錄後
			addCustomBlocks(customBlocksPath, insertAfterCategoryName);
		}
	}

	function addCustomBlocks(customBlocksPath, insertAfterCategoryName) {
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
					
					try {
					
						if (document.getElementById('lang-selector').value=="en") {
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
					//console.log(error);
					xmlValue = xmlValue_last;
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR.statusText);
				xmlValue = xmlValue_last;
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
		for (var i=0;i<customCategory.length;i++) {
			if (child==customCategory[i][2])
				customCategory.splice(i, 1);
		}
	}	
	
	setTimeout(function(){
		
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
			

			newFile();
			changeLanguage();

			/*
			setInterval(function(){
				var code = Blockly.Arduino.workspaceToCode();
				document.getElementById('arduino_code').innerHTML = code.replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
			}, 500);
			*/			
	}, 1000);

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
	updateMsg();
	
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
	
	//上傳韌體
	document.getElementById('button_uploadCode').onclick = function () {
		var uploader = document.getElementById('arduino-web-uploader');
		var result = prompt('Upload hex file to nano/uno/pro/pro-mini', 'https://fustyles.github.io/webduino/SPduino_tool/hex/test.hex');
		uploader.setAttribute("hex-href", result);
		document.getElementById('arduino-web-uploader').click();
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
					serial_readSting = new TextDecoder().decode(value);
					serial_message(serial_readSting,"green");
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
				serial_selProductId = usbProductId;
				serial_selVendorId = usbVendorId;
				
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
							var result = prompt('Upload hex file to nano/uno/pro/pro-mini', 'https://fustyles.github.io/webduino/SPduino_tool/hex/test.hex');
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
			alert("Web serial is not supported.");
	}	
	
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
});	


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
	}
	else {
		div_content.style.width = div_content.w;
		div_content.style.height = div_content.h;
		div_code.style.display = "block";	
		
		if (content=="arduino") {
			div_content.style.left = div_content.l;	
			div_content.style.top = div_content.t;	
		}			
	}
}
