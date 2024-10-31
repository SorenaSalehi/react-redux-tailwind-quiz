import React, { useEffect, useState } from "react";
import UserPoints from "../features/user/UserPoints";
import User from "../features/user/User";
import { useSelector } from "react-redux";
import { getAvatar } from "../services/apiAvatar";
import { getTime } from "../utils/helpers";

export default function Header() {
  const { gender } = useSelector((store) => store.user);
  const [avatar, setAvatar] = useState("avatar");
 
 //fetch avatar
  useEffect(() => {
    async function getAvt() {
      const res = await getAvatar(gender)
      setAvatar(res);
    }
    // getAvt()
  }, []);


    const time = getTime()

  return (
    <header className="flex justify-between p-4 mb-4">
      <div className="w-14">
        <img src={avatar} alt="avatar" className="w-auto"/>
      </div>
      <div>
        <p>good {time}</p>
        <User />
      </div>
      <div
        className="flex
      "
      >
        <span>💎</span>
        <UserPoints />
      </div>
    </header>
  );
}
