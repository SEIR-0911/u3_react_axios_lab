import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ShipDetails(){

//setting up the individiual starship in state
const [starship, setStarship] = useState()
//setting up the param to pull to be the ship's ID
let {id} = useParams()

useEffect(()=>{
  const getStarship = async() => {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}/`)
    setStarship(response.data)
  }
  getStarship()
},[id])


return starship ? (
  <div className="detail">
    <h2>Name: {starship.name}</h2>
    <p>Model: {starship.model}</p>
    <p>Manufacturer: {starship.manufacturer}</p>
    <p>Cost in Credits: {starship.cost_in_credits}</p>
    <p>Length: {starship.length}</p>
    <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
    <p>Crew Size: {starship.crew}</p>
    <p>Passengers: {starship.passengers}</p>
    <p>Cargo Capacity: {starship.cargo_capacity}</p>
    <button><Link to="/starships"> Return to list</Link></button>
  </div>
) : <h3>Finding Starship...</h3>
}

// import { useState, useEffect } from "react"
// import axios from "axios"
// import { BASE_URL } from "../globals"
// import { useParams, Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"

// const ShipDetails = () => {
//     const [starships, setStarships] = useState()
//     const { id } = useParams()

//     useEffect(() => {
//         const getStarships = async () => {
//             const response = await axios.get(`${BASE_URL}/starships/${id}/`)
//             setStarships(response.data.results[id])
//             console.log(response)
//         }
//         getStarships()
//     }, [id])

//     let navigate = useNavigate()

//     return starships ? (
//         <div className="detail">
//             <h1>Name: {starships.name}</h1>
//             <div className="card" onClick={() => navigate("/StarshipsList")}>
//                 <h3>Model: {starships.model}</h3>
//                 <p>Manufacturer: {starships.manufacturer}</p>
//                 <p>Cost in Credits: {starships.cost_in_credits}</p>
//                 <p>Length: {starships.length}</p>
//                 <p>Max Atmosphering Speed: {starships.max_atmosphering_speed}</p>
//                 <p>Crew Size: {starships.crew}</p>
//                 <p>Passengers: {starships.passengers}</p>
//                 <p>Cargo Capacity: {starships.cargo_capacity}</p>
//             </div>
//             <Link to="/StarshipsList">Return to starship list</Link>
//         </div>
//     ) : <h3>Finding starships...</h3>
// }

// export default ShipDetails
