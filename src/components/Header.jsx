import React, { useEffect, useState } from "react";
import netflixLogo from "../assets/netflixLogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FiBell } from "react-icons/fi";
import { FiSearch } from "react-icons/fi"; // Feather search

import { FiChevronDown } from "react-icons/fi"; 
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [showArrow, setShowArrow] = useState(false)

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

  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
  if (user) {
  
    const {uid, email, displayName, photoURL} = user;
    dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}))
     navigate("/browse")

  } else {
    dispatch(removeUser())
    navigate("/")
  }


  return () => unsubscribe();
});
  },[])
  return (
    <div className="absolute w-screen  bg-gradient-to-b from-black/100  z-100 flex gap-10 px-6">
      <img className="w-48 h-11  " src={netflixLogo} alt="" />

      {user && (
        <div className="flex justify-between text-center  mt-2 w-full">
          <div className="hidden md:block">
            <ul className="flex gap-4  text-white">
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
          </div>
          <div className="flex gap-2">
            <button className=" flex gap-1 cursor-pointer">
              <FiSearch size={20} color="white" /> <span className="text-white -mt-1">GPT-Search</span>
            </button>
            <FiBell size={20} color="white" />

            <img
              src={user.photoURL}
              alt=""
              className="w-6 h-6 z-1000 rounded"
            />
            <div>
              <FiChevronDown size={18} onClick={()=>setShowArrow(prev=>!prev)} className="text-white text-[2px] cursor-pointer"/>
            {showArrow && <button
              className=" text-xs cursor-pointer  text-white "
              onClick={() => handleSignOut()}
            >
              SignOut
            </button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
