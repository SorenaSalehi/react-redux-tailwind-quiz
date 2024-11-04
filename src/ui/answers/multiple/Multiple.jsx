import React, { lazy } from "react";
import { useSelector } from "react-redux";

import MultipleItem from "./MultipleItem";

export default function Multiple() {
  const { quiz, quizIndex } = useSelector((store) => store.quiz);
  const { correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } =
    quiz[quizIndex] || {};

  //combine answers in one array and change the order ,because otherwise, correct answer is always last one
  const allAnswers = [...incorrectAnswers, correctAnswer].sort();

  return (
    <div className="grid grid-cols-2 ">
      {allAnswers.map((answer) => (
        <MultipleItem answer={answer} key={answer} />
      ))}
    </div>
  );
}
