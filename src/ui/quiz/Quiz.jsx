import React, { lazy } from "react";
import { useSelector } from "react-redux";

import QuizHeader from "./QuizHeader";
import FooterQuiz from "./FooterQuiz";
import Finished from "../Finished";
import BooleanAnswer from "../answers/BooleanAnswer";
import Multiple from "../answers/multiple/Multiple";
import Error from "../Error";
import Loader from "../Loader";

export default function Quiz() {
  const { quiz, quizError, quizFinished, isTimeFinished } = useSelector(
    (store) => store.quiz
  );

  //display multiple answer or boolean
  const quizType = quiz.type;
  //finish or not
  const { isFinished } = quizFinished;

  return (
    <main className="flex flex-col p-1 m-2 text-center rounded-lg text-slate-200 backdrop-blur-2xl sm:h-max">
      {
        //if is error
        quizError !== "" && (
          <>
            <Error />
          </>
        )
      }
      {
        //if not load quiz and not finished game
        quiz.length === 0 && !isFinished && quizError === "" && <Loader />
      }
      {
        //starting game
        quiz.length > 0 && !isTimeFinished && (
          <>
            <QuizHeader />
            {quizType === "boolean" ? <BooleanAnswer /> : <Multiple />}
            <FooterQuiz />
          </>
        )
      }
      {
        //finished game
        (isFinished || isTimeFinished) && <Finished />
      }
    </main>
  );
}
