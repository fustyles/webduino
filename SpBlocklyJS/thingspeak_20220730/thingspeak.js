function thingspeak_push(key, data) {
    var input_url = "https://api.thingspeak.com/update?api_key="+key+data;

    var data = $.ajax({
        "type": "GET",
        "url": input_url,
        success: function(json)
        {
          console.log(json);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          //console.log(errorThrown);
        }
     });
}  