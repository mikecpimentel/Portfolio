import { v4 as uuid } from "uuid";

export const Institutions = (props) => {
   const data = props.data;
   // .name, .subheading, .logo
   // name, subheading, logo
   return (
      <div style={{ display: "flex" }}>
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
      <div className="floating-white-institution">
         <div style={{ paddingLeft: "10px", zIndex: "5" }}>
            <p
               style={{
                  color: "#000",
                  paddingBottom: "0",
                  marginBottom: "0",
                  fontWeight: "400",
               }}
            >
               {props.name}
            </p>
            <p
               style={{
                  color: "#000",
                  fontSize: "0.8em",
                  marginTop: "2px",
                  fontWeight: "200",
               }}
            >
               {props.subheading}
            </p>
         </div>
         <div
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
