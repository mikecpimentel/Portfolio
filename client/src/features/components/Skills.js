import { useState } from "react";
import "./Skills.css";

import { SkillItem } from "./SkillItem";

export const Skills = (props) => {
   const data = props.data.sort((ob1, ob2) => ob2.level - ob1.level);

   const newState = data.map((item) => ({ ...item, open: false }));

   const [skillsState, setSkillsState] = useState(newState);

   const toggle = (id) => {
      const updatedSkillsState = skillsState.map((item) =>
         item.id === id && !item.open
            ? { ...item, open: true }
            : { ...item, open: false }
      );
      setSkillsState(updatedSkillsState);
   };

   return (
      <div className="skill-item-list-wrapper">
         {skillsState.map((item) => (
            <SkillItem
               key={item.id}
               id={item.id}
               open={item.open}
               toggleHandler={toggle}
               skillType={item.skill}
               level={item.level}
            >
               {item.description}
            </SkillItem>
         ))}
      </div>
   );
};
