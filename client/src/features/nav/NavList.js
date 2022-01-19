import { NavLink } from 'react-router-dom'

export const NavList = () => {

    return (
        <div>
            <ul className="vertical-nav">
                <li>Testing</li>
                <li><NavLink to="/skills">What I'm Good At</NavLink></li>
                <li><NavLink to="/extra-credit">Extra Credit</NavLink></li>
                <li><NavLink to="/education">Education</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/interests">Interests</NavLink></li>
            </ul>
            
        </div>
    );
}