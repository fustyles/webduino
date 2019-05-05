// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';  
  
  function DemoExpansion_set(input_id,input_property,input_value) {

    var obj = document.getElementById(input_id);
    if (!obj) {
      var obj = document.getElementsByClassName(input_id)[0]; 
    }
    if (!obj) return;
    
    if (input_property=="text")
      obj.text = input_value;    
    else if (input_property=="value")
      obj.value = input_value;
    else if (input_property=="innerHTML")
      obj.innerHTML = input_value;       
    else if (input_property=="innerText")
      obj.innerText = input_value;    
    else if (input_property=="textContent")
      obj.textContent = input_value;   
    else if (input_property=="left")
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
    else {
      if (obj.style[input_property])
        obj.style[input_property] = input_value;	    
      else if (obj[input_property])
        obj[input_property] = input_value;
    }
  }  
  
  function createDemoText() {
    if (!document.getElementById("demo-area-01-show")) {
        var div = document.createElement('div');
        div.id = "demo-area-01-show";
        div.style.zIndex = 9999;   
        div.style.display = 'block';
        div.innerHTML = "123";
        document.body.insertBefore(div, document.body.firstChild);
    }
  }  
 
  window.DemoExpansion_set = DemoExpansion_set;
  window.createDemoText = createDemoText;

}(window, window.document));
