import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../global";
import { useNavigate } from "react-router-dom";

let response;
const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      response = await axios.get(`${BASE_URL}/films`);
      console.log(response);
      setFilms(response.data.results);
    };
    getFilms();
  }, []);

  let navigate = useNavigate();

  const showFilm = (index) => {
    navigate(`${index}`);
  };

  if (!response) {
    return <h2>Let the Force be with you....</h2>; //this is a guard operator that will show something while something else is missing or loading
  } else {
    return (
      <div className="film">
        {films.map((film, index) => (
          <div
            className="film-card"
            onClick={() => showFilm(index)}
            key={index}
          >
            <h3>{film.title}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default FilmList;
