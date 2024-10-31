import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcPoints, checkingAnswer } from "../../quiz/QuizSlice";
import { decodeHtmlEntities } from "../../../utils/helpers";

export default function MultipleItem({ answer }) {
  const [selected, setSelected] = useState("");
  const { quiz, quizIndex,  hasAnswered } = useSelector(
    (store) => store.quiz
  );
  const dispatch = useDispatch();

  const { correct_answer: correctAnswer = "", difficulty = "" } =
    quiz[quizIndex];
  const isTrue = answer === correctAnswer;
  const isSelected = selected === answer
  const isFalse = isSelected && !isTrue;
  console.log('isTrue:',isTrue,'isSelected:' ,isSelected,'isFalse:',isFalse,'selected:',selected,'correect:',correctAnswer)
  function handleAnswer(e) {
    console.log(e.target.value);
    const answer = e.target.value;
    setSelected(answer);
    dispatch(checkingAnswer(answer, correctAnswer));
    dispatch(calcPoints(difficulty));
  }
  return (
    <button
      className={`${hasAnswered && isTrue && 'text-green-500'} ${hasAnswered && isFalse && 'text-red-500'} ${!hasAnswered && "hover:cursor-pointer"} `}
      value={answer}
      onClick={handleAnswer}
      disabled={hasAnswered}
    >
      {decodeHtmlEntities(answer)}
    </button>
  );
}
