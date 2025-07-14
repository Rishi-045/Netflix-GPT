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
import { toggleGptSearchView } from "../utils/gptSlice";
import lang, { SUPPORTED_LANGUAGES } from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptButton = useSelector((store) => store.gpt?.showGptSearch);
  const [showArrow, setShowArrow] = useState(false);
  const langKey = useSelector((store) => store.config?.lang);

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

  const handleGptSearchView = () => {
    //toggle gpt view
    dispatch(toggleGptSearchView());
  };

  const handleLaguageOptions = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);
  return (
    <div className="absolute w-full z-50 bg-gradient-to-b from-black/100 px-4 py-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-10">
      <div className="flex justify-between items-center">
        <img
          className="w-32 md:w-48 h-auto"
          src={netflixLogo}
          alt="Netflix Logo"
        />
      </div>

      {user && (
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 w-full md:gap-4">
          <div className="hidden md:block">
            <ul className="hidden md:flex text-white gap-4">
              <Link to="#">
                <li>{lang[langKey].navItems.home}</li>
              </Link>
              <Link to="#">
                <li>{lang[langKey].navItems.movies}</li>
              </Link>
              <Link to="#">
                <li>{lang[langKey].navItems.myList}</li>
              </Link>
              <Link to="#">
                <li>{lang[langKey].navItems.newAndPopular}</li>
              </Link>
              <Link to="#">
                {" "}
                <li>{lang[langKey].navItems.tvShows}</li>
              </Link>
              <Link to="#">
                <li>{lang[langKey].navItems.browseByLanguages}</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select
              onChange={handleLaguageOptions}
              name=""
              id=""
              className="bg-transparent  text-white border-none focus:outline-none  text-sm"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-black"
                >
                  {lang.name}
                </option>
              ))}
            </select>
            {/* Gpt search button */}
            <button
              className=" flex items-center text-white text-sm gap-1 cursor-pointer"
              onClick={handleGptSearchView}
            >
              <FiSearch size={20} />{" "}
              {showGptButton ? "Browse" : `GPT-${lang[langKey].search}`}
            </button>

            <FiBell size={20} color="white" />

            <img src={user.photoURL} alt="user" className="w-6 h-6 rounded" />
            <div>
              <FiChevronDown
                size={18}
                onClick={() => setShowArrow((prev) => !prev)}
                className="text-white cursor-pointer"
              />
              {showArrow && (
                <button
                  className="cursor-pointer text-xs text-white "
                  onClick={() => handleSignOut()}
                >
                  {lang[langKey].signOut}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
