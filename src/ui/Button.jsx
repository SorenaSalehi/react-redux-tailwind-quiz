import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, type, to, handleClick, disabled,textColor,bgColor,textSize }) {
  //home page
  if (type === "link") {
    return (
      <div className={`${textSize ? textSize : 'text-2xl'} mx-auto ${bgColor ? bgColor :'bg-sky-600'} backdrop-blur-lg shadow-xl border text-stone-100 rounded-lg font-semibold p-3 uppercase transition duration-300 delay-150 hover:scale-125`}>
        <Link to={to} onClick={handleClick}>
          {children}
        </Link>
      </div>
    );
  }

  //login page
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${textColor ? textColor : 'text-stone-200'} ${bgColor ? bgColor :'bg-sky-600'} border-x-4 border-sky-500   p-4 shadow-2xl rounded-md  uppercase font-semibold tracking-widest text-2xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:border-y-4 hover:border-sky-500 duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 ` }
    >
      {children}
    </button>
  );
}
