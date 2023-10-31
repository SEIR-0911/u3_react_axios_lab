//Show /details page
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from '../globals'


const StarshipPage = (props) => {

  let { id } = useParams()
  const [starship, setStarship] = useState()
  let navigate = useNavigate()


    useEffect(() => {
        const getStarship = async () => {
                const response = await axios.get(`${BASE_URL}starships/`)
                setStarship(response.data.results[id])
            }
        getStarship()
    })


  return starship ? (
    <div className="detail">
          <h1>{starship.name}</h1>
      <div className="info-wrapper">
                <h3>Name: {starship.name}</h3>
                <h5>Max Atmosphering Speed: {starship.max_atmosphering_speed}</h5>
                <h5>Starship Class: {starship.starship_class}</h5>
                <h5>Hyperdrive Rating: {starship.hyperdrive_rating}</h5>
                <h5>Passengers: {starship.passengers}</h5>
                <h5>Crew: {starship.crew}</h5>
 

        </div>
        <button onClick={() => (navigate('/StarshipList'))}>  back</button>
    </div>
  ) : <h3>Finding starships...</h3>
}

export default StarshipPage
