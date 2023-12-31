import React, { createContext, useEffect, useState } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  

  useEffect((value)=>{
    const unsubcribe = onAuthStateChangedListener((user)=>{
      setCurrentUser(user);
      if(user){
        createUserDocumentFromAuth(user);
      }
    });
    return unsubcribe;
   },[])


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
