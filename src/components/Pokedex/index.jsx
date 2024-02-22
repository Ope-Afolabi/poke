import Pokecard from "../Pokecard";
import "./style.css";

export default function Pokedex({ data }) {
  return (
    <div className="Pokedex">
      {data && data.map((pokemonItem, index) => (
        <Pokecard key={pokemonItem.name} data={pokemonItem} index={index} />
      ))}
    </div>
  );
}
