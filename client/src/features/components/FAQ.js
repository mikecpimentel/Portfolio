import {v4 as uuid} from 'uuid';
import './FAQ.css';

export const FAQ = (props) => {
   const data = props.data;

   return (
      <div className="questions-wrapper">
         {data.map(item => <div key={uuid()}><p>{item.question}</p><p>{item.answer}</p></div>)}
      </div>
   )
}