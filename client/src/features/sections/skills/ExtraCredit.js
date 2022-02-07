import { SkillItem } from "./SkillItem"

export const ExtraCredit = () => {
    return (
        <div className="extra-credit animate__animated animate__faster">
            <SkillItem skillType="UI/UX" level="7">I have an intermediate understanding of web design and usability principles. I have designed many websites (including this one, of course), but I certainly have more to improve upon.</SkillItem>
            <SkillItem skillType="Mandarin" level="5">One of my greastest passions in life is learning and using foreign languages. I have learned so many in my life, far more than the two listed here, but I have lost language skills in many of them due to lack of opportunity for use. Mandarin is one language I can still communicate in with at least marginal competence. I used to be able to read and write many traditional characters, but that knowledge has recently grown a bit stale.</SkillItem>
            <SkillItem skillType="Spanish" level="5">I can speak and understand a lot of Spanish, but I've never spent too much time around Spanish speakers. When I was younger, I used to work in a warehouse where virtually all the other employees spoke only Spanish. Working there allowed me to practice my Spanish over a relatively extended period of time, but that time has long passed.</SkillItem>
            <SkillItem skillType="Writing" level="6">I read a lot and can write somewhat well, but I do not produce as much content as I would like. I hope to become a lot more prolific in my online writings.</SkillItem>
            <SkillItem skillType="PHP" level="5">My first several personal projects were coded in PHP. However, it has been a long while since I have used it.</SkillItem>
            <SkillItem skillType="Java" level="3">I have created an Android app using Java, but that was years ago. I have also used c++ in the past, so overall I have some experience with object-oriented programming.</SkillItem>
            <div style={{backgroundColor:"#292f3655", padding:"5px", fontWeight:"200", marginTop:"30px", fontSize:"0.8em"}}>Click rows for more information</div>
        </div>
    )
}