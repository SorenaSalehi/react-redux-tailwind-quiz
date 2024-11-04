import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizTimeFinished } from "./QuizSlice";

export default function Timer() {
  const { quizTime } = useSelector((store) => store.filter);
  const [remainTime, setRemainTime] = useState(quizTime);
  const dispatch = useDispatch();

  //start timer on mount
  useEffect(() => {
    const id = setInterval(() => {
      setRemainTime((remain) => {
        if (remain < 1) {
          clearInterval(id);
          return 0;
        }
        return remain - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  //if time finished
  useEffect(() => {
    if (remainTime === 0) dispatch(quizTimeFinished());
  }, [remainTime]);

  //calc time remain and format it
  const { formattedTime, min } = useMemo(() => {
    const min = Math.floor(remainTime / 60);
    const sec = remainTime % 60;
    const formattedTime = `${min < 10 ? 0 : ""}${min}:${
      sec < 10 ? 0 : ""
    }${sec}`;
    return { formattedTime, min };
  }, [remainTime]);

  return (
    <div className={`mr-auto ${min < 1 ? "text-rose-600" : ""}`}>
      {formattedTime}
    </div>
  );
}
