import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FilmPage = (props) => {
  let { id } = useParams();

  const [film, setFilm] = useState();

  useEffect(() => {
    let selectedFilm = props.films.find((film, index) => index === parseInt(id));
    setFilm(selectedFilm);
  }, [props.films, id]);

  return film ? (
    <div className="detail">
      <Link to="/Films">
        <button>&lt; Back</button>
      </Link>
      <div className="detail-header">
        <div style={{ minWidth: "30em", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1>{film.title}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div className='card' style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>{film.title}</h5>
          <p>
                <strong>Episode ID:</strong> {film.episode_id}
              </p>
              <p>
                <strong>Director:</strong> {film.director}
              </p>
              <p>
                <strong>Producer:</strong> {film.producer}
              </p>
              <p>
                <strong>Release Date:</strong> {film.release_date}
              </p>
              <p>
                <strong>Opening Crawl:</strong> {film.opening_crawl}
              </p>
        </div>
      </div>
    </div>
  ) : <h1>Film not found</h1>;
};

export default FilmPage;
