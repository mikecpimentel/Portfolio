import { NavLink, Outlet } from 'react-router-dom'




export const Education = () => {
    return (
        <div>
            <h3 className="section-header animate__animated animate__fadeIn animate__faster">Education</h3>
            <div className='sub-section-links'>
                <NavLink to="/education" end>Intro</NavLink>
                <NavLink to="pre-university">Pre-University</NavLink>
                <NavLink to="university">University</NavLink>
                <NavLink to="online">Online</NavLink>
            </div>
            
            
            <Outlet />
        </div>
    )
}