// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  var ThingSpeak_count = 0;
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
          console.log(errorThrown);
        }
     });
  }
  
  function ThingSpeak_read(kind,key,index,count,api_key) {
    if (kind==1)
      var url ="https://api.thingspeak.com/channels/"+key+"/feeds.json?results="+count+"&api_key="+api_key;
    else if (kind==2)
      var url ="https://api.thingspeak.com/channels/"+key+"/fields/"+index+".json?results="+count+"&api_key="+api_key;
    else if (kind==3)
      var url ="https://api.thingspeak.com/channels/"+key+"/status.json?api_key="+api_key;
    console.log(url);
    
    ThingSpeak_response = [];
    ThingSpeak_count = 0;
    var data = $.ajax({
        "type": "POST",
        "dataType": "jsonp",
        "url": url,
        success: function(json)
        {
          console.log(JSON.stringify(json));
          json = eval(json.feeds);
          ThingSpeak_getState = true;
          ThingSpeak_count = json.length;
          for (var i=0;i<json.length;i++) {
            var Feedback= JSON.stringify(json[i]);
            Feedback= Feedback.replace(/},{/g,";");
            Feedback= Feedback.replace(/\":\"/g,",");
            Feedback= Feedback.replace(/\":/g,",");
            Feedback= Feedback.replace(/\,\"/g,","); 
            Feedback= Feedback.replace(/\"/g,"");
            Feedback= Feedback.replace(/\{/g,"");
            Feedback= Feedback.replace(/\}/g,"");
            Feedback= Feedback.replace(/\[/g,"");
            Feedback= Feedback.replace(/\]/g,"");
            Feedback= Feedback.replace(/,\"/g,",");
            Feedback= Feedback.replace(/\":/g,",");
            ThingSpeak_response.push(Feedback.split(","));
          }
          ThingSpeak_getState = false;
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          console.log(errorThrown);
          ThingSpeak_getState = false;
          ThingSpeak_count = 0;
        }
     });  
  }

  function ThingSpeak_getResponse() {
   if (ThingSpeak_getState == false) {
     var res = ThingSpeak_response;
     return res;
    }
    else
      return [];
  }
  
  function ThingSpeak_getResponseCount() {
   if (ThingSpeak_getState == false) {
     return ThingSpeak_count;
    }
    else
      return 0;
  }  

  function ThingSpeak_clearResponse() {
   ThingSpeak_response=[];
  }  

  window.ThingSpeak_update = ThingSpeak_update;
  window.ThingSpeak_read = ThingSpeak_read;
  window.ThingSpeak_getResponse = ThingSpeak_getResponse;
  window.ThingSpeak_clearResponse = ThingSpeak_clearResponse;
  window.ThingSpeak_getResponseCount = ThingSpeak_getResponseCount;

}(window, window.document));
