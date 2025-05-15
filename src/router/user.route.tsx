import Blogs from "../pages/blogs/Blogs";
import Home from "../pages/Home/Home";

export const userRoute = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
];
