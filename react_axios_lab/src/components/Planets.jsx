export default function Planets(props) {

    if(!props.planets) {
        return <h1>Loading Please Wait</h1>
    } else {
        return(
            <div className="Planets">
                <h1>Planets</h1>
                {props.planets.map((planet, index) => {
                    return(
                        <div className="card" key={index}>
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
                    )
                })}
            </div>
        )
        }
    
    

}