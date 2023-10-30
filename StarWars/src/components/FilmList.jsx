import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../globals"

let response = ""
const FilmList = () => {
    const [Films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async() => {
        response = await axios.get(`${BASE_URL}/films`)
        setFilms(response.data.results)
        console.log(response)
    }
    getFilms()
},[])

if (!response) {
    return <h1> Loading Please Wait...</h1>
} else {
    return(
        <div className="Film">
            {
                Films.map((Film, key) => (
                    <div key={key}>
                        <h3>{Film.title}</h3>
                    </div>
                ))
            }
        </div>
    )}
}

export default FilmList