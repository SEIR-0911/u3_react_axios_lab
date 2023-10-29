export default function Species(props) {
  if (!props.species) {
    return <h1>Loading Please Wait</h1>;
  } else {
    return (
      <div className="Species">
        <h1>Species</h1>
        {props.species.map((species, index) => {
          return (
            <div className="card" key={index}>
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
          );
        })}
      </div>
    );
  }
}
