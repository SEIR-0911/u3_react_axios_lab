import { useState, useEffect } from "react"
import { BASE_URL } from "../global"
import axios from "axios"
import { useNavigate } from "react-router"



export default function StarshipList(){

    const[ships, setShips] = useState([])

    useEffect(() => {
        const getShips = async () => {
            const response = await axios.get(`${BASE_URL}/starships/`)
            setShips(response.data.results)
        }
        getShips()
    },[])

    let navigate = useNavigate()

    const showShip = (key) => {
        navigate(`${key}`)
    }
    return ships ?(
        <div className="StarshipList">
            <h2>Starships List</h2>
            {ships.map((ship, key) => (
                <div key={key} onClick={()=>showShip(key)} className="card">
                    <h3>{ship.name}</h3>
                </div>
            ))}
        </div>
    ) : <h3>Loading...</h3>
}
