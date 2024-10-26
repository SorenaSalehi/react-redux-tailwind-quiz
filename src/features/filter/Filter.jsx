import React, { useState } from "react";
import Card from "../../ui/Card";
import store from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { changedDifficulty, changedType, changedNum } from "./FilterSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const {
    difficulty: diff,
    type,
    quizNumber,
  } = useSelector((store) => store.filter);

  console.log(quizNumber);
  return (
    <Card>
      <h1>icon</h1>
      <h1>filter</h1>
      <div>
        <h3>difficulty</h3>
        <select
          value={diff}
          onChange={(e) => dispatch(changedDifficulty(e.target.value))}
        >
          <option>any difficulty</option>
          <option>easy</option>
          <option>medium</option>
          <option>hard</option>
        </select>
      </div>
      <div>
        <h3>Type</h3>
        <select
          value={type}
          onChange={(e) => dispatch(changedType(e.target.value))}
        >
          <option>any type</option>
          <option>multiple</option>
          <option value={"boolean"}>True/False</option>
        </select>
      </div>
      <div>
        <h3>number of quiz</h3>
        <select
          value={quizNumber}
          onChange={(e) => dispatch(changedNum(e.target.value))}
        >
          <option>3</option>
          <option>5</option>
          <option>10</option>
        </select>
      </div>
    </Card>
  );
}
