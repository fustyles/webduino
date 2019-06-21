function doPost(e) {
    
  
  var myFoldername = e.parameter.myFoldername;
  var myFile = e.parameter.myFile;
  var myFilename = e.parameter.myFilename;
  
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
  imageUrl = "https://drive.google.com/uc?authuser=0&id="+imageID;
    
  // Send a link message to Line Nitify.
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
    
  return  ContentService.createTextOutput(res+"\n"+myFoldername+"/"+myFilename+"\n"+imageUrl);
}
