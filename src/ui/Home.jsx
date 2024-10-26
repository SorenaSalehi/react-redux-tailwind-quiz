import React from "react";
import getCustomsQuiz, { getDefaultQuiz } from "../services/apiQuiz";
import Categorize from "../features/categorize/Categorize";
import Filter from "../features/filter/Filter";
import { useSelector } from "react-redux";

export default function Home() {
  const {
    difficulty: diff,
    type,
    quizNumber,
  } = useSelector((store) => store.filter);
  const { categoryName, categoryId } = useSelector((store) => store.category);
  console.log(categoryName);
  console.log(categoryId);

  const isDefault =
    categoryId === 9 &&
    diff === "any difficulty" &&
    type === "any type" &&
    quizNumber === "3";
  function handleDefaultStart() {
    // getDefaultQuiz();
  }
  
  function handleCustomsStart(categoryId, diff, type, quizNumber) {
    getCustomsQuiz(categoryId, diff, type, quizNumber);
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
            <span>{type}</span>
          </p>
          <button
            onClick={() =>
              isDefault
                ? handleDefaultStart
                : handleCustomsStart(categoryId, diff, type,quizNumber)
            }
          >
            start
          </button>
        </div>
        <h1>⁉️</h1>
      </div>
    </main>
  );
}
