import React, { lazy, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  const [bgLoaded, setBgLoaded] = useState(false);

  //bg img lazy loading , using in className
  useEffect(() => {
    const img = new Image();
    img.src = "home.webp";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div
      className={`  ${
        bgLoaded ? "bg-[url('/home.webp')]" : "bg-slate-800"
      } bg-no-repeat bg-center bg-slate-900 h-dvh flex flex-col justify-between sm:gap-10 sm:overflow-y-scroll`}
    >
      <Header />
      <main className="flex justify-center m-2 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
