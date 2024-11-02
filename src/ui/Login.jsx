import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { settingUser } from "../features/user/userSlice";

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
      <div className="text-8xl text-sky-300 p-4 shadow-xl mb-4 backdrop-blur-lg rounded-xl overflow-hidden">
        Quiz
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between items-stretch gap-2 bg-stone-200 py-8 px-12 rounded-lg"
      >
        <input
          type="text"
          name="userName"
          required
          placeholder="NAME"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border-x-4 font-semibold border-sky-500 bg-stone-100 focus:ring-2 text-sky-500 focus:ring-sky-500  rounded-md s text-center shadow-xl placeholder:text-sky-500 focus:ring-inset focus:outline-none h-10 transition delay-150 focus:scale-x-90"
        />

        {error !== "" && (
          <div className="text-red-500 p-2 rounded-md bg-slate-50">{error}</div>
        )}
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border-none bg-stone-100 shadow-xl text-sky-500 font-semibold tracking-widest text-center uppercase focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl hover:cursor-pointer h-8"
        >
          <option className="text-stone-300">gender</option>
          <option
            value={"male"}
            className="bg-sky-500 text-stone-800 font-semibold "
          >
            male
          </option>
          <option
            value={"female"}
            className="bg-rose-400 text-stone-800 font-semibold"
          >
            female
          </option>
        </select>
        <button className="text-stone-200 border-x-4 border-sky-500 bg-sky-600 p-4 shadow-2xl rounded-md  uppercase font-semibold tracking-widest text-2xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:border-y-4 hover:border-sky-500 duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 ">
          submit
        </button>
      </form>
    </div>
  );
}
