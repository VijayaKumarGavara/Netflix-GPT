import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
// import bg from "../assets/bg.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import validateData from "../utils/validateData";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  let [isSignIn, setSignIn] = useState(true);
  let [validateMessage, setValidateMessage] = useState(null);
  let [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const bg =
    "https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg";
  function toggleSignIn() {
    setValidateMessage(null);
    setSignIn(!isSignIn);
  }
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  async function handleSubmit() {
    const message = validateData(
      !isSignIn ? name.current.value : null,
      email.current.value,
      password.current.value
    );
    setValidateMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/v2/D5603AQE4-4Tm6aAicA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730643783062?e=1766016000&v=beta&t=XHClQlXbEc8po2QvLZMhnS_NowOeqsJEGL-I6YZNxqc",
          })
            .then(() => {
              console.log(user);
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setValidateMessage(`${errorCode}-${errorMessage}`);
          // ..
        });
    } else {
      // Sign In

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setValidateMessage(`${errorCode}-${errorMessage}`);
        });
    }
  }

  return (
    <>
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.9)), url(${bg})`,
        }}
      >
        <div className="absolute ml-32 w-48">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>
        <div className=" mt-5 absolute w-full h-auto flex justify-center items-center ">
          <div className="w-4/12   bg-black bg-opacity-50 rounded-md text-white">
            <form
              action=""
              className="mx-14 mt-10 "
              onSubmit={(event) => event.preventDefault()}
            >
              <h1 className="font-bold text-4xl">
                {isSignIn ? "Sign In" : "Sign Up"}
              </h1>
              <div className="flex flex-col items-center justify-between w-full gap-y-5 mt-8">
                {!isSignIn && (
                  <input
                    ref={name}
                    type="text"
                    placeholder="Name"
                    className="border border-slate-400 rounded-md focus:outline-none p-4 w-full  bg-transparent bg-opacity-60"
                  />
                )}
                <input
                  ref={email}
                  type="email"
                  placeholder="Email or mobile number "
                  className="border border-slate-400 rounded-md focus:outline-none p-4 w-full  bg-transparent bg-opacity-60"
                />
                <div className="w-full border   border-slate-400 rounded-md flex justify-between">
                  <input
                    ref={password}
                    type={!showPassword ? "password" : "text"}
                    placeholder="Password"
                    className="w-full focus:outline-none p-4   bg-transparent bg-opacity-60"
                  />
                  <button
                    type="button"
                    className="mr-4 text-slate-400 "
                    onClick={togglePasswordVisibility}
                  >
                    {/* {!showPassword ? "show" : "hide"} */}
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </button>
                </div>
                <p className="text-red-600 font-semibold text-start">
                  {validateMessage}
                </p>
                <button
                  className=" bg-red-600 text-white font-bold rounded-md p-2 w-full h-12 hover:bg-red-700"
                  onClick={handleSubmit}
                >
                  {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                {isSignIn && <p>OR</p>}
                {isSignIn && (
                  <button className="bg-zinc-900 bg-opacity-100 text-white font-bold rounded-md p-2 w-full h-12 hover:bg-zinc-800">
                    Use a sign-in code
                  </button>
                )}

                {isSignIn && (
                  <Link className=" underline">Forgot password?</Link>
                )}
              </div>
              <input
                type="checkbox"
                name="rememeberme"
                className="  mt-5 size-4 border-2 border-gray-400 rounded-sm bg-black focus:ring-1 focus:ring-brand-soft"
              />
              <label htmlFor="rememeberme" className="text-lg pl-2">
                Remember me
              </label>
              <p className="pt-1 mb-2">
                {isSignIn ? "New to Netflix? " : "Already have an account? "}
                <span
                  className="font-semibold hover:underline cursor-pointer"
                  onClick={toggleSignIn}
                >
                  {isSignIn ? "Sign up now." : "Sign In"}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
