import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'


function Main () {

    return (
        <div className="main">
            <Routes>
                <Route path='/starships' element={<StarshipList/>} />
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Main