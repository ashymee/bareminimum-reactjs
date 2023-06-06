import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../components/pages/AboutPage";
import HomePage from "../components/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
]);

export default router;
