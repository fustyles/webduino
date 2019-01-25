// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

function esp8266_system(cmd,str1,str2,str3) {
  return "?"+cmd+"="+str1+";"+str2+";"+str3;
}

function esp8266_car(cmd,str1,str2,str3,str4,str5,str6,str7,str8) {
  return "?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8;
}

function esp8266_custom(cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  return "?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9;
}
