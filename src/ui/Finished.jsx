import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calcUserPoints } from "../features/user/userSlice";

export default function Finished() {
  const {quizPoints} = useSelector(store => store.quiz)
  const dispatch = useDispatch()
  
  function handlePoints(){
    dispatch(calcUserPoints(quizPoints))
  }

  return (
    <div>
      <div>you earn {quizPoints} points</div>
      <button className="mr-4" onClick={handlePoints}>claim points</button>
      <Link to="/home">back to home</Link>
    </div>
  );
}
