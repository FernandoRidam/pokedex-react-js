import {
  Outlet,
  createBrowserRouter,
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import { AuthLayout } from "../components/layouts/authLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/",
        element: (<Login />),
      },
      {
        path: "/register",
        element: (<Register />),
      },
    ],
  },
]);

export default router;
