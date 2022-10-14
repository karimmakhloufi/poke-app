import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>
        <h1>{pokemon.name}</h1>
        <ul>
          {pokemon.types.map((type) => (
            <li>{type}</li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
