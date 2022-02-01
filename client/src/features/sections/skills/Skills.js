import { NavLink, Outlet } from "react-router-dom"

export const Skills = () => {
    return (
        <div>
            <div className="section-top">
                <h3 className="section-header animate__animated animate__fadeIn animate__faster">Skills</h3>
                <div className="sub-section-links">
                    <NavLink to="/skills" end>Intro</NavLink>
                    <NavLink to="base-skills">Current Skills</NavLink>
                    <NavLink to="extra-credit">"Extra Credit"</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}