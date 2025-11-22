import React, { useState } from "react";
import { Link } from "react-router";
import bg from "../assets/bg.png";

const Login = () => {
  let [isSignIn, setSignIn] = useState(true);

  function toggleSignIn() {
    setSignIn(!isSignIn);
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
        <div className=" absolute w-full h-screen flex justify-center items-center ">
          <div className="w-4/12   bg-black bg-opacity-50 rounded-md text-white">
            <form action="" className="mx-14 mt-14 ">
              <h1 className="font-bold text-4xl">
                {isSignIn ? "Sign In" : "Sign Up"}
              </h1>
              <div className="flex flex-col items-center justify-between w-full gap-y-5 mt-8">
                {!isSignIn && (
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-white rounded-md p-4 w-full  bg-transparent bg-opacity-60"
                  />
                )}
                <input
                  type="text"
                  placeholder="Email or mobile number "
                  className="border border-white rounded-md p-4 w-full  bg-transparent bg-opacity-60"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border  border-white rounded-md p-4 w-full  bg-transparent bg-opacity-60"
                />
                <button className=" bg-red-600 text-white font-bold rounded-md p-2 w-full h-12">
                  {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                {isSignIn && <p>OR</p>}
                {isSignIn && (
                  <button className="bg-zinc-900 bg-opacity-100 text-white font-bold rounded-md p-2 w-full h-12">
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
                className=" appearance-none mt-5 size-4 border-2 border-gray-400 rounded-sm bg-black checked:text-white checked:bg-slate-50"
              />
              <label htmlFor="rememeberme" className="text-lg pl-2">
                Remember me
              </label>
              <p className="pt-1 mb-10">
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
