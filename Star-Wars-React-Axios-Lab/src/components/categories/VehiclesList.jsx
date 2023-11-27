export default function VehiclesList (props) {


    if (props.vehiclesList.length > 0) {
        return(
            <div className="vehicles-grid">
                {
                    props.vehiclesList.map((vehicle) => (
                        <div key={vehicle.url}> Model: {vehicle.model} </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div>Waiting for vehicles</div>
        )
    }
    
}