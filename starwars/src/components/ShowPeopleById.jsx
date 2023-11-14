import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowPeopleById = () => {
  const [people, setPeople] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getStarship = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
      console.log(response.data);
      setPeople(response.data);
    };
    getStarship();
  }, []);

  function getLastId(url) {
    return parseInt(url.split("/").slice(-2, -1)[0], 10);
  }

  return !people.name ? (
    <div className='loading'>
      <h3>loading...</h3>
    </div>
  ) : (
    <div className='people-detail'>
      <div>Name: {people.name}</div>
      <div>Height: {people.height}</div>
      <div>Mass: {people.mass}</div>
      <div>Hair Color: {people.hair_color}</div>
      <div>Skin Color: {people.skin_color}</div>
      <div>Eye Color: {people.eye_color}</div>
      <div>Eye Color: {people.eye_color}</div>
      <div>Birth Year: {people.birth_year}</div>
      <div>Gender: {people.gender}</div>
      <div>Home World: {people.homeworld}</div>
      {people.films.map((film, key) => {
        <div key={key}>
          <Link to={`./films/${getLastId(film.url)}`}></Link>
        </div>;
      })}
    </div>
  );
};

export default ShowPeopleById;
