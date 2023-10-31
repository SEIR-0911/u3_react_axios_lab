import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Films(props) {
    let navigate = useNavigate()

  const showFilm = (index) => {
    // console.log('Starship', `${starship.name.replace(' ', "")}`)
    // navigate(`${starship.name.replace(' ', "")}`)
    navigate(`${index}`)
  }
  
    if (props.films.length === 0) {
    return <h3>Loading Please Wait</h3>;
  } else {
    return (
      <div className="Films top-list">
        <h1>Films</h1>
        {props.films.map((film, index) => {
          return (
            <div className="list"  onClick={() => showFilm(index)} key={index}>
              <h5>{film.title}</h5>
              
            </div>
          );
        })}
      </div>
    );
  }
}


