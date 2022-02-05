import { Link } from "react-router-dom"

export const InterestsIntro = () => {
  return (
    <div className="animate__animated animate__fadeInUp animate__faster intro-text-area">
    <p>
      Every bit of this world fascinates me. My interests are infinitely broad, but here is a less-than-infinite list of my most passionate interests:
    </p>
    <ul>
      <li>Finance, capitalism and the global markets.</li>
      <li>Economics and economic data</li>
      <li>Foreign policy</li>
      <li>Journalism (I've been obsessed with NY Times coverage for years)</li>    
      <li>Domestic and international politics</li>
      <li>Technology and the future thereof</li>
      <li>Languages</li>
    </ul>
    <p>
      I live for numbers and data and hope to do big and interesting things using numbers and data.</p><p>
    </p>
    <Link to="recent-books" className="intro-button">Discover what fascinates me</Link>
    </div>
  )
}