import { createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Pro from "./Pro";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/co",
    element: <Contact />,
  },
  {
    path: "/pro",
    element: <Pro />,
  },
]);

export default router;
