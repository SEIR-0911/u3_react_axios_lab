import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StarShipList = () => {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null);
  

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/`);
      console.log(response.data.results);
      setStarships(response.data.results);
    };

    getStarships();
  }, []);


  let navigate = useNavigate()

  const showStarship = (key) => {
   
      navigate(`${key}`)
  }
  return (
    <div >
      {starships.map((starship, key) => (
        <div onClick={() => showStarship(key)} key={key} >
          <p>{starship.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StarShipList;