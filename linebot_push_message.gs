function doGet(e) {
  var token = ((!e.parameter.token)?"":e.parameter.token);
  var userid = ((!e.parameter.userid)?"":e.parameter.userid);
  var type = ((!e.parameter.type)?"":e.parameter.type);  
  var text = ((!e.parameter.text)?"":e.parameter.text);
  var packageId = ((!e.parameter.packageId)?"":e.parameter.packageId);
  var stickerId = ((!e.parameter.stickerId)?"":e.parameter.stickerId);
  var originalContentUrl = ((!e.parameter.originalContentUrl)?"":e.parameter.originalContentUrl);
  var previewImageUrl = ((!e.parameter.previewImageUrl)?"":e.parameter.previewImageUrl);
  var duration = ((!e.parameter.duration)?"":e.parameter.duration);
  var title = ((!e.parameter.title)?"":e.parameter.title);
  var address = ((!e.parameter.address)?"":e.parameter.address);
  var latitude = ((!e.parameter.latitude)?"":e.parameter.latitude);
  var longitude = ((!e.parameter.longitude)?"":e.parameter.longitude);
  
  token = token.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  userid = userid.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  type = type.replace(/\%27/g,"\'").replace(/\%22/g,"\"");  
  text = text.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  packageId = packageId.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  stickerId = stickerId.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  originalContentUrl = originalContentUrl.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  previewImageUrl = previewImageUrl.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  duration = duration.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  title = title.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  address = address.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  latitude = latitude.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  longitude = longitude.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  
  text = text.replace(/\<br\>/g,"\n").replace(/\<br\/\>/g,"\n").replace(/\<br \/\>/g,"\n").replace(/\<BR\>/g,"\n").replace(/\<BR\/\>/g,"\n").replace(/\<BR \/\>/g,"\n");
    
  //console.log("token="+token);
  //console.log("userid="+userid);
  //console.log("type="+type);
  //console.log("text="+text);
  //console.log("packageId="+packageId);
  //console.log("stickerId="+stickerId);
  //console.log("originalContentUrl="+originalContentUrl);
  //console.log("previewImageUrl="+previewImageUrl);
  //console.log("duration="+duration);
  //console.log("title="+title);
  //console.log("address="+address);
  //console.log("latitude="+latitude);
  //console.log("longitude="+longitude);
  
  if (type=="text") {
    if (text.indexOf("data:")==0) {
      text = text.replace(/\s+/g,"+");
      text = "https://fustyles.github.io/webduino/LineControl_showimage.html?"+text;
    }
    var payload= JSON.stringify({
      'to':  userid,
      'messages': [{
        type:'text',
        text:text
      }]
    });
  }
  else if (type=="sticker") {
    var payload= JSON.stringify({
      'to':  userid,
      'messages': [{
        type:'sticker',
        packageId:packageId,
        stickerId:stickerId
      }]
    });
  } 
  else if (type=="image") {
    var payload= JSON.stringify({
      'to':  userid,
      'messages': [{
        type:'image',
        originalContentUrl:originalContentUrl,
        previewImageUrl:previewImageUrl
      }]
    });
  }   
  else if (type=="video") {
    var payload= JSON.stringify({
      'to':  userid,
      'messages': [{
        type:'video',
        originalContentUrl:originalContentUrl,
        previewImageUrl:previewImageUrl
      }]
    });
  }   
  else if (type=="audio") {
    var payload= JSON.stringify({
      'to':  userid,
      'messages': [{
        type:'audio',
        originalContentUrl:originalContentUrl,
        duration:duration
      }]
    });
  }    
  else if (type=="location") {
    var payload= JSON.stringify({
      'to':  userid,
      'messages': [{
        type:'location',
        title:title,
        address:address,
        latitude:latitude,
        longitude:longitude
      }]
    });
  }    
  
  // Send a push message
  var url = 'https://api.line.me/v2/bot/message/push';
  var response = UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + token,
    },
    'method': 'post',
    'payload': payload
  });  
  
  var result = JSON.stringify({
    "LineBot": type + " OK"
  });  
  return ContentService.createTextOutput("console.log(" + result + ")").setMimeType(ContentService.MimeType.JAVASCRIPT); 
}
