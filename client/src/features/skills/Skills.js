import { NavLink, Outlet } from "react-router-dom"

export const Skills = () => {
    return (
        <div>
            <h3 className="section-header">Skills</h3>
            <div className="sub-section-links">
                <NavLink to="base-skills">Current Skills</NavLink>{" "}
                <NavLink to="extra-credit">"Extra Credit"</NavLink>
            </div>
            <Outlet />
        </div>
    )
}