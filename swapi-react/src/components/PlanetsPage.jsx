import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from "../globals"

export default function PlanetsDetails() {

const [planets, setPlanets] = useState()

let {id} = useParams()

useEffect(() => {
    const getPlanets = async() => {
        const response = await axios.get(`${BASE_URL}planets`)
        setPlanets(response.data.results[id])
    }
    getPlanets()
}, [])

return planets ? (
    <div className="detail">
        <h3>{planets.name}</h3>
        <p>Rotation Period: {planets.rotation_period} hours</p>
        <p>Orbital Period: {planets.orbital_period} days</p>
        <p>Diameter: {planets.diameter}m</p>
        <p>Climate: {planets.climate}</p>
        <p>Terrain: {planets.terrain}</p>
        <Link to="/PlanetsList"> Return to Planets list</Link>
    </div>
) : <h2 className="Finding">Finding Planets...</h2>

}