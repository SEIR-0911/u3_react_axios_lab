import Home from './Home'
import { Route, Routes } from 'react-router-dom'

import StarshipList from './StarshipList'
import FilmList from './FilmList'
import PlanetList from './PlanetList'
import PeopleList from './PeopleList'

const Main = () => {
  return (
    <div className='routes-container'>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/starships" element={<StarshipList/>}/>
        <Route path="/films" element={<FilmList/>}/>
        <Route path="/planets" element={<PlanetList/>}/>
        <Route path="/people" element={<PeopleList/>}/> 
      </Routes>
    </div>
  )
}

export default Main