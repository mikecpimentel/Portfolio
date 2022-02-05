import { NavLink, Outlet } from 'react-router-dom'



export const Interests = () => {
    return (
        <>
            <div className='section-top'>
                <h3 className="section-header animate__animated animate__fadeIn animate__faster">Interests</h3>
                <div className='sub-section-links'>
                    <NavLink to="/interests" end>Intro</NavLink>
                    <NavLink to="reading-list">Recent Books</NavLink>
                    <NavLink to="podcasts">Podcasts</NavLink>
                    <NavLink to="travel">Travel</NavLink>
                </div>
            </div>
            <div className='section-bottom'>
            <Outlet />
            </div>
        </>
    )
}