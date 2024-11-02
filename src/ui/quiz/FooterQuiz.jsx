import React, { lazy } from "react";

// const Time = lazy(()=>import("./Timer"))
// const NextButton = lazy(()=>import("./NextButton"))
import Timer from './Timer'
import NextButton from './NextButton'

export default function FooterQuiz() {
  return (
    <div className="flex justify-between items-center p-3">
      <Timer/>
      <NextButton/>
    </div>
  );
}
