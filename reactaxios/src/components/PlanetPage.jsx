import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function PlanetPage() {
    const [planet, setPlanet] = useState(null)
    const { planetUrl } = useParams()
    useEffect(() => {
        const fetchPlanetDetails = async () => {
            try {
                const response = await axios.get(decodeURIComponent(planetUrl))
                setPlanet(response.data)
            } catch (error) {
                console.error("Error fetching Planet data:", error)
            }
        }

        fetchPlanetDetails()
    }, [planetUrl])

    return (
        <div>
            <h2>Planet Details</h2>
            {planet ? (
                <div>
                    <h3>{planet.name}</h3>
                    <p>Rotation Period: {planet.rotation_period} hours</p>
                    <p>Orbital Period: {planet.orbital_period} days</p>
                    <p>Diameter: {planet.diameter}m</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Terrain: {planet.terrain}</p>
                </div>
            ) : (
                <p>Loading Planet Details...</p>
            )}
        </div>
    )
}