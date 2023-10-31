import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PlanetDetails() {
    const [planet, setPlanet] = useState();
    let {id} = useParams();

    useEffect(() => {
        const getPlanet = async() => {
            const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
            setPlanet(response.data);
        }
        getPlanet();
    },[id]);

    return planet ? (
        <div className="detail">
            <h2>Name: {planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <Link to="/planets"> Return to planet list</Link>
        </div>
    ) : <h3>Finding Planet...</h3>
}
