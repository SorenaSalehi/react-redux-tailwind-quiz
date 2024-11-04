import React, { lazy } from "react";
import { useSelector } from "react-redux";

// const MultipleItem =lazy(()=>import("./MultipleItem"))
import MultipleItem from './MultipleItem'

export default function Multiple() {
  const { quiz, quizIndex } = useSelector((store) => store.quiz);
  const { correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } =
    quiz[quizIndex] || {};

  const allAnswers = [...incorrectAnswers, correctAnswer];
  const answers = [...allAnswers].sort()

  return <div className="grid grid-cols-2 ">{answers.map(answer => <MultipleItem answer={answer} key={answer}/>)}</div>;
}
