import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function StarshipList(props) {
  // console.log(props)

  let navigate = useNavigate()

  const showShip = (index) => {
    // console.log('Starship', `${starship.name.replace(' ', "")}`)
    // navigate(`${starship.name.replace(' ', "")}`)
    navigate(`${index}`)
  }


  if (props.ships.length === 0) {
    return <h3>Loading Please Wait</h3>;
  } else {
    return (
      <div className="StarshipsList top-list">
        <h1>Starships</h1>
        {props.ships.map((starship, index) => {
          return (
            <div className="list"  onClick={() => showShip(index)} key={index}>
              <h5>{starship.name}</h5>
              {/* <p>
                <strong>Model:</strong> {starship.model}
              </p>
              <p>
                <strong>Manufacturer:</strong> {starship.manufacturer}
              </p>
              <p>
                <strong>Cost in Credits:</strong> {starship.cost_in_credits}
              </p>
              <p>
                <strong>Length:</strong> {starship.length}
              </p>
              <p>
                <strong>Max Atmosphering Speed:</strong>{" "}
                {starship.max_atmosphering_speed}
              </p>
              <p>
                <strong>Crew:</strong> {starship.crew}
              </p>
              <p>
                <strong>Passengers:</strong> {starship.passengers}
              </p>
              <p>
                <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
              </p>
              <p>
                <strong>Consumables:</strong> {starship.consumables}
              </p>
              <p>
                <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
              </p>
              <p>
                <strong>MGLT:</strong> {starship.MGLT}
              </p>
              <p>
                <strong>Starship Class:</strong> {starship.starship_class}
              </p> */}
            </div>
          );
        })}
      </div>
    );
  }
}
