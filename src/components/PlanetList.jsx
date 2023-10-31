import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

const PlanetList = (props) => {
    if (!props.planets) {
        return <h2>Loading planets please wait...</h2>
    } else {

        let navigate = useNavigate()

        const showPlanet = (key) => {
            navigate(`${key}`)
        }

        return (
            <div className = "planet-grid">
                <h2>List of Planets</h2>
                {props.planets.map((planet, key) => (
                    <div key = {key} onClick={() => showPlanet(key)} className="card">
                        <h3>{planet.name}</h3>
                        <ul>
                            <li>Climate: {planet.climate}</li>
                            <li>Terrain: {planet.terrain}</li> 
                            <li>Population: {planet.population}</li>
                        </ul>
                    </div>
                ))}

            </div>
        )
    }
}

export default PlanetList