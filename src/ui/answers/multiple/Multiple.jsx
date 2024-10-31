import React from "react";
import { useSelector } from "react-redux";
import MultipleItem from "./MultipleItem";

export default function Multiple() {
  const { quiz, quizIndex } = useSelector((store) => store.quiz);
  const { correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } =
    quiz[quizIndex] || {};

  const allAnswers = [...incorrectAnswers, correctAnswer];
  const answers = allAnswers.sort()

  return <div className="flex justify-evenly flex-wrap p-6">{answers.map(answer => <MultipleItem answer={answer} key={answer}/>)}</div>;
}
