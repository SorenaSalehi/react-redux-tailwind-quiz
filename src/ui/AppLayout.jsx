import React, { lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
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
      } bg-no-repeat bg-center bg-slate-900 h-screen flex flex-col gap-40 sm:gap-10 sm:overflow-y-scroll`}
    >
      <Header />
      <main className="flex justify-center m-2 sm:h-3/4">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
