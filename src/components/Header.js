import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user.uid;
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
    });
    return () => unsubscribe();
  }, []);

  const handleGptSerachClick = () => {
    // toggle gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex justify-between items-center w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-5 text-white font-semibold">
          {showGptSearch && (
            <select
              className="p-2  bg-gray-600 rounded-md "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 bg-orange-700 rounded-md"
            onClick={handleGptSerachClick}
          >
            {showGptSearch ? "Browse" : "GPT Search 🔍"}
          </button>
          <img
            className="w-8 rounded-md"
            alt="user-icon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="px-4 py-2 rounded-md bg-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
