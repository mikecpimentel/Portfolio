import { Outlet, Route, useParams } from "react-router-dom";
import { PokemonExplorer } from "../sandbox/pokemon-explorer/PokemonExplorer";
import { PokemonList } from "../sandbox/pokemon-explorer/PokemonList";
import { ToDoList } from "../sandbox/todo-list/ToDoList";
import { v4 as uuid } from "uuid";
import { SiteOne } from "../sandbox/site-one/SiteOne";
import Globalicious from "../sandbox/globalicious/Globalicious";

export const Blank = (props) => {
   const projectName = props.data;
   const extraParams = useParams();

   return (
      <>
         {projectName === "project-1" ? (
            <ToDoList />
         ) : projectName === "pokemon" ? (
            <div
               style={{
                  display: "flex",
                  flex: "1 1 0px",
                  overflow: "auto",

                  gap: "10px",
               }}
            >
               <div
                  style={{
                     overflow: "auto",
                     flexBasis: "50%",
                     padding: "0px 20px 20px 20px",
                  }}
               >
                  <PokemonList />
               </div>
               <div
                  style={{
                     overflow: "auto",
                     flexBasis: "50%",
                     backgroundColor: "#fff1",
                     padding: "20px 20px 20px 20px",
                  }}
               >
                  {!extraParams.pokemonName ? (
                     <h3>Please select a Pokemon</h3>
                  ) : (
                     <Outlet />
                  )}
               </div>
            </div>
         ) : projectName === "site-one" ? (
            <SiteOne />
         ) : projectName === "globalicious" ? (
            <Globalicious />
         ) : null}
      </>
   );
};
