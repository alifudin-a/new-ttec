import React, { useState, createContext } from "react";
export const AuthContext = createContext();

export const LoginProvider = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("active-user"));
  const cekUser = currentUser ? currentUser : null;
  const [user, setUser] = useState(cekUser);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};
