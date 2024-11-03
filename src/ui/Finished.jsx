import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calcUserPoints } from "../features/user/userSlice";

export default function Finished() {
  const { quizPoints,isTimeFinished } = useSelector((store) => store.quiz);
  const dispatch = useDispatch();
  const [isClaimed, setIsClaimed] = useState(false);

  function handlePoints() {
    setIsClaimed(true);
    dispatch(calcUserPoints(quizPoints));
  }

  return (
    <div className="flex flex-col justify-between items-center gap-12">
      {quizPoints === 0 && (
        <h1 className="capitalize tracking-widest text-2xl">
         {isTimeFinished ? 'Your Time is up , try harder next time 😉':'try harder next time 😉'}
        </h1>
      )}
      {quizPoints > 0 && (
        <>
          <h1 className="capitalize tracking-widest text-2xl">
            {isTimeFinished ?'Your Time is up , you earn ':'You Earn '}<span className="text-2xl underline">{quizPoints}</span>{" "}
            points 🎉
          </h1>
          <button
            disabled={isClaimed}
            className="text-xl p-2 w-max text-green-500 bg-sky-800/30 rounded-lg font-semibold uppercase transition duration-300 delay-150 hover:scale-125"
            onClick={handlePoints}
          >
            claim points
          </button>
        </>
      )}

      <div className="text-md p-2 w-max bg-sky-800/30 rounded-lg font-semibold uppercase underline transition duration-300 delay-150 hover:scale-125">
        <Link to="/">restart &larr;</Link>
      </div>
    </div>
  );
}
