import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const StarshipPage = (props) => {
  // let { name } = useParams()
  // console.log('name', name)
  // name = name.replace(' ', '')
  let { id } = useParams();

  const [starship, setStarship] = useState()
  const [pilots, setPilots] = useState([])

  useEffect( () => {
    console.log(id, props.starships);
    let selectedShip = props.starships.find(
      (starship, index) => index === parseInt(id)
    );
    console.log(selectedShip)
    const getPilots = async () => {
        for (let i = 0; i < selectedShip.pilots.length; i++ ){
            const response = await axios.get(selectedShip.pilots[i])
            console.log(response.data.name)
            setPilots(...pilots, response.data.name)
        }
    }
    getPilots()
    setStarship(selectedShip);

  }, [props.starships.id]);

  return starship ? (
    <div className="detail">
      <Link to="/StarshipList">
        {" "}
        <button> &lt; Back </button>
      </Link>
      <div className="detail-header">
        {/* <img src={boat.img} alt={boat.name} /> */}
        <div
          style={{
            minWidth: "30em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{starship.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div
          className="card"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h5>{starship.name}</h5>
          <p>
            <strong>Model:</strong> {starship.model}
          </p>
          <p>
          <strong>Pilots:</strong> {pilots}
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
          </p>
        </div>
        <p>{starship.description}</p>
      </div>
    </div>
  ) : (
    <h1>ship not found</h1>
  );
};

export default StarshipPage;
