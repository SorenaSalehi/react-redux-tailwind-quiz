import React from "react";
import { useSelector } from "react-redux";

export default function User() {
  const { userName } = useSelector((store) => store.user);
  //display on header
  return <div>{userName}</div>;
}
