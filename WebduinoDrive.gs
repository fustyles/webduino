/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2025/4/1 12:00
https://www.facebook.com/francefu
*/

var linebotToken = "";    //可不填
var linebotUserId = "";     //可不填

function doPost(e) {
  var myFoldername = e.parameter.myFoldername;
  var myFile = e.parameter.myFile;
  //var myFilename = e.parameter.myFilename;
  var myFilename = Utilities.formatDate(new Date(), "GMT", "yyyyMMddHHmmss")+"-"+e.parameter.myFilename;
  
  // Save a captured image to Google Drive.
  var folder, folders = DriveApp.getFoldersByName(myFoldername);
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder(myFoldername);
  }
  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, myFilename);
  var file = folder.createFile(blob);    
  file.setDescription("Uploaded by " + myFilename);
  
  var imageID = file.getUrl().substring(file.getUrl().indexOf("/d/")+3,file.getUrl().indexOf("view")-1);
  var imageUrl = "https://drive.google.com/uc?authuser=0&id="+imageID;
  var imageThumbnailUrl = "https://drive.google.com/thumbnail?id="+imageID;

  // lineBotPhoto(myFilename, imageThumbnailUrl, imageUrl);

  return  ContentService.createTextOutput(myFoldername+"/"+myFilename+"\n"+imageUrl+"\n"+res);
}

function lineBotMessage(message) {
  try {
    var url = 'https://api.line.me/v2/bot/message/push';

    var payload = JSON.stringify({
      'to':  linebotUserId,
      'messages': [{
        type:'text',
        text: message
      }]
    });

    var response = UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + linebotToken,
      },
      'method': 'post',
      'payload': payload
    });
	
    return response.getContentText();
  } catch(error) {
    return 'Error: ' + error.message;
  }	
}

function lineBotPhoto(message, imageThumbnail, imageFullsize) {
  try {
    var url = 'https://api.line.me/v2/bot/message/push';

    var payload = JSON.stringify({
        'to':  linebotUserId,
        'messages': [
          {
            type:'text',
            text: message
          },
          {
            type:'image',
            originalContentUrl: imageFullsize,
            previewImageUrl: imageThumbnail
          }
        ]
      });

    var response = UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + linebotToken,
      },
      'method': 'post',
      'payload': payload
    });
    return response.getContentText();      
  } catch(error) {
    return 'Error: ' + error.message;
  }
}
