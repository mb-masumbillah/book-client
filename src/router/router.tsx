import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { userRoute } from "./user.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: userRoute,
  },
]);

export default router;
