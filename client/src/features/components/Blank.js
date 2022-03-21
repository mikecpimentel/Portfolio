import { Outlet, Route, useParams } from "react-router-dom";
import { PokemonExplorer } from "../sandbox/pokemon-explorer/PokemonExplorer";
import { PokemonList } from "../sandbox/pokemon-explorer/PokemonList";
import { ToDoList } from "../sandbox/todo-list/ToDoList";
import { v4 as uuid } from "uuid";

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
                  paddingTop: "20px",
                  gap: "10px",
               }}
            >
               <div
                  style={{
                     overflow: "auto",
                     flexBasis: "40%",
                     padding: "0px 20px 20px 20px",
                  }}
               >
                  <PokemonList />
               </div>
               <div
                  style={{
                     overflow: "auto",
                     flexBasis: "60%",
                     backgroundColor: "#fff1",
                     padding: "20px 20px 20px 20px",
                  }}
               >
                  {!extraParams.pokemonName ? (
                     <h2>Please select a Pokemon</h2>
                  ) : (
                     <Outlet />
                  )}
               </div>
            </div>
         ) : null}
      </>
   );
};
