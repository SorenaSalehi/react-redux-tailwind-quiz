import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Suspense from "./ui/Suspense";
import AppLayout from "./ui/AppLayout";
import { useSelector } from "react-redux";
import Login from "./ui/Login";
const Home = lazy(() => import("./ui/Home"));
const Quiz = lazy(() => import("./ui/quiz/Quiz"));

export default function App() {
  const { userName } = useSelector((store) => store.user);

  //router
  const router = createBrowserRouter([
    {
      element: userName === "" ? <Login /> : <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/quiz", element: <Quiz /> },
      ],
    },
  ]);

  return (
    <React.Suspense fallback={<Suspense />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}
