import { Books } from "./Books";
import { Description } from "./Description";
import { FAQ } from "./FAQ";
import { Institutions } from "./Institutions";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import "./Page.css";
import { v4 as uuid } from "uuid";
import { Blank } from "./Blank";

export const Page = (props) => {
   const pageState = props.data;
   const sectionURL = props.url;

   return (
      <div key={uuid()} className={`${sectionURL}-wrapper`}>
         {pageState.content.map((item) =>
            item.type === "description" ? (
               <div key={uuid()} className="description-outer">
                  <Description key={uuid()} data={item.data} />
               </div>
            ) : item.type === "skills" ? (
               <Skills key={uuid()} data={item.data} />
            ) : item.type === "institution-box" ? (
               <Institutions key={uuid()} data={item.data} />
            ) : item.type === "project" ? (
               <Projects key={uuid()} data={item.data} />
            ) : item.type === "books" ? (
               <Books key={uuid()} data={item.data} />
            ) : item.type === "faq" ? (
               <FAQ key={uuid()} data={item.data} />
            ) : item.type === "sandbox" ? (
               <Blank key={uuid()} data={item.data} />
            ) : null
         )}
      </div>
   );
};
