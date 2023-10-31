import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PeopleList = (props) => {
    if(!props.peoples) {
        <h2>Loading characters please wait...</h2>
    } else {

        let navigate = useNavigate()

        const showPeople = (key) => {
            navigate(`${key}`)
        }

        return (
            <div className = "people-grid">
                <h2>List of Characters</h2>
                {props.peoples.map((people, key) => (
                    <div key = {key} onClick={() => showPeople(key)} className="card">
                        <h3>{people.name}</h3>
                        <ul>
                            <li>Birth Year: {people.birth_year}</li>
                            <li>Gender: {people.gender}</li>
                        </ul>
                    </div>
                ))}

            </div>
        )
    }
}

export default PeopleList