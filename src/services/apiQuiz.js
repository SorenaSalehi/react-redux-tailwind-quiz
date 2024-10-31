// https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean
//https://opentdb.com/api.php?amount=10

import { json } from "react-router-dom";

export async function getCategorize() {
  try {
    const res = await fetch("https://opentdb.com/api_category.php");

    const data = await res.json();
    return data;
  } catch (err) {
    if (err.message === "1")
      return console.error(
        "Number of Questions are to much,please decrease it!!"
      );
    if (err.message === "2")
      return console.error("Invalid Parameter Contains an invalid parameter.");
    if (err.message === "3")
      return console.error("Token Not Found Session Token does not exist");
    if (err.message === "4")
      return console.error("Resetting the Token is necessary.");
    if (err.message === "5")
      return console.error("Rate Limit Too many requests have occurred.");
  }
}

export async function getDefaultQuiz() {
  try {
    const res = await fetch("https://opentdb.com/api.php?amount=3");

    const data = await res.json();
    if (data.response_code !== 0) throw new Error(data.response_code);
    const results = data.results;
    const dataLength = data.results.length;

    //save data on locale in case the page got refresh
    localStorage.setItem("results", JSON.stringify(data.results));
    return { results, dataLength };
  } catch (err) {
    if (err.message === "1")
      return console.error(
        "Number of Questions are to much,please decrease it!!"
      );
    if (err.message === "2")
      return console.error("Invalid Parameter Contains an invalid parameter.");
    if (err.message === "3")
      return console.error("Token Not Found Session Token does not exist");
    if (err.message === "4")
      return console.error("Resetting the Token is necessary.");
    if (err.message === "5")
      return console.error("Rate Limit Too many requests have occurred.");
  }
}
export default async function getCustomsQuiz(
  categoryId,
  diff,
  type,
  quizNumber
) {
  try {
    //if diff and type was changed then adding to the url
    const res =
      await fetch(`https://opentdb.com/api.php?amount=${quizNumber}&category=${categoryId}${
        diff !== "any difficulty" ? `&difficulty=${diff}` : ""
      }${type !== "any type" ? `&type=${type}` : ""}
`);
    const data = await res.json();
    if (data.response_code !== 0) throw new Error(data.response_code);
    const results = data.results;
    const dataLength = data.results.length;

    //save data on locale in case the page got refresh
    localStorage.setItem("results", JSON.stringify(data.results));
    return { results, dataLength };
  } catch (err) {
    if (err.message === "1")
      return console.error(
        "Number of Questions are to much,please decrease it!!"
      );
    if (err.message === "2")
      return console.error("Invalid Parameter Contains an invalid parameter.");
    if (err.message === "3")
      return console.error("Token Not Found Session Token does not exist");
    if (err.message === "4")
      return console.error("Resetting the Token is necessary.");
    if (err.message === "5")
      return console.error("Rate Limit Too many requests have occurred.");
  }
}
