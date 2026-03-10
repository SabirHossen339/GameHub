import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
      path: "/auth",
      element: <h2>Authentication Layout</h2>
    },
    {
      path: "/game",
      element: <h2>Game Layout</h2>
    },
    {
      path: "/*",
      element: <h2>Error-404</h2>
    },
  ]
);

export default router
