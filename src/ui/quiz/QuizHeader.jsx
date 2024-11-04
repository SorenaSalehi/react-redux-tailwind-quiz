import { useSelector } from "react-redux";

import { decodeHtmlEntities } from "../../utils/helpers";

export default function QuizHeader() {
  const { quiz, quizIndex } = useSelector((store) => store.quiz);
  const {
    category = "",
    question = "",
    difficulty = "",
  } = quiz?.[quizIndex] || {};

  return (
    <div className="flex flex-col">
      <p className="text-[0.5rem] border-b-2 text-slate-400 my-1 border-slate-200 uppercase text-center">
        {category}
        <span className="px-2 font-semibold">{difficulty}</span>
      </p>
      <p className="px-2 py-10 text-justify text-wrap sm:text-xl sm:py-3">
        <span className="px-2 pt-1 pb-1 mr-1 text-sm border rounded-full border-sky-400 text-sky-300">
          {quizIndex + 1}
        </span>
        {decodeHtmlEntities(question)}
      </p>
    </div>
  );
}
