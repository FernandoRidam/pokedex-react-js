import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import { AppLayout } from "../components/layouts/appLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        element: (<Home />),
      },
      {
        path: "/pokemon/:id",
        element: (<Pokemon />),
      },
    ]
  }
]);

export default router;
