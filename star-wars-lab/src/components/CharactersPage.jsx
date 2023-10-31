//Show /details page
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from '../globals'


const CharactersPage = (props) => {

  let { id } = useParams()
  const [character, setCharacter] = useState()
  let navigate = useNavigate()


    useEffect(() => {
        const getCharacter = async () => {
                const response = await axios.get(`${BASE_URL}people/`)
                setCharacter(response.data.results[id])
            }
        getCharacter()
    })


  return character? (
    <div className="detail">
          <h1>{character.name}</h1>
      <div className="info-wrapper">
                <h3>Name: {character.title}</h3>
                <h5>Height: {character.height}</h5>
                <h5>Mass: {character.mass}</h5>
                <h5>Hair Color: {character.hair_color}</h5>
                <h5>Skin Color: {character.skin_color}</h5>
                <h5>Eye Color: {character.eye_color}</h5>
                <h5>Birth Year: {character.birth_year}</h5>
                <h5>Gender: {character.gender}</h5>
 

        </div>
        <button onClick={() => (navigate('/Characters'))}>  back</button>
    </div>
  ) : <h3>Finding characters...</h3>
}

export default CharactersPage
