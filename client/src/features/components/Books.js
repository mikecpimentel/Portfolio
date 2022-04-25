import { v4 as uuid } from "uuid";
import "./Books.css";

export const Books = (props) => {
   const data = props.data;

   return (
      <div className="books-wrapper">
         {data.map((item) => (
            <div key={uuid()}>
               <p>{item.title}</p>
               <p>{item.author}</p>
            </div>
         ))}
      </div>
   );
};
