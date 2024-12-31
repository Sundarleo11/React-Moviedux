import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handlerSeachTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const fliterMovie = movies.filter((e) =>
    e.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="search word..."
        value={searchTerm}
        onChange={handlerSeachTerm}
      />
      <div className="movies-grid">
        {fliterMovie.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
