/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/9/7 00:00
  https://www.facebook.com/francefu
*/

var cellWidth = 320;   //插入影像儲存格寬度
var cellHeight = 240;   //插入影像儲存格高度
var myFoldername = "spreadsheet_images";   //Google雲端硬碟建立資料夾名稱自訂，須設定知道連結者有檢視權限才能在試算表連結顯示影像。
var lineToken = "";   //可不填

function doPost(e) {
  var myFile = e.parameter.file;
  var mySpreadsheeturl = decodeURIComponent(e.parameter.spreadsheeturl);
  var mySpreadsheetname = decodeURIComponent(e.parameter.spreadsheetname);
  var myDatetime = e.parameter.datetime;  
  var myPosition = e.parameter.position;  
  var myColumn = e.parameter.column;
  var myRow = e.parameter.row;
  var myFormat = e.parameter.format||"base64";
  var myDate = Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd");
  var myTime = Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss");
  lineToken = e.parameter.linetoken||lineToken;

  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, myDate+" "+myTime+".jpg");
  
  var ss = SpreadsheetApp.openByUrl(mySpreadsheeturl)
  var sheet = ss.getSheetByName(mySpreadsheetname);
  var lastRow = sheet.getLastRow();

  if (myPosition=="insertfirst") {
    sheet.insertRowsBefore(1, 1);     
    myRow = 1;
  } else if (myPosition=="insertsecond") {
    sheet.insertRowsBefore(2, 1);        
    myRow = 2;     
  } else if (myPosition=="insertlast") { 
    myRow = lastRow+1;   
  }

  if (myDatetime=="gmt_datetime") {
    sheet.getRange(myRow, 1).setValue(myDate);
    sheet.getRange(myRow, 2).setValue(myTime);  
  } else if (myDatetime=="gmt_date") {
    sheet.getRange(myRow, 1).setValue(myDate); 
  } else if (myDatetime=="gmt_time") {
    sheet.getRange(myRow, 1).setValue(myTime);  
  }   

  if (myFormat=="base64") {
    sheet.getRange(myRow, myColumn).setValue(myFile);  
  } else if (myFormat=="link") {
    var folder, folders = DriveApp.getFoldersByName(myFoldername);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(myFoldername);
    }

    var file = folder.createFile(blob);
    var imageUrl = file.getUrl();
    var imageID = imageUrl.substring(imageUrl.indexOf("/d/")+3,imageUrl.indexOf("view")-1);       
    imageUrl = "https://drive.google.com/file/d/"+imageID+"/view?usp=sharing";     
    var formula = '=HYPERLINK("' + imageUrl + '","'+ myDate+" "+myTime +'")';
    sheet.getRange(myRow, myColumn).setFormula(formula);

    lineNotify(imageUrl); 
  }  else if (myFormat=="jpg") {
    var folder, folders = DriveApp.getFoldersByName(myFoldername);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(myFoldername);
    }

    var file = folder.createFile(blob);
    var imageUrl = file.getUrl();
    var imageID = imageUrl.substring(imageUrl.indexOf("/d/")+3,imageUrl.indexOf("view")-1);
    imageUrl = "https://drive.google.com/file/d/"+imageID+"/view?usp=sharing";       
    var imageThumbnailUrl = "https://drive.google.com/thumbnail?id="+imageID;
    sheet.setRowHeight(myRow, cellHeight);    
    sheet.setColumnWidth(myColumn, cellWidth);          
    var formula = 'IMAGE("' + imageThumbnailUrl + '", 1)';
    sheet.getRange(myRow, myColumn).setFormula('=HYPERLINK("' + imageUrl + '", '+formula+')');

    lineNotify(imageUrl);    
  } 
  return  ContentService.createTextOutput("OK");
}

function lineNotify(message) {
  var res = "";
  try {
    var url = 'https://notify-api.line.me/api/notify';
    var response = UrlFetchApp.fetch(url, {
      'headers': {
        'Authorization': 'Bearer ' + lineToken,
      },
      'method': 'post',
      'payload': {
          'message': message         
      }
    });
    res += response.getContentText();
  } catch(error) {
    res += error;
  } 
  return res;
}