import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isLoggedIn = Boolean(user && user.uid);
  console.log(user, isLoggedIn);
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed Out Successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  }
  return (
    <>
      <div className="absolute mt-2 flex justify-between items-center  w-full z-50 pointer-events-auto">
        <div className="ml-32 w-48">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>
        <div className="  mr-32 flex gap-x-5">
          <select
            name="language"
            id="language"
            className="rounded-md w-32 border text-center  bg-black opacity-30 font-bold text-white"
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
              <AccountCircleIcon className="bg-white outline-2"/>
              <Link to="/">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="cursor-pointer w-20 h-8 bg-red-600 font-bold rounded-md text-white"
                >
                  Sign Out
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
