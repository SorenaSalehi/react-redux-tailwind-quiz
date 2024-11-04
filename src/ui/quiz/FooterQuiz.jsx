import React, { lazy } from "react";


import Timer from './Timer'
import NextButton from './NextButton'

export default function FooterQuiz() {
  return (
    <div className="flex items-center justify-between p-3 ">
      <Timer/>
      <NextButton/>
    </div>
  );
}
