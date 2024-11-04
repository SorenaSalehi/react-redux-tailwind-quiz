import React from "react";
import { useSelector } from "react-redux";

export default function UserPoints() {
  const { userPoints } = useSelector((store) => store.user);
  //display on header
  return <div>{userPoints}</div>;
}
