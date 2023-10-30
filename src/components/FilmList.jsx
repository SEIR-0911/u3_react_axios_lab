import { useEffect } from "react";

const FilmList = (props) => {
    if (!props.films) {
        return <h2>Loading films please wait...</h2>
    } else {
        return(
            <div>
                <h2>Films</h2>
                {props.films.map((film) => (
                    <div key = {film.episode_id}>
                        <h3>{film.title}</h3>
                        <ul>
                            <li>Episode: {film.episode_id}</li>
                            <li>Opening Crawl: {film.opening_crawl}</li>
                            <li>Director: {film.director}</li>
                            <li>Producer: {film.producer}</li>
                            <li>Release Date: {film.release_date}</li>
                            <li>Characters: {film.characters}</li>
                            <li>Planets: {film.planets}</li>
                            <li>Starships: {film.starships}</li>
                            <li>Vehicles: {film.vehicles}</li>
                            <li>Species: {film.species}</li>
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

export default FilmList