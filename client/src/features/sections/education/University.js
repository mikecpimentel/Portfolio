import { Institution } from '../../components/education/Institution'
import logo from './navy-seal.gif'

export const University = () => {
    return (
        <div className="education-bottom animate__animated animate__fadeIn animate__faster">
            <div style={{display:"flex"}}>
                <Institution name="University of California" city="Santa Barbara, CA (INCOMPLETE)" logo={logo} />
            </div>
            <div className="floating-white-education floating-white-1" >
            
            <p>A few of the upper-division economics courses I completed at UCSB before my withdrawal.</p>
                <p>
                    
                    Econometrics I<br />
                    Probability and Statistics I<br />
                    Intermediate Microeconomic Theory I<br />
                    Intermediate Microeconomic Theory II<br />
                    Intermediate Macroeconomic Theory<br />
                    Economic Development<br />
                    Intermediate Accounting I<br />
                    Foundations of Computer Science<br />
                </p>
            </div>
        </div>
    )
}