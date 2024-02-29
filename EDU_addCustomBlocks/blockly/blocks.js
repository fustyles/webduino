Blockly.Blocks['addMyBlocks'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.ADDCUSTOMBLOCKS_SHOW);
  this.appendValueInput("url")
      .setCheck("String"); 
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["",""],
        [Blockly.Msg.ADDCUSTOMBLOCKS_ADD_SHOW,"add"], 
        [Blockly.Msg.ADDCUSTOMBLOCKS_REMOVE_SHOW,"remove"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_ADDAINEW_SHOW,"addAllNewAI"], 
        [Blockly.Msg.ADDCUSTOMBLOCKS_REMOVEAINEW_SHOW,"removeAllNewAI"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_ADDALL_SHOW,"addOldAll"], 
        [Blockly.Msg.ADDCUSTOMBLOCKS_REMOVEALL_SHOW,"removeAll"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_WEBSERIAL_SHOW,"WebSerial_20220126"],	  
        [Blockly.Msg.ADDCUSTOMBLOCKS_WEBBLUETOOTH_SHOW,"WebBluetooth_20220924"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_WEBUSB_SHOW,"WebUSB_20210813"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_MYBACKPACK_SHOW,"myBackPack_20210914"],	  
        [Blockly.Msg.ADDCUSTOMBLOCKS_MQTT_SHOW,"MQTT_20220324"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_GAMEELEMENTS_SHOW,"GameElements_20190131"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_OPENAI_TEXT_SHOW,"openAI_20221212"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_GEMINI_TEXT_SHOW,"gemini_2024029"],	      
        [Blockly.Msg.ADDCUSTOMBLOCKS_HOLISTIC_SHOW,"holistic_20201012"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_HANDS_SHOW,"hands_20220614"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_COCO_SSD_SHOW,"coco_ssd_20201012"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_TRACKINGCOLOR_SHOW,"trackingcolor_20201012"], 
        [Blockly.Msg.ADDCUSTOMBLOCKS_FACEAPI_RECOGNIZE_SHOW,"faceapi_recognize_20201012"], 
        [Blockly.Msg.ADDCUSTOMBLOCKS_FACEAPI_DETECT_SHOW,"faceapi_detect_20201012"],
 	[Blockly.Msg.ADDCUSTOMBLOCKS_TEACHABLEMACHINE_SHOW,"teachablemachine_20201012"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_INSTASCAN_SHOW,"instascan.js_20201012"],		
        [Blockly.Msg.ADDCUSTOMBLOCKS_KNN_CLASSIFIER_SHOW,"knn_classifier_20201012"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_TESSERACT_SHOW,"tesseract.js_20201012"], 
        [Blockly.Msg.ADDCUSTOMBLOCKS_TRACKINGFACE_SHOW,"trackingface_20201012"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_POSENET_SHOW,"posenet_20201012"], 
        [Blockly.Msg.ADDCUSTOMBLOCKS_BLAZEFACE_SHOW,"Blazeface_20201012"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_MOBILENET_SHOW,"mobilenet_20201012"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_BARCODE_SHOW,"barcode_20210216"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_CHART_SHOW,"chart_20220723"],
	[Blockly.Msg.ADDCUSTOMBLOCKS_SPREADSHEETSQL_SHOW,"SpreadsheetSQL_20210403"],	  
        [Blockly.Msg.ADDCUSTOMBLOCKS_TELEGRAM_SHOW,"Telegram_20200809"],	
        [Blockly.Msg.ADDCUSTOMBLOCKS_LINEBOT_SHOW,"LineBot_20181027"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_TELLO_SHOW,"Tello_20210103"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_ROBOTFLY_SHOW,"RobotFly_20220127"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_SPEECHRECOGNITION_SHOW,"SpeechRecognition_20220729"]
      ]), "func");
  this.setTooltip('');
  this.setColour(20);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/CustomBlock.txt");
  },
  onchange: function (event) {
    if (event.element=="field") {
      if (this.id==event.blockId) {
	  
          if (event.name=='func') {
            var url = this.getInputTargetBlock("url").getFieldValue("TEXT");
            if (this.getFieldValue('func')=='add') {
                  Code.customTab.$__add__(url);
				  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
            else if (this.getFieldValue('func')=='remove') {
                  Code.customTab.$__remove__(url);
				  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
	    else if (this.getFieldValue('func')=='addOldAll') {
		  /*
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/instascan.js_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/tesseract.js_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/trackingface_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/trackingcolor_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/knn-classifier_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_recognize_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_detect_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/posenet_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Blazeface_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/coco-ssd_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/mobilenet_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/teachablemachine_20201012/blockly.json');
		  */
		    
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/teachablemachine_20200729/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/Blazeface_20200627/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Facemesh_20200626/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/Tracking_20200625/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/Tracking_20190917/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/tesseract.js_20200615/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/handpose_20200614/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/faceapi_20200402/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_customvision-tfjs_20200128/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/deeplab_20200125/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/bodypix2_20200125/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/bodypix1_20200125/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/faceapi_20200124/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/SpeechRecognition_20191225/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/EDU_speak_setting/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/EDU_bit_MatrixLed_20190827/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/ESP32-CAM_20191201/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_ClassifyImage_20190901/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_FaceDetection_20190901/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_FaceToFaceVerify_20191118/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_FaceFindSimilar_20191117/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/posenet_20190822/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/mobilenet_20190821/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/coco-ssd_20190821/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/knn-classifier_20190608/blockly.json');
                  //Code.customTab.$__add__('https://fustyles.github.io/webduino/GameElements_20190131/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/iframe_20180802/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/teachable_machine_boilerplate_20180818/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Instruction_20181213/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/ShowCode_20181216/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/ESP8266_20190128/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/WebBit_20190225/blockly.json');
		  //Code.customTab.$__add__('https://fustyles.github.io/webduino/instascan.js_20200824/blockly.json');
            }
            else if (this.getFieldValue('func')=='removeAll') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/teachablemachine_20200729/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Blazeface_20200627/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Facemesh_20200626/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Tracking_20200625/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Tracking_20190917/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/tesseract.js_20200615/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/handpose_20200614/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_20200402/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Azure_customvision-tfjs_20200128/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/deeplab_20200125/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/bodypix2_20200125/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/bodypix1_20200125/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_20200124/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/SpeechRecognition_20191225/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/EDU_speak_setting/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/EDU_bit_MatrixLed_20190827/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/ESP32-CAM_20191201/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Azure_ClassifyImage_20190901/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Azure_FaceDetection_20190901/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Azure_FaceToFaceVerify_20191118/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Azure_FaceFindSimilar_20191117/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/posenet_20190822/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/mobilenet_20190821/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/coco-ssd_20190821/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/knn-classifier_20190608/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/GameElements_20190131/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/iframe_20180802/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/teachable_machine_boilerplate_20180818/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Instruction_20181213/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/ShowCode_20181216/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/ESP8266_20190128/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/WebBit_20190225/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Telegram_20200809/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/LineBot_20181027/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/instascan.js_20200824/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Tello_20210103/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/SpreadsheetSQL_20210403/blockly.json');
		    
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/instascan.js_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/tesseract.js_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/trackingface_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/trackingcolor_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/knn-classifier_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_recognize_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_detect_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/posenet_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Blazeface_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/coco-ssd_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/mobilenet_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/teachablemachine_20201012/blockly.json');
				  
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/barcode_20210216/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/holistic_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/WebUSB_20210813/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/myBackPack_20210914/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/WebSerial_20220126/blockly.json');
		    
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/MQTT_20220324/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/RobotFly_20220127/blockly.json');
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/hands_20220614/blockly.json');
		    
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/chart_20220723/blockly.json');
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/WebBluetooth_20220924/blockly.json');
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/openAI_20221212/blockly.json');
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/gemini_2024029/blockly.json');
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/SpeechRecognition_20220729/blockly.json');
		    
            }
	    else if (this.getFieldValue('func')=='addAllNewAI') {

                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/instascan.js_20200824/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/tesseract.js_20200615/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Tracking_20190917/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Tracking_20200625/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/knn-classifier_20190608/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_recognize_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_20200402/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/posenet_20190822/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Blazeface_20200627/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/coco-ssd_20190821/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/mobilenet_20190821/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/teachablemachine_20200729/blockly.json');

                  Code.customTab.$__add__('https://fustyles.github.io/webduino/instascan.js_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/tesseract.js_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/trackingface_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/trackingcolor_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/knn-classifier_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/faceapi_recognize_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/faceapi_detect_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/posenet_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Blazeface_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/coco-ssd_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/mobilenet_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/teachablemachine_20201012/blockly.json');
				  
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/barcode_20210216/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/holistic_20201012/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/GameElements_20190131/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Telegram_20200809/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/LineBot_20181027/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Tello_20210103/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/SpreadsheetSQL_20210403/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/WebUSB_20210813/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/WebSerial_20220126/blockly.json');
		    
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/MQTT_20220324/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/RobotFly_20220127/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/hands_20220614/blockly.json');
		    
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/chart_20220723/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/WebBluetooth_20220924/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/openAI_20221212/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/gemini_2024029/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/SpeechRecognition_20220729/blockly.json');
	    }
	    else if (this.getFieldValue('func')=='removeAllNewAI') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/instascan.js_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/tesseract.js_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/trackingface_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/trackingcolor_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/knn-classifier_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_recognize_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_detect_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/posenet_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Blazeface_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/coco-ssd_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/mobilenet_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/teachablemachine_20201012/blockly.json');
				  
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/barcode_20210216/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/holistic_20201012/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/GameElements_20190131/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Telegram_20200809/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/LineBot_20181027/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Tello_20210103/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/SpreadsheetSQL_20210403/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/WebUSB_20210813/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/WebSerial_20220126/blockly.json');
		    
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/MQTT_20220324/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/RobotFly_20220127/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/hands_20220614/blockly.json');
		    
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/chart_20220723/blockly.json');
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/WebBluetooth_20220924/blockly.json');
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/openAI_20221212/blockly.json');
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/gemini_2024029/blockly.json');
		  Code.customTab.$__remove__('https://fustyles.github.io/webduino/SpeechRecognition_20220729/blockly.json');
	    }
	    else if (this.getFieldValue('func')=='instascan.js_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/instascan.js_20200824/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/instascan.js_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='tesseract.js_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/tesseract.js_20200615/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/tesseract.js_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='trackingface_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Tracking_20190917/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/trackingface_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='trackingcolor_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Tracking_20200625/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/trackingcolor_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='knn_classifier_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/knn-classifier_20190608/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/knn-classifier_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='faceapi_recognize_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_recognize_20201012/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/faceapi_recognize_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='faceapi_detect_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_20200402/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/faceapi_detect_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='posenet_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/posenet_20190822/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/posenet_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='Blazeface_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Blazeface_20200627/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/Blazeface_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='coco_ssd_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/coco-ssd_20190821/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/coco-ssd_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='mobilenet_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/mobilenet_20190821/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/mobilenet_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='teachablemachine_20201012') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/teachablemachine_20200729/blockly.json');
                  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/teachablemachine_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='barcode_20210216') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/barcode_20210216/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='holistic_20201012') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/holistic_20201012/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='GameElements_20190131') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/GameElements_20190131/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='Telegram_20200809') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/Telegram_20200809/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='LineBot_20181027') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/LineBot_20181027/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='Tello_20210103') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/Tello_20210103/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='SpreadsheetSQL_20210403') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/SpreadsheetSQL_20210403/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='WebUSB_20210813') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/WebUSB_20210813/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='myBackPack_20210914') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/myBackPack_20210914/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='WebSerial_20220126') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/WebSerial_20220126/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='MQTT_20220324') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/MQTT_20220324/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='RobotFly_20220127') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/RobotFly_20220127/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='hands_20220614') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/hands_20220614/blockly.json", "TEXT");
			  }		  
	    else if (this.getFieldValue('func')=='chart_20220723') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/chart_20220723/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='WebBluetooth_20220924') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/WebBluetooth_20220924/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='openAI_20221212') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/openAI_20221212/blockly.json", "TEXT");
			  }
	    else if (this.getFieldValue('func')=='gemini_2024029') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/gemini_2024029/blockly.json", "TEXT");
			  }		  
	    else if (this.getFieldValue('func')=='SpeechRecognition_20220729') {
				  this.getInputTargetBlock("url").setFieldValue("https://fustyles.github.io/webduino/SpeechRecognition_20220729/blockly.json", "TEXT");
			  }
		  
	    this.getField('func').setValue("");
	}
      }
    }
  }
};    
