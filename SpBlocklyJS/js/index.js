/*
@license
Copyright 2022 Taiwan (ChungYi Fu)
SPDX-License-Identifier: Apache-2.0

@fileoverview SpBlockly V1 (Javascript tool)
@author https://www.facebook.com/francefu/
@Update 1/1/2022 00:00 (Taiwan Standard Time)
*/

var topCheck = true;

document.addEventListener('DOMContentLoaded', function() {
	
	
	function getScript() {
		var workspace = Blockly.getMainWorkspace();
		var script = "<script src='GameElements_20190131/gameelements.js'></script>";
		
		if (workspace.getBlocksByType("holistic_video").length>0) {
			script += "<script src='holistic_20201012/holistic_video.js'></script>";			
			script += "<script src='holistic_20201012/holistic.js'></script>";
		}
		
		if (workspace.getBlocksByType("faceapirecognize_video").length>0) {
			script += "<script src='faceapi_recognize_20201012/faceapi-recognition_video.js'></script>";			
			script += "<script src='faceapi_recognize_20201012/faceapi-recognition.js'></script>";
			script += "<script src='faceapi_recognize_20201012/face-api.min.js'></script>";
		}		
		
		if (workspace.getBlocksByType("teachablemachine_video").length>0) {
			script += "<script src='teachablemachine_20201012/teachablemachine_video.js'></script>";			
			script += "<script src='teachablemachine_20201012/teachablemachine.js'></script>";
		}		
		
		if (workspace.getBlocksByType("webserial_baudrate").length>0) {
			script += "<script src='WebSerial_20220126/WebSerial_elements.js'></script>";			
			script += "<script src='WebSerial_20220126/WebSerial.js'></script>";
		}
		
		if (workspace.getBlocksByType("fu_mqtt_setup_js").length>0) {
			script += "<script src='https://unpkg.com/mqtt/dist/mqtt.min.js'></script>";
		}
		
		if (workspace.getBlocksByType("cocossd_video").length>0) {
			script += "<script src='coco-ssd_20201012/coco-ssd_video.js'></script>";			
			script += "<script src='coco-ssd_20201012/coco-ssd.js'></script>";
		}	

		if (workspace.getBlocksByType("faceapidetect_video").length>0) {
			script += "<script src='faceapi_detect_20201012/faceapidetect_video.js'></script>";			
			script += "<script src='faceapi_detect_20201012/faceapidetect.js'></script>";
			script += "<script src='faceapi_recognize_20201012/face-api.min.js'></script>";
		}	

		if (workspace.getBlocksByType("hands_video").length>0) {
			script += "<script src='hands_20220614/hands_video.js'></script>";			
			script += "<script src='hands_20220614/hands.js'></script>";
		}

		if (workspace.getBlocksByType("trackingcolor_set").length>0) {
			script += "<script src='trackingcolor_20201012/trackingcolor_video.js'></script>";			
			script += "<script src='trackingcolor_20201012/trackingcolor.js'></script>";
			script += "<script src='trackingcolor_20201012/tracking-min.js'></script>";
		}	

		if (workspace.getBlocksByType("instascan_video").length>0) {
			script += "<script src='instascan.js_20201012/instascan_video.js'></script>";			
			script += "<script src='instascan.js_20201012/instascan.js'></script>";
			script += "<script src='instascan.js_20201012/instascan.min.js'></script>";
		}

		if (workspace.getBlocksByType("tesseract_video").length>0) {
			script += "<script src='tesseract.js_20201012/tesseract_video.js'></script>";			
			script += "<script src='tesseract.js_20201012/tesseract.js'></script>";
			script += "<script src='tesseract.js_20201012/tesseract.min.js'></script>";
		}	

		if (workspace.getBlocksByType("spreadsheetsql_queryData").length>0||workspace.getBlocksByType("controls_spreadsheet").length>0) {
			script += "<script src='SpreadsheetSQL_20210403/spreadsheetsql.js'></script>";			
			script += "<script src='SpreadsheetSQL_20210403/loader.js'></script>";
		}	

		if (workspace.getBlocksByType("chart_doughnut_create").length>0) {
			script += "<script src='chart_20220723/Chart.min.js'></script>";			
			script += "<script src='chart_20220723/pretty-doughtnut.js'></script>";
		}

		if (workspace.getBlocksByType("chart_gauge_create").length>0) {
			script += "<script src='chart_20220723/jquery.tempgauge.js'></script>";
		}
		
		if (workspace.getBlocksByType("chart_waterbubble_create").length>0) {
			script += "<script src='chart_20220723/waterbubble.js'></script>";
		}

		if (workspace.getBlocksByType("chart_line_create").length>0) {
			script += "<script src='chart_20220723/Chart.min.js'></script>";			
			script += "<script src='chart_20220723/linechart.js'></script>";
		}	

		if (workspace.getBlocksByType("chart_bar_create").length>0) {
			script += "<script src='chart_20220723/Chart.min.js'></script>";			
			script += "<script src='chart_20220723/barchart.js'></script>";
		}		
		
		if (workspace.getBlocksByType("chart_analoggauge_create").length>0) {
			script += "<script src='chart_20220723/Chart.min.js'></script>";			
			script += "<script src='chart_20220723/jquery.simplegauge.js'></script>";
			script += "<link href='chart_20220723/jquery.simplegauge.css' type='text/css' rel='stylesheet'></script>";
		}

		if (workspace.getBlocksByType("TextToSpeech_run").length>0) {
			script += "<script src='TextToSpeech_20220729/texttospeech.js'></script>";
		}	

		if (workspace.getBlocksByType("SpeechRecognition_run").length>0) {
			script += "<script src='SpeechRecognition_20220729/speechrecognition.js'></script>";
		}	

		if (workspace.getBlocksByType("linenotify").length>0||workspace.getBlocksByType("linebot").length>0) {
			script += "<script src='line_20220729/line.js'></script>";
		}	

		if (workspace.getBlocksByType("chart_switch_create").length>0) {
			script += "<script src='chart_20220723/jquery.simpleswitch.js'></script>";
			script += "<link href='chart_20220723/simpleswitch.css' type='text/css' rel='stylesheet'></script>";			
		}		
		
		return script;
	}	
	
	function getScriptRemote() {
		var workspace = Blockly.getMainWorkspace();
		var script = "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/GameElements_20190131/gameelements.js'></script>";
		
		if (workspace.getBlocksByType("holistic_video").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/holistic_20201012/holistic_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/holistic_20201012/holistic.js'></script>";
		}
		
		if (workspace.getBlocksByType("faceapirecognize_video").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_recognize_20201012/faceapi-recognition_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_recognize_20201012/faceapi-recognition.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_recognize_20201012/face-api.min.js'></script>";
		}		
		
		if (workspace.getBlocksByType("teachablemachine_video").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/teachablemachine_20201012/teachablemachine_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/teachablemachine_20201012/teachablemachine.js'></script>";
		}		
		
		if (workspace.getBlocksByType("webserial_baudrate").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebSerial_20220126/WebSerial_elements.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebSerial_20220126/WebSerial.js'></script>";
		}
		
		if (workspace.getBlocksByType("fu_mqtt_setup_js").length>0) {
			script += "<script src='https://unpkg.com/mqtt/dist/mqtt.min.js'></script>";
		}	

		if (workspace.getBlocksByType("holistic_video").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/coco-ssd_20201012/coco-ssd_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/coco-ssd_20201012/coco-ssd.js'></script>";
		}	

		if (workspace.getBlocksByType("faceapidetect_video").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_detect_20201012/faceapidetect_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_detect_20201012/faceapidetect.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_recognize_20201012/face-api.min.js'></script>";
		}	

		if (workspace.getBlocksByType("hands_video").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/hands_20220614/hands_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/hands_20220614/hands.js'></script>";
		}	

		if (workspace.getBlocksByType("trackingcolor_set").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/trackingcolor_20201012/trackingcolor_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/trackingcolor_20201012/trackingcolor.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/trackingcolor_20201012/tracking-min.js'></script>";
		}
		
		if (workspace.getBlocksByType("instascan_video").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/instascan.js_20201012/instascan_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/instascan.js_20201012/instascan.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/instascan.js_20201012/instascan.min.js'></script>";
		}

		if (workspace.getBlocksByType("tesseract_video").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/tesseract.js_20201012/tesseract_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/tesseract.js_20201012/tesseract.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/tesseract.js_20201012/tesseract.min.js'></script>";
		}	

		if (workspace.getBlocksByType("spreadsheetsql_queryData").length>0||workspace.getBlocksByType("controls_spreadsheet").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/SpreadsheetSQL_20210403/spreadsheetsql.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/SpreadsheetSQL_20210403/loader.js'></script>";
		}

		if (workspace.getBlocksByType("chart_doughnut_create").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/Chart.min.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/pretty-doughtnut.js'></script>";
		}	

		if (workspace.getBlocksByType("chart_gauge_create").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/jquery.tempgauge.js'></script>";
		}

		if (workspace.getBlocksByType("chart_waterbubble_create").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/waterbubble.js'></script>";
		}	

		if (workspace.getBlocksByType("chart_line_create").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/Chart.min.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/linechart.js'></script>";
		}	

		if (workspace.getBlocksByType("chart_bar_create").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/Chart.min.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/barchart.js'></script>";
		}

		if (workspace.getBlocksByType("chart_analoggauge_create").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/Chart.min.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/jquery.simplegauge.js'></script>";
			script += "<link href='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/jquery.simplegauge.css' type='text/css' rel='stylesheet'></script>";			
		}
		
		if (workspace.getBlocksByType("TextToSpeech_run").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/TextToSpeech_20220729/texttospeech.js'></script>";
		}	

		if (workspace.getBlocksByType("SpeechRecognition_run").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/SpeechRecognition_20220729/speechrecognition.js'></script>";
		}

		if (workspace.getBlocksByType("linenotify").length>0||workspace.getBlocksByType("linebot").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/line_20220729/line.js'></script>";
		}

		if (workspace.getBlocksByType("chart_switch_create").length>0) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/jquery.simpleswitch.js'></script>";
			script += "<link href='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/simpleswitch.css' type='text/css' rel='stylesheet'></script>";				
		}			
		
		return script;
	}		
	
	//載入積木目錄
	var category = [
		catSystem,
		catMyBackPack,		
		"<sep></sep>",
		catWindow,
		catKeyboard,
		catTextToSpeech,
		catSpeechRecognition,
		"<sep></sep>",		
		catWebSerial,
		catMQTT,
		catLineNotify,
		"<sep></sep>",		
		catPageElements,
		catChart,
		"<sep></sep>",
		catSpreadsheetsql,
		"<sep></sep>",		
		catCocossd,			
		catHolistic,
		catHands,
		catTeachablemachine,
		catFaceDetect,
		catFaceRecognize,
		catTrackingColor,
		catTesseract,
		catInstascan		
	];
	
	var xmlNewValue='<xml id="toolbox">';
	try {
		for (var i=0;i<category.length;i++){
			var xml = new DOMParser().parseFromString(category[i],"text/xml");
			xmlNewValue+=new XMLSerializer().serializeToString(xml.firstChild).replace("<xml>","").replace("</xml>","");
		}
	} catch (error) {
		console.log(error);
	}		
	xmlNewValue+='</xml>';

	//初始化工作區	
	const workspace = Blockly.inject('root',{
			media: 'media/'
			,toolbox: xmlNewValue
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

	function addScript(url) {
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = location.href.substr(0, location.href.lastIndexOf("/"))+"/"+url;
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
		$( "#javascript_content" ).draggable();
		$( "#javascript_content" ).resizable();
		$( "#run_content" ).draggable();
		$( "#run_content" ).resizable();		
	});	
	
	setInterval(function(){
		var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());			
		editor.setValue(code);
	}, 1000);
	
	//新增初始化積木
	function newFile() {
		var xmlDoc = Blockly.Xml.textToDom('<xml></xml>');
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xmlDoc, Blockly.getMainWorkspace());
	}
	newFile();
	
	//程式碼區塊顯示
	document.getElementById('button_code').onclick = function () {
		var div = document.getElementById('javascript_content');
		if (div.style.display == "none")
			div.style.display = "block";
		else
			div.style.display = "none";
	}
	
	//重設工作區
	document.getElementById('button_reset').onclick = function () {
		var result = confirm(Blockly.Msg.BUTTON_RESET);
		if (result) {
			newFile();
			
			document.getElementById('javascript_content').attributeStyleMap.clear();	
		}
	}
	
	function exportToFile(id, filename) {
		var content = document.getElementById(id).value.replace(/JavaScript/g,"JavaScript");
		var link = document.createElement('a');
		link.download = filename;
		link.href="data:application/octet-stream;utf-8," + encodeURIComponent(content);
		document.body.appendChild(link);
		link.click();
		link.remove();	
	}

	//匯出工作區積木與原始檔
	document.getElementById('button_save_xml').onclick = function () {
		try {
			var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
			var xmlText = Blockly.Xml.domToText(xml);

			var link = document.createElement('a');
			link.download="project.xml";
			link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xmlText);
			document.body.appendChild(link);
			link.click();
			link.remove();				
		} catch (e) {
			alert(e);
		}
	}
	
	document.getElementById('button_save_html').onclick = function () {
		try {
			try {
				var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
				var iframe_code="\<!DOCTYPE html\>\<html\>\<head\>\<meta charset='utf-8'\>\<meta http-equiv='Access-Control-Allow-Origin' content='*'\>\<meta http-equiv='Access-Control-Allow-Credentials' content='true'\>\<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'\>\<\/script\>";
				
				iframe_code += getScriptRemote(); 
				  
				iframe_code += "\<\/head\>\<body\>\<script\>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{"+code+"};main();\<\/script\>\<\/body\>\<\/html\>";

				var link = document.createElement('a');
				link.download="project.html";
				link.href="data:application/octet-stream;utf-8," + encodeURIComponent(iframe_code);	  
				document.body.appendChild(link);
				link.click();
				link.remove();
			} catch (e) {
				window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(iframe_code);
				alert(e);
			}				
		} catch (e) {
			alert(e);
		}
	}
	
	//執行程式碼
	function runCode() {
	  var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
	  var iframe_code="\<!DOCTYPE html\>\<html\>\<head\>\<meta charset='utf-8'\>\<meta http-equiv='Access-Control-Allow-Origin' content='*'\>\<meta http-equiv='Access-Control-Allow-Credentials' content='true'\>\<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'\>\<\/script\>";
	  
	  iframe_code += getScript();
		
	  iframe_code += "\<\/head\>\<body\>\<script\>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{"+code+"};main();\<\/script\>\<\/body\>\<\/html\>";
	  
	  //console.log(iframe_code);
	  try {
		var iframe = document.getElementById("iframe_run");
		iframe.contentWindow.document.open();
		iframe.contentWindow.document.write(iframe_code);
		iframe.contentWindow.document.close();
		document.getElementById("iframe_run").focus();
	  } catch (e) {
		alert(e);
	  }
	}
		
	function stopCode() {
	  document.getElementById("iframe_run").src="";
	}	
	
	//開啟程式碼執行視窗
	document.getElementById('button_run').onclick = function () {
		stopCode();
		var opt = {
			draggable: true,			
			autoOpen: false,
			resizable: true,
			modal: false,
			//show: "blind",
			//hide: "blind",			
			width: 800,
			height: 600,
			buttons: [					
				{
					text: Blockly.Msg.BUTTON_CLOSE,
					click: function() {
						$(this).dialog("close");
					}
				},
				{
					text: Blockly.Msg["BUTTON_STOP"],
					click: function() {
						stopCode();
					}
				},
				{
					text: Blockly.Msg["BUTTON_START"],
					click: function() {
						runCode();
					}
				}				
			],
			title: Blockly.Msg["MSG_DISPLAY"]
		};
		$("#dialog_run").dialog(opt).dialog("open");
		event.preventDefault();
	}	
	
	//開啟Blockly Developer Tools
	document.getElementById('button_tool').onclick = function () {
		var link = document.createElement('a');
		link.target="_blank";
		link.href="https://fustyles.github.io/webduino/SPduino_tool/index.html";
		document.body.appendChild(link);
		link.click();
		link.remove();
	}
	
	//更新首頁語系文字
	function updateMsg() {
		if (typeof msg != "undefined") {
			for (var i=0;i<msg.length;i++) {
				if (msg[i][1]=="innerHTML") {
					if (document.getElementById(msg[i][0]))
						document.getElementById(msg[i][0]).innerHTML=msg[i][2];
				}
				else if (msg[i][1]=="title") {
					if (document.getElementById(msg[i][0]))
						document.getElementById(msg[i][0]).title=msg[i][2];
				}					
			}
		}
	}
	updateMsg();	
	
	function flashToolbox() {
		var category = new DOMParser().parseFromString(xmlValue,"text/xml").firstChild;
		Blockly.getMainWorkspace().updateToolbox(category);
		
		var category = JSON.parse(JSON.stringify(customCategory));
		for (var i=0;i<category.length;i++) {
			if (category[i][2]) addCustomRemoteBlocks(category[i][2]);
		}
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
	
	//複製程式碼到剪貼簿
	document.getElementById('button_copycode').onclick = function () {
		var text = document.getElementById('javascript_code').innerText;
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

	//Double Click關閉彈出積木選單
	setTimeout(function() {
		var blocklyWorkspace = document.getElementsByClassName("blocklyFlyout");
		for (var f=0;f<blocklyWorkspace.length;f++) {
			blocklyWorkspace[f].addEventListener('dblclick', function(){ 
				Blockly.hideChaff();
			});
		}
	}, 2000);
	
	//切換語言
	document.getElementById('lang-selector').onchange = function () {
		if (this.selectedIndex>0) 
			location.href = "?lang=" + this.options[this.selectedIndex].value;
	}

	//隱藏顯示程式碼區塊
	setTimeout(function() {
		document.getElementById('javascript_content').style.display = "none";
		document.getElementById('javascript_content').style.visibility = "visible";
	}, 1000);

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

});	

//切換頁籤
var tabs = ['code_content','xml_content','category_content'];
function displayTab(id) {
	for (var i in tabs) {
		const tab = document.getElementById(tabs[i]);
		tab.style.display = (tabs[i]==id)?"block":"none";
		if (id=='code_content') 
			javascriptCode();
		else if (id=='xml_content') 
			xmlCode();
	}
}

//JavaScript原始碼顯示
function javascriptCode() {
	var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
	document.getElementById('code_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}

//XML原始碼顯示
function xmlCode() {
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace, true);
	var code = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('xml_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}

//視窗最上層顯示
var contents = ['javascript_content'];
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

		if (content=="javascript") {
			div_content.style.left = "calc(98% - 20vw)";
			div_content.style.top = "64px";
		}
	}
	else {
		div_content.style.width = div_content.w;
		div_content.style.height = div_content.h;
		div_code.style.display = "block";
		
		if (content=="javascript") {
			div_content.style.left = div_content.l;	
			div_content.style.top = div_content.t;	
		}			
	}
}
