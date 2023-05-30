import { createBrowserRouter } from "react-router-dom";
import MainViews from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainViews />,
  },
  {
    path: "/women-t-shirts",
    element: <MainViews />,
  },
  {
    path: "/child-t-shirts",
    element: <MainViews />,
  },
]);
