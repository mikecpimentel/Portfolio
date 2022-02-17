import { NavLink } from 'react-router-dom'

export const NavList = () => {

    return (
        <div className="nav-list">
            <ul className="vertical-nav">
                <NavLink to="/skills">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>Skills</li>}</NavLink>
                <NavLink to="/education">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>Education</li>}</NavLink>
                <NavLink to="/projects">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>Projects</li>}</NavLink>
                <NavLink to="/interests">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>Interests</li>}</NavLink>
                <NavLink to="/FAQ">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>FAQ</li>}</NavLink>
                <NavLink to="/contact">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>Contact</li>}</NavLink>
                <NavLink to="/new-projects">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>New Projects</li>}</NavLink>
            </ul>
            
        </div>
    );
}