import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

// components
import FilmsList from './components/FilmsList'
import Header from './components/Header'
import Home from './components/Home'
import Main from './components/Main'
import PeopleList from './components/PeopleList'
import PlanetsList from './components/PlanetsList'
import SpeciesList from './components/SpeciesList'
import StarshipsList from './components/StarshipList'
import VehiclesList from './components/VehiclesList'

// components p2
import FilmDetails from './components/FilmPage'
import PeopleDetails from './components/PeoplePage'
import PlanetDetails from './components/PlanetPage'
import SpeciesDetails from './components/SpeciesPage'
import ShipDetails from './components/StarshipPage'
import VehicleDetails from './components/VehiclePage'



function App() {
  const [films, setFilms] = useState('')
  const [people, setPeople] = useState('')
  const [planets, setPlanet] = useState('')
  const [species, setSpecies] = useState('')
  const [starships, setStarships] = useState('')
  const [vehicles, setVehicles] = useState('')

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/FilmsList" element={<FilmsList films={films} />} />
          <Route path="/FilmsList/:FilmUrl" element={<FilmDetails films={films} />} />

          <Route path="/PeopleList" element={<PeopleList people={people} />} />
          <Route path="/PeopleList/:peopleUrl" element={<PeopleDetails people={people} />} />

          <Route path="/PlanetsList" element={<PlanetsList planets={planets} />} />
          <Route path="/PlanetsList/:planetUrl" element={<PlanetDetails planets={planets} />} />

          <Route path="/SpeciesList" element={<SpeciesList species={species} />} />
          <Route path="/SpeciesList/:speciesUrl" element={<SpeciesDetails species={species} />} />

          <Route path="/StarshipList" element={<StarshipsList starships={starships} />} />
          <Route path="/StarshipList/:starshipUrl" element={<ShipDetails starships={starships} />} />

          <Route path="/VehiclesList" element={<VehiclesList vehicles={vehicles} />} />
          <Route path="/VehiclesList/:vehicleUrl" element={<VehicleDetails vehicles={vehicles} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
