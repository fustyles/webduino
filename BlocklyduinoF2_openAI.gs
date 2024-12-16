/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/12/16 17:00
https://www.facebook.com/francefu
Google Apps script & openAI chat

若傳訊無回應：
1. openAI api額度已用盡或Key已失效。
2. 不明原因，可能太久無人使用自動停用，重新佈署或重建Apps script專案並開放存取權限。
3. Apps script程式碼有bug。
4. 重新再傳訊一次。
*/

function doPost(e) {
  let response = "";
  if (e.postData) {
      let key = decodeURIComponent(e.parameter.key)||"";
      let model = decodeURIComponent(e.parameter.model)||"gpt-4o-mini";
      let role = decodeURIComponent(e.parameter.role)||"";                  
      let message = decodeURIComponent(e.parameter.message)||"";
      
      response = sendMessageToOpenaiChat(key, model, role, message);
  }
  return ContentService.createTextOutput(response);
}

function sendMessageToOpenaiChat(key, model, role, message){
    try {
        let messages = [
          {"role": "system", "content": role},
          {"role": "user", "content": message}
        ]

        let url = "https://api.openai.com/v1/chat/completions";

        let data = {
          "model": model,
          "messages": messages 
        };    

        const authHeader = "Bearer "+key;
        const options = {
          headers: {Authorization: authHeader},
          method: 'POST',
          contentType: 'application/json',
          payload: JSON.stringify(data)
        }
        let response = UrlFetchApp.fetch(url, options);
        let json = JSON.parse(response.getContentText());
        return json["choices"][0]["message"]["content"];
    } catch (error) {
        return JSON.stringify(error);
    }          
}
