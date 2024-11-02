import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {  nextQuestion, quizFinishedAction } from "./QuizSlice";

export default function NextButton() {
    const {hasAnswered,quizIndex,quizLength} =useSelector(store => store.quiz)
    const dispatch = useDispatch()
    const isFinished =quizIndex +1 === quizLength
   
  function handleNext(){
    dispatch(nextQuestion())
    dispatch(quizFinishedAction())
  }

  return (
    <div>
      <button className="text-xl p-2 w-max bg-sky-800/30 rounded-lg font-semibold uppercase underline transition duration-300 delay-150 hover:scale-125" disabled={!hasAnswered} onClick={handleNext}>{isFinished ? 'finish' : 'next'}</button>
      
    </div>
  );
}
