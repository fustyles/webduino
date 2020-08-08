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