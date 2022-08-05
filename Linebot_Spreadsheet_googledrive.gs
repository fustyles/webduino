var BOT_ACCESS_TOKEN = '*****';
var SPREADSHEET_ID = '*****';
var userProperties = PropertiesService.getUserProperties();
  
function doPost(e) {

  var SpreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var Sheet = SpreadSheet.getSheets()[0];
  var reply_message;

  if (e.parameter.myFile) {
    Sheet.getRange(1,1).setValue("");
    Sheet.getRange(1,2).setValue("");    

    var myFile = e.parameter.myFile;

    var myFoldername = "esp32-cam";
    var myFilename = Utilities.formatDate(new Date(), "GMT", "yyyyMMddHHmmss")+"_esp32-cam.jpg";
    var myToken = e.parameter.token;
    
    var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
    var data = myFile.substring(myFile.indexOf(",")+1);
    data = Utilities.base64Decode(data);
    var blob = Utilities.newBlob(data, contentType, myFilename);
    
    // Save a captured image to Google Drive.
    var folder, folders = DriveApp.getFoldersByName(myFoldername);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(myFoldername);
    }
    var file = folder.createFile(blob);    
    file.setDescription("Uploaded by " + myFilename);
    
    var imageID = file.getUrl().substring(file.getUrl().indexOf("/d/")+3,file.getUrl().indexOf("view")-1);
    var imageUrl = "https://drive.google.com/uc?authuser=0&id="+encodeURIComponent(imageID);
      
    reply_message = [{
      "type":"text",
      "text": imageUrl
    }]
    sendMessageToLineBot(BOT_ACCESS_TOKEN, myToken, reply_message); 

  }
  else if (e.postData) {

    var msg = JSON.parse(e.postData.contents);
    const userMessage = msg.events[0].message.text.trim();
    const user_id = msg.events[0].source.userId;
    const event_type = msg.events[0].source.type;
    const replyToken = msg.events[0].replyToken;

    try {
      userProperties.setProperty('replyToken', replyToken);
    } catch (err) {
      Logger.log('Failed with error %s', err.message);
    }

    if (userMessage=="help") {

      reply_message = [{
            "type": "text",
            "text": "Command list",
            "quickReply": {
                "items": [
                    {
                        "type": "action",
                        "action": {
                            "type": "message",
                            "label": "on",
                            "text": "on"
                        }
                    },
	                  {
                        "type": "action",
                        "action": {
                            "type": "message",
                            "label": "off",
                            "text": "off"
                        }
                    },
	                  {
                        "type": "action",
                        "action": {
                            "type": "message",
                            "label": "getstill",
                            "text": "getstill"
                        }
                    }
                ]
            }
      }] 

      sendMessageToLineBot(BOT_ACCESS_TOKEN,replyToken,reply_message);           
    }
    else {
      Sheet.getRange(1,1).setValue(userMessage);
      Sheet.getRange(1,2).setValue(replyToken);
    }

  }
  else if (e.parameter.response) {

    if (e.parameter.token == userProperties.getProperty('replyToken')) {
      Sheet.getRange(1,1).setValue("");
      Sheet.getRange(1,2).setValue("");

      if (e.parameter.response!="") {
        reply_message = [{
          "type":"text",
          "text": e.parameter.response
        }]
        sendMessageToLineBot(BOT_ACCESS_TOKEN, e.parameter.token, reply_message);
      }
    }   

  }

  return  ContentService.createTextOutput("Return = Finish");
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