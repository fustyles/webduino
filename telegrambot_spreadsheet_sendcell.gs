function doPost(e) {
  var myToken = e.parameter.myToken;
  var myChatID = e.parameter.myChatID;
  var mySpreadsheeturl = e.parameter.spreadsheeturl;
  var mySpreadsheetname = e.parameter.spreadsheetname;
  var myRow = e.parameter.row;
  var myColumn = e.parameter.col;
  var myType = e.parameter.type;

  var ss = SpreadsheetApp.openByUrl(mySpreadsheeturl)
  var sheet = ss.getSheetByName(mySpreadsheetname);
  var range = sheet.getRange(myRow, myColumn); 
  var myData = range.getValue();

  if (myType=="text") {
    var options = {
        'method' : 'post',
        'contentType': 'application/json',
        'payload' : JSON.stringify({
            'chat_id': myChatID,
            'text': myData
        })
    };
    UrlFetchApp.fetch("https://api.telegram.org/bot"+myToken+"/sendMessage", options);
  } else if (myType=="imageurl") {
    var options = {
        'method' : 'post',
        'contentType': 'application/json',
        'payload' : JSON.stringify({
            'chat_id': myChatID,
            "photo" : myData
        })
    };    
    UrlFetchApp.fetch("https://api.telegram.org/bot"+myToken+"/sendPhoto", options);
  } else if (myType=="imagebase64") {
    var myFilename = "photo.jpg";
    var myFile = myData;
    
    var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
    var image = myFile.substring(myFile.indexOf(",")+1);
    image = Utilities.base64Decode(image);
    var blob = Utilities.newBlob(image, contentType, myFilename);
    
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

    var options = {
      "method" : "post",
      "contentType" : "multipart/form-data; boundary=" + boundary,
      "chat_id": myChatID,      
      "payload" : imageData
    };
    UrlFetchApp.fetch("https://api.telegram.org/bot"+myToken+"/sendPhoto", options);
  }

  return  ContentService.createTextOutput("Return = OK");
}