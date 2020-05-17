/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2020/5/17 11:00
  https://www.facebook.com/francefu
*/

function doPost(e) {
  var myFile = e.parameter.myFile;
  var myFilename = Utilities.formatDate(new Date(), "GMT", "yyyyMMddHHmmss")+"_"+e.parameter.myFilename;
  var mySpreadsheet = e.parameter.mySpreadsheet;
  var myCellRow = e.parameter.myCellRow;
  var myCellCol = e.parameter.myCellCol;  
  
  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, myFilename);
  
  var ss = SpreadsheetApp.openByUrl('https://docs.google.com'+mySpreadsheet)
  ss.getActiveSheet().setHiddenGridlines(true);
  var sheet = ss.getSheets()[0];
  sheet.insertImage(blob, myCellRow, myCellCol);

  var images = sheet.getImages();
  while (images.length>2) {  
    images[0].remove();
  }
     
  return  ContentService.createTextOutput("ok");
}
