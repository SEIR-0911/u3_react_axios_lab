import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../globals"

let response = ""
const StarshipList = () => {
    const [starships, setStarships] = useState([])

    useEffect(() => {
        const getStarships = async() => {
        response = await axios.get(`${BASE_URL}/starships`)
        setStarships(response.data.results)
        console.log(response)
    }
    getStarships()
},[])

if (starships.length === 0) {
    return <h1> Loading Please Wait...</h1>
} else {
    return(
        <div className="starship">
            {
                starships.map((starship, key) => (
                    <div key={key}>
                        <h3>{starship.name}</h3>
                    </div>
                ))
            }
        </div>
    )}
}

export default StarshipList