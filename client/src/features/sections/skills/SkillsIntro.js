import { Link } from "react-router-dom"

export const SkillsIntro = () => {
  return (
    <div className="animate__animated quick-fade-in-up animate__faster intro-text-area">
    <p>
      I've been fortunate enough to accumulate a few skills over the years. The next few tabs will introduce some of the skills I currently have, as well as offer an idea of where I'd like to go. I also include a few "extra credit" skills that may or may not be relevant for my next position.
    </p>
    <p>
      These lists are, of course, non-exhaustive and subject to frequent expansion. There is much I am eager to learn.
    </p>
    <Link to="base-skills" className="intro-button">View Current Skills</Link>
    </div>
  )
}