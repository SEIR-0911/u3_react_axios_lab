import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [filmsList, setFilmsList] = useState([])
  const [peopleList, setPeopleList] = useState([])
  const [planetsList, setPlanetsList] = useState([])
  const [speciesList, setSpeciesList] = useState([])
  const [starshipList, setStarshipList] = useState([])
  const [vehiclesList, setVehiclesList] = useState([])


  return (
    <div className='App'>
      <div className="card-grid">
      <Header />
      <Main 
      filmsList={filmsList}
      peopleList={peopleList}
      planetsList={planetsList}
      speciesList={speciesList}
      starshipList={starshipList}
      vehiclesList={vehiclesList}
      />
      <Footer />
    </div>
    </div>
    )
}

export default App


