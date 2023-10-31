import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ShowStarship = () => {
  const [starship, setStarship] = useState([]);
  const [people, setPeople] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getPeople = async () => {
      const people = await axios.get(`https://swapi.dev/api/people`);
      console.log(people.data);
      setPeople(people);
    };
    const getStarship = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
      console.log(response.data);
      setStarship(response.data);
    };
    getStarship();
    getPeople();
  }, []);

  function getLastId(url) {
    return parseInt(url.split("/").slice(-2, -1)[0], 10);
  }

  return !starship.name ? (
    <div className='loading'>
      <h3>loading...</h3>
    </div>
  ) : (
    <div className='detail'>
      <h2>Name: {starship.name}</h2>
      <h2>Crew: {starship.crew}</h2>

      <h3>Pilots:</h3>
      {starship.pilots.length === 0 ? (
        <div>No Pilot</div>
      ) : (
        starship.pilots.map((pilot, key) => {
          return (
            <div key={key}>
              <Link to={`/people/${getLastId(pilot)}`}>{pilot}</Link>
            </div>
          );
        })
      )}

      <h2>Films: </h2>
      {starship.films.length === 0 ? (
        <div>No Film</div>
      ) : (
        starship.films.map((film, key) => {
          return (
            <div key={key}>
              <Link to={`/films/${getLastId(film)}`}>{film}</Link>
            </div>
          );
        })
      )}
      <Link to='/starships'> Return to Starship List</Link>
    </div>
  );
};

export default ShowStarship;
