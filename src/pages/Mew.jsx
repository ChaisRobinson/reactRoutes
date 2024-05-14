import React, { useState, useEffect } from 'react';

function MewImage() {
  const [mewData, setMewData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/mew')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMewData(data);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <div>
      {mewData && (
        <div>
          <h1 className='title-one'>{mewData.name}, is my favorite pokemon!</h1>
          <img src={mewData.sprites.front_default} alt="Mew" />
          <h2>Stats:</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {mewData.stats.map(stat => (
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

export default MewImage;
