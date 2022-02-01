import { SkillItem } from "./SkillItem"

export const BaseSkills = () => {
    return (
        <div className="baseskills-info animate__animated animate__fadeInUp animate__faster">
            <SkillItem skillType="HTML" level="8">
                Extensive experience writing HTML over the years, including accessibility... however, there are gaps I could stand to fill in.
            </SkillItem>
            <SkillItem skillType="CSS" level="9" >
                Excellent knowledge of CSS and using advanced techniques to do almost anything on the computer screen. 
            </SkillItem>
            <SkillItem skillType="React" level="5">
                I am relatively new with React. Although I can use React to create apps (I created this portfolio site using React), but I have not yet put my time in to achieve full mastery of the technology. I know the latest React API. I have experience with several React libraries, including react-router-dom (which I use extensively with this site), react-redux, among several others.
            </SkillItem>
            <SkillItem skillType="Redux" level="5">
                All the latest features of modern redux, including the use of Redux Toolkit. Decent understanding of state management, but still in the process of gaining full expertise.
            </SkillItem>
            <SkillItem skillType="APIs" level="4">
                I have some experience using and creating APIs. I understand the possibilities for connecting everything through APIs.
            </SkillItem>
            <SkillItem skillType="JavaScript" level="8">
                Extensive experience using JavaScript, but the old versions and the very newest. I have a lot of experience manipulating the DOM with and without frameworks.
            </SkillItem>
            <SkillItem skillType="Databases" level="6">
                One of my . I have a decent amount of experience designing efficient databases. I have most recently been working with PostgreSQL, but I also have past MySQL experience. I gave myself a level 6 because I have not yet had much experience working with large databases and have not dealt much with maintenance and migration.
            </SkillItem>
            <SkillItem skillType="Algorithms" level="6"></SkillItem>
        </div>
    )
}