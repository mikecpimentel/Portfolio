import { v4 as uuid } from "uuid";
import "./Description.css";

export const Description = (props) => {
   const data = props.data;

   return data.map((item) =>
      typeof item === "string" ? (
         item
      ) : item.element === "p" ? (
         <p key={uuid()}>
            <Description key={uuid()} data={item.children} />
         </p>
      ) : item.element === "a" ? (
         <a
            key={uuid()}
            href={item.attr[0].value}
            rel={item.attr[1].value}
            target={item.attr[2].value}
         >
            <Description key={uuid()} data={item.children} />
         </a>
      ) : item.element === "ul" ? (
         <ul key={uuid()}>
            <Description key={uuid()} data={item.children} />
         </ul>
      ) : item.element === "li" ? (
         <li key={uuid()}>
            <Description key={uuid()} data={item.children} />
         </li>
      ) : item.element === "h3" ? (
         <h3 key={uuid()}>
            <Description key={uuid()} data={item.children} />
         </h3>
      ) : null
   );
};
