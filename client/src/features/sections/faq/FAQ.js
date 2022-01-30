import { Answer } from '../../components/faq/Answer'
import { Question } from '../../components/faq/Question'
import { FAQBlock } from '../../components/faq/FAQBlock'

export const FAQ = () => {
    return (
        <div>
            <h3 className="section-header animate__animated animate__fadeIn animate__faster">FAQ section</h3>
            <div className="questions-wrapper">
                <FAQBlock>
                    <Question>Are you willing to relocate?</Question>
                    <Answer>Yes, to anywhere on Earth, but I would particularly relish a move to New York City.</Answer>
                </FAQBlock>
                <FAQBlock>
                    <Question></Question>
                    <Answer></Answer>
                </FAQBlock>
            </div>
        </div>
    )
}