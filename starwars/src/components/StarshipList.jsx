import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ShowStarship from "./ShowShip";

let navigate = useNavigate();

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

  return starships.length === 0 ? (
    <div className='starship'>
      <h3>loading...</h3>
    </div>
  ) : (
    <div className='starship'>
      {starships.map((starship, index) => (
        <div key={index}>
          <div key={key} onClick={() => showShip(key)} className='card'>
            <h3>{starship.name}</h3>
          </div>

          {/* <div key={key} onClick={() => ShowStarship(key)} className='starship'>
            <h3>{starship.name}</h3>
          </div> */}

          {/* to={{ pathname: "/StarshipList", }} >
            {starship.name} */}
        </div>
      ))}
    </div>
  );
};

export default StarshipList;
