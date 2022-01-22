import { NavLink } from 'react-router-dom'

export const NavList = () => {

    return (
        <div style={{minWidth:"220px"}}>
            <ul className="vertical-nav">
                <NavLink to="/skills">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>Skills</li>}</NavLink>
                <NavLink to="/education">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>Education</li>}</NavLink>
                <NavLink to="/projects">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>Projects</li>}</NavLink>
                <NavLink to="/interests">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>Interests</li>}</NavLink>
                <NavLink to="/FAQ">{({isActive}) => isActive ? <li>&#x27F6;&#x27F6;&#x27F6;</li> : <li>FAQ</li>}</NavLink>
            </ul>
            
        </div>
    );
}