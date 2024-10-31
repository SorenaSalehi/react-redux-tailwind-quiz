import { useSelector } from "react-redux";

import { decodeHtmlEntities } from "../../utils/helpers";

export function QuizHeader() {
    const {quiz,quizIndex} = useSelector(store => store.quiz)
    console.log(quiz)
    const {category='',question='',difficulty=''} =quiz?.[quizIndex] || {}

  
    return (
      <div className="flex flex-col">
        <p className="text-sm">{category}<span className="px-2">{difficulty}</span></p>
        <h1 className="text-4xl">{decodeHtmlEntities(question)}</h1>
      </div>
    );
  }
  