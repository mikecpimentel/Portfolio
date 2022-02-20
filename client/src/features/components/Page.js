import { useOutletContext, useParams } from "react-router-dom";
import { Books } from "./Books";
import { Description } from "./Description";
import { FAQ } from "./FAQ";
import { Institutions } from "./Institutions";
import { PokemonList } from "./PokemonList";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { v4 as uuid } from "uuid";

export const Page = (props) => {
   const currentSectionState = useOutletContext();
   const whichPage = useParams();
   console.log(whichPage.which);
   let pageState;

   if (whichPage.which) {
      pageState = currentSectionState.byPage[whichPage.which];
   } else {
      pageState = currentSectionState.byPage["index"];
   }

   return pageState.content.map((item) =>
      item.type === "description" ? (
         <Description key={uuid()} data={item.data} />
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
   );
};
