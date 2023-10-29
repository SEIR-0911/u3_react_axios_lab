export default function Vehicles(props) {
  if (!props.vehicles) {
    return <h1>Loading Please Wait</h1>;
  } else {
    return (
      <div className="Vehicles">
        <h1>Vehicles</h1>
        {props.vehicles.map((vehicle, index) => {
          return (
            <div className="card" key={index}>
              <h5>{vehicle.name}</h5>
              <p>
                <strong>Model:</strong> {vehicle.model}
              </p>
              <p>
                <strong>Manufacturer:</strong> {vehicle.manufacturer}
              </p>
              <p>
                <strong>Cost in Credits:</strong> {vehicle.cost_in_credits}
              </p>
              <p>
                <strong>Length:</strong> {vehicle.length}
              </p>
              <p>
                <strong>Max Atmosphering Speed:</strong>{" "}
                {vehicle.max_atmosphering_speed}
              </p>
              <p>
                <strong>Crew:</strong> {vehicle.crew}
              </p>
              <p>
                <strong>Passengers:</strong> {vehicle.passengers}
              </p>
              <p>
                <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}
              </p>
              <p>
                <strong>Consumables:</strong> {vehicle.consumables}
              </p>
              <p>
                <strong>Vehicle Class:</strong> {vehicle.vehicle_class}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
