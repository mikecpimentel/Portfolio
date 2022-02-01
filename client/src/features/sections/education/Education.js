import { NavLink, Outlet } from 'react-router-dom'




export const Education = () => {
    return (
        <div>
            <div className='section-top'>
                <h3 className="section-header animate__animated animate__fadeIn animate__faster">Education</h3>
                <div className='sub-section-links' style={{position:"absolute"}}>
                    <NavLink to="/education" end>Intro</NavLink>
                    <NavLink to="pre-university">Pre-University</NavLink>
                    <NavLink to="university">University</NavLink>
                    <NavLink to="online">Online</NavLink>
                </div>
            </div>
            
            <div style={{width:"100%"}}>
                <Outlet />
            </div>
        </div>
    )
}