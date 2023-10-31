import { useNavigate } from "react-router-dom"

export default function CharacterObj({ characters }) {

    let navigate=useNavigate()

    function showPerson(character){
        navigate(`${character.name}`)
    }

    return (
        characters.length >= 1 ?
            characters.map((character) => {
                return (
                    <div className='card' key={character.name} onClick={() => showPerson(character)}>
                        <h1>{character.name}</h1>
                    </div>
                )
            }) : <h1>Loading Travel Companions...</h1>
    )
}