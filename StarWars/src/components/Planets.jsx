import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../globals"

let response = ""
const PlanetList = () => {
    const [Planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanets = async() => {
        response = await axios.get(`${BASE_URL}/planets`)
        setPlanets(response.data.results)
        console.log(response)
    }
    getPlanets()
},[])

if (Planets.length === 0) {
    return <h1> Loading Please Wait...</h1>
} else {
    return(
        <div className="Planet">
            {
                Planets.map((Planet, key) => (
                    <div key={key}>
                        <h3>{Planet.name}</h3>
                    </div>
                ))
            }
        </div>
    )}
}

export default PlanetList