import { SkillItem } from "./SkillItem"

export const BaseSkills = () => {
    return (
        <div className="baseskills-info animate__animated animate__fadeInUp animate__faster">
            <SkillItem skillType="HTML" level="10" />
            <SkillItem skillType="React" level="7" />
            <SkillItem skillType="Redux" level="6" />
            <SkillItem skillType="JavaScript" level="5" />
            <SkillItem skillType="CSS" level="10" />
            <SkillItem skillType="Next.js" level="10" />
            <SkillItem skillType="Express.js" level="10" />
            <SkillItem skillType="Axios" level="2" />
            <SkillItem skillType="Teletherapy" level="8" />
            <p style={{paddingTop:"20px", color:"#fff6"}}>list update # days ago</p>
            <p>Experience with many libraries, including:</p>
            <ul>
                <li>react-router-dom</li>
                <li>react-redux</li>
                <li>redux</li>
            </ul>
        </div>
    )
}