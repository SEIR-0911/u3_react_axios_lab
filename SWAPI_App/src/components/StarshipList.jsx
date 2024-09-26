import { BASE_URL } from "../global";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
const {log} = console
export default function StarshipList() {
  //setting state for the starship list:
  const [starships, setStarships] = useState([]);
  //making an axios call inside of use effect when the page is loaded so that the axios call is only made on load and not a few times every second as is default in react-->
  //setting the results of the axios call to the StarshipList:
  useEffect(function () {
    async function getStarships() {
      const response = await axios.get(`https://swapi.dev/api/starships`);
      console.log(response);
      setStarships(response.data.results);
    }
    getStarships();
    console.log(starships);
  }, []);

  function getId(url) {
    return parseInt(url.split("/").slice(-2, -1)[0], 10);
  }
log(starships);
  return (
    <div className="starship">
      {starships.map((starship, idx) => (
        <Link key={idx} to={`/starships/${getId(starship.url)}`}>
          <div className="ship-card">
            <h3>{starship.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
