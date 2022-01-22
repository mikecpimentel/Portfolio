import { NavLink } from 'react-router-dom'


export const SubSectionButton = (props) => {
    return (
        <>
            <NavLink to={props.page}>{props.text}</NavLink>{" "}
        </>
    )
}