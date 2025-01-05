import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({movie,watchlist,toggleWatchList}) {
 

  const [searchTerm, setSearchTerm] = useState("");
  const [genra, setGenera] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handlerSeachTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlergenraTerm = (e) => {
    setGenera(e.target.value);
  };

  const handlerRatingTerm = (e) => {
    setRating(e.target.value);
  };

  const matchesgenra=(movie,genra)=>{  
   return genra==='All Genres' || movie.genre.toLowerCase()===genra.toLowerCase();
  }

  const matchesRating=(movie,rating)=>{  
    switch(rating){
      case 'All':
      return true;
      case 'Good':
        return movie.rating>=8;
      case 'Ok':
        return movie.rating>=5 && movie.rating<8;
      case 'Bad':
       return movie.rating<5;
       default:
        return false;
    }
    
 
   }

  const matchSearchitem=(movies,searchTerm)=>{
    return movies.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

  const fliterMovie = movie.filter((movie) =>
  matchesgenra(movie,genra) && 
  matchesRating(movie,rating) &&
  matchSearchitem(movie,searchTerm)
    
  );

 

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="search word..."
        value={searchTerm}
        onChange={handlerSeachTerm}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genra</label>
          <select className="filter-dropdown" value={genra} onChange={handlergenraTerm}>
            <option>All genras</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantancy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select className="filter-dropdown" value={rating} onChange={handlerRatingTerm}>
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
       
      <div className="movies-grid">
        {fliterMovie.map((movie) => (
          <MovieCard movie={movie} key={movie.id} isWatchlist={watchlist.includes(movie.id)} toggleWatchList={toggleWatchList} ></MovieCard>
        ))}
      </div>
    </div>

  );
}
