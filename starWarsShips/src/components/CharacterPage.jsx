//show /details page
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const CharacterPage = (props) => {
  //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams()
  console.log(id)
  const [character, setCharacter] = useState('')

  useEffect(()=>{
    const getCharacter = async() => {
      const response = await axios.get(`https://swapi.dev/api/people/`)
      setCharacter(response.data.results[id])
    }
    getCharacter()
  },[])

  console.log(character)

  return character ? (
    <div className="detail">
      <p>{character.name}</p>
      <p>{character.height}</p>
      <p>{character.mass}</p>
      

      <Link to="/character">Back to Listings</Link>
    </div>
  ) : null;
}

export default CharacterPage