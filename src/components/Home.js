import { BG_IMG_URL } from "../utils/constants";
import Header from "./Header";
const Home = () => {
  const bg=BG_IMG_URL;
   return (
    <>
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.9)), url(${bg})`,
        }}
      >
        <Header/>
        <div className="size-full flex justify-center items-center relative">
          <div className="w-10/12 h-auto items-center text-white flex flex-col gap-10 mt-20">
            <div className="text-6xl font-bold text-center w-7/12 ">Unlimited movies, shows, and more</div>
            <div className="font-bold text-xl leading-tight">Starts at ₹149. Cancel at any time.</div>
            <div className="flex flex-col gap-5">
              <p className="">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="w-full flex justify-around gap-x-2">
                <input type="email" placeholder="Email address" className="w-9/12 px-4 border rounded-md border-slate-400 bg-transparent backdrop-blur-xs"/>
                <button className="bg-red-600 hover:bg-red-700 w-6/12  rounded-md h-14 font-bold text-2xl">Get Started {'>'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;