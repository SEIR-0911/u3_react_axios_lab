import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function SpeciesList() {
  const [species, setSpecies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getSpecies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}species`)
        setSpecies(response.data.results)
      } catch (error) {
        console.error("Error fetching Species data:", error)
      }
    }
    getSpecies()
  }, [])

  const showSpecies = (speciesUrl) => {
    navigate(`${encodeURIComponent(speciesUrl)}`)
  }

  if (species.length === 0) {
    return <h2>Loading...</h2>
  } else {
    return (
      <div className="species">
        <h2>List of Species</h2>
        {species.map((species) => (
          <div key={species.name} onClick={() => showSpecies(species.url)} className="card">
            <h3>{species.name}</h3>
            <p>Classification: {species.classification}</p>
            <p>Designation: {species.designation}</p>
            <p>Average height: {species.average_height}cm</p>
            <p>Homeworld: {species.homeworld}</p>
            <p>Language: {species.language}</p>
          </div>
        ))}
      </div>
    )
  }
}
