import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calcUserPoints } from "../features/user/userSlice";
import Button from "./Button";

export default function Finished() {
  const { quizPoints, isTimeFinished } = useSelector((store) => store.quiz);
  const [isClaimed, setIsClaimed] = useState(false);
  const dispatch = useDispatch();

  //for claiming points button
  function handlePoints() {
    setIsClaimed(true);
    dispatch(calcUserPoints(quizPoints));
  }

  return (
    <div className="flex flex-col items-center justify-between gap-12">
      {quizPoints === 0 && (
        <h1 className="text-2xl tracking-widest capitalize">
          {isTimeFinished
            ? "Your Time is up , try harder next time 😉"
            : "try harder next time 😉"}
        </h1>
      )}
      {quizPoints > 0 && (
        <>
          <h1 className="text-2xl tracking-widest capitalize">
            {isTimeFinished ? "Your Time is up , you earn " : "You Earn "}
            <span className="text-2xl underline">{quizPoints}</span> points 🎉
          </h1>
          <Button
            textColor="text-green-400"
            disabled={isClaimed}
            handleClick={handlePoints}
          >
            claim points
          </Button>
        </>
      )}

      <Button bgColor="bg-transparent" textSize="xs" type="link" to="/">
        restart &larr;
      </Button>
    </div>
  );
}
