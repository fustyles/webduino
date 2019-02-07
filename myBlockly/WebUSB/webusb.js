// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var webusb_Response=[];

function webusb_sendCommand(cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  document.getElementById("text").value = "?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9;
}

function webusb_getResponse() {
  webusb_Response=[];
  if (document.getElementById("status").innerHTML != "") {
    if (document.getElementById("status").innerHTML.indexOf("[{")!=-1) {
      json = eval(document.getElementById("status").innerHTML);
      //console.log(json);
      for (var i=0;i<json.length;i++) {
        webusb_Response.push(json[i]["data"]);
      }
      document.getElementById("status").innerHTML = " ";
    } else {
      webusb_Response.push(null);
    }
    
    var res = webusb_Response;
    webusb_Response=[];
    return res;
  }
  else
    return [];
}

function webusb_clearData() {
  document.getElementById("status").innerHTML = " ";
  webusb_Response=[];
}

function webusb_sendCustomCommand(cmd) {
  document.getElementById("text").value = cmd;
}
