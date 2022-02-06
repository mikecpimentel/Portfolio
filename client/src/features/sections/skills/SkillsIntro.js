import { Link } from "react-router-dom"

export const SkillsIntro = () => {
  return (
    <div className="animate__animated quick-fade-in-up animate__faster intro-text-area">
    <p>
      I'm fortunate to have been able to accumulate a few skills over the years. The next few tabs will introduce what I might be able to help your organization, as well as offer an idea of where I'd like to go.
    </p>
    <p>
        I also include a few "extra credit" skills that may potentially be of use.
    </p>
    <p>
      These lists are, of course, non-exhaustive and subject to frequent expansion. I learn more each and every day.
    </p>
    <Link to="base-skills" className="intro-button">View Current Skills</Link>
    </div>
  )
}