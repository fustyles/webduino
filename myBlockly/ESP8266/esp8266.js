// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  function uartcar(cmd,str1,str2,str3,str4,str5,str6,str7,str8)
  {
    return "?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8;
  }
  
  function uartsystem(cmd,str1,str2,str3)
  {
    return "?"+cmd+"="+str1+";"+str2+";"+str3;
  }
  
  function uartcustom(cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9)
  {
    return "?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9;
  }
  
  window.uartcar = uartcar;
  window.uartsystem = uartsystem;
  window.uartcustom = uartcustom;
  
}(window, window.document));
