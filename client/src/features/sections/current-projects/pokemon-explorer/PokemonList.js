import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const navButtonStyles = {
  minWidth:"150px",
  padding:"10px",
  fontSize:"1em",
  backgroundColor:"fff1",
  fontFamily:"Maven Pro",
  cursor:"pointer"
}
const selectStyle = {
  padding:"10px",
  fontSize:"1em",
  fontFamily:"Maven Pro",
  minWidth:"150px",
  appearance:"none",
}
const optionStyle = {
  textAlign:"center"
}

const Pokemon = (props) => {
  return (
    <div style={{padding:"10px 30px", backgroundColor:"#fff1"}}>
      <Link style={{color:"#fff", textDecoration:"none", textTransform:"capitalize"}} key={props.data.name} to={props.data.name}>{props.data.name}</Link>
      <p>ID: {props.id}</p>
    </div>
  )
}

export const PokemonList = () => {
  
  const [pokemonList, setPokemonList] = useState(null);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [max, setMax] = useState(0);

  const options = [];
  for (let i=20; i <= 100 && i <= max; i += 20) {
    options.push(<option style={optionStyle} value={i}>{i}</option>)
  }

  useEffect(() => {
    const run = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit);
      const results = await response.json();
      setMax(results.count);
      return results;
    }
    run().then(value => setPokemonList(value));
  }, [offset, limit])


  if (!pokemonList) {
    return null;
  } else {
    console.log('limit: ' + limit + ', offset: ' + offset);
    return (
      <div>
        <div>
          <button style={navButtonStyles} onClick={() => offset - limit >= 0 ? setOffset(offset => offset - limit) : setOffset(0)}>Previous</button>
          
          <button style={navButtonStyles} onClick={() => offset + limit < max ? setOffset(offset => offset + limit) : null}>Next</button>

          <select style={selectStyle} value={limit} onChange={(e) => setLimit(e.target.value)}>
            {options}
          </select>
        </div>
        <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
          {pokemonList.results.map((result, index) => <Pokemon key={result.name} id={1+index+offset} data={result} />)}
        </div>
      </div>
    )
  }
}