import React, { lazy, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import { changedDifficulty, changedType, changedNum } from "./FilterSlice";
import Card from "../../ui/Card";

export default function Filter() {
  const dispatch = useDispatch();

  //filters value and also onChange events will run in the filter slice
  const {
    difficulty: diff,
    type,
    quizNumber,
  } = useSelector((store) => store.filter);

  return (
    <Card>
      <div className="text-2xl sm:text-6xl">
        <FontAwesomeIcon icon={faFilter} />
      </div>
      <h6 className="text-sm text-slate-400">filters</h6>
      <div className="flex justify-between gap-1 my-2">
        <div>
          <h6 className="text-sm text-center border-y-2 text-slate-400 border-sky-300">
            difficulty
          </h6>
          <select
            className="text-xs uppercase bg-transparent cursor-pointer sm:text-lg"
            value={diff}
            onChange={(e) => dispatch(changedDifficulty(e.target.value))}
          >
            <option className="bg-slate-800" value="any difficulty">
              random
            </option>
            <option className="bg-slate-800">easy</option>
            <option className="bg-slate-800">medium</option>
            <option className="bg-slate-800">hard</option>
          </select>
        </div>
        <div>
          <h3 className="text-sm text-center text-slate-400 border-y-2 border-sky-300">
            Type
          </h3>
          <select
            className="text-xs uppercase bg-transparent cursor-pointer sm:text-lg"
            value={type}
            onChange={(e) => dispatch(changedType(e.target.value))}
          >
            <option className="bg-slate-800 text-[0.6rem]" value="any type">
              random
            </option>
            <option className="bg-slate-800">multiple</option>
            <option className="bg-slate-800" value={"boolean"}>
              True/False
            </option>
          </select>
        </div>
      </div>

      <div className="flex gap-1 my-2">
        <h3 className="text-sm text-center border-y-2 text-slate-400 border-sky-300">
          number of quiz
        </h3>
        <select
          className="font-semibold bg-transparent cursor-pointer sm:text-lg"
          value={quizNumber}
          onChange={(e) => dispatch(changedNum(e.target.value))}
        >
          <option className="bg-slate-800">3</option>
          <option className="bg-slate-800">5</option>
          <option className="bg-slate-800">10</option>
        </select>
      </div>
    </Card>
  );
}
