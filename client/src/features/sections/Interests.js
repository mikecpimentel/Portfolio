import { NavLink, Outlet } from 'react-router-dom'



export const Interests = () => {
    return (
        <div>
            <h3 className="section-header">Interests</h3>
            <div className='sub-section-links'>
                <NavLink to="reading-list">Recent Books</NavLink>{" "}
                <NavLink to="podcasts">Podcasts</NavLink>
            </div>
            <p className="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I'm still around the beginning of my journey, but I plan on making rapid progress. I still have much to learn, but..</p>
            
            <Outlet />
        </div>
    )
}