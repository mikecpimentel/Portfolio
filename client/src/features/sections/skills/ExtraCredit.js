import { SkillItem } from "./SkillItem"

export const ExtraCredit = () => {
    return (
        <div className="extra-credit animate__animated animate__faster">
            <SkillItem skillType="UI/UX" level="7">I have an intermediate understanding of web design and usability principles. I have designed many websites, including this one, but I certainly have more to improve upon.</SkillItem>
            <SkillItem skillType="Mandarin" level="5">One of my greastest passions in life is learning languages. I have learned many more than what is listed on this page, but the two listed here are those I can use with at least marginal competence. I used to be able to understand most written Mandarin (I knew roughly the 1000 most common characters), but </SkillItem>
            <SkillItem skillType="Spanish" level="5"></SkillItem>
            <SkillItem skillType="Writing" level="6">I read a lot and can write somewhat well, but I do not produce as much content as I would like to.</SkillItem>
            <SkillItem skillType="PHP" level="5">My first several personal projects were coded in PHP, but it has been a long time since I have used it.</SkillItem>
            <SkillItem skillType="Java" level="3">I have created an Android app using Java, but it has been a while. I've also used c++, another OOP language.</SkillItem>
            <SkillItem skillType="Marketing" level="5">I've used Google Analytics, search engine optimization software, and understand the basics of internet marketing.</SkillItem>
        </div>
    )
}