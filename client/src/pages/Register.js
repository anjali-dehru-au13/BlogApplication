import React, { useState } from "react";

const Register = (props) => {
 const [userData, setUserData] = useState({});
 const handleInputData = (e, field) => {
  setUserData((prevState) => {
   return {
    ...prevState,
    [field]: e.target.value,
   };
  });
 };
 const register = (e) => {
  e.preventDefault();
 };
 return (
  <form action="" className="register" onSubmit={register}>
   <h1>Register</h1>
   <input
    type="email"
    placeholder="email"
    value={userData?.email}
    onChange={(e) => handleInputData(e, "email")}
   />
   <input
    type="text"
    placeholder="username"
    value={userData?.username}
    onChange={(e) => handleInputData(e, "username")}
   />
   <input
    type="password"
    placeholder="password"
    value={userData?.password}
    onChange={(e) => handleInputData(e, "password")}
   />
   <input
    type="password"
    placeholder="confirm password"
    value={userData?.confirmPassword}
    onChange={(e) => handleInputData(e, "confirmPassword")}
   />
   <button>Register</button>
  </form>
 );
};

export default Register;
