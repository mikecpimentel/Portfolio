import { SkillItem } from "./SkillItem"

export const BaseSkills = () => {
    return (
        <div>
            <p className="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I'm still around the beginning of my journey, but I plan on making rapid progress. I still have much to learn, but.. this list is ever-growing</p>
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