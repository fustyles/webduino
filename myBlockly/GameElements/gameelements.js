  // Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
  
  var screen_width = 0;
  var screen_height = 0;
  var onclickid = "";
  var onclicktime = 200;
  var onclicktimerid;
  var mouse_x,mouse_y;
  var ImageWidth,ImageHeight;
                      
  function table_create(input_id,input_width,input_height,input_left,input_top,input_trcount,input_tdcount,input_borderstyle,input_borderwidth,input_bordercolor,input_bgcolor,input_zindex,input_display) {
    if (document.getElementById("gametable_"+input_id)) 
      document.getElementById("gametable_"+input_id).parentNode.removeChild(document.getElementById("gametable_"+input_id));
    if ((input_trcount>=1)&&(input_tdcount>=1)){
      var tbl = document.createElement('table');
      tbl.id = "gametable_"+input_id;
      tbl.style.position = "absolute";
      tbl.style.left = input_left + 'px';
      tbl.style.top = input_top + 'px';
      tbl.style.zIndex = input_zindex;
      tbl.style.border = input_borderwidth +'px ' + input_borderstyle + ' ' + input_bordercolor;
      if (input_display==0)
        tbl.style.display = "none";
      else
        tbl.style.display = "block";
      var tr,td;
      for (var i=0;i<input_trcount;i++){
        tr = tbl.insertRow(i);
        for (var j=0;j<input_tdcount;j++){
          td = tr.insertCell(j);
          td.id = "gametable_td_"+input_id+"_"+i+'_'+j;
          td.style.textAlign="center";
          td.style.verticalAlign = "middle";
          td.style.background = input_bgcolor;
          td.style.width = input_width + 'px';
          td.style.height = input_height + 'px';
          td.setAttribute("onclick", "javascript:image_onclickid_set(this);");
          td.setAttribute("ondrop","javascript:var obj=document.getElementById(event.dataTransfer.getData('text/plain'));obj.style.position='static';obj.style.left=null;obj.style.top=null;event.preventDefault();event.target.appendChild(obj);");
          td.setAttribute("ondragover","javascript:event.preventDefault();"); 
        }
       }
      document.body.appendChild(tbl);
    }
  }

  function table_set(input_id,input_property,input_value){
    if (document.getElementById("gametable_"+input_id)) {
      if (input_property=="left")
        document.getElementById("gametable_"+input_id).style.left = input_value + "px";
      else if (input_property=="top")
        document.getElementById("gametable_"+input_id).style.top = input_value + "px";
      else if (input_property=="borderstyle")
        document.getElementById("gametable_"+input_id).style.borderStyle = input_value;
      else if (input_property=="borderwidth")
        document.getElementById("gametable_"+input_id).style.borderWidth = input_value + "px";
      else if (input_property=="bordercolor")
        document.getElementById("gametable_"+input_id).style.borderColor = input_value;      
      else if (input_property=="zindex")
        document.getElementById("gametable_"+input_id).style.zIndex = input_value;
      else if (input_property=="display"){ 
        if (input_value==1)
        document.getElementById("gametable_"+input_id).style.display = "block";    
        else if (input_value==0)
        document.getElementById("gametable_"+input_id).style.display = "none";
      }
      else if (input_property=="background")
        document.getElementById("gametable_"+input_id).style.background=input_value;
      else if (input_property=="backgroundimage") {
        document.getElementById("gametable_"+input_id).style.background="";
        document.getElementById("gametable_"+input_id).style.backgroundImage="url("+input_value+")";
      }
      else
      {
        var obj = document.getElementById("gametable_"+input_id);
        if (document.getElementById("gametable_"+input_id).rows.length>0){
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
      if (input_property=="rows")
        return document.getElementById("gametable_"+input_id).rows.length;
      else if (input_property=="columns")
        return document.getElementById("gametable_"+input_id).rows[0].cells.length;  
      else if (input_property=="left")
        return Number(document.getElementById("gametable_"+input_id).style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(document.getElementById("gametable_"+input_id).style.top.replace(/px/ig,""));
      else if (input_property=="borderstyle")
        return document.getElementById("gametable_"+input_id).style.borderStyle;
      else if (input_property=="borderwidth")
        return Number(document.getElementById("gametable_"+input_id).style.borderWidth.replace(/px/ig,""));
      else if (input_property=="bordercolor"){
       var rgb = document.getElementById("gametable_"+input_id).style.borderColor;
       var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
       var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
       var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
       var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
       return "#"+r+g+b;
      }
      else if (input_property=="background") {
        var rgb=document.getElementById("gametable_"+input_id).style.background;
        var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
        var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
        var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
        var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
        return "#"+r+g+b;
      }
      else if (input_property=="backgroundimage") {
        var url=document.getElementById("gametable_"+input_id).style.backgroundImage;
        return url.substring(5,url.length-2);
      }
      else if (input_property=="zindex")
        return document.getElementById("gametable_"+input_id).style.zIndex;
      else if (input_property=="display")
        return document.getElementById("gametable_"+input_id).style.display;
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
            return document.getElementById(onclickid).firstChild.id.replace(/gameimg_/ig,"");
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
      if (document.getElementById("gametable_"+input_id).rows.length>0){
        for (var i=0;i<obj.rows.length;i++){
          if (obj.rows[i].cells.length>0){
            for (var j=0;j<obj.rows[i].cells.length;j++)
              obj.rows[i].cells[j].innerHTML = "";
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
      if (input_property=="width")
        return document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x).style.width.replace(/px/ig,"");
      else if (input_property=="height")
        return document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x).style.height.replace(/px/ig,"");        
      else if (input_property=="background"){
       var rgb = document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x).style.background;
       var hexcolor = rgb.replace(/rgb\(/ig,"").replace(/\)/ig,"").replace(/\ /ig,"").split(",");
       var r = Number(hexcolor[0]).toString(16).length==1?"0"+Number(hexcolor[0]).toString(16):Number(hexcolor[0]).toString(16);
       var g = Number(hexcolor[1]).toString(16).length==1?"0"+Number(hexcolor[1]).toString(16):Number(hexcolor[1]).toString(16);
       var b = Number(hexcolor[2]).toString(16).length==1?"0"+Number(hexcolor[2]).toString(16):Number(hexcolor[2]).toString(16);
       return "#"+r+g+b;
      }
      else if (input_property=="innerHTML")
        return document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x).innerHTML;
      else if (input_property=="text") {
        if (document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x).firstChild)
          return document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x).firstChild.innerHTML;
        else
          return document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x).innerHTML;
      }
      else if (input_property=="image"){
        var td = document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x);
        if (td.childNodes.length > 0){
          if (td.childNodes[0].id.indexOf("gameimg_")==0)
            return td.childNodes[0].id.substr(8);
          else
            return "";
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
      var img = document.createElement('img');
      img.id = "gameimg_"+input_img_id;
      img.src = input_url;
      img.style.width = input_width + 'px';
      img.style.height = input_height + 'px';
      img.setAttribute("onclick", "javascript:image_onclickid_set(this);");
      img.draggable="true";
      img.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
      document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x).appendChild(img);
    }
  }

  function table_td_img_move(input_id,input_img_id,input_x,input_y){
    if (document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x)){
      if (document.getElementById("gameimg_"+input_img_id)) {
        var img = document.createElement('img');
        img.src = document.getElementById("gameimg_"+input_img_id).src;
        img.style.width = document.getElementById("gameimg_"+input_img_id).style.width;
        img.style.height = document.getElementById("gameimg_"+input_img_id).style.height;
        img.setAttribute("onclick", "javascript:image_onclickid_set(this);");
        img.draggable="true";
        img.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
        document.getElementById("gameimg_"+input_img_id).parentNode.removeChild(document.getElementById("gameimg_"+input_img_id));
        img.id = "gameimg_"+input_img_id;
        document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x).appendChild(img);
      }
    }
  }

  function table_td_img_get(input_img_id,input_property){
    if (document.getElementById("gameimg_"+input_img_id)){
      if (document.getElementById("gameimg_"+input_img_id).parentNode.id.split("_").length>=5){
        var arr = document.getElementById("gameimg_"+input_img_id).parentNode.id.split("_");
        if (input_property=="column")  
          return Number(arr[arr.length-1]);
        else if (input_property=="row")
          return Number(arr[arr.length-2]);
        else if (input_property=="width")  
          return Number(document.getElementById("gameimg_"+input_img_id).style.width.replace(/px/ig,""));
        else if (input_property=="height")
          return Number(document.getElementById("gameimg_"+input_img_id).style.height.replace(/px/ig,""));
        else if (input_property=='naturalwidth'){
          var naturl = image_Natural_get(document.getElementById("gameimg_"+input_img_id));
          return Number(naturl.width);
        }
        else if (input_property=='naturalheight'){
          var naturl = image_Natural_get(document.getElementById("gameimg_"+input_img_id));
          return Number(naturl.height);
        }      
        else if (input_property=="imageid")
          return "gameimg_"+input_img_id;
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
    var can = document.createElement('canvas');
    can.style.position = "absolute";
    can.id = "gamecanvas_"+input_id;
    can.setAttribute("width",input_width + 'px');
    can.setAttribute("height",input_height + 'px');
    can.style.left = input_left + 'px';
    can.style.top = input_top + 'px';
    can.style.zIndex = input_zindex;
    document.body.appendChild(can);

    var img = document.createElement('img');
    img.id = "gamecanvasimg";
    img.style.display = "none";
    document.body.appendChild(img);
  } 
  
  function canvas_line(input_id,input_linewidth,input_x0,input_y0,input_x1,input_y1,input_color) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.strokeStyle = input_color;
      context.lineWidth = input_linewidth;
      context.beginPath();
      context.moveTo(input_x0,input_y0);
      context.lineTo(input_x1,input_y1);
      context.stroke();
    }
  } 
  
  function canvas_rect(input_id,input_linewidth,input_x0,input_y0,input_width,input_height,input_fill,input_color) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.strokeStyle = input_color;
      context.fillStyle = input_color;
      context.lineWidth = input_linewidth;
      context.beginPath();
      context.rect(input_x0,input_y0,input_width,input_height);
      if (input_fill==0)
        context.stroke();
      else
        context.fill();
    }
  } 
  
  function canvas_arc(input_id,input_linewidth,input_x0,input_y0,input_r,input_sAngle,input_eAngle,input_counterclockwise,input_fill,input_color) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.strokeStyle = input_color;
      context.fillStyle = input_color;
      context.lineWidth = input_linewidth;
      context.beginPath();
      context.arc(input_x0,input_y0,input_r,input_sAngle,input_eAngle,input_counterclockwise);
      if (input_fill==0)
        context.stroke();
      else
        context.fill();
    }
  } 
  
  function canvas_img(input_id,input_url,input_sx,input_sy,input_swidth,input_sheight,input_x0,input_y0,input_width,input_height) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var img = document.getElementById("gamecanvasimg");
      img.src = input_url;
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      if ((input_swidth>0)&&(input_sheight>0))
        context.drawImage(img,input_sx,input_sy,input_swidth,input_sheight,input_x0,input_y0,input_width,input_height);
      else if (((input_swidth==0)||(input_sheight==0))&&((input_width>0)&&(input_height>0)))
        context.drawImage(img,input_x0,input_y0,input_width,input_height);
      else
        context.drawImage(img,input_x0,input_y0);
    }
  } 
  
  function canvas_text(input_id,input_text,input_x0,input_y0,input_fontname,input_fontsize,input_textalign,input_fill,input_color) {
    if (document.getElementById("gamecanvas_"+input_id)) {
      var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
      context.strokeStyle = input_color;
      context.fillStyle = input_color;
      context.font = input_fontsize + 'px ' + input_fontname;
      context.textAlign = input_textalign;
      if (input_fill==0)
        context.strokeText(input_text,input_x0,input_y0);
      else
        context.fillText(input_text,input_x0,input_y0);
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
  
  function image_create(input_id,input_url,input_width,input_height,input_left,input_top,input_zindex,input_display) {
    if (document.getElementById("gameimg_"+input_id))
      document.getElementById("gameimg_"+input_id).parentNode.removeChild(document.getElementById("gameimg_"+input_id));
    var img = document.createElement('img');
    img.style.position = "absolute";
    img.id = "gameimg_"+input_id;
    img.src = input_url;
    img.style.width = input_width + 'px';
    img.style.height = input_height + 'px';
    img.style.left = input_left + 'px';
    img.style.top = input_top + 'px';
    img.style.zIndex = input_zindex;
    if (input_display==0)
      img.style.display = "none";
    else
      img.style.display = "block";
    img.setAttribute("onclick", "javascript:image_onclickid_set(this);");
    img.draggable="true";
    img.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(img);
  }
  
  function image_set(input_id,input_property,input_value) {
    if (document.getElementById("gameimg_"+input_id))
    {
      if (input_property=='url')
        document.getElementById("gameimg_"+input_id).src = input_value;
      else if (input_property=='width')
        document.getElementById("gameimg_"+input_id).style.width = input_value + 'px';
      else if (input_property=='height')
        document.getElementById("gameimg_"+input_id).style.height = input_value + 'px';
      else if (input_property=='left')
        document.getElementById("gameimg_"+input_id).style.left = input_value + 'px';
      else if (input_property=='top')
        document.getElementById("gameimg_"+input_id).style.top = input_value + 'px';
      else if (input_property=='zindex')
        document.getElementById("gameimg_"+input_id).style.zIndex = input_value;
      else if (input_property=='display')
      {
        if (input_value==0)
          document.getElementById("gameimg_"+input_id).style.display = "none";
        else
          document.getElementById("gameimg_"+input_id).style.display = "block";
      }
      else if (input_property=='opacity')
          document.getElementById("gameimg_"+input_id).style.opacity = input_value;
      else if (input_property=='rotate')
          document.getElementById("gameimg_"+input_id).style.transform = "rotate("+input_value+"deg)";
      else if (input_property=='rotateX')
          document.getElementById("gameimg_"+input_id).style.transform = "rotateX("+input_value+"deg)";
      else if (input_property=='rotateY')
          document.getElementById("gameimg_"+input_id).style.transform = "rotateY("+input_value+"deg)";
      else if (input_property=='rotateZ')
          document.getElementById("gameimg_"+input_id).style.transform = "rotateZ("+input_value+"deg)";
      else if (input_property=='moveX')
          document.getElementById("gameimg_"+input_id).style.left = (Number(document.getElementById("gameimg_"+input_id).style.left.replace(/px/ig,""))+Number(input_value))+"px";
      else if (input_property=='moveY')
          document.getElementById("gameimg_"+input_id).style.top = (Number(document.getElementById("gameimg_"+input_id).style.top.replace(/px/ig,""))+Number(input_value))+"px";    
    }
  }    
  
  function image_get(input_id,input_property) {
    if (input_property=='exist')
    {
      if (document.getElementById("gameimg_"+input_id))
        return 1;
      else
        return 0;
    }   
    if (document.getElementById("gameimg_"+input_id))
    {
      if (input_property=='url')
        return document.getElementById("gameimg_"+input_id).src;
      else if (input_property=='width')
        return Number(document.getElementById("gameimg_"+input_id).style.width.replace(/px/ig,""));
      else if (input_property=='height')
        return Number(document.getElementById("gameimg_"+input_id).style.height.replace(/px/ig,""));
      else if (input_property=='naturalwidth'){
        var naturl = image_Natural_get(document.getElementById("gameimg_"+input_id));
        return Number(naturl.width);
      }
      else if (input_property=='naturalheight'){
        var naturl = image_Natural_get(document.getElementById("gameimg_"+input_id));
        return Number(naturl.height);
      }
      else if (input_property=='left')
        return Number(document.getElementById("gameimg_"+input_id).style.left.replace(/px/ig,""));
      else if (input_property=='top')
        return Number(document.getElementById("gameimg_"+input_id).style.top.replace(/px/ig,""));
      else if (input_property=='zindex')
        return Number(document.getElementById("gameimg_"+input_id).style.zIndex);
      else if (input_property=='display')
      {
        if (document.getElementById("gameimg_"+input_id).style.display=="block")
          return 1;
        else
          return 0;  
      }
      else if (input_property=='opacity')
        return document.getElementById("gameimg_"+input_id).style.opacity;
      else if (input_property=='rotate')
        return document.getElementById("gameimg_"+input_id).style.transform;
      else if (input_property=='rotateX') {
        if (document.getElementById("gameimg_"+input_id).style.transform.indexOf("rotateX")==0)
          return Number(document.getElementById("gameimg_"+input_id).style.transform.replace(/[^0-9]/ig,""));
        else
          return "";
      }
      else if (input_property=='rotateY') {
        if (document.getElementById("gameimg_"+input_id).style.transform.indexOf("rotateY")==0)
          return Number(document.getElementById("gameimg_"+input_id).style.transform.replace(/[^0-9]/ig,""));
        else
          return "";
      }
      else if (input_property=='rotateZ') {
        if (document.getElementById("gameimg_"+input_id).style.transform.indexOf("rotateZ")==0)
          return Number(document.getElementById("gameimg_"+input_id).style.transform.replace(/[^0-9]/ig,""));
        else
          return "";
      }
      else if (input_property=='id')
        return "gameimg_"+input_id;
    }
    else
      return "";    
  }  
  
  function image_delete(input_id) {
    if (document.getElementById("gameimg_"+input_id))
      document.getElementById("gameimg_"+input_id).parentNode.removeChild(document.getElementById("gameimg_"+input_id));
  }   
  
  function image_collision(input_id1,input_id2) {
    if ((document.getElementById("gameimg_"+input_id1))&&(document.getElementById("gameimg_"+input_id2)))
    {
      var img1 = document.getElementById("gameimg_"+input_id1).style;
      var img2 = document.getElementById("gameimg_"+input_id2).style;
      var x1 = Number(img1.left.replace(/px/ig,""));
      var x1_w = Number(img1.left.replace(/px/ig,"")) + Number(img1.width.replace(/px/ig,""));
      var y1 = Number(img1.top.replace(/px/ig,""));
      var y1_h = Number(img1.top.replace(/px/ig,"")) + Number(img1.height.replace(/px/ig,""));
      var x2 = Number(img2.left.replace(/px/ig,""));
      var x2_w = Number(img2.left.replace(/px/ig,"")) + Number(img2.width.replace(/px/ig,""));
      var y2 = Number(img2.top.replace(/px/ig,""));
      var y2_h = Number(img2.top.replace(/px/ig,"")) + Number(img2.height.replace(/px/ig,""));
    
      if ((((x2>=x1)&&(x2<=x1_w))&&((y2>=y1)&&(y2<=y1_h)))||(((x2>=x1)&&(x2<=x1_w))&&((y2_h>=y1)&&(y2_h<=y1_h)))||(((x2_w>=x1)&&(x2_w<=x1_w))&&((y2>=y1)&&(y2<=y1_h)))||(((x2_w>=x1)&&(x2_w<=x1_w))&&((y2_h>=y1)&&(y2_h<=y1_h))))
        return 1;
      else if ((((x1>=x2)&&(x1<=x2_w))&&((y1>=y2)&&(y1<=y2_h)))||(((x1>=x2)&&(x1<=x2_w))&&((y1_h>=y2)&&(y1_h<=y2_h)))||(((x1_w>=x2)&&(x1_w<=x2_w))&&((y1>=y2)&&(y1<=y2_h)))||(((x1_w>=x2)&&(x1_w<=x2_w))&&((y1_h>=y2)&&(y1_h<=y2_h))))
        return 1;
      else
        return 0;  
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
      var left = Number(document.getElementById("gameimg_"+input_id).style.left.replace(/px/ig,""));
      var width = Number(document.getElementById("gameimg_"+input_id).style.width.replace(/px/ig,""));
      var top = Number(document.getElementById("gameimg_"+input_id).style.top.replace(/px/ig,""));
      var height = Number(document.getElementById("gameimg_"+input_id).style.height.replace(/px/ig,""));
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
  
  function image_onclickid_set(obj) {
    clearTimeout(onclicktimerid);  
    onclickid=obj.id;
    onclicktimerid=setTimeout('image_onclickid_clear()',onclicktime);
  }
  
  function image_onclickid_clear() {
    onclickid="";
  }
  
  function image_onclick_get(input_id) {
    if (onclickid==("gameimg_"+input_id))
    {
      onclickid="";
      return 1;
    }
    else if (onclickid.indexOf("gametable_td_")==0){     
      if (document.getElementById(onclickid).hasChildNodes()) {
        if (document.getElementById(onclickid).firstChild.id==("gameimg_"+input_id)) {
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
  
  function mouse_coordinate_get(input_property) {
    if (!document.onmousemove)
    {
      document.onmousemove = function(e){  
        e=e||window.event;
        mouse_x = e.pageX;
        mouse_y = e.pageY;
      }
    }
    if (input_property=="x")
      return mouse_x;
    else if (input_property=="y")
      return mouse_y;
  } 
  
  function text_to_number(input_text) {
    return Number(input_text);
  } 

  function button_create(input_id,input_width,input_height,input_left,input_top,input_opacity,input_value,input_zindex,input_display) {
    if (document.getElementById("gamebutton_"+input_id)) 
      document.getElementById("gamebutton_"+input_id).parentNode.removeChild(document.getElementById("gamebutton_"+input_id));
    var btn = document.createElement('input');
    btn.type="button";
    btn.id = "gamebutton_"+input_id;
    btn.style.position = "absolute";
    btn.style.left = input_left + 'px';
    btn.style.top = input_top + 'px';
    btn.style.width = input_width + 'px';
    btn.style.height = input_height + 'px';
    btn.style.opacity = input_opacity;
    btn.value = input_value;
    btn.style.zIndex = input_zindex;
    if (input_display==0)
      btn.style.display = "none";
    else
      btn.style.display = "block";
    document.body.appendChild(btn);
  }

  function button_set(input_id,input_property,input_value) {
    if (document.getElementById("gamebutton_"+input_id)) {
      if (input_property=="left")
        document.getElementById("gamebutton_"+input_id).style.left = input_value + "px";
      else if (input_property=="top")
        document.getElementById("gamebutton_"+input_id).style.top = input_value + "px";
      else if (input_property=="width")
        document.getElementById("gamebutton_"+input_id).style.width = input_value + "px";
      else if (input_property=="height")
        document.getElementById("gamebutton_"+input_id).style.height = input_value + "px";
      else if (input_property=="opacity")
        document.getElementById("gamebutton_"+input_id).style.opacity = input_value;
      else if (input_property=="value")
        document.getElementById("gamebutton_"+input_id).value = input_value;      
      else if (input_property=="zindex")
        document.getElementById("gamebutton_"+input_id).style.zIndex = input_value;
      else if (input_property=="display"){ 
        if (input_value==1)
          document.getElementById("gamebutton_"+input_id).style.display = "block";    
        else if (input_value==0)
          document.getElementById("gamebutton_"+input_id).style.display = "none";
      }
    }
  }

  
  function button_get(input_id,input_property){
    if (document.getElementById("gamebutton_"+input_id)) {
      if (input_property=="left")
        return Number(document.getElementById("gamebutton_"+input_id).style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(document.getElementById("gamebutton_"+input_id).style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(document.getElementById("gamebutton_"+input_id).style.width.replace(/px/ig,""));
      else if (input_property=="height")
        return Number(document.getElementById("gamebutton_"+input_id).style.height.replace(/px/ig,""));
      else if (input_property=="value")
        return document.getElementById("gamebutton_"+input_id).value;
      else if (input_property=="zindex")
        return document.getElementById("gamebutton_"+input_id).style.zIndex;
      else if (input_property=="display")
        return document.getElementById("gamebutton_"+input_id).style.display;
    }
    else
      return "";
  }

  function button_delete(input_id) {
    if (document.getElementById("gamebutton_"+input_id))
      document.getElementById("gamebutton_"+input_id).parentNode.removeChild(document.getElementById("gamebutton_"+input_id));
  }
