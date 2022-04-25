import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

const boxStyle = {
   backgroundColor: "#fff1",
   padding: "20px",
};
const sectionStyle = {
   display: "flex",
   gap: "10px",
   flexWrap: "wrap",
};

const Abilities = (props) => {
   return (
      <>
         <h3>Abilities</h3>
         <div style={sectionStyle}>
            {props.data.map((item) => (
               <Ability key={uuid()} info={item} />
            ))}
         </div>
      </>
   );
};
const Ability = (props) => {
   return (
      <div className="ability">
         <p>{props.info.ability.name}</p>
      </div>
   );
};

const Sprites = (props) => {
   return (
      <>
         <h3>Sprites</h3>
         <div style={sectionStyle}>
            {props.data.back_default ? (
               <Sprite which="Default Back" img={props.data.back_default} />
            ) : null}
            {props.data.back_shiny ? (
               <Sprite which="Shiny Back" img={props.data.back_shiny} />
            ) : null}
            {props.data.back_shiny_female ? (
               <Sprite
                  which="Female Shiny Back"
                  img={props.data.back_shiny_female}
               />
            ) : null}
            {props.data.front_default ? (
               <Sprite which="Default Front" img={props.data.front_default} />
            ) : null}
            {props.data.front_female ? (
               <Sprite which="Female Front" img={props.data.front_female} />
            ) : null}
            {props.data.front_shiny ? (
               <Sprite which="Shiny Front" img={props.data.front_shiny} />
            ) : null}
            {props.data.front_shiny_female ? (
               <Sprite
                  which="Shiny Female Front"
                  img={props.data.front_shiny_female}
               />
            ) : null}
         </div>
      </>
   );
};
const Sprite = (props) => {
   return (
      <div className="sprite">
         <img src={props.img} alt={props.which} />
         <p>{props.which}</p>
      </div>
   );
};
/*
const Stats = (props) => {
   return (
      <>
         <h3>Stats</h3>
         <div style={sectionStyle}>
            {props.data.map((item) => (
               <Stat key={uuid()} data={item} />
            ))}
         </div>
      </>
   );
};
const Stat = (props) => {
   return (
      <div style={boxStyle}>
         <p>Base Stat: {props.data.base_stat}</p>
         <p>Effort: {props.data.effort}</p>
         <p>Stat Name: {props.data.stat.name}</p>
      </div>
   );
};
<Stats data={pokemonInfo.stats} />

const GameIndices = (props) => {
   return (
      <>
         <h3>Game Indices</h3>
         <div style={sectionStyle}>
            {props.data.map((item) => (
               <GameIndex key={uuid()} data={item} />
            ))}
         </div>
      </>
   );
};
<GameIndices data={pokemonInfo.game_indices} />;

const GameIndex = (props) => {
   return (
      <div style={boxStyle}>
         <p>Game Index: {props.data.game_index}</p>
         <p>Version Name: {props.data.version.name}</p>
      </div>
   );
};
*/
export const PokemonExplorer = () => {
   const { pokemonName } = useParams();

   const [pokemonInfo, setPokemonInfo] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + pokemonName
         );
         const pokemonInfoResponse = await response.json();
         return pokemonInfoResponse;
         /*
      const forms = pokemonInfo.forms;
      const gameIndices = pokemonInfo.game_indices;
      const heldItems = pokemonInfo.held_items;
      const locationAreaEncounters = pokemonInfo.location_area_encounters;
      const moves = pokemonInfo.moves;
      const pastTypes = pokemonInfo.past_types;
      const species = pokemonInfo.species;
      const stats = pokemonInfo.stats;
      const types = pokemonInfo.types;
      */
      };
      fetchData().then((value) => setPokemonInfo(value));
   }, [pokemonName]);

   if (!pokemonInfo) {
      return null;
   } else {
      return (
         <>
            <div>
               <h3
                  style={{
                     textTransform: "uppercase",
                     fontSize: "1.563em",
                     padding: "0",
                     margin: "0",
                     fontWeight: "400",
                  }}
               >
                  {pokemonInfo.name}
               </h3>
               <ul id="pokemon-stats">
                  <li>Weight: {pokemonInfo.weight}</li>
                  <li>Base Experience: {pokemonInfo.base_experience}</li>
                  <li>Height: {pokemonInfo.height}</li>
                  <li>Id: {pokemonInfo.id}</li>
                  <li>Is Default: {pokemonInfo.is_default}</li>
                  <li>Order: {pokemonInfo.order}</li>
               </ul>
            </div>
            <Sprites data={pokemonInfo.sprites} />
            <Abilities data={pokemonInfo.abilities} />
         </>
      );
   }
};
