// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var ThingSpeak_Response=[];
var ThingSpeak_getstate = false;

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

  ThingSpeak_Response=[];
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": url,
      success: function(json)
      {
        json = eval(json.feeds);
        console.log(json);
        ThingSpeak_getstate = true;
        for (var i=0;i<json.length;i++) {
          ThingSpeak_Response.push(json[i]+"");
        }
        ThingSpeak_getstate = false;
        console.log(ThingSpeak_Response);
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });  
}

function ThingSpeak_getResponse() {
 if (ThingSpeak_getstate == false) {
   var res = Response;
   Response=[];
   return res;
  }
  else
    return [];
}
