import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ShowStarship = () => {
  const [starship, setStarship] = useState();

  let { id } = useParams();

  useEffect(() => {
    const getStarship = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/`);
      setStarship(response.data.results[id]);
    };
    getStarship();
  }, []);

  return starship ? (
    <div className='detail'>
      <h2>Name: {starship.name}</h2>
      ... Lets put more Data here! ...
      <Link to='/StarshipsList'> Return to starship list</Link>
    </div>
  ) : (
    <h3>Finding starships...</h3>
  );
};

export default ShowStarship;
