import "./style.css";

export default function Pokecard({ data, index }) {
  return (
    <div className={`Pokecard type-${data.type}`}>
      <h2>{data.name}</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={data.name} />
    </div>
  );
}
