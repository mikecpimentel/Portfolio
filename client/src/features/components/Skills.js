import { useState } from "react";
import "./Skills.css";
import { v4 as uuid } from "uuid";

export const Skills = (props) => {
   const data = props.data;

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

   for (let i = 0; i < 10; i++) {
      if (i < props.level) {
         levelMeter.push(
            <span key={uuid()} className="skill-unit">
               ▀
            </span>
         );
      } else {
         filler.push(<span key={uuid()}>▀</span>);
      }
   }

   return (
      <div key={uuid()} style={{ padding: "8px 0 0 0" }}>
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
               <span
                  style={{
                     color: "#fff5",
                     fontSize: "0.8em",
                     paddingLeft: "10px",
                  }}
               >
                  {props.level}/10
               </span>
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
