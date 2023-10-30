import { useEffect } from "react"

const PeopleList = (props) => {
    if(!props.peoples) {
        <h2>Loading characters please wait...</h2>
    } else {
        return (
            <div>
                <h2>Characters</h2>
                {props.peoples.map((people) => (
                    <div key = {people.name}>
                        <h3>{people.name}</h3>
                        <ul>
                            <li>Height: {people.height}</li>
                            <li>Mass: {people.mass}</li>
                            <li>Hair Color: {people.hair_color}</li>
                            <li>Skin Color: {people.skin_color}</li>
                            <li>Eye Color: {people.eye_color}</li>
                            <li>Birth Year: {people.birth_year}</li>
                            <li>Gender: {people.gender}</li>
                            <li>Home World: {people.homeworld}</li>
                            <li>Films: {people.films}</li>
                            <li>Species: {people.species}</li>
                            <li>Vehicles: {people.vehicles}</li>
                            <li>Starships: {people.starships}</li>
                        </ul>
                    </div>
                ))}

            </div>
        )
        
    }
}

export default PeopleList