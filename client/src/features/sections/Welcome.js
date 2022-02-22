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
            Hello 👋🏼 and Welcome. I am a..
         </p>
         <p className="welcome-2">Full-Stack Software Dev/Eng</p>
         <p className="welcome-1">Thank you for visiting!</p>
         <p className="welcome-1">
            Entry-level developer here, experienced with many of the latest
            frontend and backend tools, including React, Redux, and Node.
         </p>
         <p className="welcome-1">I am eager and ready to join your team.</p>
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
