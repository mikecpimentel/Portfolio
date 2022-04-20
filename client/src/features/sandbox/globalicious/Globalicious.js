import React from "react";
import "./globalicious.css";
import mapfrothScreenshot from "../../../images/mapfroth/Screenshot 2022-04-20 073633.png";

const Globalicious = () => {
   return (
      <div id="globalicious-wrapper">
         <a
            href="https://mapfroth.com"
            target="_blank"
            rel="noreferrer"
            style={{
               color: "#fff",
               backgroundColor: "#D7263D",
               textDecoration: "none",
               padding: "7px 20px",
               borderRadius: "5px",
            }}
         >
            Visit MapFroth
         </a>
         <a href="https://mapfroth.com" target="_blank" rel="noreferrer">
            <img
               src={mapfrothScreenshot}
               style={{
                  width: "100%",
                  display: "inline-block",
                  marginTop: "20px",
               }}
               alt="MapFroth Screenshot"
            />
         </a>
      </div>
   );
};

export default Globalicious;
