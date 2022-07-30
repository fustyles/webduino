function ifttt_push(eventName, key, data) { 
    var input_url = "http://maker.ifttt.com/trigger/"+eventName+"/with/key/"+key;

    var data = $.ajax({
        "type": "POST",
        "dataType": "jsonp",
        "url": input_url,
        "data": data,
        success: function(jsonp)
        {
          console.log(jsonp);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          //console.log(errorThrown);
        }
     });
}  