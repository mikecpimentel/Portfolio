import { useState } from "react";
import "./Skills.css";
import { v4 as uuid } from "uuid";

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

   return skillsState.map((item) => (
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
   ));
};

const SkillItem = (props) => {
   let levelMeter = [];
   let filler = [];
   const skillId = props.id;
   const open = props.open;
   const toggle = props.toggleHandler;
   let unitClass =
      props.level === 1
         ? "skill-1"
         : props.level === 2
         ? "skill-2"
         : props.level === 3
         ? "skill-3"
         : props.level === 4
         ? "skill-4"
         : props.level === 5
         ? "skill-5"
         : null;
   unitClass += " skill-unit";

   for (let i = 1; i <= 5; i++) {
      if (i <= props.level) {
         levelMeter.push(
            <span key={uuid()} className={unitClass}>
               ▀
            </span>
         );
      } else {
         filler.push(<span key={uuid()}>▀</span>);
      }
   }

   return (
      <div key={uuid()} className="skill-outer-outer">
         <div
            onClick={() => toggle(skillId)}
            className={
               open
                  ? "skill-div-outer skill-div-outer-open"
                  : "skill-div-outer skill-div-outer-closed"
            }
         >
            <div className="skill-div">
               <span
                  className={open ? "skill skill-open" : "skill skill-closed"}
               >
                  {props.skillType}
               </span>
               <span style={{ whiteSpace: "nowrap" }}>
                  <span
                     className={
                        open
                           ? "levelBlock levelBlock-open"
                           : "levelBlock levelBlock-closed"
                     }
                  >
                     {levelMeter}
                  </span>
                  <span
                     className={
                        open
                           ? "fillerBlock fillerBlock-open"
                           : "fillerBlock fillerBlock-closed"
                     }
                  >
                     {filler}
                  </span>
               </span>
               <span className="level-fraction">{props.level}/5</span>
               <span
                  className={
                     open
                        ? "skill-info-button skill-info-button-open"
                        : "skill-info-button skill-info-button-closed"
                  }
               >
                  {open ? "X" : "Info"}
               </span>
            </div>
            <div
               className={
                  open
                     ? "skill-open skill-info-div"
                     : "skill-closed skill-info-div"
               }
            >
               {props.children}
            </div>
         </div>
      </div>
   );
};
