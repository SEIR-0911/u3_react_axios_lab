import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const VehiclePage = (props) => {
  let { id } = useParams();

  const [vehicle, setVehicle] = useState();

  useEffect(() => {
    let selectedVehicle = props.vehicles.find((vehicle, index) => index === parseInt(id));
    setVehicle(selectedVehicle);
  }, [props.vehicles, id]);

  return vehicle ? (
    <div className="detail">
      <Link to="/Vehicles">
        <button>&lt; Back</button>
      </Link>
      <div className="detail-header">
        <div style={{ minWidth: "30em", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1>{vehicle.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div className='card' style={{ display: "flex", justifyContent: "space-between" }}>
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
      </div>
    </div>
  ) : <h1>Vehicle not found</h1>;
};

export default VehiclePage;
