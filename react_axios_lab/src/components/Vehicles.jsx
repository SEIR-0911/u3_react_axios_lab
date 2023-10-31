import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Vehicles(props) {
  let navigate = useNavigate();

  const showVehicle = (index) => {
    navigate(`${index}`);
  }

  if (props.vehicles.length === 0) {
    return <h3>Loading Please Wait</h3>;
  } else {
    return (
      <div className="Vehicles top-list">
        <h1>Vehicles</h1>
        {props.vehicles.map((vehicle, index) => {
          return (
            <div className="list"  onClick={() => showVehicle(index)} key={index}>
              <h5>{vehicle.name}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}
