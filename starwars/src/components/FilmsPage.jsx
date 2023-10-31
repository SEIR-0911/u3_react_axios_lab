import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {BASE_URL} from '../../global'


export default function FilmDetails(){

    //setting up the individiual starship in state
    const [film, setFilm] = useState()
    //setting up the param to pull to be the ship's ID
    let {id} = useParams()
    
    useEffect(()=>{
      const getFilm = async() => {
        const response = await axios.get(`${BASE_URL}/films`)
        setFilm(response.data.results[id])
      }
      getFilm()
    },[])
    
    
    return film ? (
      <div className="card">
        <h2>Movie: {film.title}</h2> 
        <h3>Release Date: {film.release_date}</h3>
        <h3>Director: {film.director}</h3>
        <h3>Producer: {film.producer}</h3>
        
        <h3><Link to="/films"> Return to film list</Link></h3>
      </div>
    ) : <h3>Finding films...</h3>
    }