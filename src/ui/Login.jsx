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
    e.preventDefault()
    if (gender === "") {
      setError("please select your gender !!");
      return;
    }
    if (gender !== "") {

      dispatch(settingUser(userName, gender));
      setError("");
      navigate("/home");
      return
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="userName">name</label>
      <input
        type="text"
        name="userName"
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="gender">gender</label>
      {error !== '' && <div>{error}</div>}
      <select name="gender" value={gender} onChange={e => setGender(e.target.value)}>
        <option value={'male'}>male</option>
        <option value={'female'}>female</option>
      </select>
      <button>submit</button>
    </form>
  );
}
