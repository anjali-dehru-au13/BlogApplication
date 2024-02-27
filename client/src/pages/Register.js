import React from "react";

const Register = (props) => {
 return (
  <form action="" className="register">
   <h1>Register</h1>
   <input type="email" placeholder="email" />
   <input type="text" placeholder="username" />
   <input type="password" placeholder="Password" />
   <input type="password" placeholder="confirm password" />
   <button>Register</button>
  </form>
 );
};

export default Register;
