import { SkillItem } from "./SkillItem"

export const BaseSkills = () => {
    return (
        <div className="baseskills-info animate__animated animate__faster">
            <SkillItem skillType="HTML/CSS" level="8">
                Extensive experience writing HTML over the years. Understanding of web accessibility concerns. Excellent knowledge of CSS and using advanced techniques to do almost anything on the computer screen. Understand mobile optimization and. However, I have not yet optimized this site for mobile devices 😐
            </SkillItem>
            <SkillItem skillType="React" level="5">
                I am relatively new with React, but I have a firm beginner's grasp of the technology (I create this entire site using React). I know the latest React API features and have experience with several React libraries (I use react-router extensively on this site). I will no doubt master the technology over the coming months.
            </SkillItem>
            <SkillItem skillType="Redux" level="5">
                I know how to use modern Redux (i.e. Redux Toolkit) to manage complex application state. I also have some experience with RT Query for fetching and caching data. I am gaining greater experience with Redux every day.
            </SkillItem>
            <SkillItem skillType="JavaScript" level="8">
                Extensive experience using JavaScript. I have experience with old-school JavaScript and the very newest version. I have a lot of experience manipulating the DOM with and without frameworks. My work with modern JavaScript has focused around Node development.
            </SkillItem>
            <SkillItem skillType="APIs" level="4">
                I have some experience using and creating APIs. I understand the possibilities for connecting everything through APIs. Express.js. learning authentication and security.
            </SkillItem>
            <SkillItem skillType="Databases" level="6">
                One of my . I have a decent amount of experience designing efficient databases. I have most recently been working with PostgreSQL, but I also have past MySQL experience. I gave myself a level 6 because I have not yet had much experience working with large databases and have not dealt much with maintenance and migration. I know how to write SQL queries very well.
            </SkillItem>
            <SkillItem skillType="Algorithms" level="6">I pay close attention to runtime and space-efficiency concerns. big-o analyses.</SkillItem>
            
        </div>
    )
}