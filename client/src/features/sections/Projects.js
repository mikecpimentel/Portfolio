import { Link, Outlet } from 'react-router-dom'

export const Projects = () => {
    return (
        <div>
            <h3>Projects</h3>
            <p className="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I'm still around the beginning of my journey, but I plan on making rapid progress. I still have much to learn, but..</p>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between"}}>
                <Link to="lets-ask-bobby">
                    <div className="floating-white floating-white-3">
                        <p>Let's Ask Bobby</p>
                    </div>
                </Link>
                <Link to="geller-portal">
                    <div className="floating-white floating-white-3">
                        <p>Geller Portal</p>
                    </div>
                </Link>
                <Link to="collabolist">
                    <div className="floating-white floating-white-3">
                        <p>Collabolist</p>
                    </div>
                </Link>
                <Link to="year-2053">
                    <div className="floating-white floating-white-3">
                        <p>Year 2053</p>
                    </div>
                </Link>
                <Link to="wordpress-tinkerings">
                    <div className="floating-white floating-white-3">
                        <p>WordPress Tinkerings</p>
                    </div>
                </Link>
            </div>
            <Outlet />
        </div>
    )
}