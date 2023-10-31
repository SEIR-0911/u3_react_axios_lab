import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from "../globals"

export default function PlanetsDetails() {

const [films, setFilms] = useState()

let {id} = useParams()

useEffect(() => {
    const getFilms = async() => {
        const response = await axios.get(`${BASE_URL}films`)
        setFilms(response.data.results[id])
    }
    getFilms()
}, [])

return films ? (
    <div className="detail">
        <h3>{films.name}</h3>
        <p>Rotation Period: {films.rotation_period} hours</p>
        <p>Orbital Period: {films.orbital_period} days</p>
        <p>Diameter: {films.diameter}m</p>
        <p>Climate: {films.climate}</p>
        <p>Terrain: {films.terrain}</p>
        <Link to="/FilmsList"> Return to Films list</Link>
    </div>
) : <h2 className="Finding">Finding Films...</h2>

}