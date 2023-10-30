import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {BASE_URL} from '../../global'


export default function CharacterDetails(){

    //setting up the individiual starship in state
    const [character, setCharacter] = useState()
    //setting up the param to pull to be the ship's ID
    let {id} = useParams()
    
    useEffect(()=>{
      const getCharacter = async() => {
        const response = await axios.get(`${BASE_URL}/people`)
        setCharacter(response.data.results[id])
      }
      getCharacter()
    },[])
    
    
    return character ? (
      <div className="detail">
        <h2>Name: {character.name}</h2> 
        <Link to="/Characters"> Return to Character list</Link>
      </div>
    ) : <h3>Finding Characters...</h3>
    }