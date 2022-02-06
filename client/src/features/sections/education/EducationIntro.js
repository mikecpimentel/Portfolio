import { Link } from "react-router-dom"

export const Educationintro = () => {
  return (
    <div className="animate__animated quick-fade-in-up animate__faster intro-text-area">
      <p>
        My endeavor to educate myself has been fraught but unceasing. Owing to a largely unstable childhood, my life has been decidedly nontraditional. I was expelled from 7th grade, dropped out permanently in 9th grade, to getting into community college, and clawed my way to university — only to drop out once again. A lifetime of stress and anxiety had 
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