import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import UserPoints from "../features/user/UserPoints";
import User from "../features/user/User";
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
    getAvt()
  }, []);


    const time = getTime()

  return (
    <header className="flex justify-between p-4 text-sky-200">
      <div className="flex gap-2 capitalize w-14">
        <img src={avatar} alt="avatar" className="w-auto"/>
        <div>
        <p className="text-nowrap">good {time}</p>
        <User />
        </div>
      </div>
      <div
        className="flex p-2 border-x-2 border-sky-900 h-max sm:text-xl"
      >
        <span>💎</span>
        <UserPoints />
      </div>
    </header>
  );
}
