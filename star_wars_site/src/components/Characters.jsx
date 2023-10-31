import { Link, useNavigate } from "react-router-dom"

export default function Characters (props) {
    let navigate = useNavigate()
    const showCharacter = (person) => {
        navigate(`${person.name}`)
    }
    
    console.log(props.characters)
    if (props.characters.length === 0){
        return (
            <h2>loading...</h2>
        )
    } else {
        return (
            <div className="characters-outer">
                <h1 className="page-head character-head">Characters</h1>
                <div className="outer">
                    {props.characters.map((person, index)=>(
                        <div className="character-card card" onClick={()=>showCharacter(person)} key={index}>
                            <h2>{person.name}</h2>
                            <div className="character-basics">
                                <div>Hair Color: {person.hair_color}</div>
                                <div>Eye Color: {person.eye_color}</div>
                                <div>Height: {person.height}</div>
                                <div>Birth Year: {person.birth_year}</div>
                            </div>
                            <h3 className="more-info">Click for more info</h3>
                        </div>
                    ))}
                </div>
                <button className="go-back"><Link to="/" className="link">Home</Link></button>
            </div>
        )
    }
}