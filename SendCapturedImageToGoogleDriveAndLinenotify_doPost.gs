/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2019/9/7 09:00
https://www.facebook.com/francefu
*/

function doPost(e) {
  var myFoldername = e.parameter.myFoldername;
  var myFile = e.parameter.myFile;
  //var myFilename = e.parameter.myFilename;
  var myFilename = Utilities.formatDate(new Date(), "GMT", "yyyyMMddHHmmss")+"-"+e.parameter.myFilename;
  var myToken = e.parameter.myToken;
  
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
    
  // Send a link message to Line Notify.
  var res = "Line Notify: ";
  try {
    var url = 'https://notify-api.line.me/api/notify';
    var response = UrlFetchApp.fetch(url, {
      'headers': {
        'Authorization': 'Bearer ' + myToken,
      },
      'method': 'post',
      'payload': {
          'message': imageUrl
      }
    });
    res += response.getContentText();
  } catch(error) {
    res += error;
  } 
    
  return  ContentService.createTextOutput(myFoldername+"/"+myFilename+"\n"+imageUrl+"\n"+res);
}




/*

//Author : ChungYi Fu (Kaohsiung, Taiwan)   2019/9/7 09:00
//https://www.facebook.com/francefu

//Another way 1
//You could send up to 50 images to Line Notify in one hour.

function doPost(e) {
  var myFoldername = e.parameter.myFoldername;
  var myFile = e.parameter.myFile;
  var myFilename = e.parameter.myFilename;
  var myToken = e.parameter.myToken;
  
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
  
  var boundary = "------------------------------";
  var imageData = Utilities.newBlob(
      "--" + boundary + "\r\n"
      + "Content-Disposition: form-data; name=\"message\"; \r\n\r\n" + imageUrl + "\r\n"
      + "--" + boundary + "\r\n"
      + "Content-Disposition: form-data; name=\"imageFile\"; filename=\"" + myFilename + "\"\r\n"
      + "Content-Type: " + 'image/jpeg' +"\r\n\r\n"
      ).getBytes();
  imageData = imageData.concat(blob.getBytes());
  imageData = imageData.concat(Utilities.newBlob("\r\n--" + boundary + "--\r\n").getBytes());
  
  sendImagetoLineNotify(imageData, myToken, boundary);

  
  return  ContentService.createTextOutput("Return = " + imageUrl);
}

function sendImagetoLineNotify(imageData, token, boundary){
  var options = {
    "method" : "post",
    "contentType" : "multipart/form-data; boundary=" + boundary,
    "payload" : imageData,    
    "headers" : {"Authorization" : "Bearer " + token}
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

*/






/*

//Author : ChungYi Fu (Kaohsiung, Taiwan)   2019/9/7 09:00
//https://www.facebook.com/francefu

//Another way 2
//You could send up to 50 images to Line Notify in one hour.

function doPost(e) {
  var myFile = e.parameter.myFile;
  var myFilename = e.parameter.myFilename;
  var myToken = e.parameter.myToken;
  
  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, myFilename);
  
  var message = myFilename;
  var boundary = "------------------------------";
  var imageData = Utilities.newBlob(
      "--" + boundary + "\r\n"
      + "Content-Disposition: form-data; name=\"message\"; \r\n\r\n" + message + "\r\n"
      + "--" + boundary + "\r\n"
      + "Content-Disposition: form-data; name=\"imageFile\"; filename=\"" + myFilename + "\"\r\n"
      + "Content-Type: " + 'image/jpeg' +"\r\n\r\n"
      ).getBytes();
  imageData = imageData.concat(blob.getBytes());
  imageData = imageData.concat(Utilities.newBlob("\r\n--" + boundary + "--\r\n").getBytes());
  
  sendImagetoLineNotify(imageData, myToken, boundary);

  
  return  ContentService.createTextOutput("Return = OK");
}

function sendImagetoLineNotify(imageData, token, boundary){
  var options = {
    "method" : "post",
    "contentType" : "multipart/form-data; boundary=" + boundary,
    "payload" : imageData,    
    "headers" : {"Authorization" : "Bearer " + token}
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

*/
