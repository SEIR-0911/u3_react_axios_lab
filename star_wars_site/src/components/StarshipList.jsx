
export default function StarshipList (props) {
    // console.log(props)
    if (!props.starships.length === 0) {
        return (
            <h1>loading...</h1>
        )
    } else {
        return (
            <div className="starship-outer">
                {props.starships.map((ship, index)=>(
                    <div className="starship-card" key={index}>
                        <h2>{ship.name}</h2>
                        <div className="ship-basics">
                            <div>Manufactor: {ship.manufacturer}</div>
                            <div>Model: {ship.model}</div>
                            <div>Class: {ship.class}</div>
                        </div>
                        <div className="ship-techinal">
                            <div>Length: {ship.length}</div>
                            <div>Max Speed: {ship.max_atmosphering_speed}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}