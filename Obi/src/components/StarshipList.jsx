import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function StarshipList() {
  const [starShips, setStarShips] = useState(null);

  useEffect(() => {
    const getStarShips = async ()  =>  {
        const response =   await axios.get("https://swapi.dev/api/starships")
        setStarShips(response.data.results)
    }
    getStarShips()
  }, []);

  let navigate = useNavigate()

  const showShip = (starshipId) => {
    navigate(`/starships/${starshipId}`);
  };
  return starShips ? (
    <div className="starship">
        <h1>List of Starships</h1>
      {starShips.map((ship) => {
        const starshipId = ship.url.match(/(\d+)\/$/)[1];
        return (
          <div key={starshipId} onClick={() => showShip(starshipId)} className="card">
            <h3>{ship.name}</h3>
          </div>
        );
      })}
    </div>
  ) : (
    <h3>Loading Starships...</h3>
  );
}

export default StarshipList;
