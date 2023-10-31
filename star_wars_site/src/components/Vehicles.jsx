import { Link, useNavigate } from 'react-router-dom'

export default function Vehicles (props) {
    console.log(props.vehicles)
    let navigate = useNavigate()
    const showVehicles = (vehicle) => {
        navigate(`${vehicle.name}`)
    }

    return (
        <div className="vehicles-outer">
            <h1 className="page-head vehicle-head">Vehicles</h1>
            <div className="outer">
            {props.vehicles.map((vehicle, index)=>(
                    <div className="species-card card" onClick={() => showVehicles(vehicle)} key={index}>
                        <h2>{vehicle.name}</h2>
                        <div className="ship-basics">
                            <div>Model: {vehicle.model}</div>
                            <div>Manufacturer: {vehicle.manufacturer}</div>
                            <div>Cost in Credits: {vehicle.cost_in_credits}</div>
                            <div>Max Speed: {vehicle.max_atmosphering_speed}</div>
                            <h3>Click for more info</h3>
                        </div>
                    </div>
                ))}
            </div>
            <button className="go-back"><Link to="/" className='link'>Home</Link></button>
        </div>
    )
}