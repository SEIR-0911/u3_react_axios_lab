import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SpeciesPage = (props) => {
  let { id } = useParams();

  const [species, setSpecies] = useState();

  useEffect(() => {
    let selectedSpecies = props.species.find((species, index) => index === parseInt(id));
    setSpecies(selectedSpecies);
  }, [props.species, id]);

  return species ? (
    <div className="detail">
      <Link to="/Species">
        <button>&lt; Back</button>
      </Link>
      <div className="detail-header">
        <div style={{ minWidth: "30em", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1>{species.name}</h1>
        </div>
      </div>
      <div className= "info-wrapper">
        <div className='card' style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>{species.name}</h5>
          <p>
                <strong>Classification:</strong> {species.classification}
              </p>
              <p>
                <strong>Designation:</strong> {species.designation}
              </p>
              <p>
                <strong>Average Height:</strong> {species.average_height}
              </p>
              <p>
                <strong>Skin Colors:</strong> {species.skin_colors}
              </p>
              <p>
                <strong>Hair Colors:</strong> {species.hair_colors}
              </p>
              <p>
                <strong>Eye Colors:</strong> {species.eye_colors}
              </p>
              <p>
                <strong>Average Lifespan:</strong> {species.average_lifespan}
              </p>
              <p>
                <strong>Language:</strong> {species.language}
              </p>
        </div>
      </div>
    </div>
  ) : <h1>Species not found</h1>;
};

export default SpeciesPage;
