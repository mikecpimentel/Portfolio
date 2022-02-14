import { useState } from "react"
import { initialState } from "./staticPokemonState";

export const PokemonExplorer = () => {

  const [abilities, setAbilities] = useState(initialState.abilities);
  const [gameIndices, setGameIndices] = useState(initialState.game_indices);
  const [sprites, setSprites] = useState(initialState.sprites);

  const boxStyle = {
    backgroundColor:"#fff1",
    padding:"20px"
  }
  const sectionStyle = {
    display:"flex",
    gap:"10px",
    flexWrap:"wrap"
  }

  const abilitiesOb = abilities.map(object => {
    return (
      <div style={boxStyle}>
        <p>{object.ability.name}</p>
        <a href={object.ability.url}>Link</a>
        <p>Hidden: {object.is_hidden ? 'yes' : 'no'}</p>
        <p>Slot #: {object.slot}</p>
      </div>
    )
  })

  const gameIndicesOb = gameIndices.map(object => {
    return (
      <div style={boxStyle}>
        <p>Game Index: {object.game_index}</p>
        <p>Version Name: {object.version.name}</p>
        <a href={object.version.url}>Link</a>
      </div>
    )
  })

  const spritesOb = (
    <>
      <div style={boxStyle}>
        <p>Back (default)</p>
        {sprites.back_default ? <img src={sprites.back_default} /> : 'No Image'}
      </div>
      <div style={boxStyle}>
        <p>Back (female)</p>
        {sprites.back_female ? <img src={sprites.back_female} /> : 'No Image'}
      </div>
      <div style={boxStyle}>
        <p>Back (shiny)</p>
        {sprites.back_shiny ? <img src={sprites.back_shiny} /> : 'No Image'}
      </div>
      <div style={boxStyle}>
        <p>Back (shiny female)</p>
        {sprites.back_shiny_female ? <img src={sprites.back_shiny_female} /> : 'No Image'}
      </div>
      <div style={boxStyle}>
        <p>Back (front default)</p>
        {sprites.front_default ? <img src={sprites.front_default} /> : 'No Image'}
      </div>
      <div style={boxStyle}>
        <p>Back (front female)</p>
        {sprites.front_female ? <img src={sprites.front_female} /> : 'No Image'}
      </div>
      <div style={boxStyle}>
        <p>Back (front shiny)</p>
        {sprites.front_shiny ? <img src={sprites.front_shiny} /> : 'No Image'}
      </div>
      <div style={boxStyle}>
        <p>Back (front shiny female)</p>
        {sprites.front_shiny_female ? <img src={sprites.front_shiny_female} /> : 'No Image'}
      </div>
    </>
  )

  return (
    <div>
      <h3>Sprites</h3>
      <div style={sectionStyle}>
        {spritesOb}
      </div>
      <h3>Game Indices</h3>
      <div style={sectionStyle}>
        {gameIndicesOb}
      </div>
      <h3>Abilities</h3>
      <div style={sectionStyle}>
        {abilitiesOb}
      </div>
    </div>
  )
}