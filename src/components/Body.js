import Login from "./Login";
import Browse from "./Browse";
import Home from "./Home";

import { addUser, removeUser } from "../utils/userSlice";

import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

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
