import { useEffect, useState } from "react";
import { Link, NavLink, matchPath, useMatch } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./pokemon.css";

const navButtonStyles = {
   padding: "5px 10px",
   fontSize: "1em",
   borderRadius: "10px",
   backgroundColor: "fff1",
   fontFamily: "Maven Pro",
   cursor: "pointer",
};
const selectStyle = {
   padding: "5px",
   fontSize: "1em",
   fontFamily: "Maven Pro",
   display: "none",
};
const optionStyle = {
   textAlign: "center",
};

const Pokemon = (props) => {
   return (
      <NavLink className="pokemon" key={props.data.name} to={props.data.name}>
         <p className="number">{props.id}</p>
         <p className="name">{props.data.name}</p>
      </NavLink>
   );
};

export const PokemonList = () => {
   const [pokemonList, setPokemonList] = useState(null);
   const [offset, setOffset] = useState(0);
   const [limit, setLimit] = useState(30);
   const [max, setMax] = useState(0);
   const [fetching, setFetching] = useState(true);

   const options = [];
   for (let i = 20; i <= 100 && i <= max; i += 20) {
      options.push(
         <option key={i} style={optionStyle} value={i}>
            {i}
         </option>
      );
   }

   useEffect(() => {
      const run = async () => {
         const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?offset=" +
               offset +
               "&limit=" +
               30
         );
         const results = await response.json();
         setMax(results.count);
         return results;
      };
      run().then((value) => {
         setPokemonList(value);
         setFetching(false);
      });
   }, [offset]);

   if (!pokemonList) {
      return null;
   } else {
      return (
         <>
            <div
               style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "2px solid white",
                  paddingBottom: "20px",
               }}
            >
               <h2 style={{ display: "inline", margin: "0", padding: "0" }}>
                  Pokemon Explorer
               </h2>
               <div>
                  <button
                     style={navButtonStyles}
                     onClick={() =>
                        offset - limit >= 0
                           ? setOffset((offset) => offset - limit)
                           : setOffset(0)
                     }
                  >
                     Previous
                  </button>

                  <button
                     style={navButtonStyles}
                     onClick={() =>
                        offset + limit < max
                           ? setOffset((offset) => offset + limit)
                           : null
                     }
                  >
                     Next
                  </button>

                  <select
                     style={selectStyle}
                     value={limit}
                     onChange={(e) => setLimit(e.target.value)}
                  >
                     {options}
                  </select>
               </div>
            </div>
            <div
               style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginTop: "20px",
                  justifyContent: "space-between",
               }}
            >
               {pokemonList.results.map((result, index) => (
                  <Pokemon key={uuid()} id={1 + index + offset} data={result} />
               ))}
            </div>
         </>
      );
   }
};
