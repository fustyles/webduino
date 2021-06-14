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
        [Blockly.Msg.ADDCUSTOMBLOCKS_ADDALL_SHOW,"addAll"], 
        [Blockly.Msg.ADDCUSTOMBLOCKS_REMOVEALL_SHOW,"removeAll"],
        [Blockly.Msg.ADDCUSTOMBLOCKS_ADDAINEW_SHOW,"addAllNewAI"], 
        [Blockly.Msg.ADDCUSTOMBLOCKS_REMOVEAINEW_SHOW,"removeAllNewAI"]	  
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
	    else if (this.getFieldValue('func')=='addAll') {
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
		    
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/EDU_addCustomBlocks/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/teachablemachine_20200729/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Blazeface_20200627/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Facemesh_20200626/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Tracking_20200625/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Tracking_20190917/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/tesseract.js_20200615/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/handpose_20200614/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/faceapi_20200402/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_customvision-tfjs_20200128/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/deeplab_20200125/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/bodypix2_20200125/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/bodypix1_20200125/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/faceapi_20200124/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/SpeechRecognition_20191225/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/EDU_speak_setting/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/EDU_bit_MatrixLed_20190827/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/ESP32-CAM_20191201/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_ClassifyImage_20190901/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_FaceDetection_20190901/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_FaceToFaceVerify_20191118/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_FaceFindSimilar_20191117/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/posenet_20190822/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/mobilenet_20190821/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/coco-ssd_20190821/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/knn-classifier_20190608/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/GameElements_20190131/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/iframe_20180802/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/teachable_machine_boilerplate_20180818/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Instruction_20181213/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/ShowCode_20181216/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/ESP8266_20190128/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/WebBit_20190225/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Telegram_20200809/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/LineBot_20181027/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/instascan.js_20200824/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/Tello_20210103/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/SpreadsheetSQL_20210403/blockly.json');

                  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
            else if (this.getFieldValue('func')=='removeAll') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/EDU_addCustomBlocks/blockly.json');
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
		    
                  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
	    else if (this.getFieldValue('func')=='addAllNewAI') {
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/EDU_addCustomBlocks/blockly.json');

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
		    
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/GameElements_20190131/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/Telegram_20200809/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/LineBot_20181027/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/Tello_20210103/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/SpreadsheetSQL_20210403/blockly.json');
		  Code.customTab.$__add__('https://fustyles.github.io/webduino/holistic_20201012/blockly.json');
				  
                  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
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
		  
                  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
	      
            this.getField('func').setValue("");
          }
      }
    }
  }
};    
