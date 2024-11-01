import React from "react";
import { QuizHeader } from "./QuizHeader";
import FooterQuiz from "./FooterQuiz";
import { useDispatch, useSelector } from "react-redux";
import Finished from "../Finished";
import BooleanAnswer from "../answers/BooleanAnswer";
import Multiple from "../answers/multiple/Multiple";
import { Link, useNavigate } from "react-router-dom";
import Error from "../Error";
import Loader from "../Loader"

export default function Quiz() {
  const { quiz, quizError, quizFinished } = useSelector((store) => store.quiz);

  const quizType = quiz.type;
  const { isFinished } = quizFinished;

  return (
    <main className="flex flex-col text-slate-200 w-9/12 mx-auto backdrop-blur-2xl rounded-lg text-center p-2">
      {
        //if got error
        quizError !== "" && (
          <>
            <Error />
          </>
        )
      }
      {
        //if not loading quiz and not finished game
        quiz.length === 0 && !isFinished && quizError === "" && (
          <Loader/>
        )
      }
      {
        //starting game
        quiz.length > 0 && (
          <>
            <QuizHeader />
            {quizType === "boolean" ? <BooleanAnswer /> : <Multiple />}
            <FooterQuiz />
          </>
        )
      }
      {
        //finished game
        isFinished && <Finished />
      }
    </main>
  );
}
