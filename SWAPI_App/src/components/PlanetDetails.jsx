//importing libraries and packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../global";

export default function planetDetails() {
  //Here, useParams() is taking the id from what's in the route in Main.js. Destructuring the id to what is at the end of the url in Main.
  //Q. so it dynamically sets the ID to what exactly? The index?
  //Where I have id written in my routes, should I call it index for consistency?
  let { id } = useParams();

  //setting up useState
  const [planet, setPlanet] = useState("");

  //setting up use effect to do an axios call for planet with specified id
  useEffect(() => {
    const getplanet = async () => {
      const response = await axios.get(`${BASE_URL}/planets`);
      setPlanet(response.data.results[id]);
    };
    getplanet();
  }, []);

  //a ternary that outputs the planet after the axios call is done and "Finding planets..." before the planets are found from teh axios call"
  return planet ? (
    <div className="detail">
      <h2>Name: {planet.name}</h2>
      <h4>Population: {planet.population}</h4>
      <h4>Terrain: {planet.terrain}</h4>
      <h4>Climate: {planet.climate}</h4>
      {/* <h4>Films: {planet.films[i]}</h4> */}
      <Link to="/planets"> Return to planet List</Link>
    </div>
  ) : (
    <h3>Finding planets...</h3>
  );
}
