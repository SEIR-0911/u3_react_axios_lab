import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function SpeciesList(){

//setting our state for data to be pulled
const [species, setSpecies] = useState([])

useEffect(()=>{
  const getSpecies = async() => {
    const response = await axios.get(`${BASE_URL}species`)
    setSpecies(response.data.results)
    console.log(response)
  }
  getSpecies()
},[])

let navigate = useNavigate()

const showSpecies = (key) => {
  navigate(`${key}`)
}

if (species.length === 0) {
    return <h2>Loading Please Wait...</h2>
} else {
    return(
        <div className="species">
            <h2>List of Species</h2>
            {
            species.map((species, key) => (
                <div key={species.name} onClick={()=>showSpecies(key)} className="card">
                <h3>{species.name}</h3>
                <p>Classification: {species.classification}</p>
                <p>Designation: {species.designation}</p>
                <p>Average height: {species.average_height}cm</p>
                <p>Homeworld: {species.homeworld}</p>
                <p>Language: {species.language}</p>
                </div>
            ))
            }
        </div>
    )
}}