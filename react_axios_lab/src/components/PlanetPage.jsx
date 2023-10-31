import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PlanetPage = (props) => {
  let { id } = useParams();

  const [planet, setPlanet] = useState();

  useEffect(() => {
    let selectedPlanet = props.planets.find((planet, index) => index === parseInt(id));
    setPlanet(selectedPlanet);
  }, [props.planets, id]);

  return planet ? (
    <div className="detail">
      <Link to="/Planets">
        <button>&lt; Back</button>
      </Link>
      <div className="detail-header">
        <div style={{ minWidth: "30em", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1>{planet.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div className='card' style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>{planet.name}</h5>
          <p>
                <strong>Rotation Period:</strong> {planet.rotation_period}
              </p>
              <p>
                <strong>Orbital Period:</strong> {planet.orbital_period}
              </p>
              <p>
                <strong>Diameter:</strong> {planet.diameter}
              </p>
              <p>
                <strong>Climate:</strong> {planet.climate}
              </p>
              <p>
                <strong>Gravity:</strong> {planet.gravity}
              </p>
              <p>
                <strong>Terrain:</strong> {planet.terrain}
              </p>
              <p>
                <strong>Surface Water:</strong> {planet.surface_water}
              </p>
              <p>
                <strong>Population:</strong> {planet.population}
              </p>
        </div>
      </div>
    </div>
  ) : <h1>Planet not found</h1>;
};

export default PlanetPage;
