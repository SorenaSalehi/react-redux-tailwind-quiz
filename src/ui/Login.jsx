import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { settingUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (gender === "") {
      setError("please select your gender !!");
      return;
    }
    if (gender !== "") {
      dispatch(settingUser(userName, gender));
      setError("");
      navigate("/home");
      return;
    }
  }

  return (
    <div className="flex flex-col w-screen p-10 items-center h-screen bg-[url('login.avif')] bg-no-repeat bg-center bg-cover">
      <div className=" h-32 text-center text-8xl text-stone-200 py-2 px-12 mb-2 mt-16 rounded-tl-full rounded-br-full overflow-hidden shadow-2xl backdrop-blur-3xl border-x-4 border-sky-400 tracking-widest">
        Quiz
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between w-1/2 items-stretch gap-2"
      >
        <label
          htmlFor="userName"
            className="text-stone-200 border-x-4 border-sky-500 backdrop-blur-3xl flex-grow text-center  shadow-2xl rounded-md uppercase font-semibold tracking-widest text-2xl"
        >
          name
        </label>

        <input
          type="text"
          name="userName"
          required
          placeholder="what's your name ?"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="focus:ring-2 text-sky-100 focus:ring-sky-500  border-none rounded-md s text-center placeholder:text-sky-500 focus:ring-inset focus:outline-none bg-transparent backdrop-blur-2xl h-10 transition delay-150 focus:scale-x-90"
        />
        <label
          htmlFor="gender"
          className="text-stone-200 rounded-md border-x-4 border-x-sky-500 backdrop-blur-3xl text-center shadow-2xl  uppercase font-semibold tracking-widest text-2xl "
        >
          gender
        </label>
        {error !== "" && <div className="text-red-500 p-2 rounded-md bg-slate-50">{error}</div>}
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border-none bg-transparent backdrop-blur-2xl text-sky-500 font-semibold tracking-widest text-center uppercase focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl hover:cursor-pointer h-8"
        >
          <option className="text-stone-300">male / female</option>
          <option value={"male"} className="bg-sky-500 text-stone-800 font-semibold ">
            male
          </option>
          <option value={"female"} className="bg-rose-400 text-stone-800 font-semibold">
            female
          </option>
        </select>
        <button className="text-stone-200 border-x-4 border-sky-500 backdrop-blur-3xl  underline p-4 shadow-2xl rounded-md  uppercase font-semibold tracking-widest text-2xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:border-y-4 hover:border-sky-500 duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 ">
          submit
        </button>
      </form>
    </div>
  );
}
