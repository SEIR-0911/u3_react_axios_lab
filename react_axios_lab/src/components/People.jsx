export default function People(props) {
  if (!props.people) {
    return <h1>Loading Please Wait</h1>;
  } else {
    return (
      <div className="People">
        <h1>People</h1>
        {props.people.map((person, index) => {
          return (
            <div className="card" key={index}>
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
          );
        })}
      </div>
    );
  }
}
