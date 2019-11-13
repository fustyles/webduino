// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function knn_classifier_open() {
    if (document.getElementById("train"))
    {
      document.getElementById("train").innerHTML = "";
      document.getElementById("probability").innerHTML = "";
    }
    else
    {
      var div = document.createElement('div');
      div.id = "train";
      div.style.position = 'absolute';
      div.style.display = 'none';
      document.body.appendChild(div);
      
      var div1 = document.createElement('div');
      div1.id = "probability";
      div1.style.position = 'absolute';    
      div1.style.display = 'none';
      document.body.appendChild(div1);      
    }
  }
  
  function knn_classifier_proportion(input_property){
    if (input_property=="train")
      return Number(document.getElementById("train").innerHTML);
    else if (input_property=="probability")
      return Number(document.getElementById("probability").innerHTML);
  }
  
  function knn_classifier_video(input_width, input_height, input_result, input_mirrorimage, input_opacity) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
    document.getElementById('result').style.display = input_result;
    document.getElementById('mirrorimage').value = input_mirrorimage;
    document.getElementById('opacity').value = input_opacity;
  }	
  
  function knn_classifier_train(input_class){
    document.getElementById("Class").value=input_class;
    document.getElementById("addExample").click();
  }
  
  function knn_classifier_startdetect(input_check){
    if (input_check=="1")
      document.getElementById("startdetection").checked = true;
    else if (input_check=="0")
      document.getElementById("startdetection").checked = false;
  }  

  window.knn_classifier_open = knn_classifier_open;
  window.knn_classifier_proportion = knn_classifier_proportion;
  window.knn_classifier_video = knn_classifier_video;
  window.knn_classifier_train = knn_classifier_train;
  window.knn_classifier_startdetect = knn_classifier_startdetect;  

}(window, window.document));
