function doPost(e) {
  var BOT_ACCESS_TOKEN = 'Nwyfihc0pKey868MefCc9Er028u7E33OPJuRwdLEi/mmyjBSh0jFOJKvS3AMaFvKUKAp1k7JKdj2tpd8nr8/aJVF45aQajMY0anwVABxPkvJk3oPUeGlmdDWBiQt6qKBLzGhYimXU377SkcT03hhBwdB04t89/1O/w1cDnyilFU=123';
  var NOTIFY_ACCESS_TOKEN = 'RXDcVAhLhvVJjX0fxarGLcrbjqyWWIJPKPu0QdpomFE123';
  var SPREADSHEET_ID = '1VVONSSJSNY8Xj2-hO3swD7EEfky6vA99jp5CzZkxDKM123';

  var SpreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var Sheet = SpreadSheet.getSheets()[0];
  var lastRow = Sheet.getLastRow();

  if (e.parameter.myFile) {
    var humidity = e.parameter.humidity;
    var temperature = e.parameter.temperature;    
    var myFile = e.parameter.myFile;
    var filename = e.parameter.myFilename;

    Sheet.getRange(lastRow+1,1).setValue("'"+Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss"));
    Sheet.getRange(lastRow+1,2).setValue(humidity);
    Sheet.getRange(lastRow+1,3).setValue(temperature); 
    Sheet.getRange(lastRow+1,4).setValue(filename);           
    Sheet.getRange(lastRow+1,5).setValue(myFile);
    
  } else {
  
    var msg = JSON.parse(e.postData.contents);
    const userMessage = msg.events[0].message.text.trim();
    const user_id = msg.events[0].source.userId;
    const event_type = msg.events[0].source.type;
    const replyToken = msg.events[0].replyToken;
      
    var reply_message;
    var Time = Sheet.getRange(lastRow,1).getValue();

    if (userMessage=="image") {
      var myFile = Sheet.getRange(lastRow,5).getValue();
      var imageData = myFile.substring(myFile.indexOf(",")+1);
      imageData = Utilities.base64Decode(imageData);
      var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
      var filename = Sheet.getRange(lastRow,4).getValue();
      var message =  filename;

      var blob = Utilities.newBlob(imageData, contentType, filename);
      var boundary = "------------------------------";
      var imageData = Utilities.newBlob(
          "--" + boundary + "\r\n"
          + "Content-Disposition: form-data; name=\"message\"; \r\n\r\n" + message + "\r\n"
          + "--" + boundary + "\r\n"
          + "Content-Disposition: form-data; name=\"imageFile\"; filename=\"" + filename + "\"\r\n"
          + "Content-Type: " + 'image/jpeg' +"\r\n\r\n"
          ).getBytes();
      imageData = imageData.concat(blob.getBytes());
      imageData = imageData.concat(Utilities.newBlob("\r\n--" + boundary + "--\r\n").getBytes());
      
      var options = {
        "method" : "post",
        "contentType" : "multipart/form-data; boundary=" + boundary,
        "payload" : imageData,    
        "headers" : {"Authorization" : "Bearer " + NOTIFY_ACCESS_TOKEN}
      };
      UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
    } 
    else if (userMessage=="humidity") {
      var humidity = Time+"\nhumidity = "+Sheet.getRange(lastRow,2).getValue()+" %";
      reply_message = [{
        "type":"text",
        "text": humidity
      }]
      sendMessageToLineBot(BOT_ACCESS_TOKEN,replyToken,reply_message);
    } 
    else if (userMessage=="temperature") {
      var temperature = Time+"\ntemperature = "+Sheet.getRange(lastRow,3).getValue()+" °C";
      reply_message = [{
        "type":"text",
        "text": temperature
      }]      
      sendMessageToLineBot(BOT_ACCESS_TOKEN,replyToken,reply_message);
    } 
    else if (userMessage=="help") {
      reply_message = [{
            "type": "text",
            "text": "Command list",
            "quickReply": {
                "items": [
                    {
                        "type": "action",
                        "action": {
                            "type": "message",
                            "label": "humidity",
                            "text": "humidity"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "message",
                            "label": "temperature",
                            "text": "temperature"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "message",
                            "label": "image",
                            "text": "image"
                        }
                    }
                ]
            }
      }] 
      sendMessageToLineBot(BOT_ACCESS_TOKEN,replyToken,reply_message);           
    }
  } 
  return  ContentService.createTextOutput("Return = OK");
}

function sendMessageToLineBot(accessToken, replyToken, reply_message) {
  var url = 'https://api.line.me/v2/bot/message/reply';
  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + accessToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': reply_message
    }),
  });
} 
