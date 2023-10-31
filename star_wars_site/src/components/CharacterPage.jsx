import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function CharacterPage (props) {
    let { name } = useParams()

    const [character, setCharacter] = useState('')

    useEffect(() => {
        let selectedPerson = props.characters.find((person)=> person.name === name)
        setCharacter(selectedPerson)
    }, [props.characters, name])

    return character ? (
        <div className="character-outer">
            <h1 className="page-head character-head">{character.name}</h1>
            <div className="character-info">
                <div>Height: {character.height}</div>
                <div>Mass: {character.mass}</div>
                <div>Hair Color: {character.hair_color}</div>
                <div>Skin Color: {character.skin_color}</div>
                <div>Eye Color: {character.eye_color}</div>
                <div>Birth Year: {character.birth_year}</div>
                <div>Gender: {character.gender}</div>
            </div>
            <button className="go-back"><Link to="/characters" className="link">Back to Character List</Link></button>
        </div>
    ) : null;
}