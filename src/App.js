import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import React, { useState, useEffect } from "react";

function App() {
  const [movie, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchList = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container"></div>
      <Header></Header>

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">WatchList</Link>
            </li>
          </ul>
        </nav>
        {watchlist}
        <Routes>
          <Route
            path="/"
            element={
              <MoviesGrid
                watchlist={watchlist}
                movie={movie}
                toggleWatchList={toggleWatchList}
              ></MoviesGrid>
            }
          ></Route>

          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                movie={movie}
                toggleWatchList={toggleWatchList}
              ></Watchlist>
            }
          ></Route>
        </Routes>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
