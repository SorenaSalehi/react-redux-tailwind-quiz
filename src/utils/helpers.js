//decoding html for api questions or answers
export function decodeHtmlEntities(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

//day time display on header
export function getTime() {
  const hour = new Date().getHours();
  if (hour < 5) return "night";
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  if (hour < 22) return "evening";
  return "night";
}

