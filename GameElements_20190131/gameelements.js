// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {
  
  'use strict';
  
  var screen_width = 0;
  var screen_height = 0;
  var onclickid = "";
  var onclicktime = 200;
  var onclicktimerid;
  var mouse_pageX,mouse_pageY,mouse_offsetX,mouse_offsetY,mouse_clientX,mouse_clientY,mouse_screenX,mouse_screenY;
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
	  obj.style.borderCollapse = "collapse";
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
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
  
function table_insert_row(input_id, input_cmd, input_row, input_value) {
    if (document.getElementById("gametable_" + input_id)) {
        var obj = document.getElementById("gametable_" + input_id);
		var data = input_value.split("|");
        if (input_cmd == "insertfirst") {
            var row = obj.insertRow(0);
            for (var j = 0; j < data.length; j++) {
                let col = row.insertCell(j);
				col.innerText = data[j];
				col.style.textAlign = "center";
				col.style.verticalAlign = "middle";
				col.style.background = row.cells[0].style.background;
				col.style.width = row.cells[0].style.width;
				col.style.height = row.cells[0].style.height;
				col.setAttribute("onclick", "javascript:onclickid_set(this);");
				col.setAttribute("ondragover", "javascript:event.preventDefault();");
            }
        } else if (input_cmd == "insertone") {
			var row = obj.insertRow(input_row);
            for (var j = 0; j < data.length; j++) {
                let col = row.insertCell(j);
				col.innerText = data[j];
				col.style.textAlign = "center";
				col.style.verticalAlign = "middle";
				col.style.background = row.cells[0].style.background;
				col.style.width = row.cells[0].style.width;
				col.style.height = row.cells[0].style.height;
				col.setAttribute("onclick", "javascript:onclickid_set(this);");
				col.setAttribute("ondragover", "javascript:event.preventDefault();");
            }		
        } else if (input_cmd == "insertlast") {
			var row = obj.insertRow(-1);
            for (var j = 0; j < data.length; j++) {
                let col = row.insertCell(j);
				col.innerText = data[j];
				col.style.textAlign = "center";
				col.style.verticalAlign = "middle";
				col.style.background = row.cells[0].style.background;
				col.style.width = row.cells[0].style.width;
				col.style.height = row.cells[0].style.height;
				col.setAttribute("onclick", "javascript:onclickid_set(this);");
				col.setAttribute("ondragover", "javascript:event.preventDefault();");
            }
        } else if (input_cmd == "update") {
			var row = obj.rows[input_row];
            for (var j = 0; j < data.length; j++) {
                row.cells[j].innerText = data[j];
				row.cells[j].style.textAlign = "center";
				row.cells[j].style.verticalAlign = "middle";
				row.cells[j].style.background = row.cells[0].style.background;
				row.cells[j].style.width = row.cells[0].style.width;
				row.cells[j].style.height = row.cells[0].style.height;
				row.cells[j].setAttribute("onclick", "javascript:onclickid_set(this);");
				row.cells[j].setAttribute("ondragover", "javascript:event.preventDefault();");				
            }
        }
        if (obj.rows.length > 0) {
            if (obj.rows[0].cells.length > 0) {
                for (var i = 0; i < obj.rows.length; i++) {
                    for (var j = 0; j < obj.rows[0].cells.length; j++) {
                        obj.rows[i].cells[j].id = "gametable_td_" + input_id + "_" + i + "_" + j;
                    }
                }
            }
        }		
    }
} 

function table_insert_col(input_id, input_cmd, input_col, input_value) {
    if (document.getElementById("gametable_" + input_id)) {
        var obj = document.getElementById("gametable_" + input_id);
		var data = input_value.split("|");
        if (input_cmd == "insertfirst") {
			for (var i = 0; i < data.length; i++) {
				var row = obj.rows[i];
				var col = row.insertCell(0);
				col.innerText = data[i];
				col.style.textAlign = "center";
				col.style.verticalAlign = "middle";
				col.style.background = row.cells[0].style.background;
				col.style.width = row.cells[0].style.width;
				col.style.height = row.cells[0].style.height;
				col.setAttribute("onclick", "javascript:onclickid_set(this);");
				col.setAttribute("ondragover", "javascript:event.preventDefault();");
			}
        } else if (input_cmd == "insertone") {
			for (var i = 0; i < data.length; i++) {
				var row = obj.rows[i];
				var col = row.insertCell(input_col);
				col.innerText = data[i];
				col.style.textAlign = "center";
				col.style.verticalAlign = "middle";
				col.style.background = row.cells[0].style.background;
				col.style.width = row.cells[0].style.width;
				col.style.height = row.cells[0].style.height;
				col.setAttribute("onclick", "javascript:onclickid_set(this);");
				col.setAttribute("ondragover", "javascript:event.preventDefault();");
			}		
        } else if (input_cmd == "insertlast") {
			for (var i = 0; i < data.length; i++) {
				var row = obj.rows[i];
				var col = row.insertCell(-1);
				col.innerText = data[i];
				col.style.textAlign = "center";
				col.style.verticalAlign = "middle";
				col.style.background = row.cells[0].style.background;
				col.style.width = row.cells[0].style.width;
				col.style.height = row.cells[0].style.height;
				col.setAttribute("onclick", "javascript:onclickid_set(this);");
				col.setAttribute("ondragover", "javascript:event.preventDefault();");
			}
        } else if (input_cmd == "update") {
			for (var i = 0; i < data.length; i++) {
				var row = obj.rows[i];
				row.cells[input_col].style.textAlign = "center";
				row.cells[input_col].innerText = data[i];
				row.cells[input_col].style.textAlign = "center";
				row.cells[input_col].style.verticalAlign = "middle";
				row.cells[input_col].style.background = row.cells[0].style.background;
				row.cells[input_col].style.width = row.cells[0].style.width;
				row.cells[input_col].style.height = row.cells[0].style.height;
				row.cells[input_col].setAttribute("onclick", "javascript:onclickid_set(this);");
				row.cells[input_col].setAttribute("ondragover", "javascript:event.preventDefault();");
			}
        }
        if (obj.rows.length > 0) {
            if (obj.rows[0].cells.length > 0) {
                for (var i = 0; i < obj.rows.length; i++) {
                    for (var j = 0; j < obj.rows[0].cells.length; j++) {
                        obj.rows[i].cells[j].id = "gametable_td_" + input_id + "_" + i + "_" + j;
                    }
                }
            }
        }		
    }
} 

