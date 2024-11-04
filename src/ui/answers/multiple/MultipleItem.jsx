import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { calcPoints, checkingAnswer } from "../../quiz/QuizSlice";
import { decodeHtmlEntities } from "../../../utils/helpers";

export default function MultipleItem({ answer }) {
  const [selected, setSelected] = useState("");
  const { quiz, quizIndex, hasAnswered } = useSelector((store) => store.quiz);
  const dispatch = useDispatch();

  //for className and point
  const { correct_answer: correctAnswer = "", difficulty = "" } =
    quiz[quizIndex];

  //display correct
  const isTrue = answer === correctAnswer;
  //if selected
  const isSelected = selected === answer;
  //if answer wrong
  const isFalse = isSelected && !isTrue;

  function handleAnswer(e) {
    const answer = e.target.value;
    setSelected(answer);
    //checking answer in quiz slice
    dispatch(checkingAnswer(answer, correctAnswer));
    dispatch(calcPoints(difficulty));
  }

  return (
    <button
      className={`text-xs bg-sky-800/30 rounded-lg p-2 m-2 sm:text-xl capitalize transition duration-300 delay-150 hover:scale-125 ${
        hasAnswered && isTrue && "text-green-500"
      } ${hasAnswered && isFalse && "text-red-500"} ${
        // disabled if has answered
        !hasAnswered && "hover:cursor-pointer"
      } `}
      value={answer}
      onClick={handleAnswer}
      disabled={hasAnswered}
    >
      {decodeHtmlEntities(answer)}
    </button>
  );
}
