import { useNavigate } from "react-router-dom";

export default function VehicleObj({ vehicles }) {

    const navigate = useNavigate()

    function showVehicle(vehicle) {
        navigate(`${vehicle.name}`)
    }

    return (
        vehicles.length >= 1 ?
            vehicles.map((vehicle) => (
                <div className="card" key={vehicle.name} onClick={() => showVehicle(vehicle)}>
                    <h1>{vehicle.name}</h1>
                </div>
            )) : <h1>Loading On-World Rentals...</h1>
    )

}