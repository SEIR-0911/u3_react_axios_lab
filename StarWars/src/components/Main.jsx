import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import FilmList from './FilmList'
import Home from './Home'
import Header from './Header'

function Main () {
    return (
        <div className="Main">
             <div className='header-container'>
            <Header/>
        </div>
            <Routes>
                <Route path='/StarshipList' element={<StarshipList/>} />
                <Route path='/FilmsList' element={<FilmList/>} />
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}
export default Main