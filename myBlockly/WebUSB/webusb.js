// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var webusb_Response=[];

function webusb_sendCommand(cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  document.getElementById("command").value = "?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9;
}

function webusb_getResponse() {
  webusb_Response=[];
  if (document.getElementById("response")) {
    if (document.getElementById("response").value) {
      var response = document.getElementById("response").value;
      document.getElementById("response").value = "";
    }
    else {
      var response = document.getElementById("response").innerHTML;
      document.getElementById("response").innerHTML = "";
    }
    console.log(response);
    if (response!= "") {
      if (response.indexOf("[{")!=-1) {
        json = eval(response);
        for (var i=0;i<json.length;i++)
          webusb_Response.push(json[i]["data"]);
      } 
      var res = webusb_Response;
      webusb_Response=[];
      return res;
    }
    else
      return [];
  }
  else
    return [];  
}

function webusb_clearData() {
  document.getElementById("response").innerHTML = "";
  webusb_Response=[];
}

function webusb_sendCustomCommand(cmd) {
  document.getElementById("command").value = cmd;
}
