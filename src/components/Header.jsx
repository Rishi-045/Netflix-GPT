import React, { useState } from "react";
import netflixLogo from "../assets/netflixLogo.png";
//import netflixUserIcon from "../assets/netflix-user-icon.png"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FiBell } from "react-icons/fi";
import { FiSearch } from "react-icons/fi"; // Feather search

import { FiChevronDown } from "react-icons/fi"; 

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [showArrow, setShowArrow] = useState(true)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen  bg-gradient-to-b from-black/100  z-10 flex gap-10 px-2">
      <img className="w-48  " src={netflixLogo} alt="" />

      {user && (
        <div className="flex justify-between text-center  mt-2 w-full">
          <ul className="flex gap-4    text-white">
            <Link to="#">
              <li>Home</li>
            </Link>
            <Link to="#">
              
              <li>TV Shows</li>
            </Link>
            <Link to="#">
              
              <li>Movies</li>
            </Link>
            <Link to="#">
              
              <li>New & Popular</li>
            </Link>
            <Link to="#">
              {" "}
              <li>My List</li>
            </Link>
            <Link to="#">
              
              <li>Browse By Languages</li>
            </Link>
          </ul>
          {console.log(user.photoURL)}
          <div className="flex gap-2">
            <FiSearch size={20} color="white" />
            <FiBell size={20} color="white" />

            <img
              src={user.photoURL}
              alt=""
              className="w-6 h-6 z-1000 rounded"
            />
            <div>
              <FiChevronDown size={20} onClick={()=>setShowArrow(prev=>!prev)} className="text-white text-[2px]"/>
            {showArrow && <button
              className=" text-sm cursor-pointer"
              onClick={() => handleSignOut()}
            >
              Sign Out
            </button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
