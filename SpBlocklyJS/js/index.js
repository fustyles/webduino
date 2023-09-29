/*
@license
Copyright 2022 Taiwan (ChungYi Fu)
SPDX-License-Identifier: Apache-2.0

@author https://www.facebook.com/francefu/
@Update 1/1/2022 00:00 (Taiwan Standard Time)
*/
var topCheck = true;
var showCode = false;
var myTimer;
var myTimer1;
var category;
var categoryBlocks = [];
var categoryExpand = [];

document.addEventListener('DOMContentLoaded', function() {
	
	function getScript() {
		var script = "<script src='GameElements_20190131/gameelements.js'></script>";
		script += "<link rel='stylesheet' href='css/icon.css' />";
	
		var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace(), true);
		xml = Blockly.Xml.domToPrettyText(xml);
		
		if (xml.indexOf("holistic_")!=-1) {
			script += "<script src='holistic_20201012/holistic_video.js'></script>";			
			script += "<script src='holistic_20201012/holistic.js'></script>";
		}
		
		if (xml.indexOf("faceapirecognize_")!=-1) {
			script += "<script src='faceapi_recognize_20201012/faceapi-recognition_video.js'></script>";			
			script += "<script src='faceapi_recognize_20201012/faceapi-recognition.js'></script>";
			script += "<script src='faceapi_recognize_20201012/face-api.min.js'></script>";
		}		
		
		if (xml.indexOf("teachablemachine_")!=-1) {
			script += "<script src='teachablemachine_20201012/teachablemachine_video.js'></script>";			
			script += "<script src='teachablemachine_20201012/teachablemachine.js'></script>";
		}		
		
		if (xml.indexOf("webserial_")!=-1) {
			script += "<script src='WebSerial_20220126/WebSerial_elements.js'></script>";			
			script += "<script src='WebSerial_20220126/WebSerial.js'></script>";
		}
		
		if (xml.indexOf("webbluetooth_")!=-1) {
			script += "<script src='WebBluetooth_20220924/WebBluetooth_elements.js'></script>";			
			script += "<script src='WebBluetooth_20220924/WebBluetooth.js'></script>";
		}		
		
		if (xml.indexOf("fu_mqtt_")!=-1) {
			script += "<script src='MQTT_20220324/mqtt.min.js'></script>";
		}
		
		if (xml.indexOf("cocossd_")!=-1) {
			script += "<script src='coco-ssd_20201012/coco-ssd_video.js'></script>";			
			script += "<script src='coco-ssd_20201012/coco-ssd.js'></script>";
		}	

		if (xml.indexOf("faceapidetect_")!=-1) {
			script += "<script src='faceapi_detect_20201012/faceapidetect_video.js'></script>";			
			script += "<script src='faceapi_detect_20201012/faceapidetect.js'></script>";
			script += "<script src='faceapi_recognize_20201012/face-api.min.js'></script>";
		}	

		if (xml.indexOf("hands_")!=-1) {
			script += "<script src='hands_20220614/hands_video.js'></script>";			
			script += "<script src='hands_20220614/hands.js'></script>";
		}

		if (xml.indexOf("trackingcolor_")!=-1) {
			script += "<script src='trackingcolor_20201012/trackingcolor_video.js'></script>";			
			script += "<script src='trackingcolor_20201012/trackingcolor.js'></script>";
			script += "<script src='trackingcolor_20201012/tracking-min.js'></script>";
		}	

		if (xml.indexOf("instascan_")!=-1) {
			script += "<script src='instascan.js_20201012/instascan_video.js'></script>";			
			script += "<script src='instascan.js_20201012/instascan.js'></script>";
			script += "<script src='instascan.js_20201012/instascan.min.js'></script>";
		}

		if (xml.indexOf("tesseract_")!=-1) {
			script += "<script src='tesseract.js_20201012/tesseract_video.js'></script>";			
			script += "<script src='tesseract.js_20201012/tesseract.js'></script>";
			script += "<script src='tesseract.js_20201012/tesseract.min.js'></script>";
		}	

		if (xml.indexOf("spreadsheet")!=-1) {
			script += "<script src='SpreadsheetSQL_20210403/spreadsheetsql.js'></script>";			
			script += "<script src='SpreadsheetSQL_20210403/loader.js'></script>";
		}	

		if (xml.indexOf("chart_doughnut_")!=-1) {
			script += "<script src='chart_20220723/Chart.min.js'></script>";			
			script += "<script src='chart_20220723/pretty-doughtnut.js'></script>";
		}

		if (xml.indexOf("chart_gauge_")!=-1) {
			script += "<script src='chart_20220723/jquery.tempgauge.js'></script>";
		}
		
		if (xml.indexOf("chart_waterbubble_")!=-1) {
			script += "<script src='chart_20220723/waterbubble.js'></script>";
		}

		if (xml.indexOf("chart_line_")!=-1) {
			script += "<script src='chart_20220723/Chart.min.js'></script>";			
			script += "<script src='chart_20220723/linechart.js'></script>";
		}	

		if (xml.indexOf("chart_bar_")!=-1) {
			script += "<script src='chart_20220723/Chart.min.js'></script>";			
			script += "<script src='chart_20220723/barchart.js'></script>";
		}		
		
		if (xml.indexOf("chart_analoggauge_")!=-1) {
			script += "<script src='chart_20220723/Chart.min.js'></script>";			
			script += "<script src='chart_20220723/jquery.simplegauge.js'></script>";
			script += "<link href='chart_20220723/jquery.simplegauge.css' type='text/css' rel='stylesheet'></script>";
		}

		if (xml.indexOf("TextToSpeech_")!=-1) {
			script += "<script src='TextToSpeech_20220729/texttospeech.js'></script>";
		}	

		if (xml.indexOf("SpeechRecognition_")!=-1) {
			script += "<script src='SpeechRecognition_20220729/speechrecognition.js'></script>";
		}	

		if (xml.indexOf("linenotify")!=-1||xml.indexOf("linebot")!=-1) {
			script += "<script src='line_20220729/line.js'></script>";
		}	

		if (xml.indexOf("chart_switch_")!=-1) {
			script += "<script src='chart_20220723/jquery.simpleswitch.js'></script>";
			script += "<link href='chart_20220723/simpleswitch.css' type='text/css' rel='stylesheet'></script>";			
		}	

		if (xml.indexOf("ifttt")!=-1) {
			script += "<script src='ifttt_20220730/ifttt.js'></script>";			
		}			
		
		if (xml.indexOf("thingspeak")!=-1) {
			script += "<script src='thingspeak_20220730/thingspeak.js'></script>";			
		}		

		if (xml.indexOf("telegram_")!=-1) {
			script += "<script src='Telegram_20200809/telegram.js'></script>";			
		}	

		if (xml.indexOf("matrix_")!=-1) {
			script += "<script src='MatrixLed_20180810/matrixled.js'></script>";			
		}

		if (xml.indexOf("openai_")!=-1) {
			script += "<script src='openAI_20221212/openAI.js'></script>";			
		}
		if (xml.indexOf("webusb_")!=-1&&xml.indexOf("microbit")!=-1) {
			script += "<script src='WebUSB_20210813/WebUSB.js'></script>";
			script += "<script src='WebUSB_20210813/WebUSB_elements_microbit.js'></script>";
			script += "<script src='WebUSB_20210813/dap.umd.js'></script>";			
			script += "<script src='WebUSB_20210813/WebUSB_microbit.js'></script>";					
		}
		else if (xml.indexOf("webusb_")!=-1) {
			script += "<script src='WebUSB_20210813/WebUSB.js'></script>";			
			script += "<script src='WebUSB_20210813/WebUSB_elements.js'></script>";
			script += "<script src='WebUSB_20210813/serial.js'></script>";
			script += "<script src='WebUSB_20210813/arduino.js'></script>";
		}
		if (xml.indexOf("robotfly_")!=-1) {
			script += "<script src='RobotFly_20220127/RobotFly.js'></script>";
		}
		if (xml.indexOf("posenet_")!=-1) {
			script += "<script src='posenet_20201012/posenet_video.js'></script>";			
			script += "<script src='posenet_20201012/posenet.js'></script>";
		}	
		if (xml.indexOf("knnclassifier_")!=-1) {
			script += "<script src='knn-classifier_20201012/knn-classifier_video.js'></script>";			
			script += "<script src='knn-classifier_20201012/knn-classifier.js'></script>";
		}
		if (xml.indexOf("aes_")!=-1) {
			script += "<script src='https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js'></script>";
		}		
				
		return script;
	}	
	
	function getScriptRemote() {
		var script = "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/GameElements_20190131/gameelements.js'></script>";
		script += "<link rel='stylesheet' href='https://fustyles.github.io/webduino/SpBlocklyJS/css/icon_custom.css' />";
		
		var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace(), true);
		xml = Blockly.Xml.domToPrettyText(xml);
		
		if (xml.indexOf("holistic_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/holistic_20201012/holistic_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/holistic_20201012/holistic.js'></script>";
		}
		
		if (xml.indexOf("faceapirecognize_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_recognize_20201012/faceapi-recognition_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_recognize_20201012/faceapi-recognition.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_recognize_20201012/face-api.min.js'></script>";
		}		
		
		if (xml.indexOf("teachablemachine_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/teachablemachine_20201012/teachablemachine_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/teachablemachine_20201012/teachablemachine.js'></script>";
		}		
		
		if (xml.indexOf("webserial_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebSerial_20220126/WebSerial_elements.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebSerial_20220126/WebSerial.js'></script>";
		}
		
		if (xml.indexOf("webbluetooth_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebBluetooth_20220924/WebBluetooth_elements.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebBluetooth_20220924/WebBluetooth.js'></script>";
		}		
		
		if (xml.indexOf("fu_mqtt_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/MQTT_20220324/mqtt.min.js'></script>";
		}
		
		if (xml.indexOf("cocossd_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/coco-ssd_20201012/coco-ssd_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/coco-ssd_20201012/coco-ssd.js'></script>";
		}	

		if (xml.indexOf("faceapidetect_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_detect_20201012/faceapidetect_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_detect_20201012/faceapidetect.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/faceapi_recognize_20201012/face-api.min.js'></script>";
		}	

		if (xml.indexOf("hands_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/hands_20220614/hands_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/hands_20220614/hands.js'></script>";
		}

		if (xml.indexOf("trackingcolor_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/trackingcolor_20201012/trackingcolor_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/trackingcolor_20201012/trackingcolor.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/trackingcolor_20201012/tracking-min.js'></script>";
		}	

		if (xml.indexOf("instascan_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/instascan.js_20201012/instascan_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/instascan.js_20201012/instascan.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/instascan.js_20201012/instascan.min.js'></script>";
		}

		if (xml.indexOf("tesseract_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/tesseract.js_20201012/tesseract_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/tesseract.js_20201012/tesseract.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/tesseract.js_20201012/tesseract.min.js'></script>";
		}	

		if (xml.indexOf("spreadsheet")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/SpreadsheetSQL_20210403/spreadsheetsql.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/SpreadsheetSQL_20210403/loader.js'></script>";
		}	

		if (xml.indexOf("chart_doughnut_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/Chart.min.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/pretty-doughtnut.js'></script>";
		}

		if (xml.indexOf("chart_gauge_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/jquery.tempgauge.js'></script>";
		}
		
		if (xml.indexOf("chart_waterbubble_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/waterbubble.js'></script>";
		}

		if (xml.indexOf("chart_line_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/Chart.min.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/linechart.js'></script>";
		}	

		if (xml.indexOf("chart_bar_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/Chart.min.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/barchart.js'></script>";
		}		
		
		if (xml.indexOf("chart_analoggauge_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/Chart.min.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/jquery.simplegauge.js'></script>";
			script += "<link href='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/jquery.simplegauge.css' type='text/css' rel='stylesheet'></script>";
		}

		if (xml.indexOf("TextToSpeech_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/TextToSpeech_20220729/texttospeech.js'></script>";
		}	

		if (xml.indexOf("SpeechRecognition_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/SpeechRecognition_20220729/speechrecognition.js'></script>";
		}	

		if (xml.indexOf("linenotify")!=-1||xml.indexOf("linebot")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/line_20220729/line.js'></script>";
		}	

		if (xml.indexOf("chart_switch_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/jquery.simpleswitch.js'></script>";
			script += "<link href='https://fustyles.github.io/webduino/SpBlocklyJS/chart_20220723/simpleswitch.css' type='text/css' rel='stylesheet'></script>";			
		}	

		if (xml.indexOf("ifttt")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/ifttt_20220730/ifttt.js'></script>";			
		}			
		
		if (xml.indexOf("thingspeak")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/thingspeak_20220730/thingspeak.js'></script>";			
		}		

		if (xml.indexOf("telegram_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/Telegram_20200809/telegram.js'></script>";			
		}	

		if (xml.indexOf("matrix_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/MatrixLed_20180810/matrixled.js'></script>";			
		}
		
		if (xml.indexOf("openai_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/openAI_20221212/openAI.js'></script>";			
		}
		if (xml.indexOf("webusb_")!=-1&&xml.indexOf("microbit")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebUSB_20210813/WebUSB.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebUSB_20210813/WebUSB_elements_microbit.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebUSB_20210813/WebUSB_microbit.js'></script>";				
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebUSB_20210813/dap.umd.js'></script>";
		}
		else if (xml.indexOf("webusb_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebUSB_20210813/WebUSB.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebUSB_20210813/WebUSB_elements.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebUSB_20210813/serial.js'></script>";
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/WebUSB_20210813/arduino.js'></script>";
		}
		if (xml.indexOf("robotfly_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/RobotFly_20220127/RobotFly.js'></script>";
		}
		if (xml.indexOf("posenet_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/posenet_20201012/posenet_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/posenet_20201012/posenet.js'></script>";
		}	
		if (xml.indexOf("knnclassifier_")!=-1) {
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/knn-classifier_20201012/knn-classifier_video.js'></script>";			
			script += "<script src='https://fustyles.github.io/webduino/SpBlocklyJS/knn-classifier_20201012/knn-classifier.js'></script>";
		}
		if (xml.indexOf("aes_")!=-1) {
			script += "<script src='https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js'></script>";
		}		
		
		return script;
	}		
	
	//載入積木目錄
	category = [
		catSystem,
		catMyBackPack,	
		"<sep></sep>",
		catWindow,
		catKeyboard,
		catTextToSpeech,
		catSpeechRecognition,
		"<sep></sep>",
		catMatrixLed,
		"<sep></sep>",
		catWebSerial,
		catWebUSB,
		catWebBluetooth,		
		catMQTT,
		catCommand,		
		"<sep></sep>",	
		catJavaScript,
		catPageElements,
		catChart,
		"<sep></sep>",
		catSpreadsheetsql,
		catTHINGSPEAK,
		catIFTTT,
		catLineNotify,
		catTelegram,
		"<sep></sep>",
		catOpenAI,	
		catHolistic,	
		catTeachablemachine,
		catKNNclassifier,		
		catCocossd,	
		catHands,
		catPosenet,
		catFaceDetect,
		catFaceRecognize,
		catTrackingColor,
		catTesseract,
		catInstascan
		//,"<sep></sep>",
		//catRobotFly
	];
	
	//My Search
	function updateCategoryBlocks(newCategory) {
		categoryBlocks = [];
		for (var i=0;i<newCategory.length;i++){
			var categoryString = newCategory[i].replace(/(?:\r\n|\r|\n|\t)/g, "");
			var xml = new DOMParser().parseFromString(categoryString,"text/xml");
			searchCategoryBlocks(xml.firstChild.childNodes);
		}
		//console.log(categoryBlocks);
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
	updateCategoryBlocks(category);
	
	
	setTimeout(function(){
		
		var xmlToolbox='<xml id="toolbox">';
		try {
			for (var i=0;i<category.length;i++){
				category[i] = category[i].replace(/\<category /g, "<category expanded=\"false\" ");
				//console.log(category[i]);
				var xml = new DOMParser().parseFromString(category[i],"text/xml");
				xmlToolbox+=new XMLSerializer().serializeToString(xml.firstChild).replace("<xml>","").replace("</xml>","");
			}
		} catch (error) {
			console.log(error);
		}		
		xmlToolbox+='</xml>';

		//初始化工作區	
		const workspace = Blockly.inject('root',{
				media: 'media/'
				,toolbox: xmlToolbox
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
		
		updateMsg();
		newFile();
		
		//Double Click關閉彈出積木選單
		var blocklyWorkspace = document.getElementsByClassName("blocklyFlyout");
		for (var f=0;f<blocklyWorkspace.length;f++) {
			blocklyWorkspace[f].addEventListener('dblclick', function(){ 
				Blockly.hideChaff();
			});
		}
		
		//當工作區變動
		function onBlocksChange(event) {
			clearTimeout(myTimer);
			clearTimeout(myTimer1);
			
			if (event) {
				//console.log(event.type);
				if (event.type == "create"||event.type == "move"||event.type == "change"||event.type == "click"||event.type == "drag"||event.type == "delete") 	
					mqttState = true;
				else if (event.type == "finished_loading") {
					mqttState = false;
					mqttLock = false;
				}		
			}
			
			if (event&&topCheck) {
				if (event.blockId) {
					var block = Blockly.getMainWorkspace().getBlockById(event.blockId);
					if (block) {
						if ((block.outputConnection)&&!block.getParent()&&block.isEnabled()) {
							block.setEnabled(false);
						}
						else if ((block.outputConnection)&&block.getParent()&&!block.isEnabled()) {
							block.setEnabled(true);
						}
					}
				}
			}
			
			myTimer = setTimeout(function(){
				if (showCode) {
					var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());			
					editor.setValue(code);
				}
				
				if (mqttState ==true&&mqttLock==false&&mqtt_client) {
					var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
					var xmlText = Blockly.Xml.domToText(xml);
					mqtt_client.publish(mqttTopic, collaborationID+"|||"+xmlText);
					mqttState = false;
				}		
				mqttLock = false;			
			}, 200);
			
			myTimer1 = setTimeout(function(){
				if (showCode) {
					var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());			
					editor.setValue(code);
				}		
			}, 2000);		
			//workspace.removeChangeListener(onBlocksChange);
		}
		workspace.addChangeListener(onBlocksChange);
	
	}, 1000);	

	//新增自訂積木js檔
	function addScript(url) {
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = location.href.substr(0, location.href.lastIndexOf("/"))+"/"+url;
		$("body").append(s);
	}

	//檢查目錄是否已存在工具箱
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
	
	//新增初始化積木
	function newFile() {
		var xmlDoc = Blockly.utils.xml.textToDom('<xml></xml>');
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xmlDoc, Blockly.getMainWorkspace());
	}
	
	
	//程式碼區塊顯示
	document.getElementById('button_code').onclick = function () {
		var div = document.getElementById('javascript_content');
		if (div.style.display == "none") {
			div.style.display = "block";
			showCode = true;
		}
		else {
			div.style.display = "none";
			showCode = false;
		}
	}
	
	//重設工作區
	document.getElementById('button_reset').onclick = function () {
		var result = confirm(Blockly.Msg.BUTTON_RESET);
		if (result) {
			newFile();
			
			document.getElementById('javascript_content').attributeStyleMap.clear();	
		}
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
	
	//匯出HTML檔
	document.getElementById('button_save_html').onclick = function () {
		try {
			try {
				var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
				var iframe_code="\<!DOCTYPE html\>\<html\>\<head\>\<meta charset='utf-8'\>\<meta http-equiv='Access-Control-Allow-Origin' content='*'\>\<meta http-equiv='Access-Control-Allow-Credentials' content='true'\>\<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'\>\<\/script\>";
				
				iframe_code += getScriptRemote(); 
				  
				iframe_code += "\<\/head\>\<body\>\<script\>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{\n"+code+"};main();\<\/script\>\<\/body\>\<\/html\>";

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
	
	//執行程式
	function runCode() {
	  var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
	  var iframe_code="\<!DOCTYPE html\>\<html\>\<head\>\<meta charset='utf-8'\>\<meta http-equiv='Access-Control-Allow-Origin' content='*'\>\<meta http-equiv='Access-Control-Allow-Credentials' content='true'\>\<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'\>\<\/script\>";
	  
	  iframe_code += getScript();
		
	  iframe_code += "\<\/head\>\<body\>\<div onclick='parent.document.exitFullscreen();' style='z-index:99999 !important;cursor: nw-resize;position:absolute;opacity:0.1;left:calc(100vw - 20px);'\>X\</div>\<script\>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{"+code+"};main();\<\/script\>\<\/body\>\<\/html\>";
	  
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
	
	//停止程式
	function stopCode() {
	  document.getElementById("iframe_run").src = "about:blank";
	}		
	
	//開啟程式碼執行視窗
	document.getElementById('button_run').onclick = function () {

		stopCode();
		var opt = {
			//dialogClass: "dlg-no-close",
			draggable: true,			
			autoOpen: false,
			resizable: true,
			modal: false,
			//show: "blind",
			//hide: "blind",			
			width: 800,
			height: 500,
			buttons: [			
				{
					text: Blockly.Msg.BUTTON_CLOSE,
					click: function() {
						stopCode();
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
					text: Blockly.Msg.BUTTON_FULLSCREEN,
					click: function() {
						document.getElementById("iframe_run").requestFullscreen();
						stopCode();
						setTimeout(function(){
							runCode();
						}, 100);
					}
				},
				{
					text: Blockly.Msg["BUTTON_START"],
					click: function() {
						stopCode();
						setTimeout(function(){
							runCode();
						}, 100);
					}
				}				
			],
			title: Blockly.Msg["MSG_DISPLAY"]
		};
		$("#dialog_run").dialog(opt).dialog("open");
		event.preventDefault();
		
		$('.ui-dialog').animate({
			top: 60
		}, 200); 

		if ($('.ui-dialog-titlebar-close'))	
			$('.ui-dialog-titlebar-close').attr('title', Blockly.Msg["BUTTON_BOTTOM"]);
		
		if (document.getElementById("ui-id-1")) {
			document.getElementById("ui-id-1").ondblclick = function () {
				$(this).parents('.ui-dialog').animate({
					top: 60			
				}, 200);
			}	
		}		
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
			e.parentElement.removeChild(e);
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
						var blocks = Blockly.utils.xml.textToDom(event.target.result);
						Blockly.Xml.domToWorkspace(blocks, Blockly.getMainWorkspace());
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
	
	//切換語言
	document.getElementById('lang-selector').onchange = function () {
		if (this.selectedIndex>0) 
			location.href = "?lang=" + this.options[this.selectedIndex].value;
	}

	//隱藏顯示程式碼區塊
	setTimeout(function() {
		document.getElementById('javascript_content').style.display = "none";
		document.getElementById('javascript_content').style.visibility = "visible";
		showCode = false;
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
				dialogClass: "dlg-no-close",
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
				dialogClass: "dlg-no-close",
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
	
	//MQTT協同編輯設定
	document.getElementById('button_collaboration').onclick = function () {
		var opt = {
			dialogClass: "dlg-no-close",
			draggable: true,			
			autoOpen: false,
			resizable: true,
			modal: false,
			//show: "blind",
			//hide: "blind",			
			width: 520,
			height: 320,
			buttons: [					
				{
					text: Blockly.Msg.BUTTON_LINK,
					click: function() {
						var broker = document.getElementById('collaboration_broker').value;
						var topic = document.getElementById('collaboration_topic').value;
						var userid = document.getElementById('collaboration_userid').value;
						var password = document.getElementById('collaboration_password').value;
						
						collaboration(broker, topic, userid, password);
					}
				},				
				{
					text: Blockly.Msg.BUTTON_CLOSE,
					click: function() {
						$(this).dialog("close");
					}
				}
			],
			title: Blockly.Msg["MSG_COLLABORATION"]
		};
		$("#dialog_collaboration").dialog(opt).dialog("open");
		event.preventDefault();
	}	
	
	//Web MQTT
	document.getElementById('button_webMQTT').addEventListener("click", function(evt) {
		if (typeof nw !== "undefined")
			nw.Shell.openExternal("http://127.0.0.1:3000/WebMQTT.html")
		else
			window.open("https://fustyles.github.io/webduino/mqtt_basic_page.html")
	});   	
	
	//MQTT協同編輯
	var collaborationID = "SpBlocklyJS_"+Math.random().toString(16).substr(2, 8);
	var mqttState = false;
	var mqttLock = false;
	var mqttBroker = "ws://mqttgo.io:8000/mqtt";
	var mqttTopic = "blockly/mqtt";
	var mqttUserID = "";
	var mqttPassword = "";
	var mqtt_client;
	
	function collaboration(mqtt_broker, mqtt_topic, mqtt_userid, mqtt_password) {
		mqttBroker = mqtt_broker;
		mqttTopic = mqtt_topic;
		mqttUserID = mqtt_userid;
		mqttPassword = mqtt_password;
		
		const clientId = "mqtt_" + Math.random().toString(16).substr(2, 8);
		const options = {
			username: mqttUserID,
			password: mqttPassword,
			keepalive: 60,
			clientId: clientId,
			protocolId: "MQTT",
			protocolVersion: 4,
			clean: true,
			reconnectPeriod: 1000,
			connectTimeout: 30 * 1000
		}
			
		mqtt_client = mqtt.connect(mqttBroker,options);
		mqtt_client.on("connect", ()=>{
			console.log("connected");
			mqtt_client.subscribe(mqttTopic);
			mqtt_client.on("message", async function (topic, payload) {
				var enc = new TextDecoder("utf-8");
				payload = enc.decode(payload).split("|||");
				//console.log(payload);
				  if (topic==mqttTopic&&payload[0]!=collaborationID) {
					mqttLock = true;
					var xmlDoc = Blockly.utils.xml.textToDom(payload[1]);
					Blockly.getMainWorkspace().clear();
					Blockly.Xml.domToWorkspace(xmlDoc, Blockly.getMainWorkspace());
				  }
			})
		})	
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

//搜尋工具箱積木
//search blocks
Blockly.mySearch={};
Blockly.MYSEARCH_CATEGORY_NAME="MYSEARCH";
Blockly.mySearch.NAME_TYPE=Blockly.MYSEARCH_CATEGORY_NAME;
Blockly.mySearch.Blocks=[];

Blockly.mySearch.flyoutCategory=function(a){
	var c=[];
	var b = Blockly.mySearch.Blocks;
	for (var i=0;i<b.length;i++) {
		c.push(Blockly.utils.xml.textToDom(b[i]));
	}
	return c
};

var registeryCallbackMySearch = function(){
	if(Blockly.getMainWorkspace() == null){
		setTimeout(registeryCallbackMySearch, 200);
	} else {
		Blockly.mySearch&&Blockly.mySearch.flyoutCategory&&(Blockly.getMainWorkspace().registerToolboxCategoryCallback(Blockly.MYSEARCH_CATEGORY_NAME,Blockly.mySearch.flyoutCategory));
	}
};
registeryCallbackMySearch();

function registerOpenBlockToolbox() {
  if (Blockly.ContextMenuRegistry.registry.getItem('open_block_toolbox')) {
    return;
  }
  const openBlockToolbox = {
    displayText: function(){
		return Blockly.Msg["MYSEARCH_OPENBLOCKTOOLBOX"];
	},
    preconditionFn: function(a) {
		return 'enabled';
    },
    callback: function(a) {
		searchBlockCategory(a.block.type)
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'open_block_toolbox',
    weight: 400,
  };
  Blockly.ContextMenuRegistry.registry.register(openBlockToolbox);
}
  
registerOpenBlockToolbox();

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
		height: 190,
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
					searchBlocksKeyword(document.getElementById('searchblocks_keyword').value);
				}
			}
		],
		title: Blockly.Msg["MYSEARCH_QUERY"]
	};
	$("#dialog_searchblocks").dialog(opt).dialog("open");
	event.preventDefault();
}

function searchBlocksKeyword(keyword) {
	Blockly.mySearch.Blocks=[];
	Blockly.hideChaff();
	
	console.log(Blockly.getMainWorkspace().getAllVariables());
	
	if (keyword) {
		var toolboxItems = Blockly.getMainWorkspace().toolbox_.getToolboxItems();
		for (var i=0;i<toolboxItems.length;i++) {
			var flyoutItems = toolboxItems[i].flyoutItems_;
			if (flyoutItems){
				for (var j=0;j<flyoutItems.length;j++) {
					if (flyoutItems[j].blockxml) {
						var block = Blockly.getMainWorkspace().newBlock(flyoutItems[j].type);
						var type = "";
						for (var k=0;k<block.inputList.length;k++) {
							if (block.inputList[k].fieldRow&&type=="") {
								for (var m=0;m<block.inputList[k].fieldRow.length;m++) {
									if (type=="") {
										var fieldRow = block.inputList[k].fieldRow[m];
										if (fieldRow.menuGenerator_) {
											for (var n=0;n<fieldRow.menuGenerator_.length;n++) {
												if (fieldRow.menuGenerator_[n][0].toString().toLowerCase().indexOf(keyword.toLowerCase())!=-1&&fieldRow.menuGenerator_[n][0].toString().toLowerCase().indexOf(";base64,")==-1) {
													type = flyoutItems[j].type;
													break;
												}
											}
										} else if (fieldRow.value_.toString().toLowerCase().indexOf(keyword.toLowerCase())!=-1&&fieldRow.value_.toString().toLowerCase().indexOf(";base64,")==-1&&fieldRow.name===undefined) {
											type = flyoutItems[j].type;
										}
										if (type!="") {
											for (var p=0;p<categoryBlocks.length;p++) {
												if (categoryBlocks[p].indexOf('type="'+flyoutItems[j].type+'"')!=-1&&categoryBlocks[p].indexOf('disabled="true"')==-1) {
													var b = categoryBlocks[p].replace(/(?:\r\n|\r|\n|\t)/g, "");
													const index = Blockly.mySearch.Blocks.indexOf(b);
													if (index!=-1)
													  Blockly.mySearch.Blocks.splice(index, 1);
													Blockly.mySearch.Blocks.push(b);
													break;
												}
											}
										}	
									}									
								}
							}
						}
						block.dispose(false);
					}
				}
			}				
		}
	}
	
	var allVariables = Blockly.getMainWorkspace().getAllVariables();
	var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
	xml = Blockly.Xml.domToText(xml);
	for (var i=0;i<allVariables.length;i++) {
		if (xml.indexOf(">"+allVariables[i].name+"</variable>")==-1)
			Blockly.getMainWorkspace().deleteVariableById(allVariables[i].id_);
	}
	
	if (Blockly.mySearch.Blocks.length>0) {
		var toolbox = Blockly.getMainWorkspace().toolbox_;
		for (n=0;n<toolbox.contents_.length;n++) {
			if (toolbox.contents_[n].name_==Blockly.Msg["MYSEARCH"]) {
				var id = toolbox.contents_[n].id_;
				toolbox.setSelectedItem(toolbox.getToolboxItemById(id));
				break;
			}
		}
	}
	
	
}

function searchBlockCategory(blockType) {
	Blockly.hideChaff();
	var toolbox = Blockly.getMainWorkspace().toolbox_;
	if (toolbox.contents_) {
		for (var i=0;i<toolbox.contents_.length;i++) {
			if (toolbox.contents_[i].flyoutItems_) {
				for (var j=0;j<toolbox.contents_[i].flyoutItems_.length;j++) {
					if (toolbox.contents_[i].flyoutItems_[j].kind=="BLOCK") {
						if (toolbox.contents_[i].flyoutItems_[j].type==blockType) {
							categoryExpand = [];
							parentCategoryExpand(toolbox.contents_[i].parent_);
							
							var id = toolbox.contents_[i].id_;
							toolbox.setSelectedItem(toolbox.getToolboxItemById(id));
							return;
						}
					}
				}
			}
		}	
	}
}

function parentCategoryExpand(parent_) {
	if (parent_) {
		if (parent_.id_) {
			categoryExpand = [parent_.id_].concat(categoryExpand);
			if (parent_.parent_) {
				parentCategoryExpand(parent_.parent_);
			} else {
				for (var i=0;i<categoryExpand.length;i++) {
					var toolbox = Blockly.getMainWorkspace().toolbox_;
					toolbox.getToolboxItemById(categoryExpand[i]).setExpanded(true);
					toolbox.setSelectedItem(toolbox.getToolboxItemById(categoryExpand[i]));
				}
			}
		}
	}
}

//JavaScript原始碼顯示
function javascriptCode() {
	var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
	document.getElementById('code_content').innerHTML = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
}

//XML原始碼顯示
function xmlCode() {
	var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace(), true);
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
			showCode = false;
		}
	}
	else {
		div_content.style.width = div_content.w;
		div_content.style.height = div_content.h;
		div_code.style.display = "block";
		
		if (content=="javascript") {
			div_content.style.left = div_content.l;	
			div_content.style.top = div_content.t;
			
			var code = Blockly.JavaScript.workspaceToCode();			
			editor.setValue(code);			
			showCode = true;
		}			
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
