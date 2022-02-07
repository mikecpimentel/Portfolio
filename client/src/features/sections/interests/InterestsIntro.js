import { Link } from "react-router-dom"

export const InterestsIntro = () => {
  return (
    <div className="animate__animated animate__fadeInUp animate__faster intro-text-area">
    <p>
      Every bit of this world fascinates me. I have an insatiable appetite for information and I voraciously consume it every hour of the day.
    </p>
    <p>
      Although my interests are infinitely broad, here is a less-than-infinite list of my most passionate interests:
    </p>
    <ul>
      <li>Technology, naturally</li>
      <li>Finance, capitalism and the global markets.</li>
      <li>Economics and economic data</li>
      <li>Foreign policy</li>
      <li>Journalism (I've been obsessed with NY Times coverage for years)</li>    
      <li>Politics, both domestic and international</li>
      <li>Human cultures and languages</li>
    </ul>
    <p>
      My personal interests may or may not be relevant to my candidacy, but I include them here just in case this information proves valuable.</p><p>
    </p>
    <Link to="recent-books" className="intro-button">View Latest Readings</Link>
    </div>
  )
}