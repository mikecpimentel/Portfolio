import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const boxStyle = {
  backgroundColor:"#fff1",
  padding:"20px"
}
const sectionStyle = {
  display:"flex",
  gap:"10px",
  flexWrap:"wrap"
}

const Abilities = (props) => { 
  return (
    <>
      <h3>Abilities</h3>
      <div style={sectionStyle}>
        {props.data.map(item => <Ability key={item.name} info={item} />)}
      </div>
    </>
  );
}
const Ability = (props) => {
  return (
    <div style={boxStyle}>
      <p>{props.info.ability.name}</p>
      <p>Is hidden?: {props.info.is_hidden ? 'Yes' : 'No'}</p>
      <p>Slot #: {props.info.slot}</p>
    </div>
  )
}

const Sprites = (props) => {
  return (
    <>
      <h3>Sprites</h3>
      <div style={sectionStyle}>
        {props.data.back_default ? <Sprite which="Default Back" img={props.data.back_default} /> : null}
        {props.data.back_shiny ? <Sprite which="Shiny Back" img={props.data.back_shiny} /> : null}
        {props.data.back_shiny_female ? <Sprite which="Female Shiny Back" img={props.data.back_shiny_female} /> : null}
        {props.data.front_default ? <Sprite which="Default Front" img={props.data.front_default} /> : null}
        {props.data.front_female ? <Sprite which="Female Front" img={props.data.front_female} /> : null}
        {props.data.front_shiny ? <Sprite which="Shiny Front" img={props.data.front_shiny} /> : null}
        {props.data.front_shiny_female ? <Sprite which="Shiny Female Front" img={props.data.front_shiny_female} /> : null}
      </div>
    </>
  )
}
const Sprite = (props) => {
  return (
    <div style={boxStyle}>
      <p>{props.which}</p>
      <img src={props.img} alt={props.which} />
    </div>
  )
}

const Stats = (props) => {
  return (
    <>
      <p>Stats</p>
      <div style={sectionStyle}>
        {props.data.map(item => <Stat data={item} />)}
      </div>
    </>
  )
}
const Stat = (props) => {
  return (
    <div style={boxStyle}>
      <p>Base Stat: {props.data.base_stat}</p>
      <p>Effort: {props.data.effort}</p>
      <p>Stat Name: {props.data.stat.name}</p>
    </div>
  )
}

const GameIndices = (props) => {
  return (
    <>
      <h3>Game Indices</h3>
      <div style={sectionStyle}>
        {props.data.map(item => <GameIndex data={item} />)}
      </div>
    </>
  )
}
const GameIndex = (props) => {
  return (
    <div style={boxStyle}>
      <p>Game Index: {props.data.game_index}</p>
      <p>Version Name: {props.data.version.name}</p>
    </div>
  )
}

export const PokemonExplorer = () => {

  const { pokemonName } = useParams();

  const [pokemonInfo, setPokemonInfo] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
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
    }
  fetchData().then(value => setPokemonInfo(value));
  }, [pokemonName])
    
    
  if (!pokemonInfo) {
    return null;
  } else {

    return (
      <div>
        <div>
          <h3>{pokemonInfo.name}</h3>
          <ul>
            <li>Weight: {pokemonInfo.weight}</li>
            <li>Base Experience: {pokemonInfo.base_experience}</li>
            <li>Height: {pokemonInfo.height}</li>
            <li>Id: {pokemonInfo.id}</li>
            <li>Is Default: {pokemonInfo.is_default}</li>
            <li>Order: {pokemonInfo.order}</li>
          </ul>
        </div>
        <div>{<Abilities data={pokemonInfo.abilities} />}</div>
        <div>{<Sprites data={pokemonInfo.sprites} />}</div>
        <div>{<Stats data={pokemonInfo.stats} />}</div>
        <div>{<GameIndices data={pokemonInfo.game_indices} />}</div>
      </div>
    );  
  }

  
}