import React, { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store.js";
import Suspense from "./ui/Suspense.jsx";
const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={<Suspense/>}>
        <App />
      </React.Suspense>
    </Provider>
  </StrictMode>
);
