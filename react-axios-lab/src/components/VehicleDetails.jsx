import { useState, useEffect } from "react"
import { BASE_URL } from "../global"
import { useParams, Link } from "react-router-dom"
import axios from "axios"


export default function VehicleDetails() {

    const [vehicle, setVehicle] = useState()

    let {id} = useParams()

    useEffect(()=>{
        const getVehicle = async() => {
            const response = await axios.get(`${BASE_URL}/vehicles`)
            setVehicle(response.data.results[id])
            
        }
        getVehicle()
    })

    return vehicle ?(
        <div className="detail">
            <h2>Name: {vehicle.name}</h2>
            <h4>Model: {vehicle.model}</h4>
            <h4>Manufacturer: {vehicle.manufacturer}</h4>
            <h4>Cost: {vehicle.cost_in_credits}</h4>
            <h4>Class: {vehicle.vehicle_class}</h4>
            
            
            <Link to='/films'>Return to Vehicle List</Link>

        </div>
    ) : <h3>Loading...</h3>
}