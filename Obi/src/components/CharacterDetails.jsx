import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CharacterDetails() {
    const [character, setCharacter] = useState();
    let {id} = useParams();

    useEffect(() => {
        const getCharacter = async() => {
            const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
            setCharacter(response.data);
        }
        getCharacter();
    },[id]);

    return character ? (
        <div className="detail">
            <h2>Name: {character.name}</h2>
            <p>Gender: {character.gender}</p>
            <p>Birth Year: {character.birth_year}</p>
            <Link to="/characters"> Return to character list</Link>
        </div>
    ) : <h3>Finding Character...</h3>
}
