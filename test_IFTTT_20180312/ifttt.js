// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function ifttt(event,key,value1,value2,value3) {
    
    var input_url="https://maker.ifttt.com/trigger/"+event+"/with/key/"+key;
    var data = $.ajax({
        "type": "POST",
        "dataType": "jsonp",
        "url": input_url,
        "data":{
          "value1": value1, 
          "value2": value2, 
          "value3": value3, 
        },
        success: function(jsonp)
        {
          console.log(jsonp);
        },
        error: function(exception)
        {
          console.log(exception);
        }
     });
  }

  window.ifttt = ifttt;

}(window, window.document));
