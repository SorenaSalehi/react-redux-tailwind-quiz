import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getCustomsQuiz, { getDefaultQuiz } from "../services/apiQuiz";
import { gotError, quizzesFetched, resettingQuiz } from "./quiz/QuizSlice";


import Categorize from "../features/categorize/Categorize"
import Filter from "../features/filter/Filter"

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
            "something went wrong !! please check your connection or change quiz filters(change number of quiz or difficulty etc.)"
          )
        );

      dispatch(quizzesFetched(data));
    }
    cusQuiz();
  }
  return (
    <main className="flex flex-col justify-center h-[75%]">
      <section className="flex flex-col gap-2 items-center justify-between">
        <Categorize />
        <Filter />
      </section>

      <div className="flex justify-center text-2xl mx-auto bg-rose-400/85 text-sky-900 rounded-lg font-semibold p-3 uppercase transition duration-300 delay-150 hover:scale-125">
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
    </main>
  );
}
