import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function PeoplePage() {
    const [people, setPeople] = useState(null)
    const { peopleUrl } = useParams() 
    useEffect(() => {
        const fetchPeopleDetails = async () => {
            try {
                const response = await axios.get(decodeURIComponent(peopleUrl))
                setPeople(response.data)
            } catch (error) {
                console.error("Error fetching People data:", error)
            }
        }

        fetchPeopleDetails()
    }, [peopleUrl])

    return (
        <div>
            <h2>People</h2>
            {people ? (
                <div>
                <h3>{people.name}</h3>
                <p>Height: {people.height}cm</p>
                <p>Weight: {people.mass}kg</p>
                <p>Birth Year: {people.birth_year}</p>
                </div>
            ) : (
                <p>Loading People Details...</p>
            )}
        </div>
    )
}
