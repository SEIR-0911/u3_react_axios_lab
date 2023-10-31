import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from "../globals"

export default function ShipDetails() {

const [starship, setStarship] = useState()

let {id} = useParams()

useEffect(() => {
    const getStarship = async() => {
        const response = await axios.get(`${BASE_URL}starships`)
        setStarship(response.data.results[id])
    }
    getStarship()
}, [])

return starship ? (
    <div className="detail">
        <h3>{starship.name}</h3>
        <p>Model: {starship.model}</p>
        <p>Class: {starship.starship_class}</p>
        <p>Crew: {starship.crew}</p>
        <Link to="/StarshipList"> Return to Starships list</Link>
    </div>
) : <h2 className="Finding">Finding Starships...</h2>

}