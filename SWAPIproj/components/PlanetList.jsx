import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);


  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets/`);
      console.log(response.data.results);
      setPlanets(response.data.results);
    };

    getPlanets();
  }, []);


  let navigate = useNavigate()

  const showPlanet = (key) => {
  
      navigate(`${key}`)
  }
  return (
    <div>
      {planets.map((planet, key) => (
        <div onClick={() => showPlanet(key)} key={key} >
        <p>{planet.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Planets;