// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  var obj_demo = null;
  function createDemoText(input_id) {
	if (document.getElementsByClassName(input_id))
		obj_demo = document.getElementsByClassName(input_id)[0];
	else if (document.getElementById(input_id)) 
		obj_demo = document.getElementById(input_id);
	else {
	    obj_demo = document.getElementById("demo-area-01-show");
	    if (obj_demo=== null||obj_demo!== undefined) {
		obj_demo = document.createElement('div');
		obj_demo.id = "demo-area-01-show";
		obj_demo.style.zIndex = 99999;   
		obj_demo.style.display = 'block';
		obj_demo.innerHTML = "123";
		document.body.insertBefore(div, document.body.firstChild);
	    }
	}
	console.log(obj_demo);
  }
  
  function DemoText_set(input_property,input_value) {
    if (!obj_demo) return;
	  
    if (input_property=="left")
      obj_demo.style.left = input_value + "px";
    else if (input_property=="top")
      obj_demo.style.top = input_value + "px";
    else if (input_property=="width")
      obj_demo.style.width = input_value + "px";
    else if (input_property=="height")
      obj_demo.style.height = input_value + "px";
    else if (input_property=="borderstyle")
      obj_demo.style.borderStyle = input_value;
    else if (input_property=="borderwidth")
      obj_demo.style.borderWidth = input_value + "px";
    else if (input_property=="bordercolor")
      obj_demo.style.borderColor = input_value; 
    else if (input_property=="borderradius") {
      if (input_value.toString().toLowerCase().indexOf("px")==-1)
        obj_demo.style.borderRadius = input_value + "px";
      else
        obj_demo.style.borderRadius = input_value;
    }
    else if (input_property=="background")
      obj_demo.style.background = input_value;
    else if (input_property=="color")
      obj_demo.style.color = input_value;
    else if (input_property=="fontsize")
      obj_demo.style.fontSize = input_value + "px";	    
    else if (input_property=="opacity")
      obj_demo.style.opacity = input_value;    
    else if (input_property=="innerHTML")
      obj_demo.innerHTML = input_value; 
    else if (input_property=="innerTEXT")
      obj_demo.innerTEXT = input_value;   
    else if (input_property=="zindex")
      obj_demo.style.zIndex = input_value;
    else if (input_property=="display"){ 
      if (input_value==1)
        obj_demo.style.display = "block";    
      else if (input_value==0)
        obj_demo.style.display = "none";
    }
    else if (input_property=="position")
      obj_demo.style.position = input_value;		    
    else if (input_property=="disabled")
      obj_demo.disabled = input_value;
    else if (input_property=="draggable")
      obj_demo.draggable = input_value;		
  }  
 
  window.createDemoText = createDemoText;
  window.DemoText_set = DemoText_set;

}(window, window.document));
