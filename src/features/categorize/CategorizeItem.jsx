import React from "react";

export default function CategorizeItem({ item }) {
  

  return <option value={item.id}>{item.name}</option>;
}
