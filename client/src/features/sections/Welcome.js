import { Link } from "react-router-dom"


export const Welcome = () => {
    
    return (
        <div className="welcome-wrapper">
            <p className="welcome-1">Hi there</p>
            <p className="welcome-2">Full-Stack Software Dev/Eng</p>
            <p className="welcome-1">...eager to be your next</p>
            <Link to="/skills" className="intro-button">Come on in</Link>
        </div>
    )
}