export default function StarshipList (props) {
    // console.log(props)
    if (!props.starships.length === 0) {
        return (
            <h2 className="loading">loading...</h2>
        )
    } else {
        return (
            <div className="starship-outer outer">
                {props.starships.map((ship, index)=>(
                    <div className="starship-card card" key={index}>
                        <h2>{ship.name}</h2>
                        <div className="ship-basics">
                            <div>Manufactor: {ship.manufacturer}</div>
                            <div>Model: {ship.model}</div>
                            <div>Class: {ship.class}</div>
                        </div>
                        <div className="ship-techinal">
                            <h3>Technical Stats</h3>
                            <div>Length: {ship.length}</div>
                            <div>Max Speed: {ship.max_atmosphering_speed}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}