import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/login",
      Component: Login,
    },
    {
      path: "/browse",
      Component: Browse,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
