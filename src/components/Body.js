import Login from "./Login";
import Browse from "./Browse";
import Home from "./Home";

import { addUser, removeUser } from "../utils/userSlice";

import { createBrowserRouter,Navigate, RouterProvider } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
const Body = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
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
    return ()=>unsubscribe();
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/browse" replace /> : <Home />,
    },
    {
      path: "/login",
      element: user ? <Navigate to="/browse" replace /> : <Login />,
    },
    {
      path: "/browse",
      element: user ? <Browse /> : <Navigate to="/login" replace />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
