import { useState } from "react";
import "./Skills.css";
import { v4 as uuid } from "uuid";

export const Skills = (props) => {
   const data = props.data;

   return data.map((item) => (
      <SkillItem key={uuid()} skillType={item[0]} level={item[1]}>
         {item[2]}
      </SkillItem>
   ));
};

const SkillItem = (props) => {
   let levelMeter = [];
   let filler = [];
   const [open, setOpen] = useState(false);

   const handleClick = () => {
      if (open) {
         console.log("element is false");
         setOpen(false);
      } else {
         console.log("element is true");
         setOpen(true);
      }
   };

   for (let i = 0; i < 10; i++) {
      if (i < props.level) {
         levelMeter.push(<span className="skill-unit">▀</span>);
      } else {
         filler.push(<span>▀</span>);
      }
   }

   return (
      <div
         onClick={handleClick}
         className={
            open
               ? "skill-div-outer skill-div-outer-open"
               : "skill-div-outer skill-div-outer-closed"
         }
      >
         <div className="skill-div">
            <span className={open ? "skill skill-open" : "skill skill-closed"}>
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
   );
};
