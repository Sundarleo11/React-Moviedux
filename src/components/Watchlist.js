import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movie, watchlist, toggleWatchList }) {
 

  return (
    <div>
      <h1 className="title">Your WatchList</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movies = movie.find((e) => e.id === id);
          return (
            <MovieCard
              key={id}
              movie={movies}
              toggleWatchList={toggleWatchList}
              isWatchlist={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}
