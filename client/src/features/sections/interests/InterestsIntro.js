import { Link } from "react-router-dom"

export const InterestsIntro = () => {
  return (
    <>
    <p className="light-text">If personal interests are irrelevant, please feel free to skip this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I'm still around the beginning of my journey, but I plan on making rapid progress. I still have much to learn, but..</p>
    <Link to="recent-books" className="intro-button">Discover what fascinates me</Link>
    </>
  )
}