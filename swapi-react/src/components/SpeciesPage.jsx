import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from "../globals"

export default function SpeciesDetails() {

const [species, setSpecies] = useState()

let {id} = useParams()

useEffect(() => {
    const getSpecies = async() => {
        const response = await axios.get(`${BASE_URL}species`)
        setSpecies(response.data.results[id])
    }
    getSpecies()
}, [])

return species ? (
    <div className="detail">
        <h3>{species.name}</h3>
        <p>Classification: {species.classification}</p>
        <p>Designation: {species.designation}</p>
        <p>Average height: {species.average_height}cm</p>
        <p>Language: {species.language}</p>
        <Link to="/SpeciesList"> Return to Species list</Link>
    </div>
) : <h2 className="Finding">Finding Species...</h2>

}