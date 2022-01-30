import { Link } from "react-router-dom"

export const SkillsIntro = () => {
  return (
    <>
    <p className="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I'm still around the beginning of my journey, but I plan on making rapid progress. I still have much to learn, but.. this list is ever-growing</p>
    <Link to="base-skills" className="intro-button">View Current Skills</Link>
    </>
  )
}