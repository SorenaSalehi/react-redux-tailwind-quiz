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
    diff === "any difficulty" &&
    type === "any type" &&
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
      <div className="flex justify-between p-4">
        <div className="divide-y">
          <h1>{categoryName}</h1>
          <p>
            <span className="p-4">{diff}</span>
            <span>{type === "boolean" ? "True or False" : type}</span>
          </p>
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
        <h1>⁉️</h1>
      </div>
    </main>
  );
}
