  function showtext(input_size, input_color, input_text){
    document.getElementById("showText").style.fontSize = input_size+"px";
    document.getElementById("showText").style.color = input_color.replace(/%23/g,"#");
    document.getElementById("showText").innerHTML = input_text;
  }
