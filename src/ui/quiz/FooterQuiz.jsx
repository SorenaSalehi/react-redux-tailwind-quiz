import React from "react";

import Timer from "./Timer"
import NextButton from "./NextButton";

export default function FooterQuiz() {
  return (
    <div className="flex justify-evenly p-5">
      <Timer/>
      <NextButton/>
    </div>
  );
}
