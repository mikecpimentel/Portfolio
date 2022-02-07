import { Link } from "react-router-dom"

export const Educationintro = () => {
  return (
    <div className="animate__animated quick-fade-in-up animate__faster intro-text-area">
      <p>
        My life's endeavor to educate myself has been fraught but unceasing. Owing to a largely chaotic childhood, my life has been decidedly nontraditional, especially when it came to education. I was expelled from 7th grade, dropped out permanently in 9th grade — but ultimately got into community college.
      </p>
      <p>
        By the time I got accepted to university, my mind had essentially melted from a lifetime of sickening stress and anxiety. I had health insurance and decent medical care for the first time in my life through the university, but world-class health insurance was not enough to erase two decades of insecurity. I withdrew — in good standing — from the university shortly before graduating in order to work on myself full-time.
      </p>
      <p>
        I've lived in my car in the past and have gone almost my entire life without a bed, but my optimism for the future has been unrelenting. A bright-eyed vision for the future is how I stay alive.
      </p>
      <p>
        The next few tabs offer some of the educational highlights from my life.
      </p>
      <Link to="pre-university" className="intro-button">View College Work</Link>
    </div>
  )
}