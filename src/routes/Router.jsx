import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default Router;
