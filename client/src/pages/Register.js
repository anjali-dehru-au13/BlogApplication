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

 //  const getRegister = () => {
 //   fetch("http://localhost:5000/register", {
 //    method: "POST",
 //    body: JSON.stringify(userData),
 //    headers: { "content-Type": "application/json" },
 //   })
 //    .then((response) => {
 //     return console.log(response);
 //    })
 //    .catch((error) => {
 //     return console.log(error);
 //    });
 //  };
 const register = async (e) => {
  e.preventDefault();
  const response = await fetch("http://localhost:5000/register", {
   method: "POST",
   body: JSON.stringify(userData),
   headers: { "content-Type": "application/json" },
  });
  if (response.status === 200) {
   alert("registration successful");
  } else {
   alert("registration failed");
  }
  // getRegister();
 };
 return (
  <div className="formWrapperDiv">
   <form action="" className="register" onSubmit={register}>
    <h1>Register</h1>
    <input
     type="email"
     placeholder="email"
     value={userData?.email}
     onChange={(e) => handleInputData(e, "email")}
     required
    />
    <input
     type="text"
     placeholder="username"
     value={userData?.username}
     onChange={(e) => handleInputData(e, "username")}
     required
    />
    <input
     type="password"
     placeholder="password"
     value={userData?.password}
     onChange={(e) => handleInputData(e, "password")}
     required
    />
    <input
     type="password"
     placeholder="confirm password"
     value={userData?.confirmPassword}
     onChange={(e) => handleInputData(e, "confirmPassword")}
     required
    />
    <button>Register</button>
   </form>
  </div>
 );
};

export default Register;
