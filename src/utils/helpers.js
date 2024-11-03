//decoding html
export function decodeHtmlEntities(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

//day time
export function getTime() {
  const hour = new Date().getHours();
  if (hour < 5) return "night";
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  if (hour < 22) return "evening";
  return "night";
}

//quiz timer
// export function countDown(setRemainTime) {
//   const id = setInterval(()=>{
//     setRemainTime(r => {
//       if(r < 1) {
//         clearInterval(id)
//         return 0
//       }
//       return r-1
//     })
//   },1000)
//   // return ()=> clearInterval(id)
  
// }

