import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Quiz from "./ui/quiz/Quiz";

export default function App() {
  //router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/quiz", element: <Quiz /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
