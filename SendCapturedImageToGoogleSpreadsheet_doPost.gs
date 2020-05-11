/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2020/5/11 21:30
  https://www.facebook.com/francefu
*/


function doPost(e) {
  var myFile = e.parameter.myFile;
  var myFilename = Utilities.formatDate(new Date(), "GMT", "yyyyMMddHHmmss")+"-"+e.parameter.myFilename;
  var mySpreadsheet = e.parameter.mySpreadsheet;
  
  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, myFilename);
  
  var ss = SpreadsheetApp.openByUrl('https://docs.google.com'+mySpreadsheet)
  var sheet = ss.getSheets()[0];
  var images = sheet.getImages();
  images.map(function(img){img.remove();});
  sheet.insertImage(blob, 1, 1);
  return  ContentService.createTextOutput("ok");
}
