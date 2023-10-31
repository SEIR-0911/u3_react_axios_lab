import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../globals"

let response = ""
const PeopleList = () => {
    const [People, setPeople] = useState([])

    useEffect(() => {
        const getPeople = async() => {
        response = await axios.get(`${BASE_URL}/people`)
        setPeople(response.data.results)
        console.log(response)
    }
    getPeople()
},[])

if (!response) {
    return <h3> Loading Please Wait...</h3>
} else {
    return(
        <div className="People">
            {
                People.map((People, key) => (
                    <div key={key}>
                        <h3>{People.name}</h3>
                    </div>
                ))
            }
        </div>
    )}
}

export default PeopleList