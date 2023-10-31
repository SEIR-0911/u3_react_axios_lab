import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios"

import { BASE_URL } from '../globals'

export default function FilmDetails(){
    //setting up the individual film in state
    const [film, setFilm] = useState()

    //setting up the param to pull to be the ship's ID
    let {id} = useParams()

    useEffect(() => {
        const getFilm = async() => {
            const response = await axios.get(`${BASE_URL}films/`)
            setFilm(response.data.results[id])
        }
        getFilm()
    },[])

    return film ? (
        <div className="detail">
            <h2>Title: {film.title}</h2>
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
            <Link to ="/films">Return to Film List</Link>
        </div>
    ) : <h3> Finding film...</h3>
}