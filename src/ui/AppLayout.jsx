import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";

export default function AppLayout() {
  const { userName } = useSelector((store) => store.user);

  return (
    <div className=" bg-[url(home.avif)] bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-between">
      {/* //if is the first time using app  */}
      {userName === "" && (
        <div className="flex">
          <Login />
        </div>
      )}

      {/* //if not first time  */}
      {userName !== "" && (
        <>
          <Header />
          <main className="mb-16">
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
}
