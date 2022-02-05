import { Link } from "react-router-dom"

export const ProjectsIntro = () => {
  return (
    <div className="animate__animated quick-fade-in-up animate__faster intro-text-area">
    <p>
      I have had access to a computer in some form throughout my life. Here you will find some of the projects I have worked on over the years.
    </p>
    <p>
      I only detail my past projects here. My current projects are currently in progress (one of which is this site you're viewing). All projects listed have several images, except for the first project.
    </p>
    <p>
      When it comes to React, Redux, Node and modern applications, I am still around the beginning of my journey. However, my portfolio of modern projects is sure to expand in the near future.
    </p>
    <Link to="lets-ask-bobby" className="intro-button">Let's go!</Link>
    </div>
  )
}