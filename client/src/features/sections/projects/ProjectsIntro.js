import { Link } from "react-router-dom"

export const ProjectsIntro = () => {
  return (
    <>
    <p className="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I'm still around the beginning of my journey, but I plan on making rapid progress. I still have much to learn, but..</p>
    <Link to="lets-ask-bobby" className="intro-button">Let's go!</Link>
    </>
  )
}