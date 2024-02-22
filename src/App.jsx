import { useEffect  } from "react";
import { Pokedex, Pokecard } from "./components";
import { useContext } from "react";
import "./styles.css";
import { PokeContext } from "./contexts/PokeContext";

 
export default function App() {
  const {data, setData} = useContext(PokeContext);
  useEffect(() => {
    getPokemon();
  }
  , []);

  const getPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    setData(data.results);
    
  }
  return (
    <div className="App">
      <h1>Pokedex</h1>
      {data.length === 0 && <p>Loading...</p>}
      <Pokedex data={data} />
    </div>
  );
}
