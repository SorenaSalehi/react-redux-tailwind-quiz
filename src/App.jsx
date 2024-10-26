import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";

export default function App() {
  //router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/home", element: <Home />},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
