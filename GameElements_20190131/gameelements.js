// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {
  
  'use strict';
  
  var screen_width = 0;
  var screen_height = 0;
  var onclickid = "";
  var onclicktime = 200;
  var onclicktimerid;
  var mouse_x,mouse_y,mouse_offsetx,mouse_offsety;
  var ImageWidth,ImageHeight;
                      
  function table_create(input_id,input_width,input_height,input_left,input_top,input_trcount,input_tdcount,input_borderstyle,input_borderwidth,input_bordercolor,input_bgcolor,input_zindex,input_display) {
    if (document.getElementById("gametable_"+input_id)) 
      document.getElementById("gametable_"+input_id).parentNode.removeChild(document.getElementById("gametable_"+input_id));
    if ((input_trcount>=1)&&(input_tdcount>=1)){
      var obj = document.createElement('table');
      obj.id = "gametable_"+input_id;
      obj.style.position = "absolute";
      obj.style.left = input_left + 'px';
      obj.style.top = input_top + 'px';
      obj.style.zIndex = input_zindex;
      obj.style.border = input_borderwidth +'px ' + input_borderstyle + ' ' + input_bordercolor;
      if (input_display==0)
        obj.style.display = "none";
      else
        obj.style.display = "block";
      var tr,td;
      for (var i=0;i<input_trcount;i++){
        tr = obj.insertRow(i);
        for (var j=0;j<input_tdcount;j++){
          td = tr.insertCell(j);
          td.id = "gametable_td_"+input_id+"_"+i+'_'+j;
          td.style.textAlign="center";
          td.style.verticalAlign = "middle";
          td.style.background = input_bgcolor;
          td.style.width = input_width + 'px';
          td.style.height = input_height + 'px';
          td.setAttribute("onclick", "javascript:onclickid_set(this);");
          td.setAttribute("ondrop","javascript:var obj=document.getElementById(event.dataTransfer.getData('text/plain'));obj.style.position='static';obj.style.left=null;obj.style.top=null;event.preventDefault();if(event.target.tagName!='TD') {return false;} else {event.target.appendChild(obj);}");
          td.setAttribute("ondragover","javascript:event.preventDefault();"); 
        }
       }
      document.body.appendChild(obj);
    }
  }

  function table_set(input_id,input_property,input_value){
    if (document.getElementById("gametable_"+input_id)) {
      var obj = document.getElementById("gametable_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="borderstyle")
        obj.style.borderStyle = input_value;
      else if (input_property=="borderwidth")
        obj.style.borderWidth = input_value + "px";
      else if (input_property=="bordercolor")
        obj.style.borderColor = input_value;      
      else if (input_property=="zindex")
        obj.style.zIndex = input_value;
      else if (input_property=="display"){ 
        if (input_value==1)
        obj.style.display = "block";    
        else if (input_value==0)
        obj.style.display = "none";
      }
      else if (input_property=="position")
        obj.style.position = input_value;	    
      else if (input_property=="background")
        obj.style.background=input_value;
      else if (input_property=="backgroundimage") {
        obj.style.background="";
        obj.style.backgroundImage="url("+input_value+")";
      }
      else if (input_property=="style")
        obj.style = input_value;	    
      else
      {
        if (obj.rows.length>0){
          for (var i=0;i<obj.rows.length;i++){
            if (obj.rows[i].cells.length>0){
              for (var j=0;j<obj.rows[i].cells.length;j++){
                if (input_property=="cellwidth")
                  obj.rows[i].cells[j].style.width = input_value + "px";
                else if (input_property=="cellheight")
                  obj.rows[i].cells[j].style.height = input_value + "px";        
                else if (input_property=="cellcolor")
                  obj.rows[i].cells[j].style.background = input_value;
              }
            }
          }
        }
      }
    }
  }
  
  function table_get(input_id,input_property){
    if (document.getElementById("gametable_"+input_id)) {
      var obj = document.getElementById("gametable_"+input_id);
      if (input_property=="rows")
        return obj.rows.length;
      else if (input_property=="columns")
        return obj.rows[0].cells.length;  
      else if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="borderstyle")
        return obj.style.borderStyle;
      else if (input_property=="borderwidth")
        return Number(obj.style.borderWidth.replace(/px/ig,""));
      else if (input_property=="bordercolor"){
       var rgb = obj.style.borderColor;
       var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
       var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
       var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
       var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
       return "#"+r+g+b;
      }
      else if (input_property=="background") {
        var rgb = obj.style.background;
        var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
        var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
        var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
        var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
        return "#"+r+g+b;
      }
      else if (input_property=="backgroundimage") {
        var url=obj.style.backgroundImage;
        return url.substring(5,url.length-2);
      }
      else if (input_property=="zindex")
        return obj.style.zIndex;
      else if (input_property=="display")
        return obj.style.display;
      else if (input_property=="position")
        return obj.style.position;
      else if (input_property=='id')
        return "gametable_"+input_id;
      else if (input_property=="onclickColumn"){
        if (onclickid.indexOf("gametable_td_"+input_id)==0){     
          if (onclickid.split("_").length>=5){
            var arr = onclickid.split("_");
            return Number(arr[arr.length-1]);
          }
          else
            return "";
        }
        else
          return "";
      }
      else if (input_property=="onclickRow"){
        if (onclickid.indexOf("gametable_td_"+input_id)==0){     
          if (onclickid.split("_").length>=5){
            var arr = onclickid.split("_");
            return Number(arr[arr.length-2]);
          }
          else
            return "";
        }
        else
          return ""; 
      }
      else if (input_property=="onclick[Column,Row]"){
        if (onclickid.indexOf("gametable_td_"+input_id)==0){     
          if (onclickid.split("_").length>=5){
            var arr = onclickid.split("_");
            onclickid="";
            arr = [arr[arr.length-1],arr[arr.length-2]];
            return arr;
          }
          else
            return "";
        }
        else
          return ""; 
      }
      else if (input_property=="onclickImage"){
        if (onclickid.indexOf("gametable_td_"+input_id)==0){     
          if (document.getElementById(onclickid).hasChildNodes())
            return document.getElementById(onclickid).firstChild.id.replace(/gameimage_/ig,"");
          else
            return "";
        }
        else
          return ""; 
      }      
      else
        return "";
    }
    else
      return "";
  }
  
  function table_clear(input_id){
    if (document.getElementById("gametable_"+input_id)) {
      var obj = document.getElementById("gametable_"+input_id);
      /*
      obj.style.borderstyle = null;
      obj.style.borderwidth = null;
      obj.style.bordercolor = null;
      obj.style.background = null;
      obj.style.backgroundimage = null;
      */
      if (obj.rows.length>0){
        for (var i=0;i<obj.rows.length;i++){
          if (obj.rows[i].cells.length>0){
            for (var j=0;j<obj.rows[i].cells.length;j++) {
              obj.rows[i].cells[j].style.textAlign="center";
              obj.rows[i].cells[j].style.verticalAlign = "middle";              
              obj.rows[i].cells[j].style.background = null;
              obj.rows[i].cells[j].innerHTML = "";
            }
          }
        }
      }
    }  
  }

  function table_change_colsrows(input_id,input_target,input_cmd,input_index) {
    if (document.getElementById("gametable_"+input_id)) {
      var obj = document.getElementById("gametable_"+input_id);
      if (input_cmd=="remove") {
        if (input_target=="row")
  	  obj.deleteRow(input_index);
        else if (input_target=="col") {  
	  for (var i=0;i<obj.rows.length;i++) {
	    var row = obj.rows[i];
            row.deleteCell(input_index);
	  }
        }
      }
      else if (input_cmd=="add") {
        if (input_target=="row") {
  	  obj.insertRow(input_index);
	  for (var i=0;i<obj.rows[0].cells.length;i++) {
	    var row = obj.rows[input_index];
            row.insertCell(i);
	    row.cells[i].style.textAlign="center";
	    row.cells[i].style.verticalAlign = "middle";
	    row.cells[i].style.background = obj.rows[0].cells[i].style.background;
	    row.cells[i].style.width = obj.rows[0].cells[i].style.width;
	    row.cells[i].style.height = obj.rows[0].cells[i].style.height;
	    row.cells[i].setAttribute("onclick", "javascript:onclickid_set(this);");
	    row.cells[i].setAttribute("ondragover","javascript:event.preventDefault();"); 		  
	  }	      
	}
        else if (input_target=="col") {  
	  for (var i=0;i<obj.rows.length;i++) {
	    var row = obj.rows[i];
            row.insertCell(input_index);
	    row.cells[input_index].style.textAlign="center";
	    row.cells[input_index].style.verticalAlign = "middle";
	    row.cells[input_index].style.background = row.cells[0].style.background;
	    row.cells[input_index].style.width = row.cells[0].style.width;
	    row.cells[input_index].style.height = row.cells[0].style.height;
	    row.cells[input_index].setAttribute("onclick", "javascript:onclickid_set(this);");
	    row.cells[input_index].setAttribute("ondragover","javascript:event.preventDefault();"); 		  
	  }
        }
      }	    
      if (obj.rows.length>0) {
	if (obj.rows[0].cells.length>0) {
	  for (var i=0;i<obj.rows.length;i++) {
	    for (var j=0;j<obj.rows[0].cells.length;j++) {
	      obj.rows[i].cells[j].id="gametable_td_"+input_id+"_"+i+"_"+j;
	    }	  	
	  }
	}
      }
    }
  }
  
  function table_td_set(input_id,input_x,input_y,input_property,input_value){
    if (document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x)) {
      var obj = document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x);
      if (input_property=="width")
        obj.style.width = input_value + "px";
      else if (input_property=="height")
        obj.style.height = input_value + "px";  
      else if (input_property=="textalign")
        obj.style.textAlign = input_value;      
      else if (input_property=="background")
        obj.style.background = input_value;
      else if (input_property=="innerHTML")
        obj.innerHTML = input_value;
      else if (input_property=="style")
        obj.style = input_value;		    
    } 
  }
  
  function table_border_set(input_id,input_borderstyle,input_borderwidth,input_bordercolor){
    if (document.getElementById("gametable_"+input_id)) {
      var obj = document.getElementById("gametable_"+input_id);
      obj.style.border = input_borderwidth +'px ' + input_borderstyle + ' ' + input_bordercolor;
    } 
  } 
  
  function table_td_border_set(input_id,input_x,input_y,input_borderstyle,input_borderwidth,input_bordercolor){
    if (document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x)) {
      var obj = document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x);
      obj.style.border = input_borderwidth +'px ' + input_borderstyle + ' ' + input_bordercolor;
    } 
  }  
  
  function table_td_get(input_id,input_x,input_y,input_property){
    if (document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x))
    {
      var obj = document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x);
      if (input_property=="width")
        return obj.style.width.replace(/px/ig,"");
      else if (input_property=="height")
        return obj.style.height.replace(/px/ig,"");        
      else if (input_property=="background"){
       var rgb = obj.style.background;
       var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
       var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
       var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
       var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
       return "#"+r+g+b;
      }
      else if (input_property=="innerHTML")
        return obj.innerHTML;
      else if (input_property=="text") {
        if (obj.firstChild)
          return obj.firstChild.innerHTML;
        else
          return obj.innerHTML;
      }
      else if (input_property=="image"){
        var td = obj;
        if (td.childNodes.length > 0){
          if (td.childNodes[0].id.indexOf("gameimage_")==0)
            return td.childNodes[0].id.substr(8);
          else
            return "";
        }
        else
          return "";
      }
      else if (input_property=="childlength")
        return obj.childNodes.length;
      else if (input_property=="childid") {
	if (obj.childNodes.length>0) {
          var childid=[];
	  for (var i=0;i<obj.childNodes.length;i++) {
	    childid.push(obj.childNodes[i].id);
	  }
	  return childid;
	}
	else
	  return "";
      }
      else if (input_property=="tdid")
        return "gametable_td_"+input_id+"_"+input_y+'_'+input_x;
    }
    else
      return "";
  }
 
  function table_td_insert_img(input_id,input_x,input_y,input_img_id,input_url,input_width,input_height){
    if (document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x)){
      var obj = document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x);
      var img = document.createElement('img');
      img.id = "gameimage_"+input_img_id;
      img.src = input_url;
      img.style.width = input_width + 'px';
      img.style.height = input_height + 'px';
      img.setAttribute("onclick", "javascript:onclickid_set(this);");
      img.draggable="true";
      img.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
      obj.appendChild(img);
    }
  }

  function table_td_img_move(input_id,input_img_id,input_x,input_y){
    if (document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x)){
      var obj = document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x);
      if (document.getElementById("gameimage_"+input_img_id)) {
	var img = document.getElementById("gameimage_"+input_img_id);
	img.style.position = "static";
        obj.appendChild(img);
      }
    }
  }

  function table_td_canvas_move(input_id,input_canvas_id,input_x,input_y){
    if (document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x)){
      var obj = document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x);
      if (document.getElementById("gamecanvas_"+input_canvas_id)) {
	var canvas = document.getElementById("gamecanvas_"+input_canvas_id);
	canvas.style.position = "static";
        obj.appendChild(canvas);
      }
    }
  }

  function table_td_img_get(input_img_id,input_property){
    if (document.getElementById("gameimage_"+input_img_id)){
	  var img = document.getElementById("gameimage_"+input_img_id);
      if (img.parentNode.id.split("_").length>=5){
        var arr = img.parentNode.id.split("_");
        if (input_property=="column")  
          return Number(arr[arr.length-1]);
        else if (input_property=="row")
          return Number(arr[arr.length-2]);
        else if (input_property=="width")  
          return Number(img.style.width.replace(/px/ig,""));
        else if (input_property=="height")
          return Number(img.style.height.replace(/px/ig,""));
        else if (input_property=='naturalwidth'){
          var naturl = image_Natural_get(img);
          return Number(naturl.width);
        }
        else if (input_property=='naturalheight'){
          var naturl = image_Natural_get(img);
          return Number(naturl.height);
        }      
        else if (input_property=="imageid")
          return "gameimage_"+input_img_id;
      }
      else
        return -1;
    }
    else
      return -1;
  }
  
  function table_td_insert_text(input_id,input_x,input_y,input_text,input_fontname,input_fontsize,input_color){
    if (document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x))
      document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x).innerHTML = "<font face='" + input_fontname + "' size='" + input_fontsize + "' color='" + input_color + "'>" + input_text + "</font>";
  }  
  
  function table_td_clear(input_id,input_x,input_y){
    if (document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x)) 
      document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x).innerHTML = "";
  }  
  
  function table_delete(input_id) {
    if (document.getElementById("gametable_"+input_id))
      document.getElementById("gametable_"+input_id).parentNode.removeChild(document.getElementById("gametable_"+input_id));
  }
  
  function music_create(input_url) {
    var substr = input_url.toLowerCase().split('.');
    var extname_av = ".aac,.au,.aif,.aiff,.aiffc,.alac,.ape,.asf,.avi,.cda,.dat,.divx,.flac,.m2ts,.m4a,.mid,.mov,.mp2,.mp3,.mp4,.mpc,.mpg,.mpeg,.mv2,.ogg,.pdf,.ra,.ram,.raw,.rcp,.rm,.rmvb,.snd,.tak,.tta,.vob,.voc,.wma,.wav,.webm,.wmf,.wmv,.wv,.xmi,";
    var extname_flash = ".swf,.flv,";
        
    if (input_url.toLowerCase().indexOf("http")!=0)
        var src = input_url;
    else if (extname_av.indexOf("."+substr[substr.length-1]+",")!=-1)
        var src = '<embed src="' + input_url + '" style="width:0px;height:0px" autostart="true"></embed>'; 
    else if (extname_flash.indexOf("."+substr[substr.length-1]+",")!=-1)
        var src = '<embed src="' + input_url + '" style="width:0px;height:0px" type="application/x-shockwave-flash"></embed>';
    else 
        var src = '<iframe src="' + input_url + '" style="width:0px;height:0px" frameborder="0" allow="geolocation; microphone; camera"></iframe>';
    
    if (document.getElementById("gamemusic_"))
        document.getElementById("gamemusic_").parentNode.removeChild(document.getElementById("gamemusic_"));
    var div = document.createElement('div');
    div.id = "gamemusic_";
    div.style.position = 'absolute';      
    div.style.left = '0px';
    div.style.top = '0px';
    div.style.zIndex = -1;   
    div.style.display = 'none';
    div.innerHTML = src;
    document.body.appendChild(div);
  }
  
  function music_delete() {
    if (document.getElementById("gamemusic_")) 
      document.getElementById("gamemusic_").parentNode.removeChild(document.getElementById("gamemusic_"));
  }  
  
  function canvas_create(input_id ,input_width,input_height,input_left,input_top,input_zindex) {
    if (document.getElementById("gamecanvas_"+input_id)) 
      document.getElementById("gamecanvas_"+input_id).parentNode.removeChild(document.getElementById("gamecanvas_"+input_id));
    var obj = document.createElement('canvas');
    obj.style.position = "absolute";
    obj.id = "gamecanvas_"+input_id;
    obj.setAttribute("width",input_width + 'px');
    obj.style.width = input_width + 'px';
    obj.setAttribute("height",input_height + 'px');
    obj.style.height = input_height + 'px';
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.zIndex = input_zindex;
    obj.style.display = "block";
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);

    if (!document.getElementById("gamecanvasimg")) {
      var img = document.createElement('img');
      img.id = "gamecanvasimg";
      img.style.display = "none";
      document.body.appendChild(img);
    }
  } 

  function canvas_set(input_id,input_property,input_value) {
    if (document.getElementById("gamecanvas_"+input_id))
    {
      var obj = document.getElementById("gamecanvas_"+input_id);
      if (input_property=='width') {
        obj.setAttribute("width",input_value + 'px');
        obj.style.width = input_value + 'px';
      }
      else if (input_property=='height') {
        obj.setAttribute("height",input_value + 'px');
        obj.style.height = input_value + 'px';
      }
      else if (input_property=='left')
        obj.style.left = input_value + 'px';	    
      else if (input_property=='top')
        obj.style.top = input_value + 'px';
      else if (input_property=='zindex')
        obj.style.zIndex = input_value;
      else if (input_property=='display')
      {
        if (input_value==0)
          obj.style.display = "none";
        else
          obj.style.display = "block";
      }
      else if (input_property=="position")
        obj.style.position = input_value;		    
      else if (input_property=='moveX')
        obj.style.left = (Number(obj.style.left.replace(/px/ig,""))+Number(input_value))+"px";
      else if (input_property=='moveY')
        obj.style.top = (Number(obj.style.top.replace(/px/ig,""))+Number(input_value))+"px"; 
      else if (input_property=="draggable")
        obj.draggable = input_value;
      else if (input_property=="border")
        obj.style.border = input_value;
      else if (input_property=="backgroundColor")
        obj.style.backgroundColor = input_value;
      else if (input_property=="style")
        obj.style = input_value;		    
    }
  }  
  
  function canvas_get(input_id,input_property) {
    if (input_property=='exist')
    {
      if (document.getElementById("gamecanvas_"+input_id))
        return 1;
      else
        return 0;
    }   
    if (document.getElementById("gamecanvas_"+input_id))
    {
      var obj = document.getElementById("gamecanvas_"+input_id);
      if (input_property=='url')
        return obj.src;
      else if (input_property=='width')
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=='height')
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=='left')
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=='top')
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=='zindex')
        return Number(obj.style.zIndex);
      else if (input_property=='display')
      {
        if (obj.style.display=="block")
          return 1;
        else
          return 0;  
      }
      else if (input_property=="position")
        return obj.style.position;
      else if (input_property=="draggable")
        return obj.draggable;	 
      else if (input_property=="border")
        return obj.style.border;	
      else if (input_property=="backgroundColor") {
	var rgb = obj.style.backgroundColor;
	var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
	var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
	var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
	var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
	return "#"+r+g+b;
      }
      else if (input_property=='id')
        return "gamecanvas_"+input_id;
    }
    else
      return "";    
  }  

  function canvas_line(input_id,input_linewidth,input_x0,input_y0,input_x1,input_y1,input_color,input_rotate,input_globalAlpha) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var obj = document.getElementById("gamecanvas_"+input_id);
      var context = obj.getContext("2d");
      context.strokeStyle = input_color;
      context.lineWidth = input_linewidth;
      context.rotate(input_rotate * Math.PI / 180);
      context.globalAlpha = input_globalAlpha;
      context.beginPath();
      context.moveTo(input_x0,input_y0);
      context.lineTo(input_x1,input_y1);
      context.stroke();
    }
  } 
  
  function canvas_rect(input_id,input_linewidth,input_x0,input_y0,input_width,input_height,input_fill,input_color,input_rotate,input_globalAlpha) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.strokeStyle = input_color;
      context.fillStyle = input_color;
      context.lineWidth = input_linewidth;
      context.rotate(input_rotate * Math.PI / 180);
      context.globalAlpha = input_globalAlpha;	    
      context.beginPath();
      context.rect(input_x0,input_y0,input_width,input_height);
      if (input_fill==0)
        context.stroke();
      else
        context.fill();
    }
  } 
  
  function canvas_arc(input_id,input_linewidth,input_x0,input_y0,input_r,input_sAngle,input_eAngle,input_counterclockwise,input_fill,input_color,input_rotate,input_globalAlpha) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.strokeStyle = input_color;
      context.fillStyle = input_color;
      context.lineWidth = input_linewidth;
      context.rotate(input_rotate * Math.PI / 180);
      context.globalAlpha = input_globalAlpha;	    
      context.beginPath();
      context.arc(input_x0,input_y0,input_r,input_sAngle,input_eAngle,input_counterclockwise);
      if (input_fill==0)
        context.stroke();
      else
        context.fill();
    }
  } 

  function canvas_img_url(input_url) {
    if (!document.getElementById("gamecanvasimg")) {
      var img = document.createElement('img');
      img.id = "gamecanvasimg";
      img.style.display = "none";
      document.body.appendChild(img);
    }    
    var img = document.getElementById("gamecanvasimg");
    if (input_url!=""&&img.src!=input_url) img.src = input_url;
  } 
  
  function canvas_img(input_id,input_sx,input_sy,input_swidth,input_sheight,input_x0,input_y0,input_width,input_height,input_rotate,input_globalAlpha) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var img = document.getElementById("gamecanvasimg");
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.rotate(input_rotate * Math.PI / 180);
      context.globalAlpha = input_globalAlpha;	    
      if ((input_swidth>0)&&(input_sheight>0))
        context.drawImage(img,input_sx,input_sy,input_swidth,input_sheight,input_x0,input_y0,input_width,input_height);
      else if (((input_swidth==0)||(input_sheight==0))&&((input_width>0)&&(input_height>0)))
        context.drawImage(img,input_x0,input_y0,input_width,input_height);
      else
        context.drawImage(img,input_x0,input_y0);
    }
  } 
  
  function canvas_text(input_id,input_text,input_x0,input_y0,input_fontname,input_fontsize,input_textalign,input_fill,input_color,input_rotate,input_globalAlpha) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.strokeStyle = input_color;
      context.fillStyle = input_color;
      context.font = input_fontsize + 'px ' + input_fontname;
      context.textAlign = input_textalign;
      context.rotate(input_rotate * Math.PI / 180);
      context.globalAlpha = input_globalAlpha;	    
      if (input_fill==0)
        context.strokeText(input_text,input_x0,input_y0);
      else
        context.fillText(input_text,input_x0,input_y0);
    }
  } 

  function canvas_quadraticcurve(input_id,input_x0,input_y0,input_cp1x,input_cp1y,input_x,input_y,input_linewidth,input_color,input_fill,input_rotate,input_globalAlpha) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.strokeStyle = input_color;
      context.fillStyle = input_color;
      context.lineWidth = input_linewidth;
      context.rotate(input_rotate * Math.PI / 180);
      context.globalAlpha = input_globalAlpha;	    
      context.beginPath();
      context.moveTo(input_x0,input_y0);
      context.quadraticCurveTo(input_cp1x,input_cp1y,input_x,input_y);
      if (input_fill==0)
        context.stroke();
      else
        context.fill();
    }
  }

  function canvas_beziercurve(input_id,input_x0,input_y0,input_cp1x,input_cp1y,input_cp2x,input_cp2y,input_x,input_y,input_linewidth,input_color,input_fill,input_rotate,input_globalAlpha) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.strokeStyle = input_color;
      context.fillStyle = input_color;
      context.lineWidth = input_linewidth;
      context.rotate(input_rotate * Math.PI / 180);
      context.globalAlpha = input_globalAlpha;	    
      context.beginPath();
      context.moveTo(input_x0,input_y0);
      context.bezierCurveTo(input_cp1x,input_cp1y,input_cp2x,input_cp2y,input_x,input_y);
      if (input_fill==0)
        context.stroke();
      else
        context.fill();
    }
  }

  function canvas_clearrect(input_id,input_x,input_y,input_width,input_height) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.clearRect(input_x,input_y,input_width,input_height);
    }
  }

  function canvas_clear(input_id) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var canvas = document.getElementById("gamecanvas_"+input_id);
      var context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  } 
  
  function canvas_delete(input_id) {
    if (document.getElementById("gamecanvas_"+input_id)) 
      document.getElementById("gamecanvas_"+input_id).parentNode.removeChild(document.getElementById("gamecanvas_"+input_id));
  }   
  
  function canvas_onclick_get(input_id) {
    if (onclickid==("gamecanvas_"+input_id))
    {
      onclickid="";
      return 1;
    }
    else if (onclickid.indexOf("gametable_td_")==0){     
      if (document.getElementById(onclickid).hasChildNodes()) {
        if (document.getElementById(onclickid).firstChild.id==("gamecanvas_"+input_id)) {
          onclickid="";
          return 1;
        } else 
          return 0;
      } else 
        return 0;
    }
    else
      return 0;
  }
	
  function canvas_getcolor(input_id,input_left,input_top) {
    if (document.getElementById("gamecanvas_"+input_id))
    {
      var obj = document.getElementById("gamecanvas_"+input_id);
      var context = obj.getContext("2d");
      var hexcolor = context.getImageData(input_left, input_top, 1, 1).data;
      var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
      var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
      var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
      return "#"+r+g+b;
    }
    else
      return "";
  }	

  function image_create(input_id,input_url,input_width,input_height,input_left,input_top,input_zindex,input_display) {
    if (document.getElementById("gameimage_"+input_id))
      document.getElementById("gameimage_"+input_id).parentNode.removeChild(document.getElementById("gameimage_"+input_id));
    var obj = document.createElement('img');
    obj.style.position = "absolute";
    obj.id = "gameimage_"+input_id;
    obj.src = input_url;
    obj.style.width = input_width + 'px';
    obj.style.height = input_height + 'px';
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.zIndex = input_zindex;
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.draggable="true";
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }
  
  function image_set(input_id,input_property,input_value) {
    if (document.getElementById("gameimage_"+input_id))
    {
	  var obj = document.getElementById("gameimage_"+input_id);
      if (input_property=='url')
        obj.src = input_value;
      else if (input_property=='width')
        obj.style.width = input_value + 'px';
      else if (input_property=='height')
        obj.style.height = input_value + 'px';
      else if (input_property=='left')
        obj.style.left = input_value + 'px';
      else if (input_property=='top')
        obj.style.top = input_value + 'px';
      else if (input_property=='zindex')
        obj.style.zIndex = input_value;
      else if (input_property=='display')
      {
        if (input_value==0)
          obj.style.display = "none";
        else
          obj.style.display = "block";
      }
      else if (input_property=="position")
        obj.style.position = input_value;		    
      else if (input_property=='opacity')
        obj.style.opacity = input_value;
      else if (input_property=='rotate')
        obj.style.transform = "rotate("+input_value+"deg)";
      else if (input_property=='rotateX')
        obj.style.transform = "rotateX("+input_value+"deg)";
      else if (input_property=='rotateY')
        obj.style.transform = "rotateY("+input_value+"deg)";
      else if (input_property=='rotateZ')
        obj.style.transform = "rotateZ("+input_value+"deg)";
      else if (input_property=='moveX')
        obj.style.left = (Number(obj.style.left.replace(/px/ig,""))+Number(input_value))+"px";
      else if (input_property=='moveY')
        obj.style.top = (Number(obj.style.top.replace(/px/ig,""))+Number(input_value))+"px";  
      else if (input_property=="draggable")
        obj.draggable = input_value;
      else if (input_property=="style")
        obj.style = input_value;	    
    }
  }  
  
  function image_get(input_id,input_property) {
    if (input_property=='exist')
    {
      if (document.getElementById("gameimage_"+input_id))
        return 1;
      else
        return 0;
    }   
    if (document.getElementById("gameimage_"+input_id))
    {
      var obj = document.getElementById("gameimage_"+input_id);
      if (input_property=='url')
        return obj.src;
      else if (input_property=='width')
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=='height')
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=='naturalwidth'){
        var naturl = image_Natural_get(obj);
        return Number(naturl.width);
      }
      else if (input_property=='naturalheight'){
        var naturl = image_Natural_get(obj);
        return Number(naturl.height);
      }
      else if (input_property=='left')
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=='top')
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=='zindex')
        return Number(obj.style.zIndex);
      else if (input_property=='display')
      {
        if (obj.style.display=="block")
          return 1;
        else
          return 0;  
      }
      else if (input_property=="position")
        return obj.style.position;		    
      else if (input_property=='opacity')
        return obj.style.opacity;
      else if (input_property=='rotate')
        return obj.style.transform;
      else if (input_property=='rotateX') {
        if (obj.style.transform.indexOf("rotateX")==0)
          return Number(obj.style.transform.replace(/[^0-9]/ig,""));
        else
          return "";
      }
      else if (input_property=='rotateY') {
        if (obj.style.transform.indexOf("rotateY")==0)
          return Number(obj.style.transform.replace(/[^0-9]/ig,""));
        else
          return "";
      }
      else if (input_property=='rotateZ') {
        if (obj.style.transform.indexOf("rotateZ")==0)
          return Number(obj.style.transform.replace(/[^0-9]/ig,""));
        else
          return "";
      }
      else if (input_property=="draggable")
        return obj.draggable;	    
      else if (input_property=='id')
        return "gameimage_"+input_id;
    }
    else
      return "";    
  }  
  
  function image_delete(input_id) {
    if (document.getElementById("gameimage_"+input_id))
      document.getElementById("gameimage_"+input_id).parentNode.removeChild(document.getElementById("gameimage_"+input_id));
  }   

  function elements_collision(element1,input_id1,element2,input_id2,input_position) {
    if ((document.getElementById(element1+input_id1))&&(document.getElementById(element2+input_id2)))
    {
      var obj1 = document.getElementById(element1+input_id1).style;
      var obj2 = document.getElementById(element2+input_id2).style;
      var x1 = Number(obj1.left.replace(/px/ig,""));
      var x1_w = Number(obj1.left.replace(/px/ig,"")) + Number(obj1.width.replace(/px/ig,""));
      var y1 = Number(obj1.top.replace(/px/ig,""));
      var y1_h = Number(obj1.top.replace(/px/ig,"")) + Number(obj1.height.replace(/px/ig,""));
      var x2 = Number(obj2.left.replace(/px/ig,""));
      var x2_w = Number(obj2.left.replace(/px/ig,"")) + Number(obj2.width.replace(/px/ig,""));
      var y2 = Number(obj2.top.replace(/px/ig,""));
      var y2_h = Number(obj2.top.replace(/px/ig,"")) + Number(obj2.height.replace(/px/ig,""));
    
      var state=0;
      if ((((x2>=x1)&&(x2<=x1_w))&&((y2>=y1)&&(y2<=y1_h)))||(((x2>=x1)&&(x2<=x1_w))&&((y2_h>=y1)&&(y2_h<=y1_h)))||(((x2_w>=x1)&&(x2_w<=x1_w))&&((y2>=y1)&&(y2<=y1_h)))||(((x2_w>=x1)&&(x2_w<=x1_w))&&((y2_h>=y1)&&(y2_h<=y1_h)))||((x1>=x2&&x1_w<=x2_w)&&(y1<=y2&&y1_h>=y2_h))||((x1<=x2&&x1_w>=x2_w)&&(y1>=y2&&y1_h<=y2_h))||((x1>=x2&&x1_w<=x2_w)&&(y1>=y2&&y1_h<=y2_h)))
        state=1;
      else if ((((x1>=x2)&&(x1<=x2_w))&&((y1>=y2)&&(y1<=y2_h)))||(((x1>=x2)&&(x1<=x2_w))&&((y1_h>=y2)&&(y1_h<=y2_h)))||(((x1_w>=x2)&&(x1_w<=x2_w))&&((y1>=y2)&&(y1<=y2_h)))||(((x1_w>=x2)&&(x1_w<=x2_w))&&((y1_h>=y2)&&(y1_h<=y2_h)))||((x1>=x2&&x1_w<=x2_w)&&(y1<=y2&&y1_h>=y2_h))||((x1<=x2&&x1_w>=x2_w)&&(y1>=y2&&y1_h<=y2_h))||((x1>=x2&&x1_w<=x2_w)&&(y1>=y2&&y1_h<=y2_h)))
        state=1;
      else
        state=0; 
      
      if (state==1&&input_position!="any") {
        if (input_position=="up") {
	  if (y1_h<=(y2+y2_h)/2||(y1_h-y2>=(y2_h-y2)/2&&y1<=y2))
            return 1;
	  else
	    return 0;
        }      
        else if (input_position=="down") {
	  if (y1>=(y2+y2_h)/2||(y2_h-y1>=(y2_h-y2)/2&&y1>=y2))
            return 1;
	  else
	    return 0;      
        }
        else if (input_position=="left") {
	  if (x1_w<=(x2+x2_w)/2||(x1_w-x2>=(x2_w-x2)/2&&x1<=x2))
            return 1;
	  else
	    return 0;    
        } 
        else if (input_position=="right") {
	  if (x1>=(x2+x2_w)/2||(x2_w-x1>=(x2_w-x2)/2&&x1>=x2))
            return 1;
	  else
	    return 0;     
        }
	return 1;
      }
      else
        return state; 
    }
    else
      return 0;   
  } 

  function elements_collision_color(element1,input_id1,input_id2,input_color) {
    if ((document.getElementById(element1+input_id1))&&(document.getElementById("gamecanvas_"+input_id2))) {	    
      var obj1 = document.getElementById(element1+input_id1).style;
      var obj2 = document.getElementById("gamecanvas_"+input_id2).style;
      var x1 = Number(obj1.left.replace(/px/ig,""));
      var x1_w = Number(obj1.left.replace(/px/ig,"")) + Number(obj1.width.replace(/px/ig,""));
      var y1 = Number(obj1.top.replace(/px/ig,""));
      var y1_h = Number(obj1.top.replace(/px/ig,"")) + Number(obj1.height.replace(/px/ig,""));
      var x2 = Number(obj2.left.replace(/px/ig,""));
      var x2_w = Number(obj2.left.replace(/px/ig,"")) + Number(obj2.width.replace(/px/ig,""));
      var y2 = Number(obj2.top.replace(/px/ig,""));
      var y2_h = Number(obj2.top.replace(/px/ig,"")) + Number(obj2.height.replace(/px/ig,""));
	    
      if (elements_collision(element1,input_id1,"gamecanvas_",input_id2,"any")==1) {
	if (x1<=x2&&x1_w>=x2&&x1_w<=x2_w) {
	  var left = 0;
	  var width = x1_w-x2;
   	}
	else if (x1<=x2&&x1_w>=x2_w) {
	  var left = 0;
	  var width = x2_w-x2;	
	}
	else if (x1>=x2&&x1_w>=x1&&x1_w<=x2_w) {
	  var left = x1-x2;
	  var width = x1_w-x1;	
	}
	else if (x1>=x2&&x1_w>=x2_w) {
	  var left = x1-x2;
	  var width = x2_w-x1;	
	}	      
		
	if (y1<=y2&&y1_h>=y2&&y1_h<=y2_h) {
	  var top = 0;
	  var height = y1_h-y2;
   	}
	else if (y1<=y2&&y1_h>=y2_h) {
	  var top = 0;
	  var height = y2_h-y2;	
	}
	else if (y1>=y2&&y1_h>=y1&&y1_h<=y2_h) {
	  var top = y1-y2;
	  var height = y1_h-y1;	
	}
	else if (y1>=y2&&y1_h>=y2_h) {
	  var top = y1-y2;
	  var height = y2_h-y1;	
	}
	var context = document.getElementById("gamecanvas_"+input_id2).getContext("2d");
	if (width>0&&height>0) {
          var hexcolor = context.getImageData(left, top, width, height).data;	      
	  for (var i=0;i<hexcolor.length;i+=4) {
            var r = Number(hexcolor[i]).toString(16).length==1?"0"+Number(hexcolor[i]).toString(16):Number(hexcolor[i]).toString(16);
            var g = Number(hexcolor[i+1]).toString(16).length==1?"0"+Number(hexcolor[i+1]).toString(16):Number(hexcolor[i+1]).toString(16);
            var b = Number(hexcolor[i+2]).toString(16).length==1?"0"+Number(hexcolor[i+2]).toString(16):Number(hexcolor[i+2]).toString(16);
            if (input_color=="#"+r+g+b) return 1;
	  }
	}
        return 0;	      
      }
      else
        return 0;
    }
    else
      return 0;
  }
	
  function image_collision(input_id1,input_id2,input_position) {
    if ((document.getElementById("gameimage_"+input_id1))&&(document.getElementById("gameimage_"+input_id2)))
    {
      var img1 = document.getElementById("gameimage_"+input_id1).style;
      var img2 = document.getElementById("gameimage_"+input_id2).style;
      var x1 = Number(img1.left.replace(/px/ig,""));
      var x1_w = Number(img1.left.replace(/px/ig,"")) + Number(img1.width.replace(/px/ig,""));
      var y1 = Number(img1.top.replace(/px/ig,""));
      var y1_h = Number(img1.top.replace(/px/ig,"")) + Number(img1.height.replace(/px/ig,""));
      var x2 = Number(img2.left.replace(/px/ig,""));
      var x2_w = Number(img2.left.replace(/px/ig,"")) + Number(img2.width.replace(/px/ig,""));
      var y2 = Number(img2.top.replace(/px/ig,""));
      var y2_h = Number(img2.top.replace(/px/ig,"")) + Number(img2.height.replace(/px/ig,""));
    
      var state=0;
      if ((((x2>=x1)&&(x2<=x1_w))&&((y2>=y1)&&(y2<=y1_h)))||(((x2>=x1)&&(x2<=x1_w))&&((y2_h>=y1)&&(y2_h<=y1_h)))||(((x2_w>=x1)&&(x2_w<=x1_w))&&((y2>=y1)&&(y2<=y1_h)))||(((x2_w>=x1)&&(x2_w<=x1_w))&&((y2_h>=y1)&&(y2_h<=y1_h)))||((x1>=x2&&x1_w<=x2_w)&&(y1<=y2&&y1_h>=y2_h))||((x1<=x2&&x1_w>=x2_w)&&(y1>=y2&&y1_h<=y2_h))||((x1>=x2&&x1_w<=x2_w)&&(y1>=y2&&y1_h<=y2_h)))
        state=1;
      else if ((((x1>=x2)&&(x1<=x2_w))&&((y1>=y2)&&(y1<=y2_h)))||(((x1>=x2)&&(x1<=x2_w))&&((y1_h>=y2)&&(y1_h<=y2_h)))||(((x1_w>=x2)&&(x1_w<=x2_w))&&((y1>=y2)&&(y1<=y2_h)))||(((x1_w>=x2)&&(x1_w<=x2_w))&&((y1_h>=y2)&&(y1_h<=y2_h)))||((x1>=x2&&x1_w<=x2_w)&&(y1<=y2&&y1_h>=y2_h))||((x1<=x2&&x1_w>=x2_w)&&(y1>=y2&&y1_h<=y2_h))||((x1>=x2&&x1_w<=x2_w)&&(y1>=y2&&y1_h<=y2_h)))
        state=1;
      else
        state=0;  
      
      if (state==1&&input_position!="any") {
        if (input_position=="up") {
	  if (y1_h<=(y2+y2_h)/2||(y1_h-y2>=(y2_h-y2)/2&&y1<=y2))
            return 1;
	  else
	    return 0;
        }      
        else if (input_position=="down") {
	  if (y1>=(y2+y2_h)/2||(y2_h-y1>=(y2_h-y2)/2&&y1>=y2))
            return 1;
	  else
	    return 0;      
        }
        else if (input_position=="left") {
	  if (x1_w<=(x2+x2_w)/2||(x1_w-x2>=(x2_w-x2)/2&&x1<=x2))
            return 1;
	  else
	    return 0;    
        } 
        else if (input_position=="right") {
	  if (x1>=(x2+x2_w)/2||(x2_w-x1>=(x2_w-x2)/2&&x1>=x2))
            return 1;
	  else
	    return 0;     
        }
	return 1;
      }
      else
        return state; 
    }
    else
      return 0;   
  }   	
  
  function image_boundary(input_left,input_top) {
    if (input_left>=0) screen_width = input_left;
    if (input_top>=0) screen_height = input_top;
  }    
  
  function image_boundary_collision(input_id,input_property) {
    if ((screen_width>0)||(screen_height>0))
    {
      var left = Number(document.getElementById("gameimage_"+input_id).style.left.replace(/px/ig,""));
      var width = Number(document.getElementById("gameimage_"+input_id).style.width.replace(/px/ig,""));
      var top = Number(document.getElementById("gameimage_"+input_id).style.top.replace(/px/ig,""));
      var height = Number(document.getElementById("gameimage_"+input_id).style.height.replace(/px/ig,""));
      if (screen_width>0)
      {
        if (((input_property=="left")||(input_property=="any"))&&(left<0)) return 1
        if (((input_property=="right")||(input_property=="any"))&&(left+width>screen_width)) return 1
      }
      if (screen_height>0) 
      {
        if (((input_property=="up")||(input_property=="any"))&&(top<0)) return 1
        if (((input_property=="down")||(input_property=="any"))&&(top+height>screen_height)) return 1
      }
      return 0;
    }
    else
      return 0;   
  }    
  
  function image_sys_get(input_property) {
    if (input_property=='screen_width')
      return screen_width;
    else if (input_property=='screen_height')
      return screen_height;
    else
      return;
  }  
  
  function onclickid_set(obj) {
    clearTimeout(onclicktimerid);  
    onclickid=obj.id;
    onclicktimerid=setTimeout('image_onclickid_clear()',onclicktime);
  }
  
  function image_onclickid_clear() {
    onclickid="";
  }
  
  function image_onclick_get(input_id) {
    if (onclickid==("gameimage_"+input_id))
    {
      onclickid="";
      return 1;
    }
    else if (onclickid.indexOf("gametable_td_")==0){     
      if (document.getElementById(onclickid).hasChildNodes()) {
        if (document.getElementById(onclickid).firstChild.id==("gameimage_"+input_id)) {
          onclickid="";
          return 1;
        } else 
          return 0;
      } else 
        return 0;
    }
    else
      return 0;
  }
  
  function image_Natural_get (obj) {
    var img = new Image();
    img.src = obj.src;
    return {width: img.width, height: img.height};
  }  
  
  function mouse_coordinate_get_start() {       
      document.onmousemove = function(e){  
        e=e||window.event;
        mouse_x = e.pageX;
        mouse_y = e.pageY;
        mouse_offsetx = e.offsetX;
        mouse_offsety = e.offsetY;        
      }	  
  }

  function mouse_coordinate_get(input_property) {
    if (!document.onmousemove)
    {
      mouse_x = 0;
      mouse_y = 0;
      mouse_offsetx = 0;
      mouse_offsety = 0;       
      document.onmousemove = function(e){  
        e=e||window.event;
        mouse_x = e.pageX;
        mouse_y = e.pageY;
        mouse_offsetx = e.offsetX;
        mouse_offsety = e.offsetY;        
      }
    }
    if (input_property=="X")
      return mouse_x;
    else if (input_property=="Y")
      return mouse_y;
    else if (input_property=="offsetX")
      return mouse_offsetx;
    else if (input_property=="offsetY")
      return mouse_offsety;    
  } 
  
  function text_to_number(input_text) {
    return Number(input_text);
  } 

  function button_create(input_id,input_width,input_height,input_left,input_top,input_opacity,input_bgcolor,input_value,input_zindex,input_display) {
    if (document.getElementById("gamebutton_"+input_id)) 
      document.getElementById("gamebutton_"+input_id).parentNode.removeChild(document.getElementById("gamebutton_"+input_id));
    var obj = document.createElement('input');
    obj.type="button";
    obj.id = "gamebutton_"+input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.width = input_width + 'px';
    obj.style.height = input_height + 'px';
    obj.style.opacity = input_opacity;
    obj.style.background = input_bgcolor;
    obj.value = input_value;
    obj.style.zIndex = input_zindex;
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function button_set(input_id,input_property,input_value) {
    if (document.getElementById("gamebutton_"+input_id)) {
	  var obj = document.getElementById("gamebutton_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="width")
        obj.style.width = input_value + "px";
      else if (input_property=="height")
        obj.style.height = input_value + "px";
      else if (input_property=="borderradius") {
	if (input_value.toString().toLowerCase().indexOf("px")==-1)
          obj.style.borderRadius = input_value + "px";
	else
	  obj.style.borderRadius = input_value;
      }	    
      else if (input_property=="opacity")
        obj.style.opacity = input_value;
      else if (input_property=="background")
        obj.style.background = input_value;
      else if (input_property=="value")
        obj.value = input_value;
      else if (input_property=="fontsize")
        obj.style.fontSize = input_value + "px"; 	    
      else if (input_property=="zindex")
        obj.style.zIndex = input_value;
      else if (input_property=="display"){ 
        if (input_value==1)
          obj.style.display = "block";    
        else if (input_value==0)
          obj.style.display = "none";
      }
      else if (input_property=="position")
        obj.style.position = input_value;		    
      else if (input_property=="disabled")
        obj.disabled = input_value;
      else if (input_property=="draggable")
        obj.draggable = input_value;
      else if (input_property=="style")
	obj.style = input_value;
    }
  }
 
  function button_get(input_id,input_property){
    if (document.getElementById("gamebutton_"+input_id)) {
	  var obj = document.getElementById("gamebutton_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="height")
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
      else if (input_property=="background") {
        var rgb=obj.style.background;
        var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
        var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
        var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
        var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
        return "#"+r+g+b;
      }
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="fontsize")
        return obj.style.fontSize;	    
      else if (input_property=="zindex")
        return obj.style.zIndex;
      else if (input_property=="display")
        return obj.style.display;
      else if (input_property=="position")
        return obj.style.position;		    
      else if (input_property=="disabled")
        return obj.disabled;
      else if (input_property=="draggable")
        return obj.draggable;
      else if (input_property=='id')
        return "gamebutton_"+input_id;
    }
    else
      return "";
  }

  function button_delete(input_id) {
    if (document.getElementById("gamebutton_"+input_id))
      document.getElementById("gamebutton_"+input_id).parentNode.removeChild(document.getElementById("gamebutton_"+input_id));
  }

  function button_onclick_get(input_id) {
    if (onclickid==("gamebutton_"+input_id))
    {
      onclickid="";
      return 1;
    }
    else if (onclickid.indexOf("gametable_td_")==0){     
      if (document.getElementById(onclickid).hasChildNodes()) {
        if (document.getElementById(onclickid).firstChild.id==("gamebutton_"+input_id)) {
          onclickid="";
          return 1;
        } else 
          return 0;
      } else 
        return 0;
    }
    else
      return 0;
  }

  function colorpicker_create(input_id,input_width,input_height,input_left,input_top,input_opacity,input_value,input_zindex,input_display) {
    if (document.getElementById("gamecolor_"+input_id)) 
      document.getElementById("gamecolor_"+input_id).parentNode.removeChild(document.getElementById("gamecolor_"+input_id));
    var obj = document.createElement('input');
    obj.type="color";
    obj.id = "gamecolor_"+input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.width = input_width + 'px';
    obj.style.height = input_height + 'px';
    obj.style.opacity = input_opacity;
    obj.value = input_value.replace(/%23/g,"#");
    obj.style.zIndex = input_zindex;
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function colorpicker_set(input_id,input_property,input_value) {
    if (document.getElementById("gamecolor_"+input_id)) {
	  var obj = document.getElementById("gamecolor_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="width")
        obj.style.width = input_value + "px";
      else if (input_property=="height")
        obj.style.height = input_value + "px";
      else if (input_property=="opacity")
        obj.style.opacity = input_value;
      else if (input_property=="value")
        obj.value = input_value.replace(/%23/g,"#");      
      else if (input_property=="zindex")
        obj.style.zIndex = input_value;
      else if (input_property=="display"){ 
        if (input_value==1)
          obj.style.display = "block";    
        else if (input_value==0)
          obj.style.display = "none";
      }
      else if (input_property=="position")
        obj.style.position = input_value;		    
      else if (input_property=="disabled")
        obj.disabled = input_value;
      else if (input_property=="draggable")
        obj.draggable = input_value;	
      else if (input_property=="style")
        obj.style = input_value;	    
    }
  }

  function colorpicker_get(input_id,input_property){
    if (document.getElementById("gamecolor_"+input_id)) {
	  var obj = document.getElementById("gamecolor_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="height")
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="zindex")
        return obj.style.zIndex;
      else if (input_property=="display")
        return obj.style.display;
      else if (input_property=="position")
        return obj.style.position;		    
      else if (input_property=="disabled")
        return obj.disabled;
      else if (input_property=="draggable")
        return obj.draggable;	
      else if (input_property=='id')
        return "gamecolor_"+input_id;
    }
    else
      return "";
  }

  function colorpicker_delete(input_id) {
    if (document.getElementById("gamecolor_"+input_id))
      document.getElementById("gamecolor_"+input_id).parentNode.removeChild(document.getElementById("gamecolor_"+input_id));
  }

  function colorpicker_onclick_get(input_id) {
    if (onclickid==("gamecolor_"+input_id))
    {
      onclickid="";
      return 1;
    }
    else if (onclickid.indexOf("gametable_td_")==0){     
      if (document.getElementById(onclickid).hasChildNodes()) {
        if (document.getElementById(onclickid).firstChild.id==("gamecolor_"+input_id)) {
          onclickid="";
          return 1;
        } else 
          return 0;
      } else 
        return 0;
    }
    else
      return 0;
  }

  function select_create(input_id,input_width,input_height,input_left,input_top,input_background,input_color,input_fontSize,input_opacity,input_option,input_value,input_zindex,input_display) {
    if (document.getElementById("gameselect_"+input_id)) 
      document.getElementById("gameselect_"+input_id).parentNode.removeChild(document.getElementById("gameselect_"+input_id));
    var obj = document.createElement("select");
    obj.id = "gameselect_"+input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.width = input_width + 'px';
    obj.style.height = input_height + 'px';
    obj.style.background = input_background;
    obj.style.color = input_color;
    obj.style.fontSize = input_fontSize + "px";	  
    obj.style.opacity = input_opacity;
    if (input_option.length>0) {
      for (var i = 0; i < input_option.length; i++) {
        var option = document.createElement("option");
        option.value = input_option[i][0];
        option.text = input_option[i][1];
        obj.appendChild(option);
      }
    }
    obj.value = input_value;
    obj.style.zIndex = input_zindex;
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function select_set(input_id,input_property,input_value) {
    if (document.getElementById("gameselect_"+input_id)) {
      var obj = document.getElementById("gameselect_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="width")
        obj.style.width = input_value + "px";
      else if (input_property=="height")
        obj.style.height = input_value + "px";
      else if (input_property=="opacity")
        obj.style.opacity = input_value;
      else if (input_property=="background")
        obj.style.background = input_value;
      else if (input_property=="color")
        obj.style.color = input_value;
      else if (input_property=="fontsize")
        obj.style.fontSize = input_value + "px";		    
      else if (input_property=="option") {
       if (obj.options.length>0) {
          while (obj.options.length>0) {
            obj.remove(obj.options.length-1);
          }
        } 
        if (input_value.length>0) {
          for (var i = 0; i < input_value.length; i++) {
            var option = document.createElement("option");
            option.value = input_value[i][0];
            option.text = input_value[i][1];
            obj.appendChild(option);
          }
        }
      }
      else if (input_property=="value")
        obj.value = input_value;      
      else if (input_property=="zindex")
        obj.style.zIndex = input_value;
      else if (input_property=="display"){ 
        if (input_value==1)
          obj.style.display = "block";    
        else if (input_value==0)
          obj.style.display = "none";
      }
      else if (input_property=="position")
        obj.style.position = input_value;		    
      else if (input_property=="disabled")
        obj.disabled = input_value;
      else if (input_property=="draggable")
        obj.draggable = input_value;
      else if (input_property=="style")
        obj.style = input_value;	    
    }
  }

  function select_get(input_id,input_property){
    if (document.getElementById("gameselect_"+input_id)) {
      var obj = document.getElementById("gameselect_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="height")
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=="background") {
       var rgb = obj.style.background;
       var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
       var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
       var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
       var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
       return "#"+r+g+b;
      }
      else if (input_property=="color") {
       var rgb = obj.style.color;
       var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
       var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
       var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
       var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
       return "#"+r+g+b;
      }
      else if (input_property=="fontsize")
        return Number(obj.style.fontSize.replace(/px/ig,""));  	    	    
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
      else if (input_property=="selectedValue")
        return obj.options[obj.selectedIndex].value;
      else if (input_property=="selectedText")
        return obj.options[obj.selectedIndex].text;
      else if (input_property=="selectedIndex")
        return Number(obj.selectedIndex);
      else if (input_property=="length")
        return Number(obj.length);
      else if (input_property=="zindex")
        return obj.style.zIndex;
      else if (input_property=="display")
        return obj.style.display;
      else if (input_property=="position")
        return obj.style.position;		    
      else if (input_property=="disabled")
        return obj.disabled;   
      else if (input_property=="draggable")
        return obj.draggable;	
      else if (input_property=='id')
        return "gameselect_"+input_id;
    }
    else
      return "";
  }

  function select_delete(input_id) {
    if (document.getElementById("gameselect_"+input_id))
      document.getElementById("gameselect_"+input_id).parentNode.removeChild(document.getElementById("gameselect_"+input_id));
  }

  function select_onclick_get(input_id) {
    if (onclickid==("gameselect_"+input_id))
    {
      onclickid="";
      return 1;
    }
    else if (onclickid.indexOf("gametable_td_")==0){     
      if (document.getElementById(onclickid).hasChildNodes()) {
        if (document.getElementById(onclickid).firstChild.id==("gameselect_"+input_id)) {
          onclickid="";
          return 1;
        } else 
          return 0;
      } else 
        return 0;
    }
    else
      return 0;
  }

  function range_create(input_id,input_width,input_height,input_left,input_top,input_opacity,input_max,input_min,input_step,input_value,input_zindex,input_display) {
    if (document.getElementById("gamerange_"+input_id)) 
      document.getElementById("gamerange_"+input_id).parentNode.removeChild(document.getElementById("gamerange_"+input_id));
    var obj = document.createElement('input');
    obj.type="range";
    obj.id = "gamerange_"+input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.width = input_width + 'px';
    obj.style.height = input_height + 'px';
    obj.style.opacity = input_opacity;
	obj.max = input_max;
	obj.min = input_min;
	obj.step = input_step;
    obj.value = input_value;
    obj.style.zIndex = input_zindex;
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    //obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function range_set(input_id,input_property,input_value) {
    if (document.getElementById("gamerange_"+input_id)) {
	  var obj = document.getElementById("gamerange_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="width")
        obj.style.width = input_value + "px";
      else if (input_property=="height")
        obj.style.height = input_value + "px";
      else if (input_property=="opacity")
        obj.style.opacity = input_value;
      else if (input_property=="max")
        obj.max = input_value;      
      else if (input_property=="min")
        obj.min = input_value;      
      else if (input_property=="step")
        obj.step = input_value;      
      else if (input_property=="value")
        obj.value = input_value;      
      else if (input_property=="zindex")
        obj.style.zIndex = input_value;
      else if (input_property=="display"){ 
        if (input_value==1)
          obj.style.display = "block";    
        else if (input_value==0)
          obj.style.display = "none";
      }
      else if (input_property=="position")
        obj.style.position = input_value;		    
      else if (input_property=="disabled")
        obj.disabled = input_value;
      else if (input_property=="draggable")
        obj.draggable = input_value;	
      else if (input_property=="style")
        obj.style = input_value;	    
    }
  }

  function range_get(input_id,input_property){
    if (document.getElementById("gamerange_"+input_id)) {
	  var obj = document.getElementById("gamerange_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="height")
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
      else if (input_property=="max")
        return obj.max;
      else if (input_property=="min")
        return obj.min;
      else if (input_property=="step")
        return obj.step;
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="zindex")
        return obj.style.zIndex;
      else if (input_property=="display")
        return obj.style.display;
      else if (input_property=="position")
        return obj.style.position;		    
      else if (input_property=="disabled")
        return obj.disabled;
      else if (input_property=="draggable")
        return obj.draggable;
      else if (input_property=='id')
        return "gamerange_"+input_id;	    
    }
    else
      return "";
  }

  function range_delete(input_id) {
    if (document.getElementById("gamerange_"+input_id))
      document.getElementById("gamerange_"+input_id).parentNode.removeChild(document.getElementById("gamerange_"+input_id));
  }

  function range_onclick_get(input_id) {
    if (onclickid==("gamerange_"+input_id))
    {
      onclickid="";
      return 1;
    }
    else if (onclickid.indexOf("gametable_td_")==0){     
      if (document.getElementById(onclickid).hasChildNodes()) {
        if (document.getElementById(onclickid).firstChild.id==("gamerange_"+input_id)) {
          onclickid="";
          return 1;
        } else 
          return 0;
      } else 
        return 0;
    }
    else
      return 0;
  }        

  function text_create(input_id,input_width,input_height,input_left,input_top,input_background,input_color,input_fontSize,input_opacity,input_value,input_zindex,input_display) {
    if (document.getElementById("gametext_"+input_id)) 
      document.getElementById("gametext_"+input_id).parentNode.removeChild(document.getElementById("gametext_"+input_id));
    var obj = document.createElement('input');
    obj.type="text";
    obj.id = "gametext_"+input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.width = input_width + 'px';
    obj.style.height = input_height + 'px';
    obj.style.background = input_background;
    obj.style.color = input_color;
    obj.style.fontSize = input_fontSize + "px";
    obj.style.opacity = input_opacity;
    obj.value = input_value;
    obj.style.zIndex = input_zindex;
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    //obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
    obj.value = input_value;
	  console.log(input_value);
  }

  function text_set(input_id,input_property,input_value) {
    if (document.getElementById("gametext_"+input_id)) {
	  var obj = document.getElementById("gametext_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="width")
        obj.style.width = input_value + "px";
      else if (input_property=="height")
        obj.style.height = input_value + "px";
      else if (input_property=="background")
        obj.style.background = input_value;
      else if (input_property=="color")
        obj.style.color = input_value;
      else if (input_property=="fontsize")
        obj.style.fontSize = input_value + "px";	    
      else if (input_property=="opacity")
        obj.style.opacity = input_value;    
      else if (input_property=="value")
        obj.value = input_value;      
      else if (input_property=="zindex")
        obj.style.zIndex = input_value;
      else if (input_property=="display"){ 
        if (input_value==1)
          obj.style.display = "block";    
        else if (input_value==0)
          obj.style.display = "none";
      }
      else if (input_property=="position")
        obj.style.position = input_value;		    
      else if (input_property=="disabled")
        obj.disabled = input_value;
      else if (input_property=="draggable")
        obj.draggable = input_value;
      else if (input_property=="style")
        obj.style = input_value;	    
    }
  }

  function text_get(input_id,input_property){
    if (document.getElementById("gametext_"+input_id)) {
	  var obj = document.getElementById("gametext_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="height")
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=="background") {
       var rgb = obj.style.background;
       var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
       var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
       var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
       var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
       return "#"+r+g+b;
      }
      else if (input_property=="color") {
       var rgb = obj.style.color;
       var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
       var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
       var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
       var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
       return "#"+r+g+b;
      }
      else if (input_property=="fontsize")
        return Number(obj.style.fontSize.replace(/px/ig,""));  	    
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="zindex")
        return obj.style.zIndex;
      else if (input_property=="display")
        return obj.style.display;
      else if (input_property=="position")
        return obj.style.position;		    
      else if (input_property=="disabled")
        return obj.disabled;
      else if (input_property=="draggable")
        return obj.draggable;
      else if (input_property=='id')
        return "gametext_"+input_id;	    
    }
    else
      return "";
  }

  function text_delete(input_id) {
    if (document.getElementById("gametext_"+input_id))
      document.getElementById("gametext_"+input_id).parentNode.removeChild(document.getElementById("gametext_"+input_id));
  }

  function text_onclick_get(input_id) {
    if (onclickid==("gametext_"+input_id))
    {
      onclickid="";
      return 1;
    }
    else if (onclickid.indexOf("gametable_td_")==0){     
      if (document.getElementById(onclickid).hasChildNodes()) {
        if (document.getElementById(onclickid).firstChild.id==("gametext_"+input_id)) {
          onclickid="";
          return 1;
        } else 
          return 0;
      } else 
        return 0;
    }
    else
      return 0;
  } 
	
  function div_create(input_id,input_width,input_height,input_left,input_top,input_borderstyle,input_borderwidth,input_bordercolor,input_background,input_color,input_fontSize,input_opacity,input_innerHTML,input_zindex,input_display) {
    if (document.getElementById("gamediv_"+input_id)) 
      document.getElementById("gamediv_"+input_id).parentNode.removeChild(document.getElementById("gamediv_"+input_id));
    var obj = document.createElement('div');
    obj.id = "gamediv_"+input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.width = input_width + 'px';
    obj.style.height = input_height + 'px';
    obj.style.border = input_borderwidth +'px ' + input_borderstyle + ' ' + input_bordercolor;
    obj.style.background = input_background;
    obj.style.color = input_color;
    obj.style.fontSize = input_fontSize + "px";
    obj.style.opacity = input_opacity;
    obj.innerHTML = input_innerHTML;
    obj.style.zIndex = input_zindex;
    obj.style.wordWrap = "break-word";
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('div/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function div_set(input_id,input_property,input_value) {
    if (document.getElementById("gamediv_"+input_id)) {
	  var obj = document.getElementById("gamediv_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="width")
        obj.style.width = input_value + "px";
      else if (input_property=="height")
        obj.style.height = input_value + "px";
      else if (input_property=="borderstyle")
        obj.style.borderStyle = input_value;
      else if (input_property=="borderwidth")
        obj.style.borderWidth = input_value + "px";
      else if (input_property=="bordercolor")
        obj.style.borderColor = input_value; 
      else if (input_property=="borderradius") {
	if (input_value.toString().toLowerCase().indexOf("px")==-1)
          obj.style.borderRadius = input_value + "px";
	else
	  obj.style.borderRadius = input_value;
      }	    
      else if (input_property=="background")
        obj.style.background = input_value;
      else if (input_property=="color")
        obj.style.color = input_value;
      else if (input_property=="fontsize")
        obj.style.fontSize = input_value + "px";	    
      else if (input_property=="opacity")
        obj.style.opacity = input_value;    
      else if (input_property=="innerHTML")
        obj.innerHTML = input_value;      
      else if (input_property=="zindex")
        obj.style.zIndex = input_value;
      else if (input_property=="display"){ 
        if (input_value==1)
          obj.style.display = "block";    
        else if (input_value==0)
          obj.style.display = "none";
      }
      else if (input_property=="position")
        obj.style.position = input_value;		    
      else if (input_property=="disabled")
        obj.disabled = input_value;
      else if (input_property=="draggable")
        obj.draggable = input_value;
      else if (input_property=="style")
        obj.style = input_value;	    
    }
  }

  function div_get(input_id,input_property){
    if (document.getElementById("gamediv_"+input_id)) {
	  var obj = document.getElementById("gamediv_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="height")
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=="borderstyle")
        return obj.style.borderStyle;
      else if (input_property=="borderwidth")
        return Number(obj.style.borderWidth.replace(/px/ig,""));
      else if (input_property=="bordercolor")
       return obj.style.borderColor;	    
      else if (input_property=="background")
        return obj.style.background;
      else if (input_property=="color")
        return obj.style.color;
      else if (input_property=="fontsize")
        return Number(obj.style.fontSize.replace(/px/ig,""));  	    
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
      else if (input_property=="innerHTML")
        return obj.innerHTML;
      else if (input_property=="zindex")
        return obj.style.zIndex;
      else if (input_property=="display")
        return obj.style.display;
      else if (input_property=="position")
        return obj.style.position;		    
      else if (input_property=="disabled")
        return obj.disabled;
      else if (input_property=="draggable")
        return obj.draggable;
      else if (input_property=='id')
        return "gamediv_"+input_id;	    
    }
    else
      return "";
  }

  function div_delete(input_id) {
    if (document.getElementById("gamediv_"+input_id))
      document.getElementById("gamediv_"+input_id).parentNode.removeChild(document.getElementById("gamediv_"+input_id));
  }
	

function HextoRgb(color) {
  if (!color) return null;
  if (color.indexOf("'#")==0&&color.length==9) {
    color = color.substring(1,color.length-1);
    var color_rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return "'rgb("+parseInt(color_rgb[1], 16)+", "+parseInt(color_rgb[2], 16)+", "+parseInt(color_rgb[3], 16)+")'";
  }
  else  if (color.indexOf("#")==0&&color.length==7) {
    var color_rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return "rgb("+parseInt(color_rgb[1], 16)+", "+parseInt(color_rgb[2], 16)+", "+parseInt(color_rgb[3], 16)+")";
  }  
  else  if (color.length==6) {
    color = "#"+ color;
    var color_rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return "rgb("+parseInt(color_rgb[1], 16)+", "+parseInt(color_rgb[2], 16)+", "+parseInt(color_rgb[3], 16)+")";
  }else
    return color;
} 	
  
  function body_set(input_property,input_value) {
    if (input_property=="backgroundColor")
      document.body.style.backgroundColor = input_value;
    else if (input_property=="backgroundImage") 
      document.body.style.backgroundImage = "url('"+input_value+"')";
    else if (input_property=="overflow") 
      document.body.style.overflow = input_value;
    else if (input_property=="style")
      document.body.style = input_value;
    else if (input_property=="fullscreen") {
      if (input_value==true)
        window.parent.document.getElementById("demo-area").webkitRequestFullscreen();
      else
	window.parent.document.webkitExitFullscreen();	    
    }
    else if (input_property=="droppable") {
      if (input_value==1) {
        document.body.setAttribute("ondrop","javascript:var obj=document.getElementById(event.dataTransfer.getData('text/plain'));obj.style.position='static';obj.style.left=null;obj.style.top=null;event.preventDefault();if(event.target.tagName!='BODY') {return false;} else {event.target.appendChild(obj);}");
        document.body.setAttribute("ondragover","javascript:event.preventDefault();"); 
      } else {
        document.body.setAttribute("ondrop","");
        document.body.setAttribute("ondragover","");  
      }
    }
  }  
	
  function position_distance(input_x0,input_y0,input_x1,input_y1) {
      return Math.sqrt(Math.pow((input_x1-input_x0), 2) + Math.pow((input_y1-input_y0), 2));
  } 	
	
  function position_angle(input_x0,input_y0,input_x1,input_y1) {
      return (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
  } 	
  
  window.table_create = table_create;
  window.table_set = table_set;
  window.table_get = table_get;
  window.table_clear = table_clear;
  window.table_change_colsrows = table_change_colsrows;	
  window.table_td_set = table_td_set;
  window.table_border_set = table_border_set;
  window.table_td_border_set = table_td_border_set;
  window.table_td_get = table_td_get;
  window.table_td_insert_img = table_td_insert_img;
  window.table_td_img_move = table_td_img_move;
  window.table_td_canvas_move = table_td_canvas_move;
  window.table_td_img_get = table_td_img_get;
  window.table_td_insert_text = table_td_insert_text;
  window.table_td_clear = table_td_clear;
  window.table_delete = table_delete;
  window.music_create = music_create;
  window.music_delete = music_delete;
  window.canvas_create =  canvas_create;
  window.canvas_set = canvas_set;
  window.canvas_get = canvas_get;	
  window.canvas_line = canvas_line;
  window.canvas_rect = canvas_rect;
  window.canvas_arc = canvas_arc;
  window.canvas_img_url = canvas_img_url;
  window.canvas_img = canvas_img;
  window.canvas_text = canvas_text;
  window.canvas_quadraticcurve = canvas_quadraticcurve;
  window.canvas_beziercurve = canvas_beziercurve;
  window.canvas_clearrect = canvas_clearrect;
  window.canvas_clear = canvas_clear;
  window.canvas_delete = canvas_delete;
  window.canvas_onclick_get = canvas_onclick_get;
  window.canvas_getcolor = canvas_getcolor;
  window.image_create = image_create;
  window.image_set = image_set;
  window.image_get = image_get;
  window.image_delete = image_delete;
  window.elements_collision = elements_collision;
  window.elements_collision_color = elements_collision_color;
  window.image_collision = image_collision;
  window.image_boundary = image_boundary;
  window.image_boundary_collision = image_boundary_collision;
  window.image_sys_get = image_sys_get;
  window.onclickid_set = onclickid_set;
  window.image_onclickid_clear = image_onclickid_clear;
  window.image_onclick_get = image_onclick_get;
  window.image_Natural_get = image_Natural_get;
  window.mouse_coordinate_get = mouse_coordinate_get;
  window.mouse_coordinate_get_start = mouse_coordinate_get_start;
  window.text_to_number = text_to_number;
  window.button_create = button_create;
  window.button_set = button_set;
  window.button_get = button_get;
  window.button_delete = button_delete;
  window.button_onclick_get = button_onclick_get;
  window.colorpicker_create = colorpicker_create;
  window.colorpicker_set = colorpicker_set;
  window.colorpicker_get = colorpicker_get;
  window.colorpicker_delete = colorpicker_delete;
  window.colorpicker_onclick_get = colorpicker_onclick_get;
  window.select_create = select_create;
  window.select_set = select_set;
  window.select_get = select_get;
  window.select_delete = select_delete;
  window.select_onclick_get = select_onclick_get;
  window.range_create = range_create;
  window.range_set = range_set;
  window.range_get = range_get;
  window.range_delete = range_delete;
  window.range_onclick_get = range_onclick_get;	
  window.text_create = text_create;
  window.text_set = text_set;
  window.text_get = text_get;
  window.text_delete = text_delete;
  window.text_onclick_get = text_onclick_get;
  window.div_create = div_create;
  window.div_set = div_set;
  window.div_get = div_get;
  window.div_delete = div_delete;	
  window.HextoRgb = HextoRgb;
  window.body_set = body_set;
  window.position_distance = position_distance;
  window.position_angle = position_angle;	
  
}(window, window.document));
