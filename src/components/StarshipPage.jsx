import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from '../globals'

export default function StarshipDetails(){

    //set up the individual starship in state
    const [starship, setStarship] = useState()
    //setting up the param to pull to be the ship's ID
    let {id} = useParams()

    useEffect(()=>{
        const getStarship = async() => {
            const response = await axios.get(`${BASE_URL}starships/`)
            setStarship(response.data.results[id])
        }
        getStarship()
    },[])

return starship ? (
    <div className="detail">
        <h2>Name: {starship.name}</h2>
        <ul>
            <li>Model: {starship.model}</li>
            <li>Manufacturer: {starship.manufacturer}</li>
            <li>Cost In Credits: {starship.cost_in_credits}</li>
            <li>Length: {starship.length}</li>
            <li>Max. Atmosphering Speed: {starship.max_atmosphering_speed}</li>
            <li>Crew: {starship.crew}</li>
            <li>Passengers: {starship.passengers}</li>
            <li>Cargo Capacity: {starship.cargo_capacity}</li>
            <li>Consumables: {starship.consumables}</li>
            <li>Hyperdrive Rating: {starship.hyperdrive_rating}</li>
            <li>MGLT: {starship.MGLT}</li>
            <li>Starship Class: {starship.starship_class}</li>
            <li>Pilots: {starship.pilots}</li>
            <li>Filmsdata: {starship.films}</li>
            <li>Films: {starship.filmTitles}</li>
        </ul>
        <Link to = "/starships">Return to Starship List</Link>
    </div>
) : <h3>Finding starship...</h3>
}