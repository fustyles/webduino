   function body_set(input_property,input_value) {
    if (input_property=="backgroundColor")
      document.body.style.backgroundColor = input_value;
    else if (input_property=="backgroundImage") 
      document.body.style.backgroundImage = "url('"+input_value+"')";
    else if (input_property=="overflow") 
      document.body.style.overflow = input_value;      
  }
