import { useOutletContext, useParams } from "react-router-dom";
import { Books } from "./Books";
import { Description } from "./Description";
import { FAQ } from "./FAQ";
import { Institutions } from "./Institutions";
import { PokemonList } from "./PokemonList";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import "./Page.css";
import { v4 as uuid } from "uuid";

export const Page = (props) => {
   const outletContext = useOutletContext();
   const currentSectionState = outletContext[0];
   const sectionURL = outletContext[1];
   const whichPage = useParams();
   let pageState;

   if (whichPage.which) {
      pageState = currentSectionState.byPage[whichPage.which];
   } else {
      pageState = currentSectionState.byPage["index"];
   }

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
            ) : item.type === "pokemon" ? (
               <PokemonList key={uuid()} />
            ) : null
         )}
      </div>
   );
};
