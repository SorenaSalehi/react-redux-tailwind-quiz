import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { nextQuestion, quizFinishedAction } from "./QuizSlice";
import Button from "../Button";

export default function NextButton() {
  const { hasAnswered, quizIndex, quizLength } = useSelector(
    (store) => store.quiz
  );
  const dispatch = useDispatch();
  const isFinished = quizIndex + 1 === quizLength;

  function handleClick() {
    dispatch(nextQuestion());
    dispatch(quizFinishedAction());
  }

  return (
    <Button handleClick={handleClick} disabled={!hasAnswered}>
      {isFinished ? "finish" : "next"}
    </Button>
  );
}
