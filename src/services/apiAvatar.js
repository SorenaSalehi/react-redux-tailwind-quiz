// https://avatar.iran.liara.run/public/boy
//https://avatar.iran.liara.run/public/girl

import { json } from "react-router-dom";

export async function getAvatar(gender) {
  const type = gender === "male" ? "boy" : "girl";
  const res = await fetch(`https://avatar.iran.liara.run/public/${type}`);
  //new:for img data
  const data = await res.blob();
  
  return URL.createObjectURL(data);
}
