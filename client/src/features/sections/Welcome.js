import { Link } from "react-router-dom";
import myPhoto from "../../images/me2.jpg";

export const Welcome = () => {
   return (
      <div className="welcome-wrapper">
         <img src={myPhoto} className="profile-photo" />
         <p
            style={{
               fontWeight: "300",
               fontSize: "1.25em",
               color: "#fffc",
               marginBottom: "5px",
            }}
         >
            Hello 👋🏼 and Welcome. I am an aspiring..
         </p>
         <p className="welcome-2">Full-Stack Software Engineer</p>
         <p className="welcome-1">
            I am a developer experienced with the latest
            frontend and backend tools, including React, Express, Node, and PostgreSQL.
         </p>
         <p className="welcome-1">I am ready to join your team.</p>
         <Link
            to="/skills"
            className="intro-button"
            style={{ marginTop: "20px" }}
         >
            Come on in
         </Link>
      </div>
   );
};
