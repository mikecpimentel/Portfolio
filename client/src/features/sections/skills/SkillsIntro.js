import { Link } from "react-router-dom"

export const SkillsIntro = () => {
  return (
    <div className="animate__animated quick-fade-in-up animate__faster intro-text-area">
    <p>
      I'm fortunate to have been able to accumulate a few skills over the years. The next few tabs will introduce a bit of what I can currently offer your organization, including a few "extra credit" skills that could potentially of use.
    </p>
    <p>
      These lists are, of course, non-exhaustive and subject to frequent expansion. I continue learning each and every day.
    </p>
    <Link to="base-skills" className="intro-button">View Current Skills</Link>
    </div>
  )
}