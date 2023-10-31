import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PilotList from './Pilots'

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
    <PilotList pilotUrls={starship.pilots} />
    <Link to="/starships"> Return to starship list</Link>
  </div>
) : <h3>Finding Starship...</h3>
}