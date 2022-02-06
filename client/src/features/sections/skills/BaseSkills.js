import { SkillItem } from "./SkillItem"

export const BaseSkills = () => {
    return (
        <div className="baseskills-info animate__animated animate__faster">
            <SkillItem skillType="HTML/CSS" level="9">
                Extensive experience using HTML and CSS, including many advanced concepts. I understand web accessibility and know how to optimize pages for small screens. However, I have not yet fully optimized this site for mobile 😐 It's coming soon.
            </SkillItem>
            <SkillItem skillType="React" level="4">
                I am relatively new with React but have a firm grasp of the technology (I created this site using React). I know the latest API features and have used various common libraries (react-router-dom, for one, is used extensively on this site). I will no doubt gain a lot more advanced knowledge over the coming months.
            </SkillItem>
            <SkillItem skillType="Redux" level="4">
                Like with React, my experience with Redux is relatively recent but growing. I have used it for managing application state, and have implemented many of its modern features including those included in Redux Toolkit (e.g., RTK Query). I am gaining more experience with Redux every day.
            </SkillItem>
            <SkillItem skillType="JavaScript" level="8">
                I have extensive knowledge of JavaScript, from most of its modern features to much of the obsolete features of JavaScript the past (I can understand legacy code). I also have a lot of experience using JavaScript without a library or framework. My recent use of JavaScript has centered much around Node development.
            </SkillItem>
            <SkillItem skillType="APIs" level="4">
                My understanding is solid but my experience  I have some experience using and creating APIs. I have used Express for creating APIs and have a basic knowledge of authentication and security concerns, including the use of middlewares.
            </SkillItem>
            <SkillItem skillType="Databases" level="7">
                I love databases (perhaps it reflects my love for data in general). I have a decent amount of experience designing stable and efficient databases, and using SQL to find exactly what I need. I have been using PostgreSQL recently, but I also have much past experience using MySQL. I have much to learn to fully master many of the most advanced features, but I have already had a pretty good start.
            </SkillItem>
            <SkillItem skillType="Algorithms" level="6">I have earned 6 / 6 stars for Problem Solving (i.e., Algorithms) on HackerRank. Of course, I still have much more to learn, but I think I have much of the basics down. I can create algorithms that are efficient in runtime and memory use. My knowledge gaps will surely be filled with greater experience.</SkillItem>
            <div style={{backgroundColor:"#292f3655", padding:"5px", fontWeight:"200", marginTop:"30px", fontSize:"0.8em"}}>Click rows for more information</div>
        </div>
    )
}