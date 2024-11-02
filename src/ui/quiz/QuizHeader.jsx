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
      <p className="text-justify">{decodeHtmlEntities(question)}</p>
    </div>
  );
}
