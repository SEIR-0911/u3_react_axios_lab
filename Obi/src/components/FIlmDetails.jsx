import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function FilmDetails() {
    const [film, setFilm] = useState();
    let {id} = useParams();

    useEffect(() => {
        const getFilm = async() => {
            const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
            setFilm(response.data);
        }
        getFilm();
    },[id]);

    return film ? (
        <div className="detail">
            <h2>Title: {film.title}</h2>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
            <Link to="/films"> Return to film list</Link>
        </div>
    ) : <h3>Finding Film...</h3>
}
