// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var webusb_Response=[];

function webusb_sendCommand(cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  Response=[];
  document.getElementById("text").value = "?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9;
}

function webusb_getResponse() {
  if (document.getElementById("text").value != "") {
    json = eval(document.getElementById("text").value);
    //console.log(json);
    for (var i=0;i<json.length;i++) {
      webusb_Response.push(json[i]["data"]+"");
    }
   
   var res = webusb_Response;
   webusb_Response=[];
   return res;
  }
  else
    return [];
}

function webusb_clearData() {
 webusb_Response=[];
}
