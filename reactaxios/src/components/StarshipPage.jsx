import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function StarshipPage() {
    const [starship, setStarship] = useState(null)
    const { starshipUrl } = useParams() 
    useEffect(() => {
        const fetchStarshipDetails = async () => {
            try {

                const response = await axios.get(decodeURIComponent(starshipUrl))
                setStarship(response.data)
            } catch (error) {
                console.error("Error fetching starship data:", error)
            }
        }

        fetchStarshipDetails()
    }, [starshipUrl])

    return (
        <div>
            <h2>Starship Details</h2>
            {starship ? (
                <div>
                    <h3>{starship.name}</h3>
                    <p>Model: {starship.model}</p>
                    <p>Class: {starship.starship_class}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>URL: {starship.url}</p>
                </div>
            ) : (
                <p>Loading starship details...</p>
            )}
        </div>
    )
}
