import { useState, useEffect } from "react"
import { BASE_URL } from "../global"
import { useParams, Link } from "react-router-dom"
import axios from "axios"


export default function FilmDetails() {

    const [film, setFilm] = useState()

    let {id} = useParams()

    useEffect(()=>{
        const getFilm = async() => {
            const response = await axios.get(`${BASE_URL}/films`)
            setFilm(response.data.results[id])
            
        }
        getFilm()
    })

    return film ?(
        <div className="detail">
            <h2>Title: {film.title}</h2>
            <h4>Episode: {film.episode_id}</h4>
            <h4>Director: {film.director}</h4>
            <h4>Released: {film.release_date}</h4>
            
            
            <Link to='/films'>Return to Film List</Link>

        </div>
    ) : <h3>Loading...</h3>
}