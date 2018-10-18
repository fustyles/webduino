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
  
  token = token.replace(/\s+/g,"+");
  
  // Webduino Blockly : .replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  token = token.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  userid = userid.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  type = type.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");  
  text = text.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  packageId = packageId.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  stickerId = stickerId.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  originalContentUrl = originalContentUrl.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  previewImageUrl = previewImageUrl.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  duration = duration.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  title = title.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  address = address.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  latitude = latitude.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");
  longitude = longitude.replace(/fu01fu/g,"\\").replace(/fu02fu/g,"&").replace(/fu03fu/g,"#");  
  
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
  
  var url = 'https://api.line.me/v2/bot/message/push';
  
  if (type=="text") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'text',
          text:text
        }]
      }),
    });  
  }
  else if (type=="sticker") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'sticker',
          packageId:packageId,
          stickerId:stickerId
        }]
      }),
    });  
  } 
  else if (type=="image") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'image',
          originalContentUrl:originalContentUrl,
          previewImageUrl:previewImageUrl
        }]
      }),
    });  
  }   
  else if (type=="video") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'video',
          originalContentUrl:originalContentUrl,
          previewImageUrl:previewImageUrl
        }]
      }),
    });  
  }   
  else if (type=="audio") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'audio',
          originalContentUrl:originalContentUrl,
          duration:duration
        }]
      }),
    });  
  }    
  else if (type=="location") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'location',
          title:title,
          address:address,
          latitude:latitude,
          longitude:longitude
        }]
      }),
    });  
  }    
  
  var textOutput = ContentService.createTextOutput("OK");
  return textOutput;
}
