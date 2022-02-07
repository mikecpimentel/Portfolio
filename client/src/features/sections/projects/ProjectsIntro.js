import { Link } from "react-router-dom"

export const ProjectsIntro = () => {
  return (
    <div className="animate__animated quick-fade-in-up animate__faster intro-text-area">
    <p>
      I have had access to a computer in some form throughout my life, and coding was a hobby I engaged in whenever I had the opportunity. I never imagined, however, that coding could be a viable career option (for some strange reason).
    </p>
    <p>
      Here you will find some of the projects I have worked on over the years, sorted in ascending chronological order. Aside from this portfolio site, only projects from the past are listed. My recent projects are still in progress.
    </p>
    <p>
      All projects include a list of images at the bottom.
    </p>
    <Link to="lets-ask-bobby" className="intro-button">Let's Have a Look!</Link>
    </div>
  )
}