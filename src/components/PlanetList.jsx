import { useEffect } from "react";

const PlanetList = (props) => {
    if (!props.planets) {
        return <h2>Loading planets please wait...</h2>
    } else {
        return (
            <div>
                <h2>Planets</h2>
                {props.planets.map((planet) => (
                    <div key = {planet.name}>
                        <h3>{planet.name}</h3>
                        <ul>
                            <li>Rotation Period: {planet.rotation_period}</li>
                            <li>Orbital Period: {planet.orbital_period}</li>
                            <li>Diameter: {planet.diameter}</li>
                            <li>Climate: {planet.climate}</li>
                            <li>Gravity: {planet.gravity}</li>
                            <li>Terrain: {planet.terrain}</li>
                            <li>Surface Water: {planet.surface_water}</li>
                            <li>Population: {planet.population}</li>
                            <li>Residents: {planet.residents}</li>
                            <li>Films: {planet.films}</li>
                        </ul>
                    </div>
                ))}

            </div>
        )
    }
}

export default PlanetList