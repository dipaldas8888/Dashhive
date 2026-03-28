import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./router/router.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        newestOnTop
        pauseOnHover
      />
    </>
  </AuthProvider>,
);
