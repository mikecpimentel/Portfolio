import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./FAQ.css";

export const FAQ = (props) => {
   const data = props.data;
   /*
   const [users, setUsers] = useState(null);
   const [fetching, setFetching] = useState(true);
   
   useEffect(() => {
      const run = async () => {
         const response = await fetch("http://localhost:3010");
         return response.json();
      };
      run().then((value) => {
         setUsers(value);
         setFetching(false);
         console.log(value);
      });
   }, [fetching]);

   if (!users) {
      return null;
   }


   <div>
            {users.rows.map((item) => (
               <div>
                  <p>Name: {item.name}</p>
                  <p>Email: {item.email}</p>
               </div>
            ))}
         </div>
*/
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
