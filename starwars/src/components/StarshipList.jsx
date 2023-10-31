import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//let navigate = useNavigate();

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  useEffect(() => {
    const getStarships = async () => {
      let response = await axios.get(`https://swapi.dev/api/starships`);
      setStarships(response.data.results);
      console.log(response);
    };
    getStarships();
  }, []);

  function getLastId(url) {
    return parseInt(url.split("/").slice(-2, -1)[0], 10);
  }

  return starships.length === 0 ? (
    <div className='loading'>
      <h3>loading...</h3>
    </div>
  ) : (
    <div className='starship'>
      {starships.map((starship, key) => (
        <div key={key} className='card'>
          <Link to={`/starships/${getLastId(starship.url)}`}>
            <h2>{starship.name}</h2>
            <p>
              Manufacturer: {starship.manufacturer}
              <br />
              length: {starship.length},<br />
              Max Atmospheric speed: {starship.max_atmosphering_speed}
            </p>
            <h3>Crew: {starship.crew}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default StarshipList;
