import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Species(props) {
  let navigate = useNavigate();

  const showSpecies = (index) => {
    navigate(`${index}`);
  }

  if (props.species.length === 0) {
    return <h3>Loading Please Wait</h3>;
  } else {
    return (
      <div className="Species top-list">
        <h1>Species</h1>
        {props.species.map((species, index) => {
          return (
            <div className="list" onClick={() => showSpecies(index)} key={index}>
              <h5>{species.name}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}
