import { useState, useEffect } from "react";
import { useAccessToken } from "./AccessTokenContext";
import { Login } from "./Login";
import { NotesList } from "./NotesList";

export const SiteOne = () => {
   const [loggedIn, setLoggedIn] = useState(false);
   const { accessToken, refreshAccessToken } = useAccessToken();

   useEffect(() => {
      (async () => {
         if (!accessToken) {
            await refreshAccessToken();
            console.log("SiteOne: " + accessToken);
         }
      })();
   }, []);

   console.log("SiteOne component run");

   /**
    * Upon arrival:
    * 1. Is there an access token set? If so, use to fetch data.
    * 2. If not, try to grab token from /token endpoint.
    * 3. If server responds that there is no refresh token, then load Login component
    */

   if (!accessToken) return <Login setLoggedIn={setLoggedIn} />;

   return <NotesList />;
   /*
   return (
      <div>
         <p>Access Token:</p>
         <p style={{ wordWrap: "break-word" }}>{accessToken}</p>
         <h2>Notes</h2>
         <NotesList accessToken={} />
         <h2>Stats</h2>
         <p>Your email address:</p>
         <p>Last login</p>
         <p>Lifetime time on site:</p>
         <p>Pages visited: </p>
         <p>Favorite Pokemon: </p>
         <p>Devices used to access this site: </p>
         <p>Total Notes created:</p>
      </div>
   );
   */
};
