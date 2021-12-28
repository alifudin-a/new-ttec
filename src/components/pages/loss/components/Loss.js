import React, { useContext } from "react";
import { AuthContext } from "../../login/context/LoginContext";

const Loss = () => {
  const [user] = useContext(AuthContext);

  return (
    <>
      <div>id: {user.id}</div>
      <div>username: {user.username}</div>
      <div>password: {user.password}</div>
      Loss Page
    </>
  );
};

export default Loss;
