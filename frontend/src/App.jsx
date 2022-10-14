import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";

import "./App.css";

import pokemonList from "./data/pokemonList";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % pokemonList.length);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

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
