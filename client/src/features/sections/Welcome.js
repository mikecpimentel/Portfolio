import { Link } from "react-router-dom"
import myPhoto from '../../images/port-photo.jpeg'


export const Welcome = () => {
    
    return (
        <div className="welcome-wrapper">
            <img src={myPhoto} className="profile-photo" />
            <p style={{fontWeight:"200", fontSize:"1.25em", color:"#fffc"}}>Hello 👋🏼 and Welcome</p>
            <p className="welcome-2">Full-Stack Software Dev/Eng</p>
            <p className="welcome-1">Experienced in both backend and frontend development using React, Redux. Eager and ready to join your team.</p>
            <Link to="/skills" className="intro-button" style={{marginTop:"30px"}}>Come on in</Link>
        </div>
    )
}