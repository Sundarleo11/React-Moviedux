import React from "react";
import '../styles.css';


export default function MovieCard({movie}){

const handlerError=(e)=>{

    e.target.src="images/default.jpg";
};
    return(
        <div key={movie.id} className="movie-card" onError={handlerError}>
        <img src={`images/${movie.image}`} alt={movie.title}></img>
        <div className="movie-card-info">
        <p className="movie-card-title">{movie.title}</p>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className="movie-card-rating">{movie.rating}</p>
       
      </div>
    </div>
    )

}

