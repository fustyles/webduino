/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2020/11/28 21:00
  https://www.facebook.com/francefu
*/

function doPost(e) {

  var myFile = e.parameter.myFile;
  var myFilename = Utilities.formatDate(new Date(), "GMT+8", "yyyyMMddHHmmss");
  var mySpreadsheet = e.parameter.mySpreadsheet;
  var mySpreadsheetName = e.parameter.mySpreadsheetName;
  var myCellRow = e.parameter.myCellRow;
  var myCellCol = e.parameter.myCellCol;  
  
  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, myFilename);

  var ss = SpreadsheetApp.openByUrl(mySpreadsheet)
  ss.getActiveSheet().setHiddenGridlines(true);
  var sheet = ss.getSheetByName(mySpreadsheetName);
  //var sheet = ss.getSheets()[0];
  sheet.getActiveCell().setValue("ok");
  sheet.insertImage(blob, myCellRow, myCellCol);

  return  ContentService.createTextOutput("ok");
}