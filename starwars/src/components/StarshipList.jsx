import { useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from '../../global'
import './starship.css'


const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [films, setFilms] = useState([]);
  const [starshipValid, setStarshipValid] = useState(false);

  useEffect(() => {
    const getStarships = async () => {
      let response = await axios.get(`${BASE_URL}/starships`);
      setStarships(response.data.results);
      console.log(response);
    };
    getStarships();
  }, []);

  if (starships.length === 0) {
    console.log("loading...");
    return (
      <div className='starship'>
        <h3>loading...</h3>
      </div>
    );
  } else {
    return (
      <div className='starship'>
        {starships.map((starship, index) => (
          <div className="starshipinfodiv" key={index}>
            <h2>Name: {starship.name}</h2>
            <h3>Max atmosphereing speed: {starship.max_atmosphering_speed}</h3>
            <h3>Crew Capacity: {starship.crew}</h3>
            <h3>Film apperance:</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default StarshipList;