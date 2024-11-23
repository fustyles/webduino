// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	
	let dvcbot_apiKey = "";
	let dvcbot_assistantId = "";
	let dvcbot_plugin_response = [];
	const BASE_URL = "https://prod.dvcbot.net/api/assts/v1";
	const THREAD_URL = "https://prod.dvcbot.net/api/assts/v1/threads";

	function dvcbot_initial(apiKey, assistantId) {
		dvcbot_apiKey = apiKey;
		dvcbot_assistantId = assistantId;
	}

	function dvcbot_result_response() {
	  return dvcbot_plugin_response;
	}

	async function dvcbot_result(userMessage, newline) {
	  try {
		dvcbot_plugin_response = [];
		const result = await sendMessageToDvcbot(userMessage);
		if (newline=="br")
			return result.replace(/\n/g,"<br>");
		else if (newline=="n")
			return result;	
		else
			return result.replace(/\n/g,"");	
	  } catch (error) {
		return "error";
	  }
	}

	async function sendMessageToDvcbot(inputMsg) {
	  return new Promise(async (resolve, reject) => {
		try {
		  dvcbot_plugin_response = [];
		  
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
		} catch (error) {
		  console.error("Error:", error);
		  reject(error);
		}
	  });
	}	

	async function createThread() {
	  return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", THREAD_URL);
		xhr.setRequestHeader("OpenAI-Beta", "assistants=v2");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Authorization", "Bearer " + dvcbot_apiKey);

		xhr.onreadystatechange = function () {
		  if (xhr.readyState === 4) {
			if (xhr.status === 200) {
			  let json = JSON.parse(xhr.responseText);
			  resolve(json.id);
			} else {
			  reject(xhr.status);
			}
		  }
		};

		xhr.send(JSON.stringify({}));
	  });
	}

	async function addMessageToThread(threadId, dvcbot_inputMsg) {
	  return new Promise((resolve, reject) => {
		const msgUrl = `${BASE_URL}/threads/${threadId}/messages`;

		var xhr = new XMLHttpRequest();
		xhr.open("POST", msgUrl);
		xhr.setRequestHeader("OpenAI-Beta", "assistants=v2");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Authorization", "Bearer " + dvcbot_apiKey);

		const createMsgData = {
		  role: "user",
		  content: dvcbot_inputMsg
		};

		xhr.onreadystatechange = function () {
		  if (xhr.readyState === 4) {
			if (xhr.status === 200) {
			  let json = JSON.parse(xhr.responseText);
			  resolve(json.status);
			} else {
			  reject(xhr.status);
			}
		  }
		};

		xhr.send(JSON.stringify(createMsgData));
	  });
	}

	async function runAssistant(threadId, dvcbot_assistantId) {
	  return new Promise((resolve, reject) => {
		const runUrl = `${BASE_URL}/threads/${threadId}/runs`;

		var xhr = new XMLHttpRequest();
		xhr.open("POST", runUrl);
		xhr.setRequestHeader("OpenAI-Beta", "assistants=v2");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Authorization", "Bearer " + dvcbot_apiKey);

		const createRunData = {
			assistant_id: dvcbot_assistantId,
			additional_instructions: `The current time is: ${new Date().toISOString()}`
		};

		xhr.onreadystatechange = function () {
		  if (xhr.readyState === 4) {
			if (xhr.status === 200) {
			  let json = JSON.parse(xhr.responseText);
			  resolve(json.id);
			} else {
			  reject(xhr.status);
			}
		  }
		};

		xhr.send(JSON.stringify(createRunData));
	  });	
	}

	async function getRunResult(threadId, runUrl, runId) {
	  return new Promise((resolve, reject) => {
		let runStatus = "";
		const checkRunStatus = () => {
		  var xhr = new XMLHttpRequest();
		  xhr.open("GET", `${runUrl}/${runId}`);
		  xhr.setRequestHeader("OpenAI-Beta", "assistants=v2");
		  xhr.setRequestHeader("Content-Type", "application/json");
		  xhr.setRequestHeader("Authorization", "Bearer " + dvcbot_apiKey);

		  xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
			  if (xhr.status === 200) {
				let response = JSON.parse(xhr.responseText);
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
					
					var toolXhr = new XMLHttpRequest();
					toolXhr.open("POST", pluginApiUrl, false);
					toolXhr.setRequestHeader("OpenAI-Beta", "assistants=v2");
					toolXhr.setRequestHeader("Content-Type", "application/json");
					toolXhr.setRequestHeader("Authorization", "Bearer " + dvcbot_apiKey);
					toolXhr.send(args);

					const output = toolXhr.responseText.substring(0, 8000).replace(/"/g, '\\"');
					const callId = toolCalls[i].id;

					try {
					    const pluginResponse = JSON.parse(toolXhr.responseText);
					    if (pluginResponse.text)
					        dvcbot_plugin_response.push(JSON.stringify(JSON.parse(pluginResponse.text)));
					} catch (error) {
					    dvcbot_plugin_response.push(toolXhr.responseText);
					}
				
					toolOutputs.push({
					    tool_call_id: callId,
					    output: output
					});
				  }

				  const submitToolOutputRunUrl = `${BASE_URL}/threads/${threadId}/runs/${runId}/submit_tool_outputs`;
				  const toolOutputsData = {
					tool_outputs: toolOutputs
				  };

				  var submitXhr = new XMLHttpRequest();
				  submitXhr.open("POST", submitToolOutputRunUrl, false);
				  submitXhr.setRequestHeader("OpenAI-Beta", "assistants=v2");
				  submitXhr.setRequestHeader("Content-Type", "application/json");
				  submitXhr.setRequestHeader("Authorization", "Bearer " + dvcbot_apiKey);
				  submitXhr.send(JSON.stringify(toolOutputsData));

				  setTimeout(checkRunStatus, 1000);
				} else if (runStatus === "completed") {
				  resolve();
				} else {
				  setTimeout(checkRunStatus, 1000);
				}
			  } else {
				reject(xhr.status);
			  }
			}
		  };

		  xhr.send();
		};

		checkRunStatus();
	  });
	}

	async function listMessage(threadId) {
	  return new Promise((resolve, reject) => {
		const msgUrl = `${BASE_URL}/threads/${threadId}/messages`;

		var xhr = new XMLHttpRequest();
		xhr.open("GET", msgUrl);
		xhr.setRequestHeader("OpenAI-Beta", "assistants=v2");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Authorization", "Bearer " + dvcbot_apiKey);

		xhr.onreadystatechange = function () {
		  if (xhr.readyState === 4) {
			if (xhr.status === 200) {
			  let response = JSON.parse(xhr.responseText);
			  resolve(response.data[0].content[0].text.value);
			} else {
			  reject(xhr.status);
			}
		  }
		};

		xhr.send();
	  });
	}
	
	window.dvcbot_initial = dvcbot_initial;
	window.dvcbot_result_response = dvcbot_result_response;
	window.dvcbot_result = dvcbot_result;
	window.createThread = createThread;
	window.addMessageToThread = addMessageToThread;
	window.runAssistant = runAssistant;
	window.getRunResult = getRunResult;
	window.listMessage = listMessage;	
	window.sendMessageToDvcbot = sendMessageToDvcbot;
	
}(window, window.document));	
