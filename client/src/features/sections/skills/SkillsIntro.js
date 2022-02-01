import { Link } from "react-router-dom"

export const SkillsIntro = () => {
  return (
    <>
    <p className="light-text">I've been fortunate to pick up a few skills over the years. I list the skills I currently have at this moment, as well as a few potentially relevant "extra credit" skills that might be helpful in my next role.</p>
    <Link to="base-skills" className="intro-button">View Current Skills</Link>
    </>
  )
}