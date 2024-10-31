import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";

export default function AppLayout() {
  const { userName } = useSelector((store) => store.user);
  console.log(userName);

  return (
    <div className="bg-stone-100 h-screen">
      {/* //if is the first time using app  */}
      {userName === "" && <Login />}

      {/* //if not first time  */}
      {userName !== "" && (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
}
