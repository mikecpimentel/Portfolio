import { v4 as uuid } from "uuid";
import "./FAQ.css";

export const FAQ = (props) => {
   const data = props.data;

   return (
      <>
         {data.map((item) => (
            <div key={uuid()}>
               <p className="question">{item.question}</p>
               <p className="answer">{item.answer}</p>
            </div>
         ))}
      </>
   );
};
