export default function FilmsList (props) {


    if (props.filmsList.length > 0) {
        return(
            <div className="films-grid">
                {
                    props.filmsList.map((film) => (
                        <div key={film.url}> Title: {film.title} </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div>Waiting for films</div>
        )
    }
    
}