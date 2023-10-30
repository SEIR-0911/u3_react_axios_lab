export default function Characters (props) {
    console.log(props.characters)
    if (props.characters.length === 0){
        return (
            <h2>loading...</h2>
        )
    } else {
        return (
            <div className="characters-outer">
                <h1 className="page-head">Characters</h1>
                <div className="outer">
                    {props.characters.map((person, index)=>(
                        <div className="character-card card" key={index}>
                            <h2>{person.name}</h2>
                            <div className="character-basics">
                                <div>Hair Color: {person.hair_color}</div>
                                <div>Eye Color: {person.eye_color}</div>
                                <div>Height: {person.height}</div>
                                <div>Birth Year: {person.birth_year}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}