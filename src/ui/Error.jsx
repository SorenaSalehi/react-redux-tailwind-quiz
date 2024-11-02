import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Error() {
  const { quizError } = useSelector((store) => store.quiz);

  return (
    <div>
      <h1 className="m-8 text-justify text-rose-600">{quizError}</h1>
      <div className="text-md p-2 w-max bg-sky-800/30 rounded-lg font-semibold uppercase underline transition duration-300 delay-150 hover:scale-125">
        <Link to="/">go back</Link>
      </div>
    </div>
  );
}
