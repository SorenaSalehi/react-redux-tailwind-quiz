import { useSelector } from "react-redux";

import { decodeHtmlEntities } from "../../utils/helpers";

export function QuizHeader() {
  const { quiz, quizIndex } = useSelector((store) => store.quiz);
  console.log(quiz);
  const {
    category = "",
    question = "",
    difficulty = "",
  } = quiz?.[quizIndex] || {};

  return (
    <div className="flex flex-col">
      <p className="text-sm border-y-2 text-slate-400 font-semibold my-1 border-slate-200 uppercase text-left w-max">
        {category}
        <span className="px-2 font-semibold">{difficulty}</span>
      </p>
      <p>{decodeHtmlEntities(question)}</p>
    </div>
  );
}
