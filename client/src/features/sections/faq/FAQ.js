import { Answer } from '../../components/faq/Answer'
import { Question } from '../../components/faq/Question'
import { FAQBlock } from '../../components/faq/FAQBlock'

export const FAQ = () => {
    return (
        <>
            <h3 className="section-header animate__animated animate__fadeIn animate__faster" style={{marginBottom:"50px"}}>FAQ section</h3>
            <div className="questions-wrapper">
                <FAQBlock>
                    <Question>
                        When can you start?
                    </Question>
                    <Answer>
                        I can begin immediately.
                    </Answer>
                </FAQBlock>
                <FAQBlock>
                    <Question>
                        Are you willing to work inside an office?
                    </Question>
                    <Answer>
                        Yes, I would be very glad to.
                    </Answer>
                </FAQBlock>
                <FAQBlock>
                    <Question>
                        Would you be willing to work remotely?
                    </Question>
                    <Answer>
                        Yes.
                    </Answer>
                </FAQBlock>
                <FAQBlock>
                    <Question>
                        Are you willing to relocate if necessary?
                    </Question>
                    <Answer>
                        Yes, to anywhere on this planet, especially large cities.
                    </Answer>
                </FAQBlock>
                <FAQBlock>
                    <Question>
                        How many hours per week can you work?
                    </Question>
                    <Answer>
                        I am not bound by any time constraints. My focus is on delivering results and growing as an individual and professional.
                    </Answer>
                </FAQBlock>
                <FAQBlock>
                    <Question>
                        Are you fully vaccinated?
                    </Question>
                    <Answer>
                        Yes, three (3) Modernas: two (2) Moderna standard doses + one (1) Moderna booster. My bloodstream is full of delicious antibodies.
                    </Answer>
                </FAQBlock>
            </div>
        </>
    )
}