function table_change_colsrows(input_id, input_target, input_cmd, input_index) {
    if (document.getElementById("gametable_" + input_id)) {
        var obj = document.getElementById("gametable_" + input_id);
        if (input_cmd == "remove") {
            if (input_target == "row")
                obj.deleteRow(input_index);
            else if (input_target == "col") {
                for (var i = 0; i < obj.rows.length; i++) {
                    var row = obj.rows[i];
                    row.deleteCell(input_index);
                }
            }
        } else if (input_cmd == "add") {
            if (input_target == "row") {
                obj.insertRow(input_index);
                for (var i = 0; i < obj.rows[0].cells.length; i++) {
                    var row = obj.rows[input_index];
                    row.insertCell(i);
                    row.cells[i].style.textAlign = "center";
                    row.cells[i].style.verticalAlign = "middle";
                    row.cells[i].style.background = obj.rows[0].cells[i].style.background;
                    row.cells[i].style.width = obj.rows[0].cells[i].style.width;
                    row.cells[i].style.height = obj.rows[0].cells[i].style.height;
                    row.cells[i].setAttribute("onclick", "javascript:onclickid_set(this);");
                    row.cells[i].setAttribute("ondragover", "javascript:event.preventDefault();");
                }
            } else if (input_target == "col") {
                for (var i = 0; i < obj.rows.length; i++) {
                    var row = obj.rows[i];
                    row.insertCell(input_index);
                    row.cells[input_index].style.textAlign = "center";
                    row.cells[input_index].style.verticalAlign = "middle";
                    row.cells[input_index].style.background = row.cells[0].style.background;
                    row.cells[input_index].style.width = row.cells[0].style.width;
                    row.cells[input_index].style.height = row.cells[0].style.height;
                    row.cells[input_index].setAttribute("onclick", "javascript:onclickid_set(this);");
                    row.cells[input_index].setAttribute("ondragover", "javascript:event.preventDefault();");
                }
            }
        }
        if (obj.rows.length > 0) {
            if (obj.rows[0].cells.length > 0) {
                for (var i = 0; i < obj.rows.length; i++) {
                    for (var j = 0; j < obj.rows[0].cells.length; j++) {
                        obj.rows[i].cells[j].id = "gametable_td_" + input_id + "_" + i + "_" + j;
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
	if (document.getElementById("gametable_"+input_id)) {
        var obj = document.getElementById("gametable_"+input_id);
		if (input_x==-1&&input_y==-1) {
			for (var i = 0; i < obj.rows.length; i++) {
				for (var j = 0; j < obj.rows[0].cells.length; j++) {
					if (document.getElementById("gametable_td_"+input_id+"_"+i+'_'+j)) {
					  var td = document.getElementById("gametable_td_"+input_id+"_"+i+'_'+j);
					  td.style.border = input_borderwidth +'px ' + input_borderstyle + ' ' + input_bordercolor;
					} 

				} 
			}  
		}
		else if (input_x==-1) {
			for (var j = 0; j < obj.rows[0].cells.length; j++) {
				if (document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+j)) {
				  var td = document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+j);
				  td.style.border = input_borderwidth +'px ' + input_borderstyle + ' ' + input_bordercolor;
				} 
			} 
		}
		else if (input_y==-1) {
			for (var i = 0; i < obj.rows.length; i++) {
				if (document.getElementById("gametable_td_"+input_id+"_"+i+'_'+input_x)) {
				  var td = document.getElementById("gametable_td_"+input_id+"_"+i+'_'+input_x);
				  td.style.border = input_borderwidth +'px ' + input_borderstyle + ' ' + input_bordercolor;
				} 
			}  
		}
		else {
			if (document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x)) {
			  var td = document.getElementById("gametable_td_"+input_id+"_"+input_y+'_'+input_x);
			  td.style.border = input_borderwidth +'px ' + input_borderstyle + ' ' + input_bordercolor;
			} 
		}
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
	var obj = document.getElementById("gametable_"+input_id);
	if (obj) {
		if (input_x==-1) {
			for (var i = 0; i < obj.rows[0].cells.length; i++) {
				if (document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+i)) {
					document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+i).innerHTML = "<font face='" + input_fontname + "' size='" + input_fontsize + "' color='" + input_color + "'>" + input_text + "</font>";
				}
			}  
		} else if (input_y==-1) {
			for (var j = 0; j < obj.rows.length; j++) {
				if (document.getElementById("gametable_td_"+input_id+"_"+j+"_"+input_x)) {
					document.getElementById("gametable_td_"+input_id+"_"+j+"_"+input_x).innerHTML = "<font face='" + input_fontname + "' size='" + input_fontsize + "' color='" + input_color + "'>" + input_text + "</font>";
				}
			} 
		} else if (document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x)) {
		  document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x).innerHTML = "<font face='" + input_fontname + "' size='" + input_fontsize + "' color='" + input_color + "'>" + input_text + "</font>";
		}
	}
  }  
  
  function table_td_insert_element(input_id,input_x,input_y,input_element,input_firstrow){
	var obj = document.getElementById("gametable_"+input_id);
	if (obj) {
		if (input_x==-1) {
			for (var i = 0+input_firstrow; i < obj.rows[0].cells.length; i++) {
				if (document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+i)) {
					var el = '';
					var type = '';
					if (input_element=="image") {
						type = 'gameimage_';
						el = '<img id="gameimage_'+input_id+'_'+input_y+'_'+i+'" src="" onclick="javascript:onclickid_set(this);" draggable="false" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" width: 30px; height: 30px; left: 0px; top: 0px; z-index: 999; display: block;">';
					}
					else if (input_element=="canvas") {
						type = 'gamecanvas_';
						el = '<canvas id="gamecanvas_'+input_id+'_'+input_y+'_'+i+'" width="30" height="30" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" width: 30px; height: 30px; left: 0px; top: 0px; z-index: 999; display: block;"></canvas>';
					}
					else if (input_element=="button") {
						type = 'gamebutton_';
						el = '<input type="button" id="gamebutton_'+input_id+'_'+input_y+'_'+i+'" value="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; opacity: 1; font-size: 12px; z-index: 999; outline-style: none; display: block;">';
					}
					else if (input_element=="color") {
						type = 'gamecolor_';
						el = '<input type="color" id="gamecolor_'+input_id+'_'+input_y+'_'+i+'" name="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="select") {
						type = 'gameselect_';
						el = '<select id="gameselect_'+input_id+'_'+input_y+'_'+i+'" name="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 100px; height: 30px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; display: block;"></select>';
					}
					else if (input_element=="range") {
						type = 'gamerange_';
						el = '<input type="range" id="gamerange_'+input_id+'_'+input_y+'_'+i+'" name="" max="100" min="0" step="1" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="text") {
						type = 'gametext_';
						el = '<input type="text" id="gametext_'+input_id+'_'+input_y+'_'+i+'" name="" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="div") {
						type = 'gamediv_';
						el = '<div id="gamediv_'+input_id+'_'+input_y+'_'+i+'" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 20px; border: 1px none rgb(0, 0, 0); background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 12px; opacity: 1; z-index: 999; overflow-wrap: break-word; overflow: auto; display: block;">hi</div>';
					}
					else if (input_element=="a") {
						type = 'gamea_';
						el = '<a id="gamea_'+input_id+'_'+input_y+'_'+i+'" href="https://fustyles.github.io/webduino/SpBlocklyJS/index.html" target="_blank" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; border: 1px none rgb(0, 0, 0); background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; overflow-wrap: break-word; display: block;">link</a>';
					}
					else if (input_element=="checkbox") {
						type = 'gamecheckbox_';
						el = '<input type="checkbox" id="gamecheckbox_'+input_id+'_'+input_y+'_'+i+'" name="" value="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 12px; height: 12px; opacity: 1; z-index: 999;">';
					}
					else if (input_element=="textarea") {
						type = 'gametextarea_';
						el = '<textarea id="gametextarea_'+input_id+'_'+input_y+'_'+i+'" name="" cols="10" rows="1" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999;"></textarea>';
					}
					else if (input_element=="number") {
						type = 'gamenumber_';
						el = '<input type="number" id="gamenumber_'+input_id+'_'+input_y+'_'+i+'" name="" max="100" min="0" step="1" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 20px; font-size: 12px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="date") {
						type = 'gamedate_';
						el = '<input type="date" id="gamedate_'+input_id+'_'+input_y+'_'+i+'" name="" max="2100-12-31" min="1900-01-01" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="time") {
						type = 'gametime_';
						el = '<input type="time" id="gametime_'+input_id+'_'+input_y+'_'+i+'" name="" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="datetime") {
						type = 'gamedatetime_';
						el = '<input type="datetime-local" id="gamedatetime_'+input_id+'_'+input_y+'_'+i+'" name="" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="progress") {
						type = 'gameprogress_';
						el = '<progress id="gameprogress_'+input_id+'_'+input_y+'_'+i+'" max="100" value="0" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;"></progress>';
					}
					else if (input_element=="password") {
						type = 'gamepassword_';
						el = '<input type="password" id="gamepassword_'+input_id+'_'+input_y+'_'+i+'" name="" maxlength="20" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 20px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; display: block;">';
					}
					document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+i).innerHTML = el;
				}
			}  
		} else if (input_y==-1) {
			for (var j = 0+input_firstrow; j < obj.rows.length; j++) {
				if (document.getElementById("gametable_td_"+input_id+"_"+j+"_"+input_x)) {
					var el = '';
					var type = '';
					if (input_element=="image") {
						type = 'gameimage_';
						el = '<img id="gameimage_'+input_id+"_"+j+"_"+input_x+'" src="" onclick="javascript:onclickid_set(this);" draggable="false" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" width: 30px; height: 30px; left: 0px; top: 0px; z-index: 999; display: block;">';
					}
					else if (input_element=="canvas") {
						type = 'gamecanvas_';
						el = '<canvas id="gamecanvas_'+input_id+"_"+j+"_"+input_x+'" width="30" height="30" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" width: 30px; height: 30px; left: 0px; top: 0px; z-index: 999; display: block;"></canvas>';
					}
					else if (input_element=="button") {
						type = 'gamebutton_';
						el = '<input type="button" id="gamebutton_'+input_id+"_"+j+"_"+input_x+'" value="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; opacity: 1; font-size: 12px; z-index: 999; outline-style: none; display: block;">';
					}
					else if (input_element=="color") {
						type = 'gamecolor_';
						el = '<input type="color" id="gamecolor_'+input_id+"_"+j+"_"+input_x+'" name="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="select") {
						type = 'gameselect_';
						el = '<select id="gameselect_'+input_id+"_"+j+"_"+input_x+'" name="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 100px; height: 30px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; display: block;"></select>';
					}
					else if (input_element=="range") {
						type = 'gamerange_';
						el = '<input type="range" id="gamerange_'+input_id+"_"+j+"_"+input_x+'" name="" max="100" min="0" step="1" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="text") {
						type = 'gametext_';
						el = '<input type="text" id="gametext_'+input_id+"_"+j+"_"+input_x+'" name="" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="div") {
						type = 'gamediv_';
						el = '<div id="gamediv_'+input_id+"_"+j+"_"+input_x+'" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 20px; border: 1px none rgb(0, 0, 0); background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 12px; opacity: 1; z-index: 999; overflow-wrap: break-word; overflow: auto; display: block;">hi</div>';
					}
					else if (input_element=="a") {
						type = 'gamea_';
						el = '<a id="gamea_'+input_id+"_"+j+"_"+input_x+'" href="https://fustyles.github.io/webduino/SpBlocklyJS/index.html" target="_blank" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; border: 1px none rgb(0, 0, 0); background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; overflow-wrap: break-word; display: block;">link</a>';
					}
					else if (input_element=="checkbox") {
						type = 'gamecheckbox_';
						el = '<input type="checkbox" id="gamecheckbox_'+input_id+"_"+j+"_"+input_x+'" name="" value="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 12px; height: 12px; opacity: 1; z-index: 999;">';
					}
					else if (input_element=="textarea") {
						type = 'gametextarea_';
						el = '<textarea id="gametextarea_'+input_id+"_"+j+"_"+input_x+'" name="" cols="10" rows="1" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999;"></textarea>';
					}
					else if (input_element=="number") {
						type = 'gamenumber_';
						el = '<input type="number" id="gamenumber_'+input_id+"_"+j+"_"+input_x+'" name="" max="100" min="0" step="1" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 20px; font-size: 12px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="date") {
						type = 'gamedate_';
						el = '<input type="date" id="gamedate_'+input_id+"_"+j+"_"+input_x+'" name="" max="2100-12-31" min="1900-01-01" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="time") {
						type = 'gametime_';
						el = '<input type="time" id="gametime_'+input_id+"_"+j+"_"+input_x+'" name="" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="datetime") {
						type = 'gamedatetime_';
						el = '<input type="datetime-local" id="gamedatetime_'+input_id+"_"+j+"_"+input_x+'" name="" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="progress") {
						type = 'gameprogress_';
						el = '<progress id="gameprogress_'+input_id+"_"+j+"_"+input_x+'" max="100" value="0" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;"></progress>';
					}
					else if (input_element=="password") {
						type = 'gamepassword_';
						el = '<input type="password" id="gamepassword_'+input_id+"_"+j+"_"+input_x+'" name="" maxlength="20" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 20px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; display: block;">';
					}
					document.getElementById("gametable_td_"+input_id+"_"+j+"_"+input_x).innerHTML = el;
				}
			} 
		} else if (document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x)) {
					var el = '';
					var type = '';
					if (input_element=="image") {
						type = 'gameimage_';
						el = '<img id="gameimage_'+input_id+"_"+input_y+"_"+input_x+'" src="" onclick="javascript:onclickid_set(this);" draggable="false" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" width: 30px; height: 30px; left: 0px; top: 0px; z-index: 999; display: block;">';
					}
					else if (input_element=="canvas") {
						type = 'gamecanvas_';
						el = '<canvas id="gamecanvas_'+input_id+"_"+input_y+"_"+input_x+'" width="30" height="30" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" width: 30px; height: 30px; left: 0px; top: 0px; z-index: 999; display: block;"></canvas>';
					}
					else if (input_element=="button") {
						type = 'gamebutton_';
						el = '<input type="button" id="gamebutton_'+input_id+"_"+input_y+"_"+input_x+'" value="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; opacity: 1; font-size: 12px; z-index: 999; outline-style: none; display: block;">';
					}
					else if (input_element=="color") {
						type = 'gamecolor_';
						el = '<input type="color" id="gamecolor_'+input_id+"_"+input_y+"_"+input_x+'" name="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="select") {
						type = 'gameselect_';
						el = '<select id="gameselect_'+input_id+"_"+input_y+"_"+input_x+'" name="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 100px; height: 30px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; display: block;"></select>';
					}
					else if (input_element=="range") {
						type = 'gamerange_';
						el = '<input type="range" id="gamerange_'+input_id+"_"+input_y+"_"+input_x+'" name="" max="100" min="0" step="1" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="text") {
						type = 'gametext_';
						el = '<input type="text" id="gametext_'+input_id+"_"+input_y+"_"+input_x+'" name="" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="div") {
						type = 'gamediv_';
						el = '<div id="gamediv_'+input_id+"_"+input_y+"_"+input_x+'" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 20px; border: 1px none rgb(0, 0, 0); background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 12px; opacity: 1; z-index: 999; overflow-wrap: break-word; overflow: auto; display: block;">hi</div>';
					}
					else if (input_element=="a") {
						type = 'gamea_';
						el = '<a id="gamea_'+input_id+"_"+input_y+"_"+input_x+'" href="https://fustyles.github.io/webduino/SpBlocklyJS/index.html" target="_blank" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 30px; border: 1px none rgb(0, 0, 0); background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; overflow-wrap: break-word; display: block;">link</a>';
					}
					else if (input_element=="checkbox") {
						type = 'gamecheckbox_';
						el = '<input type="checkbox" id="gamecheckbox_'+input_id+"_"+input_y+"_"+input_x+'" name="" value="" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 12px; height: 12px; opacity: 1; z-index: 999;">';
					}
					else if (input_element=="textarea") {
						type = 'gametextarea_';
						el = '<textarea id="gametextarea_'+input_id+"_"+input_y+"_"+input_x+'" name="" cols="10" rows="1" draggable="false" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999;"></textarea>';
					}
					else if (input_element=="number") {
						type = 'gamenumber_';
						el = '<input type="number" id="gamenumber_'+input_id+"_"+input_y+"_"+input_x+'" name="" max="100" min="0" step="1" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 20px; font-size: 12px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="date") {
						type = 'gamedate_';
						el = '<input type="date" id="gamedate_'+input_id+"_"+input_y+"_"+input_x+'" name="" max="2100-12-31" min="1900-01-01" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="time") {
						type = 'gametime_';
						el = '<input type="time" id="gametime_'+input_id+"_"+input_y+"_"+input_x+'" name="" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="datetime") {
						type = 'gamedatetime_';
						el = '<input type="datetime-local" id="gamedatetime_'+input_id+"_"+input_y+"_"+input_x+'" name="" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;">';
					}
					else if (input_element=="progress") {
						type = 'gameprogress_';
						el = '<progress id="gameprogress_'+input_id+"_"+input_y+"_"+input_x+'" max="100" value="0" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; opacity: 1; z-index: 999; display: block;"></progress>';
					}
					else if (input_element=="password") {
						type = 'gamepassword_';
						el = '<input type="password" id="gamepassword_'+input_id+"_"+input_y+"_"+input_x+'" name="" maxlength="20" onclick="javascript:onclickid_set(this);" ondragstart="javascript:event.dataTransfer.setData(\'text/plain\',event.target.id);" style=" left: 0px; top: 0px; width: 60px; height: 20px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); font-size: 14px; opacity: 1; z-index: 999; display: block;">';
					}
					document.getElementById("gametable_td_"+input_id+"_"+input_y+"_"+input_x).innerHTML = el;
		}
	}
  }  

  function table_td_insert_element_function_get(id, property) {
	  var arr = id.split("_");
	  if (arr.length==4) {
		  if (property=="id")
			  return arr[1];
		  else if (property=="row")
			  return Number(arr[2]);
		  else if (property=="col")
			  return Number(arr[3]);
		  else if (property=="element")
			  return arr[0].replace("game","");
	  }

	  return "";
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
        var src = '<iframe src="' + input_url + '" style="width:0px;height:0px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; geolocation; microphone; camera" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"></iframe>';
    
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
    obj.setAttribute("width",input_width);
    obj.style.width = input_width + 'px';
    obj.setAttribute("height",input_height);
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
        obj.setAttribute("width",input_value);
        obj.style.width = input_value + 'px';
      }
      else if (input_property=='height') {
        obj.setAttribute("height",input_value);
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";    
  }  
  
  function canvas_getimagedata(input_id, input_x0, input_y0, input_width, input_height) {
    if (document.getElementById("gamecanvas_"+input_id))
    {
	  var canvas = document.getElementById("gamecanvas_"+input_id);
      var context = canvas.getContext('2d');
      return context.getImageData(input_x0, input_y0, input_width, input_height);
	}
	else
      return [];    
  } 
  
   function canvas_setimagedata(input_id, input_data, input_x0, input_y0) {
    if (document.getElementById("gamecanvas_"+input_id))
    {
	  var canvas = document.getElementById("gamecanvas_"+input_id);
      var context = canvas.getContext('2d');
      context.putImageData(input_data,input_x0,input_y0);
	}   
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

  function canvas_img_url(input_source, input_value) {
    if (!document.getElementById("gamecanvasimg")) {
      var img = document.createElement('img');
      img.id = "gamecanvasimg";
      img.style.display = "none";
      document.body.appendChild(img);
    }    
	else 
		var img = document.getElementById("gamecanvasimg");
		
	if (input_source=="url") { 
		if (input_value!=""&&img.src!=input_value) 
		  img.src = input_value;
	}
	else if (input_source=="imageid") { 
		if (document.getElementById("gameimage_"+input_value)) {
			var obj = document.getElementById("gameimage_"+input_value);
			var canvas = document.createElement('canvas');
			canvas.id = 'tmp';
			canvas.style.position = "absolute";
			canvas.style.left = "300px";
			canvas.style.display = "none";
			document.body.appendChild(canvas);
			canvas.setAttribute("width", obj.width);
			canvas.setAttribute("height", obj.height);
			var context = canvas.getContext("2d");
			try {
				context.drawImage(obj,0,0,obj.width,obj.height);
				var base64 = canvas.toDataURL();
			}
			catch(e) {
				//console.log(e);
			}
			document.getElementById("tmp").parentNode.removeChild(document.getElementById("tmp"));
			img.src = base64;
		}
	}
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

  function canvas_capturevideo(input_canvasid,input_videoid,input_sx,input_sy,input_swidth,input_sheight,input_x0,input_y0,input_width,input_height,input_rotate,input_globalAlpha) {
    if (document.getElementById("gamecanvas_"+input_canvasid)&&document.getElementById("gamevideo_"+input_videoid)) {
      var video = document.getElementById("gamevideo_"+input_videoid);
      var context = document.getElementById("gamecanvas_"+input_canvasid).getContext("2d");
      context.rotate(input_rotate * Math.PI / 180);
      context.globalAlpha = input_globalAlpha;	  
      if ((input_swidth>0)&&(input_sheight>0))
        context.drawImage(video,input_sx,input_sy,input_swidth,input_sheight,input_x0,input_y0,input_width,input_height);
      else if (((input_swidth==0)||(input_sheight==0))&&((input_width>0)&&(input_height>0)))
        context.drawImage(video,input_x0,input_y0,input_width,input_height);
      else
        context.drawImage(video,input_x0,input_y0);
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
  
  function image_create_stream(input_id,input_url,input_left,input_top,input_zindex,input_display) {
    if (document.getElementById("gameimage_"+input_id))
      document.getElementById("gameimage_"+input_id).parentNode.removeChild(document.getElementById("gameimage_"+input_id));
    var obj = document.createElement('img');
    obj.style.position = "absolute";
    obj.id = "gameimage_"+input_id;
    obj.src = input_url;
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.zIndex = input_zindex;
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
	obj.crossOrigin = "anonymous";
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
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
      var obj1 = document.getElementById(element1+input_id1);
      var x1 = Number(obj1.style.left.replace(/px/ig,""));
      var y1 = Number(obj1.style.top.replace(/px/ig,""));
      if (obj1.parentElement.id.indexOf("region_")!=-1) {
	x1 += obj1.parentElement.style.left.replace(/px/ig,"");
	y1 += obj1.parentElement.style.top.replace(/px/ig,"");
      } 
      var x1_w = Number(obj1.style.left.replace(/px/ig,"")) + Number(obj1.style.width.replace(/px/ig,""));
      var y1_h = Number(obj1.style.top.replace(/px/ig,"")) + Number(obj1.style.height.replace(/px/ig,""));
	  
      var obj2 = document.getElementById(element2+input_id2);
      var x2 = Number(obj2.style.left.replace(/px/ig,""));
      var y2 = Number(obj2.style.top.replace(/px/ig,""));
      if (obj2.parentElement.id.indexOf("region_")!=-1) {
	x2 += obj2.parentElement.style.left.replace(/px/ig,"");
	y2 += obj2.parentElement.style.top.replace(/px/ig,"");
      } 
      var x2_w = Number(obj2.style.left.replace(/px/ig,"")) + Number(obj2.style.width.replace(/px/ig,""));
      var y2_h = Number(obj2.style.top.replace(/px/ig,"")) + Number(obj2.style.height.replace(/px/ig,""));
    
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
      var obj1 = document.getElementById(element1+input_id1);
      var x1 = Number(obj1.style.left.replace(/px/ig,""));
	  var y1 = Number(obj1.style.top.replace(/px/ig,""));
	  if (obj1.parentElement.id.indexOf("region_")!=-1) {
		  x1 += obj1.parentElement.style.left.replace(/px/ig,"");
		  y1 += obj1.parentElement.style.top.replace(/px/ig,"");
	  } 
      var x1_w = Number(obj1.style.left.replace(/px/ig,"")) + Number(obj1.style.width.replace(/px/ig,""));
      var y1_h = Number(obj1.style.top.replace(/px/ig,"")) + Number(obj1.style.height.replace(/px/ig,""));
	  
	  var obj2 = document.getElementById("gamecanvas_"+input_id2);
      var x2 = Number(obj2.style.left.replace(/px/ig,""));
	  var y2 = Number(obj2.style.top.replace(/px/ig,""));
	  if (obj2.parentElement.id.indexOf("region_")!=-1) {
		  x2 += obj2.parentElement.style.left.replace(/px/ig,"");
		  y2 += obj2.parentElement.style.top.replace(/px/ig,"");
	  } 
      var x2_w = Number(obj2.style.left.replace(/px/ig,"")) + Number(obj2.style.width.replace(/px/ig,""));
      var y2_h = Number(obj2.style.top.replace(/px/ig,"")) + Number(obj2.style.height.replace(/px/ig,""));
	    
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
	
  function point_in_element(x, y, element) {
    if (x&&y&&document.getElementById(element)) {
      var obj1 = document.getElementById(element);
      var x1 = Number(obj1.style.left.replace(/px/ig,""));
	  var y1 = Number(obj1.style.top.replace(/px/ig,""));
	  if (obj1.parentElement.id.indexOf("region_")!=-1) {
		  x1 += obj1.parentElement.style.left.replace(/px/ig,"");
		  y1 += obj1.parentElement.style.top.replace(/px/ig,"");
	  } 
      var x1_w = Number(obj1.style.left.replace(/px/ig,"")) + Number(obj1.style.width.replace(/px/ig,""));
      var y1_h = Number(obj1.style.top.replace(/px/ig,"")) + Number(obj1.style.height.replace(/px/ig,""));
      if ((x>=x1)&&(x<=x1_w)&&(y>=y1)&&(y<=y1_h))
        return 1;
      else
        return 0; 
	}
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
        mouse_pageX = e.pageX;
        mouse_pageY = e.pageY;
        mouse_offsetX = e.offsetX;
        mouse_offsetY = e.offsetY;   
        mouse_clientX = e.clientX;
        mouse_clientY = e.clientY;
        mouse_screenX = e.screenX;
        mouse_screenY = e.screenY;  		
      }	  
  }

  function mouse_coordinate_get(input_property) {
    if (!document.onmousemove)
    {
      mouse_pageX = 0;
      mouse_pageY = 0;
      mouse_offsetX = 0;
      mouse_offsetY = 0;  
	  mouse_clientX = 0;
	  mouse_clientY = 0;
	  mouse_screenX = 0;
	  mouse_screenY = 0;	  
      document.onmousemove = function(e){  
        e=e||window.event;
        mouse_pageX = e.pageX;
        mouse_pageY = e.pageY;
        mouse_offsetX = e.offsetX;
        mouse_offsetY = e.offsetY;   
        mouse_clientX = e.clientX;
        mouse_clientY = e.clientY;
        mouse_screenX = e.screenX;
        mouse_screenY = e.screenY;       
      }
    }
    if (input_property=="pageX")
      return mouse_pageX;
    else if (input_property=="pageY")
      return mouse_pageY;
    else if (input_property=="offsetX")
      return mouse_offsetX;
    else if (input_property=="offsetY")
      return mouse_offsetY;    
    else if (input_property=="clientX")
      return mouse_clientX;
    else if (input_property=="clientY")
      return mouse_clientY;
    else if (input_property=="screenX")
      return mouse_screenX;
    else if (input_property=="screenY")
      return mouse_screenY;   
  } 
  
  function text_to_number(input_text) {
    return Number(input_text);
  } 

  function button_create(input_id,input_width,input_height,input_left,input_top,input_opacity,input_bgcolor,input_value,input_fontsize,input_zindex,input_display) {
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
    obj.style.fontSize = input_fontsize + 'px';
    obj.style.zIndex = input_zindex;
    obj.style.outlineStyle = "none";
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
        obj.style.backgroundImage = "url('"+input_value+"')";
      else if (input_property=="value")
        obj.value = input_value;
      else if (input_property=="fontsize")
        obj.style.fontSize = input_value + "px"; 
      else if (input_property=="color")
        obj.style.color = input_value; 	    
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
      else if (input_property=="color")
        return obj.style.color;	    
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function button_delete(input_id) {
    if (document.getElementById("gamebutton_"+input_id))
      document.getElementById("gamebutton_"+input_id).parentNode.removeChild(document.getElementById("gamebutton_"+input_id));
  }

  function colorpicker_create(input_id,input_width,input_height,input_left,input_top,input_opacity,input_value,input_zindex,input_display) {
    if (document.getElementById("gamecolor_"+input_id)) 
      document.getElementById("gamecolor_"+input_id).parentNode.removeChild(document.getElementById("gamecolor_"+input_id));
    var obj = document.createElement('input');
    obj.type="color";
    obj.id = "gamecolor_"+input_id;
	obj.name = input_id;
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function colorpicker_delete(input_id) {
    if (document.getElementById("gamecolor_"+input_id))
      document.getElementById("gamecolor_"+input_id).parentNode.removeChild(document.getElementById("gamecolor_"+input_id));
  }

  function select_create(input_id,input_width,input_height,input_left,input_top,input_background,input_color,input_fontSize,input_opacity,input_option,input_value,input_zindex,input_display) {
    if (document.getElementById("gameselect_"+input_id)) 
      document.getElementById("gameselect_"+input_id).parentNode.removeChild(document.getElementById("gameselect_"+input_id));
    var obj = document.createElement("select");
    obj.id = "gameselect_"+input_id;
	obj.name = input_id;
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
      else if (input_property=="selectedValue") {
	if (obj.selectedIndex!=-1)
          return obj.options[obj.selectedIndex].value;
	else
          return "";		
      }
      else if (input_property=="selectedText") {
	if (obj.selectedIndex!=-1)	      
        	return obj.options[obj.selectedIndex].text;
	else
          return "";
      }
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function select_delete(input_id) {
    if (document.getElementById("gameselect_"+input_id))
      document.getElementById("gameselect_"+input_id).parentNode.removeChild(document.getElementById("gameselect_"+input_id));
  }

  function range_create(input_id,input_width,input_height,input_left,input_top,input_opacity,input_max,input_min,input_step,input_value,input_zindex,input_display) {
    if (document.getElementById("gamerange_"+input_id)) 
      document.getElementById("gamerange_"+input_id).parentNode.removeChild(document.getElementById("gamerange_"+input_id));
    var obj = document.createElement('input');
    obj.type="range";
    obj.id = "gamerange_"+input_id;
	obj.name = input_id;
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;	  
    }
    else
      return "";
  }

  function range_delete(input_id) {
    if (document.getElementById("gamerange_"+input_id))
      document.getElementById("gamerange_"+input_id).parentNode.removeChild(document.getElementById("gamerange_"+input_id));
  }      

  function text_create(input_id,input_width,input_height,input_left,input_top,input_background,input_color,input_fontSize,input_opacity,input_value,input_zindex,input_display) {
    if (document.getElementById("gametext_"+input_id)) 
      document.getElementById("gametext_"+input_id).parentNode.removeChild(document.getElementById("gametext_"+input_id));
    var obj = document.createElement('input');
    obj.type="text";
    obj.id = "gametext_"+input_id;
	obj.name = input_id;
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
        obj.style.backgroundImage = "url('"+input_value+"')";
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
      else if (input_property=="background")
        return obj.style.backgroundImage;
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function text_delete(input_id) {
    if (document.getElementById("gametext_"+input_id))
      document.getElementById("gametext_"+input_id).parentNode.removeChild(document.getElementById("gametext_"+input_id));
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
	obj.style.overflow = "auto";	
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
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
      else if (input_property=="scrollX")
        obj.style.overflowX = input_value;
      else if (input_property=="scrollY")
        obj.style.overflowY = input_value;	
      else if (input_property=="scrollLeft")
        obj.scrollLeft = input_value;	
      else if (input_property=="scrollTop")
        obj.scrollTop = input_value;
      else if (input_property=="wrap") {
        if (input_value)
          obj.style.wordWrap = "break-word";
        else
          obj.style.wordWrap = "normal";
      }	    
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
      else if (input_property=="scrollX")
        return obj.style.overflowX;
      else if (input_property=="scrollY")
        return obj.style.overflowY;	
      else if (input_property=="scrollLeft")
        return obj.scrollLeft;
      else if (input_property=="scrollTop")
        return obj.scrollTop;
      else if (input_property=="scrollWidth")
        return obj.scrollWidth;
      else if (input_property=="scrollHeight")
        return obj.scrollHeight;	
      else if (input_property=='id')
        return obj.id;
      else if (input_property=='name')
        return obj.name;
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
    else if (input_property=="backgroundRepeat") 
      document.body.style.backgroundRepeat = input_value;  
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
      var angle = (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
      if (angle<0) angle = 180 + angle;
      if (input_y0<input_y1) angle = 180 + angle;
      return angle;
  } 	

  function iframe_create(input_id,input_width,input_height,input_left,input_top,input_frameborder,input_scrolling,input_src,input_srcdoc,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gameiframe_"+input_id)) 
      document.getElementById("gameiframe_"+input_id).parentNode.removeChild(document.getElementById("gameiframe_"+input_id));
    var obj = document.createElement('iframe');
    obj.id = "gameiframe_"+input_id;
	obj.name = obj.id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.width = input_width + 'px';
    obj.style.height = input_height + 'px';
    obj.frameBorder = input_frameborder;
    obj.scrolling = input_scrolling;
    if (input_src!="")
      obj.src = input_src;
    else
      obj.srcdoc = input_srcdoc;
    obj.style.opacity = input_opacity;
    obj.style.zIndex = input_zindex;
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    obj.allow = "autoplay; fullscreen; geolocation; microphone; camera";
    obj.sandbox = "allow-same-origin allow-scripts allow-popups allow-forms allow-presentation allow-top-navigation";
    obj.allowfullscreen = true;
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function iframe_set(input_id,input_property,input_value) {
    if (document.getElementById("gameiframe_"+input_id)) {
        var obj = document.getElementById("gameiframe_"+input_id);
    if (input_property=="left")
		obj.style.left = input_value + "px";
    else if (input_property=="top")
		obj.style.top = input_value + "px";
    else if (input_property=="width")
		obj.style.width = input_value + "px";
    else if (input_property=="height")
		obj.style.height = input_value + "px";
    else if (input_property=="frameborder")
		obj.frameBorder = input_value;
    else if (input_property=="scrolling")
		obj.scrolling = input_value;
    else if (input_property=="src")
		obj.src = input_value; 
    else if (input_property=="srcdoc")
		obj.srcdoc = input_value;    
    else if (input_property=="sandbox")
		obj.sandbox = input_value;  
    else if (input_property=="allow")
		obj.allow = input_value;  	    
    else if (input_property=="opacity")
		obj.style.opacity = input_value;    
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
    else if (input_property=="scrollLeft")
      obj.contentWindow.scrollTo(input_value, obj.contentDocument.body.scrollTop);
    else if (input_property=="scrollTop")
      obj.contentWindow.scrollTo(obj.contentDocument.body.scrollLeft, input_value);
    else if (input_property=="style")
	obj.style = input_value;	    
    }
  }

  function iframe_get(input_id,input_property){
    if (document.getElementById("gameiframe_"+input_id)) {
	  var obj = document.getElementById("gameiframe_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="height")
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=="frameborder")
        return obj.frameBorder;
      else if (input_property=="scrolling")
        return obj.scrolling;
      else if (input_property=="src")
       return obj.src;	    
      else if (input_property=="srcdoc")
        return obj.srcdoc;	  
      else if (input_property=="sandbox")
        return obj.sandbox;  
      else if (input_property=="allow")
        return obj.allow;	    
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
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
      else if (input_property=="scrollLeft")
        return obj.contentDocument.body.scrollLeft;
      else if (input_property=="scrollTop")
        return obj.contentDocument.body.scrollTop;
      else if (input_property=="scrollWidth")
        return obj.contentDocument.body.scrollWidth;
      else if (input_property=="scrollHeight")
        return obj.contentDocument.body.scrollHeight;	
      else if (input_property=='id')
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function iframe_delete(input_id) {
    if (document.getElementById("gameiframe_"+input_id))
      document.getElementById("gameiframe_"+input_id).parentNode.removeChild(document.getElementById("gameiframe_"+input_id));
  }
	
  function a_create(input_id,input_width,input_height,input_left,input_top,input_borderstyle,input_borderwidth,input_bordercolor,input_background,input_color,input_fontSize,input_opacity,input_innerHTML,input_href,input_target,input_zindex,input_display) {
    if (document.getElementById("gamea_"+input_id)) 
      document.getElementById("gamea_"+input_id).parentNode.removeChild(document.getElementById("gamea_"+input_id));
    var obj = document.createElement('a');
    obj.id = "gamea_"+input_id;
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
    obj.href = input_href;
    obj.target = input_target;
    obj.style.zIndex = input_zindex;
    obj.style.wordWrap = "break-word";
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function a_set(input_id,input_property,input_value) {
    if (document.getElementById("gamea_"+input_id)) {
	  var obj = document.getElementById("gamea_"+input_id);
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
      else if (input_property=="href")
        obj.href = input_value; 
      else if (input_property=="target")
        obj.target = input_value; 	  
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

  function a_get(input_id,input_property){
    if (document.getElementById("gamea_"+input_id)) {
	  var obj = document.getElementById("gamea_"+input_id);
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
      else if (input_property=="href")
        return obj.href;
	  else if (input_property=="target")
        return obj.target;
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function a_delete(input_id) {
    if (document.getElementById("gamea_"+input_id))
      document.getElementById("gamea_"+input_id).parentNode.removeChild(document.getElementById("gamea_"+input_id));
  }
	
  function radio_create(input_id,input_name,input_left,input_top,input_size,input_value,input_checked,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gameradio_"+input_id)) 
      document.getElementById("gameradio_"+input_id).parentNode.removeChild(document.getElementById("gameradio_"+input_id));
    var obj = document.createElement("input");
	obj.setAttribute("type", "radio");
    obj.id = "gameradio_"+input_id;
	obj.name = input_name;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
	obj.style.width = input_size + 'px';
	obj.style.height = input_size + 'px';
	obj.value = input_value;
	if (input_checked==true)
	  obj.checked = "checked";
	else
	  obj.checked = "";
    obj.style.opacity = input_opacity;
    obj.style.zIndex = input_zindex;
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function radio_set(input_id,input_property,input_value) {
    if (document.getElementById("gameradio_"+input_id)) {
	  var obj = document.getElementById("gameradio_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";	  
      else if (input_property=="size") {
        obj.style.width = input_value + "px";	
        obj.style.height = input_value + "px";
	  }
      else if (input_property=="value")
        obj.value = input_value;	  
      else if (input_property=="opacity")
        obj.style.opacity = input_value;    
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
      else if (input_property=="checked")
        obj.checked = input_value;	  
      else if (input_property=="disabled")
        obj.disabled = input_value;
      else if (input_property=="draggable")
        obj.draggable = input_value;
      else if (input_property=="style")
        obj.style = input_value;	    
    }
  }

  function radio_get(input_id,input_property){
    if (document.getElementById("gameradio_"+input_id)) {
	  var obj = document.getElementById("gameradio_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="size")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="value")
        return obj.value;	  
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
      else if (input_property=="zindex")
        return obj.style.zIndex;
      else if (input_property=="display")
        return obj.style.display;
      else if (input_property=="position")
        return obj.style.position;
      else if (input_property=="checked")
        return obj.checked;	  
      else if (input_property=="disabled")
        return obj.disabled;
      else if (input_property=="draggable")
        return obj.draggable;
      else if (input_property=='id')
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function radio_name_get(input_name){
    if (document.getElementsByName(input_name)) {
		var obj = document.getElementsByName(input_name); 	
		for(var i=0;i<obj.length;i++) { 
			if(obj[i].type="radio") { 
				if(obj[i].checked) return obj[i].value;
			}
		} 
    }
    return "";
  }

  function radio_delete(input_id) {
    if (document.getElementById("gameradio_"+input_id))
      document.getElementById("gameradio_"+input_id).parentNode.removeChild(document.getElementById("gameradio_"+input_id));
  }

  function checkbox_create(input_id,input_left,input_top,input_size,input_value,input_checked,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gamecheckbox_"+input_id)) 
      document.getElementById("gamecheckbox_"+input_id).parentNode.removeChild(document.getElementById("gamecheckbox_"+input_id));
    var obj = document.createElement("input");
	obj.setAttribute("type", "checkbox");
    obj.id = "gamecheckbox_"+input_id;
	obj.name = input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
	obj.style.width = input_size + 'px';
	obj.style.height = input_size + 'px';
	obj.value = input_value;
	if (input_checked==true)
	  obj.checked = "checked";
	else
	  obj.checked = "";
    obj.style.opacity = input_opacity;
    obj.style.zIndex = input_zindex;
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function checkbox_set(input_id,input_property,input_value) {
    if (document.getElementById("gamecheckbox_"+input_id)) {
	  var obj = document.getElementById("gamecheckbox_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";	
      else if (input_property=="size") {
        obj.style.width = input_value + "px";	
        obj.style.height = input_value + "px";
	  }	  
      else if (input_property=="value")
        obj.value = input_value;	  
      else if (input_property=="opacity")
        obj.style.opacity = input_value;    
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
      else if (input_property=="checked")
        obj.checked = input_value;	  
      else if (input_property=="disabled")
        obj.disabled = input_value;
      else if (input_property=="draggable")
        obj.draggable = input_value;
      else if (input_property=="style")
        obj.style = input_value;	    
    }
  }

  function checkbox_get(input_id,input_property){
    if (document.getElementById("gamecheckbox_"+input_id)) {
	  var obj = document.getElementById("gamecheckbox_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="size")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="value")
        return obj.value;	  
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
      else if (input_property=="zindex")
        return obj.style.zIndex;
      else if (input_property=="display")
        return obj.style.display;
      else if (input_property=="position")
        return obj.style.position;
      else if (input_property=="checked")
        return obj.checked;	  
      else if (input_property=="disabled")
        return obj.disabled;
      else if (input_property=="draggable")
        return obj.draggable;
      else if (input_property=='id')
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function checkbox_delete(input_id) {
    if (document.getElementById("gamecheckbox_"+input_id))
      document.getElementById("gamecheckbox_"+input_id).parentNode.removeChild(document.getElementById("gamecheckbox_"+input_id));
  }

  function textarea_create(input_id,input_left,input_top,input_cols,input_rows,input_innerHTML,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gametextarea_"+input_id)) 
      document.getElementById("gametextarea_"+input_id).parentNode.removeChild(document.getElementById("gametextarea_"+input_id));
    var obj = document.createElement("textarea");
    obj.id = "gametextarea_"+input_id;
	obj.name = input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
	obj.cols = input_cols;
	obj.rows = input_rows;
	obj.innerHTML = input_innerHTML;
    obj.style.opacity = input_opacity;
    obj.style.zIndex = input_zindex;
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function textarea_set(input_id,input_property,input_value) {
    if (document.getElementById("gametextarea_"+input_id)) {
	  var obj = document.getElementById("gametextarea_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";	
      else if (input_property=="cols")
        obj.cols = input_value;
      else if (input_property=="rows")
        obj.rows = input_value;	  
      else if (input_property=="value")
        obj.value = input_value;
      else if (input_property=="innerHTML")
        obj.innerHTML = input_value; 	      
      else if (input_property=="readonly")
        obj.readonly = input_value;	  
      else if (input_property=="opacity")
        obj.style.opacity = input_value;    
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

  function textarea_get(input_id,input_property){
    if (document.getElementById("gametextarea_"+input_id)) {
	  var obj = document.getElementById("gametextarea_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="cols")
        return obj.cols;
      else if (input_property=="rows")
        return obj.rows;	  
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="innerHTML")
        return obj.innerHTML; 	      
      else if (input_property=="readonly")
        return obj.readonly;	   
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function textarea_delete(input_id) {
    if (document.getElementById("gametextarea_"+input_id))
      document.getElementById("gametextarea_"+input_id).parentNode.removeChild(document.getElementById("gametextarea_"+input_id));
  }

  function number_create(input_id,input_left,input_top,input_width,input_height,input_fontsize,input_max,input_min,input_step,input_value,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gamenumber_"+input_id)) 
      document.getElementById("gamenumber_"+input_id).parentNode.removeChild(document.getElementById("gamenumber_"+input_id));
    var obj = document.createElement('input');
    obj.type="number";
    obj.id = "gamenumber_"+input_id;
	obj.name = input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.width = input_width + 'px';
    obj.style.height = input_height + 'px';
    obj.style.fontSize = input_fontsize + "px";
    obj.max = input_max;
    obj.min = input_min;
    obj.step = input_step;
    obj.value = input_value;
    obj.style.opacity = input_opacity;
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

  function number_set(input_id,input_property,input_value) {
    if (document.getElementById("gamenumber_"+input_id)) {
	  var obj = document.getElementById("gamenumber_"+input_id);
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
      else if (input_property=="max")
        obj.max = input_value;      
      else if (input_property=="min")
        obj.min = input_value;      
      else if (input_property=="step")
        obj.step = input_value;      
      else if (input_property=="value")
        obj.value = input_value;  
      else if (input_property=="opacity")
        obj.style.opacity = input_value;
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

  function number_get(input_id,input_property){
    if (document.getElementById("gamenumber_"+input_id)) {
	  var obj = document.getElementById("gamenumber_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="max")
        return obj.max;
      else if (input_property=="min")
        return obj.min;
      else if (input_property=="step")
        return obj.step;
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;	  
    }
    else
      return "";
  }

  function number_delete(input_id) {
    if (document.getElementById("gamenumber_"+input_id))
      document.getElementById("gamenumber_"+input_id).parentNode.removeChild(document.getElementById("gamenumber_"+input_id));
  }      

  function date_create(input_id,input_left,input_top,input_max,input_min,input_value,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gamedate_"+input_id)) 
      document.getElementById("gamedate_"+input_id).parentNode.removeChild(document.getElementById("gamedate_"+input_id));
    var obj = document.createElement('input');
    obj.type="date";
    obj.id = "gamedate_"+input_id;
	obj.name = input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
	obj.max = date_format(input_max);
	obj.min = date_format(input_min);
    obj.value = date_format(input_value);
    obj.style.opacity = input_opacity;
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

  function date_format(input_date) {
    input_date = input_date.split("-");
	if (input_date.length==3)
	  return input_date[0]+(Number(input_date[1])<=9?"-0":"-")+Number(input_date[1])+(Number(input_date[2])<=9?"-0":"-")+Number(input_date[2]);
  }

  function date_set(input_id,input_property,input_value) {
    if (document.getElementById("gamedate_"+input_id)) {
	  var obj = document.getElementById("gamedate_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="max")
        obj.max = date_format(input_value);      
      else if (input_property=="min")
        obj.min = date_format(input_value);      
      else if (input_property=="value")
        obj.value = date_format(input_value);  
      else if (input_property=="opacity")
        obj.style.opacity = input_value;
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

  function date_get(input_id,input_property){
    if (document.getElementById("gamedate_"+input_id)) {
	  var obj = document.getElementById("gamedate_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="max")
        return obj.max;
      else if (input_property=="min")
        return obj.min;
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;	  
    }
    else
      return "";
  }

  function date_delete(input_id) {
    if (document.getElementById("gamedate_"+input_id))
      document.getElementById("gamedate_"+input_id).parentNode.removeChild(document.getElementById("gamedate_"+input_id));
  }

  function time_create(input_id,input_left,input_top,input_value,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gametime_"+input_id)) 
      document.getElementById("gametime_"+input_id).parentNode.removeChild(document.getElementById("gametime_"+input_id));
    var obj = document.createElement('input');
    obj.type="time";
    obj.id = "gametime_"+input_id;
	obj.name = input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.value = time_format(input_value);
    obj.style.opacity = input_opacity;
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

  function time_format(input_time) {
    input_time = input_time.split(":");
	if (input_time.length==3)
	  return (Number(input_time[0])<=9?"0":"")+Number(input_time[0])+(Number(input_time[1])<=9?":0":":")+Number(input_time[1])+(Number(input_time[2])<=9?":0":":")+Number(input_time[2]);
  }

  function time_set(input_id,input_property,input_value) {
    if (document.getElementById("gametime_"+input_id)) {
	  var obj = document.getElementById("gametime_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";    
      else if (input_property=="value")
        obj.value = time_format(input_value);  
      else if (input_property=="opacity")
        obj.style.opacity = input_value;
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

  function time_get(input_id,input_property){
    if (document.getElementById("gametime_"+input_id)) {
	  var obj = document.getElementById("gametime_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;	  
    }
    else
      return "";
  }

  function time_delete(input_id) {
    if (document.getElementById("gametime_"+input_id))
      document.getElementById("gametime_"+input_id).parentNode.removeChild(document.getElementById("gametime_"+input_id));
  }

  function datetime_create(input_id,input_left,input_top,input_value,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gamedatetime_"+input_id)) 
      document.getElementById("gamedatetime_"+input_id).parentNode.removeChild(document.getElementById("gamedatetime_"+input_id));
    var obj = document.createElement('input');
    obj.type="datetime-local";
    obj.id = "gamedatetime_"+input_id;
	obj.name = input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.value = datetime_format(input_value);
    obj.style.opacity = input_opacity;
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

  function datetime_format(input_datetime) {
    input_datetime = input_datetime.split("T");
	var input_date = input_datetime[0].trim().split("-");
	var input_time = input_datetime[1].trim().split(":");
	var d = "1900-01-01", t = "00:00";
	if (input_date.length==3) {
	  d = input_date[0]+(Number(input_date[1])<=9?"-0":"-")+Number(input_date[1])+(Number(input_date[2])<=9?"-0":"-")+Number(input_date[2]);
	}
	if (input_time.length==2) {
	  t = (Number(input_time[0])<=9?"0":"")+Number(input_time[0])+(Number(input_time[1])<=9?":0":":")+Number(input_time[1]);
	}
	return d + "T" + t;
  }

  function datetime_set(input_id,input_property,input_value) {
    if (document.getElementById("gamedatetime_"+input_id)) {
	  var obj = document.getElementById("gamedatetime_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";    
      else if (input_property=="value")
        obj.value = datetime_format(input_value);  
      else if (input_property=="opacity")
        obj.style.opacity = input_value;
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

  function datetime_get(input_id,input_property){
    if (document.getElementById("gamedatetime_"+input_id)) {
	  var obj = document.getElementById("gamedatetime_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;	  
    }
    else
      return "";
  }

  function datetime_delete(input_id) {
    if (document.getElementById("gamedatetime_"+input_id))
      document.getElementById("gamedatetime_"+input_id).parentNode.removeChild(document.getElementById("gamedatetime_"+input_id));
  }

  function progress_create(input_id,input_left,input_top,input_max,input_value,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gameprogress_"+input_id)) 
      document.getElementById("gameprogress_"+input_id).parentNode.removeChild(document.getElementById("gameprogress_"+input_id));
    var obj = document.createElement('progress');
    obj.id = "gameprogress_"+input_id;
	obj.name = input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
	obj.max = input_max;
    obj.value = input_value;
    obj.style.opacity = input_opacity;
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

  function progress_set(input_id,input_property,input_value) {
    if (document.getElementById("gameprogress_"+input_id)) {
	  var obj = document.getElementById("gameprogress_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="max")
        obj.max = input_value;  	  
      else if (input_property=="value")
        obj.value = input_value;  
      else if (input_property=="opacity")
        obj.style.opacity = input_value;
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

  function progress_get(input_id,input_property){
    if (document.getElementById("gameprogress_"+input_id)) {
	  var obj = document.getElementById("gameprogress_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="max")
        return obj.max;
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;	  
    }
    else
      return "";
  }

  function progress_delete(input_id) {
    if (document.getElementById("gameprogress_"+input_id))
      document.getElementById("gameprogress_"+input_id).parentNode.removeChild(document.getElementById("gameprogress_"+input_id));
  }

  function password_create(input_id,input_width,input_height,input_left,input_top,input_maxlength,input_value,input_background,input_color,input_fontSize,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gamepassword_"+input_id)) 
      document.getElementById("gamepassword_"+input_id).parentNode.removeChild(document.getElementById("gamepassword_"+input_id));
    var obj = document.createElement('input');
    obj.type="password";
    obj.id = "gamepassword_"+input_id;
	obj.name = input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.width = input_width + 'px';
    obj.style.height = input_height + 'px';
	obj.maxLength = input_maxlength;
    obj.value = input_value;
    obj.style.background = input_background;
    obj.style.color = input_color;
    obj.style.fontSize = input_fontSize + "px";
    obj.style.opacity = input_opacity;
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

  function password_set(input_id,input_property,input_value) {
    if (document.getElementById("gamepassword_"+input_id)) {
	  var obj = document.getElementById("gamepassword_"+input_id);
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="width")
        obj.style.width = input_value + "px";
      else if (input_property=="height")
        obj.style.height = input_value + "px";
      else if (input_property=="value")
        obj.value = input_value; 
      else if (input_property=="maxlength")
        obj.maxLength = input_value;  
      else if (input_property=="pattern")
        obj.pattern = input_value;  
      else if (input_property=="background")
        obj.style.background = input_value;
      else if (input_property=="color")
        obj.style.color = input_value;
      else if (input_property=="fontsize")
        obj.style.fontSize = input_value + "px";	    
      else if (input_property=="opacity")
        obj.style.opacity = input_value;        
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

  function password_get(input_id,input_property){
    if (document.getElementById("gamepassword_"+input_id)) {
	  var obj = document.getElementById("gamepassword_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="height")
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=="value")
        return obj.value;
      else if (input_property=="maxlength")
        return obj.maxLength;
      else if (input_property=="pattern")
        return obj.pattern;
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function password_delete(input_id) {
    if (document.getElementById("gamepassword_"+input_id))
      document.getElementById("gamepassword_"+input_id).parentNode.removeChild(document.getElementById("gamepassword_"+input_id));
  }

  function form_create(input_id,input_action,input_enctype,input_method,input_target) {
    if (document.getElementById("gameform_"+input_id)) 
      document.getElementById("gameform_"+input_id).parentNode.removeChild(document.getElementById("gameform_"+input_id));
    var obj = document.createElement('form');
    obj.id = "gameform_"+input_id;
	obj.name = input_id;
	obj.action = input_action;
    obj.enctype = input_enctype;
    obj.method = input_method;
	obj.acceptCharset = "UTF-8";
	if (!document.getElementById("gameiframe_"+input_target))
	  iframe_create(input_target, 300, 200, 0, 100, "1", "yes", '', '', 1, 999, true);
    obj.target = "gameiframe_"+input_target;
    document.body.appendChild(obj);
  }

  function form_set(input_id,input_property,input_value) {
    if (document.getElementById("gameform_"+input_id)) {
	  var obj = document.getElementById("gameform_"+input_id);
      if (input_property=="action")
        obj.action = input_value;
      else if (input_property=="target")
        obj.target = input_value;	    
    }
  }

  function form_get(input_id,input_property){
    if (document.getElementById("gameform_"+input_id)) {
	  var obj = document.getElementById("gameform_"+input_id);
      if (input_property=="action")
        return obj.action;		    
      else if (input_property=="target")
        return obj.target;
      else if (input_property=='id')
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function form_delete(input_id) {
    if (document.getElementById("gameform_"+input_id))
      document.getElementById("gameform_"+input_id).parentNode.removeChild(document.getElementById("gameform_"+input_id));
  }

  function form_insert(input_id,input_element,input_elementid) {
    if (document.getElementById("gameform_"+input_id)&&document.getElementById("game"+input_element+"_"+input_elementid))
		document.getElementById("gameform_"+input_id).appendChild(document.getElementById("game"+input_element+"_"+input_elementid));
      
  }

  function form_submit(input_id) {
    if (document.getElementById("gameform_"+input_id))
      document.getElementById("gameform_"+input_id).submit();
  }

  function head_add_viewport(input_initialscale,input_minimumscale,input_maximumscale,input_scalable) {
	var head = document.getElementsByTagName('head')[0];
	var meta = head.getElementsByTagName('meta');
	if (meta.length>0) {
		for (var i=0;i<meta.length;i++ )
		{
			if (meta[i].name=="viewport")
			{
				meta[i].content='width=device-width, initial-scale='+input_initialscale+', minimum-scale='+input_minimumscale+', maximum-scale='+input_maximumscale+', user-scalable='+input_scalable;
				return;
			}
		}
	}

	var meta_new = document.createElement('meta'); 
	meta_new.setAttribute('name', 'viewport'); 
	meta_new.setAttribute('content', 'width=device-width, initial-scale='+input_initialscale+', minimum-scale='+input_minimumscale+', maximum-scale='+input_maximumscale+', user-scalable='+input_scalable); 
	head.appendChild(meta_new);
  }

  function video_create(input_id,input_width,input_height,input_left,input_top,input_cam,input_src,input_autoplay,input_loop,input_muted,input_controls,input_preload,input_opacity,input_zindex,input_display) {
    if (document.getElementById("gamevideo_"+input_id)) 
      document.getElementById("gamevideo_"+input_id).parentNode.removeChild(document.getElementById("gamevideo_"+input_id));
    var obj = document.createElement('video');
    obj.id = "gamevideo_"+input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.width = input_width + 'px';
    obj.width = input_width;
    obj.style.height = input_height + 'px';
	obj.height = input_height;
	if (input_cam==true){
      navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user",          
		  width: input_width,
          height: input_height

        }
      })
      .then(stream => {
        obj.srcObject = stream
        obj.onloadedmetadata = () => {       
          obj.play();
        }
      })    
	}
	else
		obj.src = input_src;
    obj.autoplay = input_autoplay;
    obj.loop = input_loop;
    obj.muted = input_muted;
    obj.controls = input_controls;
	obj.preload = input_preload;
    obj.style.opacity = input_opacity;
    obj.style.zIndex = input_zindex;
    obj.crossOrigin = "anonymous";
    if (input_display==0)
      obj.style.display = "none";
    else
      obj.style.display = "block";
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function video_set(input_id,input_property,input_value) {
    if (document.getElementById("gamevideo_"+input_id)) {
      var obj = document.getElementById("gamevideo_"+input_id); 
      if (input_property=="left")
        obj.style.left = input_value + "px";
      else if (input_property=="top")
        obj.style.top = input_value + "px";
      else if (input_property=="width") {
        obj.style.width = input_value + "px";
		obj.width = input_value;
	  }
      else if (input_property=="height") {
        obj.style.height = input_value + "px";
		obj.height = input_value;
	  }
      else if (input_property=="src")
        obj.src = input_value;
      else if (input_property=="autoplay")
        obj.autoplay = input_value;
      else if (input_property=="loop")
        obj.loop = input_value; 
      else if (input_property=="muted")
        obj.muted = input_value;
      else if (input_property=="controls")
        obj.controls= input_value; 
      else if (input_property=="preload")
        obj.preload = input_value;
      else if (input_property=="opacity")
        obj.style.opacity = input_value; 
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

  function video_get(input_id,input_property){
    if (document.getElementById("gamevideo_"+input_id)) {
	  var obj = document.getElementById("gamevideo_"+input_id); 
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
      else if (input_property=="width")
        return Number(obj.style.width.replace(/px/ig,""));
      else if (input_property=="height")
        return Number(obj.style.height.replace(/px/ig,""));
      else if (input_property=="src")
        return obj.src;
      else if (input_property=="autoplay")
        return obj.autoplay;
      else if (input_property=="loop")
        return obj.loop;
      else if (input_property=="muted")
        return obj.muted;
      else if (input_property=="controls")
        return obj.controls;
      else if (input_property=="preload")
        return obj.preload;
      else if (input_property=="opacity")
        return Number(obj.style.opacity);
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
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function video_delete(input_id) {
    if (document.getElementById("gamevideo_"+input_id))
      document.getElementById("gamevideo_"+input_id).parentNode.removeChild(document.getElementById("gamevideo_"+input_id));
  }

  function video_base64(input_id) {
    if (document.getElementById(input_id)) {	
		var obj = document.getElementById(input_id);
		var canvas = document.createElement('canvas');
		canvas.id = 'tmp';
		canvas.style.position = "absolute";
		canvas.style.display = "none";
		document.body.appendChild(canvas);
		canvas.setAttribute("width", obj.width);
		canvas.setAttribute("height", obj.height);
		var context = canvas.getContext("2d");
		var base64 = "";
		try {
			context.drawImage(obj,0,0,obj.width,obj.height);
			base64 = canvas.toDataURL('image/jpeg');
			var head = base64.substring(0, base64.indexOf(",")+1);
			var data = base64.substring(base64.indexOf(",")+1);
			data = encodeURIComponent(data);
			base64 = head+data;
		}
		catch(e) {
			//console.log(e);
		}
		document.getElementById("tmp").parentNode.removeChild(document.getElementById("tmp"));
		return base64;
	}
  }
  
  function video_base64_spreadsheet(input_id, mySpreadsheet, mySpreadsheetName, myCellCol, myCellRow, myCellColHeight, myFileFormat, myScriptUrl) {
    if (document.getElementById(input_id)) {	
		var obj = document.getElementById(input_id);
		var canvas = document.createElement('canvas');
		canvas.id = 'tmp';
		canvas.style.position = "absolute";
		canvas.style.display = "none";
		document.body.appendChild(canvas);
		canvas.setAttribute("width", obj.width);
		canvas.setAttribute("height", obj.height);
		var context = canvas.getContext("2d");
		try {
			context.drawImage(obj,0,0,obj.width,obj.height);
			var myFile = canvas.toDataURL('image/jpeg');
			var head = myFile.substring(0, myFile.indexOf(",")+1);
			var data = myFile.substring(myFile.indexOf(",")+1);
			data = encodeURIComponent(data);
			myFile = head+data;

			$.ajax({
				"type": "POST",
				"dataType": "json",
				"headers": { 
				  "Content-Type": "application/x-www-form-urlencoded"
				},				
				"url": myScriptUrl,
				"data": {
							"mySpreadsheet":mySpreadsheet,
							"mySpreadsheetName":mySpreadsheetName,
							"myCellCol":myCellCol,
							"myCellRow":myCellRow,
							"myCellColHeight":myCellColHeight,
							"myFile":myFile,
							"myFileFormat":myFileFormat					
						},
				success: function(jsonp)
				{
				  console.log(jsonp);
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
				  //console.log(errorThrown);
				}
			 });
		}
		catch(e) {
			console.log(e);
		}
		document.getElementById("tmp").parentNode.removeChild(document.getElementById("tmp"));
	}
  }
	
  function video_base64_spreadsheet_new(input_id, spreadsheeturl, spreadsheetname, datetime, position, column, row, myScriptUrl) {
    if (document.getElementById(input_id)) {	
		var obj = document.getElementById(input_id);
		var canvas = document.createElement('canvas');
		canvas.id = 'tmp';
		canvas.style.position = "absolute";
		canvas.style.display = "none";
		document.body.appendChild(canvas);
		canvas.setAttribute("width", obj.width);
		canvas.setAttribute("height", obj.height);
		var context = canvas.getContext("2d");
		try {
			context.drawImage(obj,0,0,obj.width,obj.height);
			var myFile = canvas.toDataURL('image/jpeg');

			$.ajax({
				"type": "POST",
				"dataType": "json",
				"headers": { 
				  "Content-Type": "application/x-www-form-urlencoded"
				},				
				"url": myScriptUrl,
				"data": {
							"spreadsheeturl":spreadsheeturl,
							"spreadsheetname":spreadsheetname,
							"datetime":datetime,    
							"position":position,  
							"column":column,
							"row":row,
							"file":myFile
						},
				success: function(jsonp)
				{
				  console.log(jsonp);
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
				  //console.log(errorThrown);
				}
			 });
		}
		catch(e) {
			console.log(e);
		}
		document.getElementById("tmp").parentNode.removeChild(document.getElementById("tmp"));
	}
  }	
	
  function spreadsheet_function(spreadsheeturl, spreadsheetname, func, text, row, col, myScriptUrl) {
	$.ajax({
		"type": "POST",
		"dataType": "json",
		"headers": { 
		  "Content-Type": "application/x-www-form-urlencoded"
		},				
		"url": myScriptUrl,
		"data": {
					"spreadsheeturl":spreadsheeturl,
					"spreadsheetname":spreadsheetname,
					"func":func,    
					"text":text,  
					"row":row,
					"col":col
				},
		success: function(jsonp)
		{
		  console.log(jsonp);
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
		  //console.log(errorThrown);
		}
	 });
  }		
  
  function video_base64_drive(input_id, myFoldername, myFilename, myScriptUrl) {
    if (document.getElementById(input_id)) {	
		var obj = document.getElementById(input_id);
		var canvas = document.createElement('canvas');
		canvas.id = 'tmp';
		canvas.style.position = "absolute";
		canvas.style.display = "none";
		document.body.appendChild(canvas);
		canvas.setAttribute("width", obj.width);
		canvas.setAttribute("height", obj.height);
		var context = canvas.getContext("2d");
		try {
			context.drawImage(obj,0,0,obj.width,obj.height);
			var myFile = canvas.toDataURL('image/jpeg');
			var head = myFile.substring(0, myFile.indexOf(",")+1);
			var data = myFile.substring(myFile.indexOf(",")+1);
			data = encodeURIComponent(data);
			myFile = head+data;		

			$.ajax({
				"type": "POST",
				"dataType": "json",
				"headers": { 
				  "Content-Type": "application/x-www-form-urlencoded"
				},				
				"url": myScriptUrl,
				"data": {
							"myFoldername":myFoldername,
							"myFilename":myFilename,
							"myFile":myFile					
						},
				success: function(jsonp)
				{
				  console.log(jsonp);
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
				  //console.log(errorThrown);
				}
			 });
		}
		catch(e) {
			console.log(e);
		}
		document.getElementById("tmp").parentNode.removeChild(document.getElementById("tmp"));
	}
  }
  
  function video_base64_email(input_id, myRecipient, mySubject, myScriptUrl) {
    if (document.getElementById(input_id)) {	
		var obj = document.getElementById(input_id);
		var canvas = document.createElement('canvas');
		canvas.id = 'tmp';
		canvas.style.position = "absolute";
		canvas.style.display = "none";
		document.body.appendChild(canvas);
		canvas.setAttribute("width", obj.width);
		canvas.setAttribute("height", obj.height);
		var context = canvas.getContext("2d");
		try {
			context.drawImage(obj,0,0,obj.width,obj.height);
			var myFile = canvas.toDataURL('image/jpeg');
			var head = myFile.substring(0, myFile.indexOf(",")+1);
			var data = myFile.substring(myFile.indexOf(",")+1);
			data = encodeURIComponent(data);
			myFile = head+data;

			$.ajax({
				"type": "POST",
				"dataType": "json",
				"headers": { 
				  "Content-Type": "application/x-www-form-urlencoded"
				},				
				"url": myScriptUrl,
				"data": {
							"myRecipient":myRecipient,
							"mySubject":mySubject,
							"myFile":myFile					
						},
				success: function(jsonp)
				{
				  console.log(jsonp);
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
				  //console.log(errorThrown);
				}
			 });
		}
		catch(e) {
			console.log(e);
		}
		document.getElementById("tmp").parentNode.removeChild(document.getElementById("tmp"));
	}
  }
  
  function ajax_getdata_json(input_json, input_index, input_fieldname) {
	  if(!input_json) return "";
	  var json = eval(input_json);
	  var data = "";
	  var j=-1;
	  for (var i in json) {
		j++;
		if (j==input_index||input_index==-1) {
			if (json[i][input_fieldname]) {
			  console.log(json[i][input_fieldname]);
			  data = json[i][input_fieldname];
			}
		}
	  }
	  return data;
  }
  
  function ajax_getdata_json_count(input_json) {
	  if(!input_json) return "";
	  var json = eval(input_json);
	  var count = 0;
	  for (var i in json) {
		count++;
	  }
	  return count;
  }
  
  function fontText(input_size, input_color, input_face, input_text) {
	  return '<font size="' + input_size + '" color="' + input_color + '" face="' + input_face + '">' + input_text + '</font>';
  }
  
  function fontB(input_text) {
	  return '<b>' + input_text + '</b>';
  }
  
  function fontI(input_text) {
	  return '<I>' + input_text + '</I>';
  }
  
  function fontU(input_text) {
	  return '<u>' + input_text + '</u>';
  }
  
  function fontSup(input_text) {
	  return '<sup>' + input_text + '</sup>';
  }
  
  function fontSub(input_text) {
	  return '<sub>' + input_text + '</sub>';
  }
  
  function fontEm(input_text) {
	  return '<em>' + input_text + '</em>';
  }
  
  function fontStrong(input_text) {
	  return '<strong>' + input_text + '</strong>';
  }
  
  function fontCode(input_text) {
	  return '<code>' + input_text + '</code>';
  }
  
  function outputfile_text(input_text) {
	var text = input_text.replace(/<br>/g,"\n");
	text = text.replace(/\\n/g,"\n");
	text = text.replace(/<br\/>/g,"\n");
	
	var link = document.createElement('a');
	link.download="data.txt";
	link.href="data:application/octet-stream;utf-8," + encodeURIComponent(text);
	document.body.appendChild(link);
	link.click();
	link.remove();	
  }
  
  function outputfile_jpg(input_id) {
	const vedio = document.getElementById("gamevideo_"+input_id);
	const canvas = document.createElement('canvas')
	canvas.width = vedio.width;
	canvas.height = vedio.height;
	const ctx = canvas.getContext('2d')
	ctx.drawImage(vedio, 0, 0, vedio.width, vedio.height);
	const dataURL = canvas.toDataURL('image/jpeg', 1);
	
	const link = document.createElement('a');
	link.download = '1.jpg';
	link.href = dataURL;
	link.click();
	link.remove();
	canvas.remove();
  }  
  
  function binarytobase64(input_array) {
    const content = new Uint8Array(input_array);
	return btoa(String.fromCharCode.apply(null, content));
  }

  function span_create(input_id,input_left,input_top,input_fontSize,input_innerHTML,input_zindex) {
    if (document.getElementById("gamespan_"+input_id)) 
      document.getElementById("gamespan_"+input_id).parentNode.removeChild(document.getElementById("gamespan_"+input_id));
    var obj = document.createElement('span');
    obj.id = "gamespan_"+input_id;
    obj.style.position = "absolute";
    obj.style.left = input_left + 'px';
    obj.style.top = input_top + 'px';
    obj.style.fontSize = input_fontSize + "px";
    obj.innerHTML = input_innerHTML;
    obj.style.zIndex = input_zindex;
    obj.draggable="true";
    obj.setAttribute("onclick", "javascript:onclickid_set(this);");
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj);
  }

  function span_set(input_id,input_property,input_value) {
    if (document.getElementById("gamespan_"+input_id)) {
	  var obj = document.getElementById("gamespan_"+input_id);
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
      else if (input_property=="draggable")
        obj.draggable = input_value;
      else if (input_property=="style")
        obj.style = input_value;	    
    }
  }

  function span_get(input_id,input_property){
    if (document.getElementById("gamespan_"+input_id)) {
	  var obj = document.getElementById("gamespan_"+input_id);
      if (input_property=="left")
        return Number(obj.style.left.replace(/px/ig,""));
      else if (input_property=="top")
        return Number(obj.style.top.replace(/px/ig,""));
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
      else if (input_property=="draggable")
        return obj.draggable;
      else if (input_property=='id')
        return obj.id;
      else if (input_property=='name')
        return obj.name;
    }
    else
      return "";
  }

  function span_delete(input_id) {
    if (document.getElementById("gamespan_"+input_id))
      document.getElementById("gamespan_"+input_id).parentNode.removeChild(document.getElementById("gamespan_"+input_id));
  }
  
  function include_file(type, position, url) {
	  if (type=="js") {
		  if (position=="here") {
			var s = document.createElement("script");
			s.type = "text/javascript";
			s.src = url;
			document.body.append(s);
		  } if (position=="header") {
			var s = document.createElement("script");
			s.type = "text/javascript";
			s.src = url;
			document.getElementsByTagName('head')[0].append(s);
		  }
	  }
	  else if (type=="css") {
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = url;
		link.media = 'all';
		document.getElementsByTagName('head')[0].appendChild(link); 
	  }
  }
	
  function getDatetime(now, type) {
	  if (!now)
	      now = new Date();
	  if (type=="datetime")
		  return now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate()+" "+("0" + now.getHours()).slice(-2)+":"+("0" + now.getMinutes()).slice(-2)+":"+("0" + now.getSeconds()).slice(-2);
	  else if (type=="date")
		  return now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate();
	  else if (type=="time")
		  return ("0" + now.getHours()).slice(-2)+":"+("0" + now.getMinutes()).slice(-2)+":"+("0" + now.getSeconds()).slice(-2);
	  else if (type=="year")
		  return now.getFullYear();
	  else if (type=="month")
		  return (now.getMonth()+1);
	  else if (type=="day")
		  return now.getDate();
	  else if (type=="week")
		  return now.getDay()		  
	  else if (type=="hour")
		  return now.getHours();
	  else if (type=="minute")
		  return now.getMinutes();
	  else if (type=="second")
		  return now.getSeconds();
  }
  
  function setDatetime(years, months, days, hours, minutes, seconds) {
	  var now = new Date();
	  now.setFullYear(now.getFullYear() + years);
	  now.setMonth(now.getMonth() + months);	  
	  now.setDate(now.getDate() + days);
	  now.setHours(now.getHours() + hours);
	  now.setMinutes(now.getMinutes() + minutes);
	  now.setSeconds(now.getSeconds() + seconds);
	  return now;
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
  window.table_insert_row = table_insert_row; 
  window.table_insert_col = table_insert_col;
  window.table_td_insert_element = table_td_insert_element;
  window.table_td_insert_element_function_get = table_td_insert_element_function_get;
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
  window.canvas_capturevideo = canvas_capturevideo;
  window.canvas_getimagedata = canvas_getimagedata;
  window.canvas_setimagedata = canvas_setimagedata;
  window.image_create = image_create;
  window.image_create_stream = image_create_stream;  
  window.image_set = image_set;
  window.image_get = image_get;
  window.image_delete = image_delete;
  window.elements_collision = elements_collision;
  window.elements_collision_color = elements_collision_color;
  window.point_in_element = point_in_element;
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
  window.colorpicker_create = colorpicker_create;
  window.colorpicker_set = colorpicker_set;
  window.colorpicker_get = colorpicker_get;
  window.colorpicker_delete = colorpicker_delete;
  window.select_create = select_create;
  window.select_set = select_set;
  window.select_get = select_get;
  window.select_delete = select_delete;
  window.range_create = range_create;
  window.range_set = range_set;
  window.range_get = range_get;
  window.range_delete = range_delete;
  window.text_create = text_create;
  window.text_set = text_set;
  window.text_get = text_get;
  window.text_delete = text_delete;
  window.div_create = div_create;
  window.div_set = div_set;
  window.div_get = div_get;
  window.div_delete = div_delete;	
  window.HextoRgb = HextoRgb;
  window.body_set = body_set;
  window.position_distance = position_distance;
  window.position_angle = position_angle;	
  window.iframe_create = iframe_create;
  window.iframe_set = iframe_set;
  window.iframe_get = iframe_get;
  window.iframe_delete = iframe_delete;
  window.a_create = a_create;
  window.a_set = a_set;
  window.a_get = a_get;
  window.a_delete = a_delete;
  window.radio_create = radio_create;
  window.radio_set = radio_set;
  window.radio_get = radio_get;
  window.radio_delete = radio_delete;
  window.radio_name_get = radio_name_get;
  window.checkbox_create = checkbox_create;
  window.checkbox_set = checkbox_set;
  window.checkbox_get = checkbox_get;
  window.checkbox_delete = checkbox_delete;
  window.textarea_create = textarea_create;
  window.textarea_set = textarea_set;
  window.textarea_get = textarea_get;
  window.textarea_delete = textarea_delete;
  window.number_create = number_create;
  window.number_set = number_set;
  window.number_get = number_get;
  window.number_delete = number_delete;
  window.date_create = date_create;
  window.date_set = date_set;
  window.date_get = date_get;
  window.date_delete = date_delete;
  window.date_format = date_format;
  window.time_create = time_create;
  window.time_set = time_set;
  window.time_get = time_get;
  window.time_delete = time_delete;
  window.time_format = time_format;
  window.datetime_create = datetime_create;
  window.datetime_set = datetime_set;
  window.datetime_get = datetime_get;
  window.datetime_delete = datetime_delete;
  window.datetime_format = datetime_format;
  window.progress_create = progress_create;
  window.progress_set = progress_set;
  window.progress_get = progress_get;
  window.progress_delete = progress_delete;
  window.password_create = password_create;
  window.password_set = password_set;
  window.password_get = password_get;
  window.password_delete = password_delete;
  window.form_create = form_create;
  window.form_set = form_set;
  window.form_get = form_get;
  window.form_delete = form_delete;
  window.form_insert = form_insert;
  window.form_submit = form_submit;
  window.head_add_viewport = head_add_viewport;
  window.video_create = video_create;
  window.video_set = video_set;
  window.video_get = video_get;
  window.video_delete = video_delete;
  window.video_base64 = video_base64;
  window.ajax_getdata_json = ajax_getdata_json;
  window.ajax_getdata_json_count = ajax_getdata_json_count;
  window.video_base64_spreadsheet = video_base64_spreadsheet;
  window.video_base64_spreadsheet_new = video_base64_spreadsheet_new;	
  window.spreadsheet_function = spreadsheet_function;
  window.video_base64_drive = video_base64_drive;
  window.video_base64_email = video_base64_email;
  window.fontText = fontText;
  window.fontB = fontB;
  window.fontI = fontI;
  window.fontU = fontU;
  window.fontSup = fontSup;
  window.fontSub = fontSub;
  window.fontEm = fontEm;
  window.fontStrong = fontStrong;
  window.fontCode = fontCode;
  window.outputfile_text = outputfile_text; 
  window.outputfile_jpg = outputfile_jpg;
  window.binarytobase64 = binarytobase64;
  window.span_create = span_create;
  window.span_set = span_set;
  window.span_get = span_get;
  window.span_delete = span_delete;
  window.include_file = include_file;
  window.getDatetime = getDatetime;  
  window.setDatetime = setDatetime; 	
	
}(window, window.document));
