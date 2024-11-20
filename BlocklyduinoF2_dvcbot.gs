/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/11/18 19:30
  https://www.facebook.com/francefu
*/


let dvcbot_apiKey = "";
let dvcbot_assistantId = "";
let dvcbot_inputMsg = "";
let BASE_URL = "https://prod.dvcbot.net/api/assts/v1";
let THREAD_URL = "https://prod.dvcbot.net/api/assts/v1/threads";

function doPost(e) {
  dvcbot_apiKey = decodeURIComponent(e.parameter.dvcbot_apiKey) || "";
  dvcbot_assistantId = decodeURIComponent(e.parameter.dvcbot_assistantId) || "";
  dvcbot_inputMsg = decodeURIComponent(e.parameter.dvcbot_inputMsg) || "";  

  var output = ContentService.createTextOutput();

  const res = sendMessageToDvcbot(dvcbot_inputMsg)
    .then(responseMsg => {
      return responseMsg;    
    })
    .catch(error => {
      return `Error: ${error}`;
    })

  res.then((promisedata) => {
      output.append(promisedata);
    })
  return output;
}

async function sendMessageToDvcbot(inputMsg) {
  return new Promise(async (resolve, reject) => {
    const threadId = await createThread();
    const status = await addMessageToThread(threadId, inputMsg);
    if (status == "completed") {
      const runId = await runAssistant(threadId, dvcbot_assistantId);
      const runUrl = `${BASE_URL}/threads/${threadId}/runs`;
      await getRunResult(threadId, runUrl, runId);
      const responseMsg = await listMessage(threadId);
      resolve(responseMsg);
    } else {
      reject("Thread state is not completed");
    }
  });
}

async function createThread() {
  return new Promise((resolve, reject) => {
    let res = UrlFetchApp.fetch(THREAD_URL, {
      'headers': {
        'OpenAI-Beta': 'assistants=v2',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dvcbot_apiKey}`
      },
      'method': 'post'
    });
    let json = JSON.parse(res.getContentText());
    resolve(json.id);
  });
}

async function addMessageToThread(threadId, inputMsg) {
  return new Promise((resolve, reject) => {
    const msgUrl = `${BASE_URL}/threads/${threadId}/messages`;
    const createMsgData = {
      role: "user",
      content: inputMsg
    };  
    let res = UrlFetchApp.fetch(msgUrl, {
      'headers': {
        'OpenAI-Beta': 'assistants=v2',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dvcbot_apiKey}`
      },
      'method': 'post',
      'payload': JSON.stringify(createMsgData)
    });

    let json = JSON.parse(res.getContentText());
    resolve(json.status);
  });
}

async function runAssistant(threadId, dvcbot_assistantId) {
  return new Promise((resolve, reject) => {
    const runUrl = `${BASE_URL}/threads/${threadId}/runs`;
    let now = new Date();
    const createRunData = {
      assistant_id: dvcbot_assistantId,
      additional_instructions: `The current time is: ${Utilities.formatDate(now, 'GMT+8', 'yyyy-MM-dd HH:mm:ss')}`
    };  
    let res = UrlFetchApp.fetch(runUrl, {
      'headers': {
        'OpenAI-Beta': 'assistants=v2',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dvcbot_apiKey}`
      },
      'method': 'post',
      'payload': JSON.stringify(createRunData)
    });
    let json = JSON.parse(res.getContentText());
    resolve(json.id);
  });
}

async function getRunResult(threadId, runUrl, runId) {
  return new Promise((resolve, reject) => {
    let runStatus = "";
    while (true) {
      let res = UrlFetchApp.fetch(`${runUrl}/${runId}`, {
        'headers': {
          'OpenAI-Beta': 'assistants=v2',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dvcbot_apiKey}`
        },
        'method': 'get'
      });

      if (res.getResponseCode() === 200) {
        let response = JSON.parse(res.getContentText());
        runStatus = response.status;
        const requiredAction = response.required_action;

        if (runStatus === "requires_action" && requiredAction) {
          let toolOutputs = [];
          const toolCalls = requiredAction.submit_tool_outputs.tool_calls;
          for (let i = 0; i < toolCalls.length; i++) {
            const funcName = toolCalls[i].function.name;
            let args = toolCalls[i].function.arguments;
            args = args.replace(/\\"/g, '"');
            const pluginApiUrl = `${BASE_URL}/pluginapi?tid=${threadId}&aid=${dvcbot_assistantId}&pid=${funcName}`;

            let toolRes = UrlFetchApp.fetch(pluginApiUrl, {
              'headers': {
                'OpenAI-Beta': 'assistants=v2',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${dvcbot_apiKey}`
              },
              'method': 'post',
              'payload': JSON.stringify(JSON.parse(args))
            });

            const output = toolRes.getContentText().substring(0, 8000).replace(/"/g, '\\"');
            const callId = toolCalls[i].id;
       
            toolOutputs.push({
              tool_call_id: callId,
              output: output
            });
          }

          const submitToolOutputRunUrl = `${BASE_URL}/threads/${threadId}/runs/${runId}/submit_tool_outputs`;
          const toolOutputsData = {
            tool_outputs: toolOutputs
          };

          UrlFetchApp.fetch(submitToolOutputRunUrl, {
            'headers': {
              'OpenAI-Beta': 'assistants=v2',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dvcbot_apiKey}`
            },
            'method': 'post',
            'payload': JSON.stringify(toolOutputsData)
          });

          Utilities.sleep(1000);
        } else if (runStatus === "completed") {
          resolve();
          break;
        } else {
          Utilities.sleep(1000);
        }
      } else {
        reject(`Error: ${res.getResponseCode()}`);
        break;
      }
    }
  });
}

async function listMessage(threadId) {
  return new Promise((resolve, reject) => {
    const msgUrl = `${BASE_URL}/threads/${threadId}/messages`;
    let res = UrlFetchApp.fetch(msgUrl, {
      'headers': {
        'OpenAI-Beta': 'assistants=v2',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dvcbot_apiKey}`
      },
      'method': 'get'
    });

    if (res.getResponseCode() === 200) {
      let response = JSON.parse(res.getContentText());
      resolve(response.data[0].content[0].text.value);
    } else {
      reject(`Error: ${res.getResponseCode()}`);
    }
  });
}
