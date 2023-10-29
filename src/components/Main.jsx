import StarshipList from './StarshipList'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <div className='routes-container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/starships" element={<StarshipList/>}/>
      </Routes>
    </div>
  )
}

export default Main