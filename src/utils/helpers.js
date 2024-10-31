//decoding html
export function decodeHtmlEntities(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

//time
export function getTime() {
  const hour = new Date().getHours();
  
  if (hour >= 5 || hour <= 12) return "morning";

  if (hour >= 13 || hour <= 17) return "afternoon";

  if (hour >= 18 || hour <= 21) return "evening";

  return "night";
}
