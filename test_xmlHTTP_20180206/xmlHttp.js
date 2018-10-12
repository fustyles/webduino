// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  function getResponse(input_url_,input_format_) 
  {
    getData(input_url_,input_format_,function(err, response) 
                {
                    if (err)
                        document.getElementById('demo-area-01-show').innerHTML = "failed";
                    else 
                        console.log(String(response));
                        document.getElementById('demo-area-01-show').innerHTML = String(response);
                }
    );
  } 
  
  function getData(DataUrl,DataFormat,callback)   
  {
    if (DataFormat=="JSON")
    {
      var data = $.ajax({
          type: "get",
          dataType: "jsonp",
          url: DataUrl,
          success: function(json)
          {
            console.log(json);
            callback(null, String(json));
          },
          error: function(exception)
          {
            console.log(DataFormat+" fail");
            callback(null, DataFormat+" fail");
          }
       });
    }
    else
    {
      if (window.XMLHttpRequest)
        var xmlHttp = new XMLHttpRequest();
      else
        var xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');

      xmlHttp.onreadystatechange = function() 
      {
        if (this.readyState == 4 && this.status == 200) 
        {    
          if (DataFormat=="HTML")
          {
            console.log(this.responseText);
            callback(null, String(this.responseText));
          }
          else if (DataFormat=="XML")
          {
            console.log(this.responseXML);
            callback(null, String(this.responseXML));
          }
        }
      };
      xmlHttp.open("PUT", DataUrl, true);
      xmlHttp.send(); 
    }
  }
  
  window.getResponse = getResponse;
  window.getData = getData;
  
}(window, window.document));
