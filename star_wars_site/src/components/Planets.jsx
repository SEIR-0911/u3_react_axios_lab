export default function Planets (props) {
    // console.log(props)
    if (props.planets.length === 0) {
        return (
            <h2 className="loading">loading...</h2>
        )
    } else {
        return (
            <div className="planets-outer">
                <h1 className="page-head">Planets</h1>
                <div className="outer">
                    {props.planets.map((planet, index)=>(
                        <div className="planets-card card" key={index}>
                            <h2>{planet.name}</h2>
                            <div className="planets-basics">
                                <div>Climate: {planet.climate}</div>
                                <div>Terrain: {planet.terrain}</div>
                                <div>Population: {planet.population}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}