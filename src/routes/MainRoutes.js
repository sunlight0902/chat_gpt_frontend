import { lazy } from "react";

// project imports
import Layout from "../layouts";
import Loadable from "../components/Loadable";

const ChatGPT = Loadable(lazy(() => import("../pages/ChatGPT")));

const MainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/main",
      element: <ChatGPT />,
    },
  ],
};

export default MainRoutes;
