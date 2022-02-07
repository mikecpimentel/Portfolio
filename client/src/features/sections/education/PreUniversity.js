import { Institution } from "../../components/education/Institution"
import chaffeyLogo from "../../../images/education/logo-and-type.png"
import ivcLogo from "../../../images/education/ivc-logo-color.png"
import mtSacLogo from "../../../images/education/fullcolor_email.jpg"

export const PreUniversity = () => {
    return (
        <div className="education-bottom animate__animated animate__fadeIn animate__faster">
            <div style={{display:"flex", justifyContent:"space-between", gap:"20px"}}>
                <Institution name="Mt. San Antonio College" city="Walnut, CA" logo={mtSacLogo} />
                <Institution name="Irvine Valley College" city="Irvine, CA" logo={ivcLogo} />
                <Institution name="Chaffey College" city="Rancho Cucamonga, CA" logo={chaffeyLogo} />
            </div>
            <div className="floating-white-education floating-white-1">
                <p>Select classes I took before transferring to university. The overall course grade I received is indicated on the left.</p>
                <p>
                    A | Calculus III (Multivariate &amp; Vector Calculus)<br />
                    A | Linear Algebra &amp; Differential Equations<br />
                    A | Statistics<br />
                    A | Financial Accounting<br />
                    A | Managerial Accounting<br />
                    A | Microeconomics<br />
                    A | Programming in C++<br />
                    A | General Chemistry (I) &amp; Laboratory<br />
                    B | General Chemistry (II) &amp; Laboratory<br />
                    
                </p>
            </div>
        </div>
    )
}