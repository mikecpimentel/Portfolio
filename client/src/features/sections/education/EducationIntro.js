import { Link } from "react-router-dom"

export const Educationintro = () => {
  return (
    <div>
      <p className="light-text">From dropping out of high school in 9th grade, to getting into community college, to clawing my way to university, to dropping out once again, my journey to educate myself has been fraught but unceasing.</p>
      <Link to="pre-university" className="intro-button">View College Work</Link>
    </div>
  )
}