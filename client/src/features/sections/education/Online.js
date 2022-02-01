import { Institution } from "../../components/education/Institution"
import codecademyLogo from '../../../images/education/320px-Codecademy.svg.png'
import hackerRankLogo from '../../../images/education/800px-HackerRank_Icon-1000px.png'

export const Online = () => {
    return (
        <div className="online-institutions">
            <Institution name="Codecademy" city="Full-Stack Engineering Cert" logo={codecademyLogo} />
            <Institution name="HackerRank" city="Algorithms 6/6" logo={hackerRankLogo} />
        </div>
    )
}