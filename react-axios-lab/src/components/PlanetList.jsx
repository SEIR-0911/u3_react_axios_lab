import { useState, useEffect } from "react"
import { BASE_URL } from "../global"
import axios from "axios"
import { useNavigate } from "react-router"




export default function PlanetList(){

    const[planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanets = async () => {
            const response = await axios.get(`${BASE_URL}/planets/`)
            setPlanets(response.data.results)
        }
        getPlanets()
    },[])

    let navigate = useNavigate()

    const showPlanet = (key) => {
        navigate(`${key}`)
    }
    return planets ?(
        <div className="PlanetList">
            <h2>Planet List</h2>
            {planets.map((planet, key) => (
                <div key={key} onClick={()=>showPlanet(key)} className="card">
                    <h3>{planet.name}</h3>
                </div>
            ))}
        </div>
    ) : <h3>Loading...</h3>
}