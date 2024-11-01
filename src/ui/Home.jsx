import React, { useEffect } from "react";


import getCustomsQuiz, { getDefaultQuiz } from "../services/apiQuiz";
import Categorize from "../features/categorize/Categorize";
import Filter from "../features/filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gotError, quizzesFetched, resettingQuiz } from "./quiz/QuizSlice";

export default function Home() {
  //filter slice
  const {
    difficulty: diff,
    type,
    quizNumber,
  } = useSelector((store) => store.filter);

  //category slice
  const { categoryName, categoryId } = useSelector((store) => store.category);
  const dispatch = useDispatch();

  //reset quiz from quiz slice
  useEffect(() => {
    dispatch(resettingQuiz());
  }, []);

  //fetching default or custom
  const isDefault =
    categoryId === 9 &&
    diff === "random" &&
    type === "random" &&
    quizNumber === "3";

  //handling default quiz
  function handleDefaultStart() {
    async function defQuiz() {
      const data = await getDefaultQuiz();

      if (!data)
        return dispatch(
          gotError(
            "something went wrong !! please check your connection or refresh app"
          )
        );

      dispatch(quizzesFetched(data));
    }
    defQuiz();
  }

  //handling customs quiz
  function handleCustomsStart(categoryId, diff, type, quizNumber) {
    async function cusQuiz() {
      const data = await getCustomsQuiz(categoryId, diff, type, quizNumber);

      if (!data)
        return dispatch(
          gotError(
            "something went wrong !! please check your connection or change quiz filter(change number of quiz or difficulty etc.)"
          )
        );

      dispatch(quizzesFetched(data));
    }
    cusQuiz();
  }
  return (
    <main>
      <section className="flex justify-between p-4">
        <Categorize />
        <Filter />
      </section>
      <div className="flex justify-between p-4 text-slate-200 text-center">
        <div>
          <div className="flex items-center text-slate-400 uppercase border-y-2 border-slate-200 text-xs mb-4">
            <h5>{categoryName}</h5>
            <h5 className="p-4">{diff}</h5>
            <h5>{type === "boolean" ? "True or False" : type}</h5>
          </div>
          <div className="text-4xl w-max bg-sky-800/30 rounded-lg font-semibold p-3 mb-2 uppercase underline transition duration-300 delay-150 hover:scale-125">
            <Link
              to="/quiz"
              onClick={() =>
                isDefault
                  ? handleDefaultStart()
                  : handleCustomsStart(categoryId, diff, type, quizNumber)
              }
            >
              start
            </Link>
          </div>
        </div>
        
      </div>
    </main>
  );
}
