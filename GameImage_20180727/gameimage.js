// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function image_create(input_id,input_url,input_width,input_height,input_left,input_top,input_zindex,input_display) {
    if (document.getElementById("img_"+input_id))
    {
      document.getElementById("img_"+input_id).src = input_url;
      document.getElementById("img_"+input_id).style.width = input_width + 'px';
      document.getElementById("img_"+input_id).style.height = input_height + 'px';
      document.getElementById("img_"+input_id).style.left = input_left + 'px';
      document.getElementById("img_"+input_id).style.top = input_top + 'px';
      document.getElementById("img_"+input_id).style.zIndex = input_zindex;
      if (input_display==false)
        document.getElementById("img_"+input_id).style.display = "none";
      else
        document.getElementById("img_"+input_id).style.display = "block";
    }
    else
    {
      var img = document.createElement('img');
      img.style.position = "absolute";
      img.id = "img_"+input_id;
      img.src = input_url;
      img.style.width = input_width + 'px';
      img.style.height = input_height + 'px';
      img.style.left = input_left + 'px';
      img.style.top = input_top + 'px';
      img.style.zIndex = input_zindex;
      if (input_display==false)
        img.style.display = "none";
      else
        img.style.display = "block";
      
      document.body.appendChild(img);
    }
  }
  
  function image_set(input_id,input_property,input_value) {
    if (document.getElementById("img_"+input_id))
    {
      if (input_property=='url')
        document.getElementById("img_"+input_id).src = input_value;
      else if (input_property=='width')
        document.getElementById("img_"+input_id).style.width = input_value + 'px';
      else if (input_property=='height')
        document.getElementById("img_"+input_id).style.height = input_value + 'px';
      else if (input_property=='left')
        document.getElementById("img_"+input_id).style.left = input_value + 'px';
      else if (input_property=='top')
        document.getElementById("img_"+input_id).style.top = input_value + 'px';
      else if (input_property=='zindex')
        document.getElementById("img_"+input_id).style.zIndex = input_value;
      else if (input_property=='display')
      {
        if (input_value==false)
          document.getElementById("img_"+input_id).style.display = "none";
        else
          document.getElementById("img_"+input_id).style.display = "block";
      }
    }
  }    
  
  function image_get(input_id,input_property) {
    if (input_property=='id')
    {
      if (document.getElementById("img_"+input_id))
        return 1;
      else
        return 0;
    }
    if (document.getElementById("img_"+input_id))
    {
      if (input_property=='url')
        return document.getElementById("img_"+input_id).src;
      else if (input_property=='width')
        return Number(document.getElementById("img_"+input_id).style.width.replace(/px/ig,""));
      else if (input_property=='height')
        return Number(document.getElementById("img_"+input_id).style.height.replace(/px/ig,""));
      else if (input_property=='left')
        return Number(document.getElementById("img_"+input_id).style.left.replace(/px/ig,""));
      else if (input_property=='top')
        return Number(document.getElementById("img_"+input_id).style.top.replace(/px/ig,""));
      else if (input_property=='zindex')
        return Number(document.getElementById("img_"+input_id).style.zIndex);
      else if (input_property=='display')
      {
        if (document.getElementById("img_"+input_id).style.display=="block")
          return 1;
        else
          return 0;  
      }
    }
    else
      return "";    
  }  
  
  function image_delete(input_id) {
    if (document.getElementById("img_"+input_id))
    {
      document.body.removeChild(document.getElementById("img_"+input_id));
    }  
  }   
  
  function image_collision(input_id1,input_id2) {
    if ((document.getElementById("img_"+input_id1))&&(document.getElementById("img_"+input_id2)))
    {
      var img1 = document.getElementById("img_"+input_id1).style;
      var img2 = document.getElementById("img_"+input_id2).style;
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
  
  window.image_create = image_create;
  window.image_set = image_set;
  window.image_get = image_get;
  window.image_delete = image_delete;
  window.image_collision = image_collision;

}(window, window.document));
