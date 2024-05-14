import React, { useState, useEffect } from 'react';

function PokemonImage() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (pokemonName.trim() === '') {
      setPokemonData(null);
      setError('');
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPokemonData(data);
        setError('');
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        setPokemonData(null);
        setError('No data found for the specified Pokemon');
      });
  }, [pokemonName]);

  const handleInputChange = (e) => {
    setPokemonName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(pokemonName.trim().toLowerCase());
  }

  return (
    <div>
      <h1 className="title-one">Pokemon Viewer</h1>
      <h2 className="title-two">
        Search for a Pokemon by name:
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Pokemon name"
          value={pokemonName}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {pokemonData && (
        <div>
          <h1>{pokemonData.name}</h1>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <h2>Stats:</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {pokemonData.stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonImage;