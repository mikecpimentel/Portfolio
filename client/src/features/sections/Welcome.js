import { Link } from "react-router-dom";
import myPhoto from "../../images/port-photo.jpeg";

export const Welcome = () => {
   return (
      <div className="welcome-wrapper">
         <img src={myPhoto} className="profile-photo" />
         <p
            style={{
               fontWeight: "300",
               fontSize: "1em",
               color: "#fffc",
               marginBottom: "5px",
            }}
         >
            Hello 👋🏼 and Welcome. I am an aspiring..
         </p>
         <p className="welcome-2">Full-Stack Software Engineer</p>
         <p className="welcome-1">
            I am an entry-level-ish developer experienced with the latest
            frontend and backend tools, including React, Redux, Node, APIs and SQL.
         </p>
         <p className="welcome-1">I am eager to join your team.</p>
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
