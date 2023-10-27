import { useState } from "react";
const Starships = () => {
  return (
    <div className='Navbar'>
      <h1>Starships page</h1>

      <button onClick={showStarships}>Show Starships</button>

      <p>starship name</p>
    </div>
  );
};

export default Starships;

// cosnt showStarships
