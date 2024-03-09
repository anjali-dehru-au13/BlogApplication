import React, { useState } from "react";

const Login = () => {
 const [loginInfo, setLoginInfo] = useState();
 const LoginInfoHandler = (e, field) => {
  setLoginInfo((prevData) => {
   return {
    ...prevData,
    [field]: e.target.value,
   };
  });
 };
 return (
  <form action="" className="login">
   <h1>Login</h1>
   <input type="text" placeholder="username" />
   <input type="password" placeholder="Password" />
   <button>Login</button>
  </form>
 );
};

export default Login;
