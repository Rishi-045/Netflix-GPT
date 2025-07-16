import { useRef, useState } from "react";
import Header from "./Header";
import netflixBg from "../assets/netflixBg.png";
import netflixUserIcon from "../assets/netflix-user-icon.png"
import { validateForm } from "../utils/validate";
import { FaTimesCircle } from "react-icons/fa";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signUp, setSignUp] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function handleButtonClick() {
    // validate form
    const newName = signUp ? name.current?.value : null;
    const newEmail = email.current?.value;
    const newPassword = password.current?.value;

    const message = validateForm(newName, newEmail, newPassword);
    setErrorMsg(message);

    // Authentication

    // if the message contain any message (like "enter valid email" || "password invalid") then return
    if (message) return;

    if (signUp) {
      createUserWithEmailAndPassword(auth, newEmail, newPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          // Signed up
          updateProfile(user, {
            displayName: newName,
            photoURL: netflixUserIcon,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // console.log(user , auth.currentUser)

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // Profile updated!
            })
            .catch((error) => {
              setErrorMsg(error + message);
            });

     
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMsg(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, newEmail, newPassword)
        .then(() => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    }
  }

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img src={netflixBg} alt=""  className="w-full h-full object-cover"/>
      </div>

      {/* Sign In Form*/}
      <div className="relative top-22">
        <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/3 xl:w-1/4 
  bg-black/80 p-2 sm:p-8 
  mx-auto h-1/3 flex flex-col justify-center
  rounded text-white"
      >
        <h1 className="font-bold text-2xl sm:text-3xl py-4 text-center">
          {!signUp ? "Sign In" : "Sign Up"}
        </h1>
        {signUp && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-2 bg-[#605C5C] rounded placeholder-[#FDF7F7] w-full text-sm sm:text-base"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-2 bg-[#605C5C] rounded placeholder-[#FDF7F7] w-full text-sm sm:text-base"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-[#605C5C] rounded placeholder-[#FDF7F7] w-full text-sm sm:text-base "
        />
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          {errorMsg ? <FaTimesCircle color="red" size={16} /> : null}
          <p className="text-red-700 font-bold -mt-1">{errorMsg}</p>
        </div>
        <button
          onClick={handleButtonClick}
          className="p-2 my-4 font-bold bg-red-700 w-full rounded cursor-pointer hover:bg-red-800 transition"
        >
          {!signUp ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex flex-col gap-10 sm:gap-14 text-sm">
          <div className="flex gap-22">
            <label htmlFor="remember" className="text-sm cursor-pointer">
              <input
                type="checkbox"
                name=""
                id="remember"
                className="cursor-pointer text-blue-500"
              />
              Remeber Me?
            </label>

            <p className="text-sm cursor-pointer underline">Need Help?</p>
          </div>
          <div className="text-sm flex flex-col gap-3">
            <p className="text-gray-400">
              {!signUp ? "New to Netflix? " : "Already Member? "}{" "}
              <span
                className="cursor-pointer text-white font-bold underline"
                onClick={() => setSignUp((prev) => !prev)}
              >
                {!signUp ? "Sign Up now" : "Sign In now"}
              </span>
            </p>
            <p className="text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
