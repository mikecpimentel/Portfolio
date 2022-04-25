import { v4 as uuid } from "uuid";

export function SkillItem(props) {
   let levelMeter = [];
   let filler = [];
   const open = props.open;
   const toggleHandler = props.toggleHandler;
   const skillId = props.id;
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
            onClick={() => toggleHandler(skillId)}
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
}
