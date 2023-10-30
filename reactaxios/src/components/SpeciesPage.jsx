import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function SpeciesPage() {
    const [species, setSpecies] = useState(null)
    const { speciesUrl } = useParams()
    useEffect(() => {
        const fetchSpeciesDetails = async () => {
            try {
                const response = await axios.get(decodeURIComponent(speciesUrl))
                setSpecies(response.data)
            } catch (error) {
                console.error("Error fetching Species data:", error)
            }
        }

        fetchSpeciesDetails()
    }, [speciesUrl])

    return (
        <div>
            <h2>Species Details</h2>
            {species ? (
                <div>
                    <h3>{species.name}</h3>
                    <p>Classification: {species.classification}</p>
                    <p>Designation: {species.designation}</p>
                    <p>Average height: {species.average_height}cm</p>
                    <p>Homeworld: {species.homeworld}</p>
                    <p>Language: {species.language}</p>
                </div>
            ) : (
                <p>Loading Species Details...</p>
            )}
        </div>
    )
}