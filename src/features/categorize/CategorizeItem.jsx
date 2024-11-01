import React from "react";

export default function CategorizeItem({ item }) {
  

  return <option className="bg-slate-800 text-[0.6rem]" value={item.id}>{item.name}</option>;
}
