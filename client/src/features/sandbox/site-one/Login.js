import { useState } from "react";
import { useAccessToken } from "./AccessTokenContext";
import "./site-one.css";

export const Login = (props) => {
   const [emailInput, setEmailInput] = useState("");
   const [passwordInput, setPasswordInput] = useState("");
   const { setAccessToken } = useAccessToken();
   console.log("Login component run");

   const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:4010/login", {
         method: "POST",
         credentials: "include",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      if (!response.ok) return console.log("There was an error");
      const data = await response.json();
      console.log(data.accessToken);
      setAccessToken(data.accessToken);
      props.setLoggedIn(true);
   };

   return (
      <div id="login-wrapper">
         <form onSubmit={handleSubmit}>
            <label>
               <p>Email:</p>
               <input
                  type="text"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
               />
            </label>
            <br />
            <label>
               <p>Password:</p>
               <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
               />
            </label>
            <br />
            <input type="submit" value="Submit" />
         </form>
      </div>
   );
};
