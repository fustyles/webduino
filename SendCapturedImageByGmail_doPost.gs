/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2019/9/28 12:00
https://www.facebook.com/francefu
*/

function doPost(e) {
  var myRecipient = decodeURIComponent(e.parameter.myRecipient);
  var mySubject = decodeURIComponent(e.parameter.mySubject);
  var myBody = new Date().toString();
  var myFile = e.parameter.myFile;

  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, "esp32-cam.jpg");

  // Send a photo as an attachment by using Gmail
  var response = GmailApp.sendEmail(myRecipient, mySubject, myBody,{
      attachments: [blob],
      name: 'Automatic Emailer Script'
    }
  );
  
  // Save the photo to Google Drive
  var folder, folders = DriveApp.getFoldersByName("ESP32-CAM");
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder("ESP32-CAM");
  }
  var file = folder.createFile(blob);    
  file.setDescription("Uploaded by ESP32-CAM");
  
  return  ContentService.createTextOutput(response);
}
