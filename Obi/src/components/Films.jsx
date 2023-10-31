import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Films() {
  const [films, setFilms] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const getFilms = async ()  =>  {
        try{
        const response =   await axios.get("https://swapi.dev/api/films")
     setFilms(response.data.results)
    } catch (error) {
        console.error("Error fetching films:", error)
      }
    }
    getFilms()
  }, []);

const showFilm = (filmId) => {
  navigate(`/films/${filmId}`);
};

  return films ? (
    <div className="film">
            <h1>List of Films</h1>
            {films.map((film) => {
        const filmId = film.url.match(/(\d+)\/$/)[1];
        return(
                <div key={filmId} onClick={() => showFilm(filmId)} className="card">
                    <h3>{film.title}</h3>
                </div>
        )
        })}
        </div>
    ): (
      <h3>Loading Films...</h3>
    );
}
export default Films;
