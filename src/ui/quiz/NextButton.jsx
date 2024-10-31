import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcPoints, nextQuestion, quizFinishedAction } from "./QuizSlice";

export default function NextButton() {
    const {hasAnswered,quizIndex,quizLength} =useSelector(store => store.quiz)
    const dispatch = useDispatch()
    const isFinished =quizIndex +1 === quizLength
   
  function handleNext(){
    dispatch(nextQuestion())
    dispatch(quizFinishedAction())
  }

  return (
    <div className="flex justify-evenly flex-1">
      <button disabled={!hasAnswered} onClick={handleNext}>{isFinished ? 'finish' : 'next'}</button>
      
    </div>
  );
}
