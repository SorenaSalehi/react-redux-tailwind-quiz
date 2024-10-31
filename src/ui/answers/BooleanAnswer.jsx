import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcPoints, checkingAnswer } from "../quiz/QuizSlice";

export default function BooleanAnswer() {
  const {quiz,quizIndex,isAnswerTrue,hasAnswered} = useSelector((store) => store.quiz);
  const dispatch = useDispatch()
  const [selected,setSelected]=useState('False')

  const {correct_answer:correctAnswer = '',difficulty=''} = quiz?.[quizIndex]
  const isTrue = selected  === 'True' && isAnswerTrue
  const isFalse = selected  === 'False' && isAnswerTrue
  
  function handleAnswer(e){
    const answer=e.target.value
    setSelected(answer)
    dispatch(checkingAnswer( answer, correctAnswer ))
    dispatch(calcPoints(difficulty))
  }
  
  

  return (
    <div className="flex justify-evenly p-5">
      <button value="True" onClick={handleAnswer} className={hasAnswered && isTrue ? 'text-green-500' : 'text-red-500'}>true</button>
      <button value="False" onClick={handleAnswer} className={hasAnswered && isFalse ? 'text-green-500' : 'text-red-500'}>false</button>
    </div>
  );
}
