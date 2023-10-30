import { useState, useEffect } from "react"
import { BASE_URL } from "../global"
import { useParams, Link } from "react-router-dom"
import axios from "axios"


export default function ShipDetails() {

    const [ship, setShip] = useState()


    let {id} = useParams()

    useEffect(()=>{
        const getShip = async() => {
            const response = await axios.get(`${BASE_URL}/starships`)
            setShip(response.data.results[id])
        }
        getShip()

    })

    return ship ?(
        <div className="detail">
            <h2>Name: {ship.name}</h2>
            <h4>Crew: {ship.crew}</h4>
            <h4>Cargo: {ship.cargo_capacity}</h4>
            <h4>Passengers: {ship.passengers}</h4>
            <Link to='/starships'>Return to Starship List</Link>

        </div>
    ) : <h3>Loading...</h3>
}