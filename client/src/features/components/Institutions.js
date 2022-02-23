import "./Institution.css";
import { v4 as uuid } from "uuid";

export const Institutions = (props) => {
   const data = props.data;

   return (
      <div className="institution-list">
         {data.map((item) => (
            <Institution
               key={uuid()}
               name={item.name}
               subheading={item.subheading}
               logo={item.logo}
            />
         ))}
      </div>
   );
};

const Institution = (props) => {
   return (
      <div className="institution">
         <div style={{ paddingLeft: "10px", zIndex: "5" }}>
            <p
               className="name"
            >
               {props.name}
            </p>
            <p
               className="subtitle"
            >
               {props.subheading}
            </p>
         </div>
         <div
            className="logo-div"
            style={{
               position: "absolute",
               right: "10px",
               height: "100%",
               bottom: "10px",
               opacity: "1",
               width: "70px",
               backgroundImage: `url("${props.logo}")`,
               backgroundSize: "100%",
               backgroundPosition: "bottom",
               backgroundRepeat: "no-repeat",
            }}
         >
            &nbsp;
         </div>
      </div>
   );
};
