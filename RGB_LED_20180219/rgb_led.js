// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  
  function funRGB_LED(pin_red,value_red,pin_green,value_green,pin_blue,value_blue)
  {
    console.log(pin_red+','+value_red+','+pin_green+','+value_green+','+pin_blue+','+value_blue);
  }
    
  window.funRGB_LED = funRGB_LED;
  
}(window, window.document));
