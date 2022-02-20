import { v4 as uuid } from "uuid";

export const Description = (props) => {
   const data = props.data;

   return (
      <>
         {data.map((item) =>
            item.element === "p" ? (
               <p key={uuid()}>
                  {typeof item.children[0] === "string" ? (
                     item.children[0]
                  ) : (
                     <Description key={uuid()} data={item.children} />
                  )}
               </p>
            ) : item.element === "a" ? (
               <a key={uuid()} href="https://www.google.com">
                  <Description key={uuid()} data={item.children} />
               </a>
            ) : item.element === "ul" ? (
               <ul key={uuid()}>
                  <Description key={uuid()} data={item.children} />
               </ul>
            ) : item.element === "li" ? (
               <li key={uuid()}>
                  {typeof item.children[0] === "string" ? (
                     item.children[0]
                  ) : (
                     <Description key={uuid()} data={item.children} />
                  )}
               </li>
            ) : null
         )}
      </>
   );
};
