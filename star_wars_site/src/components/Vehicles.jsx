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
                        </div>
                    </div>
                ))}
            </div>
            <button className="go-back"><Link to="/">Home</Link></button>
        </div>
    )
}