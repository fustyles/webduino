// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var ThingSpeak_response=[];
var ThingSpeak_getState = false;

function ThingSpeak_update(key,field1,field2,field3,field4,field5,field6,field7,field8) {

  var input_url ="https://api.thingspeak.com/update";
  var data = $.ajax({
      "type": "POST",
      "dataType": "html",
      "url": input_url,
      "data":{
        "api_key": key,
        "created_at": "DATETIME_STAMP",
        "field1": field1, 
        "field2": field2, 
        "field3": field3, 
        "field4": field4, 
        "field5": field5, 
        "field6": field6, 
        "field7": field7, 
        "field8": field8,
      },
      success: function(html)
      {
        console.log(html);
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });
}

function ThingSpeak_read(kind,key,index,count) {
  if (kind==1)
    var url ="https://api.thingspeak.com/channels/"+key+"/feeds.json?results="+count;
  else if (kind==2)
    var url ="https://api.thingspeak.com/channels/"+key+"/fields/"+count+".json?results="+count;
  else if (kind==3)
    var url ="https://api.thingspeak.com/channels/"+key+"/status.json";

  ThingSpeak_response=[];
  var data = $.ajax({
      "type": "POST",
      "dataType": "jsonp",
      "url": url,
      success: function(json)
      {
        json = eval(json.feeds);
        console.log(json);
        ThingSpeak_getState = true;
        for (var i=0;i<json.length;i++) {
          ThingSpeak_response.push(json[i]+"");
        }
        ThingSpeak_getState = false;
        console.log(ThingSpeak_response);
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });  
}

function ThingSpeak_getResponse() {
 if (ThingSpeak_getState == false) {
   var res = ThingSpeak_response;
   ThingSpeak_response=[];
   return res;
  }
  else
    return [];
}

function ThingSpeak_clearResponse() {
 ThingSpeak_response=[];
}
