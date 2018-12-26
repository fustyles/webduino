// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function openURL(input_id_,input_url_,input_width_,input_height_,input_left_,input_top_,input_zindex_) {
    
    var substr = input_url_.toLowerCase().split('.');
    var extname_av = ".aac,.au,.aif,.aiff,.aiffc,.alac,.ape,.asf,.avi,.cda,.dat,.divx,.flac,.m2ts,.m4a,.mid,.mov,.mp2,.mp3,.mp4,.mpc,.mpg,.mpeg,.mv2,.ogg,.pdf,.ra,.ram,.raw,.rcp,.rm,.rmvb,.snd,.tak,.tta,.vob,.voc,.wma,.wav,.webm,.wmf,.wmv,.wv,.xmi,";
    var extname_flash = ".swf,.flv,";
        
    if (input_url_.toLowerCase().indexOf("http")!=0)
        var src = input_url_;
    else if (extname_av.indexOf("."+substr[substr.length-1]+",")!=-1)
        var src = '<embed src="' + input_url_ + '" style="width:' + input_width_ + 'px;height:' + input_height_ + 'px" autostart="true"></embed>'; 
    else if (extname_flash.indexOf("."+substr[substr.length-1]+",")!=-1)
        var src = '<embed src="' + input_url_ + '" style="width:' + input_width_ + 'px;height:' + input_height_ + 'px" type="application/x-shockwave-flash"></embed>';
    else 
        var src = '<iframe src="' + input_url_ + '" style="width:' + input_width_ + 'px;height:' + input_height_ + 'px" frameborder="0" allow="geolocation; microphone; camera"></iframe>';
    
    if (document.getElementById("iframe"+input_id_))
    {
          document.getElementById("iframe"+input_id_).style.left = input_left_ + 'px';
          document.getElementById("iframe"+input_id_).style.top = input_top_ + 'px';
          document.getElementById("iframe"+input_id_).style.zIndex = input_zindex_;
          document.getElementById("iframe"+input_id_).innerHTML = src;
    }
    else
    {
        var div = document.createElement('div');
        div.id = "iframe"+input_id_;
        div.style.position = 'absolute';      
        div.style.left = input_left_ + 'px';
        div.style.top = input_top_ + 'px';
        div.style.zIndex = input_zindex_;   
        div.style.display = 'block';
        div.innerHTML = src;
        document.body.appendChild(div);
    }
  }
  
  function closeURL(input_id_){
    if (document.getElementById("iframe"+input_id_))
      document.getElementById("iframe"+input_id_).remove();
  }

  window.openURL = openURL;
  window.closeURL = closeURL;

}(window, window.document));
