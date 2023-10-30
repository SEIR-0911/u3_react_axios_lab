export default function Films (props) {
    console.log(props.films)
    if (props.films === 0){
        return (
            <h2>loading...</h2>
        )
    } else {
        return (
            <div className="films-outer">
                <h1 className="page-head">Films</h1>
                <div className="outer">
                    {props.films.map((film)=>(
                        <div className="films-card card">
                            <h2>{film.title}</h2>
                            <div>Episode {film.episode_id}</div>
                            <div>{film.opening_crawl}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}