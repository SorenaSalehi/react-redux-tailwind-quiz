import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { nextQuestion, quizFinishedAction } from "./QuizSlice";
import Button from "../Button";

export default function NextButton() {
  const { hasAnswered, quizIndex, quizLength } = useSelector(
    (store) => store.quiz
  );
  const dispatch = useDispatch();

  //quiz finished or not
  const isFinished = quizIndex + 1 === quizLength;

  function handleClick() {
    //if quiz not finished
    dispatch(nextQuestion());
    //if finished
    dispatch(quizFinishedAction());
  }

  return (
    <Button handleClick={handleClick} disabled={!hasAnswered}>
      {isFinished ? "finish" : "next"}
    </Button>
  );
}
