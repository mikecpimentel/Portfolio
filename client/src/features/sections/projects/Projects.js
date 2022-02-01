import { NavLink, Outlet } from 'react-router-dom'

export const Projects = () => {
    return (
        <div>
            <div className='section-top'>
                <h3 className="section-header animate__animated animate__fadeIn animate__faster">Projects</h3>
                <div className='sub-section-links'>
                    <NavLink to="/projects" end>Intro</NavLink>
                    <NavLink to="lets-ask-bobby">L.A.B.</NavLink>
                    <NavLink to="geller-portal">Geller Portal</NavLink>
                    <NavLink to="collabolist">Collabolist</NavLink>
                    <NavLink to="year-2053">Year 2053</NavLink>
                    <NavLink to="wordpress-stuff">WordPress</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}