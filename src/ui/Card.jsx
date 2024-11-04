import React from "react";

export default function Card({ children, type }) {
  return (
    <div className="flex flex-col items-center justify-between w-9/12 p-2 uppercase shadow-2xl rounded-xl text-sky-200 backdrop-blur-2xl sm:mx-10 sm:h-60 sm:justify-evenly">
      {children}
    </div>
  );
}
