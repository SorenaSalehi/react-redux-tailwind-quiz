import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { settingUser } from "../features/user/userSlice";
import Button from "./Button";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [bgLoaded, setBgLoaded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = "login.webp";
    img.onload = () => setBgLoaded(true);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (gender === "") {
      setError("please select your gender !!");
      return;
    }
    if (gender !== "") {
      dispatch(settingUser(userName, gender));
      setError("");
      navigate("/");
      return;
    }
  }

  return (
    <div
      className={`${
        bgLoaded ? "bg-[url('/login.webp')]" : "bg-slate-800"
      } flex flex-col w-screen p-10 items-center h-screen  bg-no-repeat bg-center bg-cover `}
    >
      <div className="p-4 mb-4 overflow-hidden shadow-xl text-8xl text-sky-300 backdrop-blur-lg rounded-xl sm:mb-0">
        Quiz
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-stretch justify-between gap-2 px-12 py-8 mt-20 rounded-lg bg-stone-200 sm:mt-10"
      >
        <input
          type="text"
          name="userName"
          required
          placeholder="NAME"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="h-10 font-semibold text-center transition delay-150 rounded-md shadow-xl border-x-4 border-sky-500 bg-stone-100 focus:ring-2 text-sky-500 focus:ring-sky-500 s placeholder:text-sky-500 focus:ring-inset focus:outline-none focus:scale-x-90"
        />

        {error !== "" && (
          <div className="p-2 text-red-500 rounded-md bg-slate-50">{error}</div>
        )}
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="h-8 font-semibold tracking-widest text-center uppercase border-none shadow-xl bg-stone-100 text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl hover:cursor-pointer"
        >
          <option className="text-stone-300">gender</option>
          <option
            value={"male"}
            className="font-semibold bg-sky-500 text-stone-800 "
          >
            male
          </option>
          <option
            value={"female"}
            className="font-semibold bg-rose-400 text-stone-800"
          >
            female
          </option>
        </select>

        <Button>submit</Button>
      </form>
    </div>
  );
}
