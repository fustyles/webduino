/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/12/16 17:00
https://www.facebook.com/francefu
Google Apps script & Gemini chat

若傳訊無回應：
1. Gemini api額度已用盡或Key已失效。
2. 不明原因，可能太久無人使用自動停用，重新佈署或重建Apps script專案並開放存取權限。
3. Apps script程式碼有bug。
4. 重新再傳訊一次。
*/

function doPost(e) {
    if (e.postData) {
        let key = decodeURIComponent(e.parameter.key)||"";
        let model = decodeURIComponent(e.parameter.model)||"";
        let role = decodeURIComponent(e.parameter.role)||"";          
        let message = decodeURIComponent(e.parameter.message)||"";
        
        response = sendMessageToGeminiChat(key, model, role, message);
    }
    return ContentService.createTextOutput(response);
}

function sendMessageToGeminiChat(key, model, role, message){
    try {
        let url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
        let data = {
          "contents": [
            {
              "role": "model", 
              "parts":[
                { 
                  "text": role
                }
              ]
            },
            {
              "role": "user", 
              "parts":[
                { 
                  "text": message
                }
              ]
            }
          ]
        };     

        const options = {
            method: 'POST',
            contentType: 'application/json; charset=utf-8',
            payload: JSON.stringify(data)
        }

        let response = UrlFetchApp.fetch(url, options);       
        let json = JSON.parse(response.getContentText());
        response = json["candidates"][0]["content"]["parts"][0]["text"];
        if (response == "null")
          response = json["error"]["message"];

        return response;
    } catch (error) {
        return JSON.stringify(error);
    }          
}