/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/11/4 00:00
https://www.facebook.com/francefu
*/

function doPost(e) {
  var myFoldername = decodeURIComponent(e.parameter.myFoldername);
  //var myFilename = e.parameter.myFilename;
  var myFilename = decodeURIComponent(e.parameter.myFilename) + "_" + Utilities.formatDate(new Date(), "GMT", "yyyyMMddHHmmss");
  var currentTime = Utilities.formatDate(new Date(), "GMT", "yyyy/MM/dd HH:mm:ss");  
  var myFile = e.parameter.myFile;  
  var myLineType = e.parameter.myLineType||"";
  var myToken = e.parameter.myToken||"";
  var myUserID = e.parameter.myUserID||"";
  
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
  var imageUrl = "https://drive.google.com/uc?authuser=0&id="+imageID;
  var imageThumbnailUrl = "https://drive.google.com/thumbnail?id="+imageID;
    
  if (myLineType=="notify")
    LineNotifyMessage(myToken, currentTime+'\n'+imageUrl, imageThumbnailUrl, imageUrl);
  else if (myLineType=="bot")
    LineBotMessage(myToken, myUserID, currentTime+'\n'+imageUrl, imageThumbnailUrl, imageUrl);

  return  ContentService.createTextOutput(imageUrl);
}

function LineNotifyMessage(token, message, imageThumbnail, imageFullsize) {
  var res = "Line Notify: ";
  try {
    var url = 'https://notify-api.line.me/api/notify';
    var response = UrlFetchApp.fetch(url, {
      'headers': {
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': {
        'message': message,
        'imageThumbnail': imageThumbnail,        
        'imageFullsize': imageFullsize
      }
    });
    res += response.getContentText();
  } catch(error) {
    res += error;
  }
  return res;   
}

function LineBotMessage(token, userID, message, imageThumbnail, imageFullsize) {
  var res = "Line Bot: ";
  try {
    var url = 'https://api.line.me/v2/bot/message/push';
    var response = UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userID,
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
      })
    });
    res += response.getContentText();      
  } catch(error) {
    res = error;
  } 
  return res;
}
