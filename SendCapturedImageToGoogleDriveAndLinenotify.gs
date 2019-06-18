function doPost(e) {
    
  // Save a captured image.
  var dropbox = "ESP32-CAM";
  var folder, folders = DriveApp.getFoldersByName(dropbox);
  
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder(dropbox);
  }
  
  var contentType = e.parameter.myFile.substring(e.parameter.myFile.indexOf(":")+1, e.parameter.myFile.indexOf(";"));
  var data = e.parameter.myFile.substring(e.parameter.myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, e.parameter.myFilename);
  var file = folder.createFile(blob);    
  file.setDescription("Uploaded by " + e.parameter.myFilename);
  
  var imageID = file.getUrl().substring(file.getUrl().indexOf("/d/")+3,file.getUrl().indexOf("view")-1);
  imageUrl = "https://drive.google.com/uc?authuser=0&id="+imageID;
    
  // Send a push message to Line Notify.
  var res = "";
  try {
    var url = 'https://notify-api.line.me/api/notify';
    var response = UrlFetchApp.fetch(url, {
      'headers': {
        'Authorization': 'Bearer ' + e.parameter.myToken,
      },
      'method': 'post',
      'payload': {
          'message': "Person Detection\n"+imageUrl
      }
    });
  } catch(error) {
    res = error;
  } 
  
  if (res=="") res = response.getContentText();
  var result = JSON.stringify({
    "LineNotify": res
  });  
    
  return  ContentService.createTextOutput(res+"\n"+imageUrl);
}
