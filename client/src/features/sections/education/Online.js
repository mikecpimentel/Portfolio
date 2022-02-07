import { Institution } from "../../components/education/Institution"
import codecademyLogo from '../../../images/education/320px-Codecademy.svg.png'
import hackerRankLogo from '../../../images/education/800px-HackerRank_Icon-1000px.png'

export const Online = () => {
    return (
        <div>
            <div className="online-institutions animate__animated animate__fadeIn animate__faster">
                <Institution name="Codecademy" city="Full-Stack Engineering Cert" logo={codecademyLogo} />
                <Institution name="HackerRank" city="Algorithms 6/6" logo={hackerRankLogo} />
            </div>
            <div style={{marginTop:"40px"}}>
                <p className="online-certs-links"><a href="https://www.codecademy.com/profiles/michaelPimentel9180632744/certificates/5f7e644d833c070013ef47c4" rel="noreferrer" target="_blank">Codecademy Cert</a></p>
                <p className="online-certs-links"><a href="https://www.hackerrank.com/mikecpimentel" rel="noreferrer" target="_blank">HackerRank Profile</a></p>
            </div>
        </div>
    )
}