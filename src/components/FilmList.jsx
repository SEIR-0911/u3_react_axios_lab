import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

const FilmList = (props) => {
    if (!props.films) {
        return <h2>Loading films please wait...</h2>
    } else {

        let navigate = useNavigate()

        const showFilm = (key) => {
            navigate(`${key}`)
        }

        return(
            <div className="film-grid">
                <h2>List of Films</h2>
                {props.films.map((film, key) => (
                    <div key = {key} onClick = {() => showFilm(key)} className = "card">
                        <h3>{film.title}</h3>
                        <ul>
                            <li>Episode: {film.episode_id}</li>
                            <li>Director: {film.director}</li>
                            <li>Release Date: {film.release_date}</li>
                           
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

export default FilmList