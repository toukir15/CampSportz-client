import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // update user profile
  const updateUserProfile = (name, userPhoto) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: userPhoto,
    });
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  // get current user
  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser.email })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
          })
          .catch((error) => console.log(error));
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // user info
  const userInfo = {
    createUser,
    loading,
    googleSignIn,
    user,
    updateUserProfile,
    logout,
    login,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
