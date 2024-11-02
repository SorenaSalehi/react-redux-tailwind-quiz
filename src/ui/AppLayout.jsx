import React, { lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "./Header";
const Login = lazy(() => import("./Login"));

export default function AppLayout() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "home.webp";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div
      className={`  ${
        bgLoaded ? "bg-[url('/home.webp')]" : "bg-slate-800"
      } bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-between gap-4`}
    >
      <Header />
      <main className="mb-16 h-[75%]">
        <Outlet />
      </main>
    </div>
  );
}
