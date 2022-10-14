import Home from "./pages/Home";

import "./App.css";

import pokemonList from "./data/pokemonList";

import PokemonCard from "@components/PokemonCard";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          let newIndex = currentIndex - 1;

          if (newIndex < 0) {
            newIndex = pokemonList.length - 1;
          }

          setCurrentIndex(newIndex);
        }}
      >
        {"<"}
      </button>
      <PokemonCard pokemon={pokemonList[currentIndex]} />
      <button
        type="button"
        onClick={() => {
          let newIndex = currentIndex + 1;

          if (newIndex >= pokemonList.length) {
            newIndex = 0;
          }

          setCurrentIndex(newIndex);
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default App;
