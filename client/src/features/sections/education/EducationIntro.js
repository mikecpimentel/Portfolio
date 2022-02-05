import { Link } from "react-router-dom"

export const Educationintro = () => {
  return (
    <div className="animate__animated quick-fade-in-up animate__faster intro-text-area">
      <p>
        My endeavor to educate myself has been fraught but unceasing, thanks largely to an unstable childhood.
        From dropping out of high school in 9th grade, to getting into community college, to clawing my way to university, to dropping out once again
      </p>
      <p>
        By the time I fought my way to university, my mind had melted from a lifetime of stress. I withdrew (in good standing) from the university shortly before graduating. the university gave me health insurance, for the first time in my life.
      </p>
      <p>
        I have lived in my car and have gone 90% of my life without a bed. But I've never stopped being super optimistic for the future. It is how I stay alive. The next few tabs offer some of the highlights.
      </p>
      <Link to="pre-university" className="intro-button">View College Work</Link>
    </div>
  )
}