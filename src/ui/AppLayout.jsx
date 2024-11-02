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
      } bg-no-repeat bg-center bg-slate-900 h-screen flex flex-col justify-between gap-40`}
    >
      <Header />
      <main className="mb-16 flex justify-center h-screen">
        <Outlet />
      </main>
    </div>
  );
}
