import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Planets(props) {
  let navigate = useNavigate();

  const showPlanet = (index) => {
    navigate(`${index}`);
  }

  if (props.planets.length === 0) {
    return <h3>Loading Please Wait</h3>;
  } else {
    return (
      <div className="Planets top-list">
        <h1>Planets</h1>
        {props.planets.map((planet, index) => {
          return (
            <div className="list" onClick={() => showPlanet(index)} key={index}>
              <h5>{planet.name}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}
