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
    return <h1 className="Loading">Loading Please Wait...</h1>
} else {
    return(
        <div className="species">
            
            {
            species.map((species, key) => (
                <div key={species.name} onClick={()=>showSpecies(key)} className="card">
                <h3>{species.name}</h3>
                </div>
            ))
            }
        </div>
    )
}}