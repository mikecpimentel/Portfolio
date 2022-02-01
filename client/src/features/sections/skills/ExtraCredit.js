import { SkillItem } from "./SkillItem"

export const ExtraCredit = () => {
    return (
        <div className="animate__animated animate__fadeInUp animate__faster">
            <SkillItem skillType="Marketing" level="5"></SkillItem>
            <SkillItem skillType="Mandarin" level="5"></SkillItem>
            <SkillItem skillType="Spanish" level="5"></SkillItem>
        </div>
    )
}