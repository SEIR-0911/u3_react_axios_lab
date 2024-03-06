import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import FilmsList from './components/FilmsList'
import FilmDetails from './components/FilmDetails'
import PlanetsList from './components/PlanetsList'
import PlanetDetails from './components/PlanetDetails'
import VehiclesList from './components/VehiclesList'
import VehicleDetails from './components/VehicleDetails'
import PeopleList from './components/PeopleList'
import PeopleDetails from './components/PeopleDetails'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/films/:id" component={FilmDetails} />
          <Route path="/films" component={FilmsList} />
          <Route path="/planets/:id" component={PlanetDetails} />
          <Route path="/planets" component={PlanetsList} />
          <Route path="/vehicles/:id" component={VehicleDetails} />
          <Route path="/vehicles" component={VehiclesList} />
          <Route path="/people/:id" component={PeopleDetails} />
          <Route path="/people" component={PeopleList} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App