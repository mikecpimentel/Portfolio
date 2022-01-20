import { Link, Outlet } from 'react-router-dom'



export const Interests = () => {
    return (
        <div>
            <h3>Interests</h3>
            <Link to="reading-list">Recent Books</Link> | {" "}
            <Link to="podcasts">Podcasts</Link>
            <p className="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I'm still around the beginning of my journey, but I plan on making rapid progress. I still have much to learn, but..</p>
            
            <Outlet />
        </div>
    )
}