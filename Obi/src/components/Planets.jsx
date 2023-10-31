import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PlanetsList() {
    const [planets, setPlanets] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const getPlanets = async() => {
            const response = await axios.get(`https://swapi.dev/api/planets/`);
            setPlanets(response.data.results);
        }
        getPlanets();
    }, []);

    const showPlanet = (planetId) => {
        navigate(`/planets/${planetId}`);
    }

    return planets ? (
        <div className="planet">
            <h1>List of Planets</h1>
            {planets.map((planet) => {
        const planetId = planet.url.match(/(\d+)\/$/)[1];
        return(
                <div key={planetId} onClick={() => showPlanet(planetId)} className="card">
                    <h3>{planet.name}</h3>
                    <p>Climate: {planet.climate}</p>
                    <p>Population: {planet.population}</p>
                </div>
        )
        })}
        </div>
    ) : (
        <h3>Loading Planets...</h3>
      );
}
