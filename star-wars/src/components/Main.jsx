import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'
import Header from './Header'
import StarshipDetails from './StarshipDetails'


function Main () {

    return (
        
        <div className="main">
            <div className='header-container'>
                <Header/>
            </div>
            <Routes>
                <Route path='/starships' element={<StarshipList/>} />
                <Route path='starships/:id' element={<StarshipDetails/>} />
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Main