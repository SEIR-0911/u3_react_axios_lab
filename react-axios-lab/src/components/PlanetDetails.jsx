import { useState, useEffect } from "react"
import { BASE_URL } from "../global"
import { useParams, Link } from "react-router-dom"
import axios from "axios"


export default function PlanetDetails() {

    const [planet, setPlanet] = useState()

    let {id} = useParams()

    useEffect(()=>{
        const getPlanet = async() => {
            const response = await axios.get(`${BASE_URL}/planets`)
            setPlanet(response.data.results[id])
        }
        getPlanet()
    })

    return planet ?(
        <div className="detail">
            <h2>Name: {planet.name}</h2>
            <h4>Population: {planet.population}</h4>
            <h4>Terrain: {planet.terrain}</h4>
            <h4>Climate: {planet.climate}</h4>
            <Link to='/planets'>Return to Planet List</Link>

        </div>
    ) : <h3>Loading...</h3>
}