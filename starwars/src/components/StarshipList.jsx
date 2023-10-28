import { useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from '../../global'
const StarshipList = () => {
  const [starships, setStarships] = useState([]);
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
          <div key={index}>
            <h3>{starship.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default StarshipList;