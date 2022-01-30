import logo from './navy-seal.gif'

export const University = () => {
    return (
        <div>
            <div className="floating-white floating-white-1" >
            <p style={{fontSize:"1em"}}>University of California, Santa Barbara (UCSB)</p>
            <img src={logo} alt="ucsb-logo" style={{width:"100px", display:"block"}} />
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