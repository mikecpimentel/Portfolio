import React, { useContext, useState, useEffect, useCallback } from "react";

const AccessTokenContext = React.createContext();

export const useAccessToken = () => {
   console.log("useAccessToken() hook run");
   return useContext(AccessTokenContext);
};

export const AccessTokenProvider = ({ children }) => {
   const [accessToken, setAccessToken] = useState(null);
   console.log("AccessTokenProvider component run");

   const refreshAccessToken = useCallback(() => {
      console.log("fetching new token");
      fetch("http://localhost:4010/token", {
         credentials: "include",
      })
         .then((response) => response.json())
         .then((data) => {
            setAccessToken(data);
         })
         .catch((err) => {
            // no refresh token/no valid refresh token. send to login
            console.log(err + ", you are not even logged in.");
         });
   }, []);

   return (
      <AccessTokenContext.Provider
         value={{ accessToken, refreshAccessToken, setAccessToken }}
      >
         {children}
      </AccessTokenContext.Provider>
   );
};
