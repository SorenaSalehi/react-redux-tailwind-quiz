import React from "react";

import Timer from "./Timer"
import NextButton from "./NextButton";

export default function FooterQuiz() {
  return (
    <div className="flex justify-between items-center p-3">
      <Timer/>
      <NextButton/>
    </div>
  );
}
