import { SkillItem } from "./SkillItem"

export const ExtraCredit = () => {
    return (
        <div className="extra-credit animate__animated animate__faster">
            <SkillItem skillType="UI/UX" level="7">I have an intermediate understanding of web design and usability principles. I have designed many websites (including this one you're visiting), but I certainly have more to improve upon.</SkillItem>
            <SkillItem skillType="Mandarin" level="5">One of my greastest passions in life is learning and using foreign languages. I learn languages very quickly (and have learned far more than the two listed here), but these two are the only ones I can still use with at least marginal competence. I used to be able to read and write many traditional characters, but my current knowledge has grown a bit stale. I can still communicate, though.</SkillItem>
            <SkillItem skillType="Spanish" level="5">I can speak and understand a lot of Spanish, but I've never spent much time in a Spanish-speaking country or around Spanish speakers.</SkillItem>
            <SkillItem skillType="Writing" level="6">I read a lot and can write somewhat well, but I do not produce as much content as I would like to.</SkillItem>
            <SkillItem skillType="PHP" level="5">My first several personal projects were coded in PHP. However, it has been a long while since I have used it.</SkillItem>
            <SkillItem skillType="Java" level="3">I have created an Android app using Java, but that was years ago. I have also used c++ in the past, so I have some experience with object-oriented programming.</SkillItem>
            <SkillItem skillType="Marketing" level="5">I've used Google Analytics, search engine optimization software, and I understand basic marketing knowledge.</SkillItem>
            <div style={{backgroundColor:"#292f3655", padding:"5px", fontWeight:"200", marginTop:"30px", fontSize:"0.8em"}}>Click rows for more information</div>
        </div>
    )
}