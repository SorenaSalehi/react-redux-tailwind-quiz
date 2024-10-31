import React from "react";
import { QuizHeader } from "./QuizHeader";
import FooterQuiz from "./FooterQuiz";
import { useDispatch, useSelector } from "react-redux";
import Finished from "../Finished";
import BooleanAnswer from "../answers/BooleanAnswer";
import Multiple from "../answers/multiple/Multiple";
import { Link, useNavigate } from "react-router-dom";
import { gotError } from "./QuizSlice";

export default function Quiz() {
  const { quiz, quizError, quizFinished } = useSelector((store) => store.quiz);
  const navigate = useNavigate()
  const dispatch =useDispatch()

  const quizType = quiz.type;
  const { isFinished } = quizFinished;

  

  //if got error
  if (quizError !== "")
    return (
      <main>
        <h1>{quizError}</h1>
        <Link to='/home'>go back</Link>
      </main>
    );

  //if not loading quiz and not finished game
  if (quiz.length === 0 && !isFinished)
    return (
      <main>
        <h1>is loading</h1>
      </main>
    );

  //starting game
  if (quiz.length > 0)
    return (
      <main className="flex flex-col">
        <QuizHeader />
        {quizType === "boolean" ? <BooleanAnswer /> : <Multiple />}
        <FooterQuiz />
      </main>
    );

  //finished game
  if (isFinished)
    return (
      <main>
        <Finished />
      </main>
    );
}
