import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import axios from 'axios'

      export default function Films (){
        let navigate =useNavigate()
        const [films, setFilms] = useState([])

        useEffect(() => {
            const getFilms = async ( ) => {
                const response = await axios.get(`${BASE_URL}films/`)
                setFilms(response.data.results)
            }
            getFilms()
        }, [])

            const showFilm = (key) => {
                navigate(`${key}`)
            }


        
    return films ?(
            <div className="films">
                <h1 className="page-title">Films</h1>
                
            {films.map((film, key) => (
                <div key={key} onClick={() =>showFilm(key)} className="card">
                        <div id="itm-card">
                            <h3>{film.title}</h3>
                            <button onClick={() => (navigate(`/FilmPage/${film.id}`))}>More Info</button>
                        </div>
                </div>
            ))}
        </div>
    ) : <h3>Content loading...</h3>
        
                   
        }