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
  <div className="formWrapperDiv">
   <form action="" className="login">
    <h1>Login</h1>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
   </form>
  </div>
 );
};

export default Login;
