import { Outlet } from 'react-router-dom'
import { SubSectionButton } from '../components/SubSectionButton'




export const Education = () => {
    return (
        <div>
            <h3 className="section-header">Education</h3>
            <div className='sub-section-links'>
                <SubSectionButton text="Pre-University" page="pre-university" />
                <SubSectionButton text="University" page="university" />
                <SubSectionButton text="Online" page="online" />
            </div>
            <p className="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I'm still around the beginning of my journey, but I plan on making rapid progress. I still have much to learn, but..</p>
            <div className="floating-white floating-white-1">
                <p>
                    A | Calculus III (Multivariate &amp; Vector Calculus)<br />
                    A | Linear Algebra &amp; Differential Equations<br />
                    A | Statistics<br />
                    A | Financial Accounting<br />
                    A | Managerial Accounting<br />
                    A | Microeconomics<br />
                    A | Business Law<br />
                    A | Programming in C++<br />
                    A | General Chemistry (I) &amp; Laboratory<br />
                    B | General Chemistry (II) &amp; Laboratory<br />
                    <br />
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
            <Outlet />
        </div>
    )
}