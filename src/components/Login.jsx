import React, { useState } from "react";
import Header from "./Header";
import netflixBg from "../assets/netflixBg.png";

const Login = () => {
    const [signUp, setSignUp] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflixBg} alt="" />
      </div>

      {/* Sign In Form*/}
      <form className="w-3/12 absolute  bg-black/80 p-8 m-30 mx-auto right-0 left-0 text-white rounded">
        <h1 className="font-bold text-3xl py-4">{!signUp ? "Sign In" : "Sign Up"}</h1>
        {signUp &&    <input
          type="text"
          placeholder="Name"
          className="p-1.5 my-2 bg-[#605C5C] rounded placeholder-[#FDF7F7] w-full"
        /> }
        <input
          type="text"
          placeholder="Email Address"
          className="p-1.5 my-2 bg-[#605C5C] rounded placeholder-[#FDF7F7] w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-1.5 my-2 bg-[#605C5C]  rounded placeholder-[#FDF7F7] w-full "
        />
        <button className="p-2 my-4 font-bold bg-red-700 w-full rounded cursor-pointer">
         {!signUp ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex flex-col gap-14">
          <div className="flex gap-22">
            <label for="remember" className="text-sm cursor-pointer">
              <input type="checkbox" name="" id="remember" className="cursor-pointer"/> Remeber Me?
            </label>

            <p className="text-sm cursor-pointer underline">Need Help?</p>
          </div>
          <div className="text-sm flex flex-col gap-3">
            <p className="text-gray-400">{!signUp ? "New to Netflix? " : "Already Member? "} <span className="cursor-pointer text-white font-bold underline" onClick={()=>setSignUp(prev=>!prev)}>{!signUp?"Sign Up now" :"Sign In now"}</span></p>
            <p className="text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. 
            </p>
          </div>
        </div>
      </form> 

      
    </div>
  );
};

export default Login;
