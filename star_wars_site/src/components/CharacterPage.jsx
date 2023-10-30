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
        <div className="character-out">
            <h1>{character.name}</h1>
            <button className="go-back"><Link to="/characters">Back to Character List</Link></button>
        </div>
    ) : null;
}