import { useState, useEffect } from "react"
import { BASE_URL } from "../global"
import axios from "axios"
import { useNavigate } from "react-router"




export default function FilmList(){

    const[films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const response = await axios.get(`${BASE_URL}/films/`)
            setFilms(response.data.results)
        }
        getFilms()
    },[])

    let navigate = useNavigate()

    const showFilms = (key) => {
        navigate(`${key}`)
    }
    return films ?(
        <div className="FilmList">
            <h2>Film List</h2>
            {films.map((film, key) => (
                <div key={key} onClick={()=>showFilms(key)} className="card">
                    <h3>{film.title}</h3>
                </div>
            ))}
        </div>
    ) : <h3>Loading...</h3>
}