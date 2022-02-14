import { Outlet } from "react-router-dom"

export const Section = (props) => {
  return (
    <div>
      <>
        <div className='section-top'>
            <h3 className="section-header animate__animated animate__fadeIn animate__faster">{props.name}</h3>
            <div className='sub-section-links'>
                {props.children}
            </div>
        </div> 
        <div className='section-bottom'>
            <Outlet />
        </div>
      </>
    </div>
  )
}