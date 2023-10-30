import { useState, useEffect } from "react"
import { BASE_URL } from "../global"
import axios from "axios"
import { useNavigate } from "react-router"




export default function VehicleList(){

    const[vehicles, setVehicles] = useState([])

    useEffect(() => {
        const getVehicles = async () => {
            const response = await axios.get(`${BASE_URL}/vehicles/`)
            setVehicles(response.data.results)
        }
        getVehicles()
    },[])

    let navigate = useNavigate()

    const showVehicles = (key) => {
        navigate(`${key}`)
    }
    return vehicles ?(
        <div className="VehicleList">
            <h2>Vehicle List</h2>
            {vehicles.map((vehicle, key) => (
                <div key={key} onClick={()=>showVehicles(key)} className="card">
                    <h3>{vehicle.name}</h3>
                </div>
            ))}
        </div>
    ) : <h3>Loading...</h3>
}