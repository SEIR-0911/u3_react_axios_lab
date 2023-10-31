import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Films = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  // this should be a single movie object once you've select one

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`https://swapi.dev/api/films/`);
      console.log(response.data.results);
      setFilms(response.data.results);
    };

    getFilms();
  }, []);


  let navigate = useNavigate()

  const showFilm = (key) => {
    //Navigate appends an ID to our existing route
      navigate(`${key}`)
  }
  return (
    <div>
      {films.map((film, key) => (
        <div onClick={() => showFilm(key)} key={key} >
        <p>{film.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Films;
