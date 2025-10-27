async function useAI(task, text) {
  if (!("ai" in self)) {
    return "⚠️ Your browser does not support On-Device AI. Use Chrome 127+.";
  }

  let session = await ai.languageModel.create({ model: "gemini-nano" });
  let response = await session.prompt(`${task}:\n${text}`);
  return response;
}

async function summarize() {
  document.getElementById("output").value = await useAI("Summarize the following text", input.value);
}

async function simplify() {
  document.getElementById("output").value = await useAI("Rewrite in simple words", input.value);
}

async function quiz() {
  document.getElementById("output").value = await useAI("Generate quiz questions with answers", input.value);
}

async function translateText() {
  document.getElementById("output").value = await useAI("Translate to Hindi", input.value);
}

async function grammarCheck() {
  document.getElementById("output").value = await useAI("Fix grammar and rewrite clearly", input.value);
}
