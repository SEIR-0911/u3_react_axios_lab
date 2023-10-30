import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function VehiclesList() {
    const [vehicles, setVehicles] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getVehicles = async () => {
            try {
                const response = await axios.get(`${BASE_URL}starships`)
                setStarships(response.data.results)
            } catch (error) {
                console.error("Error fetching Starship data:", error)
            }
        }
        getStarships()
    }, [])

    const showShip = (starshipUrl) => {
        navigate(`${encodeURIComponent(starshipUrl)}`)
    }

    if (starships.length === 0) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div className="starship">
                <h2>List of Starships</h2>
                {starships.map((starship) => (
                    <div key={starship.name} onClick={() => showShip(starship.url)} className="card">
                        <h3>{starship.name}</h3>
                        <p>Model: {starship.model}</p>
                        <p>Class: {starship.starship_class}</p>
                        <p>Crew: {starship.crew}</p>
                        <p>URL: {starship.url}</p>
                    </div>
                ))}
            </div>
        )
    }
}
