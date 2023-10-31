import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios"

import { BASE_URL } from '../globals'

export default function PlanetDetails(){

    //setting up the individual planet in state
    const [planet, setPlanet] = useState()

    //setting up the param to pull to be the planet's ID
    let {id} = useParams()

    useEffect(() => {
        const getPlanet = async() => {
            const response = await axios.get(`${BASE_URL}planets/`)
            setPlanet(response.data.results[id])
        }
        getPlanet()
    }, [])

return planet ? (
    <div className = "detail">
        <h2>{planet.name}</h2>
        <ul>
            <li>Rotation Period: {planet.rotation_period}</li>
            <li>Orbital Period: {planet.orbital_period}</li>
            <li>Diameter: {planet.diameter}</li>
            <li>Climate: {planet.climate}</li>
            <li>Gravity: {planet.gravity}</li>
            <li>Terrain: {planet.terrain}</li>
            <li>Surface Water: {planet.surface_water}</li>
            <li>Population: {planet.population}</li>
            <li>Residents: {planet.residents}</li>
            <li>Films: {planet.films}</li>
        </ul>
        <Link to = "/planets">Return to planet list</Link>
    </div>
) : <h3> Finding planet...</h3>
}