function doPost(e) {
  var myFilename = e.parameter.myFilename;
  var myFile = e.parameter.myFile;
  var myToken = e.parameter.myToken;
  var myChatID = e.parameter.myChatID;
  
  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, myFilename);
  
  var boundary = "------------------------------";
  var imageData = Utilities.newBlob(
      "--" + boundary + "\r\n"
      + "Content-Disposition: form-data; name=\"chat_id\"; \r\n\r\n" + myChatID + "\r\n"
      + "--" + boundary + "\r\n"    
      + "Content-Disposition: form-data; name=\"photo\"; filename=\"" + myFilename + "\"\r\n"
      + "Content-Type: " + 'image/jpeg' +"\r\n\r\n"
      ).getBytes();
  imageData = imageData.concat(blob.getBytes());
  imageData = imageData.concat(Utilities.newBlob("\r\n--" + boundary + "--\r\n").getBytes());
  
  sendImagetoTelegram(imageData, myToken, boundary);
  
  return  ContentService.createTextOutput("Return = OK");
}

function sendImagetoTelegram(imageData, token, boundary){
  var options = {
    "method" : "post",
    "contentType" : "multipart/form-data; boundary=" + boundary,
    "payload" : imageData
  };
  UrlFetchApp.fetch("https://api.telegram.org/bot"+token+"/sendPhoto", options);
}