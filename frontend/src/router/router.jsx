import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/dashboard/Home";
import Leads from "../pages/dashboard/Leads";
import Tasks from "../pages/dashboard/Tasks";

import ProtectedRoute from "../components/ProtectedRoute.jsx";

const isLoggedIn = !!localStorage.getItem("token");

const router = createBrowserRouter([
  {
    path: "/",
    element: isLoggedIn ? (
      <Navigate to="/dashboard" />
    ) : (
      <Navigate to="/login" />
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "leads",
        element: <Leads />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);

export default router;
