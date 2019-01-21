   function body_set(input_property,input_value) {
    if (input_property=="backgroundColor")
      document.body.style.backgroundColor = input_value;
    else if (input_property=="backgroundImage") 
      document.body.style.backgroundImage = "url('"+input_value+"')";
    else if (input_property=="overflow") 
      document.body.style.overflow = input_value; 
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
