import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import Films from './Films'
import Character from './Characters'
import Home from './Home'
import Header from './Header'
import StarshipPage from './StarshipPage'
import CharacterPage from './CharacterPage'



function Main () {
    

    return (
        
        <div className="Main">
            <div className='header-container'>
                <Header/>
            </div>
            <Routes>
                <Route path='/StarshipList' element={<StarshipList/>}/>
                <Route path='/StarshipList/:id' element={<StarshipPage/>}/>
                <Route path='/Characters' element={<Character/>}/>
                <Route path='/Characters/:id' element={<CharacterPage/>}/>
                <Route path='/Films' element={<Films/>} />
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Main