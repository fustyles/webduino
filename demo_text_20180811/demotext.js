// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  var obj = "";
  function createDemoText(input_id) {
	console.log(input_id);
	obj = "test";
	if (document.getElementsByClassName(input_id))
		obj = document.getElementsByClassName(input_id)[0];
	else if (document.getElementById(input_id)) 
		obj = document.getElementById(input_id);
	else {
		if (!document.getElementById("demo-area-01-show")) {
			var div = document.createElement('div');
			div.id = "demo-area-01-show";
			div.style.zIndex = 999;   
			div.style.display = 'block';
			div.innerHTML = "123";
			document.body.insertBefore(div, document.body.firstChild);
			obj = div;
		} 
		else
			obj = document.getElementById("demo-area-01-show");
	}
	console.log(obj);
  }
  
  function DemoText_set(input_property,input_value) {
    if (!obj) return;
	  
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
    else if (input_property=="innerTEXT")
      obj.innerTEXT = input_value;   
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
  }  
 
  window.createDemoText = createDemoText;
  window.DemoText_set = DemoText_set;

}(window, window.document));
