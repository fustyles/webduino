/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2025/4/1 11:30
  https://www.facebook.com/francefu
*/

var cellWidth = 160;                       //預設插入影像儲存格寬度
var cellHeight = 120;                      //預設插入影像儲存格高度
var myFoldername = "spreadsheet_images";   //預設Google雲端硬碟建立資料夾名稱，須設定"知道連結者有檢視權限"才能在試算表連結顯示影像。
var linebotToken = "";                        //可不填
var linebotUserId = "";                        //可不填

function doPost(e) {
  var myFile = e.parameter.file;
  var mySpreadsheeturl = e.parameter.spreadsheeturl;
  var mySpreadsheetname = decodeURIComponent(e.parameter.spreadsheetname);
  var myDatetime = e.parameter.datetime;  
  var myPosition = e.parameter.position;  
  var myColumn = e.parameter.column;
  var myRow = e.parameter.row;
  var myFormat = e.parameter.format||"base64";
  var myDate = Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd");
  var myTime = Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss");
  cellWidth = e.parameter.cellwidth||cellWidth;
  cellHeight = e.parameter.cellheight||cellHeight; 
  myFoldername = e.parameter.foldername||myFoldername;
  linebotToken = e.parameter.linetoken||linebotToken;

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
    var imageThumbnailUrl = "https://drive.google.com/thumbnail?id="+imageID;    
    var formula = '=HYPERLINK("' + imageUrl + '","'+ myDate+" "+myTime +'")';
    sheet.getRange(myRow, myColumn).setFormula(formula);

    lineBotPhoto(myDate+" "+myTime, imageThumbnailUrl, imageUrl);
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

    lineBotPhoto(myDate+" "+myTime, imageThumbnailUrl, imageUrl);
  } 
  return  ContentService.createTextOutput("OK");
}

function lineBotMessage(message) {
  try {
    var url = 'https://api.line.me/v2/bot/message/push';

    var payload = JSON.stringify({
      'to':  linebotUserId,
      'messages': [{
        type:'text',
        text: message
      }]
    });

    var response = UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + linebotToken,
      },
      'method': 'post',
      'payload': payload
    });
	
    return response.getContentText();
  } catch(error) {
    return 'Error: ' + error.message;
  }	
}

function lineBotPhoto(message, imageThumbnail, imageFullsize) {
  try {
    var url = 'https://api.line.me/v2/bot/message/push';

    var payload = JSON.stringify({
        'to':  linebotUserId,
        'messages': [
          {
            type:'text',
            text: message
          },
          {
            type:'image',
            originalContentUrl: imageFullsize,
            previewImageUrl: imageThumbnail
          }
        ]
      });

    var response = UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + linebotToken,
      },
      'method': 'post',
      'payload': payload
    });
    return response.getContentText();      
  } catch(error) {
    return 'Error: ' + error.message;
  }
}
