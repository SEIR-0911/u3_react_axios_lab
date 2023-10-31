import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PeoplePage = (props) => {
  let { id } = useParams();

  const [person, setPerson] = useState();

  useEffect(() => {
    let selectedPerson = props.people.find((person, index) => index === parseInt(id));
    setPerson(selectedPerson);
  }, [props.people, id]);

  return person ? (
    <div className="detail">
      <Link to="/People">
        <button>&lt; Back</button>
      </Link>
      <div className="detail-header">
        <div style={{ minWidth: "30em", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1>{person.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div className='card' style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>{person.name}</h5>
          <p>
                <strong>Height:</strong> {person.height}
              </p>
              <p>
                <strong>Mass:</strong> {person.mass}
              </p>
              <p>
                <strong>Hair Color:</strong> {person.hair_color}
              </p>
              <p>
                <strong>Skin Color:</strong> {person.skin_color}
              </p>
              <p>
                <strong>Eye Color:</strong> {person.eye_color}
              </p>
              <p>
                <strong>Birth Year:</strong> {person.birth_year}
              </p>
              <p>
                <strong>Gender:</strong> {person.gender}
              </p>
        </div>
      </div>
    </div>
  ) : <h1>Person not found</h1>;
};

export default PeoplePage;
