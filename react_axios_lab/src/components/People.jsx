import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function People(props) {
  let navigate = useNavigate();

  const showPerson = (index) => {
    navigate(`${index}`);
  }

  if (props.people.length === 0) {
    return <h3>Loading Please Wait</h3>;
  } else {
    return (
      <div className="People top-list">
        <h1>People</h1>
        {props.people.map((person, index) => {
          return (
            <div className="list" onClick={() => showPerson(index)} key={index}>
              <h5>{person.name}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}
