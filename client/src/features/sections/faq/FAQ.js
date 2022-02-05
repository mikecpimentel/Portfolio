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
                        Are you willing to relocate?
                    </Question>
                    <Answer>
                        Yes, to anywhere on Earth. I would love to live in a large city though — the larger, the better.
                    </Answer>
                </FAQBlock>
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
                        Are you open to traveling for work?
                    </Question>
                    <Answer>
                        Yes. I am an experienced traveler and can easily navigate new and unfamiliar places.
                    </Answer>
                </FAQBlock>
                <FAQBlock>
                    <Question>
                        Are you willing to work inside an office?
                    </Question>
                    <Answer>
                        Yes.
                    </Answer>
                </FAQBlock>
                <FAQBlock>
                    <Question>
                        How many hours per week can you work?
                    </Question>
                    <Answer>
                        I am not bound by any time constraints. My focus is on delivering results and growing as an individual and professional. My hard limit, though, is 168 hours per week.
                    </Answer>
                </FAQBlock>
            </div>
        </>
    )
}