import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isLoggedIn = Boolean(user && user.uid);
  const [profileMenu, setProfileMenu] = useState(false);
  async function handleSignOut() {
    try {
      await signOut(auth);

      // Sign-out successful.
      navigate("/");
      console.log("Signed Out Successfully");
    } catch (error) {
      // An error happened.
      console.log(error);
      navigate("/error");
    }
  }
  function handleProfileMenu() {
    setProfileMenu(!profileMenu);
  }
  return (
    <>
      <div className="absolute mt-2 flex justify-between items-center w-full z-50 pointer-events-auto">
        <div className="ml-32 w-48">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>
        <div className="  mr-32 flex items-center gap-x-5">
          <select
            name="language"
            id="language"
            className="rounded-md h-8 w-32 border text-center  bg-black opacity-30 font-bold text-white"
          >
            <option
              value="english"
              className="bg-black bg-opacity-50 rounded-sm text-white"
            >
              English
            </option>
            <option
              value="hindi"
              className="bg-black bg-opacity-50 rounded-sm text-white"
            >
              Hindi
            </option>
            <option
              value="telugu"
              className="bg-black bg-opacity-50 rounded-sm text-white"
            >
              Telugu
            </option>
          </select>
          {!isLoggedIn && (
            <Link to="/login">
              <button
                type="button"
                className="cursor-pointer w-20 h-8 bg-red-600 font-bold rounded-md text-white"
              >
                Sign In
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <>
              <div
                className="cursor-pointer h-8 flex flex-row items-center"
                onClick={handleProfileMenu}
              >
                <div className="bg-black text-white">
                  <AccountCircleIcon className="h-full w-full" />
                </div>
                <span className="p-2 font-semibold text-lg">
                  {user.displayName.split(" ")[0]}{profileMenu?" 🢁":" 🡻"}
                </span>
              </div>
              {profileMenu && (
                <div className="absolute right-24 top-14 flex flex-col justify-center items-center w-32  h-36  bg-black  text-white font-bold tracking-wide rounded-md">
                  <Link
                    to="/profile"
                    className="mt-3 hover:bg-zinc-800 rounded-md w-24 px-3 py-1 text-center"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="hover:bg-zinc-800 rounded-md w-24 px-3 py-1 text-center"
                  >
                    Settings
                  </Link>
                  <span className="h-1 w-28 border-t border-slate-400 my-4"></span>
                  
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="cursor-pointer w-20 py-1 px-1 mb-3 bg-red-600 hover:bg-red-700 font-bold rounded-md text-white"
                    >
                      Sign Out
                    </button>
                  
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
