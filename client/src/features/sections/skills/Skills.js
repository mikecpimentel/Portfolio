import { NavLink, Outlet } from "react-router-dom"

export const Skills = () => {
    return (
        <>
            <div className="section-top">
                <h3 className="section-header animate__animated animate__fadeIn animate__faster">Skills</h3>
                <div className="sub-section-links">
                    <NavLink to="/skills" end>Intro</NavLink>
                    <NavLink to="base-skills">Current Skills</NavLink>
                    <NavLink to="extra-credit">"Extra Credit"</NavLink>
                    <NavLink to="future">The Future</NavLink>
                </div>
            </div>
            <div className="section-bottom">
            <Outlet />
            </div>
        </>
    )
}