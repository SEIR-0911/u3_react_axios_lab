export default function Films(props) {
  if (!props.films) {
    return <h1>Loading Please Wait</h1>;
  } else {
    return (
      <div className="Films">
        <h1>Films</h1>
        {props.films.map((film, index) => {
          return (
            <div className="card" key={index}>
              <h5>{film.title}</h5>
              <p>
                <strong>Episode ID:</strong> {film.episode_id}
              </p>
              <p>
                <strong>Director:</strong> {film.director}
              </p>
              <p>
                <strong>Producer:</strong> {film.producer}
              </p>
              <p>
                <strong>Release Date:</strong> {film.release_date}
              </p>
              <p>
                <strong>Opening Crawl:</strong> {film.opening_crawl}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
