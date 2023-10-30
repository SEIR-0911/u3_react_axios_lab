import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function FilmPage() {
    const [film, setFilm] = useState(null)
    const { filmUrl } = useParams() 
    useEffect(() => {
        const fetchFilmDetails = async () => {
            try {
                const response = await axios.get(decodeURIComponent(filmUrl))
                setFilm(response.data)
                console.log(response.data)
            } catch (error) {
                console.error("Error fetching starship data:", error)
            }
        }

        fetchFilmDetails()
    }, [filmUrl])

    return (
        <div>
            <h2>Film Details</h2>
            {film ? (
                <div>
                <h3>{film.title}</h3>
                <p>Episode: {film.episode_id}</p>
                <p>Director: {film.director} days</p>
                <p>Producer: {film.producer}m</p>
                <p>Release Date: {film.release_date}</p>
                <p>URL: {film.url}</p>
                </div>
            ) : (
                <p>Loading film details...</p>
            )}
        </div>
    )
}
